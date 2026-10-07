# Runbook — damage claims stopped syncing with ERP

**Incident:** approved claims remain pending; ERP commitments missing. Service owner IT; financial validation owner Finance. Priority rises if repairs or invoices are blocked.

1. **Detect:** oldest pending >15min or dead-letter >0. Create incident ID and record UTC.
2. **Triage:** distinguish app approvals, outbox dispatch, authentication, mapping and ERP availability. Confirm users can still safely register/return assets.
3. **Logs:** query correlation/event IDs, attempt count, error classes and ERP externalRef. Do not paste personal evidence into incident tickets.
4. **Scope:** list affected time window, claims/revisions, sites and amounts. Check already delivered references; never assume timeout means absence.
5. **Workaround:** continue registration and approval; Finance-controlled repair request uses the same externalRef in a numbered exception register. No informal invoice posting.
6. **Resolve:** restore credentials/service or repair mapping in test; approved change and deploy rollback path. Mapping errors need corrected data, not endless retries.
7. **Replay/reconcile:** query ERP by externalRef, mark existing receipts or replay original event. Finance compares count/amount/invoice references and resolves ambiguous outcomes before closure.
8. **Communicate:** Operations/Warehouse see scope and next update time; Finance sees affected commitments. Notify every hour during material outage; no sensitive attachments.
9. **Root cause:** reconstruct timeline, user effect and contributing data/process issues within two working days; no blame-based assumptions.
10. **Prevent:** add missing contract test/alert, review key expiry, update runbook and rehearse replay. Close only after Finance reconciliation and backlog recovery evidence.

During hypercare IT owns technical incident closure; business owner accepts residual operational work. A prototype demonstration uses fail/retry buttons; it is not a verified disaster recovery drill.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
