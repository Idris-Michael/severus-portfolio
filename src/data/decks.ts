export interface Slide {
  src: string;
  caption: string;
}

export interface Deck {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  tag: string;
  slides: Slide[];
}

export const DECKS: Record<string, Deck> = {
  'hermes-os': {
    id: 'hermes-os',
    title: 'Hermes OS',
    subtitle: 'Agency automation OS — 8 agents, 24 skills, local inference stack',
    accentColor: '#D4A017',
    tag: 'INTERNAL INFRASTRUCTURE',
    slides: [
      { src: '/slides/hermes-os/Screenshot 2026-05-24 090820.png', caption: 'Home — daily run summary, agent status, spend telemetry, and knowledge-base constellation on one screen.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 090845.png', caption: 'Skills — auto-loaded capability surface across 14 domains (desktop, agents, creative, data science, comms, security).' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 090913.png', caption: 'Memory — semantic vector map of every project, prompt, and context node across the agency.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 090929.png', caption: 'Activity — live telemetry on swarm health: CPU, memory, render queue, agent event feed.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 090957.png', caption: 'Profiles — the Pantheon system. Each agent is a card with permissions, skills, and run history.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091015.png', caption: 'Voiceover Studio — local TTS with 23 languages and 10 voices. Zero cost per render.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091032.png', caption: 'Hermes Agent — chat surface routed through DeepSeek V4 Flash with conversation memory.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091051.png', caption: 'Pantheon — full agent roster. Card-based UX for quick role-switching and task delegation.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091106.png', caption: 'Agent detail view — Ace of Hearts, Creative Director. Brief, skills, and recent runs.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091131.png', caption: 'OpenClaw — Rust-based sub-agent for autonomous file-system tasks with git-diff preview.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091152.png', caption: 'Services — pricing tiers, packaged offers, agency revenue tracker.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091208.png', caption: 'Instagram Growth — queue, calendar, insights for both managed accounts with approval gating.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091227.png', caption: 'Discovery Hub — searchable index across Notebooks, Scheduled jobs, and Bookmarked workflows.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091343.png', caption: 'Knowledge Base — 3D constellation (Three.js / R3F) of project nodes with bidirectional links.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091356.png', caption: 'OpenShorts — YouTube short generator wired to the Severus pipeline.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091411.png', caption: 'Voicebox — engine picker: SuperTonic, Kokoro, Llama-TTS. Local first, cloud as fallback.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091425.png', caption: 'OpenScreen — desktop recorder with object-tracking export, installed from GitHub releases.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091439.png', caption: 'Cheatsheet — every dev command for every Hermes service, copyable, port-tagged.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091523.png', caption: 'Overwatch — live tactical intel feed with map view for situational awareness.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091607.png', caption: 'VIS — agency-side system architecture: lead source → intake → AI proposal → reporting.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091624.png', caption: 'VIS — Google Ads restructure pipeline visualised as a DAG with optimisation notes.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091638.png', caption: 'Client Snapshot — Google Ads pre-engagement: ROAS 0.90x, conversion tracking broken.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091648.png', caption: 'Client Snapshot — post-engagement: ROAS 2.40x, conversion tracking healthy, Smart Bidding active.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091702.png', caption: 'GA4 attribution — data-driven model, conversion events firing cleanly, 300% Smart Bidding target ROAS.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091723.png', caption: 'Tech Stack Mastery — SDLC phases mapped to the real Hermes stack for client onboarding.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091811.png', caption: 'Diagnostic library — six failure modes for AI-agent / Claude API misuse with root cause and fix.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091922.png', caption: 'Agency Dashboard — Severus Connects services, lead sources, AI delivery stack at a glance.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 091944.png', caption: 'Client Deck — Severus Connects pitch surface: agentic intelligence for performance marketing.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 092137.png', caption: 'Everything Claude Code — 28 specialist sub-agents (planner, security-reviewer, tdd-guide, doc-updater).' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 092201.png', caption: 'Flow — visual orchestration: card-driven multi-agent pipeline editor with prompt slots.' },
      { src: '/slides/hermes-os/Screenshot 2026-05-24 092215.png', caption: 'Flow — alternate route: Ace of Clubs (Hermes integration) feeding the build phase with API specs.' },
    ],
  },
  'legal-pioneer': {
    id: 'legal-pioneer',
    title: 'AI Legal Pioneer',
    subtitle: 'Dual-LLM contract review pipeline — PortSwigger AI Pioneer submission',
    accentColor: '#f43f5e',
    tag: 'PORTSWIGGER SUBMISSION',
    slides: [
      { src: '/slides/legal-pioneer/01-demo-full-report.png', caption: 'Full pipeline output — mutual NDA reviewed end-to-end: Green auto-approvals, Amber rewrites, Red escalation, UNMAPPED flagging.' },
      { src: '/slides/legal-pioneer/02-demo-header-and-escalation.png', caption: 'Above-fold: header, risk escalation banner, and contract summary. Lawyer sees decision in 30 seconds, not 30 minutes.' },
      { src: '/slides/legal-pioneer/03-clause-01.png', caption: 'Clause 1 — Confidentiality Definition: Green. Matched policy in brain.md, auto-approved with traceable rule reference.' },
      { src: '/slides/legal-pioneer/03-clause-02.png', caption: 'Clause 2 — Permitted Disclosures: Green. Standard carve-outs align with playbook; no lawyer time required.' },
      { src: '/slides/legal-pioneer/03-clause-03.png', caption: 'Clause 3 — Term and Termination: Amber. Rewrite proposed — 2-year term exceeds playbook limit, draft alternative included.' },
      { src: '/slides/legal-pioneer/03-clause-04.png', caption: 'Clause 4 — Return of Information: Green. Policy compliant, auto-cleared.' },
      { src: '/slides/legal-pioneer/03-clause-05.png', caption: 'Clause 5 — Governing Law (Delaware): Red. Hard escalation — jurisdiction outside approved list. Never auto-approved.' },
      { src: '/slides/legal-pioneer/03-clause-06.png', caption: 'Clause 6 — Residual Knowledge: UNMAPPED. No policy rule exists. Pipeline flags for human review instead of guessing.' },
      { src: '/slides/legal-pioneer/03-clause-07.png', caption: 'Clause 7 — Mutual Obligations: Amber. Missing reciprocal data-handling commitment, rewrite drafted.' },
      { src: '/slides/legal-pioneer/10-source-brain.png', caption: 'brain.md — the AI\'s grounding source. Legal team edits policy in plain Markdown. No engineering dependency.' },
      { src: '/slides/legal-pioneer/11-source-agents.png', caption: 'agents.md — Architect, Auditor, and Orchestrator definitions. Each agent has one focused role.' },
      { src: '/slides/legal-pioneer/12-source-pipeline.png', caption: 'review_pipeline.py — Claude + Gemini orchestration. Runs from CLI with two API keys and any PDF or DOCX.' },
    ],
  },
  'endava': {
    id: 'endava',
    title: 'AI-Native Engineering',
    subtitle: 'Reference architecture for senior consulting engagements — 8 interactive HTML dashboards',
    accentColor: '#6366f1',
    tag: 'ENDAVA PORTFOLIO',
    slides: [
      { src: '/slides/endava/01-start-here.png', caption: 'Start Here — submission overview: strategy docs, working prototypes, and demo artifacts in one auditable structure.' },
      { src: '/slides/endava/02-system-architecture.png', caption: 'System Architecture — end-to-end pipeline from intake through AI proposal generation to client reporting.' },
      { src: '/slides/endava/03-ads-dashboard.png', caption: 'Ads Dashboard — live Google Ads metrics: ROAS, conversion volume, spend efficiency, and Smart Bidding health.' },
      { src: '/slides/endava/04-google-ads-case-study.png', caption: 'Google Ads Case Study — pre/post comparison: ROAS 0.90x to 2.40x, conversion tracking restored, learning phase stabilised.' },
      { src: '/slides/endava/05-ads-restructure.png', caption: 'Ads Restructure — campaign architecture DAG: keyword clustering, match-type hierarchy, and bid strategy mapping.' },
      { src: '/slides/endava/06-ga4-attribution.png', caption: 'GA4 Attribution — data-driven model, conversion events firing cleanly, 300% target ROAS configured in Smart Bidding.' },
      { src: '/slides/endava/07-tech-stack-mastery.png', caption: 'Tech Stack Mastery — SDLC phases mapped to tooling: design system, testing, CI/CD, observability, and AI integration.' },
      { src: '/slides/endava/08-codecrafthub-dashboard.png', caption: 'CodeCraftHub Dashboard — client-facing performance summary: campaign health, pipeline status, and next-action board.' },
    ],
  },
  'agent-reach': {
    id: 'agent-reach',
    title: 'Agent-Reach',
    subtitle: 'Multi-platform AI agent messaging SDK — 16 channels, Python-native, zero-config local delivery',
    accentColor: '#10b981',
    tag: 'OPEN SOURCE SDK',
    slides: [
      { src: '/slides/agent-reach/01-pitch-readme.png', caption: 'README — pitch surface: 16 platforms, 7 zero-config channels, one unified API for every AI agent messaging need.' },
      { src: '/slides/agent-reach/02-package-pyproject.png', caption: 'pyproject.toml — dependency surface: httpx, pydantic, rich CLI. Minimal, typed, modern Python packaging.' },
      { src: '/slides/agent-reach/03-api-surface.png', caption: 'API Surface — __init__.py: send(), broadcast(), Channel ABC. Everything importable from one namespace.' },
      { src: '/slides/agent-reach/04-support-matrix.png', caption: 'Support Matrix — 16 channels mapped by setup complexity: zero-config local vs. API-key cloud vs. webhook-based.' },
      { src: '/slides/agent-reach/05-diagnostic-doctor.png', caption: 'doctor.py — pre-flight diagnostic: checks every channel for valid credentials, reachability, and rate-limit headroom.' },
      { src: '/slides/agent-reach/06-cli-entrypoint.png', caption: 'CLI Entrypoint — agent-reach send, broadcast, doctor, and configure — all scriptable from any shell or CI pipeline.' },
      { src: '/slides/agent-reach/07-channels-registry.png', caption: 'Channels Registry — auto-discovery pattern: every channel registers itself; send() resolves at runtime, no imports needed.' },
      { src: '/slides/agent-reach/08-channel-twitter.png', caption: 'Twitter Channel — OAuth 1.0a flow wrapped in the Channel ABC. 12-line implementation, full rate-limit handling.' },
      { src: '/slides/agent-reach/09-i18n-readme-zh.png', caption: 'Mandarin README — full docs in zh-CN: the SDK is designed for global agent deployments from day one.' },
      { src: '/slides/agent-reach/10-logo.png', caption: 'Brand — clean logo mark. SDK-grade visual identity for a library designed to be embedded, not hidden.' },
    ],
  },
};
