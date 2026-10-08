# Hiring manager view

Independent portfolio case, not a client engagement. The strongest evidence is the reasoning between an ambiguous problem and an implementable process.

## Ambiguity and stakeholder alignment

“Material goes missing” can mean stale location data, direct transfers, poor labelling or genuinely irrecoverable loss. The [workshop case](../01-discovery/workshop-notes-example.md) chooses a custody hypothesis and assigns validation actions. It preserves conflict: Warehouse wants speed, Finance wants spend control, site users need a connectivity fallback.

The analyst facilitates the decision; Operations owns custody policy and Finance owns accounting. [RACI](../12-governance/raci.md) limits the analyst's authority instead of making one person accountable for everything.

## Trade-offs and dependencies

[ADRs](../04-solution-design/decision-log.md) compare Power Apps/custom/ERP extension, Dataverse/SQL and synchronous/asynchronous integration. Power Platform remains conditional on licences, field UX and support. The ERP capability spike must verify stable references and query-by-reference before committing to retry semantics.

Offline drafts and controlled paper receipts sacrifice immediate visibility to avoid double allocation. Repair commitment and invoice posting remain distinct. AI is optional and may be removed if draft/edit time shows no net gain.

## Controlled implementation

The [pilot](../10-implementation/rollout-plan.md) includes one warehouse and two representative sites. Gate expansion on physical location agreement, same-shift capture, no critical defects, reconciled financial references and support readiness. [Rollback](../10-implementation/rollback-plan.md) preserves post-cutover movements instead of restoring a misleading old stock snapshot.

## Adoption and value

The [experienced operator response](../11-change-management/adoption-plan.md) starts with listening and task observation. Co-design and a measured pilot determine whether the new flow adds useful work. [Benefits](../13-kpis/business-case.md) separate cash avoidance from released capacity; illustrative numbers do not prove realised ROI.

## Interview probes

Ask which finding could change the architecture, how two stakeholders resolve disagreement, how an uncertain ERP result is reconciled and who can authorise rollout. The [defence](interview/defence.md) and [role matrix](role-requirement-matrix.md) expose both reasoning and unvalidated practical gaps.
