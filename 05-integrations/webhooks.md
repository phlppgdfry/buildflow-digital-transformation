# Webhook contract

Target event envelope:

```json
{"eventId":"evt-005","schemaVersion":1,"type":"claim.approved","aggregateId":"CLM-0001","revision":2,"occurredAt":"2026-01-19T10:00:00Z","correlationId":"corr-003","data":{"estimatedCents":620000,"currency":"EUR","externalRef":"BF-CLM-0001-r2"}}
```

Receive only authenticated HTTPS requests from the integration service. If a vendor requires HMAC, verify raw-body signature and timestamp (±5min), compare constant-time, rotate keys and dedup eventId; define this with the vendor. Return 202 only after durable inbox write, not after completion. Reject unsupported schema version to quarantine. Return 200 for a verified duplicate without repeating effects. No personal photos or access tokens in events.

Out-of-order claim revision or ERP watermark: store and reconcile; never overwrite a newer record. Notification consumers have their own dedup key. Demo does not expose a public webhook receiver.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
