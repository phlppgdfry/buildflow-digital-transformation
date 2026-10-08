# Portfolio defence

Independent portfolio case. Each choice is conditional; the source ADRs and business decisions remain authoritative.

| Decision | Why | Alternative | Trade-off / risk | When to choose differently |
|---|---|---|---|---|
| Confirm custody at receipt | Sending alone does not prove arrival | Custody at dispatch | Delayed acceptance, chase overdue transfer | Contractual custody policy genuinely differs |
| Inspect before Available | Prevent unsafe reissue | Register return then inspect later | Small added task; staffing needed | A separate quarantine lifecycle enforces equivalent safety |
| Atomic return + linked claim | Avoid partial damage record | Separate flow actions | Transactional implementation expertise | Use equivalent platform-native atomic command |
| Power Apps target | Microsoft estate/support reuse | ERP module or custom app | Licence cost, mobile UX and command constraints | Cost/support/UX pilot fails acceptance |
| Dataverse target | Access/governance and flow integration | SQL/application DB | Capacity and plugin expertise | Existing supported SQL platform wins on requirements/economics |
| Async ERP outbox | Core operations survive ERP maintenance | Synchronous or batch | Eventual consistency, support/reconciliation | Actual immediate financial rule or vendor constraints require a different contract |
| Dual approval >EUR 5,000 | Illustrates spend delegation | Different threshold/roles | Approval latency and delegation management | Actual Finance policy defines the applicable authority |
| Optional reviewed AI | Structured facts may reduce drafting effort | Rules/templates or manual | Quality/privacy/automation bias | Evidence shows no net gain or unacceptable risk |
| Unconfirmed offline draft | Avoid false stock truth and double assignment | Full authoritative offline sync | Manual reconciliation, delayed visibility | A verified field requirement and conflict strategy justify added complexity |
| One warehouse/two-site pilot | Learn representative field constraints | Immediate full rollout | Slower benefit ramp | Urgency is evidenced and risk/support readiness permits it |
| Cash/capacity separate | Avoid claiming payroll savings from freed time | Combined headline ROI | More careful sponsor conversation | Finance evidences actual cash release or redeployment |

Sources: [ADRs](../../04-solution-design/decision-log.md), [business decisions](../../12-governance/decision-log.md), [business case](../../13-kpis/business-case.md).

A hiring manager may ask for the condition that would invalidate your choice. Answer with evidence you would collect and who owns the decision, not with a claim that one technology is always best.
