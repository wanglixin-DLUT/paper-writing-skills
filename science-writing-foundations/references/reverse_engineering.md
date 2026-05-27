# Reverse-Engineering Target Papers

Reverse engineering means reading target papers for writing behavior rather than scientific content. The goal is to identify transferable functions and conventions.

## Target Paper Selection

Prefer papers that are:

- Recent for the field and target venue.
- From the intended journal or a close competitor.
- Same article type as the user's manuscript.
- Close in method, data type, or research problem.
- Clear, readable, and structurally explicit.

Avoid relying on:

- Old papers unless the field moves slowly or the convention is still current.
- Review articles when modeling an original research article.
- Famous papers whose format is atypical.
- Papers with unusual editorial formats unless the user's target venue uses the same format.

## Analysis Levels

### Whole Paper

Record:

- Section order and naming.
- Whether the paper follows, modifies, or loosens IMRaD.
- Where methods appear and how detailed they are.
- Whether results and discussion are combined.
- Whether the venue uses highlights, significance statements, graphical abstracts, or research-in-context panels.
- How the paper starts and ends.

### Section

For each section, ask:

- What reader problem does this section solve?
- What moves appear, and in what order?
- Which moves are present in most target papers?
- Which moves are optional or venue-specific?
- What is the section's center of gravity: context, method, evidence, interpretation, or implication?

### Paragraph

For key paragraphs, label the function of each sentence. Use concise labels:

- establishes field importance
- defines scope
- summarizes known work
- identifies limitation or gap
- states aim
- previews approach
- justifies method
- reports result
- interprets result
- compares with prior work
- calibrates certainty
- states implication
- acknowledges limitation
- proposes future work

Do not copy content words into the model unless they are stable technical terms the user must preserve.

## Move Map Method

1. Create a row for each target paper.
2. List the moves in order for the relevant section.
3. Normalize move names across papers.
4. Mark moves as required, common, optional, rare, or avoid.
5. Note transitions between moves.
6. Convert the pattern into a reusable model for the user's paper.

Example table structure:

| Paper | Move 1 | Move 2 | Move 3 | Move 4 | Notes |
|---|---|---|---|---|---|
| P1 | field importance | gap | aim | contribution | Methods are previewed briefly |
| P2 | field importance | known limitation | aim | approach | Contribution delayed to results |

## What To Extract

Extract:

- Rhetorical functions.
- Move order.
- Section proportions.
- Reader assumptions.
- Claim strength.
- Terminology consistency.
- Tense and voice patterns.
- How contribution is signaled.
- How limitations are handled.

Do not extract:

- Decorative phrasing.
- Long quotations.
- Field-specific claims unrelated to the user's project.
- A rigid template from one paper.

## Translating Analysis Into A Blueprint

The final blueprint should answer:

- What story should the user's paper tell?
- What reader knowledge can be assumed?
- What must be made explicit?
- Where should the contribution appear?
- What should each section do?
- Which target-paper conventions matter for this manuscript?
- Which claims are safe, and which need softer language?

If the target corpus conflicts, prefer the convention that best matches the user's target journal and article type. If there is no clear winner, describe alternatives and when to choose each one.
