# Innovation And Evidence Extraction

Use this reference to turn code and logs into defensible contribution candidates.

## Contribution Types

Common deep learning contribution categories:

- Architecture: new module, connection pattern, attention mechanism, encoder/decoder design, fusion strategy, representation layer.
- Objective: new loss, regularizer, contrastive signal, supervision strategy, reward, constraint, curriculum.
- Training strategy: pretraining, fine-tuning, distillation, augmentation, sampling, optimization, schedule, multi-stage training.
- Data: dataset, benchmark, labeling strategy, synthetic data generation, preprocessing pipeline, weak supervision.
- Inference: decoding, retrieval, calibration, pruning, ensembling, test-time adaptation, uncertainty estimation.
- System: efficiency, deployment, memory reduction, speed, scalability, reproducibility tooling.
- Analysis: ablation, diagnostic, interpretability, failure mode, theoretical or empirical insight.

## Contribution Test

For each candidate, answer:

- What exactly changed compared with a baseline?
- Where is it implemented?
- Which config or run activates it?
- What result improves, and under what dataset/protocol?
- Is there an ablation isolating the change?
- Is the improvement statistically or practically meaningful?
- Is it novel, or mainly an integration/tuning choice?
- What limitation or condition should be disclosed?

## Evidence Chain Format

Use this pattern:

- Candidate contribution:
- Implementation evidence:
- Experiment evidence:
- Baseline or comparison:
- Ablation support:
- Claim strength:
- Writing use:
- Missing evidence:

## Claim Strength

Use cautious labels:

- Demonstrated: directly supported by controlled experiments and ablations.
- Supported: supported by results, but isolation or provenance is incomplete.
- Suggested: plausible from results, but needs more controlled evidence.
- Implemented: present in code, but not yet supported by clear results.
- Speculative: idea exists in notes but lacks implementation or results.

## Avoid These Mistakes

- Calling a component novel just because it is central to the code.
- Treating a training trick as a paper contribution unless results isolate its effect.
- Claiming state of the art without a complete comparison protocol.
- Using one strong run without checking seeds, splits, or metric consistency.
- Ignoring negative or failed runs that define claim boundaries.

## Contribution Sentence Template

Draft contribution candidates as:

`This work [introduces/proposes/develops/evaluates] <technical object> that <solves/enables/improves> <specific problem>, supported by <evidence>.`

Then revise for claim strength:

- Strong: `demonstrates`, `improves`, `reduces`, `outperforms`.
- Moderate: `supports`, `enables`, `provides evidence for`.
- Cautious: `suggests`, `may improve`, `has potential to`.
