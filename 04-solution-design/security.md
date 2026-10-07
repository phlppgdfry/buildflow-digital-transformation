# Security and privacy control design

| Control | Design / evidence gate |
|---|---|
| Authentication | Entra OIDC access token; validate issuer/audience/expiry/signature at API, HTTPS only |
| RBAC | Employee own/project reports; Warehouse custody; Manager assigned projects; Finance high-value/invoice validation; Admin configuration |
| Separation of duties | Reporter cannot approve; approval role does not come from user-supplied headers; dual roles do not bypass two named decisions |
| Least privilege | Managed identities/service accounts per environment; ERP adapter only permitted commitment endpoints |
| Documents | Project-scoped SharePoint library/item access, authenticated links, malware scan, file size/type validation |
| Secrets | Managed secret store/connection references; no secrets in repo, UI or logs |
| Audit | Append-only state/decision events with actor/UTC/correlation; restricted support access |
| GDPR principles | Purpose limitation, minimisation, access/correction workflow, retention review; privacy adviser validates legal basis and processor arrangements |
| Retention | Proposal: claim working evidence 24 months after closure, then review/purge unless legal hold; financial records retained in ERP per Finance/legal schedule |
| Environments | Separate dev/test/prod; synthetic test data; DLP prevents uncontrolled personal connectors |

Retention periods above are design proposals, not legal advice or asserted statutory durations. Do not automatically delete a financial/legal hold. Photos should avoid faces/plates; authorised users can redact originals under controlled evidence versioning.

**Prototype boundary:** demo identity headers are server-side role checks for teaching only. There is no Entra auth, project scoping, malware scanning, production encryption/key management or tamper-resistant external audit. Bind loopback only; do not expose this app as a production service. See [production gates](../10-implementation/release-checklist.md).

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
