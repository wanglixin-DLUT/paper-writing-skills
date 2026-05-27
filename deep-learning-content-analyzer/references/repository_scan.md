# Repository Scan Guide

Use this guide to inspect a deep learning project without getting lost in implementation noise.

## First Pass

Look for:

- `README`, paper notes, project docs, issue notes, or experiment summaries.
- Model files: `model`, `models`, `network`, `networks`, `module`, `modules`, `architecture`, `backbone`, `encoder`, `decoder`, `transformer`, `attention`.
- Training files: `train`, `trainer`, `fit`, `pretrain`, `finetune`.
- Evaluation files: `eval`, `evaluate`, `test`, `infer`, `inference`, `predict`, `benchmark`.
- Data files: `dataset`, `dataloader`, `data`, `preprocess`, `augment`, `transforms`.
- Config files: `.yaml`, `.yml`, `.json`, `.toml`, `.ini`, Hydra configs, argparse defaults.
- Experiment artifacts: `logs`, `runs`, `wandb`, `tensorboard`, `lightning_logs`, `outputs`, `results`, `checkpoints`.
- Tables or plots: `.csv`, `.tsv`, `.jsonl`, `.xlsx`, `.png`, `.pdf`, `.tex`.

Use `rg --files` first. Then use targeted `rg` searches.

## Useful Search Patterns

Model architecture:

```bash
rg -n "class .*\\((nn\\.Module|torch\\.nn\\.Module|LightningModule|Module)\\)|def forward\\(|call\\(|Flax|linen|keras\\.Model|tf\\.keras" <project_root>
```

Loss and optimization:

```bash
rg -n "loss|criterion|optimizer|scheduler|lr|learning_rate|backward|clip_grad|ema|amp|mixed precision" <project_root>
```

Training and evaluation:

```bash
rg -n "train\\(|validate|validation|evaluate|test_step|predict|inference|metric|accuracy|f1|auc|dice|psnr|ssim|bleu|rouge|mAP" <project_root>
```

Ablation and comparison:

```bash
rg -n "ablation|baseline|variant|without|w/o|ours|SOTA|state-of-the-art|compare|comparison" <project_root>
```

Experiment logs:

```bash
find <project_root> -maxdepth 4 -type f \\( -name "*.csv" -o -name "*.json" -o -name "*.jsonl" -o -name "*.log" -o -name "events.out.tfevents*" \\)
```

## What To Ignore By Default

- `.git`, `.venv`, `venv`, `env`, `node_modules`, `__pycache__`, `.pytest_cache`.
- Large checkpoint binaries unless metadata is needed.
- Raw datasets unless the paper claim depends on data construction.
- Auto-generated logs that duplicate cleaner result tables.

## Reading Order

1. README or project notes.
2. Main training/evaluation entry points.
3. Configs used by important runs.
4. Core model files.
5. Dataset and preprocessing code.
6. Results tables and logs.
7. Ablation or baseline scripts.

## Evidence Quality Labels

- Strong: result table or log clearly tied to a config, commit, model, and dataset.
- Moderate: result artifact exists but run provenance is partial.
- Weak: claim appears in notes but implementation or result is unclear.
- Missing: claim has no located code or result support.
