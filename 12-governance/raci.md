# RACI

R = performs; A = accountable decision owner; C = consulted; I = informed. Exactly one A per activity. Multiple R are appropriate for collaborative UAT; each task still needs a named lead.

| Activity | Analyst | Business Owner | IT Manager | Developer | Warehouse Manager | Operations Manager | Finance | Key User |
|---|---|---|---|---|---|---|---|---|
| Discovery/workshop | R | A | C | C | C | C | C | C |
| Requirements/process approval | R | A | C | C | C | C | C | C |
| Technical architecture | C | C | A | R | C | C | C | I |
| Custody policy | C | C | C | I | A | R | I | C |
| Financial controls | C | C | C | R | I | C | A | I |
| Implementation/build | C | I | A | R | C | I | C | C |
| Data cleansing/physical validation | C | I | C | R | A | C | C | R |
| UAT coordination | R | A | C | C | R | C | R | R |
| Training/pilot operations | R | C | C | I | R | A | C | R |
| Production go/no-go | R | A | C | I | C | C | C | C |
| Incident/recovery | C | I | A | R | C | C | C | I |
| Benefits measurement | R | A | C | I | C | C | C | C |

The analyst coordinates evidence and recommendation, not technical release authority, financial approval or all process ownership. Business Owner is sponsor; Operations Manager owns operational execution.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
