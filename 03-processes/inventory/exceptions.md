# Inventory exceptions

| Exception | Handling / accountable owner |
|---|---|
| Duplicate asset ID/serial | Quarantine import row; physical check, no automatic merge; Warehouse |
| Serial unreadable | Use label and temporary exception reason; verify next service; Warehouse |
| No connectivity | Unconfirmed draft + numbered paper receipt; reconcile on reconnect; Warehouse |
| Concurrent checkout | Version conflict; refresh and select another asset; app enforces |
| Wrong destination | Reject receipt; source custody remains; Site supervisor |
| Missing asset | Search and incident record before Lost; no automatic employee blame; Operations |
| Damaged or overdue transfer | Quarantine/receipt exception and timed chase; Warehouse |
| Lost later found | Inspection before Available, retain loss history; Warehouse |
| ERP master stale | Block new use of inactive project; allow safe return with exception; IT |

Reservations expire after 24 elapsed hours; a scheduled job releases only unchanged unfulfilled reservations. Transfer overdue alert after 24h never auto-confirms receipt.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
