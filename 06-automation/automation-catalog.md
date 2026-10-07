# Automation catalogue

| ID | Goal | Owner | Failure path / measured effect |
|---|---|---|---|
| AUT-01 | Route valid claim to manager | Operations | Missing mapping queue; triage time KPI-08 |
| AUT-02 | Enforce spend delegation | Finance | Pending/rejected, version invalidation; approval KPI-13 |
| AUT-03 | Chase overdue work | Operations | Dedup + failed delivery log; breach KPI-09 |
| AUT-04 | Follow up inspected return | Warehouse | Transaction fails entirely if linked draft fails; damage KPI-06 |
| AUT-05 | Dispatch/reconcile ERP commitment | IT + Finance | Retry/uncertain lookup/DLQ; KPI-10 completeness |

[Flow designs](power-automate/README.md). AUT-05 is an integration adapter operation rather than forcing every action into Power Automate. Correctness stays in transactional command handlers; flows coordinate people.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
