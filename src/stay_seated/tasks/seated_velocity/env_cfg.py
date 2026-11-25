"""Environment config for seated locomotion of the Unitree G1 on a rolling stool."""

import math

from mjlab.asset_zoo.robots import G1_ACTION_SCALE
from mjlab.envs import ManagerBasedRlEnvCfg
from mjlab.envs.mdp import dr
from mjlab.envs.mdp.actions import JointPositionActionCfg
from mjlab.managers.action_manager import ActionTermCfg
from mjlab.managers.command_manager import CommandTermCfg
from mjlab.managers.curriculum_manager import CurriculumTermCfg
from mjlab.managers.event_manager import EventTermCfg
from mjlab.managers.metrics_manager import MetricsTermCfg
from mjlab.managers.observation_manager import ObservationGroupCfg, ObservationTermCfg
from mjlab.managers.reward_manager import RewardTermCfg
from mjlab.managers.scene_entity_config import SceneEntityCfg
from mjlab.managers.termination_manager import TerminationTermCfg
from mjlab.scene import SceneCfg
from mjlab.sensor import (
  ContactMatch,
  ContactSensorCfg,
  ObjRef,
  RingPatternCfg,
  TerrainHeightSensorCfg,
)
from mjlab.sim import MujocoCfg, SimulationCfg
from mjlab.terrains import TerrainEntityCfg
from mjlab.utils.noise import UniformNoiseCfg as Unoise
from mjlab.viewer import ViewerConfig

from stay_seated.assets.g1 import get_seated_g1_robot_cfg
from stay_seated.assets.rolling_stool import (
  get_rolling_stool_cfg,
)
from stay_seated.tasks.seated_velocity import mdp


