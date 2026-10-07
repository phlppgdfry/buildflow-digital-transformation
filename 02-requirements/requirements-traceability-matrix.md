# Requirements traceability matrix

Trace one row from a business need to a test and measurement. IDs are stable; removing a requirement requires a recorded decision. UAT status is **prepared, not business-executed**. Prototype coverage is separate from target acceptance.

| Business / problem | Requirement / story / acceptance | Process | Solution | Test | KPI |
|---|---|---|---|---|---|
| BR-01 / PB-01 | [FR-01](functional-requirements.md) / US-01 / AC-01 | [TO-BE](../03-processes/inventory/to-be.md) | Asset registry and QR | [UAT-INV-001](../09-testing/uat-scenarios.md) | [KPI-01](../13-kpis/target-kpis.md) |
| BR-01 / PB-01 | [FR-02](functional-requirements.md) / US-02 / AC-02 | [TO-BE](../03-processes/inventory/to-be.md) | Atomic checkout command | [UAT-INV-002](../09-testing/uat-scenarios.md) | [KPI-03](../13-kpis/target-kpis.md) |
| BR-02 / PB-02 | [FR-03](functional-requirements.md) / US-03 / AC-03 | [TO-BE](../03-processes/inventory/to-be.md) | Return inspection command | [UAT-INV-003](../09-testing/uat-scenarios.md) | [KPI-06](../13-kpis/target-kpis.md) |
| BR-01 / PB-01 | [FR-04](functional-requirements.md) / US-04 / AC-04 | [TO-BE](../03-processes/inventory/to-be.md) | Transfer + optimistic locking | [UAT-INV-004](../09-testing/uat-scenarios.md) | [KPI-02](../13-kpis/target-kpis.md) |
| BR-01 / PB-01 | [FR-05](functional-requirements.md) / US-05 / AC-05 | [TO-BE](../03-processes/inventory/to-be.md) | Audit ledger | [UAT-INV-005](../09-testing/uat-scenarios.md) | [KPI-01](../13-kpis/target-kpis.md) |
| BR-02 / PB-02 | [FR-06](functional-requirements.md) / US-06 / AC-06 | [TO-BE](../03-processes/inventory/to-be.md) | State rules / authorised release | [UAT-INV-006](../09-testing/uat-scenarios.md) | [KPI-04](../13-kpis/target-kpis.md) |
| BR-03 / PB-03 | [FR-07](functional-requirements.md) / US-07 / AC-07 | [TO-BE](../03-processes/damage-claims/to-be.md) | Claim + evidence service | [UAT-CLM-001](../09-testing/uat-scenarios.md) | [KPI-08](../13-kpis/target-kpis.md) |
| BR-03 / PB-03 | [FR-08](functional-requirements.md) / US-08 / AC-08 | [TO-BE](../03-processes/damage-claims/to-be.md) | Claim workflow | [UAT-CLM-002](../09-testing/uat-scenarios.md) | [KPI-09](../13-kpis/target-kpis.md) |
| BR-04 / PB-04 | [FR-09](functional-requirements.md) / US-09 / AC-09 | [TO-BE](../03-processes/damage-claims/to-be.md) | Approval policy | [UAT-CLM-003](../09-testing/uat-scenarios.md) | [KPI-13](../13-kpis/target-kpis.md) |
| BR-04 / PB-04 | [FR-10](functional-requirements.md) / US-10 / AC-10 | [TO-BE](../03-processes/damage-claims/to-be.md) | Outbox / ERP adapter | [UAT-CLM-004](../09-testing/uat-scenarios.md) | [KPI-10](../13-kpis/target-kpis.md) |
| BR-03 / PB-03 | [FR-11](functional-requirements.md) / US-11 / AC-11 | [TO-BE](../03-processes/damage-claims/to-be.md) | Scheduled SLA flow | [UAT-CLM-005](../09-testing/uat-scenarios.md) | [KPI-09](../13-kpis/target-kpis.md) |
| BR-05 / PB-05 | [FR-12](functional-requirements.md) / US-12 / AC-12 | [TO-BE](../03-processes/inventory/exceptions.md) | Local draft + outage reconciliation | [UAT-INV-007](../09-testing/uat-scenarios.md) | [KPI-15](../13-kpis/target-kpis.md) |
| BR-03 / PB-03 | [FR-13](functional-requirements.md) / US-13 / AC-13 | [TO-BE](../03-processes/damage-claims/to-be.md) | AI suggestion boundary | [UAT-CLM-006](../09-testing/uat-scenarios.md) | [KPI-08](../13-kpis/target-kpis.md) |
| BR-06 / PB-06 | [FR-14](functional-requirements.md) / US-14 / AC-14 | [TO-BE](../03-processes/damage-claims/to-be.md) | Curated KPI read model | [UAT-CLM-007](../09-testing/uat-scenarios.md) | [KPI-14](../13-kpis/target-kpis.md) |

[NFR verification](non-functional-requirements.md) adds cross-cutting access, performance, recovery and usability gates. Machine-readable [traceability.json](traceability.json) is checked in CI for referenced IDs and paths.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
