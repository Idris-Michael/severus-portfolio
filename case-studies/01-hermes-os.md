# Hermes OS Mission Control

## Context

Severus Connects operates across multiple clients, AI agents, automation pipelines, and content production streams simultaneously. As the agency scaled, the operational overhead of managing these streams across separate tools — a task list in one place, agent status in another, logs in a terminal, client records in a spreadsheet — became a constraint on throughput. The brief was to consolidate these into a single interface that an agency principal could open and immediately understand the state of the business.

## My Role

I owned the product from brief to deployed demo. This included defining the information architecture, making the panel layout and interaction decisions, writing all front-end code in vanilla HTML/CSS/JavaScript, and deploying the result as a live interactive demo.

## Discovery

The first question was not "what should the dashboard show?" but "what does the operator need to know at a glance, and what can wait for a deliberate interaction?" I identified four categories of operational data the agency principal checks regularly: tasks in progress, agent availability, recent pipeline runs, and client status. Each had a different urgency profile — tasks are the primary work surface; agents are relevant when assigning or diagnosing; run logs are reactive (checked when something is wrong); CRM is reference material.

This urgency hierarchy shaped the layout before a single pixel was drawn.

## Design Decisions

**4-panel grid rather than tabs.** The four data streams are shown simultaneously rather than behind navigation. The reasoning was that switching tabs to check agent status interrupts the primary task (reviewing kanban cards). A grid keeps all four streams in peripheral vision; the operator focuses where needed without navigating.

**Kanban click-to-advance rather than drag-and-drop.** Drag-and-drop introduces precision requirements that slow down a quick status update. Clicking a card advances it to the next column — Backlog to In Progress to Done — in a single action. This prioritises speed of interaction over fidelity to the kanban metaphor.

**Status dots rather than text labels for agent status.** Coloured dots (green/amber/grey for online/idle/offline) communicate agent availability without requiring the operator to read. Text labels would require focus; coloured dots can be scanned at the periphery of attention while working in another panel.

## Technical Constraints

The demo runs as a self-contained static HTML file with no backend. All state is held in JavaScript memory and resets on page load. This constraint was absorbed cleanly — the interface does not need persistence to demonstrate the product concept, and the absence of loading states or API error handling reduces noise in the demo.

## What Shipped

A fully interactive four-panel mission control dashboard at https://severus-six.vercel.app/demos/hermes-os.html. The Kanban board supports click-to-advance card movement. The agent status panel supports click-to-toggle status. The run log is populated with 12 timestamped entries across success, warning, and error states. The CRM panel filters client records in real time via a search input.

## Outcome

Demonstrates the ability to design macro-level operational dashboards that consolidate multiple complex data streams into a usable single surface. The information architecture decisions — what to show simultaneously vs. on demand, what interactions to optimise for speed vs. fidelity — are the core PM/UI skills this product illustrates. Relevant for roles involving internal tooling, operational dashboards, or B2B SaaS products with complex data models.
