# Instagram Pipeline Command — Google Stitch Prompt & Post-Generation Notes

## Overview

This document records the Google Stitch prompt submitted during the design phase of the Pipeline Command mobile app, what the tool generated, and the adjustments made before the final design was implemented.

It is included in the portfolio as evidence of AI-assisted design tooling in a product workflow, and to demonstrate the kind of PM judgment required to review, critique, and revise AI-generated output rather than accepting it uncritically.

---

## The Stitch Prompt

The following prompt was submitted to Google Stitch:

---

Design a mobile app for an Instagram content automation platform. The app is used by a social media agency to monitor and control a backend pipeline that generates and publishes Instagram reels automatically.

Core user: A social media manager at a small agency. They check this app once or twice per day — typically in the morning to approve content before it goes live, and in the evening to review what published.

Core jobs-to-be-done:
1. See today's scheduled posts and approve or reject them before they publish
2. Trigger an emergency manual pipeline run if needed
3. Check the pipeline's current operational status at a glance (idle / running / error)
4. Review a history of past posts and their publish outcomes

UI requirements:
- Dark theme, mobile-native (iOS conventions)
- Post cards should show: scheduled time, target account (@severus_connects or @mikeb.io), hook text preview (first 60 characters), current status badge (Pending Approval / Approved / Queued / Published / Failed), and approve/reject action buttons on Pending Approval cards only
- Pipeline status should be visible on every screen without requiring navigation
- The primary action — triggering a manual pipeline run — should be fast to access but not accidental; a confirmation step is acceptable
- Navigation should reflect the usage pattern: operators use this app briefly and purposefully, not for extended browsing sessions
- Approximate daily post volume: 3–6 posts across both accounts

Design for a 390px wide iPhone viewport. Dark background #0f0f1a. Clean sans-serif typeface. Use blue (#3b82f6) as the primary accent colour to distinguish this tool from other Severus Connects interfaces.

---

## What Stitch Generated

Stitch produced a complete mobile UI proposal within approximately 40 seconds. The overall output was structurally coherent and usable as a starting point.

**Correct decisions made by Stitch:**

- **Post card layout** — Card list as the primary content pattern was the right call. Cards with status badge, scheduled time, and account label were well structured, and the information density was appropriate for a glanceable interface.
- **Dark theme** — Colours were close to spec, using a `#111118` background and neutral grey surfaces. Blue accent was applied consistently across interactive elements.
- **Post detail view** — Tapping a card produced a detail screen with full hook text, render thumbnail placeholder, and clear approve/reject buttons at the bottom.
- **Typography** — Inter was selected, with a readable size hierarchy. The 14px body and 12px metadata sizes were appropriate for the content density.
- **Confirmation for destructive actions** — Stitch included a confirmation prompt on the Reject action, which is the correct UX pattern for an irreversible choice.

**Navigation structure proposed by Stitch:**

Stitch generated a 4-tab bottom navigation bar: Today / Schedule / Analytics / Settings.

This navigation structure was incorrect for the use case.

---

## Post-Generation Adjustments

### Adjustment 1: Navigation reduced from 4 tabs to 2 tabs + FAB

**What Stitch proposed:** A 4-tab bottom nav — Today, Schedule, Analytics, Settings.

**Why it was wrong:** This navigation assumes continuous, multi-purpose usage across four different workflows. A social media manager using a monitoring tool checks it twice a day for specific tasks. Four tabs creates cognitive overhead — the user must evaluate four options each time they open the app. "Schedule" and "Analytics" represent entirely different use cases (planning and reporting) that belong in a separate tool or a web interface, not in a quick-check mobile app. Settings as a primary tab at the same visual weight as Today is a categorisation error: settings are accessed rarely and do not belong in the primary navigation.

**What was changed:** Navigation reduced to 2 tabs (Today, History) with Settings accessible via a gear icon in the screen header. A floating action button (FAB) handles the primary trigger action separately. This reflects actual usage: most sessions are Today-only. History is a secondary reference used occasionally. The FAB communicates its purpose more clearly than a Settings menu item for an action as significant as triggering a pipeline run.

---

### Adjustment 2: FAB promoted as primary CTA for pipeline trigger

**What Stitch proposed:** A "Run Pipeline" option in the Settings tab, presented as a menu item between notification preferences and account management.

**Why it was wrong:** Triggering a manual pipeline run is the highest-intent operational action in the app. Burying it in Settings treats it as a configuration option rather than an operational action. Users who need to trigger a run are often responding to a time-sensitive situation — a piece of content missed its window, or a scheduled run failed. They need to act quickly. Settings → menu item → confirmation is three interactions too many.

**What was changed:** A FAB (floating action button) positioned bottom-right on all screens. The icon is a lightning bolt, which communicates "trigger" more clearly than a "+" symbol. Tapping it opens a confirmation modal: "Run pipeline now? This will generate and queue 3 new reels for @severus_connects." This keeps the action fast to access (one tap to initiate) while the confirmation step prevents accidental triggers. The FAB pattern signals "primary action" to iOS-native users without requiring a label.

---

### Adjustment 3: Post card information hierarchy revised

**What Stitch proposed:** Cards led with the account name as the primary label (largest text, top-left), with scheduled time and status in smaller text below.

**Why it was wrong:** For an operator managing two accounts with 3–6 posts per day, the most critical information is status (does this post need my attention right now?) and time (is this urgent, or do I have an hour?). Account name is secondary context — the operator already knows which accounts they manage; they are not identifying which account each post belongs to as the primary task. Leading with account name delays triage.

**What was changed:** Status badge is promoted to top-right prominence — colour-coded, readable at a glance from a list scroll. Scheduled time is the lead label (bold, larger text, top-left). Account name moves to secondary position (smaller, below the time). Approve/Reject buttons appear inline only on Pending Approval cards; all other status cards show no action buttons, reducing visual noise significantly across the list.

---

### Adjustment 4: Pipeline status bar added across all screens

**What Stitch proposed:** No persistent pipeline status indicator. The pipeline's operational state was only visible on the hypothetical Analytics tab.

**Why it was wrong:** For a monitoring tool, the system's operational state is always relevant context. An operator approving posts needs to know whether the pipeline is currently running or idle — it affects how urgently they need to act and whether their approvals will be picked up immediately. Hiding this information behind a tab means the operator must actively seek it each time they open the app, which undermines the tool's core monitoring function. The prompt explicitly specified that pipeline status should be visible on every screen.

**What was changed:** A persistent status bar occupies 28px immediately below the iOS status bar on every screen. It shows a coloured left-border indicator and a short label: "System: Idle", "System: Running", or "System: Error". The bar uses the same background colour as the screen and is differentiated only by the status indicator, so it is present without being obtrusive. It requires zero interaction to read.

---

## PM Insight from Using Stitch

Stitch is effective at translating a written brief into a structurally sound UI scaffold — the card layout, visual hierarchy within components, and dark theme were all usable without modification. Where it consistently falls short is at the information architecture level: it cannot infer usage patterns from a prompt, so it defaults to comprehensive navigation structures that serve all possible use cases rather than the primary one. This is not a failure of the tool; it is a reflection of what prompts can and cannot convey. The product thinking required to reduce four tabs to two — grounded in an understanding of how often and why a user opens the app — is not something a prompt can specify with sufficient precision. Stitch accelerates the component and layout phase of design. It cannot replace the discovery work that determines what the app should contain in the first place.
