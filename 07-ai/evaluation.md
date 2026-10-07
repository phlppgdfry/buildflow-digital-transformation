# AI evaluation plan and dataset

[Synthetic evaluation set](evaluation/dataset.json) contains 12 labelled cases: ordinary mechanical/electrical damage, sparse text, injection, privacy, unknown asset, no-evidence, high cost, liability request and multilingual ambiguity.

Evaluate structured field accuracy, factual summary support, essential missing-field recall, unsupported cost/liability rate, injection resistance and human edit time. Two reviewers (Warehouse + coordinator) label independently and resolve disagreements. Split future real anonymised data by incident/site, not random near-duplicate phrases.

Proposed release gates: 0 unauthorised decisions, 0 unsupported financial/liable claims, ≥90% essential missing-field recall, ≥85% category agreement on supported cases; median human draft/edit time at least 20% below manual with no quality loss. Small synthetic set is a smoke suite only, not statistical validation.

Run `npm test` for local mock safety assertions. **No live model has been evaluated, and these target gates are not claimed achieved.** Before live pilot, hold out ≥100 representative approved examples and run blinded review. Record prompt/model versions, inputs, outputs, reviewer, disagreements and confidence intervals; regression test any version change.

Prototype score is deterministic completeness metadata and explicitly not a calibrated likelihood. Production thresholds 0.80/0.60 are hypotheses, not measured calibration.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
