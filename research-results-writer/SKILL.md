---
name: research-results-writer
description: Use when the user wants to draft, revise, diagnose, outline, organize, or adapt the Results, Results and Discussion, Data Analysis, Experiments, Evaluation, Ablation, Benchmark, or Case Study section of a scientific paper. Prioritize content_analysis.md from deep-learning-content-analyzer and writing_blueprint.md from science-writing-foundations, preserving experimental evidence, figure/table narrative, comparison protocol, certainty level, terminology, and claim boundaries.
---

# Research Results Writer

Use this skill to write or revise a Results section that guides the reader through evidence rather than merely listing outputs.

This skill is part of the writing system:

- `content_analysis.md` supplies result tables/logs, baselines, ablations, metrics, reliability notes, missing or suspicious runs, and claim boundaries.
- `writing_blueprint.md` supplies target-reader expectations, target-paper conventions, Results section structure, figure/table density, and certainty strategy.

## Core Principle

Results do not speak for themselves. The writer must guide the reader toward the important findings, connect results to the study aims, distinguish key results from secondary ones, and calibrate claim strength.

Report only results that can be traced to evidence. Do not invent numbers, metrics, significance, baselines, or explanations.

## Start Here

1. Look for `content_analysis.md` in the active project/manuscript directory and nearby parent directories.
2. Look for `writing_blueprint.md` in the same locations.
3. If `content_analysis.md` exists, use it for:
   - result artifacts, logs, tables, and figures
   - metrics, datasets, splits, and baselines
   - ablations and comparison protocol
   - reliability notes, failed runs, and missing evidence
   - claim strength and boundaries
4. If `writing_blueprint.md` exists, use it for:
   - Results section move map
   - result ordering and subsection strategy
   - target-paper conventions for comments, comparisons, and implications
   - certainty and terminology choices
5. If result evidence is missing or ambiguous, flag it rather than smoothing over it.

## Workflow

1. Diagnose the task.
   - New Results section, outline, result narrative, figure/table callouts, ablation writeup, benchmark writeup, revision, or Results/Discussion split.

2. Select the Results structure.
   - Use `references/results_models.md`.
   - Decide whether to organize by aim, hypothesis, experiment, dataset, metric, figure, ablation, or model component.

3. Build an evidence map.
   - Use `references/result_evidence_and_figures.md`.
   - Link each result sentence to a table, figure, log, metric, or confirmed user-provided value.

4. Draft the narrative.
   - Use `references/results_workflow.md`.
   - Start each result set with a frame when needed.
   - Direct the reader to figures/tables.
   - Present key results in detail and secondary results efficiently.
   - Compare with baselines, prior work, predictions, or ablations when relevant.

5. Calibrate certainty.
   - Use `references/certainty_and_comparison.md`.
   - Separate observed result, explanation, implication, and claim.
   - Choose cautious language for limited, noisy, preliminary, or indirect evidence.

6. Revise for alignment.
   - Use `references/results_revision_checklist.md`.
   - Check consistency with Methods, Abstract, Introduction gap, Discussion claims, and `content_analysis.md`.

## Output Modes

- `outline`: produce subsection order and evidence needs.
- `draft`: produce a complete Results section.
- `revision`: rewrite or restructure existing Results.
- `evidence audit`: map claims to figures/tables/logs and flag gaps.
- `figure narrative`: write callouts and interpretation for figures/tables.
- `ablation writeup`: explain ablation design and result pattern.
- `handoff`: produce a Results plan for Discussion or Abstract.

## Output Standards

A good Results section:

- Makes the result order intelligible.
- Points readers to figures/tables and explains what matters.
- Prioritizes key findings.
- Includes enough method context to interpret results.
- Compares results where comparison is needed for meaning.
- Acknowledges important result issues or limitations.
- Uses certainty language proportional to evidence.
- Aligns with `content_analysis.md`, `writing_blueprint.md`, Methods, Abstract, and Discussion.

## Reference Files

- Read `references/results_models.md` when selecting structure.
- Read `references/result_evidence_and_figures.md` when mapping results to artifacts.
- Read `references/certainty_and_comparison.md` when choosing claim strength or comparison language.
- Read `references/results_workflow.md` when drafting or revising.
- Read `references/results_revision_checklist.md` before final delivery.
