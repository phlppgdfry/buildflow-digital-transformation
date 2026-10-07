# Error handling and resilience

| HTTP / error | Meaning | Client / operator action |
|---|---|---|
| 400 VALIDATION | Payload missing/invalid, bad master reference | Correct input; no retry |
| 401 UNAUTHENTICATED | Production token invalid | Renew identity; no credential logging |
| 403 FORBIDDEN | Role or project / SoD failure | Explain permission; manager delegation |
| 404 NOT_FOUND | Entity absent in scope | Refresh or select valid record |
| 409 CONFLICT | Version or invalid state; idempotency body mismatch | Refresh; do not overwrite |
| 413 TOO_LARGE | Evidence/body exceeds limit | Reduce/redact file |
| 422 POLICY | Business prerequisite unmet | Fix evidence/approvals/reconciliation |
| 429 THROTTLED | Rate budget exhausted | Respect Retry-After + jitter |
| 500 INTERNAL | Unexpected local error | Correlation ID for support |
| 503 DEPENDENCY | Required service unavailable | Safe draft / queue, monitor |

Error envelope: `{ "error": { "code": "CONFLICT", "message": "Asset version changed" }, "correlationId": "..." }`. Do not return stack traces or database internals. Production rate-limit per principal and endpoint (initial hypothesis: 60 commands/min/user, tune with field measurements). Prototype only implements the status codes exercised by its contracts; production throttling/SSO are design gates.

Mutation requests require Idempotency-Key and expectedVersion. Scope key by trusted subject+route; retain result/payload hash 24h in target. Same key and different body yields 409. Version conflicts are not retryable with a new version unless the user reviews the new state.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
