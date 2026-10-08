# Construction Digital Transformation - executive case

Independent portfolio case. Fictional company, illustrative targets and proposed production design. [Seven-page PDF](../exports/case-study.pdf).

## Page 1 - Executive overview

BuildFlow Group tracks reusable equipment and damage incidents through spreadsheets, paper and disconnected messages. Location and custody become unclear, evidence lacks consistent ownership, and Finance manually reconciles repairs. The case investigates those handoffs and designs an integrated operational workflow with a controlled implementation plan.

**Scope:** reusable inventory and damage claims. **Role:** independent analysis, process design, solution architecture and controlled implementation planning.

Journey: Discover → Analyse → Design → Integrate → Automate → Implement → Measure.

Status: design documented, prototype tested, enterprise validation pending.

[Source evidence](../../01-discovery/business-context.md).

## Page 2 - Discovery and business analysis

Warehouse, site employees, project managers, Finance, Procurement, Operations and IT bring different constraints. The fictional workshop uses a walkthrough, Five Whys and MoSCoW. “Material goes missing” becomes an accountable transfer requirement.

PB-01 / BR-01 → FR-04 / AC-04 → transfer receipt component → UAT-INV-004 → KPI-02. The cause remains a hypothesis until sampled handoffs confirm it.

The analyst facilitates. Operations decides custody policy; Finance owns spend controls.

[Source evidence](../../01-discovery/workshop-notes-example.md).

## Page 3 - AS-IS and TO-BE

AS-IS: spreadsheets and informal handoffs obscure current custody and return condition. TO-BE: a named custodian, confirmed transfer receipt and inspection gate establish operational truth.

The executive BPMN view focuses on the return: inspect condition, then either release Available or retain Damaged and create a linked Draft claim. Safety release is independent of claim closure. Offline stock movement remains unconfirmed until reviewed online.

[Source evidence](../../03-processes/bpmn/inventory-return.bpmn).

## Page 4 - Solution architecture

Target: Power Apps, Dataverse command rules, Power Automate, SharePoint and Entra ID. A dedicated adapter sends approved repair commitments to ERP and returns posted actuals.

ERP owns projects, suppliers, cost centres, capital values and invoice accounting. The operational solution owns custody, claims and approval history. Atomic writes protect state/history/outbox; asynchronous delivery tolerates ERP maintenance.

The tested local API and public browser simulation are implementation evidence of process rules, not a deployed Microsoft tenant.

[Source evidence](../../04-solution-design/architecture.md).

## Page 5 - Automation and AI

Claim submission produces validation, ownership, a durable approval task and notification. Manager approval is required; above EUR 5,000 Finance must also approve the same revision. Changed amount/evidence invalidates prior approvals.

Optional AI structures facts and flags missing information. Human review precedes any business decision. AI cannot determine liability, sanction employees, approve spend or post invoices. Live demo uses deterministic suggestions; provider, privacy and quality evaluation remain open.

[Source evidence](../../06-automation/power-automate/02-high-value.md).

## Page 6 - Controlled implementation

Pilot one warehouse and two representative sites. Gate entry on unique labelled assets, role mapping, ERP contract checks and task training. Run 24 prepared UAT scenarios including concurrency and exception cases.

Migration stages and quarantines questionable data. Rollback preserves accepted movements and reconciles ERP references. Champions, observed task practice, feedback and ten working days of hypercare support adoption. Business, Warehouse, Finance and IT sign their own gates.

[Source evidence](../../10-implementation/rollout-plan.md).

## Page 7 - What this demonstrates

The case links an operational problem to requirements, process, technical boundaries and controlled delivery. Evidence shows analysis and design reasoning, plus tested prototype rules. It does not claim real stakeholder facilitation or client production results.

Illustrative targets: inventory accuracy 92% to at least 98%; claim resolution 18 to at most 10 business days; same-shift capture 55% to at least 95%. Establish the real baseline before judging value. Cash avoidance and released capacity remain separate.

[Source evidence](../../13-kpis/target-kpis.md).
