---
name: research-abstract-writer
description: Use when the user wants to draft, revise, compress, diagnose, or adapt a scientific research abstract, including standard abstracts, structured abstracts, conference abstracts, significance-linked abstracts, highlights-adjacent summaries, or journal-specific abstract variants. Prioritize existing writing_blueprint.md from science-writing-foundations and content_analysis.md from deep-learning-content-analyzer, preserving central contribution, target-reader assumptions, terminology, evidence, and claim boundaries.
---

# Research Abstract Writer

Use this skill to turn a manuscript, project notes, or a foundation writing blueprint into a clear, standalone scientific abstract.

This skill is part of a writing system. It should consume `writing_blueprint.md` from `science-writing-foundations` whenever available, then produce an abstract that fits the target journal, reader, article type, and evidence boundaries.

## Core Principle

An abstract is not a miniature paper and not a dumping ground for every achievement. It is a high-stakes standalone text that helps fast readers identify the study's problem, route, central result, and value without ambiguity.

Prioritize the central contribution. Keep terminology stable. Make ownership of the user's contribution explicit. Compress only after the logic is clear.

## Start Here

1. Look for `writing_blueprint.md` in the active manuscript/project directory and nearby parent directories.
2. Look for `content_analysis.md` in the same locations, especially for deep learning projects.
3. If `writing_blueprint.md` exists, read it first and preserve:
   - target journal or venue
   - article type
   - reader and purpose
   - central contribution
   - abstract move map
   - stable terminology and allowed acronyms
   - claims, certainty, and boundaries
4. If `content_analysis.md` exists, use it as the source for technical facts, contribution candidates, model details, result evidence, and claim strength.
5. If no blueprint exists, work from the user's notes or draft, but explain that a foundation blueprint would improve fit to target-paper conventions.
6. If the user provides target journal instructions, follow them over generic models.

## Workflow

1. Diagnose the task.
   - New abstract, revision, compression, structured conversion, journal adaptation, conference abstract, or critique.
   - Identify word limit, required headings, and whether highlights/significance statements exist separately.

2. Select the abstract type.
   - Use `references/abstract_models.md` for standard, structured, significance-linked, graphical-abstract-adjacent, and conference variants.

3. Build the abstract move plan.
   - Map the user's content to the model: background or significance, challenge or gap, study aim/action, method/materials, key result, contribution, implication or application.
   - Omit moves that target papers or journal instructions make unnecessary.
   - Combine moves when the word limit is tight.

4. Draft for clarity before compression.
   - Make the user's own contribution explicit.
   - Use stable terminology from the blueprint.
   - Include only method details needed for reader triage.
   - Include the central result and critical numerical detail when it changes interpretation.
   - Match claim strength to the evidence.

5. Revise for abstract-specific risks.
   - Use `references/abstract_revision_checklist.md`.
   - Remove ambiguity from tense, passive voice, pronouns, acronyms, and shifting labels.
   - Check that the abstract does not promise more than the paper shows.

6. Deliver a usable output.
   - Provide the abstract draft.
   - Include word count.
   - Add a short move map or revision notes when useful.
   - If revising, explain the highest-impact changes.

## Output Modes

Use the mode that fits the user request:

- `draft`: produce one polished abstract.
- `variants`: produce 2-3 versions with different emphasis, such as technical, broad-reader, or high-impact.
- `diagnosis`: give issue-focused feedback before rewriting.
- `compression`: shorten to a target word limit while preserving the central contribution.
- `structured`: convert to journal-required headings.
- `handoff`: produce an abstract move plan for later drafting.

## Output Standards

A good abstract:

- Can stand alone without the full paper.
- Makes the central contribution easy to identify.
- Uses consistent names for the same method, dataset, model, material, or intervention.
- Gives enough method and result detail for the target reader to decide relevance.
- Uses simple, conventional language.
- Signals uncertainty, potential, or limitation when evidence requires it.
- Avoids unsupported promotional claims.
- Aligns with the title, results, discussion, `content_analysis.md`, and `writing_blueprint.md`.

## Reference Files

- Read `references/abstract_workflow.md` for the detailed drafting workflow and blueprint handoff.
- Read `references/abstract_models.md` when choosing the abstract structure or adapting to a journal type.
- Read `references/abstract_revision_checklist.md` when revising, compressing, or diagnosing an abstract.
