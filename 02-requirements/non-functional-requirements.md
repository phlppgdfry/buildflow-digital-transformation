# Non-functional requirements

| ID | Requirement / proposed target | Verification / owner |
|---|---|---|
| NFR-01 | Entra SSO, project scoped RBAC, no self-approval | Access/SoD negative tests; IT |
| NFR-02 | Online movement p95 <2s at 50 concurrent users, excluding uploads | Load profile with ERP unavailable; Developer |
| NFR-03 | Pilot service target 99.5% during 06:00–18:00 weekdays | Measured availability; IT service owner |
| NFR-04 | RPO ≤1h, RTO ≤4h | Restore drill in preproduction; IT |
| NFR-05 | Atomic state + history + outbox; idempotent replay | Concurrency/crash tests; Developer |
| NFR-06 | Keyboard accessible, readable outdoors; aim WCAG 2.2 AA | Accessibility and field testing; Key User |
| NFR-07 | Restricted documents; retention schedule reviewed before pilot | Purpose/access/retention review; Privacy adviser |
| NFR-08 | Structured logs, correlation propagation, 15min sync alert | Inject integration outage; IT |
| NFR-09 | Outage draft and numbered paper fallback | Offline conflict UAT; Warehouse |
| NFR-10 | Dev/test/prod isolation, versioned deployment and rollback evidence | Release rehearsal; IT |

These are target commitments to confirm with a client, not performance claims for the local demo. Personal data must not appear in telemetry. Production reliability requires support funding and a verified restore process.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
