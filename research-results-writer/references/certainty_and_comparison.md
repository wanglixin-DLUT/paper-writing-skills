# Certainty And Comparison

Use this reference to choose result language proportional to evidence.

## Separate Four Layers

1. Observation: what was measured or found.
2. Comparison: how it differs from baselines, prior work, predictions, or variants.
3. Explanation: why the result may have occurred.
4. Implication: what the result may mean.

Do not write implication as if it were observation.

## Claim Strength Labels

- Observed: the data show a value, trend, or difference.
- Consistent with: the result matches a hypothesis, prior work, or mechanism.
- Supports: the result provides evidence for an interpretation.
- Suggests: plausible but not proven.
- Demonstrates: use only when evidence directly establishes the claim.
- Establishes: use sparingly for strong, controlled evidence.

## Risk-Reducing Language

Use cautious language when:

- Only one dataset, seed, setting, or population was tested.
- A result is indirect.
- The mechanism is not isolated.
- A comparison protocol is incomplete.
- The result is preliminary or noisy.

Strategies:

- Use `may`, `might`, `could`, `appears to`, `suggests`, `is consistent with`.
- Name the scope: in this dataset, under these conditions, for this benchmark.
- Tie the statement to evidence: these results suggest rather than this proves.

## Comparison Types

- Against baseline models or methods.
- Against prior studies.
- Against predictions or hypotheses.
- Against simulations or theoretical models.
- Between experimental conditions.
- Between ablation variants.
- Across datasets, domains, or subgroups.

For each comparison, ensure the protocol is fair or clearly bounded.

## Deep Learning Comparison Risks

Check:

- Same data split?
- Same metric definition?
- Same preprocessing?
- Same compute budget or model size, if relevant?
- Same training regime?
- Same number of seeds or trials?
- Published result versus rerun baseline?

If comparability is incomplete, soften the claim.
