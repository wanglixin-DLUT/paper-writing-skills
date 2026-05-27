# Methods Models

Use these structures as flexible menus. Follow the target journal and target-paper conventions in `writing_blueprint.md` when available.

## Generic Methods Move Menu

Common moves:

1. Method overview or scope.
   - State what was done or used.
   - Restate the aim, gap, or problem only if it helps orient the reader.
   - Identify materials, data, equipment, software, or model source.

2. Detailed procedure or design.
   - Provide sequence, parameters, conditions, materials, preprocessing, training, evaluation, and analysis details.
   - Justify choices when readers may question them.
   - Signal care, control, calibration, validation, or quality assurance.

3. Figure or table explanation.
   - Describe the experimental setup, pipeline, model architecture, dataset split, or protocol shown in a figure/table.
   - Do not rely on the visual alone.

4. Relation to prior methods.
   - Cite and describe reused, adapted, or compared methods.
   - Make clear what is standard, borrowed, modified, or newly introduced.

5. Background needed for method comprehension.
   - Add factual explanation only where needed for the reader to understand or trust the method.

6. Issues, constraints, or deviations.
   - Report limitations, failed steps, exclusions, unavailable data, approximation, or implementation constraints when they affect interpretation.

## Structure Options

### Procedure-First

Best for experimental or process-heavy studies.

Suggested subsections:

- Materials or data source.
- Experimental setup.
- Procedure.
- Measurements.
- Analysis.

### Component-First

Best for complex systems, instruments, models, or algorithms.

Suggested subsections:

- System overview.
- Component 1.
- Component 2.
- Training or operation.
- Evaluation.

### Dataset-Model-Evaluation

Best for many deep learning papers.

Suggested subsections:

- Datasets and preprocessing.
- Model architecture.
- Training objective and optimization.
- Implementation details.
- Evaluation protocol.
- Baselines and ablations.

### Main-Text Plus Supplement

Use when target papers put technical detail in supplementary material.

Main text should still include:

- High-level method overview.
- Core design choices.
- Dataset and evaluation protocol.
- Details required to understand Results.
- Pointer to supplement for exhaustive parameters.

Supplement can include:

- Full hyperparameter grids.
- Additional implementation details.
- Extended ablations.
- Full dataset preprocessing rules.
- Additional proofs, derivations, or hardware details.

## Choosing The Structure

Choose based on:

- What the target journal does.
- What readers need to trust the Results.
- Whether the method itself is the contribution.
- Whether reproducibility requires many details.
- Whether section length is constrained.

If the method is the main contribution, give it structural prominence. If the method is routine and results are central, keep the method efficient but complete.
