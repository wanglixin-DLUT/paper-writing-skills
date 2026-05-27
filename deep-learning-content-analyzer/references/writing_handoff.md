# Writing Handoff

Use this reference to connect `content_analysis.md` to the rest of the writing system.

## Relationship To Other Artifacts

- `content_analysis.md` explains the project facts: model, code, experiments, evidence, and claim boundaries.
- `writing_blueprint.md` explains the writing strategy: reader, target-paper conventions, narrative arc, section move maps, and presentation choices.

For deep learning papers, run this skill before `science-writing-foundations` whenever the project folder is the main source of truth.

## Handoff To Science Writing Foundations

Tell the foundation skill to use:

- Executive technical summary as study notes.
- Contribution candidates as draft central contribution options.
- File and artifact map as evidence provenance.
- Experiment map as result and claim support.
- Claim boundaries as overclaiming guardrails.
- Open questions as missing inputs.

The foundation skill should add:

- Target-paper conventions.
- Reader analysis.
- Narrative arc.
- Section move map.
- Journal-specific writing strategy.

## Handoff To Abstract Writing

Give `research-abstract-writer`:

- One strongest contribution candidate.
- One strongest result or comparison.
- Method detail needed for reader triage.
- Claim strength and cautious wording.
- Stable method/model name and allowed acronyms.
- Word limit and abstract type if known.

## Handoff To Methods Writing

Give a methods skill:

- Core model file paths.
- Architecture components.
- Losses/objectives.
- Training procedure and configs.
- Dataset and preprocessing.
- Evaluation protocol.
- Reproducibility details.

For `research-methods-writer`, emphasize:

- Which implementation files are authoritative.
- Which configs correspond to reported experiments.
- Which hyperparameters are confirmed and which are missing.
- Which baselines were reimplemented, reused, or cited.
- Which ablations correspond to contribution claims.
- Which details belong in the main Methods section versus supplementary material.

## Handoff To Results Writing

Give a results skill:

- Result tables/logs.
- Baselines and comparisons.
- Ablations.
- Metrics.
- Reliability notes.
- Missing or suspicious runs.

For `research-results-writer`, emphasize:

- Which result artifacts are final.
- Which metrics and datasets correspond to each claim.
- Which comparisons are fair and which are partial.
- Which ablations isolate the proposed contribution.
- Which results should be treated as negative, noisy, or exploratory.

## Handoff To Introduction And Discussion

Give introduction and discussion skills:

- Problem addressed by the model.
- Baseline limitations shown by experiments.
- Contribution candidates.
- Limitations and failure modes.
- Scope of claims.

For `research-introduction-writer`, emphasize:

- The task or application setting that motivates the work.
- The closest baseline families and their limitations.
- The specific gap the project evidence can support.
- The high-level method idea without implementation detail.
- The contribution statement that is safest for the Introduction.
- Citation needs for prior work that cannot be inferred from code alone.

For `research-discussion-writer`, emphasize:

- Which interpretations are supported directly by experiments.
- Which limitations or failed runs affect claim scope.
- Which future work follows from actual evidence gaps.
- Which applications are plausible but not yet tested.

## Handoff To Conclusion Writing

Give `research-conclusion-writer`:

- The safest final contribution statement.
- The strongest evidence supporting it.
- The scope where the evidence holds.
- Limitations or future directions that must be retained.
- Applications that are supported versus only potential.

## Handoff To Title Writing

Give `research-title-writer`:

- Stable method/model/dataset/task terminology.
- Central contribution and supported scope.
- Keyword candidates.
- Acronyms that are safe or risky for target readers.
- Claims that would overpromise if placed in the title.

## Handoff To Global Revision

Give `research-writing-reviser`:

- Claim boundaries.
- Evidence gaps.
- Missing or suspicious runs.
- Stable terminology and acronyms.
- Unsupported or speculative contribution candidates.
