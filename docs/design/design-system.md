# Prototype design specification

Reference: [generated desktop concept](dashboard-concept.png). Built-in Image Gen produced the reference for a restrained operations dashboard: navy sidebar, white main surface, teal action, four unframed KPI columns, wide asset table, two lower attention/activity panels. No bitmap is used as live UI.

Tokens: navy #102536; ink #142b40; teal #008c95; muted #60758a; border #dce5eb; white #ffffff; subtle table header #f3f6f8. Sidebar 220px; main gutter 32px; system sans 14px body / 32px heading; 6px button/panel corners; thin borders. Tables, status labels, detail facts, timeline and forms share these tokens.

User requirements override generated placeholder locations/statuses: Belgian Oostende/Brugge and canonical Available/Assigned/Maintenance are used instead of the concept's invented German sample copy. Synthetic counts follow seed (8 assets, 2 open claims, 1 awaiting approval, 1 pending ERP event). Responsive design stacks navigation and metrics at ≤720px; tables scroll within container.

Inspection compares sidebar, hierarchy, whitespace, metric/table geometry, palette and action styling. Role selector and detail/form states are intentional additions needed for the requested demonstrator. [Quality audit](../quality-audit.md) records rendered checks.

---
[Repository overview](/README.md) · Fictional portfolio case; proposed design unless explicitly marked as tested prototype.
