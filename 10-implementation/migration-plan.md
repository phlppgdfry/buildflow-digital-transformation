# Migration and cutover data

1. Extract ERP masters and operational spreadsheets to restricted staging; checksum/date/source.
2. Map immutable ERP keys to operational AST/location IDs. Normalise category/location; do not infer serials.
3. Validate duplicate IDs/serials, inactive projects, missing owner/serial, impossible dates and negative financial values.
4. Quarantine anomalies with Warehouse owner; physical sweep resolves duplicates. Do not overwrite ERP capital values from Excel.
5. Trial import and count/value/location reconciliation on pilot sample; users confirm assets and QR readability.
6. Cutover freeze: snapshot old sheet and app; final delta; import, sample verify, owner approval. Archive old sheet read-only.
7. Record mapping/version and source row lineage. Opening history entry states migrated, not a fabricated checkout.

Rollback requires preserving new transactions and reconciling physical state. Never restore an old asset snapshot and lose a loan made during cutover. Open claims must retain evidence references and ERP externalRef. Data-quality acceptance: all pilot IDs unique, ≥98% verified locations, all cost centres/mappings valid; unresolved exceptions have owners.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
