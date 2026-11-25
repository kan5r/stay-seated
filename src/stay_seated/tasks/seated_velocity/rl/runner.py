import wandb
from mjlab.rl import RslRlVecEnvWrapper
from mjlab.rl.exporter_utils import (
  attach_metadata_to_onnx,
  get_base_metadata,
)
from mjlab.rl.runner import MjlabOnPolicyRunner


def resolve_seated_velocity_symmetry_cfg(train_cfg: dict) -> dict:
  """Translate seated-velocity CLI symmetry flags into RSL-RL config."""
  algorithm_cfg = train_cfg.get("algorithm", {})
  use_symmetry_augmentation = algorithm_cfg.pop("use_symmetry_augmentation", False)
  if use_symmetry_augmentation and algorithm_cfg.get("symmetry_cfg") is None:
    algorithm_cfg["symmetry_cfg"] = {
      "data_augmentation_func": (
        "stay_seated.tasks.seated_velocity.rl.symmetry:"
        "seated_velocity_symmetry_augmentation"
      ),
      "use_data_augmentation": True,
      "use_mirror_loss": True,
      "mirror_loss_coeff": 1.0,
    }
  return train_cfg


class SeatedVelocityOnPolicyRunner(MjlabOnPolicyRunner):
  env: RslRlVecEnvWrapper

  def __init__(self, env, train_cfg: dict, log_dir: str | None = None, device="cpu"):
    super().__init__(
      env,
      resolve_seated_velocity_symmetry_cfg(train_cfg),
      log_dir,
      device,
    )

  def save(self, path: str, infos=None):
    super().save(path, infos)
    policy_dir, filename, onnx_path = self._get_export_paths(path)
    try:
      self.export_policy_to_onnx(str(policy_dir), filename)
      run_name: str = (
        wandb.run.name if self.logger.logger_type == "wandb" and wandb.run else "local"
      )  # type: ignore[assignment]
      metadata = get_base_metadata(self.env.unwrapped, run_name)
      attach_metadata_to_onnx(str(onnx_path), metadata)
      if self.logger.logger_type in ["wandb"] and self.cfg["upload_model"]:
        wandb.save(str(onnx_path), base_path=str(policy_dir))
    except Exception as e:
      print(f"[WARN] ONNX export failed (training continues): {e}")
