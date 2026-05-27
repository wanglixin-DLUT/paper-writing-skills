---
name: deep-learning-content-analyzer
description: Use when the user wants to analyze a deep learning research project folder, locate core model architecture files, training/evaluation scripts, configs, experiment logs, ablation results, checkpoints, metrics, or paper-writing evidence, and summarize technical contributions into content_analysis.md for downstream scientific writing skills such as foundations, abstract, introduction, methods, results, discussion, conclusion, title, and revision writers.
---

# Deep Learning Content Analyzer

Use this skill to turn a deep learning project folder into a writing-ready technical evidence map. The main output is `content_analysis.md`, which downstream writing skills can use as the factual source for contributions, methods, experiments, results, and claim boundaries.

This skill is upstream of `science-writing-foundations`. It analyzes what the project actually contains; the foundation skill then combines this content analysis with target-paper conventions to create `writing_blueprint.md`.

## Core Principle

Separate evidence from interpretation. Identify what the code, configs, logs, and results support before naming the innovation. A contribution is credible only when it can be traced to implementation details and experimental evidence.

## Start Here

1. Ask for or infer the project root.
2. Ask the user for guidance when available:
   - intended paper topic
   - target task or dataset
   - claimed novelty
   - important experiment folders or runs
   - baseline methods
   - files that should or should not be trusted
3. Run a lightweight repository scan when useful:
   - `python deep-learning-content-analyzer/scripts/scan_dl_project.py <project_root> --output <project_root>/content_analysis_scan.md`
4. Read the scan plus the most relevant source files, configs, logs, and result tables.
5. Produce or update `<project_root>/content_analysis.md`.

## Workflow

1. Build the project map.
   - Locate model definitions, training scripts, evaluation scripts, dataset code, config files, result files, experiment logs, checkpoints, and paper notes.
   - Ignore generated caches, large checkpoints, virtual environments, and irrelevant notebooks unless the user points to them.

2. Identify the technical center.
   - Determine the primary model, module, loss, training strategy, data pipeline, inference procedure, or evaluation protocol.
   - Distinguish core design from utilities and experiment plumbing.

3. Trace evidence.
   - Link each suspected innovation to implementation files, configs, and experiments.
   - Link each claimed result to logs, tables, plots, or scripts that produced it.
   - Mark unsupported, ambiguous, or stale evidence.

4. Extract contribution candidates.
   - Use `references/innovation_evidence.md`.
   - Produce cautious contribution statements with evidence and claim strength.
   - Separate actual novelty from engineering integration, tuning, or reproduction.

5. Create the content analysis.
   - Use `references/content_analysis_schema.md`.
   - Save as `content_analysis.md` in the project root unless the user requests another path.
   - Keep the file concise enough for downstream writing skills to read.

6. Provide handoff guidance.
   - State what `science-writing-foundations` should use for `writing_blueprint.md`.
   - State what section-specific skills should use for methods, results, abstract, and introduction.
   - List missing experiments or unclear evidence that would weaken paper claims.

## Output Standards

A good content analysis:

- Names the core technical idea in plain language.
- Points to the exact files or run artifacts that support it.
- Separates model design, training method, data processing, and evaluation protocol.
- Summarizes the strongest experimental evidence and ablations.
- Identifies credible contribution points and claim boundaries.
- Records open questions that affect paper writing.
- Avoids inventing novelty that is not present in code or results.

## Handoff Contract

Downstream skills should treat `content_analysis.md` as the technical source of truth and `writing_blueprint.md` as the writing strategy. If both exist, use both:

- `content_analysis.md`: what was built, tested, and supported.
- `writing_blueprint.md`: how to present it for the target reader and venue.

If the two conflict, trust the content analysis for technical facts and revise the blueprint or paper claims accordingly.

## Reference Files

- Read `references/repository_scan.md` before inspecting a deep learning project folder.
- Read `references/innovation_evidence.md` when extracting contribution candidates.
- Read `references/content_analysis_schema.md` when writing `content_analysis.md`.
- Read `references/writing_handoff.md` when preparing downstream guidance for other writing skills.
