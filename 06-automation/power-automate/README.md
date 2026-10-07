# Power Automate flow blueprints

| Flow | Purpose | Functional design |
|---|---|---|
| AUT-01 | Submitted claim routing | [Submission](01-damage-submitted.md) |
| AUT-02 | High-value approvals | [Dual approval](02-high-value.md) |
| AUT-03 | SLA reminders | [Overdue](03-overdue.md) |
| AUT-04 | Return inspection follow-up | [Return](04-asset-return.md) |

These are **functional design blueprints**, not importable solution exports. Build them in a licensed dev tenant, reference approved connectors, then validate with UAT.

Use solution-aware flows, environment variables and connection references. Separate approval creation from response processing; business state and deadlines live in Dataverse. A long claim lifecycle must not depend on one waiting flow run. Microsoft documents the cloud flow run-duration limit and long-running approval patterns: [approval guidance](https://learn.microsoft.com/en-us/power-automate/create-long-running-approvals).

Dataverse updates can trigger repeatedly, so use trigger filters and unique business event/revision keys. Concurrency controls alone do not guarantee dedup. [Source verification](../../docs/sources.md) records Context7 lookups.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
