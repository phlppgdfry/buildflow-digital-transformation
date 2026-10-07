# Inventory AS-IS

```mermaid
flowchart LR
 R[Request by call] --> E[Check Excel] --> S[Search shelves / call sites]
 S --> H[Hand over without reliable custody] --> U[Use or informal transfer]
 U --> T[Return without uniform inspection] --> E
 S --> P[Buy replacement]
```

Warehouse maintains the sheet but sites can lend directly. Physical location, responsible user and invoice asset reference may disagree. A return on paper is not reconciled systematically. Failure points: missing serials, duplicates, updates after handoff, shared spreadsheets and unsafe return handling. Baseline must sample these failures before introducing QR.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
