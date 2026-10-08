# Interview answers and evidence

Use the reasoning, not a memorised pitch. If new evidence changes the conditions, change the decision.

## 1. Why Power Apps rather than a custom app?

The Microsoft estate and support team make it a candidate, not a foregone conclusion. Compare tenant licences, field UX/offline needs, transaction complexity and support. Use an ERP module or custom app if it better satisfies the same process criteria.

[Source](../../04-solution-design/decision-log.md).

## 2. Why Dataverse?

It integrates access/governance and workflow in the target estate. Capacity cost and plugin expertise are trade-offs. SQL can be preferable with an already supported platform and better economics. Atomic custody rules still need a command boundary.

[Source](../../04-solution-design/decision-log.md).

## 3. What if ERP has no modern API?

Test a controlled staging/export import with stable references, validation and reconciliation. Do not claim realtime sync or blind idempotent writes that the vendor cannot support. An uncertain financial request may need manual Finance review.

[Source](../../05-integrations/erp-integration.md).

## 4. How do you determine requirements?

Observe a handoff, validate the root-cause hypothesis and ask who decides each exception. Prioritise with owners, write acceptance examples and trace each rule to component, UAT and KPI. Avoid collecting feature requests without a business need.

[Source](../../02-requirements/requirements-traceability-matrix.md).

## 5. Two stakeholders disagree. What do you do?

Clarify the underlying need and decision authority, show the trade-off with a concrete scenario and record the decision/open validation. Finance can veto a financial-control breach; voting is not a substitute for ownership.

[Source](../../01-discovery/workshop-notes-example.md).

## 6. What if an experienced operator rejects the app?

Observe how the existing sheet helps, invite the operator to co-design the shortest viable flow and compare task time in a representative pilot. Keep a controlled outage form, remove duplicate entry when acceptance works and act on feedback.

[Source](../../11-change-management/adoption-plan.md).

## 7. Why AI here, and when would you remove it?

Claim drafting is repetitive and may benefit from structuring, but safe core work does not depend on AI. Remove it if edit time plus costs show no gain or privacy/quality gates fail. Rules handle approval thresholds, custody validation and invoice matching.

[Source](../../07-ai/ai-opportunity-assessment.md).

## 8. Can AI decide who caused the damage?

No. Custody is evidence of possession, not legal responsibility. The design provides factual summaries and missing-information prompts. A human assesses liability and documents sources.

[Source](../../07-ai/human-in-the-loop.md).

## 9. What happens if Power Automate fails?

The approval/task state remains durable. Record failed run/correlation, retry safe notification work with deduplication and route unresolved owner/connector errors to operations. Stock correctness never depends on several separate flow writes.

[Source](../../06-automation/power-automate/README.md).

## 10. What does an ERP timeout mean?

The response is unknown, not proof that ERP rejected the request. Query by stable externalRef before replay. Quarantine if safe lookup is unavailable and reconcile Finance records before closure.

[Source](../../05-integrations/operations-runbook.md).

## 11. Who owns the data?

ERP owns masters and posted finance. The operational app owns custody, claims and decisions; SharePoint owns restricted evidence binaries in the target. Mapping and reconciliation are explicit responsibilities.

[Source](../../04-solution-design/data-model.md).

## 12. How would you actually roll out?

Verify ERP capability, licences, clean labelled pilot data and trusted roles first. Execute business UAT, train champions, pilot one warehouse/two sites, reconcile daily, evaluate acceptance and expand in waves with rollback/support ready.

[Source](../../10-implementation/rollout-plan.md).

## 13. Are these benefits real?

No. Baselines, targets and costs are illustrative. Measure a real baseline, validate disjoint purchase/loss categories, value redeployed capacity separately and follow up at 30/60/90 days.

[Source](../../13-kpis/business-case.md).

## 14. What did you implement personally in this portfolio?

The portfolio contains structured analysis/design artefacts and a tested prototype, created with tooling assistance. Explain the artefacts you reviewed and can defend. Do not claim real workshops, deployed Power Platform/ERP or unmeasured client impact.

[Source](../../08-prototype/README.md).
