---
name: science-writing-foundations
description: Use when the user wants to analyze target research articles, reverse-engineer journal or field writing conventions, create a reusable writing blueprint or outline for a scientific paper, integrate content_analysis.md from a deep learning project, prepare shared context for other research-writing skills, or diagnose the global narrative, audience, contribution, structure, terminology, and section-level rhetorical moves of a STEMM manuscript.
---

# Science Writing Foundations

Use this skill to turn target papers and project notes into a reusable writing blueprint for scientific manuscripts. The blueprint is a handoff artifact: other section-specific skills can read it before drafting or revising abstracts, introductions, methods, results, discussions, conclusions, and titles.

## Core Principle

Do not treat a research paper as a container of information. Treat it as a reader-facing narrative that assigns a function to each piece of information. Analyze what each section, paragraph, and key sentence is doing before using it as a model.

The aim is not to copy target papers. The aim is to infer current conventions in the user's field and target journal, then express those conventions as a transferable structure for the user's own paper.

## When Starting

Collect or infer:

- Target journal, venue, or field, if available.
- The user's manuscript type: article, letter, short communication, thesis chapter, review-adjacent article, conference paper, or grant-related text.
- Target papers: ideally 4-6 recent, well-written papers from the user's target journal or close neighboring journals.
- The user's study notes or `content_analysis.md`: research problem, data/materials, method, key results, contribution candidates, limitations, and intended claims.
- The immediate purpose: create a full-paper blueprint, analyze only target papers, prepare a section-specific handoff, or diagnose an existing draft.

If `content_analysis.md` exists in a deep learning project, read it as the technical source of truth before building the writing blueprint. If target papers are missing, ask for them or search only if the user explicitly asks. If the user provides too many papers, choose the closest 4-6 and explain the selection.

## Workflow

1. Build the target corpus.
   - Record citation or filename, venue, year, article type, and why it is relevant.
   - Prefer current papers from the target venue, but keep one especially clear neighboring paper if it teaches a useful convention.

2. Extract visible conventions.
   - Note title shape, abstract type, section order, section headings, word-count constraints if known, figure/table density, and whether methods are central, shortened, moved, or supplementary.
   - Record recurring surface patterns without copying prose.

3. Reverse-engineer rhetorical moves.
   - For each target paper, describe what sections and key paragraphs do, not what they say.
   - Use transferable function labels such as establishes importance, narrows the problem, identifies a gap, states the study aim, justifies method choice, reports the central finding, calibrates certainty, explains contribution, acknowledges limitation, or opens future work.
   - Track order, frequency, and optionality of moves across the corpus.

4. Build the reader narrative.
   - Identify the likely reader's starting knowledge, likely reason for reading, and likely friction points.
   - State the manuscript's central contribution in one plain sentence.
   - For code-based deep learning papers, derive contribution options from `content_analysis.md` rather than inventing them from writing conventions alone.
   - Convert the study into a logical path from field context to problem, method, evidence, interpretation, and consequence.

5. Create and save the writing blueprint.
   - Use the schema in `references/blueprint_schema.md`.
   - Make the blueprint concrete enough for another skill to draft from it.
   - Keep it independent of any single source paper and avoid pasted source wording.
   - By default, save the blueprint as `writing_blueprint.md` in the active manuscript or project directory unless the user asks for a different path.

6. Provide handoff guidance.
   - List which section-specific skill should use which parts of the blueprint.
   - Flag missing project information that would block drafting.
   - Tell the user where the blueprint was saved and which downstream skill should be used next.

## Output Standards

Prefer a structured blueprint over a long explanation. A good output has:

- A compact corpus summary.
- A global narrative arc for the user's paper.
- Section-level move maps.
- Style and terminology decisions.
- Claims and certainty boundaries.
- Specific handoff notes for downstream writing skills.
- Open questions only when the missing information changes the writing strategy.

## Handoff Contract

Downstream research-writing skills should treat `writing_blueprint.md` as shared context. If a blueprint exists, read it before drafting or revising. If no blueprint exists and the task depends on target-paper conventions, ask the user whether to run this foundation workflow first.

The blueprint is advisory, not a rigid template. Downstream skills may adapt it when the user's section draft, target journal instructions, or new evidence requires a change, but they should preserve the central contribution, terminology decisions, and claims boundaries unless the user revises them.

For deep learning projects, `content_analysis.md` sits upstream of this blueprint. Treat it as the technical evidence map and use this skill to convert that evidence into a target-reader writing strategy.

When analyzing copyrighted target papers, summarize patterns and functions. Do not reproduce long passages. Short quoted snippets are allowed only when necessary to identify a convention, and even then keep them minimal.

## Reference Files

- Read `references/blueprint_schema.md` when creating or updating a reusable writing blueprint.
- Read `references/reverse_engineering.md` when analyzing target articles or explaining how the target-paper model was produced.
