# Executable local prototype

This app supports the analysis; it is not a deployed Power Platform/ERP system. Requires Node.js 24. All company data, identities and evidence are fictional. Start from repository root:

```sh
npm ci
npm start
```

Open http://127.0.0.1:4310. SQLite is created at `08-prototype/api/data/demo.sqlite` (ignored by Git). State/history/approval/outbox writes commit together. Dependencies are development validators/browser tests only; runtime uses Node's built-in HTTP and SQLite modules plus a small browser frontend.

Stop the running server with Ctrl+C before resetting synthetic data:

```sh
npm run reset
npm start
```

`PORT` and `BUILDFLOW_DB` override local port/database for isolated tests. The app always binds to 127.0.0.1. The single-document SQLite state deliberately favours inspectability over scalability; never deploy this data layout as an enterprise production implementation.

## Capability boundary

| Capability | Implemented local evidence | Target-only work |
|---|---|---|
| Dashboard | Seed counts, open claims, deadline flags, recent history | Project scoping, business-calendar KPI reporting |
| Asset registry | Eight seeded full-detail records, search/status filters, identifier/QR payload | Registration/edit UI, generated printable QR, imports, financial master sync |
| Custody | Checkout/inspection return, two-phase transfer/receipt, version checks, atomic history | Full destination condition exceptions, mobile QR camera scan |
| Safety lifecycle | Damaged state blocks reissue; linked Draft claim on damaged return | Maintenance/reservation expiry/loss/retirement commands |
| Claims | Create/submit/review/info/reject/repair/invoice/close/reopen; evidence, comments, timeline | Real liability investigation, supplier access, calibrated SLA |
| Evidence | Static labelled synthetic images; bounded PNG/JPEG/PDF upload held locally; add synthetic refs to editable claim | SharePoint, virus scan, retention, actual cross-project access |
| Approval | Named fixed demo Manager/Finance, >€5,000 dual approval, no self-approval, revision invalidation | Entra identity, scoped delegation, tenant approval connectors |
| AI | Deterministic structure suggestion, injection withholding, accept/dismiss audit, review label | Live Claude/other provider, image analysis, calibrated evaluation/retrieval |
| ERP | Outbox, manual failed/duplicate-safe dispatch, stable reference and local receipt | Vendor auth, uncertain-success lookup, scheduled backoff, reconciliation |
| Offline | Explicit unconfirmed local **claim draft** and restore | Authoritative offline stock explicitly excluded; asset movement draft/paper reconciliation target |
| Security | Server-side demo role checks, escaping/CSP, version control | Authentication, scoped RBAC, secrets, production audit/recovery/load |

Seed: AST-001 is Available, AST-003 Assigned to SITE-004. CLM-0001 is Under Review at €6,200; CLM-0002 Information Required at €420. One master-refresh mock outbox event starts Pending; it is not a financial claim awaiting a fabricated posting. Demo deadlines are approximate 14 elapsed days; target uses Belgian business calendar. Actual cost/invoice closure is a manual **mock Finance confirmation**, not verified ERP data.

## Core walkthrough

1. Warehouse → Inventory → AST-001 → checkout to SITE-004 / EMP-002; inspect state/history.
2. Return with recorded damage; see Damaged and linked Draft claim. Add synthetic evidence, then submit as the same Warehouse reporter.
3. Manager → CLM-0001 → approve; remains Under Review. Finance → approve; Approved and outbox event created.
4. Manager → optional AI draft → read and accept/dismiss; status/approval never changes from that action.
5. Administrator → Integrations → simulate failure, retry, retry again; one ERP receipt reference.

Prepared target UAT includes controls outside this demonstrator. Do not mark those passed from a local test. See [test strategy](../09-testing/test-strategy.md), [OpenAPI](../05-integrations/api-contracts/openapi.json), [production gates](../10-implementation/release-checklist.md).

## Checks and screenshots

```sh
npm test
npm run check
npx playwright install chromium
npm run test:ui
```

Browser plugin skill is absent in this session, so Playwright is used for rendered QA. Test database is isolated at a temporary path; tests generate the requested portfolio screenshots. Browser tests inspect desktop and mobile, console errors, primary interactions, safe generated-text rendering and overflow. [Quality audit](../docs/quality-audit.md).

[Repository overview](../README.md)
