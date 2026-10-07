# Damage claims exceptions

| Exception | Handling / owner |
|---|---|
| Unknown asset | Triage links temporary reference; financial dispatch blocked until ERP mapping validated; coordinator |
| Missing evidence | Keep Draft or request information with reason; resolution clock remains; coordinator |
| Suspected personal data in photo | Restrict/quarantine, redact per policy, never attach to Teams message; IT/privacy |
| Reporter is approver | Route delegated manager; never self-approve; Operations |
| Amount changed after approval | Invalidate approvals and hold ERP command; reapproval/amendment if already dispatched; Finance |
| ERP timeout | Lookup external reference before resend; DLQ if unresolved; IT |
| Supplier unavailable | Escalate scheduling, never fabricate completion; Procurement |
| Invoice mismatch | Awaiting Invoice stays open; Finance reconciles discrepancy |
| AI unavailable / invalid output | Manual form, no workflow block; coordinator |
| Reopened closed claim | Reason and new revision; retain original cost/history; Operations |

Liability is a human recorded assessment. A claim rejection requires reason; it does not itself release an unsafe asset. An urgent safety response is outside financial approval and must not wait for it.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
