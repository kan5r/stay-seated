"""Rolling stool constants and entity config."""

from pathlib import Path
from typing import Any

import mujoco
import torch
from mjlab.entity import Entity, EntityCfg
from mjlab.utils.spec_config import CollisionCfg

ROLLING_STOOL_XML = Path(__file__).with_name("rolling_stool.xml")
assert ROLLING_STOOL_XML.exists()


def get_rolling_stool_spec() -> mujoco.MjSpec:
  return mujoco.MjSpec.from_file(str(ROLLING_STOOL_XML))


class RollingStoolEntity(Entity):
  """Entity variant that reads ball-joint qvel width from the XML keyframe."""

  def initialize(
    self,
    mj_model: mujoco.MjModel,
    model: Any,
    data: Any,
    device: str,
  ) -> None:
    super().initialize(mj_model=mj_model, model=model, data=data, device=device)
    if self.cfg.init_state.joint_pos is not None or not self.is_articulated:
      return

    key = mj_model.key("init_state")
    key_qpos = torch.tensor(key.qpos, device=device, dtype=torch.float32)
    key_qvel = torch.tensor(key.qvel, device=device, dtype=torch.float32)
    self._data.default_joint_pos = key_qpos[self.indexing.joint_q_adr][None].repeat(
      data.nworld, 1
    )
    self._data.default_joint_vel = key_qvel[self.indexing.joint_v_adr][None].repeat(
      data.nworld, 1
    )


class RollingStoolCfg(EntityCfg):
  def build(self) -> Entity:
    return RollingStoolEntity(self)


STOOL_INIT_KEYFRAME = EntityCfg.InitialStateCfg(
  pos=(0.0, 0.0, 0.365),
  joint_pos=None,
  joint_vel={".*": 0.0},
)

STOOL_COLLISION = CollisionCfg(
  geom_names_expr=(".*_geom",),
  condim={".*caster.*": 3, ".*": 4},
  friction={".*caster.*": (0.35, 0.005, 0.0001)},
  disable_other_geoms=False,
)


def get_rolling_stool_cfg() -> EntityCfg:
  """Get a fresh rolling stool configuration."""
  return RollingStoolCfg(
    init_state=STOOL_INIT_KEYFRAME,
    collisions=(STOOL_COLLISION,),
    spec_fn=get_rolling_stool_spec,
  )
