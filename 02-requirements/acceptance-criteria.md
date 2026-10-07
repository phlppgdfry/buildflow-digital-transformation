# Acceptance criteria

## AC-01

Unique asset ID never reused; duplicate serial becomes a review exception, not a merge. QR resolves the immutable asset ID without employee or price data.

## AC-02

Available asset + active ERP project/custodian + matching version creates Assigned state and one history event. Concurrent or repeated command cannot double-assign.

## AC-03

Undamaged inspected return becomes Available at warehouse. Damaged inspection creates exactly one Draft claim and keeps asset Damaged; failure rolls back both.

## AC-04

Dispatch moves Assigned to In Transit with source custody. Only destination receiver confirms; duplicate confirmation leaves one receipt and assignment.

## AC-05

Each accepted change records actor, UTC timestamp, previous/next state, business reason, transaction ID and correlation ID. History cannot be edited by normal users.

## AC-06

Reserved checkout requires matching reservation; unsafe status cannot checkout. Lost needs reconciliation; Retired is terminal and Finance confirms financial disposal separately.

## AC-07

Draft can be incomplete. Submission requires active site, asset reference or explicit unidentified-asset exception, severity, meaningful description, owner and at least one valid evidence reference.

## AC-08

Triage assigns owner, records human liability assessment separately and requests details with a reason. Information Required does not reset the original SLA deadline.

## AC-09

€5,000 needs manager only; €5,000.01 needs manager plus Finance. Reporter cannot approve. Changed amount/evidence after approval invalidates existing decisions.

## AC-10

Final approval creates one repair commitment outbox event. Timeout leads to reference lookup before resend. Closed requires reconciled actual invoice reference and repair outcome.

## AC-11

Hourly evaluation issues at most one reminder per claim/stage/window; after SLA breach escalates to Operations. Closed and Rejected claims do not receive reminders.

## AC-12

Offline draft visibly states unconfirmed. Reconnection revalidates current asset version and project. Conflicts prompt review, never silent overwrites.

## AC-13

AI suggestion records prompt version and source IDs; review required even at high score. No AI output can alter liability, status, approve, sanction or book costs.

## AC-14

Dashboard excludes drafts from operational claims, uses scoped project access, distinguishes seed metrics and shows denominator/data completeness. Reopened cases tracked separately.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
