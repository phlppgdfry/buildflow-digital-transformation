# Conservative business case

**Illustrative assumptions — not real company data.** Exclude tax/discounting and uncertain safety/insurance benefits. No real ROI is claimed.

| Benefit category | Arithmetic | Annual potential |
|---|---|---:|
| Less missing equipment — cash avoidance | 80 replacement incidents ×€600 ×30% reduction | €14,400 |
| Fewer duplicate purchases — separate confirmed category | €12,000 ×20% reduction | €2,400 |
| Search capacity released | 4,000 ×(18−8)min /60 ×€35/h | €23,333 |
| Claim admin capacity released | 350 ×(90−60)min /60 ×€35/h | €6,125 |
| **Cash avoidance** | Loss + duplicate categories, Finance validates no overlap | **€16,800** |
| **Released capacity value** | Search + admin, not cash unless redeployed | **€29,458** |
| Combined economic potential | Cash + capacity | **€46,258** |

Illustrative implementation: analyst 20d ×€650 = €13,000; developer/integration 25d ×€750 = €18,750; training/data preparation 10d ×€450 = €4,500; contingency €5,750. **One-off €42,000.** Ongoing incremental licence/support estimate **€9,600/year**, subject to tenant quote (not Microsoft list pricing).

At 100% realisation, combined net €36,658/year gives steady-state simple payback €42,000 /€36,658 ≈ **1.15 years**. At 70% realisation, net (€46,258×0.70)−€9,600 ≈€22,781 gives **1.84 years**. At 40% net ≈€8,903 gives **4.72 years**. Ramp-up extends these periods.

**Cash-only** net at full realisation is €7,200/year, payback **5.83 years**; at 70% cash net €2,160/year, **19.44 years**. Capacity is not payroll savings. Sponsor must value redeployment and safety/traceability, or reduce scope/cost. Do not sell the combined estimate as guaranteed cash ROI.

[Machine-readable inputs](business-case.json) are checked against displayed totals. Faster resolution and fewer errors are measured KPIs, not extra monetised lines. Validate assumptions and no-overlap rules before investment approval.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
