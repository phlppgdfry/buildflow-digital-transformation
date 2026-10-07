# AI risk register

| ID | Risk | Likelihood / impact | Mitigation / owner | Residual / gate |
|---|---|---|---|---|
| AIR-01 | Wrong category/severity | Medium / high | Factual schema + human review; Operations | Held-out evaluation |
| AIR-02 | Invented liability or cost | Medium / critical | No decision fields/tools; IT | Zero-tolerance release test |
| AIR-03 | Personal evidence disclosure | Medium / high | Redaction/scoping/processor approval; Privacy adviser | No live data until reviewed |
| AIR-04 | Automation bias | High / high | Explicit review, source comparison, training; Key User | Observe pilot review behaviour |
| AIR-05 | Model unavailable | Medium / medium | Manual fallback; IT | Claim work continues |
| AIR-06 | Injection via text/evidence | Medium / high | Isolation/allowlist/source validation; IT | Adversarial testing |
| AIR-07 | Weak language/site coverage | Medium / medium | Dutch/French samples and disagreement review; Operations | Language gate before rollout |
| AIR-08 | Unmeasured benefit/cost | Medium / medium | Draft/edit time experiment; Business owner | Remove if no net gain |

Risk owner is a human, not the model. Legal, data protection and workplace implications require client-specific assessment before deployment.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
