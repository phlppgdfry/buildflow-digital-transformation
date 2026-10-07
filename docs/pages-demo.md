# Public GitHub Pages demo

[Open live demo](https://phlppgdfry.github.io/buildflow-digital-transformation/) · [Local prototype](../08-prototype/README.md)

## What visitors can do

Explore assets and claims; check out and inspect a damaged return; add synthetic evidence; review the claim; exercise Manager/Finance approval; accept/dismiss an AI draft; simulate ERP failure and retry. **Reset demo** returns to the original eight assets and two active claims. No account or installation is needed.

This is a **browser simulation** of the portfolio process. Demo roles represent personas, not authenticated authorisation. It makes no real custody, approval, liability, AI-provider or ERP transaction. Use fictional examples only.

## Storage and isolation

The static site contains UI files and the same pure process-rule module used by the local API. It calls no BuildFlow backend and has no external database. Each visitor's browser profile has its own IndexedDB state; another visitor starts with independent seed data. Reload preserves local changes; clearing site storage removes them. Same-profile tabs share that browser's demo state, with version checks and read/write transactions serialising commands.

Synthetic evidence selected in the public form remains in browser storage. It is not uploaded to a BuildFlow server. Hosting requests still follow [GitHub Pages' normal data-collection policy](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection). This is not a claim that the hosting platform collects no connection metadata.

The browser must allow site storage; if storage is blocked/full the UI shows an error rather than claiming a save succeeded. Reset clears the simulated records and saved draft; it does not change the local SQLite prototype.

## Build, preview and test

```sh
npm ci
npm run build:pages
npm run preview:pages
npm run test:pages
```

Preview URL: http://127.0.0.1:4313/buildflow-digital-transformation/. Whitelisted frontend files plus the pure domain module become `dist/pages`. No SQLite files, Node server, secrets or visitor state are deployed. All asset references are relative so project-subpath hosting works.

The [Pages workflow](../.github/workflows/pages.yml) validates document links, API regression and static browser workflows before deploying. It uses GitHub's [custom Pages deployment workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), an isolated build artifact and the `github-pages` environment. Future pushes to main update the demo after checks succeed.

## Verified locally — 8 October 2026

- Three Chromium browser scenarios: full process; persistence/visitor isolation/reset; mobile and synthetic evidence upload.
- No API requests, failed static assets or relevant browser errors during the tested scenarios.
- Desktop 1440×1000 and mobile 390×844 inspected; no page overflow.
- Nine local API tests and the existing local frontend workflow still pass after sharing domain rules.

Production Microsoft/ERP integrations, business UAT, live AI and security gates remain separate target work. [Quality audit](quality-audit.md).

[Repository overview](/README.md)
