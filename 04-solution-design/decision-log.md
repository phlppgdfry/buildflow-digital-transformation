# Architecture decisions

## ADR-001 — Power Apps versus custom application

**Context:** field/warehouse app, Microsoft estate, limited internal development team. **Options:** Power Apps; bespoke web app; extend ERP UI. **Decision:** propose Power Apps for production pilot, independent web prototype for demonstration. **Rationale:** identity/collaboration/support reuse, rapid co-design. **Consequences:** premium licences and offline/device behaviour require a priced pilot. Reconsider if licences, field UX or command complexity fail agreed acceptance. ERP extension remains viable if it meets mobile/task needs.

## ADR-002 — Dataverse versus SQL

**Context:** relational operations, access controls, workflow integration. **Options:** Dataverse; SQL + custom security; ERP tables. **Decision:** Dataverse target, SQLite local prototype. **Rationale:** native Power Platform integration and governance reduce bespoke support. **Consequences:** capacity costs and transactional plugin expertise; direct multi-step flow writes are insufficient for custody atomicity. SQL can win if existing supported platform and economics justify it.

## ADR-003 — Synchronous versus asynchronous ERP

**Context:** ERP maintenance must not stop a damaged return. **Options:** synchronous request; outbox adapter; nightly batch only. **Decision:** async outbox for commitment; incremental pulls for masters, batch fallback. **Rationale:** resilient local transaction and inspectable reconciliation. **Consequences:** eventual consistency; explicit pending/failed state, dedup and operational ownership. Never resend an ambiguous financial request without lookup.

## ADR-004 — Human review of AI

**Context:** claims affect employees, safety and finance. **Options:** autonomous decision; optional recommendation; no AI. **Decision:** optional recommendation with explicit human review, no approval/booking tools. **Rationale:** text structuring helps without delegating accountability. **Consequences:** evaluation and privacy work; remove feature if benefit is unmeasured or guardrails fail.

## ADR-005 — Offline custody

**Context:** intermittent site internet and shared physical stock. **Options:** fully offline authoritative movement; draft only; block all work. **Decision:** local draft + numbered paper fallback; online version check before confirmation. **Rationale:** avoid double allocation and false truth. **Consequences:** manual reconciliation; pilot must prove this is acceptable before wider rollout.

Status: proposed target decisions validated only within this portfolio. Business decisions and approvals live separately in [governance log](../12-governance/decision-log.md).

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
