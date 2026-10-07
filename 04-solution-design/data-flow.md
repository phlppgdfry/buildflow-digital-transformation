# Data flow and failure boundaries

```mermaid
sequenceDiagram
 participant U as Reporter
 participant C as Command API
 participant D as Operational DB
 participant H as Human approvers
 participant W as Outbox worker
 participant E as ERP
 U->>C: Submit validated claim + evidence refs
 C->>D: Atomic status/history event
 D-->>H: Approval task (via flow)
 H->>C: Version-bound manager / Finance decision
 C->>D: Atomic Approved + history + outbox
 W->>D: Lease unsent event
 W->>E: Create repair commitment (externalRef)
 alt Known successful response
 E-->>W: ERP commitment ID
 W->>D: Store ERP ref and delivery receipt
 else Timeout / uncertain result
 W->>E: Query by externalRef before resend
 W->>D: Retry schedule or quarantine
 end
 E-->>D: Invoice actuals via adapter after Finance posting
```

Data minimisation: QR exposes asset ID only; notifications contain claim ID and authenticated link, not photos. AI receives redacted text and approved source snippets, not raw employee dossiers. Timestamp conversion occurs for display; audit uses UTC. Critical inventory state never depends on ERP response latency.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
