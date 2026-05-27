export interface Slide {
  image: string;
  caption: string;
}

export interface SlideDeck {
  id: string;
  title: string;
  description: string;
  slides: Slide[];
}

export const slideshowManifest: SlideDeck[] = [
  {
    id: "agent-reach",
    title: "Agent Reach",
    description: "Enterprise-grade multi-agent communication infrastructure. Features decentralized routing, automated channel orchestration, diagnostic healing, and native social API integrations.",
    slides: [
      { image: "/images/slides/agent-reach/01-pitch-readme.png", caption: "Project Overview & Core Agent Capability Pitch" },
      { image: "/images/slides/agent-reach/02-package-pyproject.png", caption: "Runtime Package Definition & Dev Dependency Graph" },
      { image: "/images/slides/agent-reach/03-api-surface.png", caption: "Public API Layout & Orchestration Surface" },
      { image: "/images/slides/agent-reach/04-support-matrix.png", caption: "Cross-Platform Feature Support Matrix" },
      { image: "/images/slides/agent-reach/05-diagnostic-doctor.png", caption: "Self-Healing Diagnostic Daemon & Telemetry" },
      { image: "/images/slides/agent-reach/06-cli-entrypoint.png", caption: "Agent Console CLI Interface & Parameter Definitions" },
      { image: "/images/slides/agent-reach/07-channels-registry.png", caption: "Active Communication Channels & Routing Logic" },
      { image: "/images/slides/agent-reach/08-channel-twitter.png", caption: "Social Automation Layer: X/Twitter Connector" },
      { image: "/images/slides/agent-reach/09-i18n-readme-zh.png", caption: "Internationalization & Global Execution Standards" },
      { image: "/images/slides/agent-reach/10-logo.png", caption: "Brand Architecture & Platform Identity Design" }
    ]
  },
  {
    id: "endava",
    title: "Endava Partnership",
    description: "Advanced Google Analytics 4 tracking architecture & advertising optimization pipeline. Translates raw conversion streams into real-time business telemetry dashboards.",
    slides: [
      { image: "/images/slides/endava/01-start-here.png", caption: "Client Intake Requirements & Project Scope Definition" },
      { image: "/images/slides/endava/02-system-architecture.png", caption: "High-Volume Data Pipeline & Attribution Architecture" },
      { image: "/images/slides/endava/03-ads-dashboard.png", caption: "Unified Performance Telemetry & Campaign Health Board" },
      { image: "/images/slides/endava/04-google-ads-case-study.png", caption: "Google Ads ROAS Maximization & Keywords Audit" },
      { image: "/images/slides/endava/05-ads-restructure.png", caption: "Strategic Account Restructuring & Budget Splits" },
      { image: "/images/slides/endava/06-ga4-attribution.png", caption: "GA4 Funnels, Event Audits & Custom Conversion Setup" },
      { image: "/images/slides/endava/07-tech-stack-mastery.png", caption: "Deployment Playbook & Advertising Tech Stack Integrity" },
      { image: "/images/slides/endava/08-codecrafthub-dashboard.png", caption: "Developer Console Analytics & CodeCraftHub Interface" }
    ]
  },
  {
    id: "legal-pioneer",
    title: "Legal Pioneer",
    description: "Automated legal clause analysis, risk extraction pipeline, and regulatory compliance system. Deciphers complex enterprise legal documents in milliseconds.",
    slides: [
      { image: "/images/slides/legal-pioneer/01-demo-full-report.png", caption: "Unified Executive Compliance & Document Risk Report" },
      { image: "/images/slides/legal-pioneer/02-demo-header-and-escalation.png", caption: "Auto-Escalation Decision Trees & Severity Triggers" },
      { image: "/images/slides/legal-pioneer/03-clause-01.png", caption: "Clause Extraction Engine: Confidentiality Definition" },
      { image: "/images/slides/legal-pioneer/03-clause-02.png", caption: "Clause Extraction Engine: Term & Termination" },
      { image: "/images/slides/legal-pioneer/03-clause-03.png", caption: "Clause Extraction Engine: Return or Destruction of Information" },
      { image: "/images/slides/legal-pioneer/03-clause-04.png", caption: "Clause Extraction Engine: Permitted Disclosure" },
      { image: "/images/slides/legal-pioneer/03-clause-05.png", caption: "Clause Extraction Engine: Limitation of Liability" },
      { image: "/images/slides/legal-pioneer/03-clause-06.png", caption: "Clause Extraction Engine: Governing Law & Jurisdiction" },
      { image: "/images/slides/legal-pioneer/03-clause-07.png", caption: "Clause Extraction Engine: Residual Knowledge" },
      { image: "/images/slides/legal-pioneer/10-source-brain.png", caption: "Source Brain: Knowledge-Graph Context Vector Mapping" },
      { image: "/images/slides/legal-pioneer/11-source-agents.png", caption: "Multi-Agent Co-Counsel Consultation Protocol" },
      { image: "/images/slides/legal-pioneer/12-source-pipeline.png", caption: "ETL Processing Pipeline for Unstructured Legal PDFs" }
    ]
  },
  {
    id: "portfolio",
    title: "Hermes OS Swarm Dashboard",
    description: "Visual identity walkthrough of the Hermes Agentic Platform, featuring Three.js 3D knowledge starfields, real-time command runlogs, and pipeline telemetry.",
    slides: [
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090820.png", caption: "Unified Operations Command & Swarm Monitor Console" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090845.png", caption: "Skills Active: Real-Time Subskills & Agent Capability Directory" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090913.png", caption: "Memory Constellation: Interactive 3D Starfield Visuals" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090929.png", caption: "Swarm Control Center: Telemetry HUD & Status Log" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090957.png", caption: "Agent Profiles: Individual Soul Card & Capability Assignment" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091015.png", caption: "Voiceover Studio: Local Text-to-Speech Script Composer & Generation" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091032.png", caption: "Soul Sandbox: Real-Time Prompt Engineering & Multi-LLM Chat Workspace" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091051.png", caption: "Soul Pantheon: Multi-Agent Soul Deck & Profile Board" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091106.png", caption: "Agent Blueprint: Detailed Soul Specifications & Configuration Modal" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091131.png", caption: "Console Shell: Native CLI Environment & Task Runner Interface" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091152.png", caption: "Severus Connects: Commercial Services Packages & Pricing Board" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091208.png", caption: "UGC Scheduler: Automated Instagram Campaign & Posting Queue" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091227.png", caption: "Discovery Hub: Obsidian Vault & NotebookLM Knowledge Integration" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091343.png", caption: "Cognitive Vector Engine: Semantic Knowledge Relations" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091356.png", caption: "OpenShorts Studio: Automated Video Clipping & Growth Engine" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091411.png", caption: "Voicebox Settings: Offline Speech Synthesizer & Local Voice Engine" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091425.png", caption: "OpenScreen: Desktop Screenshot Capture Utilities & Specifications" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091439.png", caption: "System Shortcuts: Developer Cheatsheet & Keyboard Hotkeys" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091523.png", caption: "System Overwatch: Active Neural Links & Tactical Network Monitor" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091607.png", caption: "System Architecture: Visualizer Flow Chart & Service Topology" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091624.png", caption: "System Architecture: Dynamic Routing Flow Chart & Nodes" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091638.png", caption: "Google Ads Dashboard: Live Cost, Conversion, & ROAS Performance" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091648.png", caption: "Google Ads Restructure: Campaigns List, ROAS, & Budget Allocator" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091702.png", caption: "GA4 Attribution: Purchase Funnels & GTM Conversion Tags Checklist" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091723.png", caption: "Tech Stack Mastery: Software Development Lifecycle Tool Mapping" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091811.png", caption: "Diagnostics Engine: Agent Exception Classification & Error Taxonomy" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091922.png", caption: "Client Deck: Agency Services Packages & Tiered Pricing Structure" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091944.png", caption: "Client Presentation: Severus Connects Main Introductory Slide" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 092137.png", caption: "Everything Claude Code: System Controls & Sub-Agents Performance" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 092201.png", caption: "Communication Flow: Agent-to-Agent Swarm Connection Map" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 092215.png", caption: "Execution Paths: Visual Node Connection Flow Starting at Ace of Clubs" }
    ]
  }
];
