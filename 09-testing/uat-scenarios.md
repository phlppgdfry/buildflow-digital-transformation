# User acceptance scenarios

**24 target UAT scenarios; status: prepared, not executed by business users.** Local automated checks do not constitute client acceptance. Use synthetic participants and record actual evidence/results during a real pilot.

## UAT-INV-001

**Requirement:** FR-01. **Scenario:** Register an asset.

**Given:** Warehouse; unique ERP reference and physical label.

**When:** Register AST-009 with missing serial reason.

**Then:** Immutable ID and QR; financial fields read-only; duplicate ID rejected.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-002

**Requirement:** FR-02. **Scenario:** Checkout and duplicate replay.

**Given:** AST-001 Available v1; active SITE-004 / EMP-002.

**When:** Warehouse checkout then replay same key.

**Then:** Assigned with site/custodian; one movement; same response on replay.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-003

**Requirement:** FR-03. **Scenario:** Damaged return.

**Given:** Assigned asset; recorded inspection.

**When:** Return with damage.

**Then:** Damaged asset + exactly one linked Draft claim/history in one transaction.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-004

**Requirement:** FR-04. **Scenario:** Transfer receipt / wrong site.

**Given:** Assigned asset dispatched to SITE-005.

**When:** Confirm first at wrong site then right site.

**Then:** Wrong site rejected; sender custody until accepted receipt; destination assigned once.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-005

**Requirement:** FR-05. **Scenario:** History and unauthorised alteration.

**Given:** Asset with accepted movements.

**When:** Read history then attempt normal edit/delete.

**Then:** UTC actor/version/reason preserved; edit/delete denied.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-006

**Requirement:** FR-06. **Scenario:** Unsafe asset and reservation lifecycle.

**Given:** Damaged asset; separate expired reservation.

**When:** Try checkout; run reservation expiry.

**Then:** Damaged checkout blocked; expired unfulfilled Reserved becomes Available only once.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-007

**Requirement:** FR-12. **Scenario:** Offline draft and version conflict.

**Given:** Field offline; another user assigns asset.

**When:** Save draft; reconnect and confirm.

**Then:** Draft visibly unconfirmed; current version conflict requires review; no silent overwrite.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-008

**Requirement:** FR-02. **Scenario:** Concurrent checkout.

**Given:** Two Warehouse users see Available v1.

**When:** Submit different checkout commands concurrently.

**Then:** One wins; other 409; only one custodian and movement.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-009

**Requirement:** FR-06. **Scenario:** Lost, found and inspected.

**Given:** Assigned asset verified missing.

**When:** Record Lost; find asset and inspect.

**Then:** Reason/history preserved; Available only after authorised inspection.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-010

**Requirement:** FR-06. **Scenario:** Retired asset cannot circulate.

**Given:** Retired asset and ERP disposal reference.

**When:** Attempt checkout and transfer.

**Then:** Rejected; financial disposal not overwritten.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-011

**Requirement:** FR-01. **Scenario:** Migration duplicate and missing serial.

**Given:** Import contains duplicate IDs and missing serial.

**When:** Validate staged import.

**Then:** Duplicate quarantined with owner; missing serial exception; no auto merge.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-INV-012

**Requirement:** FR-03. **Scenario:** Clean return and ERP outage.

**Given:** Assigned asset; ERP unavailable.

**When:** Inspect clean return.

**Then:** Available at warehouse; history complete; no unnecessary ERP dependency.

**Tester:** Warehouse / Key User. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-001

**Requirement:** FR-07. **Scenario:** Submission completeness.

**Given:** Draft with missing evidence.

**When:** Submit, add approved evidence, resubmit.

**Then:** First rejected; valid submission gets owner/UTC/deadline and history.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-002

**Requirement:** FR-08. **Scenario:** Information request keeps SLA.

**Given:** Under Review claim with original dueAt.

**When:** Request info with reason, then provide it.

**Then:** Information Required recorded; original resolution deadline unchanged.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-003

**Requirement:** FR-09. **Scenario:** Approval boundary and separation.

**Given:** Estimates €5,000 and €5,000.01; distinct reporter/manager.

**When:** Approve as reporter, then Manager, then Finance.

**Then:** Self-approval denied; exactly €5,000 manager-only; above requires both.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-004

**Requirement:** FR-10. **Scenario:** ERP timeout and duplicate replay.

**Given:** Approved claim; adapter times out after ERP success.

**When:** Lookup externalRef and replay event.

**Then:** One ERP commitment; receipt reconciled; no duplicate financial effect.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-005

**Requirement:** FR-11. **Scenario:** Reminder/escalation dedup.

**Given:** Clock near deadline then breached.

**When:** Run hourly flow twice in same window.

**Then:** One reminder/escalation per stage/window; no messages for terminal claims.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-006

**Requirement:** FR-13. **Scenario:** AI failure and injection.

**Given:** Incomplete claim / injected text / unavailable service.

**When:** Request draft and review.

**Then:** Unsafe output withheld; manual work possible; no liability/approval/booking actions.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-007

**Requirement:** FR-14. **Scenario:** Dashboard scope and denominator.

**Given:** Two sites, Draft and Closed claims.

**When:** Open as site-scoped Manager.

**Then:** Only authorised projects; Draft excluded; completeness/denominator shown.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-008

**Requirement:** FR-09. **Scenario:** Estimate revision invalidates approval.

**Given:** Manager approved €4,900; new estimate €6,200.

**When:** Revise estimate.

**Then:** Approval reset; Finance needed; old revision cannot approve/dispatch.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-009

**Requirement:** FR-10. **Scenario:** Invoice mismatch blocks closure.

**Given:** Awaiting Invoice with mismatch or absent reference.

**When:** Attempt Closed then reconcile ERP invoice/outcome.

**Then:** First blocked; closure records actual/reference/outcome only after reconciliation.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-010

**Requirement:** FR-07. **Scenario:** Evidence privacy/access.

**Given:** Restricted photo and invalid MIME/large file.

**When:** Upload invalid file / access from another project.

**Then:** Invalid file denied; other project denied; no sensitive notification content.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-011

**Requirement:** FR-08. **Scenario:** Reject/reopen audit.

**Given:** Review claim then closed claim.

**When:** Reject with reason; reopen authorised case with reason.

**Then:** Reason required; asset still unsafe if Damaged; previous decisions/history retained.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.

## UAT-CLM-012

**Requirement:** FR-10. **Scenario:** Permanent mapping failure.

**Given:** Outbox has unknown cost centre.

**When:** Dispatch and quarantine; authorised fix/replay.

**Then:** No endless retry; DLQ visible; Finance/IT reconciliation before closure.

**Tester:** Coordinator / Finance. **Result:** Not executed. **Evidence:** attach run ID, observed state and screenshot in pilot record.



---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
