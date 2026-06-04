# Instagram Pipeline Monitor

## Context

Severus Social is a fully automated Instagram content pipeline. On a schedule, it calls a Hugging Face inference endpoint to generate a script via Qwen3-32B, synthesises a voiceover through Google Gemini TTS, renders a video reel using Hyperframes, and publishes the result to Instagram via the Meta Graph API. Each stage introduces latency, potential failure points, and state that an operator needs to observe without running a terminal session.

The monitoring interface is the operational surface for this system. It answers two questions an operator asks during a live run: where is the pipeline right now, and what is it actually doing?

## My Role

I owned the problem framing, the information architecture, the visual design, and the front-end implementation. There was no separate engineering handoff; decisions about what to build were the same decisions as decisions about how to build it, which meant constraints had to be surfaced before implementation rather than discovered during it.

## Discovery

The operator profile is specific: technically literate, not necessarily watching a terminal. They understand what an API call is and can read a log line, but they are not running the pipeline from a shell. They check in on a run in progress, triage if something looks wrong, and leave. Session length is short. The primary question is binary — is it working or not — with a secondary need to diagnose when the answer is no.

That profile ruled out two approaches immediately. A status-only dashboard (green dot, red dot) removes the ability to diagnose. A raw log dump treats the operator like a developer watching stdout, which introduces cognitive load that does not serve the use case. The design question became: how do you make log output readable for a non-terminal user without removing the information that makes diagnosis possible?

## Design Decisions

**Dual-surface layout.** The step tracker on the left answers the status question with coloured stage indicators: Script Generation, Voiceover Synthesis, Reel Render, Publish. An operator reads this in two seconds without parsing a single log line. The terminal on the right answers the diagnostic question for the operator who needs it. Neither surface is redundant; they answer different questions at different levels of abstraction.

**Log line colour coding.** INFO lines render in grey, SUCCESS in green, WARNING in amber, ERROR in red. The visual contrast allows an operator to scan a terminal rapidly and locate the signal. A terminal where all output is the same colour requires reading every line sequentially. The colour system indexes the log rather than replacing it.

**Pause applies to the view, not the pipeline.** The pause button halts log stream rendering in the terminal. It does not pause the pipeline. This is a product decision, not an implementation convenience: the interface is an observation tool, not a control surface. An operator who pauses a log stream to read something carefully should not be interrupting the process being observed. The mental model for a monitoring tool is a window on a running system, not a control panel for it.

## Technical Constraints

Log output is simulated with `setInterval` at 420ms per line, approximating realistic API call latency rather than streaming all output instantaneously. Step tracker state updates are triggered by pattern-matching against specific log line events in JavaScript, creating the appearance of a live state machine without backend integration. All behaviour is self-contained in a single HTML file.

## What Shipped

A fully interactive pipeline monitor at https://severus-six.vercel.app/demos/severus-social.html with animated step progression through four stages, a colour-coded streaming terminal with pause and resume, a metadata sidebar showing run parameters, and a live elapsed time counter.

## Outcome

The interface demonstrates judgment about information hierarchy in operational tooling: knowing when to show summary and when to show detail, and how to make both available without requiring the user to configure a view. The dual-surface pattern and the view/process pause distinction are the two decisions most relevant to PM portfolio evidence — both required framing the problem correctly before choosing an interface model.
