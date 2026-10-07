# API examples

The [OpenAPI contract](openapi.json) is the executable prototype surface plus documented target security. Financial payloads use integer cents in EUR.

```sh
curl http://127.0.0.1:4310/api/assets/AST-001
curl -X POST http://127.0.0.1:4310/api/assets/AST-001/checkout \
  -H 'Content-Type: application/json' -H 'X-Demo-Role: Warehouse' \
  -H 'Idempotency-Key: interview-checkout-1' \
  -d '{"siteId":"SITE-004","custodianId":"EMP-002","expectedVersion":1}'
```

```json
{"assetId":"AST-002","siteId":"SITE-004","description":"Hydraulic hose damaged during operation","severity":"MEDIUM","category":"Mechanical","estimatedCents":620000,"evidence":[{"name":"hose-demo.svg","kind":"image","reference":"synthetic://hose"}]}
```

Submit a Draft with PATCH status Submitted, then Manager sets Under Review. Manager approval on €6,200 leaves Under Review until Finance approval. Self-approval is rejected. See tests for exact requests and [prototype instructions](../../08-prototype/README.md) for identity subjects.

Target evidence references must be authenticated SharePoint IDs and validated safe uploads; local synthetic references are deliberately not a production upload API.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
