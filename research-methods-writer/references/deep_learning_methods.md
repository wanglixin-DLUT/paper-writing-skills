# Deep Learning Methods

Use this reference when the study involves neural networks, machine learning, computer vision, NLP, multimodal learning, reinforcement learning, generative models, or related systems.

## Core Subsections

Common deep learning Methods subsections:

- Problem formulation.
- Dataset and preprocessing.
- Model architecture.
- Objective function or training loss.
- Training procedure.
- Implementation details.
- Inference procedure.
- Evaluation protocol.
- Baselines.
- Ablation studies.

Use only subsections that match the target journal and the paper's contribution.

## Model Architecture

Explain:

- Input and output.
- Major modules and data flow.
- What is new or modified.
- How the new component interacts with existing components.
- Model size or important dimensions if relevant.
- Figure reference if an architecture diagram exists.

Avoid:

- Line-by-line code narration.
- Unexplained acronyms.
- Claiming novelty without linking to the contribution evidence.

## Data And Preprocessing

Explain:

- Dataset source and task.
- Splits and sampling.
- Preprocessing, normalization, tokenization, resizing, filtering, augmentation, or label handling.
- Leakage prevention if relevant.
- Class balance, domain shift, or missing data handling when it affects interpretation.

## Training

Explain:

- Objective/loss.
- Optimizer and schedule.
- Batch size, epochs/steps, stopping criteria, seeds, precision, hardware, and framework when relevant.
- Pretraining, fine-tuning, distillation, curriculum, or multi-stage training.
- Regularization and augmentation.

If details come from configs, preserve their values exactly. If values are not located, mark them.

## Evaluation

Explain:

- Metrics and why they fit the task.
- Baselines and comparison protocol.
- Test split or benchmark.
- Statistical testing or confidence intervals when available.
- Ablation design.
- Efficiency metrics if claimed.

Ensure the Results section can refer back to this protocol without re-explaining it.

## Baselines And Ablations

For each baseline:

- Identify source or citation.
- State whether it was reimplemented, run from released code, or copied from published results.
- State whether the same data, preprocessing, and metrics were used.

For each ablation:

- State what was removed or changed.
- Connect it to a contribution claim.
- Avoid describing ablations that do not appear in Results unless they explain protocol.

## Implementation Details

Include:

- Framework and version if important.
- Hardware if performance, runtime, or reproducibility depends on it.
- Public code or checkpoint availability if relevant.
- Random seeds or number of runs if used.

Do not overfill the main Methods section with environment minutiae unless the target venue expects it. Put exhaustive details in supplement when appropriate.

## Claim Alignment

Before finalizing, check:

- If the Introduction claims a new architecture, Methods describes the architecture.
- If the Abstract claims improved performance, Methods describes the comparison protocol.
- If Results show ablations, Methods defines the ablation conditions.
- If Discussion mentions limitations, Methods gives enough context to understand them.
