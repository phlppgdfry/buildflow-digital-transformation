# Solution overview

Choose a Microsoft-oriented target because field identity, collaboration and support already use Microsoft 365. Power Apps captures transactions; Dataverse stores operational records; custom APIs/plugins enforce atomic business rules. Power Automate orchestrates human tasks and notifications, not stock correctness. SharePoint stores evidence with scoped access.

A lightweight integration adapter moves approved commitments to the existing ERP. Do not add a microservice per entity. Target depends on licence costs, ERP capability and support skills; [ADR-001](decision-log.md) defines when to reconsider a custom app.

The local prototype is a separate executable teaching model: Node.js REST, SQLite and vanilla browser UI. It shows state, audit, dual approval, ERP retries and AI review without cloud credentials. It is not exported Power Platform deployment code.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
