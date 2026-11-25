from __future__ import annotations

from typing import TYPE_CHECKING

import torch
from mjlab.entity import Entity
from mjlab.managers.scene_entity_config import SceneEntityCfg

if TYPE_CHECKING:
  from mjlab.envs import ManagerBasedRlEnv

_ROBOT_CFG = SceneEntityCfg("robot")


def _velocity_tracking_abs_error(
  env: ManagerBasedRlEnv,
  command_name: str,
  axis: int,
  *,
  angular: bool,
  asset_cfg: SceneEntityCfg,
) -> torch.Tensor:
  asset: Entity = env.scene[asset_cfg.name]
  command = env.command_manager.get_command(command_name)
  assert command is not None, f"Command '{command_name}' not found."
  actual = asset.data.root_link_ang_vel_b if angular else asset.data.root_link_lin_vel_b
  return torch.abs(command[:, axis] - actual[:, axis])


def tracking_mae_vx(
  env: ManagerBasedRlEnv,
  command_name: str,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  """Absolute body-frame forward velocity tracking error in m/s."""
  return _velocity_tracking_abs_error(
    env, command_name, axis=0, angular=False, asset_cfg=asset_cfg
  )


def tracking_mae_vy(
  env: ManagerBasedRlEnv,
  command_name: str,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  """Absolute body-frame lateral velocity tracking error in m/s."""
  return _velocity_tracking_abs_error(
    env, command_name, axis=1, angular=False, asset_cfg=asset_cfg
  )


def tracking_mae_wz(
  env: ManagerBasedRlEnv,
  command_name: str,
  asset_cfg: SceneEntityCfg = _ROBOT_CFG,
) -> torch.Tensor:
  """Absolute body-frame yaw-rate tracking error in rad/s."""
  return _velocity_tracking_abs_error(
    env, command_name, axis=2, angular=True, asset_cfg=asset_cfg
  )


def episode_length_s(env: ManagerBasedRlEnv) -> torch.Tensor:
  """Elapsed episode duration in seconds at the current step."""
  return env.episode_length_buf.float() * env.step_dt


def timeout_success_rate(env: ManagerBasedRlEnv) -> torch.Tensor:
  """One for a clean timeout, zero for failure or an unfinished episode."""
  time_outs = env.termination_manager.time_outs
  terminated = env.termination_manager.terminated
  return (time_outs & ~terminated).float()
