# Test strategy

Separate analyst artefacts, executable prototype and target system gates.

| Layer | What to verify | Evidence |
|---|---|---|
| Artefact integrity | Markdown paths, stable IDs, traceability, BPMN parse/DI and OpenAPI validation | `npm run check`, CI |
| Local command/API | State/version/role rules, damaged return atomicity, dual approval, idempotency, ERP retry | `npm test` |
| Browser demo | Dashboard, custody loop, claims, evidence references, review, responsive/keyboard basics | `npm run test:ui`, screenshots |
| Production integration | Real ERP sandbox, uncertain response lookup, auth, reconciliation, load | Target preproduction gate, not executed |
| Business UAT | 24 end-user scenarios including offline and safety exceptions | Recorded sessions + owner sign-off, not executed |
| Production security/recovery | Entra/project scoping, document scan/access, backup restore | IT gate, not executed |

Test data are synthetic; reset per run. Focus on harmful mismatches rather than testing the rendering implementation line by line. Critical defects: unsafe reissue, double allocation, unauthorised approval, duplicate commitment, data leakage. No critical/high defects open before pilot.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
