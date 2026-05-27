# Introduction Writing Workflow

Use this workflow after reading upstream artifacts when available.

## Required Inputs

Minimum useful inputs:

- Target journal or venue.
- Target reader and article type.
- Topic or task.
- Prior work or references to cite.
- Research gap, problem, motivation, or opportunity.
- Present study aim.
- Method or model at high level.
- Contribution and evidence boundary.

For deep learning papers, prefer `content_analysis.md` for method, results, and contribution evidence.

## Upstream Handoff

From `writing_blueprint.md`, use:

- Reader and purpose.
- Global narrative arc.
- Introduction section move map.
- Stable terminology.
- Claim and certainty boundaries.
- Target-paper conventions for length, citation density, and whether to preview results.

From `content_analysis.md`, use:

- Core method reconstruction.
- Contribution candidates.
- Baseline limitations and experiment map.
- Claim boundaries and missing evidence.
- Stable method/model names.

## Drafting Steps

1. Plan paragraphs before writing.
   - Give each paragraph one main function.
   - Decide which citations each paragraph needs.
   - Ensure each paragraph moves closer to the present study.

2. Open the field.
   - Establish importance or current relevance.
   - Include only background the target reader needs.
   - Avoid starting with the user's specific method unless target papers do so.

3. Build the research map.
   - Select and group prior work.
   - Explain how prior work developed the field.
   - Synthesize patterns and limitations instead of listing papers.

4. Locate the gap or problem.
   - State the limitation, uncertainty, or opportunity clearly.
   - Use current and defensible wording.
   - Connect it to the user's study, not to a generic complaint.

5. Present the current study.
   - State what the paper does.
   - Preview method, dataset, or model only at the level needed to understand the contribution.
   - Preview results only if target-paper conventions support that move.
   - End by preparing the reader for Methods or Results.

6. Revise for narrative flow.
   - Check that every sentence answers the reader's next likely question.
   - Add sentence links where the reader must cross a conceptual gap.
   - Repeat stable terms rather than using loose synonyms.

## Tense And Voice Defaults

- Established knowledge: present simple.
- Recent line of work with current relevance: present perfect.
- Specific past study result tied to one paper: past simple.
- Current paper or study: present simple.
- Aim that existed before the work was done: past simple or present simple, depending on journal convention.

Use target papers as the final guide.

## Citation Handling

- Preserve user-provided citation keys and formats.
- Use placeholders such as `[citation needed: prior transformer baseline]` when the idea needs support.
- Do not fabricate author names, years, titles, or venues.
- If citation style is unknown, keep placeholders neutral until the user supplies references.

## Deliverables

For an outline:

- Paragraph function.
- Key content.
- Needed citations.
- Link to next paragraph.

For a draft:

- Introduction text.
- Move map.
- Citation gaps or assumptions.
- Claim risks.

For a revision:

- Revised Introduction.
- Main structural changes.
- Remaining citation or evidence needs.
