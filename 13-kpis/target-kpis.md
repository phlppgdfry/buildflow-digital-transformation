# KPI definitions and targets

**Illustrative assumptions — not real company data.** Targets are hypotheses to validate, not realised benefits. Display numerator, denominator, cohort, sample size and data freshness; never compare incompatible periods.

| ID | Metric | Baseline | Target | Measurement | Owner |
|---|---|---|---|---|---|
| KPI-01 | Inventory accuracy | 92% | ≥98% | Verified physical location+custodian matches / sampled active assets; weekly stratified sample | Warehouse |
| KPI-02 | Missing assets | 4% / 80 assets | ≤2.8% / 56 | Unlocated active assets at month-end / active tracked assets; unique IDs; aged ≥7d after search | Operations |
| KPI-03 | Asset search time | 18min | ≤8min | Median timed search tasks; at least 30/period, same task mix | Warehouse |
| KPI-04 | Asset utilisation | 45% | ≥55% | Assigned productive asset-days / available-for-use asset-days; exclude Lost/Retired/Maintenance | Operations |
| KPI-05 | Overdue returns | 20% | ≤10% | Loans past expected return / active loans with due date; weekly snapshot | Warehouse |
| KPI-06 | Undocumented damaged returns | 25% | ≤5% | Damaged inspected returns without linked claim / damaged returns; condition sample | Warehouse |
| KPI-07 | Duplicate purchases | €12,000/year | ≤€9,600/year | Verified avoidable replacement purchase value; Procurement+Finance validate reason | Procurement |
| KPI-08 | Claim resolution time | 18 business days | ≤10 | Median submission→Closed business days; show open backlog age and p90 separately | Operations |
| KPI-09 | Claims exceeding resolution SLA | 35% | ≤15% | Claims breaching original dueAt / submitted cohort including still-open overdue claims | Operations |
| KPI-10 | Average repair cost | €650 | Monitor; no arbitrary cut | ERP actual repair total / closed reconciled repair claims; show mix and outliers | Finance |
| KPI-11 | Claims by site/category | Not reliable | 100% classified | Submitted claims grouped by active site + asset/claim category; privacy scoped | Operations |
| KPI-12 | Reopened claims | 8% | ≤5% | Closed claims reopened within 30d / closed cohort with full 30d follow-up | Operations |
| KPI-13 | Approval turnaround | 4 business days | ≤2 | Median review-ready→all required decisions; manager and Finance stages separately | Finance |
| KPI-14 | Same-shift capture | 55% | ≥95% | Verified movements recorded by shift end / physical movements in sample; not login count | Warehouse |
| KPI-15 | Observed task success | Not measured | ≥95% | Users completing checkout/return/claim tasks unaided / observed task attempts | Key User |

Resolution metrics use Europe/Brussels business calendar; median Closed-only value is biased unless open-age/backlog shown alongside it. Do not infer employee performance from custody or claim counts. Adoption reporting is aggregate by role/site. Baseline audit must precede target acceptance.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
