# Export plan and artefact levels

| Level | Audience | Output | Canonical input | Path |
|---|---|---|---|---|
| A | Recruiter | A4 one-page PDF | Executive summary and case.json | [executive-summary.pdf](exports/executive-summary.pdf) |
| A/B | Business/hiring manager | Seven-page case PDF | executive/case-study.md and case.json | [case-study.pdf](exports/case-study.pdf) |
| B | Interview | Eight-slide editable PPTX with Dutch notes | case.json slides | [interview-deck.pptx](exports/interview-deck.pptx) |
| B | Interview preview | Eight-page deck PDF | rendered final PPTX slides | [interview-deck.pdf](exports/interview-deck.pdf) |
| A | Recruiter | Public landing page | case.json + landing source | /application-kit/ |
| B | Hiring/IT manager | Interactive evidence workspace | case.json + workspace source | /application-kit/workspace/ |
| B | Live interview | Existing process prototype | 08-prototype | Original Pages root |
| C | Detailed review | GitHub/BPMN/OpenAPI/UAT/ADRs | Original 01-14 source folders | Parent repository |

Printed PDFs and the deck retain independent-case disclosures. Numeric targets come from 13-kpis/target-kpis.md. The one-page export stays one A4; the executive case stays seven pages; the deck stays eight slides. PPTX tables/diagrams/text are editable and speaker notes live inside the file.

Application-kit sources are separate from the operational demo. The static build copies only presentation assets and final exports into dist/pages/application-kit. Intermediate render files and private validation output are ignored. Build instructions live in [build/README.md](build/README.md).

Source/target traceability: [content manifest](content/case.json), [source audit](audit/repository-audit.md), [quality review](audit/quality-review.md).
