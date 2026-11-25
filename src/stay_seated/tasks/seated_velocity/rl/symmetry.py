"""Left-right symmetry transforms for seated-velocity training."""

# pyright: reportPrivateImportUsage=false

from __future__ import annotations

from math import prod
from typing import TYPE_CHECKING, Any, cast

import torch
from mjlab.envs.mdp.actions.actions import BaseAction
from tensordict import TensorDict

if TYPE_CHECKING:
  from mjlab.rl import RslRlVecEnvWrapper


_SIGN_FLIP_JOINT_SUFFIXES = (
  "hip_roll_joint",
  "hip_yaw_joint",
  "ankle_roll_joint",
  "shoulder_roll_joint",
  "shoulder_yaw_joint",
  "wrist_roll_joint",
  "wrist_yaw_joint",
)
_SIGN_FLIP_CENTER_JOINTS = {"waist_roll_joint", "waist_yaw_joint"}


class SeatedVelocitySymmetry:
  """Mirror observations and actions across the robot's sagittal plane."""

  def __init__(self, env: RslRlVecEnvWrapper | Any):
    self.env = env
    base_env = env.unwrapped
    obs_manager = base_env.observation_manager

    self._term_slices: dict[str, dict[str, slice]] = {}
    for group_name, term_names in obs_manager.active_terms.items():
      offset = 0
      slices = {}
      for term_name, term_dim in zip(
        term_names,
        obs_manager.group_obs_term_dim[group_name],
        strict=True,
      ):
        width = prod(term_dim)
        slices[term_name] = slice(offset, offset + width)
        offset += width
      self._term_slices[group_name] = slices

    robot = base_env.scene["robot"]
    action_term = cast(BaseAction, base_env.action_manager.get_term("joint_pos"))
    device = torch.device(env.device)
    self._joint_index, self._joint_sign = _joint_transform(robot.joint_names, device)
    self._action_index, self._action_sign = _joint_transform(
      action_term.target_names, device
    )

  def mirror_observations(self, obs: TensorDict) -> TensorDict:
    mirrored = obs.clone()
    for group_name, term_slices in self._term_slices.items():
      group_obs = mirrored[group_name]
      for term_name, term_slice in term_slices.items():
        values = group_obs[..., term_slice]
        group_obs[..., term_slice] = self._mirror_term(term_name, values)
    return mirrored

  def mirror_actions(self, actions: torch.Tensor) -> torch.Tensor:
    return actions[..., self._action_index] * self._action_sign

  def _mirror_term(self, name: str, values: torch.Tensor) -> torch.Tensor:
    values = values.clone()

    if name in {"joint_pos", "joint_vel", "actions"}:
      return values[..., self._joint_index] * self._joint_sign
    if name in {"base_ang_vel", "stool_vel_local"}:
      if name == "stool_vel_local":
        values[..., :3] = _mirror_polar_vector(values[..., :3])
        values[..., 3:6] = _mirror_axial_vector(values[..., 3:6])
        return values
      return _mirror_axial_vector(values)
    if name in {
      "projected_gravity",
      "base_lin_vel",
      "stool_projected_gravity",
    }:
      return _mirror_polar_vector(values)
    if name == "command":
      values[..., 1:] = -values[..., 1:]
      return values
    if name == "stool_pose_local":
      values[..., :3] = _mirror_polar_vector(values[..., :3])
      values[..., 3:6] = _mirror_polar_vector(values[..., 3:6])
      values[..., 6:9] = _mirror_polar_vector(values[..., 6:9])
      return values
    if name in {
      "foot_height",
      "foot_air_time",
      "foot_contact",
      "foot_contact_stool",
    }:
      return _swap_feet(values)
    if name in {"foot_contact_forces", "foot_contact_forces_stool"}:
      return _mirror_foot_vectors(values)
    if name == "stool_caster_contact_forces":
      return _mirror_vector_sequence(values)
    if name == "pelvis_contact_stool":
      return values[..., [0, 2, 1]]
    if name == "pelvis_contact_forces_stool":
      shaped = values.reshape(*values.shape[:-1], 3, 3)
      shaped = shaped[..., [0, 2, 1], :]
      shaped[..., 1] = -shaped[..., 1]
      return shaped.reshape_as(values)

    # Scalar contact flags are invariant. The five caster labels have no exact
    # left-right pairing, so their critic-only flags retain their original order.
    return values


def seated_velocity_symmetry_augmentation(
  env: RslRlVecEnvWrapper | Any,
  obs: TensorDict | None,
  actions: torch.Tensor | None,
) -> tuple[TensorDict | None, torch.Tensor | None]:
  """Append sagittal-plane mirrored samples to an RSL-RL mini-batch."""
  transform = getattr(env, "_seated_velocity_symmetry_transform", None)
  if transform is None:
    transform = SeatedVelocitySymmetry(env)
    env_with_cache = cast(Any, env)
    env_with_cache._seated_velocity_symmetry_transform = transform

  augmented_obs = None
  if obs is not None:
    augmented_obs = cast(
      TensorDict,
      torch.cat((obs, transform.mirror_observations(obs)), dim=0),
    )

  augmented_actions = None
  if actions is not None:
    augmented_actions = torch.cat(
      (actions, transform.mirror_actions(actions)),
      dim=0,
    )
  return augmented_obs, augmented_actions


def _joint_transform(
  joint_names: tuple[str, ...] | list[str],
  device: torch.device,
) -> tuple[torch.Tensor, torch.Tensor]:
  name_to_index = {name: index for index, name in enumerate(joint_names)}
  mirrored_indices = []
  signs = []
  for index, name in enumerate(joint_names):
    if name.startswith("left_"):
      mirrored_name = f"right_{name.removeprefix('left_')}"
    elif name.startswith("right_"):
      mirrored_name = f"left_{name.removeprefix('right_')}"
    else:
      mirrored_name = name
    mirrored_indices.append(name_to_index.get(mirrored_name, index))
    signs.append(
      -1.0
      if name in _SIGN_FLIP_CENTER_JOINTS or name.endswith(_SIGN_FLIP_JOINT_SUFFIXES)
      else 1.0
    )
  return (
    torch.tensor(mirrored_indices, device=device, dtype=torch.long),
    torch.tensor(signs, device=device),
  )


def _mirror_polar_vector(vector: torch.Tensor) -> torch.Tensor:
  mirrored = vector.clone()
  mirrored[..., 1] = -mirrored[..., 1]
  return mirrored


def _mirror_axial_vector(vector: torch.Tensor) -> torch.Tensor:
  mirrored = vector.clone()
  mirrored[..., 0] = -mirrored[..., 0]
  mirrored[..., 2] = -mirrored[..., 2]
  return mirrored


def _swap_feet(values: torch.Tensor) -> torch.Tensor:
  shaped = values.reshape(*values.shape[:-1], 2, -1)
  return shaped[..., [1, 0], :].reshape_as(values)


def _mirror_foot_vectors(values: torch.Tensor) -> torch.Tensor:
  shaped = values.reshape(*values.shape[:-1], 2, -1, 3)
  shaped = shaped[..., [1, 0], :, :]
  shaped[..., 1] = -shaped[..., 1]
  return shaped.reshape_as(values)


def _mirror_vector_sequence(values: torch.Tensor) -> torch.Tensor:
  shaped = values.reshape(*values.shape[:-1], -1, 3)
  shaped[..., 1] = -shaped[..., 1]
  return shaped.reshape_as(values)
