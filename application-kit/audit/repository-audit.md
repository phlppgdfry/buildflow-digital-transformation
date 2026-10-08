# Source repository audit

Basis: existing case at commit a9a8a1b before the application kit. [File inventory](source-inventory.json) records every original source/evidence file, SHA-256, size and audience indicators. Dependency trees and local/generated state are outside scope.

## Findings and actions

| Finding | Impact | Kit action |
|---|---|---|
| Strong workshop-to-requirement example | Shows analytical reasoning beyond a UI | E01 and E03 anchor every presentation layer |
| Extensive but diffuse entry routes | A recruiter must choose among many documents | START-HERE, one-page PDF and one public landing page |
| README about 800 words plus evidence tables | Too much for the initial 90 seconds | Short above-fold entry with five key links |
| Dense full claims BPMN preview | Too small when printed in an A4 executive pack | Focus on return-inspection executive view, link complete BPMN |
| User stories include awkward grammar and blended actors | Weakens functional-analysis credibility | Limited wording clean-up with IDs/criteria preserved |
| Power Automate and AI language can sound implemented | Could overstate hands-on evidence | Persistent Design / Simulation / Pending validation labels |
| 24 UAT scenarios are prepared, not business-executed | Technical tests cannot prove client acceptance | Keep prepared status in print, deck, workspace and role matrix |
| Multiple audit/status documents | Mixes example delivery state with verification history | Workspace reports portfolio status, labels steering records fictional |
| Baseline snapshot and annual loss assumptions differ | A one-line ROI claim would obscure uncertainty | KPI targets first; cash and capacity separate; no realised ROI |
| Prototype demo jumps between two claims | The interview story becomes harder to follow | Guide one damaged return through its linked claim |
| Severity suggestions were null in mock | Live demonstration underserves the planned assistant scope | Retain severity abstention; distinguish target AI design from mock scope |

## Top 10 evidence pieces

1. **Workshop root cause** - [E01 source](../../01-discovery/workshop-notes-example.md). Turns missing equipment into custody handoffs and testable requirements. Evidence type: Simulated workshop.
2. **Stakeholder engagement** - [E02 source](../../01-discovery/stakeholder-matrix.md). Shows conflicting needs and participation of field users. Evidence type: Analysis design.
3. **Requirements traceability** - [E03 source](../../02-requirements/requirements-traceability-matrix.md). Links need, requirement, process, component, UAT and KPI. Evidence type: Analysis design.
4. **Return inspection BPMN** - [E04 source](../../03-processes/bpmn/inventory-return.bpmn). Models safe release versus damaged quarantine and linked Draft claim. Evidence type: Validated non-executable BPMN.
5. **Solution architecture and ADRs** - [E05 source](../../04-solution-design/architecture.md). Preserves ERP ownership and exposes application/integration boundaries. Evidence type: Proposed target architecture.
6. **ERP integration and API contract** - [E06 source](../../05-integrations/erp-integration.md). Distinguishes estimate, commitment and actual invoice; defines retry/reconciliation. Evidence type: Design plus mocked adapter.
7. **High-value approval blueprint** - [E07 source](../../06-automation/power-automate/02-high-value.md). Requires Manager and Finance strictly above EUR 5,000 with versioned decisions. Evidence type: Power Automate design blueprint.
8. **AI opportunity assessment** - [E08 source](../../07-ai/ai-opportunity-assessment.md). Selects assistive drafting and excludes autonomous liability/accounting. Evidence type: Assessment plus deterministic mock.
9. **UAT scenarios** - [E09 source](../../09-testing/uat-scenarios.md). 24 prepared scenarios include concurrency, offline, self-approval and invoice mismatch. Evidence type: Prepared business UAT, not executed.
10. **Adoption and pilot** - [E10 source](../../11-change-management/adoption-plan.md). Respects operator knowledge and measures task success and same-shift capture. Evidence type: Change and rollout design.

## Gaps that remain honest

No exact job advertisement, real client interviews/workshops, Power Platform tenant deployment, real ERP connector, production security/recovery execution, live Claude/model evaluation or measured business outcomes were supplied. This kit does not invent them. The role matrix distinguishes design understanding from hands-on validation and suggests what to prove next.

## Source ownership

Original 01-14 folders remain canonical business/technical evidence. The kit is a presentation layer. Numeric targets come from target-kpis.md, cost inputs from business-case.json, process references from BPMN and requirements IDs from traceability.json. Public pages and exports share [case.json](../content/case.json); checks prevent metric/count/link drift.
