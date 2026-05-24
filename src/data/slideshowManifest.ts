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
      { image: "/images/slides/legal-pioneer/03-clause-01.png", caption: "Clause Extraction Engine: General Indemnities" },
      { image: "/images/slides/legal-pioneer/03-clause-02.png", caption: "Clause Extraction Engine: IP & Ownership Terms" },
      { image: "/images/slides/legal-pioneer/03-clause-03.png", caption: "Clause Extraction Engine: Termination Schedules" },
      { image: "/images/slides/legal-pioneer/03-clause-04.png", caption: "Clause Extraction Engine: Non-Disclosure Bounds" },
      { image: "/images/slides/legal-pioneer/03-clause-05.png", caption: "Clause Extraction Engine: Force Majeure Exclusions" },
      { image: "/images/slides/legal-pioneer/03-clause-06.png", caption: "Clause Extraction Engine: Dispute Resolution Paths" },
      { image: "/images/slides/legal-pioneer/03-clause-07.png", caption: "Clause Extraction Engine: Jurisdiction Provisions" },
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
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090820.png", caption: "Swarm Control Center: Telemetry HUD & Status Log" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090845.png", caption: "Soul Sandbox: Real-time Prompt Engineering & Validation" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090913.png", caption: "Memory Constellation: Interactive 3D Starfield Visuals" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090929.png", caption: "Execution Streams: Command Runtime Log Audit Trail" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 090957.png", caption: "Communication Bus Configuration & Event Routing" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091015.png", caption: "Model Temperature Scaling & Prompt Fusion Sandbox" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091032.png", caption: "Neural Node Relationships & Semantic Gravity Settings" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091051.png", caption: "Unified Operations command & Swarm Monitor Console" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091106.png", caption: "Vanguard Compliance Agent & Audit Trail Controls" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091131.png", caption: "Registered Integrations & Third-Party Hook Matrix" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091152.png", caption: "Self-Healing Diagnostic Agent Failure Recovery Monitor" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091208.png", caption: "Historical Execution Profiles & Token Utilization Charts" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091227.png", caption: "Console Shell: Native CLI Environment & Input Pipes" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091343.png", caption: "Cognitive Vector Engine: Semantic Knowledge Relations" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091356.png", caption: "GTM / GA4 Verification Blueprint & Multi-Channel Paths" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091411.png", caption: "Google Ads RoAS Funnel & Dynamic Budget Allocator" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091425.png", caption: "Attribution Tag Setup & Conversion Verification Matrix" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091439.png", caption: "E2E Test Engine: Production Event QA Verification Checklist" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091523.png", caption: "Legal Intelligence Console & Natural Language Extractor" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091607.png", caption: "Contract Liability Severity Evaluator Grid" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091624.png", caption: "Escalation Queue: Legal Discrepancy Workflows" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091638.png", caption: "PDF Ingestion Pipeline & Distributed OCR Engine Logs" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091648.png", caption: "Pipeline Worker Statuses & System Queue Health Monitor" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091702.png", caption: "Semantic Parser Strategy Configuration & Rules Screen" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091723.png", caption: "Soul Pantheon: Multi-Agent Soul Deck & Profile Board" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091811.png", caption: "Active Agent Console Session: Subprocess I/O Monitor" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091922.png", caption: "Telegram approval channels & Interactive Notification Pipeline" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 091944.png", caption: "Agent Swarm Arena: Simulation Controls & Node States" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 092137.png", caption: "constellation Force Layout Tuning Dashboard Console" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 092201.png", caption: "Tag Auditor: Live GTM Container Tag Health Report" },
      { image: "/images/slides/portfolio/Screenshot 2026-05-24 092215.png", caption: "Weekly Synthesis Report Engine & PDF Exporter Wizard" }
    ]
  }
];
