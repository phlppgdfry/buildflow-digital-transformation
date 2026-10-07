# Operational and management dashboards

| View | Measures | Filter / drilldown | Action |
|---|---|---|---|
| Warehouse daily | Available/Assigned/Damaged, overdue transfers/returns | Site, asset category, owner | Confirm custody/inspection |
| Claims coordinator | Active claims, missing info, triage/approval/resolution deadlines | Status, severity, site, age | Assign or escalate |
| Finance | Approved estimate, pending ERP, actual reconciliation | Claim/ERP ref, cost centre | Resolve mismatch, never edit ERP actual in app |
| IT operations | Queue age, failures, retries, DLQ, master freshness, failed flows | Correlation, error, attempt | Runbook/reconcile |
| Management monthly | KPI-01 through KPI-15 with baseline/target/trend | BU/site/category, cohort/date | Benefits and rollout decision |

No personal blame leaderboards. Show completeness, denominator and sample size. Prototype dashboard uses eight seeded assets and two seeded active claims; those counts are not scaled-company performance. Production reporting design is broader than demo metrics.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
