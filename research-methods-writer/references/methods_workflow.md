# Methods Writing Workflow

Use this workflow after reading upstream artifacts when available.

## Required Inputs

Minimum useful inputs:

- Target journal or venue.
- Study type and article type.
- Method, model, procedure, or experimental design.
- Data/materials/equipment/software.
- Key parameters and sequence.
- Evaluation or analysis protocol.
- Relation to prior methods.
- Any constraints, deviations, or problems.

For deep learning papers, prefer `content_analysis.md` for technical facts.

## Upstream Handoff

From `content_analysis.md`, use:

- File and artifact map.
- Core method reconstruction.
- Experiment and result map.
- Contribution candidates.
- Claim boundaries and missing evidence.

From `writing_blueprint.md`, use:

- Target-reader assumptions.
- Methods section move map.
- Expected length, placement, and density.
- Terminology and acronym decisions.
- Guidance on main text versus supplementary material.

## Drafting Steps

1. Plan subsections.
   - Select a structure from `methods_models.md`.
   - Put the method's center of gravity where readers expect it.

2. Start with an overview when needed.
   - Give the reader a top-down frame before details.
   - State aim, source of material/data, model scope, or system overview.

3. Write details in a traceable order.
   - Use chronological order for procedures.
   - Use component order for systems/models.
   - Use dataset-model-training-evaluation for many deep learning papers.

4. Justify important choices.
   - Explain why a dataset, parameter, baseline, metric, component, or procedure was chosen when the reason is not obvious.

5. Mark relation to prior work.
   - Identify standard, borrowed, adapted, and newly introduced parts.
   - Preserve citation placeholders where needed.

6. Add issues or constraints.
   - Include exclusions, limitations, deviations, failed measurements, missing samples, or unavailable details if they affect interpretation.

7. Revise language.
   - Use past tense for what was done in this study.
   - Use present tense for standard procedures, established facts, equipment behavior, or model definitions when appropriate.
   - Use active voice or clear subjects when ownership might be ambiguous.

## Style Guidance

- Prefer precise verbs over vague ones.
- Keep sequence markers clear.
- Repeat stable technical terms rather than loosely swapping labels.
- Avoid promotional adjectives.
- Avoid long chains of procedural details without a paragraph frame.

## Deliverables

For an outline:

- Subsection.
- Function.
- Required details.
- Evidence source.
- Missing inputs.

For a draft:

- Methods text.
- Subsection move map.
- Missing details or citation placeholders.
- Consistency notes with Results.

For an audit:

- Missing reproducibility details.
- Ambiguity risks.
- Evidence mismatches.
- Suggested fixes.
