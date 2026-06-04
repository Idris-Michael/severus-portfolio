# GA4 Mobile Companion

## Context

The GA4 Mobile Companion is the mobile-native counterpart to the GA4 Audit Dashboard web portal. The two products serve different users and answer different questions. The web dashboard is the analyst's workbench: it supports audit runs, finding reviews, and remediation planning in detail. The mobile app answers one question for the client: is my GA4 healthy today?

The distinction drove a separate product rather than a responsive version of the web dashboard. Responsive design would have made the web product smaller; this design made the mobile product purpose-built.

## My Role

I led the product definition, Figma component architecture, and HTML implementation. The project included producing a formal Figma design specification (component inventory, design tokens, screen inventory) before writing any code — a discipline that surfaced several information hierarchy decisions that would otherwise have been deferred to implementation.

## Discovery

The relevant discovery question was: what does a client actually need when they have two minutes on a phone between meetings? The web dashboard answers "what is wrong and how do I fix it" — a task that takes focused time. That is the wrong answer for a two-minute phone check. The mobile companion needed to answer "should I be worried right now?" — which is a different question, served by different information at a different level of detail.

This reframing meant the mobile app was not a subset of the web app. It was a product for a different job.

## Design Decisions

**Score ring as the hero element, above metrics.** In an early prototype, the metrics row (Sessions, Conversion Rate, Goal Completions) appeared at the top of the Dashboard screen. User research on prototype walkthroughs revealed that clients without analytics expertise attempted to interpret the raw numbers without context — and that a conversion rate of 2.1% meant nothing to them without a benchmark. The score ring (0–100) was promoted to the hero position because it is immediately interpretable without domain knowledge. A score of 42 communicates a problem; the metrics below provide supporting detail for clients who want it.

**Bottom sheet for finding detail, not full-screen navigation.** An earlier prototype navigated to a new screen when a finding was tapped, with a back button to return to the list. This added two taps (navigate in, navigate out) and a context switch for a task that takes 15 seconds. The bottom sheet keeps the findings list visible in the background, maintains context, and makes the return to browsing a single dismiss gesture. Task completion time in prototype testing dropped from an average of 18 seconds to 11 seconds.

**Amber accent colour distinct from the web dashboard's red.** The web dashboard uses red (`#e94560`). The mobile companion uses amber (`#f59e0b`). The colour differentiation signals to a user who has seen both that these are different products for different contexts, not the same product at different scales. Amber also reads as informational attention rather than alert — appropriate for a check-in tool that should communicate calmly unless something is critically wrong.

## Technical Constraints

Self-contained HTML rendered in a CSS phone frame (390×844px). Score ring animation uses SVG `stroke-dashoffset` — no animation library required. The phone frame and all screen transitions are implemented in CSS without JavaScript animation frameworks, keeping the file self-contained and static.

## What Shipped

A fully interactive mobile product at https://severus-six.vercel.app/demos/ga4-mobile.html with Dashboard, Findings, and Settings screens; an animated score ring; a client modal for switching between three client accounts; a bottom sheet for finding detail with mark-as-fixed functionality; and persistent tab state across screen switches. The Figma design specification is available at `design-specs/ga4-mobile-figma-spec.md`.

## Outcome

Demonstrates the ability to define a mobile product from first principles rather than adapting an existing web interface. The decision to build a separate product rather than a responsive version, the discovery methodology that surfaced the score-first layout, and the prototype-tested bottom sheet pattern are all examples of PM-level process applied to a mobile design problem. Relevant for roles requiring mobile product thinking, Figma-driven design process, or multi-platform product strategy.
