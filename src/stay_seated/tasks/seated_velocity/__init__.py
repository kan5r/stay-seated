"""Seated velocity tracking of the Unitree G1 on a rolling stool."""

from mjlab.tasks.registry import register_mjlab_task

from stay_seated.tasks.seated_velocity.env_cfg import seated_g1_env_cfg
from stay_seated.tasks.seated_velocity.rl import SeatedVelocityOnPolicyRunner
from stay_seated.tasks.seated_velocity.rl_cfg import seated_g1_ppo_runner_cfg

TASK_ID = "StaySeated-Unitree-G1"

register_mjlab_task(
  task_id=TASK_ID,
  env_cfg=seated_g1_env_cfg(),
  play_env_cfg=seated_g1_env_cfg(play=True),
  rl_cfg=seated_g1_ppo_runner_cfg(),
  runner_cls=SeatedVelocityOnPolicyRunner,
)
