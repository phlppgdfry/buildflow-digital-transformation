# System context and boundaries

| Actor/system | Interaction | Trust / boundary |
|---|---|---|
| Site employee | Report incident, view assigned project assets | Entra identity + project scope |
| Warehouse | Register/dispatch/receive/inspect | Operational privileges; no spending approval |
| Manager | Assess and approve assigned project claims | Cannot approve own report |
| Finance | High value approval; actual invoice verification | ERP accounting permissions separated |
| Administrator | Configure and support | No implicit claim approval rights |
| Supplier | Receives repair order reference | No unrestricted internal app access |
| ERP | Supplies master data and accepts approved commitments | Adapter managed identity/service account |
| AI service | Returns optional structured recommendations | Untrusted generated content; no tools for decisions |

Documents, notifications and exports are separate exfiltration surfaces. Never rely only on hiding UI buttons. A real engagement must validate licensing and external supplier access separately.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
