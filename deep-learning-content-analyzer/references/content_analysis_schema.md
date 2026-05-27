# Content Analysis Schema

Save the analysis as `content_analysis.md` in the project root unless the user requests another path.

## Metadata

- Project name:
- Project root:
- Analysis date:
- User guidance:
- Intended paper topic:
- Target task/dataset:
- Primary framework:
- Trust notes:

## 1. Executive Technical Summary

Write 5-8 bullets:

- What the project appears to do.
- The core model or method.
- The main task and dataset.
- The strongest result signal.
- The most likely contribution.
- The largest uncertainty or missing evidence.

## 2. File And Artifact Map

Create a table:

- Role
- Path
- Why it matters
- Confidence

Roles include:

- Core model
- Loss/objective
- Training entry point
- Evaluation entry point
- Dataset/preprocessing
- Config
- Results/logs
- Ablation
- Baseline
- Paper notes

## 3. Core Method Reconstruction

Summarize:

- Model architecture:
- Input/output:
- Major components:
- Data flow:
- Losses/objectives:
- Training procedure:
- Inference procedure:
- What is user-specific or project-specific:

Use file paths to anchor claims.

## 4. Experiment And Result Map

Create a table:

- Experiment or run
- Dataset/split
- Config or command
- Metric
- Result
- Baseline/comparator
- Evidence path
- Reliability

Include failed, partial, or suspicious runs if they affect claim boundaries.

## 5. Contribution Candidates

For each candidate:

- Contribution:
- Implementation evidence:
- Experimental evidence:
- Baseline or ablation:
- Claim strength:
- Best paper section:
- Safer wording:
- Missing evidence:

## 6. Claim Boundaries

List:

- Claims supported strongly.
- Claims supported moderately.
- Claims that should be softened.
- Claims not yet supported.
- Experiments needed before submission.

## 7. Writing Handoff

For downstream skills:

- `science-writing-foundations`: technical facts and contribution candidates to merge with target-paper conventions.
- `research-abstract-writer`: central contribution, strongest result, claim strength, allowed acronym/term list.
- `research-introduction-writer`: problem/gap supported by project motivation and baselines.
- `research-methods-writer`: architecture, training, data, inference, and implementation anchors.
- `research-results-writer`: experiment map, metrics, baselines, ablations, reliability notes.
- `research-discussion-writer`: implications, limitations, failed runs, and claim boundaries.
- `research-conclusion-writer`: safest contribution, strongest evidence, applications, limitations, and future work.
- `research-title-writer`: stable method/model/task terms, keyword candidates, acronym risks, and supported scope.
- `research-writing-reviser`: claim boundaries, evidence gaps, terminology decisions, and unsupported claims.

## 8. Open Questions For User

Ask only questions that affect contribution, evidence, or writing claims.
