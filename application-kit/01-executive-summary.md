# Construction Digital Transformation Case

**Independent portfolio case - BuildFlow Group, a fictional construction company.**

## Challenge

BuildFlow Group tracks reusable equipment and damage incidents through spreadsheets, paper and disconnected messages. Location and custody become unclear, evidence lacks consistent ownership, and Finance manually reconciles repairs. The case investigates those handoffs and designs an integrated operational workflow with a controlled implementation plan.

## My Approach

Discover → Analyse → Design → Integrate → Automate → Implement → Measure

## What I Delivered

- Stakeholder workshop methodology
- BPMN AS-IS / TO-BE models
- Requirements and traceability
- ERP / API architecture
- Power Automate blueprints and reviewed AI
- UAT, rollout and change plan

## Solution

Users → Power Apps target → Dataverse + command rules → ERP adapter → existing ERP.

Power Automate coordinates approvals. Entra ID and restricted evidence protect access. Optional AI produces reviewed suggestions. The executed prototype uses a local API or private browser simulation.

## Business Impact

**Illustrative assumptions and targets - not achieved results.**

| Measure | Baseline → target | Owner |
|---|---|---|
| Inventory accuracy | 92% → ≥98% | Warehouse |
| Claim resolution | 18 → ≤10 business days | Operations |
| Same-shift capture | 55% → ≥95% | Warehouse |

## Role Fit

| Role requirement | Evidence |
|---|---|
| Business ↔ IT bridge | [End-to-end traceability](../02-requirements/requirements-traceability-matrix.md) |
| BPMN | [Process models](../03-processes/bpmn/README.md) |
| APIs | [OpenAPI contract](../05-integrations/api-contracts/openapi.json) |
| ERP | [Ownership and integration](../05-integrations/erp-integration.md) |
| Power Automate | [Flow blueprints](../06-automation/power-automate/README.md) |
| AI | [Human-reviewed assistant](../07-ai/damage-claim-assistant.md) |
| Implementation | [UAT](../09-testing/uat-scenarios.md) and [rollout](../10-implementation/rollout-plan.md) |

[One A4 PDF](exports/executive-summary.pdf) · [Public portfolio](https://phlppgdfry.github.io/buildflow-digital-transformation/application-kit/) · [Start here](START-HERE.md)
