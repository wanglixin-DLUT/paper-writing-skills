# Reproducibility And Evidence

Use this reference to extract factual Methods details from notes, code, configs, and logs.

## Evidence Priority

Prefer:

1. User-confirmed descriptions.
2. `content_analysis.md`.
3. Source code and configs tied to reported runs.
4. Experiment logs and result tables.
5. README, scripts, notebooks, or paper notes.
6. Generic field convention only for framing, never for specific facts.

Do not invent:

- Hyperparameters.
- Dataset sizes or splits.
- Hardware.
- Baselines.
- Statistical tests.
- Model dimensions.
- Training duration.
- Exclusion criteria.

Use placeholders when information is needed but unavailable.

## Detail Checklist

Depending on the study, extract:

- Materials, data, equipment, software, or model source.
- Inclusion/exclusion criteria.
- Dataset construction, split, preprocessing, augmentation, and normalization.
- Model architecture and major components.
- Objective functions, losses, constraints, and regularization.
- Training procedure, optimizer, schedule, batch size, epochs, seeds, hardware, and precision.
- Inference or deployment procedure.
- Evaluation metrics, baselines, statistical tests, and comparison protocol.
- Ablation design and what each ablation removes or changes.
- Quality control, calibration, annotation checks, or validation procedures.
- Ethical approval, consent, licensing, or data availability if relevant.

## Justification

Justify a choice when:

- The choice affects validity or interpretation.
- Multiple reasonable alternatives exist.
- The method differs from a standard procedure.
- A reviewer might ask why this dataset, model, metric, or baseline was chosen.
- The choice is central to the contribution.

Keep justifications factual and concise.

## Ownership And Provenance

Make clear whether a method was:

- Developed in this study.
- Adapted from prior work.
- Used exactly as standard.
- Reimplemented by the authors.
- Provided by an external package, dataset, instrument, or benchmark.

For borrowed or adapted methods, cite or preserve citation placeholders. For code-based work, keep internal file paths in analysis notes or comments but usually not in the final paper prose.

## Missing Detail Handling

When drafting, use explicit placeholders:

- `[dataset split needed]`
- `[optimizer and learning rate needed]`
- `[baseline citation needed]`
- `[hardware details needed]`
- `[statistical test needed]`

In the final response, list these as missing inputs.
