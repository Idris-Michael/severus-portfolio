# Automation Node Inspector

## Context

Severus Connects runs eight automation workflows in n8n covering lead capture, GA4 reporting, content pipeline orchestration, client onboarding, invoice generation, Telegram approval routing, SEO scheduling, and CRM synchronisation. As the automation stack grew, diagnosing failures and onboarding new team members to the system required opening n8n directly and navigating its graph editor — a tool designed for building workflows, not for operational monitoring. The inspector was built as a purpose-built view for understanding what each workflow does and diagnosing failures without the overhead of the n8n editor.

## My Role

I defined the inspection model, designed the node graph rendering approach, and implemented the interface in vanilla HTML with inline SVG for the node graphs.

## Discovery

Node-based interfaces are one of the harder design problems in technical tooling. The underlying data model is a directed graph; the user's mental model is usually sequential steps. When these two models diverge — when a user encounters a branching workflow, a loop, or a non-linear execution path — the graph metaphor can create more confusion than it resolves.

The research finding that shaped this product was that most operators need to answer one of two questions: "what does this workflow do?" (discovery) or "which node failed?" (diagnosis). Neither question requires editing the workflow. Both are served better by a read-only view with focused inspection than by an editing interface that requires panning, zooming, and managing edit state.

## Design Decisions

**Inspector panel below the graph, not as a side panel or modal.** Clicking a node reveals its type, inputs, outputs, last run status, and configuration below the graph. The graph stays fully visible. This matters because the spatial relationship between nodes — the position of the selected node within the flow — provides context for the configuration shown in the inspector. Hiding the graph behind a modal or replacing it with an inspector removes that context.

**Node status colours as the primary signal.** Each node displays a coloured border: green for success, amber for warning, red for error, grey for idle. An operator diagnosing a failed run can scan the graph and locate the failed node visually before reading any text. Status information that requires reading is slower to locate than status information that requires recognising a colour, particularly in a workflow with eight or more nodes.

**Workflow cards as the navigation entry point.** Eight workflow names are listed on the left side of the interface. An operator selects a workflow to view its graph. This means discovery flows from intent — "I want to look at the Instagram Pipeline" — rather than requiring the operator to find the relevant workflow by scanning a graph. Entry by name is faster for known workflows, which covers the majority of operational use.

## Technical Constraints

Node graphs are rendered as pre-computed inline SVG. Node positions are fixed rather than auto-layouted. For eight known workflows with stable structures, pre-computation was the right trade-off: auto-layout algorithms introduce inconsistency in how the same workflow renders on different viewports, and the predictability of a fixed layout is preferable for a monitoring context where operators are building spatial familiarity with each workflow over time.

## What Shipped

A fully interactive workflow inspector at https://severus-six.vercel.app/demos/n8n-workflows.html. All eight workflows are selectable via the left panel. Each workflow renders a node graph with status-coloured borders and an arrow-connected flow. Clicking any node populates the inspector panel with node type, input/output specifications, last run status, and a configuration summary.

## Outcome

Demonstrates the ability to design interfaces for highly technical product requirements — specifically node-based workflow visualisation, which is a domain where the gap between the data model and the user's mental model creates significant design challenges. The inspector panel pattern, the status-first visual language, and the card-based entry point are all decisions that required framing the operator's actual tasks before choosing an interface model.
