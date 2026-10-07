# BPMN model catalogue

Five **OMG XSD-validated, non-executable BPMN 2.0 collaboration models** with diagram interchange (DI). Open `.bpmn` directly in Camunda Modeler. Service tasks document logical work, not deployable engine bindings. Preview SVGs in GitHub or open them in a browser for zoom.

## Material checkout

[Editable BPMN](inventory-checkout.bpmn) · [SVG preview](../../docs/diagrams/inventory-checkout.svg)

**Owner:** Warehouse manager. **Trigger:** Scan/request for available or reserved asset. **Output:** Confirmed assignment or explicit exception.

Lanes expose accountable handoffs; gateways make business decisions explicit. User tasks require people; service tasks identify transactional automation. Unsafe/unavailable paths are modelled separately so happy-path completion cannot hide rejection or quarantine.

Automation candidates: validation, atomic history/state/outbox, notification and monitored dispatch. Financial and safety judgements remain human.

## Material return

[Editable BPMN](inventory-return.bpmn) · [SVG preview](../../docs/diagrams/inventory-return.svg)

**Owner:** Warehouse manager. **Trigger:** Asset arrives from site. **Output:** Inspected return; available or quarantined with linked claim.

Lanes expose accountable handoffs; gateways make business decisions explicit. User tasks require people; service tasks identify transactional automation. Unsafe/unavailable paths are modelled separately so happy-path completion cannot hide rejection or quarantine.

Automation candidates: validation, atomic history/state/outbox, notification and monitored dispatch. Financial and safety judgements remain human.

## Material transfer

[Editable BPMN](inventory-transfer.bpmn) · [SVG preview](../../docs/diagrams/inventory-transfer.svg)

**Owner:** Operations manager. **Trigger:** Sending site dispatches assigned asset. **Output:** Destination custody only after accepted receipt.

Lanes expose accountable handoffs; gateways make business decisions explicit. User tasks require people; service tasks identify transactional automation. Non-interrupting timer alerts after 24h without confirming receipt. Wrong destination or damaged receipt needs human exception handling.

Automation candidates: validation, atomic history/state/outbox, notification and monitored dispatch. Financial and safety judgements remain human.

## Damaged material handling

[Editable BPMN](inventory-damage.bpmn) · [SVG preview](../../docs/diagrams/inventory-damage.svg)

**Owner:** Warehouse manager. **Trigger:** Damage detected on return or site. **Output:** Safe condition controlled independently from claim finance.

Lanes expose accountable handoffs; gateways make business decisions explicit. User tasks require people; service tasks identify transactional automation. Unsafe/unavailable paths are modelled separately so happy-path completion cannot hide rejection or quarantine.

Automation candidates: validation, atomic history/state/outbox, notification and monitored dispatch. Financial and safety judgements remain human.

## Digital damage claim lifecycle

[Editable BPMN](damage-claim-full.bpmn) · [SVG preview](../../docs/diagrams/damage-claim-full.svg)

**Owner:** Operations manager. **Trigger:** Reporter submits evidenced claim. **Output:** Reconciled claim closure with human decisions.

Lanes expose accountable handoffs; gateways make business decisions explicit. User tasks require people; service tasks identify transactional automation. ERP is a separate pool with message flow. Interrupting error boundary routes uncertain delivery to lookup/retry/DLQ. High-value gateway requires Finance. Non-interrupting triage timer uses the computed triageDueAt deadline. A separate hourly SLA-monitor pool evaluates persistent deadlines throughout information requests, repair and invoice stages; it sends a correlated, deduplicated message without approving.

Automation candidates: validation, atomic history/state/outbox, notification and monitored dispatch. Financial and safety judgements remain human.

## Modelling limitations

BPMN is documentation, not executable Camunda deployment. Expressions label business conditions without engine bindings. The triage boundary timer uses the computed triageDueAt. The separate SLA-monitor process evaluates persisted business-calendar deadlines across all active stages (AUT-03). Calendar values are computed on submission/review-readiness; diagram expressions are non-executable labels, not engine-specific bindings. Claim reapproval/reopen and detailed financial controls are specified in TO-BE/UAT rather than a giant unreadable model. SVG previews are generated overview layouts; `.bpmn` DI remains editable for modelling review.


---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.

## Validation

`npm run check` parses XML/DI and checks structural references with bpmn-moddle. `npm run check:bpmn` validates against the [official schema snapshot](../../docs/schemas/bpmn/README.md). All five pass XSD validation; this does not make them deployable engine workflows.
