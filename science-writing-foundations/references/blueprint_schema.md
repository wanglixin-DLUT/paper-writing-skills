# Writing Blueprint Schema

Use this schema for a reusable paper-writing blueprint. Keep it concise enough that other skills can load it as context.

## Metadata

- Project or manuscript name:
- Target journal or venue:
- Field or subfield:
- Manuscript type:
- Target paper corpus:
- Content analysis source:
- Date prepared:
- Prepared for:

## 1. Corpus Summary

Create a table with:

- Paper ID
- Venue/year
- Article type
- Why it is a useful model
- Notable structural convention

Add a short note on corpus strength:

- Strong match: same target journal, recent, same article type.
- Moderate match: same field or method, different venue or article type.
- Weak match: useful for one convention only.

## 2. Reader And Purpose

Summarize:

- Primary reader:
- Secondary reader:
- What the reader likely already knows:
- What the reader should learn or believe after reading:
- Likely friction points:
- Required level of technical compression:

## 3. Central Contribution

Write:

- One-sentence contribution:
- Source in `content_analysis.md`, if available:
- Evidence supporting the contribution:
- What is new:
- What is useful:
- What should not be overclaimed:

The contribution sentence should be plain, specific, and defensible. Avoid promotional language.

## 4. Global Narrative Arc

Use this pattern, adjusting to the corpus:

1. Field context and importance.
2. Specific problem, gap, uncertainty, limitation, or unmet need.
3. Study aim or question.
4. Methodological route or design logic.
5. Central result.
6. Interpretation and contribution.
7. Boundary conditions, limitations, or future direction.

For each step, include:

- Function:
- User's content:
- Reader question answered:
- Evidence or source section:

## 5. Section Move Map

For each relevant section, provide moves in order. Mark each move as required, common, optional, or avoid.

Suggested sections:

- Title
- Abstract
- Introduction
- Methods or Materials and Methods
- Results
- Discussion
- Conclusion
- Highlights, graphical abstract, significance statement, or research-in-context panel if relevant

For each section:

- Purpose:
- Typical length or density:
- Move sequence:
- Expected tense/stance:
- Common transition logic:
- Handoff notes for the section-specific skill:

## 6. Style And Language Decisions

Record:

- Stable terminology to repeat consistently:
- Terms to avoid or define:
- Acronyms allowed in abstract:
- Preferred naming for the method, dataset, model, material, or intervention:
- Voice: active, passive, or mixed:
- Expected sentence density:
- Level of hedging or certainty:
- Recurrent phrase functions, paraphrased rather than copied:

## 7. Claims, Certainty, And Boundaries

Create a claims table:

- Claim:
- Evidence:
- Recommended strength:
- Risk of overclaiming:
- Safer wording strategy:
- Section where claim belongs:

Use strength labels such as observed, suggests, supports, demonstrates, establishes, or enables. Choose labels based on evidence, not enthusiasm.

## 8. Cross-Section Consistency

Check:

- Title promise is fulfilled by abstract, results, and discussion.
- Abstract contribution matches the actual results.
- Introduction gap is answered in discussion.
- Methods detail is enough to trust the results.
- Results claims do not drift into unsupported interpretation.
- Discussion interpretation does not exceed the evidence.
- Terminology stays stable across sections.

## 9. Downstream Skill Handoff

For each next skill, list what it should use:

- `deep-learning-content-analyzer`:
- `research-title-writer`:
- `research-abstract-writer`:
- `research-introduction-writer`:
- `research-methods-writer`:
- `research-results-writer`:
- `research-discussion-writer`:
- `research-conclusion-writer`:
- `research-writing-reviser`:

Include missing inputs that must be supplied before drafting.

For `research-introduction-writer`, specify:

- Opening scope for the target reader.
- Literature-map organization pattern.
- Prior-work groups or citation clusters.
- Current gap, problem, motivation, or opportunity.
- Present-study description and contribution boundary.
- Whether to preview method, results, contributions, or paper structure.

For `research-methods-writer`, specify:

- Methods section title and placement expected by the target journal.
- Main-text versus supplementary-material split.
- Reader assumptions about standard methods, datasets, models, or equipment.
- Required method detail for Results to be credible.
- Whether to emphasize procedure, model components, datasets, training, evaluation, or implementation.
- Voice, tense, and terminology preferences from target papers.

For `research-results-writer`, specify:

- Results organization pattern.
- Figure/table order and density.
- How much method context belongs in Results.
- Comparison conventions for baselines, prior work, predictions, or ablations.
- Certainty level for result comments and implications.

For `research-discussion-writer`, specify:

- Discussion opening strategy.
- Key results to interpret.
- Literature comparison strategy.
- Contribution, limitation, implication, application, and future-work moves.
- Modal strength and overclaiming guardrails.

For `research-conclusion-writer`, specify:

- Whether the target journal uses a separate Conclusion.
- Expected length and move sequence.
- Final contribution message.
- Limitations, applications, and future directions to retain or omit.

For `research-title-writer`, specify:

- Target-title length and structure.
- Keyword scope and title/keyword-list relationship.
- Acronym tolerance.
- Whether sentence titles, colon titles, method titles, or finding titles are common.
- Title claims that would overpromise.

For `research-writing-reviser`, specify:

- Whole-paper consistency priorities.
- Terminology and acronym decisions.
- Claim boundaries.
- Sections most likely to need alignment.

## 10. Open Questions

Ask only questions that affect structure, claims, audience, or journal fit.
