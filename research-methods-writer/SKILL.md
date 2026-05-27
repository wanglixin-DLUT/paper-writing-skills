---
name: research-methods-writer
description: Use when the user wants to draft, revise, diagnose, outline, compress, or adapt the Methods, Materials and Methods, Experimental, Methodology, Model, Dataset, Training, Evaluation, or Implementation section of a scientific paper. Prioritize content_analysis.md from deep-learning-content-analyzer and writing_blueprint.md from science-writing-foundations, preserving technical facts, reproducibility details, target-journal conventions, terminology, and claim boundaries.
---

# Research Methods Writer

Use this skill to write or revise a scientific Methods section that tells the reader exactly what was done, what was used, why key choices were made, and how the work can be evaluated or reproduced.

This skill is part of the writing system:

- `content_analysis.md` supplies model files, data pipeline, configs, training/evaluation scripts, experiment artifacts, implementation evidence, and claim boundaries.
- `writing_blueprint.md` supplies target-reader expectations, target-paper conventions, section placement, density, and terminology decisions.

## Core Principle

A Methods section is not lab notes pasted into prose. It is a reader-facing reconstruction of the procedure, design, materials, model, or experiment. It must give enough information for readers to understand, trust, compare, and, where appropriate, reproduce the work.

Prioritize clarity, provenance, sequence, and justification. Do not invent implementation details, hyperparameters, datasets, or evaluation protocols.

## Start Here

1. Look for `content_analysis.md` in the active project/manuscript directory and nearby parent directories.
2. Look for `writing_blueprint.md` in the same locations.
3. If `content_analysis.md` exists, use it as the technical source of truth for:
   - model or method design
   - data and preprocessing
   - training and inference procedure
   - configs and hyperparameters
   - evaluation protocol and baselines
   - implementation evidence and missing details
4. If `writing_blueprint.md` exists, use it for:
   - target journal conventions
   - Methods placement and expected length
   - section headings and move map
   - active/passive preference and terminology
5. If project facts are missing, mark them explicitly instead of filling gaps from generic knowledge.

## Workflow

1. Diagnose the task.
   - New Methods section, outline, reproducibility audit, deep learning method description, experimental protocol, revision, shortening, or supplementary-methods split.

2. Select the Methods structure.
   - Use `references/methods_models.md`.
   - Decide whether the section is organized by materials/data, model, training, evaluation, ablation, implementation, or chronological procedure.

3. Extract factual details.
   - Use `references/reproducibility_and_evidence.md`.
   - Pull only details that are supported by code, configs, logs, project notes, or user-provided descriptions.

4. Draft for reader trust.
   - Use `references/methods_workflow.md`.
   - Start with an overview if the method is complex.
   - Give details in an order the reader can follow.
   - Justify non-obvious choices.
   - Separate the user's work from standard procedures and prior methods.

5. Apply domain guidance.
   - For deep learning papers, use `references/deep_learning_methods.md`.
   - Make architecture, training, data, evaluation, baselines, and implementation details traceable and reproducible.

6. Revise for ambiguity and reproducibility.
   - Use `references/methods_revision_checklist.md`.
   - Check tense, active/passive choices, ownership, sequence, missing parameters, and consistency with Results.

## Output Modes

- `outline`: produce subsection structure and needed details.
- `draft`: produce a complete Methods section.
- `revision`: rewrite or restructure an existing Methods section.
- `audit`: identify missing reproducibility or credibility details.
- `deep-learning-method`: write model/training/evaluation subsections from code and configs.
- `supplement split`: decide what belongs in main text versus supplementary material.
- `handoff`: produce a Methods plan for later drafting.

## Output Standards

A good Methods section:

- States what was done or used clearly enough for reader evaluation.
- Gives sufficient sequence, parameters, data, and protocol detail.
- Justifies important design, material, model, dataset, or evaluation choices.
- Distinguishes the user's work from standard procedures and prior work.
- Uses terminology consistent with upstream artifacts.
- Aligns with `content_analysis.md`, `writing_blueprint.md`, Results, and claims in the paper.
- Marks missing or uncertain details instead of inventing them.

## Reference Files

- Read `references/methods_models.md` when selecting section structure.
- Read `references/reproducibility_and_evidence.md` when extracting factual details.
- Read `references/deep_learning_methods.md` for model, training, data, evaluation, and implementation writing.
- Read `references/methods_workflow.md` when drafting or revising.
- Read `references/methods_revision_checklist.md` before final delivery.
