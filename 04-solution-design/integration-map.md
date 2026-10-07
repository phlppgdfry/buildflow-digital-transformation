# Integration map

| Exchange | Direction | Trigger | Mechanism | Consistency |
|---|---|---|---|---|
| Projects, cost centres, employees | ERP → Dataverse | 15min incremental pull | REST, staged CSV fallback | Eventual; inactive refs block new allocation |
| Suppliers and capital asset values | ERP → Dataverse | Nightly + on-demand | REST extract | Eventual; source timestamps visible |
| Approved repair commitment | App → ERP | Final human approval | Outbox + adapter API | At least once + business dedup |
| PO/repair reference | ERP → App | Commitment accepted | Callback/poll | Idempotent external reference |
| Actual invoice and financial status | ERP → App | Finance posted invoice | Incremental API/reconciliation | ERP authoritative |
| Approval notifications | App → M365 | Approval task created | Power Automate | Duplicate-safe notification key |
| Evidence | App ↔ SharePoint | Upload / authorised view | Restricted metadata/binary APIs | Submission after scan completion |

[ERP integration](../05-integrations/erp-integration.md) specifies fields, failures and reconciliation. Only sample adapter behaviour is executable locally.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
