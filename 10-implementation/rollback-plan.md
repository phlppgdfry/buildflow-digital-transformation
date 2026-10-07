# Rollback and continuity

Triggers: double allocation, unauthorised approval, evidence exposure, irreconcilable ERP duplicates, failed recovery or critical service outage beyond agreed RTO. IT proposes technical rollback; Business Owner authorises operational continuity; Finance authorises treatment of financial work.

1. Stop new commands and worker dispatch; tell sites/warehouse and preserve audit/outbox/ERP receipts.
2. Capture all movements since cutover with physical custodian/location. Use numbered outage ledger for ongoing safety/custody.
3. Roll back application version/configuration only where schema-compatible; restore backup only after replay plan and IT recovery check.
4. Finance queries ERP externalRef before any dispatch replay; do not reverse ERP documents automatically.
5. Warehouse reconciles paper ledger plus preserved accepted transactions against physical assets.
6. Fix/rehearse in test; retest affected UAT and access; authorised restart and monitored reconciliation.

Keep backups and migration mapping. Pilot restore drill must prove RPO ≤1h/RTO ≤4h; this portfolio has not executed a cloud restore. Old Excel cannot simply become authoritative without reconciling new movements.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
