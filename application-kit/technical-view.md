# Technical manager view

Independent portfolio case. Microsoft/ERP components are the proposed target; tested code is the local API and browser simulation.

| Boundary | Business reason | Source |
|---|---|---|
| Command / Dataverse custom API | Custody status, history and outbox change together | [Architecture](../04-solution-design/architecture.md) |
| ERP system of record | Preserve masters, capital values and invoice accounting | [ERP matrix](../05-integrations/erp-integration.md) |
| Async outbox / adapter | Returns continue during ERP maintenance; uncertain delivery remains visible | [Data flow](../04-solution-design/data-flow.md) |
| Idempotency and versions | Prevent double allocation and duplicate financial requests | [OpenAPI](../05-integrations/api-contracts/openapi.json), [errors](../05-integrations/error-handling.md) |
| Entra + scoped RBAC | Trusted identity/project scope and no self-approval | [Security](../04-solution-design/security.md) |
| Restricted evidence | Minimise photo exposure; scan/access/retention gates | [Data model](../04-solution-design/data-model.md) |
| Durable Power Automate approvals | Lifecycle survives separate flow runs and repeated triggers | [Flow designs](../06-automation/power-automate/README.md) |
| Correlation, DLQ and reconciliation | Support can distinguish auth, mapping, timeout and business impact | [Monitoring](../05-integrations/integration-monitoring.md), [runbook](../05-integrations/operations-runbook.md) |
| AI gateway with no decision tools | Suggestions do not approve spend or assign liability | [AI architecture](../07-ai/architecture.md) |

Financial API values use integer EUR cents. A final approval queues a repair commitment, not a journal entry. ERP lookup precedes resend after an ambiguous timeout. Actual cost originates from posted ERP invoice data in the target.

Unverified production gates: vendor contract, token/project scoping, malware scanning, load, restore/recovery, tenant connector behaviour and live-model evaluation. The public demo uses browser-local role simulation and has no backend; the local API's X-Demo-Role is not authentication.

[Architecture defence](interview/defence.md) · [Test strategy](../09-testing/test-strategy.md) · [Start here](START-HERE.md)
