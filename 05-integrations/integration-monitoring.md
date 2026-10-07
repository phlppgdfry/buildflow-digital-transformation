# Integration monitoring

| Signal | Initial alert threshold | Owner / response |
|---|---|---|
| Oldest pending commitment | >15min | IT investigates backlog |
| Dead-letter events | >0 | IT + Finance review before replay |
| Failure ratio | >5% / 15min with ≥20 calls | IT checks auth/throttling/ERP health |
| Master data freshness | Projects >1h, suppliers >48h | IT; banner stale references |
| Daily reconciliation | Any unmatched amount/reference | Finance; do not close affected claims |
| Power Automate failure | Approval/notification run failed | IT + workflow owner |
| SLA breach | triage/approval/resolution deadline | Coordinator then Operations |

Structured event fields: timestamp UTC, event/claim/asset ID, operation, status/error class, attempt, latency and correlation ID. Never log claim description, photo, tokens or unnecessary names. Correlation follows app → flow → adapter → ERP externalRef. Operational dashboard shows pending/failed/replayed and data freshness separately.

Targets are assumptions for pilot tuning. Alert storms require aggregation and an incident owner, not one email per retry.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