def seated_g1_env_cfg(play: bool = False) -> ManagerBasedRlEnvCfg:
  """Create the seated velocity-tracking environment used in the paper."""

  foot_site_names = ("left_foot", "right_foot")
  foot_geom_names = tuple(
    f"{side}_foot{i}_collision" for side in ("left", "right") for i in range(1, 8)
  )
  pelvis_cfg = SceneEntityCfg("robot", body_names=("pelvis",))

  ##
  # Sensors
  ##

  feet_ground_contact_cfg = ContactSensorCfg(
    name="feet_ground_contact",
    primary=ContactMatch(
      mode="subtree",
      pattern=r"^(left_ankle_roll_link|right_ankle_roll_link)$",
      entity="robot",
    ),
    secondary=ContactMatch(mode="body", pattern="terrain"),
    fields=("found", "force"),
    reduce="netforce",
    num_slots=1,
    track_air_time=True,
  )
  self_collision_cfg = ContactSensorCfg(
    name="self_collision",
    primary=ContactMatch(mode="subtree", pattern="pelvis", entity="robot"),
    secondary=ContactMatch(mode="subtree", pattern="pelvis", entity="robot"),
    fields=("found", "force"),
    reduce="none",
    num_slots=1,
    history_length=4,
  )
  stool_caster_contact_cfg = ContactSensorCfg(
    name="stool_caster_contact",
    primary=ContactMatch(
      mode="geom",
      pattern=r"^caster_[1-5]_geom$",
      entity="stool",
    ),
    secondary=ContactMatch(mode="body", pattern="terrain"),
    fields=("found", "force"),
    reduce="netforce",
    num_slots=1,
  )
  pelvis_stool_contact_cfg = ContactSensorCfg(
    name="pelvis_stool_contact",
    primary=ContactMatch(
      mode="geom",
      pattern=r"^(pelvis_collision|left_hip_collision|right_hip_collision)$",
      entity="robot",
    ),
    secondary=ContactMatch(mode="geom", pattern="base_geom", entity="stool"),
    fields=("found", "force"),
    reduce="netforce",
    num_slots=1,
  )
  foot_stool_contact_cfg = ContactSensorCfg(
    name="foot_stool_contact",
    primary=ContactMatch(
      mode="geom",
      pattern=r"^(left|right)_foot[1-7]_collision$",
      entity="robot",
    ),
    secondary=ContactMatch(
      mode="geom",
      pattern=r"^(leg_[1-5]_geom|caster_[1-5]_geom)$",
      entity="stool",
    ),
    fields=("found", "force"),
    reduce="netforce",
    num_slots=1,
  )
  foot_height_scan_cfg = TerrainHeightSensorCfg(
    name="foot_height_scan",
    frame=tuple(ObjRef(type="site", name=s, entity="robot") for s in foot_site_names),
    ray_alignment="yaw",
    pattern=RingPatternCfg.single_ring(radius=0.03, num_samples=6),
    max_distance=1.0,
    reduction="max",
    exclude_parent_body=True,
    include_geom_groups=(0,),
    debug_vis=True,
    viz=TerrainHeightSensorCfg.VizCfg(
      show_rays=True,
      hit_color=(1.0, 0.0, 1.0, 0.8),  # Magenta rays.
      hit_sphere_color=(1.0, 0.0, 1.0, 1.0),
    ),
  )

  ##
  # Observations
  ##

  actor_terms = {
    "base_ang_vel": ObservationTermCfg(
      func=mdp.builtin_sensor,
      params={"sensor_name": "robot/imu_ang_vel"},
      noise=Unoise(n_min=-0.2, n_max=0.2),
    ),
    "projected_gravity": ObservationTermCfg(
      func=mdp.projected_gravity,
      noise=Unoise(n_min=-0.05, n_max=0.05),
    ),
    "joint_pos": ObservationTermCfg(
      func=mdp.joint_pos_rel,
      noise=Unoise(n_min=-0.01, n_max=0.01),
    ),
    "joint_vel": ObservationTermCfg(
      func=mdp.joint_vel_rel,
      noise=Unoise(n_min=-1.5, n_max=1.5),
    ),
    "actions": ObservationTermCfg(func=mdp.last_action),
    "command": ObservationTermCfg(
      func=mdp.generated_commands,
      params={"command_name": "twist"},
    ),
  }

  critic_terms = {
    **actor_terms,
    "base_lin_vel": ObservationTermCfg(
      func=mdp.builtin_sensor,
      params={"sensor_name": "robot/imu_lin_vel"},
      noise=Unoise(n_min=-0.5, n_max=0.5),
    ),
    "foot_height": ObservationTermCfg(
      func=mdp.foot_height,
      params={"sensor_name": "foot_height_scan"},
    ),
    "foot_air_time": ObservationTermCfg(
      func=mdp.foot_air_time,
      params={"sensor_name": "feet_ground_contact"},
    ),
    "foot_contact": ObservationTermCfg(
      func=mdp.contact,
      params={"sensor_name": "feet_ground_contact"},
    ),
    "foot_contact_forces": ObservationTermCfg(
      func=mdp.contact_forces,
      params={"sensor_name": "feet_ground_contact"},
    ),
    "stool_pose_local": ObservationTermCfg(
      func=mdp.stool_pose_local,
      params={"reference_cfg": pelvis_cfg},
    ),
    "stool_vel_local": ObservationTermCfg(
      func=mdp.stool_vel_local,
      params={"reference_cfg": pelvis_cfg},
    ),
    "stool_projected_gravity": ObservationTermCfg(func=mdp.stool_projected_gravity),
    "stool_caster_contact": ObservationTermCfg(
      func=mdp.contact,
      params={"sensor_name": "stool_caster_contact"},
    ),
    "stool_caster_contact_forces": ObservationTermCfg(
      func=mdp.contact_forces,
      params={"sensor_name": "stool_caster_contact"},
    ),
    "pelvis_contact_stool": ObservationTermCfg(
      func=mdp.contact,
      params={"sensor_name": "pelvis_stool_contact"},
    ),
    "pelvis_contact_forces_stool": ObservationTermCfg(
      func=mdp.contact_forces,
      params={"sensor_name": "pelvis_stool_contact"},
    ),
    "foot_contact_stool": ObservationTermCfg(
      func=mdp.contact,
      params={"sensor_name": "foot_stool_contact"},
    ),
    "foot_contact_forces_stool": ObservationTermCfg(
      func=mdp.contact_forces,
      params={"sensor_name": "foot_stool_contact"},
    ),
  }

  observations = {
    "actor": ObservationGroupCfg(
      terms=actor_terms,
      concatenate_terms=True,
      enable_corruption=True,
    ),
    "critic": ObservationGroupCfg(
      terms=critic_terms,
      concatenate_terms=True,
      enable_corruption=False,
    ),
  }

  ##
  # Metrics
  ##

  metrics = {
    "tracking_mae_vx": MetricsTermCfg(
      func=mdp.tracking_mae_vx,
      params={"command_name": "twist"},
    ),
    "tracking_mae_vy": MetricsTermCfg(
      func=mdp.tracking_mae_vy,
      params={"command_name": "twist"},
    ),
    "tracking_mae_wz": MetricsTermCfg(
      func=mdp.tracking_mae_wz,
      params={"command_name": "twist"},
    ),
    "episode_length_s": MetricsTermCfg(
      func=mdp.episode_length_s,
      reduce="last",
    ),
    "timeout_success_rate": MetricsTermCfg(
      func=mdp.timeout_success_rate,
      reduce="last",
    ),
    "mean_action_acc": MetricsTermCfg(
      func=mdp.mean_action_acc,
    ),
  }

  ##
  # Actions
  ##

  actions: dict[str, ActionTermCfg] = {
    "joint_pos": JointPositionActionCfg(
      entity_name="robot",
      actuator_names=(".*",),
      scale=G1_ACTION_SCALE,
      use_default_offset=True,
    )
  }

  ##
  # Commands
  ##

  commands: dict[str, CommandTermCfg] = {
    "twist": mdp.UniformVelocityCommandCfg(
      entity_name="robot",
      resampling_time_range=(3.0, 8.0),
      rel_standing_envs=0.1,
      rel_heading_envs=0.3,
      rel_forward_envs=0.2,
      heading_command=True,
      heading_control_stiffness=0.5,
      debug_vis=True,
      ranges=mdp.UniformVelocityCommandCfg.Ranges(
        lin_vel_x=(-0.5, 0.5),
        lin_vel_y=(-0.5, 0.5),
        ang_vel_z=(-0.5, 0.5),
        heading=(-math.pi, math.pi),
      ),
    )
  }

  ##
  # Events
  ##

  events = {
    "reset_scene": EventTermCfg(
      func=mdp.reset_scene_to_default,
      mode="reset",
    ),
    "randomize_stool_yaw": EventTermCfg(
      func=mdp.reset_root_state_uniform,
      mode="reset",
      params={
        "pose_range": {
          "x": (-0.05, 0.05),
          "y": (-0.05, 0.05),
          "yaw": (-math.pi, math.pi),
        },
        "asset_cfg": SceneEntityCfg("stool"),
      },
    ),
    "push_robot": EventTermCfg(
      func=mdp.push_by_setting_velocity,
      mode="interval",
      interval_range_s=(2.0, 5.0),
      params={
        "velocity_range": {
          "x": (-0.2, 0.2),
          "y": (-0.2, 0.2),
          "z": (-0.1, 0.1),
          "roll": (-0.2, 0.2),
          "pitch": (-0.2, 0.2),
          "yaw": (-0.3, 0.3),
        },
      },
    ),
    "foot_friction": EventTermCfg(
      mode="startup",
      func=dr.geom_friction,
      params={
        "asset_cfg": SceneEntityCfg("robot", geom_names=foot_geom_names),
        "operation": "abs",
        "ranges": (0.3, 1.2),
        "shared_random": True,
      },
    ),
    "encoder_bias": EventTermCfg(
      mode="startup",
      func=dr.encoder_bias,
      params={
        "asset_cfg": SceneEntityCfg("robot"),
        "bias_range": (-0.015, 0.015),
      },
    ),
    "base_com": EventTermCfg(
      mode="startup",
      func=dr.body_com_offset,
      params={
        "asset_cfg": SceneEntityCfg("robot", body_names=("torso_link",)),
        "operation": "add",
        "ranges": {
          0: (-0.025, 0.025),
          1: (-0.025, 0.025),
          2: (-0.03, 0.03),
        },
      },
    ),
    "stool_com": EventTermCfg(
      mode="startup",
      func=dr.body_com_offset,
      params={
        "asset_cfg": SceneEntityCfg("stool", body_names=("base_link",)),
        "operation": "add",
        "ranges": {
          0: (-0.02, 0.02),
          1: (-0.02, 0.02),
          2: (-0.01, 0.01),
        },
      },
    ),
    "stool_height": EventTermCfg(
      mode="startup",
      func=dr.body_pos,
      params={
        "asset_cfg": SceneEntityCfg("stool", body_names=("base_link",)),
        "operation": "add",
        "axes": [2],
        "ranges": (-0.02, 0.02),
      },
    ),
    "stool_caster_pos": EventTermCfg(
      mode="startup",
      func=dr.body_pos,
      params={
        "asset_cfg": SceneEntityCfg("stool", body_names=(r"^caster_[1-5]$",)),
        "operation": "add",
        "axes": [2],
        "ranges": (-0.015, 0.015),
      },
    ),
    "stool_base_friction": EventTermCfg(
      mode="startup",
      func=dr.geom_friction,
      params={
        "asset_cfg": SceneEntityCfg("stool", geom_names=("base_geom",)),
        "operation": "scale",
        "ranges": (0.8, 1.4),
      },
    ),
    "stool_caster_damping": EventTermCfg(
      mode="startup",
      func=dr.joint_damping,
      params={
        "asset_cfg": SceneEntityCfg("stool", joint_names=(r"^caster_[1-5]_ball$",)),
        "operation": "scale",
        "ranges": (0.6, 1.4),
      },
    ),
    "stool_hinge_damping": EventTermCfg(
      mode="startup",
      func=dr.joint_damping,
      params={
        "asset_cfg": SceneEntityCfg("stool", joint_names=("poll_lower_hinge",)),
        "operation": "scale",
        "ranges": (1.4, 2.2),
      },
    ),
  }

  ##
  # Rewards
  ##

  rewards = {
    "track_linear_velocity": RewardTermCfg(
      func=mdp.track_linear_velocity,
      weight=2.0,
      params={"command_name": "twist", "std": math.sqrt(0.25)},
    ),
    "track_angular_velocity": RewardTermCfg(
      func=mdp.track_angular_velocity,
      weight=2.0,
      params={"command_name": "twist", "std": math.sqrt(0.2)},
    ),
    "upright": RewardTermCfg(
      func=mdp.upright,
      weight=1.0,
      params={
        "std": math.sqrt(0.2),
        "asset_cfg": SceneEntityCfg("robot", body_names=("torso_link",)),
      },
    ),
    "pose": RewardTermCfg(
      func=mdp.posture,
      weight=1.0,
      params={
        "std": {
          # Lower body.
          r".*hip_pitch.*": 0.5,
          r".*hip_roll.*": 0.4,
          r".*hip_yaw.*": 0.2,
          r".*knee.*": 0.6,
          r".*ankle_pitch.*": 0.35,
          r".*ankle_roll.*": 0.1,
          # Waist.
          r".*waist_yaw.*": 0.3,
          r".*waist_roll.*": 0.08,
          r".*waist_pitch.*": 0.2,
          # Arms.
          r".*shoulder_pitch.*": 0.5,
          r".*shoulder_roll.*": 0.2,
          r".*shoulder_yaw.*": 0.15,
          r".*elbow.*": 0.35,
          r".*wrist.*": 0.3,
        },
        "asset_cfg": SceneEntityCfg("robot", joint_names=(".*",)),
      },
    ),
    "body_ang_vel": RewardTermCfg(
      func=mdp.body_angular_velocity_penalty,
      weight=-0.05,
      params={"asset_cfg": SceneEntityCfg("robot", body_names=("torso_link",))},
    ),
    "angular_momentum": RewardTermCfg(
      func=mdp.angular_momentum_penalty,
      weight=-0.02,
      params={"sensor_name": "robot/root_angmom"},
    ),
    "self_collisions": RewardTermCfg(
      func=mdp.self_collision_cost,
      weight=-1.0,
      params={"sensor_name": "self_collision", "force_threshold": 10.0},
    ),
    "stool_upright": RewardTermCfg(
      func=mdp.stool_upright,
      weight=1.0,
      params={"std": math.sqrt(0.2)},
    ),
    "pelvis_on_stool": RewardTermCfg(
      func=mdp.pelvis_on_stool,
      weight=1.0,
      params={"sensor_name": "pelvis_stool_contact", "reference_cfg": pelvis_cfg},
    ),
    "joint_pos_limits": RewardTermCfg(func=mdp.joint_pos_limits, weight=-1.0),
    "joint_acc_l2": RewardTermCfg(func=mdp.joint_acc_l2, weight=-2.5e-7),
    "action_rate_l2": RewardTermCfg(func=mdp.action_rate_l2, weight=-0.1),
    "action_acc_l2": RewardTermCfg(func=mdp.action_acc_l2, weight=-0.01),
    "seated_still": RewardTermCfg(
      func=mdp.seated_still,
      weight=-1.0,
      params={
        "command_name": "twist",
        "command_threshold": 0.05,
        "asset_cfg": SceneEntityCfg("robot", joint_names=(".*",)),
      },
    ),
    "foot_clearance": RewardTermCfg(
      func=mdp.feet_clearance,
      weight=-2.0,
      params={
        "target_height": 0.1,
        "height_sensor_name": "foot_height_scan",
        "command_name": "twist",
        "command_threshold": 0.05,
        "asset_cfg": SceneEntityCfg("robot", site_names=foot_site_names),
      },
    ),
    "foot_slip": RewardTermCfg(
      func=mdp.feet_slip,
      weight=-0.25,
      params={
        "sensor_name": "feet_ground_contact",
        "command_name": "twist",
        "command_threshold": 0.05,
        "asset_cfg": SceneEntityCfg("robot", site_names=foot_site_names),
      },
    ),
    "soft_landing": RewardTermCfg(
      func=mdp.soft_landing,
      weight=-1e-3,
      params={
        "sensor_name": "feet_ground_contact",
        "command_name": "twist",
        "command_threshold": 0.1,
      },
    ),
  }

  ##
  # Terminations
  ##

  terminations = {
    "time_out": TerminationTermCfg(func=mdp.time_out, time_out=True),
    "fell_over": TerminationTermCfg(
      func=mdp.bad_orientation,
      params={"limit_angle": math.radians(70.0)},
    ),
    "stool_fell_over": TerminationTermCfg(
      func=mdp.stool_fell_over,
      params={"limit_angle": math.radians(70.0)},
    ),
    "bad_pelvis_off_stool": TerminationTermCfg(
      func=mdp.pelvis_off_stool_for_steps,
      params={"sensor_name": "pelvis_stool_contact", "max_steps": 50},
    ),
  }

  ##
  # Curriculum
  ##

  # Command curriculum: translational commands are limited to +-0.5 m/s for the
  # first 2000 PPO iterations (24 env steps each), then widened to +-1.0 m/s.
  curriculum = {
    "command_vel": CurriculumTermCfg(
      func=mdp.commands_vel,
      params={
        "command_name": "twist",
        "velocity_stages": [
          {
            "step": 0,
            "lin_vel_x": (-0.5, 0.5),
            "lin_vel_y": (-0.5, 0.5),
            "ang_vel_z": (-0.5, 0.5),
          },
          {
            "step": 2000 * 24,
            "lin_vel_x": (-1.0, 1.0),
            "lin_vel_y": (-1.0, 1.0),
            "ang_vel_z": (-0.5, 0.5),
          },
        ],
      },
    ),
  }

  ##
  # Assemble and return
  ##

  cfg = ManagerBasedRlEnvCfg(
    scene=SceneCfg(
      terrain=TerrainEntityCfg(terrain_type="plane"),
      entities={"robot": get_seated_g1_robot_cfg(), "stool": get_rolling_stool_cfg()},
      sensors=(
        feet_ground_contact_cfg,
        self_collision_cfg,
        foot_height_scan_cfg,
        stool_caster_contact_cfg,
        pelvis_stool_contact_cfg,
        foot_stool_contact_cfg,
      ),
      num_envs=4096,
      extent=2.0,
    ),
    observations=observations,
    actions=actions,
    commands=commands,
    events=events,
    rewards=rewards,
    terminations=terminations,
    curriculum=curriculum,
    metrics=metrics,
    viewer=ViewerConfig(
      origin_type=ViewerConfig.OriginType.ASSET_BODY,
      entity_name="robot",
      body_name="torso_link",
      distance=3.0,
      elevation=-5.0,
      azimuth=90.0,
    ),
    sim=SimulationCfg(
      nconmax=80,
      njmax=500,
      contact_sensor_maxmatch=128,
      mujoco=MujocoCfg(
        timestep=0.005,
        cone="elliptic",
        impratio=10,
        iterations=15,
        ls_iterations=20,
        ccd_iterations=50,
      ),
    ),
    decimation=4,
    episode_length_s=20.0,
  )

  twist_cmd = cfg.commands["twist"]
  assert isinstance(twist_cmd, mdp.UniformVelocityCommandCfg)
  twist_cmd.viz.z_offset = 1.15

  if play:
    twist_cmd.ranges.lin_vel_x = (-1.0, 1.0)
    twist_cmd.ranges.lin_vel_y = (-1.0, 1.0)
    twist_cmd.ranges.ang_vel_z = (-0.5, 0.5)
    cfg.curriculum = {}
    cfg.episode_length_s = int(1e9)
    cfg.observations["actor"].enable_corruption = False
    cfg.events.pop("push_robot", None)
    cfg.events.pop("stool_height", None)
    cfg.events.pop("stool_caster_pos", None)

  return cfg
