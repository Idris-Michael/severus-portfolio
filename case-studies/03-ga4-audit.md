# GA4 Audit Dashboard

## Context

Severus Connects delivers GA4 analytics setup and optimisation services to small and medium businesses. The clients are non-technical — a coffee shop owner, a wellness brand founder, a law firm principal — who have purchased GA4 implementation but have limited ability to verify whether their analytics are working correctly. The audit dashboard was built to give clients a clear view of their GA4 health without requiring them to understand GA4's own interface.

## My Role

I defined the information architecture, scoped the client data model, made the layout and visualisation decisions, and implemented the interface including the Chart.js integration for trend charts.

## Discovery

GA4's native interface is designed for analysts. It surfaces raw data — session counts, event names, attribution windows — without contextualising what constitutes healthy or broken. A business owner who sees a conversion rate of 2.1% has no basis for knowing whether that is good, bad, or the result of misconfigured tracking. The audit dashboard's core job was to answer the question the client is actually asking: is my GA4 working correctly, and if not, what do I fix first?

That framing ruled out a dashboard that reproduced GA4 metrics in a different visual style. The product had to translate, not simply redisplay.

## Design Decisions

**Severity-first table layout for findings.** Audit findings are sorted by severity — Critical, High, Medium — rather than by topic, chronology, or GA4 taxonomy. A business owner given a list of five findings will act on them in order. Sorting by severity means the order of presentation matches the order of action required. Sorting by topic (Events, Attribution, Consent) would require the client to assess relative urgency themselves, which is the service they purchased.

**Health score ring as the primary visual element.** The score ring (0–100) is the first element a client sees on the page. A score of 42 communicates that something is wrong without requiring the client to understand what a broken cross-domain measurement configuration is. The metrics below the score (Sessions, Conversion Rate, Goal Completions) provide supporting evidence once the client has processed the primary signal. In an earlier design iteration, the metrics row appeared first; user feedback indicated that clients tried to interpret the numbers without context, which produced confusion rather than action.

**Per-client state reset on account switch.** Three client accounts are available via tab switcher. Switching client resets all panels — metrics, chart, score, and findings table — to that client's data. This prevents cross-client confusion and removes any possibility of a client seeing another client's data in the same session. The switch is instantaneous by design; a loading state would imply a network request and create false expectations about how the tool works.

## Technical Constraints

Chart.js 4 loaded via CDN for the 30-day sessions trend chart. Table row expansion for finding detail uses CSS and JavaScript without a framework. The metric count-up animation on client switch (300ms duration) provides a visual signal that data has changed without requiring the client to read the new numbers twice to confirm they updated.

## What Shipped

A fully interactive GA4 audit portal at https://severus-six.vercel.app/demos/ga4-audit.html with a 3-client switcher, animated metric cards, a responsive line chart, a sortable and expandable audit findings table, a health score ring with animated draw, and an export toast notification. All interactions reset correctly on client switch.

## Outcome

Demonstrates the ability to design data-heavy B2B interfaces for non-technical users — the core challenge in client portal product design. The severity-first layout and the score ring as primary visual are the two decisions most directly relevant to PM portfolio evidence: both required defining what the user actually needs from the interface, which is a different question from what data the interface could show.
