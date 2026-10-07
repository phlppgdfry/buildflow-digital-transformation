# RAID example

**Illustrative register; not real delivery status.** Review weekly; score risks 1–5 likelihood × impact.

| ID / type | Item | Owner | Action / decision date |
|---|---|---|---|
| R-01 Risk | Legacy ERP unavailable or cannot query externalRef | IT | Capability spike before architecture gate; fallback/quarantine |
| R-02 Risk | Low user adoption or duplicate entry | Operations | Operator co-design, observe pilot task time |
| R-03 Risk | Site connectivity unreliable | IT | Two-site survey; draft/outage fallback |
| A-01 Assumption | Capital asset master exists and maps to physical ID | Warehouse | Sample 100 assets before migration scope |
| A-02 Assumption | Licences cover target users/connectors | IT Manager | Price/tenant review before build |
| I-01 Issue (simulated) | Duplicate AST ID in sample Excel | Warehouse | Quarantine; physical check; do not merge |
| I-02 Issue (simulated) | Missing serials in sample extract | Warehouse | Record exception; verify on next maintenance |
| D-01 Dependency | Supplier repair workflow and external ref | Procurement | Confirm pilot supplier before invoice UAT |
| D-02 Dependency | Privacy/evidence retention decision | Privacy adviser | Resolve before real image processing |
| D-03 Dependency | Entra project/manager mapping | IT + Operations | Validate scope/delegation before UAT |

Keep risk (future uncertainty) distinct from issue (observed condition). Portfolio example issues are synthetic. Escalate critical path dependencies to steering, not hidden inside technical tasks.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
