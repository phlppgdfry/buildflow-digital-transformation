# Interview deck - eight slides

Independent portfolio case. 16:9. Target duration: 5-10 minutes. [Editable PPTX](../exports/interview-deck.pptx) · [PDF preview](../exports/interview-deck.pdf).

## Slide 1 - The business problem

Custody and claim ownership are fragmented.

- Inventory lives in spreadsheets and informal handoffs.
- Damage evidence arrives through disconnected channels.
- People spend time searching and chasing status.

Visual: problem. Sources: [business-context.md](../../01-discovery/business-context.md).

## Slide 2 - How I approached it

Stakeholder needs become testable process rules.

- Warehouse and site users reconstruct handoffs.
- Finance and IT expose controls and dependencies.
- Requirements connect to acceptance and KPI definitions.

Visual: discovery. Sources: [workshop-notes-example.md](../../01-discovery/workshop-notes-example.md), [requirements-traceability-matrix.md](../../02-requirements/requirements-traceability-matrix.md).

## Slide 3 - AS-IS and TO-BE

Inspection determines availability and starts the claim.

- AS-IS: informal return and incomplete condition record.
- TO-BE: inspect, quarantine damage and create a linked Draft.
- Custody records support investigation, not automatic liability.

Visual: process. Sources: [inventory-return.bpmn](../../03-processes/bpmn/inventory-return.bpmn), [to-be.md](../../03-processes/damage-claims/to-be.md).

## Slide 4 - Solution architecture

ERP remains the financial system of record.

- App owns custody, claims and approval state.
- ERP owns masters, commitments and posted invoices.
- Identity, evidence and monitoring cross every boundary.

Visual: architecture. Sources: [architecture.md](../../04-solution-design/architecture.md), [erp-integration.md](../../05-integrations/erp-integration.md).

## Slide 5 - Automation and AI

Human decisions remain visible and accountable.

- Durable approval routing and deduplicated reminders.
- Manager plus Finance for estimates above EUR 5,000.
- Optional AI draft with explicit review and manual fallback.

Visual: automation. Sources: [02-high-value.md](../../06-automation/power-automate/02-high-value.md), [ai-opportunity-assessment.md](../../07-ai/ai-opportunity-assessment.md).

## Slide 6 - From design to production

Readiness depends on user acceptance and support.

- 24 UAT scenarios prepared, including exceptions.
- Pilot: one warehouse and two sites.
- Training, rollback, hypercare and adoption measurement.

Visual: implementation. Sources: [uat-scenarios.md](../../09-testing/uat-scenarios.md), [rollout-plan.md](../../10-implementation/rollout-plan.md), [adoption-plan.md](../../11-change-management/adoption-plan.md).

## Slide 7 - Business value

Targets require a baseline and follow-up measurement.

- Illustrative targets, not achieved results.
- Warehouse and Operations own operational measures.
- Finance distinguishes cash avoidance from capacity.

Visual: kpis. Sources: [target-kpis.md](../../13-kpis/target-kpis.md), [business-case.md](../../13-kpis/business-case.md).

## Slide 8 - Why this case matters

One traceable journey connects business and IT.

- Discovery and requirements evidence.
- Process, API and ERP decisions.
- User acceptance, adoption and measurement planning.

Visual: rolefit. Sources: [role-requirement-matrix.md](../../application-kit/role-requirement-matrix.md), [decision-log.md](../../04-solution-design/decision-log.md).
