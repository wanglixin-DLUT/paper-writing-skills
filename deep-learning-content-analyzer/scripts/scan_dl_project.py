#!/usr/bin/env python3
"""Lightweight scanner for deep learning paper projects.

The script uses only the Python standard library. It prints or writes a
Markdown inventory that helps the skill decide what to read next.
"""

from __future__ import annotations

import argparse
import os
import re
from pathlib import Path


IGNORE_DIRS = {
    ".git",
    ".hg",
    ".svn",
    ".venv",
    "venv",
    "env",
    "__pycache__",
    ".pytest_cache",
    ".mypy_cache",
    ".ruff_cache",
    "node_modules",
    "site-packages",
    "dist",
    "build",
}

TEXT_SUFFIXES = {
    ".py",
    ".ipynb",
    ".yaml",
    ".yml",
    ".json",
    ".jsonl",
    ".toml",
    ".ini",
    ".cfg",
    ".md",
    ".txt",
    ".log",
    ".csv",
    ".tsv",
    ".tex",
    ".sh",
}

ROLE_PATTERNS = {
    "core model candidate": re.compile(
        r"model|models|network|networks|module|modules|arch|backbone|encoder|decoder|transformer|attention",
        re.I,
    ),
    "training candidate": re.compile(r"train|trainer|fit|pretrain|finetune|fine_tune", re.I),
    "evaluation candidate": re.compile(r"eval|evaluate|test|infer|inference|predict|benchmark", re.I),
    "data candidate": re.compile(r"data|dataset|dataloader|preprocess|augment|transform", re.I),
    "config candidate": re.compile(r"config|configs|conf|hydra|yaml|yml|json|toml|argparse", re.I),
    "result/log candidate": re.compile(r"result|results|log|logs|runs|wandb|tensorboard|lightning_logs|output|outputs", re.I),
    "ablation/baseline candidate": re.compile(r"ablation|baseline|variant|compare|comparison|without|wo|w_o", re.I),
}

CODE_PATTERNS = {
    "nn.Module class": re.compile(r"class\s+\w+\s*\([^)]*(?:nn\.Module|torch\.nn\.Module|LightningModule|Module)[^)]*\)"),
    "forward method": re.compile(r"def\s+forward\s*\("),
    "loss": re.compile(r"loss|criterion|regulari[sz]er", re.I),
    "optimizer": re.compile(r"optimizer|scheduler|learning_rate|lr\b|backward", re.I),
    "metric": re.compile(r"accuracy|acc\b|f1|auc|dice|iou|psnr|ssim|bleu|rouge|map\b|mAP|mae|rmse", re.I),
}


def is_ignored(path: Path) -> bool:
    return any(part in IGNORE_DIRS for part in path.parts)


def is_probably_text(path: Path) -> bool:
    return path.suffix in TEXT_SUFFIXES or path.name.startswith("events.out.tfevents")


def safe_read(path: Path, max_bytes: int = 160_000) -> str:
    try:
        data = path.read_bytes()[:max_bytes]
        return data.decode("utf-8", errors="ignore")
    except OSError:
        return ""


def classify(path: Path, root: Path) -> tuple[list[str], list[str]]:
    rel = path.relative_to(root).as_posix()
    roles = [role for role, pattern in ROLE_PATTERNS.items() if pattern.search(rel)]
    signals: list[str] = []
    if path.suffix == ".py":
        text = safe_read(path)
        for label, pattern in CODE_PATTERNS.items():
            if pattern.search(text):
                signals.append(label)
    if path.name.startswith("events.out.tfevents"):
        roles.append("tensorboard event file")
    if path.suffix in {".ckpt", ".pt", ".pth", ".safetensors"}:
        roles.append("checkpoint")
    return roles, signals


def scan(root: Path, max_files: int) -> list[tuple[str, list[str], list[str], int]]:
    rows = []
    count = 0
    for dirpath, dirnames, filenames in os.walk(root):
        current = Path(dirpath)
        dirnames[:] = [d for d in dirnames if d not in IGNORE_DIRS and not is_ignored(current / d)]
        for filename in filenames:
            path = current / filename
            if is_ignored(path):
                continue
            if not is_probably_text(path) and path.suffix not in {".ckpt", ".pt", ".pth", ".safetensors", ".png", ".pdf", ".xlsx"}:
                continue
            roles, signals = classify(path, root)
            if roles or signals or path.name.lower().startswith("readme"):
                try:
                    size = path.stat().st_size
                except OSError:
                    size = 0
                rows.append((path.relative_to(root).as_posix(), roles, signals, size))
                count += 1
                if count >= max_files:
                    return rows
    return rows


def render(root: Path, rows: list[tuple[str, list[str], list[str], int]]) -> str:
    lines = [
        "# Deep Learning Project Scan",
        "",
        f"- Project root: `{root}`",
        f"- Candidate files: {len(rows)}",
        "",
        "| Path | Roles | Signals | Size |",
        "|---|---|---|---:|",
    ]
    for rel, roles, signals, size in rows:
        role_text = ", ".join(roles) if roles else "-"
        signal_text = ", ".join(signals) if signals else "-"
        lines.append(f"| `{rel}` | {role_text} | {signal_text} | {size} |")
    lines.extend(
        [
            "",
            "## Suggested Next Reads",
            "",
            "1. README or project notes.",
            "2. Training and evaluation entry points.",
            "3. Core model candidates with `nn.Module class` or `forward method` signals.",
            "4. Configs tied to important runs.",
            "5. Results, logs, ablations, and baselines.",
        ]
    )
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Scan a deep learning project for writing-relevant files.")
    parser.add_argument("project_root", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--max-files", type=int, default=250)
    args = parser.parse_args()

    root = args.project_root.expanduser().resolve()
    if not root.exists() or not root.is_dir():
        parser.error(f"project root is not a directory: {root}")
    rows = scan(root, args.max_files)
    text = render(root, rows)
    if args.output:
        args.output.expanduser().resolve().write_text(text, encoding="utf-8")
    else:
        print(text, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
