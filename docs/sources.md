# Technical source and verification notes

Design sources, fetched 7 October 2026 through Context7 (official Microsoft documentation index):

- [Long-running approvals](https://learn.microsoft.com/en-us/power-automate/create-long-running-approvals): approval creation/response processing with Dataverse state.
- [Approval guidance source](https://github.com/MicrosoftDocs/power-automate-docs/blob/main/articles/modern-approvals.md): separate workflows when lifecycle can exceed a waiting flow run.
- [Flow troubleshooting source](https://github.com/MicrosoftDocs/power-automate-docs/blob/main/articles/troubleshoot-flow-errors.md): documented 30-day cloud flow run limit.
- [Dataverse known issues source](https://github.com/MicrosoftDocs/power-automate-docs/blob/main/articles/dataverse/known-issues.md): repeated triggers/callback registration and record-update causes.
- [BPMN 2.0.2 specification](https://www.omg.org/spec/BPMN/2.0.2/): modelling semantics reference; portfolio BPMN is non-executable process documentation.
- [OpenAPI specification](https://spec.openapis.org/oas/v3.0.3): contract format; parser validation in CI.

Context7 resolution: `npx ctx7@latest library "Microsoft Power Automate" "Dataverse trigger asynchronous approval long running approval duration limits solutions connection references"`; selected `/microsoftdocs/power-automate-docs`. Fetch: `npx ctx7@latest docs /microsoftdocs/power-automate-docs "Dataverse event trigger duplicate delivery durable long running approval state and cloud flow 30 day duration limit"`.

Model outputs and portfolio ratings are not sources of legal liability. Security/privacy/retention proposals require client-specific review. Costs are illustrative estimates, not current vendor pricing.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
