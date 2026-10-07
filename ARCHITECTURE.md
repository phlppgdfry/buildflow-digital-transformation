# Architecture at a glance

```mermaid
flowchart TB
 U[Site and warehouse users] --> UI[Power Apps target / Web demo]
 E[Entra ID] --> UI
 UI --> API[Command API / Dataverse custom APIs]
 API --> DB[(Dataverse target / SQLite demo)]
 API --> DOC[SharePoint restricted evidence]
 DB --> F[Power Automate orchestration]
 DB --> O[Outbox + integration adapter]
 O --> ERP[Existing ERP: masters, commitments, invoices]
 F --> M[Microsoft 365 notifications]
 API --> AI[Approved AI service: optional suggestions]
 O --> MON[Monitoring + reconciliation]
 F --> MON
```

**Business:** clear asset custody, inspect returns, accountable claims and approval controls.

**Application:** a field/warehouse front end, atomic command boundary, approval orchestration and ERP adapter. Native Dataverse reads are acceptable; all custody writes use custom APIs/plugins so status, history and outbox commit together. Avoid duplicate middleware for ordinary reads.

**Data:** ERP owns financial/master entities. Dataverse owns movements, claims and approval decisions. SharePoint owns restricted binaries; Dataverse holds metadata and references. Reporting consumes curated read models.

**Integration:** asynchronous at-least-once outbound events; stable business reference and inbox deduplication. API timeouts never imply a financial action failed. Reconcile before retrying an uncertain response.

[Detailed architecture](04-solution-design/architecture.md) · [Data model](04-solution-design/data-model.md) · [Decisions](04-solution-design/decision-log.md) · [ERP ownership](05-integrations/erp-integration.md).

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
