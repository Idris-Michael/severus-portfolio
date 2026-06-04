# Pipeline Command — Instagram Mobile

## Context

Pipeline Command is the mobile control surface for the same Instagram automation pipeline documented in the Severus Social case study. The web monitor is an observation tool: watch what the pipeline is doing. The mobile app is a control surface: approve posts, trigger runs, check status on the move. The distinction between those two product definitions shaped every subsequent decision.

The demo is available at https://severus-six.vercel.app/demos/pipeline-mobile.html, rendered in a CSS phone frame with no framework dependency.

## My Role

I led the product definition, interaction design, and implementation. The project included a structured experiment using Google Stitch for initial screen generation, which I used deliberately as a scaffold and then revised based on the actual use case rather than accepting its output uncritically.

## Discovery

The operator using this app checks it twice a day at most. A run has either completed and is waiting for approval, failed and needs acknowledgement, or is in progress. There is no complex configuration workflow, no analytics review, and no settings management that competes with those three states for operator attention.

The Google Stitch session produced a card list as the primary pattern and a dark theme with Inter typography — both correct. It also proposed a four-tab navigation structure: Today, Schedule, Analytics, Settings. That structure is wrong for the use case. Four primary navigation destinations implies four categories of regular activity of roughly equal weight. The actual operator behaviour is: check today's posts (primary), look at history occasionally (secondary), everything else is rare. Encoding four tabs as equivalent options misrepresents the usage pattern and fragments the primary action across navigation decisions the operator does not need to make.

## Design Decisions

**Navigation reduced from four tabs to two plus a FAB.** Today and History cover the majority of operator sessions. Settings is accessible via a header icon on the Today screen. The floating action button surfaces the primary high-intent action — trigger a pipeline run — at the top level of the interface without requiring navigation. Burying a primary action inside a Settings or Schedule tab adds steps to a task most likely to occur under time pressure.

**Post card information hierarchy revised.** The Stitch-generated card led with account name as the primary label. Account name is stable context, not variable information. What changes run to run — and what an operator is triaging — is the scheduled time and the post status. The revised card leads with status badge and scheduled time, with account name in secondary position. Operators sort by urgency first, not by which account they are looking at.

**Persistent pipeline status bar.** A 28px bar sits immediately below the system status bar on every screen. It shows the pipeline's current operational state: Idle, Running, or Error. An operator approving a post needs to know whether a new run is in progress; navigating away from the home screen to find that information breaks the approval flow. The bar provides that context without requiring navigation.

## Technical Constraints

The demo is a self-contained HTML file rendered in a CSS phone frame. The confirmation modal for "Run pipeline now" uses a bottom-sheet pattern rather than a browser alert dialogue. This keeps the visual language consistent — a native OS dialogue would break the rendered frame and create the wrong impression for a portfolio reviewer assessing mobile design judgment.

## What Shipped

A fully interactive mobile control surface at the URL above with a two-tab layout, FAB-triggered run confirmation via bottom sheet, post approval and rejection interactions with animated state changes, a persistent pipeline status bar, and a history screen with completed run records.

## Outcome

The case study demonstrates two things relevant to a PM or UI portfolio. First, the ability to identify where a tool's output is incorrect relative to a use case and make the revision — the Stitch navigation reduction is a concrete example of product judgment applied after generated output. Second, the information hierarchy revision on the post card illustrates the difference between designing for a data inventory (show all available fields) and designing for a user task (surface what the operator needs to triage in the first two seconds of looking at the screen).
