# Results Writing Workflow

Use this workflow after reading upstream artifacts when available.

## Required Inputs

- Research aims, hypotheses, or questions.
- Final result values and artifacts.
- Figures and tables.
- Metrics and datasets.
- Baselines or comparators.
- Methods context needed for interpretation.
- Known result issues or limitations.

For deep learning papers, prefer `content_analysis.md` for result provenance.

## Upstream Handoff

From `content_analysis.md`, use:

- Experiment and result map.
- Baseline/comparison details.
- Ablation support.
- Reliability notes.
- Missing or suspicious runs.
- Claim boundaries.

From `writing_blueprint.md`, use:

- Results section move map.
- Figure/table density and order.
- Comparison and implication conventions.
- Certainty strategy.
- Terminology and acronym decisions.

## Drafting Steps

1. Plan result order.
   - Choose an organization pattern.
   - Link each subsection to an aim or contribution.

2. Frame the result set.
   - Briefly revisit aim, method, dataset, or metric if needed.
   - Avoid excessive Methods repetition.

3. Present the main result.
   - State the key pattern, value, or comparison.
   - Include figure/table callout.
   - Use exact numbers only when supported.

4. Add comparisons.
   - Compare with baselines, variants, prior work, predictions, or simulations.
   - Explain comparison scope.

5. Report supporting results.
   - Include ablations, robustness, sensitivity, qualitative examples, or subgroup analyses.
   - Show how they support the main claim.

6. Handle issues.
   - Report negative, inconsistent, or limited results when they affect interpretation.
   - Keep broader implications for Discussion unless the section is combined.

7. Revise narrative.
   - Check that the reader can see why each result matters.
   - Remove unsupported interpretation.
   - Calibrate certainty.

## Deliverables

For an outline:

- Subsection.
- Evidence artifact.
- Main result.
- Comparison.
- Claim boundary.

For a draft:

- Results text.
- Figure/table callout map.
- Missing result details.
- Certainty notes.

For an audit:

- Claim-to-evidence map.
- Unsupported claims.
- Comparison fairness issues.
- Recommended fixes.
