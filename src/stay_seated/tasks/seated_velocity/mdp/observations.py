from __future__ import annotations

from typing import TYPE_CHECKING

import torch
from mjlab.entity import Entity
from mjlab.managers.scene_entity_config import SceneEntityCfg
from mjlab.sensor import ContactSensor
from mjlab.sensor.terrain_height_sensor import TerrainHeightSensor
from mjlab.utils.lab_api.math import (
  quat_apply,
  quat_apply_inverse,
  quat_conjugate,
  quat_mul,
)

if TYPE_CHECKING:
  from mjlab.envs import ManagerBasedRlEnv

_ROBOT_CFG = SceneEntityCfg("robot")
_STOOL_CFG = SceneEntityCfg("stool")


def foot_height(env: ManagerBasedRlEnv, sensor_name: str) -> torch.Tensor:
  """Per-foot vertical clearance above terrain.

  Returns:
    Tensor of shape [B, F] where F is the number of frames (feet).
  """
  sensor = env.scene[sensor_name]
  assert isinstance(sensor, TerrainHeightSensor), (
    f"foot_height requires a TerrainHeightSensor, got {type(sensor).__name__}"
  )
  return sensor.data.heights


def foot_air_time(env: ManagerBasedRlEnv, sensor_name: str) -> torch.Tensor:
  sensor: ContactSensor = env.scene[sensor_name]
  sensor_data = sensor.data
  current_air_time = sensor_data.current_air_time
  assert current_air_time is not None
  return current_air_time


def stool_pose_local(
  env: ManagerBasedRlEnv,
  reference_cfg: SceneEntityCfg = _ROBOT_CFG,
  stool_cfg: SceneEntityCfg = _STOOL_CFG,
) -> torch.Tensor:
  ref_pos_w, ref_quat_w = _frame_pose(env, reference_cfg)

  stool: Entity = env.scene[stool_cfg.name]

  pos_local = quat_apply_inverse(ref_quat_w, stool.data.root_link_pos_w - ref_pos_w)
  quat_local = quat_mul(quat_conjugate(ref_quat_w), stool.data.root_link_quat_w)

  rot6d_local = _quat_to_tangent_and_normal(quat_local)

  stool_states = torch.cat([pos_local, rot6d_local], dim=-1)
  return stool_states


def stool_vel_local(
  env: ManagerBasedRlEnv,
  reference_cfg: SceneEntityCfg = _ROBOT_CFG,
  stool_cfg: SceneEntityCfg = _STOOL_CFG,
) -> torch.Tensor:
  _, ref_quat_w = _frame_pose(env, reference_cfg)

  stool: Entity = env.scene[stool_cfg.name]

  lin_vel_local = quat_apply_inverse(ref_quat_w, stool.data.root_link_lin_vel_w)
  ang_vel_local = quat_apply_inverse(ref_quat_w, stool.data.root_link_ang_vel_w)
  return torch.cat((lin_vel_local, ang_vel_local), dim=-1)


def stool_projected_gravity(
  env: ManagerBasedRlEnv,
  stool_cfg: SceneEntityCfg = _STOOL_CFG,
) -> torch.Tensor:
  stool: Entity = env.scene[stool_cfg.name]
  return stool.data.projected_gravity_b


def contact(env: ManagerBasedRlEnv, sensor_name: str) -> torch.Tensor:
  sensor: ContactSensor = env.scene[sensor_name]
  sensor_data = sensor.data
  assert sensor_data.found is not None
  return (sensor_data.found > 0).float()


def contact_forces(env: ManagerBasedRlEnv, sensor_name: str) -> torch.Tensor:
  sensor: ContactSensor = env.scene[sensor_name]
  sensor_data = sensor.data
  assert sensor_data.force is not None
  forces_flat = sensor_data.force.flatten(start_dim=1)
  return torch.sign(forces_flat) * torch.log1p(torch.abs(forces_flat))


def _frame_pose(
  env: ManagerBasedRlEnv,
  asset_cfg: SceneEntityCfg,
) -> tuple[torch.Tensor, torch.Tensor]:
  asset: Entity = env.scene[asset_cfg.name]
  if asset_cfg.body_ids:
    pos = asset.data.body_link_pos_w[:, asset_cfg.body_ids, :].squeeze(1)
    quat = asset.data.body_link_quat_w[:, asset_cfg.body_ids, :].squeeze(1)
  else:
    pos = asset.data.root_link_pos_w
    quat = asset.data.root_link_quat_w
  return pos, quat


@torch.jit.script
def _quat_to_tangent_and_normal(q: torch.Tensor) -> torch.Tensor:
  tangent = torch.zeros_like(q[..., :3])
  normal = torch.zeros_like(q[..., :3])
  tangent[..., 0] = 1.0
  normal[..., 2] = 1.0
  return torch.cat((quat_apply(q, tangent), quat_apply(q, normal)), dim=-1)
