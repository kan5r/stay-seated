# Stay Seated

Training code for **Stay Seated: Learning Omnidirectional Humanoid Locomotion on a Passive Mobile
Chair with Casters** (IEEE-RAS Humanoids 2026). A Unitree G1 sits on a passive chair with casters and
moves in any direction by pushing the floor with its feet.

[Paper (arXiv)](https://arxiv.org/abs/2608.28090) | [Project page](TODO)

## Installation

Requires Linux and an NVIDIA GPU. Install [uv](https://docs.astral.sh/uv/), then:

```bash
git clone https://github.com/kan5r/stay-seated.git
cd stay-seated
uv sync
```

## Run the pretrained policy

```bash
uv run play StaySeated-Unitree-G1 --checkpoint-file checkpoints/stay_seated_g1.pt
```

The MuJoCo viewer opens when a display is available. On a headless machine, the viewer is served at
http://localhost:8080. Use `--viewer native` or `--viewer viser` to choose explicitly.

## Train

```bash
uv run train StaySeated-Unitree-G1
```

Training runs for 10,000 iterations with 4096 environments (about 4.5 hours on an RTX 4090) and
logs to [Weights & Biases](https://wandb.ai) (run `uv run wandb login` once beforehand).
Checkpoints are written to `logs/rsl_rl/stay_seated_g1/<run>/`. To view a trained policy:

```bash
uv run play StaySeated-Unitree-G1 --checkpoint-file logs/rsl_rl/stay_seated_g1/<run>/model_9999.pt
```

Use `--env.scene.num-envs` to change the number of environments and `--agent.logger tensorboard` to
log locally with TensorBoard instead.

## Citation

```bibtex
@inproceedings{yanagida2026stayseated,
  title     = {Stay Seated: Learning Omnidirectional Humanoid Locomotion on a Passive Mobile Chair with Casters},
  author    = {Yanagida, Kango and Miyazawa, Kazuki and Horii, Takato},
  booktitle = {IEEE-RAS International Conference on Humanoid Robots (Humanoids)},
  year      = {2026}
}
```

## License

Apache License 2.0. The Unitree G1 model is adapted from
[unitree_rl_mjlab](https://github.com/unitreerobotics/unitree_rl_mjlab) (Apache License 2.0).
