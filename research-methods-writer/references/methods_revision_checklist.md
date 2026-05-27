# Methods Revision Checklist

Use this checklist before delivering a Methods draft or revision.

## Structure And Fit

- Does the section title match target journal conventions?
- Is the section placed where the target journal expects it?
- Does the structure match the study type and target-paper conventions?
- Is the main-text versus supplement split appropriate?
- Does each subsection have a clear function?

## Reproducibility

- Are data/materials/equipment/software sources clear?
- Are sample sizes, splits, conditions, or parameters stated when needed?
- Are preprocessing, training, inference, and evaluation steps sufficiently specific?
- Are metrics, baselines, and comparison protocols defined before Results rely on them?
- Are random seeds, number of runs, hardware, or software versions included when they affect claims?

## Justification And Reader Trust

- Are non-obvious choices justified?
- Are deviations, exclusions, or constraints disclosed when they affect interpretation?
- Is there enough method detail in the main paper for Results and Discussion to make sense?
- Are figure/table references explained in prose?

## Ownership And Prior Work

- Is the user's method distinguished from standard or prior methods?
- Are borrowed, adapted, or reused procedures cited or marked with placeholders?
- Does tense or passive voice create ambiguity about who did what?
- Are phrases such as `in this study`, `we`, `our model`, or `the proposed method` needed to clarify ownership?

## Deep Learning Specific

- Is the architecture described at the right level?
- Are dataset splits and preprocessing clear?
- Are objective functions and optimization details available?
- Are baselines comparable under the same protocol?
- Are ablations defined so Results can interpret them?
- Are implementation details consistent with configs and logs in `content_analysis.md`?

## Consistency

- Does Methods support all Results claims?
- Does Methods match the Abstract and Introduction method preview?
- Are terminology and acronyms stable across the paper?
- Are missing details flagged rather than invented?

## Final Checks

- No fabricated hyperparameters.
- No fabricated dataset details.
- No unsupported baseline claims.
- No excessive lab-note detail that distracts from the reader's path.
- No hidden ambiguity in tense, passive voice, or pronouns.
