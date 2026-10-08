# Application-kit build

Run from repository root. Published exports are committed, so normal Pages builds need only Node 24 and `npm ci`; recruiters need no runtime.

The shared [manifest](../content/case.json) references canonical evidence. The website is plain HTML/CSS/JavaScript. PDFs use ReportLab; the editable deck uses the supplied `@oai/artifact-tool` runtime. This private authoring package is not available from public npm.

## Rebuild exports in the authoring environment

1. Make the supplied runtime's `@oai/artifact-tool` available to [build-deck.mjs](build-deck.mjs), then run `node application-kit/build/build-deck.mjs`.
2. Run [finalize-deck.mjs](finalize-deck.mjs) with the installed presentation skill helpers, bundled Python and `RUNTIME_NODE_MODULES`. Set `DECK_FINAL_PATH` to a **new** versioned output path; the validator never overwrites an existing final. It verifies eight slides, native tables on slides 7/8, Arial, package integrity, dimensions and successful reimport. Inspect all final slides before promoting to `exports/interview-deck.pptx`.
3. Run `python3 application-kit/build/build-pdfs.py` with ReportLab and Arial font files available. `FONT_DIR` overrides the default macOS font directory. The deck PDF uses the eight final-rendered `.scratch/deck/slide-N.png` files; render the final PPTX through the supplied runtime before generating it.
4. Inspect all PDF pages. Confirm counts: one-page summary, seven-page case, eight-page deck preview. Review links, assumptions, units and diagram semantics. No native PowerPoint rendering is claimed.

Private intermediates are ignored. Final exports and authoring sources are versioned.

## Build and verify public pages

```sh
npm run check
npm run check:kit
npm run test:kit
npm run build:pages
```

`build:pages` preserves the original prototype root and adds `application-kit/`, `application-kit/workspace/` and downloads. Update the manifest after changing canonical process rules or KPI inputs, rebuild presentation layers, and rerun checks. Never edit a PDF independently of its source.
