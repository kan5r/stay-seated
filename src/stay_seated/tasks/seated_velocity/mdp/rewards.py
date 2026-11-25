from __future__ import annotations

from typing import TYPE_CHECKING

import torch
from mjlab.entity import Entity
from mjlab.managers.reward_manager import RewardTermCfg
from mjlab.managers.scene_entity_config import SceneEntityCfg
from mjlab.sensor import BuiltinSensor, ContactSensor
from mjlab.sensor.terrain_height_sensor import TerrainHeightSensor
from mjlab.utils.lab_api.math import quat_apply_inverse
from mjlab.utils.lab_api.string import resolve_matching_names_values

if TYPE_CHECKING:
  from mjlab.envs import ManagerBasedRlEnv

_ROBOT_CFG = SceneEntityCfg("robot")
_STOOL_CFG = SceneEntityCfg("stool")


def track_linear_velocity(
  env: ManagerBasedRlEnv,
  std: float,
  command_name: str,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  asset: Entity = env.scene[asset_cfg.name]
  command = env.command_manager.get_command(command_name)
  assert command is not None, f"Command '{command_name}' not found."
  actual = asset.data.root_link_lin_vel_b
  xy_error = torch.sum(torch.square(command[:, :2] - actual[:, :2]), dim=1)
  z_error = torch.square(actual[:, 2])
  return torch.exp(-(xy_error + z_error) / std**2)


def track_angular_velocity(
  env: ManagerBasedRlEnv,
  std: float,
  command_name: str,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  asset: Entity = env.scene[asset_cfg.name]
  command = env.command_manager.get_command(command_name)
  assert command is not None, f"Command '{command_name}' not found."
  actual = asset.data.root_link_ang_vel_b
  z_error = torch.square(command[:, 2] - actual[:, 2])
  xy_error = torch.sum(torch.square(actual[:, :2]), dim=1)
  return torch.exp(-(z_error + 0.05 * xy_error) / std**2)


class upright:
  def __init__(self, cfg, env: ManagerBasedRlEnv):
    del cfg, env

  def __call__(
    self,
    env: ManagerBasedRlEnv,
    std: float,
    asset_cfg: SceneEntityCfg = _ROBOT_CFG,
  ) -> torch.Tensor:
    asset: Entity = env.scene[asset_cfg.name]
    if asset_cfg.body_ids:
      body_quat_w = asset.data.body_link_quat_w[:, asset_cfg.body_ids, :].squeeze(1)
      gravity_w = asset.data.gravity_vec_w
      projected_gravity_b = quat_apply_inverse(body_quat_w, gravity_w)
    else:
      projected_gravity_b = asset.data.projected_gravity_b
    xy_squared = torch.sum(torch.square(projected_gravity_b[:, :2]), dim=1)
    return torch.exp(-xy_squared / std**2)

  def reset(self, env_ids: torch.Tensor) -> None:
    del env_ids


def body_angular_velocity_penalty(
  env: ManagerBasedRlEnv,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  """Penalize excessive body angular velocities."""
  asset: Entity = env.scene[asset_cfg.name]
  ang_vel = asset.data.body_link_ang_vel_w[:, asset_cfg.body_ids, :]
  ang_vel = ang_vel.squeeze(1)
  ang_vel_xy = ang_vel[:, :2]  # Don't penalize z-angular velocity.
  return torch.sum(torch.square(ang_vel_xy), dim=1)


def angular_momentum_penalty(
  env: ManagerBasedRlEnv,
  sensor_name: str,
) -> torch.Tensor:
  """Penalize whole-body angular momentum to encourage natural arm swing."""
  angmom_sensor: BuiltinSensor = env.scene[sensor_name]
  angmom = angmom_sensor.data
  angmom_magnitude_sq = torch.sum(torch.square(angmom), dim=-1)
  angmom_magnitude = torch.sqrt(angmom_magnitude_sq)
  env.extras["log"]["Metrics/angular_momentum_mean"] = torch.mean(angmom_magnitude)
  return angmom_magnitude_sq


def self_collision_cost(
  env: ManagerBasedRlEnv,
  sensor_name: str,
  force_threshold: float = 10.0,
) -> torch.Tensor:
  """Penalize self-collisions."""
  sensor: ContactSensor = env.scene[sensor_name]
  data = sensor.data
  if data.force_history is not None:
    force_mag = torch.norm(data.force_history, dim=-1)
    hit = (force_mag > force_threshold).any(dim=1)
    return hit.sum(dim=-1).float()
  assert data.found is not None
  return data.found.sum(dim=-1).float()


def stool_upright(
  env: ManagerBasedRlEnv,
  std: float,
  stool_cfg: SceneEntityCfg = _STOOL_CFG,
) -> torch.Tensor:
  stool: Entity = env.scene[stool_cfg.name]
  xy_squared = torch.sum(torch.square(stool.data.projected_gravity_b[:, :2]), dim=1)
  return torch.exp(-xy_squared / std**2)


def pelvis_on_stool(
  env: ManagerBasedRlEnv,
  sensor_name: str,
  reference_cfg: SceneEntityCfg = _ROBOT_CFG,
  stool_cfg: SceneEntityCfg = _STOOL_CFG,
  xy_std: float = 0.20,
  z_offset: float = 0.28,
  z_std: float = 0.18,
) -> torch.Tensor:
  robot: Entity = env.scene[reference_cfg.name]
  stool: Entity = env.scene[stool_cfg.name]
  if reference_cfg.body_ids:
    pelvis_pos = robot.data.body_link_pos_w[:, reference_cfg.body_ids, :].squeeze(1)
  else:
    pelvis_pos = robot.data.root_link_pos_w

  rel = pelvis_pos - stool.data.root_link_pos_w
  xy_reward = torch.exp(-torch.sum(torch.square(rel[:, :2]), dim=1) / xy_std**2)
  z_reward = torch.exp(-torch.square(rel[:, 2] - z_offset) / z_std**2)

  sensor: ContactSensor = env.scene[sensor_name]
  assert sensor.data.found is not None
  contact_bonus = torch.any(sensor.data.found > 0, dim=1).float()
  return 0.5 * xy_reward * z_reward + 0.5 * contact_bonus


class posture:
  """Reward staying close to the default joint pose with per-joint tolerances."""

  def __init__(self, cfg: RewardTermCfg, env: ManagerBasedRlEnv):
    asset_cfg: SceneEntityCfg = cfg.params["asset_cfg"]
    asset: Entity = env.scene[asset_cfg.name]
    default_joint_pos = asset.data.default_joint_pos
    assert default_joint_pos is not None
    self.default_joint_pos = default_joint_pos

    _, joint_names = asset.find_joints(asset_cfg.joint_names)
    _, _, std = resolve_matching_names_values(
      data=cfg.params["std"],
      list_of_strings=joint_names,
    )
    self.std = torch.tensor(std, device=env.device, dtype=torch.float32)

  def __call__(
    self,
    env: ManagerBasedRlEnv,
    std,
    asset_cfg: SceneEntityCfg = _ROBOT_CFG,
  ) -> torch.Tensor:
    del std
    asset: Entity = env.scene[asset_cfg.name]
    current_joint_pos = asset.data.joint_pos[:, asset_cfg.joint_ids]
    desired_joint_pos = self.default_joint_pos[:, asset_cfg.joint_ids]
    error_squared = torch.square(current_joint_pos - desired_joint_pos)
    return torch.exp(-torch.mean(error_squared / self.std**2, dim=1))


def seated_still(
  env: ManagerBasedRlEnv,
  command_name: str,
  command_threshold: float = 0.1,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  """Penalize joint deviation from the seated default pose when commanded still."""
  asset: Entity = env.scene[asset_cfg.name]
  default_joint_pos = asset.data.default_joint_pos
  assert default_joint_pos is not None
  diff_angle = (
    asset.data.joint_pos[:, asset_cfg.joint_ids]
    - default_joint_pos[:, asset_cfg.joint_ids]
  )
  cost = torch.sum(torch.square(diff_angle), dim=1)
  command = env.command_manager.get_command(command_name)
  if command is not None:
    linear_norm = torch.norm(command[:, :2], dim=1)
    angular_norm = torch.abs(command[:, 2])
    active = (linear_norm + angular_norm <= command_threshold).float()
    cost = cost * active
  return cost


def feet_slip(
  env: ManagerBasedRlEnv,
  sensor_name: str,
  command_name: str,
  command_threshold: float = 0.01,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  asset: Entity = env.scene[asset_cfg.name]
  contact_sensor: ContactSensor = env.scene[sensor_name]
  command = env.command_manager.get_command(command_name)
  assert command is not None
  linear_norm = torch.norm(command[:, :2], dim=1)
  angular_norm = torch.abs(command[:, 2])
  active = (linear_norm + angular_norm > command_threshold).float()
  assert contact_sensor.data.found is not None
  in_contact = (contact_sensor.data.found > 0).float()
  foot_vel_xy = asset.data.site_lin_vel_w[:, asset_cfg.site_ids, :2]
  vel_xy_norm = torch.norm(foot_vel_xy, dim=-1)
  cost = torch.sum(torch.square(vel_xy_norm) * in_contact, dim=1) * active
  num_in_contact = torch.sum(in_contact)
  mean_slip_vel = torch.sum(vel_xy_norm * in_contact) / torch.clamp(
    num_in_contact, min=1
  )
  env.extras["log"]["Metrics/slip_velocity_mean"] = mean_slip_vel
  return cost


def feet_clearance(
  env: ManagerBasedRlEnv,
  target_height: float,
  height_sensor_name: str,
  command_name: str | None = None,
  command_threshold: float = 0.01,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  """Penalize deviation from target clearance height, weighted by foot velocity."""
  asset: Entity = env.scene[asset_cfg.name]
  height_sensor = env.scene[height_sensor_name]
  assert isinstance(height_sensor, TerrainHeightSensor), (
    f"feet_clearance requires a TerrainHeightSensor, got {type(height_sensor).__name__}"
  )
  foot_height = height_sensor.data.heights
  foot_vel_xy = asset.data.site_lin_vel_w[:, asset_cfg.site_ids, :2]
  vel_norm = torch.norm(foot_vel_xy, dim=-1)
  delta = torch.abs(foot_height - target_height)
  cost = torch.sum(delta * vel_norm, dim=1)
  if command_name is not None:
    command = env.command_manager.get_command(command_name)
    if command is not None:
      linear_norm = torch.norm(command[:, :2], dim=1)
      angular_norm = torch.abs(command[:, 2])
      active = (linear_norm + angular_norm > command_threshold).float()
      cost = cost * active
  return cost


def soft_landing(
  env: ManagerBasedRlEnv,
  sensor_name: str,
  command_name: str | None = None,
  command_threshold: float = 0.05,
) -> torch.Tensor:
  contact_sensor: ContactSensor = env.scene[sensor_name]
  sensor_data = contact_sensor.data
  assert sensor_data.force is not None
  force_magnitude = torch.norm(sensor_data.force, dim=-1)
  first_contact = contact_sensor.compute_first_contact(dt=env.step_dt)
  landing_impact = force_magnitude * first_contact.float()
  cost = torch.sum(landing_impact, dim=1)
  num_landings = torch.sum(first_contact.float())
  mean_landing_force = torch.sum(landing_impact) / torch.clamp(num_landings, min=1)
  env.extras["log"]["Metrics/landing_force_mean"] = mean_landing_force
  if command_name is not None:
    command = env.command_manager.get_command(command_name)
    if command is not None:
      linear_norm = torch.norm(command[:, :2], dim=1)
      angular_norm = torch.abs(command[:, 2])
      active = (linear_norm + angular_norm > command_threshold).float()
      cost = cost * active
  return cost
