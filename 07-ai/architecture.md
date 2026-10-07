# AI architecture and trust boundary

```mermaid
flowchart LR
 U[Coordinator requests suggestion] --> G[AI gateway: permission + minimisation]
 G --> R[Project-scoped approved historical snippets]
 G --> M[Approved model e.g. Claude]
 R --> M
 M --> V[Schema + allowed fields + source validation]
 V --> H[Human edit / accept / dismiss]
 H --> A[Suggestion audit]
 V --> F[Manual fallback on unsafe/invalid output]
```

No model tools can call approval or ERP APIs. Search applies access filters before retrieval. Treat input description/photos and retrieved text as untrusted: instructions inside evidence are data, not authority. Validate source IDs against actual authorised records; no invented citations. Do not store chain of thought; keep structured result, prompt/model version, minimised input hash/reference and review event.

Image input is disabled until a separate multimodal test set and privacy gate pass. Production sends no faces, plates or employee names unnecessarily. Processor terms/data location/log retention must be agreed before live use.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
