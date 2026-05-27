# Literature Map And Gap

The literature review inside an Introduction is a narrated path toward the user's study. It is not a comprehensive literature survey unless the article type requires one.

## Source Priority

Use sources in this order:

1. User-provided references and annotated papers.
2. Target papers identified in `writing_blueprint.md`.
3. Baselines, comparisons, and cited methods from `content_analysis.md`.
4. User-approved literature search results.

Do not invent citations, years, venues, or findings. If a citation is needed but unavailable, insert a clear placeholder and state the need.

## Selecting Studies

Include a study when it helps one of these functions:

- Establishes the field, task, or application.
- Defines the current technical focus.
- Represents a major method family or baseline.
- Shows a limitation the user's work addresses.
- Justifies the user's method, dataset, or evaluation design.
- Provides a comparison point for the user's contribution.

Exclude or defer a study when:

- It is only generally related.
- It interrupts the path to the current problem.
- It duplicates another citation with no new function.
- It belongs better in Discussion.

## Organization Patterns

Choose one dominant pattern:

- General to specific: broad field, closer subfield, immediate problem.
- Method families: group prior work by architecture, objective, data strategy, inference method, or evaluation approach.
- Baseline limitations: describe each relevant baseline family and what remains unresolved.
- Chronology: use only when historical development matters.
- Data or benchmark progression: use when dataset construction or evaluation protocol is central.

Avoid a sequence where every sentence begins with a different author and no synthesis.

## Gap Types

Common gap forms:

- Knowledge gap: not known, not characterized, not explained.
- Method gap: existing methods cannot handle a condition, signal, scale, or constraint.
- Evidence gap: prior work lacks ablation, validation, benchmark, or comparison.
- Translation gap: prior methods perform in controlled settings but fail in realistic use.
- Scope gap: prior work covers limited datasets, domains, languages, populations, or modalities.
- Efficiency gap: prior methods are too slow, large, expensive, or fragile.
- Reliability gap: prior outputs lack robustness, calibration, interpretability, or consistency.

## Gap Wording Strategy

Make the gap:

- Current: reflect the latest known literature.
- Specific: name the limitation, not just "few studies".
- Respectful: critique approaches, assumptions, or evidence, not authors.
- Actionable: the user's study should be able to address it.
- Proportionate: do not claim a field-wide gap if the evidence only supports a narrower one.

## From Gap To Present Study

The transition should answer:

- Given this gap, what did the present study do?
- Why is this approach suitable?
- What contribution can be claimed safely?
- What should the reader expect next: method, result, or paper structure?

For deep learning projects, verify this transition against `content_analysis.md`. If the code and experiments do not directly address the stated gap, revise the gap or soften the claim.
