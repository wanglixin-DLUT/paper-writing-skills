---
name: research-introduction-writer
description: Use when the user wants to draft, revise, diagnose, outline, compress, or adapt the Introduction section of a scientific research paper, especially when moving from field context and prior work to a research gap, problem, motivation, contribution, and present-study description. Prioritize writing_blueprint.md from science-writing-foundations and content_analysis.md from deep-learning-content-analyzer, preserving target-reader strategy, technical facts, contribution evidence, terminology, and claim boundaries.
---

# Research Introduction Writer

Use this skill to write or revise a scientific Introduction that leads the reader from the field context to the user's study.

This skill is part of the writing system:

- `content_analysis.md` supplies technical facts, implementation evidence, experiments, contribution candidates, and claim boundaries.
- `writing_blueprint.md` supplies target-reader strategy, target-paper conventions, section move maps, terminology decisions, and narrative arc.

## Core Principle

An Introduction should narrow. It begins where the reader can enter, maps only the prior work needed to justify the study, identifies the gap or problem, and then presents the current paper as the logical next step.

Do not write a literature dump. Every cited study or background fact must help the reader understand why this study was necessary and why the chosen approach is valid.

## Start Here

1. Look for `writing_blueprint.md` in the active manuscript/project directory and nearby parent directories.
2. Look for `content_analysis.md` in the same locations, especially for deep learning projects.
3. If `writing_blueprint.md` exists, preserve:
   - target journal or venue
   - reader and purpose
   - global narrative arc
   - Introduction move map
   - stable terminology
   - claims and certainty boundaries
4. If `content_analysis.md` exists, use it for:
   - actual method or model contribution
   - baselines and limitations addressed
   - experiment-supported contribution candidates
   - evidence boundaries and missing claims
5. Use only provided references, target papers, or user-approved searches for literature claims. Do not invent citations.

## Workflow

1. Diagnose the task.
   - New Introduction, outline, literature-map planning, gap sharpening, revision, shortening, or journal adaptation.
   - Identify target length, journal style, article type, and whether Results should be previewed.

2. Build the Introduction move plan.
   - Use `references/introduction_models.md`.
   - Select moves from field importance, background, research map, gap/problem, motivation, present study, method preview, and contribution preview.

3. Build the literature map.
   - Use `references/literature_map_and_gap.md`.
   - Organize prior work by general-to-specific progression, approaches/models, chronology, or baseline limitations.
   - Keep only studies that lead toward the user's problem, method choice, or contribution.

4. Draft or revise.
   - Use `references/introduction_workflow.md`.
   - Start broad enough for the target reader, then narrow steadily.
   - State the gap or problem respectfully and explicitly unless the target-paper convention keeps it implicit.
   - Present the current study with claims supported by `content_analysis.md` and bounded by `writing_blueprint.md`.

5. Check coherence and risk.
   - Use `references/introduction_revision_checklist.md`.
   - Verify that every paragraph has a function, every citation earns its place, and the final paragraph prepares the reader for Methods/Results.

6. Deliver a usable output.
   - Provide the Introduction draft, outline, or revision.
   - Include a short move map when helpful.
   - List missing citations, missing project facts, or claim risks.

## Output Modes

- `outline`: produce paragraph-level moves and citation needs.
- `draft`: produce a complete Introduction.
- `revision`: rewrite or restructure an existing Introduction.
- `gap diagnosis`: sharpen the problem, gap, or motivation.
- `literature map`: organize references into a narrative path.
- `handoff`: create an Introduction plan for later drafting.

## Output Standards

A good Introduction:

- Opens at a level the target reader can enter.
- Builds a selective, narrated research map rather than a bibliography list.
- Identifies a current gap, limitation, problem, uncertainty, or opportunity.
- Makes the user's study feel necessary rather than merely interesting.
- Presents the current paper without overloading methods or results.
- Uses stable terminology from upstream artifacts.
- Aligns with `content_analysis.md`, `writing_blueprint.md`, Abstract, Results, and Discussion.
- Avoids fabricated citations and unsupported novelty claims.

## Reference Files

- Read `references/introduction_models.md` when choosing the Introduction structure.
- Read `references/literature_map_and_gap.md` when organizing prior work, references, baselines, or research gaps.
- Read `references/introduction_workflow.md` when drafting or revising.
- Read `references/introduction_revision_checklist.md` before final delivery.
