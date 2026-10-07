# Functional requirements

| ID | Required behaviour | Priority |
|---|---|---|
| FR-01 | Register and identify asset with immutable ID and QR | Must |
| FR-02 | Check out available asset to valid site and active custodian | Must |
| FR-03 | Inspect return before releasing asset; damaged return creates linked Draft claim | Must |
| FR-04 | Dispatch and confirm transfer with sender custody until receipt | Must |
| FR-05 | Record append-only movement/status history | Must |
| FR-06 | Control reservation, maintenance, loss and retirement transitions | Must |
| FR-07 | Create claim with asset/site, description and restricted evidence | Must |
| FR-08 | Triage and request missing information with original SLA clock | Must |
| FR-09 | Manager approval plus Finance when estimate >€5,000; no self-approval | Must |
| FR-10 | Queue approved repair commitment to ERP and reconcile invoice actuals | Must |
| FR-11 | Send idempotent SLA reminders and escalation | Should |
| FR-12 | Save offline draft; require online validation before confirmed custody | Must |
| FR-13 | Generate optional reviewable AI structure without decision rights | Could |
| FR-14 | Report explicit denominators, project scope and completeness | Should |

All writes verify role, project access and record version in the production design. Use stable transaction IDs, preserve prior events and reject invalid transitions rather than silently adjusting data. Functional requirements describe the target; [prototype capability map](../08-prototype/README.md) identifies implemented subsets.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
