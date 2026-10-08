# Two-minute prototype demo

Independent portfolio case. The approval and ERP/AI behaviour is simulated; no Power Automate tenant flow or financial system runs here.

Open the [live prototype](https://phlppgdfry.github.io/buildflow-digital-transformation/) and choose **Start fresh 2-minute demo**. This resets only your fictional browser data and prepares a documented checkout of AST-001 to SITE-004 / EMP-002.

| Time | Action | Explain |
|---|---|---|
| 0:00-0:20 | Inspect AST-001; enter housing damage and confirm damaged return | Inspection keeps it Damaged and creates one linked Draft |
| 0:20-0:40 | Open linked claim, add housing illustration and submit | Evidence is synthetic; discovered damage does not prove liability |
| 0:40-1:00 | Generate draft and explicitly accept/dismiss | Mock proposes category, abstains from severity assessment and flags missing facts; human review changes no approval |
| 1:00-1:30 | Select Manager, move to Under Review, revise estimate to EUR 420 and approve | Named human decision; >EUR 5,000 would also require Finance |
| 1:30-1:50 | Select Administrator, open integration event and dispatch | Stable external reference; actual invoice remains a separate ERP process |
| 1:50-2:00 | Overview | Asset remains Damaged; claim shows Approved; activity and queue reflect the simulated actions |

Use the guide panel for the next action. Its controls select the next screen/persona; they never approve on your behalf. To demonstrate high-value escalation later, open seeded CLM-0001 at EUR 6,200 and show Manager plus Finance.

If live access fails, use the [screenshots](../../14-demo/screenshots/README.md), [process model](../../03-processes/bpmn/README.md#material-return) and [seven-page PDF](../exports/case-study.pdf). Timings are a rehearsal target, not a measured user SLA.
