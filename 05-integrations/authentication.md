# API authentication

Production: delegated Entra tokens for UI commands and workload identity/client credentials for adapters. Validate audience, issuer, signature, expiry and required scope. Derive roles/project membership from trusted identity/directory, not request input. Use HTTPS and tenant-restricted identities; return 401 for absent/invalid identity, 403 for insufficient rights.

Prototype: fixed demo subjects selected by `X-Demo-Role`: Employee, Warehouse, Manager, Finance, Administrator. This is intentionally unauthenticated local role simulation; do not expose it to a network. ID headers cannot be converted into a production identity integration by changing the hostname.

Use managed connection references and secrets vault in target environments. Redact credentials from logs and evidence; separate integration identity from human spending authority.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
