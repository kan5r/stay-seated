"""Curriculum terms for seated velocity commands."""

from __future__ import annotations

from typing import TYPE_CHECKING, Required, TypedDict, cast

import torch

from .velocity_command import UniformVelocityCommandCfg

if TYPE_CHECKING:
  from mjlab.envs import ManagerBasedRlEnv


class VelocityStage(TypedDict, total=False):
  """Velocity command ranges activated at a specific environment step."""

  step: Required[int]
  lin_vel_x: tuple[float, float]
  lin_vel_y: tuple[float, float]
  ang_vel_z: tuple[float, float]


def commands_vel(
  env: ManagerBasedRlEnv,
  env_ids: torch.Tensor,
  command_name: str,
  velocity_stages: list[VelocityStage],
) -> dict[str, torch.Tensor]:
  """Update seated velocity command ranges according to a fixed schedule."""
  del env_ids
  command_term = env.command_manager.get_term(command_name)
  assert command_term is not None
  cfg = cast(UniformVelocityCommandCfg, command_term.cfg)

  for stage in velocity_stages:
    if env.common_step_counter >= stage["step"]:
      if "lin_vel_x" in stage:
        cfg.ranges.lin_vel_x = stage["lin_vel_x"]
      if "lin_vel_y" in stage:
        cfg.ranges.lin_vel_y = stage["lin_vel_y"]
      if "ang_vel_z" in stage:
        cfg.ranges.ang_vel_z = stage["ang_vel_z"]

  return {
    "lin_vel_x_min": torch.tensor(  # pyright: ignore[reportPrivateImportUsage]
      cfg.ranges.lin_vel_x[0]
    ),
    "lin_vel_x_max": torch.tensor(  # pyright: ignore[reportPrivateImportUsage]
      cfg.ranges.lin_vel_x[1]
    ),
    "lin_vel_y_min": torch.tensor(  # pyright: ignore[reportPrivateImportUsage]
      cfg.ranges.lin_vel_y[0]
    ),
    "lin_vel_y_max": torch.tensor(  # pyright: ignore[reportPrivateImportUsage]
      cfg.ranges.lin_vel_y[1]
    ),
    "ang_vel_z_min": torch.tensor(  # pyright: ignore[reportPrivateImportUsage]
      cfg.ranges.ang_vel_z[0]
    ),
    "ang_vel_z_max": torch.tensor(  # pyright: ignore[reportPrivateImportUsage]
      cfg.ranges.ang_vel_z[1]
    ),
  }
