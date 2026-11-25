"""PPO config for seated locomotion of the Unitree G1."""

from dataclasses import dataclass
from typing import Any

import tyro
from mjlab.rl import (
  RslRlModelCfg,
  RslRlOnPolicyRunnerCfg,
  RslRlPpoAlgorithmCfg,
)


@dataclass
class SeatedVelocityPpoAlgorithmCfg(RslRlPpoAlgorithmCfg):
  """PPO configuration for seated velocity."""

  use_symmetry_augmentation: bool = True
  """Left-right symmetry data augmentation and mirror loss."""
  symmetry_cfg: tyro.conf.Suppress[Any] = None
  """RSL-RL symmetry configuration. Built when symmetry augmentation is enabled."""


def seated_g1_ppo_runner_cfg() -> RslRlOnPolicyRunnerCfg:
  """Create the PPO runner configuration used in the paper."""
  return RslRlOnPolicyRunnerCfg(
    actor=RslRlModelCfg(
      hidden_dims=(512, 256, 128),
      activation="elu",
      obs_normalization=True,
      distribution_cfg={
        "class_name": "GaussianDistribution",
        "init_std": 1.0,
        "std_type": "scalar",
      },
    ),
    critic=RslRlModelCfg(
      hidden_dims=(512, 256, 128),
      activation="elu",
      obs_normalization=True,
    ),
    algorithm=SeatedVelocityPpoAlgorithmCfg(
      value_loss_coef=1.0,
      use_clipped_value_loss=True,
      clip_param=0.2,
      entropy_coef=0.01,
      num_learning_epochs=5,
      num_mini_batches=4,
      learning_rate=1.0e-3,
      schedule="adaptive",
      gamma=0.99,
      lam=0.95,
      desired_kl=0.01,
      max_grad_norm=1.0,
    ),
    experiment_name="stay_seated_g1",
    logger="wandb",
    wandb_project="stay_seated",
    save_interval=50,
    num_steps_per_env=24,
    max_iterations=10_000,
  )
