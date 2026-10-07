# Worked fictional workshop record

**Simulated session WKS-01, 12 January 2026. These are invented role statements, not real quotations.**

Warehouse operator: “Materiaal raakt vaak zoek.” Site supervisor: “Wij krijgen ook materiaal rechtstreeks van andere werven.” Finance: “Een schade-inschatting is nog geen boeking.” IT: “Het ERP kan onderhoud hebben tijdens werkuren.”

### Five Whys — custody gaps

1. Why can't we find it? Spreadsheet location is stale.
2. Why stale? Direct site transfers are not recorded.
3. Why no record? The warehouse sheet is not available to field users.
4. Why rely on one sheet? No shared transaction and named receiving custodian.
5. Why no accountable handoff? Process owner never defined when responsibility transfers.

Root cause is a hypothesis to validate by counting 30 sampled handoffs; blaming an employee would not solve the missing process.

### One concern traced to delivery

| Artefact | Concrete translation |
|---|---|
| Problem PB-01 | Unknown custody after direct transfers |
| Business BR-01 | Accountable location/custodian for every active asset |
| Functional FR-04 | Two-step transfer; sender dispatches, receiver confirms |
| Story US-04 | As receiving supervisor, confirm a scanned asset against my site |
| Acceptance AC-04 | In Transit retains sender responsibility; receiving confirmation assigns destination and receiver atomically |
| Process | [Inventory TO-BE](../03-processes/inventory/to-be.md), transfer BPMN |
| Solution | Transfer command, optimistic version, movement history, event outbox |
| Test UAT-INV-004 | Receiving at wrong site rejected; correct site creates one custody entry |
| Outcome KPI-02 | Missing active assets: illustrative 4% → target ≤2.8% |

### Decisions and disagreement

DEC-01 Operations: custody transfers only at receipt, not at dispatch. DEC-02 Finance: >€5,000 requires manager plus Finance; Operations notified. DEC-03 Warehouse: failed connectivity produces a draft/paper handoff, never an apparently confirmed movement.

Operator worried about duplicate entry. Agreed: QR scan and short confirmations; remove the old sheet after a measured pilot, keep a controlled outage form. No agreement yet on historical data quality.

| Action | Owner | Due / evidence |
|---|---|---|
| Sample 30 handoffs and missing records | Warehouse manager | Before baseline approval; sample sheet |
| Confirm ERP idempotency support | Integration developer | Architecture gate; sandbox response |
| Observe mobile reception on two sites | IT + Key User | Pilot planning; connectivity report |
| Review photo retention purpose | Privacy adviser | Pre-pilot; retention decision |

MoSCoW: Must custody/history/approval audit; Should reminders and receipt scan; Could reviewed AI drafts; Won't autonomous liability. All actions are proposed, not completed client activities.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
