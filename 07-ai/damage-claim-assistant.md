# AI Damage Claim Assistant

AI structures description, suggests category/severity, detects missing facts, retrieves authorised similar cases and drafts a factual approver summary. Image descriptions are a future optional feature after explicit privacy/quality validation; the local demo uses synthetic text rules, no live Claude or other model.

Every output shows **AI-generated suggestion — human review required**. **AI recommendation ≠ business decision.** Human review can accept selected fields, edit or dismiss. Store accepted fields, reviewer and timestamp. Even a high score cannot approve, allocate legal liability, sanction an employee or book a financial transaction.

Do not call a model's self-reported confidence a probability. Target design uses evidence completeness and calibrated evaluation; recommendation score below 0.80 requires clarification, below 0.60 withholds draft categorisation. All bands still require review. Thresholds are provisional and must be tuned on held-out examples; missing essential facts override score.

Fallback: unavailable/invalid/unsafe model output returns manual form and reason. AI is never a prerequisite to claim submission, approval or repair. Model/provider choice remains subject to regional processing, contract, cost and evaluation. An approved Claude service is an option, not a configured live integration.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
