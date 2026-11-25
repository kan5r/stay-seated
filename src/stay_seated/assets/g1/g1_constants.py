"""Seated Unitree G1 constants and entity config."""

from pathlib import Path

import mujoco
from mjlab.asset_zoo.robots.unitree_g1.g1_constants import (
  FULL_COLLISION,
  G1_ARTICULATION,
)
from mjlab.entity import EntityCfg

G1_XML = Path(__file__).parent / "xmls" / "g1.xml"
assert G1_XML.exists()


def get_spec() -> mujoco.MjSpec:
  return mujoco.MjSpec.from_file(str(G1_XML))


SEATED_KEYFRAME = EntityCfg.InitialStateCfg(
  pos=(0.0, 0, 0.55),
  joint_pos={
    ".*_hip_pitch_joint": -1.40,  # -80 deg
    ".*_knee_joint": 1.222,  # 70 deg
    ".*_ankle_pitch_joint": 0.2,
    "left_shoulder_roll_joint": 0.2,
    "left_shoulder_pitch_joint": -0.2,
    "right_shoulder_roll_joint": -0.2,
    "right_shoulder_pitch_joint": -0.2,
  },
  joint_vel={".*": 0.0},
)


def get_seated_g1_robot_cfg() -> EntityCfg:
  """Get a fresh seated G1 robot configuration."""
  return EntityCfg(
    init_state=SEATED_KEYFRAME,
    collisions=(FULL_COLLISION,),
    spec_fn=get_spec,
    articulation=G1_ARTICULATION,
  )
