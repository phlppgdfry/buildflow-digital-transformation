# From missing equipment to controlled operations

## Situation and discovery

A site needs a concrete vibrator. The warehouse spreadsheet says it is available, but a supervisor recalls lending it to another project. Procurement buys a replacement. The asset returns later with damage, without a custody record. Finance cannot link the repair invoice to a claim.

The analyst's task is to make this ambiguity discussable. A warehouse walkthrough reconstructs handoffs; interviews separate stock, custody, legal responsibility and accounting. Workshop disagreements are recorded, not hidden: operations wants speed; finance wants approval; the experienced warehouse user wants a fallback during connectivity failure.

## Proposed intervention

1. ERP supplies validated project, employee, supplier and capital asset references.
2. QR identifies an asset; a confirmed transaction stores location, custodian, actor, time and version.
3. Return inspection determines availability. Unsafe assets remain Damaged or Maintenance.
4. A claim gathers evidence, triage and human assessment. Amounts above €5,000 need both manager and Finance approval; operations is notified.
5. Approved estimates create an ERP repair commitment, not an invoice posting. Actual invoices remain ERP-owned and reconciled before closure.
6. AI may structure facts and flag missing information. It never decides liability or approves spend.

## Delivery choices

Pilot one warehouse and two sites before expansion. Offline users can save a local draft but cannot confirm a stock movement. A numbered paper fallback records custody and is reconciled by Warehouse on reconnection. This sacrifices instant visibility to avoid false inventory certainty.

Reject three tempting shortcuts: replacing ERP finance, auto-approving AI suggestions and presenting target KPIs as achieved. [Business case](13-kpis/business-case.md) distinguishes released staff capacity from cash savings. Break-even depends on adoption and measured loss reduction.

## What remains uncertain

ERP adapter capabilities, Dataverse licensing, access to project masterdata and approved document retention need discovery with a real client. UAT scripts are prepared; business sign-off is not fabricated. Executable tests cover the local demonstrator only. See [quality audit](docs/quality-audit.md).

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
