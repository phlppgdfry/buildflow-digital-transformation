# Architecture — business, application, data and integration

## C4 system context

```mermaid
flowchart LR
 F[Field employee / Warehouse] --> B[BuildFlow operations solution]
 M[Manager / Finance] --> B
 B <--> E[Existing ERP]
 B --> S[SharePoint evidence]
 B --> N[M365 collaboration]
 B --> A[Approved AI processor]
 I[IT support] --> B
```

## Container view

```mermaid
flowchart TB
 U[Power Apps field/warehouse UI] --> R[Dataverse reads: scoped RBAC]
 U --> C[Dataverse custom API + plugin command boundary]
 C --> D[(Dataverse: assets, movements, claims, approval state, outbox)]
 U --> S[SharePoint upload with restricted document metadata]
 D --> P[Power Automate: durable approvals & notifications]
 D --> X[ERP integration adapter + inbox/outbox ledger]
 X <--> E[ERP API / staged file fallback]
 C --> A[AI gateway: minimised retrieval + schema validation]
 X --> L[Application Insights / operational alerts]
 P --> L
```

Business capabilities: custody, condition inspection, incident handling, approval control and benefits measurement. Data domains: reference/master, operational transaction, evidence, finance and derived metrics. Integration capabilities: stable business keys, mapping, deduplication, retry and reconciliation.

The command plugin writes state, history and outbox in one transaction. A flow is not a substitute for atomic movement validation. The adapter alone holds ERP credentials; apps cannot call invoice posting directly. SharePoint upload completion must be verified before evidence can satisfy submission. A document reference is not proof of a safe file.

Deploy dev/test/prod separately using versioned solutions and connection references. Licence costs, DLP connector policy, data region and restore features must be verified in tenant procurement/security gates. No production availability is asserted here.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
