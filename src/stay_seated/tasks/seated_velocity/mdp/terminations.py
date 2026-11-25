from __future__ import annotations

from typing import TYPE_CHECKING

import torch
from mjlab.entity import Entity
from mjlab.managers.scene_entity_config import SceneEntityCfg
from mjlab.sensor import ContactSensor

if TYPE_CHECKING:
  from mjlab.envs import ManagerBasedRlEnv

_ROBOT_CFG = SceneEntityCfg("robot")
_STOOL_CFG = SceneEntityCfg("stool")


def stool_fell_over(
  env: ManagerBasedRlEnv,
  limit_angle: float,
  stool_cfg: SceneEntityCfg = _STOOL_CFG,
) -> torch.Tensor:
  stool: Entity = env.scene[stool_cfg.name]
  projected_gravity = stool.data.projected_gravity_b
  return torch.acos(-projected_gravity[:, 2]).abs() > limit_angle


class pelvis_off_stool_for_steps:
  """Terminate only after pelvis-stool contact is absent for several steps."""

  def __init__(self, cfg, env: ManagerBasedRlEnv):
    del cfg
    self._off_contact_steps = torch.zeros(
      env.num_envs, device=env.device, dtype=torch.int32
    )

  def __call__(
    self,
    env: ManagerBasedRlEnv,
    sensor_name: str,
    max_steps: int,
  ) -> torch.Tensor:
    sensor: ContactSensor = env.scene[sensor_name]
    assert sensor.data.found is not None
    in_contact = torch.any(sensor.data.found > 0, dim=1)
    self._off_contact_steps = torch.where(
      in_contact,
      torch.zeros_like(self._off_contact_steps),
      self._off_contact_steps + 1,
    )
    return self._off_contact_steps >= max_steps

  def reset(self, env_ids: torch.Tensor | slice | None = None) -> None:
    if env_ids is None:
      env_ids = slice(None)
    self._off_contact_steps[env_ids] = 0
