# Digital Transformation Case Study

**Inventory + Damage Claims**

A portfolio case demonstrating end-to-end transformation from stakeholder discovery to production rollout.

[Executive Summary](application-kit/01-executive-summary.md) · [5-Minute Demo](application-kit/demo/5-minute-story.md) · [Architecture](ARCHITECTURE.md) · [Live Prototype](https://phlppgdfry.github.io/buildflow-digital-transformation/) · [Full Case Study](application-kit/exports/case-study.pdf)

**Independent portfolio case.** BuildFlow Group is fictional. No confidential employer data, client deployment or realised savings are claimed. Workshops are simulated; UAT and rollout are prepared plans. Microsoft / ERP integrations are target designs; the public prototype uses browser simulations.

[Portfolio landing page](https://phlppgdfry.github.io/buildflow-digital-transformation/application-kit/) · [Transformation Workspace](https://phlppgdfry.github.io/buildflow-digital-transformation/application-kit/workspace/) · [Start here](START-HERE.md)

## Transformation journey

```text
DISCOVER → ANALYSE → MODEL → DESIGN → INTEGRATE → AUTOMATE → TEST → IMPLEMENT → MEASURE
```

BuildFlow loses track of equipment through informal handoffs and follows damage through disconnected messages. The case investigates custody and ownership, models inspected returns and linked claims, preserves ERP financial ownership, and plans acceptance, adoption and measurement.

## What this demonstrates

| Role requirement | Inspectable evidence |
|---|---|
| Stakeholder analysis | [Stakeholder matrix](01-discovery/stakeholder-matrix.md) |
| Workshop methodology | [Simulated workshop](01-discovery/workshop-notes-example.md) |
| Requirements | [Traceability from need to UAT and KPI](02-requirements/requirements-traceability-matrix.md) |
| BPMN | [Five validated non-executable models](03-processes/bpmn/README.md) |
| Business / IT bridge | [Architecture](04-solution-design/architecture.md) |
| API / ERP | [OpenAPI](05-integrations/api-contracts/openapi.json), [ownership and reconciliation](05-integrations/erp-integration.md) |
| Power Automate | [Flow blueprints](06-automation/power-automate/README.md) |
| Responsible AI | [Opportunity assessment](07-ai/ai-opportunity-assessment.md) |
| Acceptance / delivery | [24 prepared UAT cases](09-testing/uat-scenarios.md), [rollout](10-implementation/rollout-plan.md) |
| End-user change | [Training](11-change-management/training-plan.md), [adoption](11-change-management/adoption-plan.md) |
| Business value | [KPI definitions](13-kpis/target-kpis.md), [conservative business case](13-kpis/business-case.md) |

## Two layers, one source of truth

The evidence remains in chapters `01-discovery/` through `14-demo/`. The separate [application kit](application-kit/START-HERE.md) provides recruiter, manager and technical views, PDFs, an editable eight-slide deck with speaker notes, interview defence, CV and LinkedIn copy. Its [source manifest](application-kit/content/case.json) identifies canonical evidence and labels assumptions.

## Demonstrate locally

Node.js 24 required. No external credentials or live AI provider needed.

```sh
npm ci
npm start
```

Open http://localhost:3000. See [prototype instructions](08-prototype/README.md) for roles, reset, API and scope. Public Pages stores fictional changes in your browser; local mode uses SQLite and REST.

```sh
npm run check
npm run check:kit
npm test
npm run test:ui
npm run test:pages
npm run test:kit
npm run check:bpmn
npm run build:pages
```

## Read more

[Full analysis case](CASE_STUDY.md) · [Executive walkthrough](EXECUTIVE_DEMO.md) · [Operational runbook](05-integrations/operations-runbook.md) · [Application kit audit](application-kit/audit/repository-audit.md) · [Quality review](application-kit/audit/quality-review.md)
