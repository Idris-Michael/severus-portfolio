# Triple-Tool Flywheel

## Context

The Severus Connects content production stack uses three separate tools to produce an Instagram reel: OpenScreen for script and hook writing, Voicebox for audio synthesis, and OpenShorts for video rendering. Each tool was originally operated independently. Operators were copying the script output from OpenScreen, pasting it into Voicebox as the synthesis input, copying the output audio filename, and entering it manually into OpenShorts. This manual handoff process introduced errors, slowed production, and created a workflow that required the operator to track state between three separate interfaces.

The Triple-Tool Flywheel unified the three tools into a single progressive interface that eliminates manual handoffs.

## My Role

I identified the handoff problem as the primary pain point, defined the integration model (output-as-input rather than a shared data layer), designed the staged unlock interaction, and implemented the full interface.

## Discovery

The core discovery was that the friction was not in any individual tool — each tool worked correctly in isolation. The friction was at the seams between tools. This is a common failure mode in product ecosystems: teams optimise each component of a pipeline without designing the transitions between them.

Observation of the manual workflow revealed three distinct handoff points, each requiring a copy-paste operation and each carrying a risk of error — wrong filename, truncated script, mismatched audio duration. The design question was not "how do we improve the tools?" but "how do we eliminate the seams?"

## Design Decisions

**Output-as-input handoff, not copy-paste.** When the operator completes Stage 1 (OpenScreen), the generated script is automatically populated as the input to Stage 2 (Voicebox). When Stage 2 completes, the audio filename is automatically surfaced as the input reference in Stage 3 (OpenShorts). The operator never copies or pastes between tools. This eliminates the error class that the manual workflow introduced and removes the cognitive overhead of tracking intermediate state.

**Stage locking until inputs are ready.** Voicebox and OpenShorts are visually locked and non-interactive until their required inputs exist. A locked stage communicates the dependency relationship without documentation. It also prevents out-of-order execution — an operator cannot attempt to render a reel before a voiceover exists. This was a product decision, not an engineering convenience: the locking makes the pipeline's data dependencies visible as an interaction model.

**Linear stepper as the persistent navigation map.** A three-step progress indicator at the top of the interface shows current stage (active), completed stages (ticked), and pending stages (numbered). The panels below provide the working surface for each stage; the stepper provides the map. An operator who has completed Stage 1 and is working in Stage 2 can see at a glance what remains without scrolling or navigating. The stepper and the panels are two representations of the same pipeline state, kept synchronised by the underlying JavaScript state machine.

## Technical Constraints

All state is managed in vanilla JavaScript without a framework or build step. Stage transitions use realistic delays (1–2 seconds) to communicate that processing is occurring — a pipeline that appears to complete instantaneously would misrepresent the real-world latency of the tools it represents. Button states (active, processing, complete) are managed via class toggling on a single element.

## What Shipped

A fully interactive three-stage pipeline interface at https://severus-six.vercel.app/demos/triple-tool.html. Stage 1 supports script and caption input with a Generate Script action. Stage 2 auto-populates the script and supports voice profile selection before synthesis. Stage 3 auto-populates the audio reference and supports template selection before rendering. All three stages complete with realistic delays and visual confirmation. Stages 2 and 3 are locked until their inputs arrive.

## Outcome

Demonstrates the ability to design cohesive user journeys across multiple tools or microservices — the product integration challenge that appears in every company running a multi-service architecture. The output-as-input handoff pattern and the stage locking model are concrete examples of seam elimination: the PM skill of identifying where friction exists between components rather than within them, and designing the transition rather than just the tools.
