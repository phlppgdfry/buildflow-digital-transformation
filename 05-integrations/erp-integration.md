# ERP integration and ownership

The unnamed legacy ERP is simulated; no vendor API is invented as a confirmed capability. Architecture gate must validate unique external references, query-by-reference, invoice lookup, permissions and throttling with the actual vendor.

| Data | Source → target | Trigger / method | Ownership and mapping |
|---|---|---|---|
| Project / site | ERP → App | 15min incremental REST; file fallback | erpProjectId → siteId; active flag, watermark |
| Employee | ERP → App | 15min incremental | erpEmployeeId, active; Entra subject mapping separate |
| Cost centre | ERP → App | 15min incremental | ERP code; reject unknown cost centre |
| Supplier | ERP → App | Nightly REST | erpSupplierId; no financial bank data copied |
| Capital asset values | ERP → App | Nightly REST | ERP assetId, purchase date/cost/book value, source UTC |
| Movement and inspection | App only | Command | App-owned; ERP not a custody register |
| Approved repair commitment | App → ERP | Final approval event / REST | externalRef BF-{claimId}-r{revision}; estimate in cents, project/cost centre, supplier |
| Purchase order / repair reference | ERP → App | Callback / polling | ERP document ID and original externalRef |
| Actual invoice | ERP → App | Posted invoice extract | invoiceId, actualCents, claim externalRef, postedAt |

**Approval creates a repair commitment/request, not an actual-cost journal.** ERP procurement/Finance create and post PO/invoice under existing controls. Repair scheduling may proceed after approval under policy; closure requires ERP invoice reconciliation.

## Delivery semantics

Commit state, audit and outbox atomically. Worker leases an event, calls ERP using stable externalRef and records receipt. At least once is expected; unique externalRef deduplicates business effects. Store processed event IDs in inbound inbox. Out-of-order updates use source version/watermark; a late old message never reactivates an inactive project.

Retry transient 429/5xx/network errors at illustrative 1, 5, 15, 60 minutes with jitter and Retry-After where supplied. Never blindly retry 400 mapping errors or 401/403. An uncertain timeout first queries externalRef. If no safe lookup exists, quarantine for Finance/IT review. After five unsuccessful attempts, dead-letter with last error, payload hash and correlation ID. Replay requires authorised correction and original business key.

Daily reconcile approved claims, delivery ledger and ERP repair/invoice references; sum counts/amounts per date and compare unmatched entries. No manual deletion to make a queue appear green. Escalate pending >15min to IT, finance-impact >1h to Finance, business sponsor at >4h.

Prototype worker simulates failures, duplicate-safe receipt and ERP reference; it does not implement a real connector, scheduled backoff or financial posting. [Runbook](operations-runbook.md) makes production support responsibilities explicit.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
