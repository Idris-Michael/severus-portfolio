import { useState, useEffect } from 'react';
import { DemoOne } from '@/components/ui/demo';

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isUxOpen, setIsUxOpen] = useState(false);

  // Stop body scrolling when lightboxes are open
  useEffect(() => {
    if (isVideoOpen || isUxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isVideoOpen, isUxOpen]);

  const ytLinks = [
    'X4w8Ya30cxo',
    'DxYcSx74mNU',
    'dT8V1MHJ1hE',
    'Uc3CKiFgesw',
    '_uVfZKlKs2A',
    'd0SiWn2EML0'
  ];

  const pdfFiles = [
    { name: "Barbershop App - UX Case Study", file: "barbershop-ux-case-study.pdf" },
    { name: "Dynamic Fitness App - UX Case Study", file: "dynamic-fitness-ux-case-study.pdf" },
    { name: "Portfolio Project 1", file: "portfolio-project-1.pdf" }
  ];

  const fintechDesigns = [
    {
      name: "Neon Cyber",
      tag: "DARK THEME",
      color: "#39ff14",
      bgColor: "#0a0f0a",
      image: "images/fintech-neon-cyber.png",
      overview: "A bold, high-energy fintech interface inspired by crypto trading terminals and cyberpunk aesthetics. Targets digital-native users who are comfortable with complex financial instruments and real-time data streams.",
      designPhilosophy: "Dark-mode first. Neon green (#39FF14) as the primary accent creates an aggressive, futuristic energy. High-contrast data visualisation with terminal-style monospaced readouts. The interface feels alive — pulsing, glowing, always updating.",
      keyFeatures: [
        "Real-time portfolio tracking with animated sparkline charts",
        "Crypto-native transaction flows with gas fee estimation",
        "Biometric security gates with visual feedback loops",
        "Dark glassmorphism cards with neon border accents"
      ],
      typography: "Inter for UI, JetBrains Mono for data. Bold weights throughout. Tight tracking on headlines, generous on metadata.",
      palette: ["#0D0D0D", "#1A1A2E", "#39FF14", "#00D4AA", "#FF003C", "#FFFFFF"],
      screens: [
        { name: "Pricing", desc: "Tiered pricing with crypto payment options and real-time conversion rates" },
        { name: "Tier Selection", desc: "Interactive plan comparison with feature matrix and volume discounts" },
        { name: "Fee Calculator", desc: "Dynamic fee breakdown with sliders for transaction volume and asset class" },
        { name: "Checkout", desc: "Streamlined payment flow with wallet connect and multi-chain support" },
        { name: "Security", desc: "2FA setup with biometric fallback and session management" }
      ]
    },
    {
      name: "Soft Neo-Mint",
      tag: "LIGHT THEME",
      color: "#10b981",
      bgColor: "#f0fdf4",
      image: "images/fintech-soft-neo-mint.png",
      overview: "A clean, approachable fintech experience built on soft mint and coral tones. Designed for mainstream retail banking users who prioritise simplicity, trust, and transparency.",
      designPhilosophy: "Light, breathable, and confidence-inspiring. The soft mint palette communicates growth and financial health without the intimidation of traditional banking UI. Rounded components and generous whitespace reduce cognitive load.",
      keyFeatures: [
        "Progressive disclosure of complex pricing information",
        "Friendly onboarding with contextual tooltips and micro-animations",
        "Trust indicators embedded at every transaction step",
        "Accessible colour contrast ratios meeting WCAG AAA"
      ],
      typography: "Plus Jakarta Sans for warmth and approachability. Medium weights for body, semibold for CTAs. Generous line-height for readability.",
      palette: ["#F0FDF4", "#D1FAE5", "#10B981", "#059669", "#EF4444", "#1F2937"],
      screens: [
        { name: "Pricing", desc: "Clean card layout with highlighted recommended tier and transparent fee structure" },
        { name: "Plan Comparison", desc: "Side-by-side feature comparison with checkmark matrix and savings callouts" },
        { name: "Crypto Portfolio", desc: "Simplified asset overview with donut charts and percentage gains" },
        { name: "Gateway", desc: "Payment gateway with progress stepper, card input, and instant confirmation" },
        { name: "Security Setup", desc: "Guided security onboarding with friendly illustrations and plain-language explanations" }
      ]
    },
    {
      name: "Nordic Trust",
      tag: "INSTITUTIONAL",
      color: "#818cf8",
      bgColor: "#0f0f2e",
      image: "images/fintech-nordic-trust.png",
      overview: "A premium, institutional-grade design language rooted in deep navy and muted indigo. Built for wealth management, high-net-worth advisory platforms, and enterprise treasury operations.",
      designPhilosophy: "Restraint is luxury. The dark navy foundation communicates stability and authority. Subtle indigo accents add sophistication without frivolity. Every element is precisely measured — this is finance for people who manage serious capital.",
      keyFeatures: [
        "Institutional-grade data tables with sortable columns and export functionality",
        "Compliance-first design with audit trail visibility at every step",
        "White-glove onboarding flow with document verification and KYC integration",
        "Structured grid system for dense information without visual clutter"
      ],
      typography: "DM Sans for corporate elegance. Light weights for large numerics, medium for navigation. Monospaced for financial data to ensure decimal alignment.",
      palette: ["#0F0F2E", "#1E1E4A", "#818CF8", "#6366F1", "#F43F5E", "#E2E8F0"],
      screens: [
        { name: "Overview", desc: "Executive dashboard with transparent pricing, AUM summary, and advisory fee breakdown" },
        { name: "Fee Breakdown", desc: "Granular fee schedule with basis point calculations and comparison benchmarks" },
        { name: "Volume Tiers", desc: "Institutional volume pricing with custom negotiation thresholds and commitment discounts" },
        { name: "Security Audit", desc: "Compliance dashboard with encryption status, penetration test results, and regulatory certifications" }
      ]
    }
  ];

  return (
    <div className="bg-[#0D0D12] min-h-screen text-[#F5F5F7] selection:bg-[#F97316] selection:text-white antialiased font-sans">

      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0D0D12]/90 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="font-sans font-bold text-sm tracking-[0.15em] uppercase text-white">Idris Bakare.</div>
        {/* Sections */}
        <div className="hidden lg:flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest">
          {[
            { href: "#work", label: "Work" },
            { href: "#about", label: "About" },
            { href: "#systems", label: "Systems" },
            { href: "#agentic-dev", label: "Agentic Dev" },
            { href: "#agency", label: "Agency" },
            { href: "#demos", label: "Demos" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a key={href} href={href}
              className="hover-target px-3 py-1.5 rounded text-white/40 hover:text-white hover:bg-white/5 transition-all">
              {label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/idrisbakare/" target="_blank" rel="noreferrer"
            className="hover-target text-[10px] font-mono uppercase tracking-widest border border-white/20 text-white/60 px-3 py-1.5 rounded hover:border-white/50 hover:text-white transition-all">LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/~019206011393cf6c1b" target="_blank" rel="noreferrer"
            className="hover-target text-[10px] font-mono uppercase tracking-widest bg-[#F97316] text-white px-3 py-1.5 rounded hover:bg-[#ea6a0a] transition-all">Hire Me</a>
        </div>
      </nav>

      {/* Horizon Hero */}
      <DemoOne />

      {/* Ticker Marquee */}
      <div className="w-full overflow-hidden mt-20">
        <div className="ticker-wrap shadow-2xl bg-[#F97316]">
          <div className="ticker-content pt-1 flex items-center gap-8 py-3 w-max animate-[ticker_30s_linear_infinite]">
            {["AGENTIC DEV", "✦", "AI INTEGRATOR", "✦", "REACT & TYPESCRIPT", "✦", "GOOGLE ADS & GA4", "✦", "N8N AUTOMATIONS", "✦", "MULTI-AGENT SYSTEMS", "✦", "UX DESIGN", "✦", "AGENTIC DEV", "✦", "AI INTEGRATOR", "✦", "REACT & TYPESCRIPT", "✦", "GOOGLE ADS & GA4", "✦", "N8N AUTOMATIONS", "✦", "MULTI-AGENT SYSTEMS", "✦", "UX DESIGN", "✦"].map((item, i) => (
              <div key={i} className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-layer relative z-10 w-full overflow-hidden">

        {/* Radical Hero */}
        <section className="min-h-[110vh] flex flex-col justify-center px-6 md:px-12 relative pt-32">
          <div className="max-w-7xl mx-auto w-full">
            <div className="uppercase tracking-[0.3em] text-[#F97316] font-bold text-xs mb-8 reveal hover-target">
              Idris Bakare // Profile
            </div>
            <h1 className="font-sans font-black text-[12vw] leading-[0.85] tracking-tighter uppercase reveal-up">
              Creative <br />
              <span className="font-serif italic text-outline lowercase relative left-[10%] group hover-target">
                Technologist
              </span>
            </h1>
            <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 reveal">
              <div className="max-w-2xl text-white font-sans text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  <strong className="text-[#F97316]">Most freelancers offer a skill. I ship an operating system.</strong> I'm the founder of Severus Connects — a London-based performance marketing agency built on a custom AI Agentic OS. I architect and deploy full multi-agent systems with persistent memory, permission governance, and n8n automations running 24/7.
                </p>
                <p className="text-base text-gray-200">
                  If you need AI agents actually running your business — lead capture, onboarding, reporting, campaign management — I build that infrastructure. Not demos. Governed, memory-persistent pipelines that get work done while you sleep.
                </p>
              </div>
              <div className="text-left md:text-right mt-12 md:mt-0 font-sans text-sm tracking-widest uppercase text-[#888891] pt-4 md:pt-0">
                Explore The Archive <br />↓
              </div>
            </div>
          </div>
        </section>

        {/* Asymmetrical Project Grid */}
        <section id="work" className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif italic text-6xl md:text-8xl mb-24 reveal text-center md:text-left">Selected Index.</h2>

            <div className="space-y-40">
              {/* Project 1 */}
              <div className="project-card flex flex-col md:flex-row gap-12 md:gap-24 items-center reveal hover-target group">
                <div className="w-full md:w-3/5 relative aspect-[4/3] rounded-sm overflow-hidden bg-[#15151A]">
                  <img src="images/thumb_ui_ux.png" className="w-full h-full object-cover img-parallax transition-all duration-500" alt="UI/UX" />
                  <div className="absolute inset-0 bg-[#F97316] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="w-full md:w-2/5 md:-ml-16 relative z-10 px-6 md:px-0">
                  <div className="bg-[#15151A]/90 backdrop-blur-md p-8 border border-white/10">
                    <div className="text-xs font-mono text-[#F97316] mb-4 tracking-widest">001 // UI-UX</div>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6">User Interface</h3>
                    <p className="text-[#888891] mb-8">Pinnacle digital product design, merging psychological user-centric research with jaw-dropping, premium interfaces.</p>
                    <button onClick={() => setIsUxOpen(true)} className="inline-block border-b border-[#F97316] pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-[#F97316] transition-colors hover-target">View Case Studies</button>
                  </div>
                </div>
              </div>

              {/* Project 2 (Front End / GitHub) */}
              <div className="project-card flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-start reveal hover-target group">
                <div className="w-full md:w-3/5 relative aspect-[4/3] rounded-sm overflow-hidden bg-[#15151A]">
                  <img src="images/thumb_websites.png" className="w-full h-full object-cover img-parallax transition-all duration-500" alt="Front End" />
                  <div className="absolute inset-0 bg-blue-500 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="w-full md:w-2/5 md:-mr-16 relative z-10 px-6 md:px-0">
                  <div className="bg-[#15151A]/90 backdrop-blur-md p-8 border border-white/10">
                    <div className="text-xs font-mono text-blue-400 mb-4 tracking-widest flex items-center gap-2">
                      002 // FRONT-END
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6">Front End Development</h3>
                    <p className="text-[#888891] mb-8">High-performance responsive applications and algorithmic solutions. Code architecture pushed live via GitHub.</p>

                    <div className="space-y-4 mb-8 flex flex-col">
                      <a href="/london-estate" target="_blank" rel="noreferrer" className="block group/repo border border-white/5 p-4 bg-white/5 hover:bg-blue-500/10 transition-colors">
                        <div className="font-mono text-sm text-white group-hover/repo:text-blue-400 transition-colors flex justify-between">
                          Vanguard Estates
                          <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded-full ml-auto">LIVE</span>
                        </div>
                      </a>
                      <a href="https://github.com/Idris-Michael/Nano-Stream" target="_blank" rel="noreferrer" className="block group/repo border border-white/5 p-4 bg-white/5 hover:bg-blue-500/10 transition-colors">
                        <div className="font-mono text-sm text-white group-hover/repo:text-blue-400 transition-colors flex justify-between">
                          Idris-Michael/Nano-Stream
                        </div>
                      </a>
                      <a href="/logoisum/dist/index.html" target="_blank" rel="noreferrer" className="block group/repo border border-white/5 p-4 bg-white/5 hover:bg-blue-500/10 transition-colors">
                        <div className="font-mono text-sm text-white group-hover/repo:text-blue-400 transition-colors flex justify-between">
                          Logoisum Premium Hero Element
                        </div>
                      </a>
                    </div>
                    <a href="https://github.com/Idris-Michael" target="_blank" className="inline-flex items-center gap-2 border-b border-blue-400 pb-1 text-xs uppercase tracking-widest font-bold hover:text-blue-400 transition-colors hover-target">
                      View GitHub Profile ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card flex flex-col md:flex-row gap-12 md:gap-24 items-center reveal hover-target group">
                <div className="w-full md:w-3/5 relative aspect-[16/9] rounded-sm overflow-hidden bg-[#15151A]">
                  <img src="images/thumb_video.png" className="w-full h-full object-cover img-parallax transition-all duration-500" alt="Video Edits" />
                  <div className="absolute inset-0 bg-purple-500 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="w-full md:w-2/5 md:-ml-16 relative z-10 px-6 md:px-0">
                  <div className="bg-[#15151A]/90 backdrop-blur-md p-8 border border-white/10">
                    <div className="text-xs font-mono text-purple-400 mb-4 tracking-widest">003 // MEDIA</div>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6">AI Video Edits</h3>
                    <p className="text-[#888891] mb-8">Director-level video editing enhanced by generative AI—transforming simple concepts into Hollywood-grade visual narratives.</p>
                    <button onClick={() => setIsVideoOpen(true)} className="inline-block border-b border-purple-400 pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-purple-400 transition-colors hover-target">Play Reel</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: ABOUT / MANIFESTO
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="about" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#0f0f18] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal">

              {/* Left — heading + credentials */}
              <div>
                <div className="uppercase tracking-[0.3em] text-[#F97316] font-bold text-xs mb-6">002 // MANIFESTO</div>
                <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-8 leading-tight">About<br />Me.</h2>
                <p className="text-[#F97316]/80 text-base font-sans italic mb-8">Most freelancers offer a skill. I ship an operating system.</p>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-[#F97316]/30 text-[#F97316] bg-[#F97316]/5">Google Generative AI Leader 2026</span>
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-white/10 text-white/50">IBM AI Developer Professional Cert</span>
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-white/10 text-white/50">Google Analytics Certified</span>
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-white/10 text-white/50">AI-Powered Ads & Shopping Certified</span>
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-white/10 text-white/50">Google UX Design Certificate</span>
                </div>

                {/* Stack */}
                <div className="border border-white/10 bg-[#15151A]/60 p-6 rounded-sm">
                  <div className="text-xs font-mono text-white/40 tracking-widest mb-4">// CURRENT STACK</div>
                  <div className="space-y-2">
                    {[
                      { area: "Agents", tools: "Hermes · OpenClaw · OpenSwarm · Claude Code" },
                      { area: "Frontend", tools: "React 19 · TypeScript · Next.js · Tailwind · Framer Motion" },
                      { area: "Ads & Analytics", tools: "Google Ads · GA4 · BigQuery · Looker Studio" },
                      { area: "Automation", tools: "n8n · Make.com · Claude API · Gemini API" },
                      { area: "Design", tools: "Figma · Google Stitch · NotebookLM" },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm py-1.5 border-b border-white/5 last:border-0">
                        <span className="font-mono text-[9px] text-[#F97316] tracking-widest shrink-0 mt-0.5 w-20">{row.area}</span>
                        <span className="text-[#888891]">{row.tools}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — bio copy */}
              <div className="flex flex-col gap-8">
                <div className="space-y-6 text-[#888891] text-base leading-relaxed">
                  <p>
                    I'm the founder of <span className="text-white font-semibold">Severus Connects</span> — a London-based performance marketing agency built on a custom AI Agentic OS. I architect and deploy full multi-agent systems using Hermes, OpenClaw, and OpenSwarm — with persistent memory layers, permission governance, and n8n automations running 24/7.
                  </p>
                  <p>
                    If you're a founder who needs AI agents actually running your business — lead capture, onboarding, reporting, campaign management, client comms — I build that infrastructure. Not demos. Governed, memory-persistent, multi-agent pipelines that get work done while you sleep.
                  </p>
                  <p>
                    Triple-certified in Google's AI-powered ad suite. Before I touch a campaign I audit your tracking — clean attribution first, then spend. Most clients see ROAS improvement within the first month. Google-certified across Analytics, AI-Powered Performance Ads, AI-Powered Shopping Ads, and Generative AI.
                  </p>
                  <p className="text-white font-medium">
                    Funded founders and technical operators who need a full system built — not managed. Design it, build it, automate it, drive traffic to it.
                  </p>
                </div>

                {/* CTA row */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  <a href="https://severus-six.vercel.app" target="_blank" rel="noreferrer"
                    className="hover-target text-xs font-bold uppercase tracking-widest border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    🌐 severus-six.vercel.app
                  </a>
                  <a href="mailto:idris.bakare92@outlook.com"
                    className="hover-target text-xs font-bold uppercase tracking-widest bg-[#F97316] text-white px-6 py-3 rounded-full hover:bg-[#ea6a0a] transition-colors">
                    📩 Let's Talk
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Live Builds Carousel */}
        <section id="live-builds" className="py-24 px-6 md:px-12 overflow-hidden border-t border-white/5 bg-[#15151A]/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal gap-6">
              <div>
                <div className="uppercase tracking-[0.3em] text-blue-400 font-bold text-xs mb-4">Open Source Repositories</div>
                <h2 className="font-serif italic text-4xl md:text-6xl text-white">Live Builds.</h2>
              </div>
              <a href="https://github.com/Idris-Michael" target="_blank" className="border-b border-white/30 pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-blue-400 hover:border-blue-400 transition-colors pb-2 hover-target">
                View GitHub ↗
              </a>
            </div>

            <div className="relative w-full reveal-up">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 pb-12">

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-blue-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">LIVE</div>
                    <img src="images/repo-vanguard.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Vanguard Estates" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Real Estate | 3D WebGL</div>
                      <span className="text-xs font-mono text-blue-400">001</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Vanguard Estates</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Cinematic 1:1 pixel-perfect luxury real estate experience featuring GSAP scrolling, React 3D Fiber architectural elements, and tailored brand aesthetics.</p>
                    <div className="flex gap-4">
                      <a href="/london-estate" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-blue-500 transition-colors">Launch Demo</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black">
                    <img src="images/repo-nano-hero.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Nano-Stream" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Generative AI | React 19</div>
                      <span className="text-xs font-mono text-blue-400">002</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Nano-Stream AI</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Experimental AI-Generative Interface built with React 19, Three.js, and Google GenAI. Next-generation streaming platform with a cyberpunk UI.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/Nano-Stream" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <img src="images/repo-particles.png" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Motion Particles" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Hand Gestures | React</div>
                      <span className="text-xs font-mono text-blue-400">003</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Severus Motion Particles</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Interactive 3D particle experience controlled directly by human hand gestures via computer vision. State-of-the-art interactive UI.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/Severus-Motion-Particles" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <img src="images/repo-nexus.png" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Nexus Smart Building" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">IoT Dashboard | Visual Data</div>
                      <span className="text-xs font-mono text-blue-400">004</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Nexus Smart Building</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Smart architecture control interface and digital twin dashboard. Merges sensor data streams with an intuitive command and control center.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/Nexus-Smart-Building" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <img src="images/repo-logoisum.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Logoisum Video Editing Agency" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Premium UI | Tailwind</div>
                      <span className="text-xs font-mono text-blue-400">005</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Logoisum Premium Hero</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Minimal, ultra-modern video editing agency hero section. Includes a cinematic full-screen video background, slick floating navigation, and sharp typography built seamlessly with native Tailwind configurations.</p>
                    <div className="flex gap-4">
                      <a href="/logoisum/dist/index.html" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-blue-500 transition-colors">Launch Demo</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-blue-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">NEW</div>
                    <img src="images/repo-overwatch.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Severus Overwatch Dashboard" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Real-time Map | React 19</div>
                      <span className="text-xs font-mono text-blue-400">006</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Severus Overwatch</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Real-time aerial and ground surveillance dashboard featuring flight tracking, live TfL jam cams, and geographic disruption alerts using MapLibre, React, and Tailwind.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/severus-overwatch" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-green-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-green-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">NEW</div>
                    <img src="images/repo-degenpad.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="DegenPad" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Crypto Launchpad | Web3</div>
                      <span className="text-xs font-mono text-green-400">007</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-green-400 transition-colors">DegenPad</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Premium web3 launchpad interface with aggressive neon aesthetics, real-time token tracking, and highly technical data visualizations tailored for crypto traders.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/degenpad" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-purple-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-purple-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">NEW</div>
                    <img src="images/repo-videodb-voice.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="VideoDB Voice Clone" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">AI Audio | VideoDB</div>
                      <span className="text-xs font-mono text-purple-400">008</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">VideoDB Voice Clone</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Sleek AI voice cloning dashboard built on VideoDB. Features detailed audio waveforms, nuanced parameter controls, and a dark mode aesthetic designed for professional audio engineers.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/videodb-voice-clone" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-orange-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-orange-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">NEW</div>
                    <img src="images/repo-videodb-clipper.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="VideoDB Auto-Clipper" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">AI Video | VideoDB</div>
                      <span className="text-xs font-mono text-orange-400">009</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">VideoDB Auto-Clipper</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Intelligent video editing dashboard that automatically extracts highlights. Includes timeline manipulation, side-by-side transcriptions, and rapid export capabilities.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/videodb-auto-clipper" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-cyan-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-cyan-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">NEW</div>
                    <img src="images/repo-prompt-master.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Prompt Master" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">AI Tools | Engineering</div>
                      <span className="text-xs font-mono text-cyan-400">010</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Prompt Master</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">High-end, minimalist dashboard interface for advanced AI Prompt Engineering. Features professional libraries, category management, and robust input validation tools.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/nidhinjs/prompt-master" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: UI/UX DESIGN SYSTEMS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="ui-ux" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#0d1216] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-[#00e1ab] font-bold text-xs mb-4">004 // UI/UX LAB</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">Design<br />Systems.</h2>
              <p className="text-[#00e1ab]/80 text-base font-sans italic mb-4">Functional density meeting high-fidelity aesthetics.</p>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                A selection of recent UI/UX design systems engineered using Google Stitch. These projects reflect a strict adherence to premium, non-template aesthetics—leveraging organic brutalism, ethereal glassmorphism, and cinematic depth to solve complex interface challenges.
              </p>
            </div>

            <div className="flex flex-col gap-24 reveal-up">
              
              {/* Project 01: DegenPad */}
              <div className="flex flex-col lg:flex-row gap-12 items-center group relative">
                <div className="w-full lg:w-7/12 aspect-[16/10] bg-[#15151A] rounded-sm border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-50 z-10 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 z-20 font-mono text-xs tracking-widest text-[#f3f300] bg-black/40 border border-[#f3f300]/20 px-3 py-1 rounded-full backdrop-blur-md shadow-lg pointer-events-none">01 // WEB3</div>
                  <img src="images/ui-ux/stitch-degenpad.png" alt="DegenPad Solana Launcher" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Crypto Launchpad</div>
                  <h3 className="text-3xl font-sans font-bold text-white mb-6 group-hover:text-[#f3f300] transition-colors">DegenPad Solana Launcher</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// THE KINETIC LEDGER</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        This design system rejects the "soft-and-safe" aesthetics of traditional fintech. Built on Organic Brutalism and intentional asymmetry, it feels like a high-end physical machine—heavy, loud, and unyielding—leveraging extreme contrast against a dark charcoal palette.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// USER JOURNEY</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        Traders land on the launchpad and are instantly confronted by the technical authority of the UI. They navigate token sales using chunky toggle switches, define allocations within oversized terminal input fields, and execute transactions through high-contrast physical "Actuator" buttons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 02: Voice Clone Studio */}
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center group relative">
                <div className="w-full lg:w-7/12 aspect-[16/10] bg-[#15151A] rounded-[2rem] border border-white/10 overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-50 z-10 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 z-20 font-mono text-xs tracking-widest text-[#9c93fe] bg-black/40 border border-[#9c93fe]/20 px-3 py-1 rounded-full backdrop-blur-md shadow-lg pointer-events-none">02 // AI STUDIO</div>
                  <img src="images/ui-ux/stitch-voice-clone.png" alt="Voice Clone Studio" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 rounded-[2rem]" />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">AI Voice Synthesis</div>
                  <h3 className="text-3xl font-sans font-bold text-white mb-6 group-hover:text-[#9c93fe] transition-colors">Voice Clone Studio</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// THE PRISTINE STUDIO</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        Moved away from standard SaaS dashboards, it is designed as a pristine digital atelier. Built around clear human aesthetics, using a MacOS-inspired light mode, soft pastels, and stacked glass layers to convey surgical precision and airiness.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// USER JOURNEY</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        Audio engineers enter a calming workspace. They drop source audio onto the canvas, interact with sleek AI Waveform Cards rendered without heavy borders, input scripts via minimalist input fields with soft glowing focus states, and generate the clone using the signature 'Voice Orb' floating pill.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 03: VideoDB Auto-Clipper */}
              <div className="flex flex-col lg:flex-row gap-12 items-center group relative">
                <div className="w-full lg:w-7/12 aspect-[16/10] bg-[#15151A] rounded-sm border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-50 z-10 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 z-20 font-mono text-xs tracking-widest text-[#cc97ff] bg-black/40 border border-[#cc97ff]/20 px-3 py-1 rounded-full backdrop-blur-md shadow-lg pointer-events-none">03 // VIDEO AI</div>
                  <img src="images/ui-ux/stitch-auto-clipper.png" alt="VideoDB Auto-Clipper" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Intelligent Editing</div>
                  <h3 className="text-3xl font-sans font-bold text-white mb-6 group-hover:text-[#cc97ff] transition-colors">VideoDB Auto-Clipper</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// THE CINEMATIC VOID</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        Built for the high-precision world of editing, this dark aesthetic focuses on receding the UI to let the video shine. Featuring overlapping translucent panels, glassmorphism modals, and electric purple glowing accents that feel like polished obsidian.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// USER JOURNEY</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        Creators drop raw footage into the infinite charcoal canvas. Navigating the timeline guided by an AI Heatmap highlighting viral moments, they isolate automated clips. Refining timestamps and scripts happens within a glassmorphic modal before final export via a luminous primary CTA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 04: Snazer Voice Agent */}
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center group relative">
                <div className="w-full lg:w-7/12 aspect-[16/10] bg-[#15151A] rounded-sm border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-50 z-10 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 z-20 font-mono text-xs tracking-widest text-[#00ffc2] bg-black/40 border border-[#00ffc2]/20 px-3 py-1 rounded-full backdrop-blur-md shadow-lg pointer-events-none">04 // NEURAL AGENT</div>
                  <img src="images/ui-ux/stitch-snazer.png" alt="Snazer Voice Agent" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Command Center</div>
                  <h3 className="text-3xl font-sans font-bold text-white mb-6 group-hover:text-[#00ffc2] transition-colors">Snazer Voice Agent</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// ORGANIC TECH-WEAR</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        A sophisticated, high-fidelity AI terminal. It avoids cliché aesthetics with a marriage of rigid brutalist geometry (0px radii) and fluid glassmorphism. It prioritizes functional density with a monospace cryptographic hierarchy to feel like a live data stream.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-white/70 mb-2">// USER JOURNEY</h4>
                      <p className="text-[#888891] text-sm leading-relaxed">
                        Operators initialize the neural terminal using input fields stylized like open data ports. As responses render across the 'Stream' canvas, real-time performance telemetry is mapped on a constant corner HUD, allowing rapid, tactical adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: DESIGN SYSTEM ARCHITECT
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="design-systems" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#0f1118] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-emerald-400 font-bold text-xs mb-4">005 // SYSTEMS</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">Design System<br />Architect.</h2>
              <p className="text-emerald-400/80 text-base font-sans italic mb-4">Building scalable frameworks, not just interfaces.</p>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                Severus architects design systems from scratch using a custom AI-powered stack: Antigravity + Claude Code + Gemini 2.0 + Figma + Google Stitch + NotebookLM. He specialises in creating skills.md frameworks that give AI tools persistent design rules — using Google Stitch to rapid-prototype screen flows from prompts, then refining into production-ready component libraries for apps, startups, and websites.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-up">
              {/* Card 1: Antigravity Design Framework */}
              <div className="bg-[#15151A] border border-white/10 p-8 hover:border-emerald-500/40 transition-all group">
                <div className="w-full aspect-[16/10] rounded-sm overflow-hidden mb-8 bg-[#0a0d14] border border-white/5 p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <div className="font-mono text-[10px] text-emerald-400/60 tracking-widest">ANTIGRAVITY DS</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="flex-1 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center px-3 gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400/60"></div>
                        <div className="flex-1 h-1.5 rounded bg-emerald-400/20"></div>
                      </div>
                      <div className="w-16 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="flex-1 rounded bg-white/[0.03] border border-white/5 p-3 flex flex-col gap-2">
                        <div className="text-[8px] font-mono text-emerald-400/40 tracking-widest">skills.md</div>
                        <div className="flex flex-col gap-1">
                          <div className="h-1.5 w-full rounded bg-emerald-400/15"></div>
                          <div className="h-1.5 w-3/4 rounded bg-emerald-400/10"></div>
                          <div className="h-1.5 w-5/6 rounded bg-emerald-400/10"></div>
                          <div className="h-1.5 w-2/3 rounded bg-emerald-400/10"></div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="flex-1 rounded bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10 p-2 flex flex-col justify-end gap-1">
                          <div className="flex gap-1 items-end h-full">
                            {[40,65,50,80,60,90,70].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t bg-emerald-400/30" style={{height:`${h}%`}}></div>
                            ))}
                          </div>
                        </div>
                        <div className="h-6 rounded bg-emerald-500/5 border border-emerald-500/15 flex items-center justify-center gap-2 px-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400/50"></div>
                          <div className="flex-1 h-1.5 rounded bg-emerald-400/15"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest">AI-Powered | skills.md</div>
                  <span className="text-xs font-mono text-emerald-400">001</span>
                </div>
                <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Antigravity Design Framework</h3>
                <p className="text-[#888891] text-sm leading-relaxed mb-6">
                  A structured system using skills.md files to give Claude Code and Gemini persistent design context. Outputs: component libraries, token systems, and AI-ready style guides.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">Figma</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Claude Code</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Antigravity</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Gemini</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">skills.md</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-emerald-400/20 text-emerald-300/70 bg-emerald-500/5">Google Stitch</span>
                </div>
              </div>

              {/* Card 2: Startup UI System */}
              <div className="bg-[#15151A] border border-white/10 p-8 hover:border-emerald-500/40 transition-all group">
                <div className="w-full aspect-[16/10] rounded-sm overflow-hidden mb-8 bg-[#0a0d14] border border-white/5 p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                    <div className="font-mono text-[10px] text-teal-400/60 tracking-widest">STARTUP UI SYSTEM</div>
                  </div>
                  <div className="flex gap-4 flex-1">
                    <div className="flex flex-col gap-2 w-2/5">
                      <div className="text-[9px] font-mono text-white/30 mb-1">TOKENS</div>
                      <div className="flex gap-1">
                        <div className="w-6 h-6 rounded bg-emerald-500"></div>
                        <div className="w-6 h-6 rounded bg-emerald-400"></div>
                        <div className="w-6 h-6 rounded bg-teal-400"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-6 h-6 rounded bg-slate-700"></div>
                        <div className="w-6 h-6 rounded bg-slate-600"></div>
                        <div className="w-6 h-6 rounded bg-slate-400"></div>
                      </div>
                      <div className="flex flex-col gap-1 mt-2">
                        <div className="h-2 w-full rounded bg-emerald-400/10 relative overflow-hidden">
                          <div className="absolute left-0 top-0 h-full bg-emerald-400/30 rounded" style={{width:'40%'}}></div>
                        </div>
                        <div className="h-3 w-full rounded bg-emerald-400/10 relative overflow-hidden">
                          <div className="absolute left-0 top-0 h-full bg-emerald-400/30 rounded" style={{width:'60%'}}></div>
                        </div>
                        <div className="h-4 w-full rounded bg-emerald-400/10 relative overflow-hidden">
                          <div className="absolute left-0 top-0 h-full bg-emerald-400/30 rounded" style={{width:'80%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-[9px] font-mono text-white/30 mb-1">COMPONENTS</div>
                      <div className="h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                        <div className="w-20 h-2 rounded bg-emerald-400/40"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-8 rounded bg-white/5 border border-white/10 flex items-center px-2">
                          <div className="w-12 h-1.5 rounded bg-white/20"></div>
                        </div>
                        <div className="flex-1 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                          <div className="w-8 h-1.5 rounded bg-emerald-400/40"></div>
                        </div>
                      </div>
                      <div className="flex-1 rounded bg-white/[0.02] border border-white/5 p-2 flex flex-col gap-1.5">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex gap-2 items-center">
                            <div className="w-4 h-4 rounded bg-teal-400/20 shrink-0"></div>
                            <div className="flex-1 h-1.5 rounded bg-white/10"></div>
                            <div className="w-8 h-1.5 rounded bg-emerald-400/20"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Startup Scale | End-to-End</div>
                  <span className="text-xs font-mono text-emerald-400">002</span>
                </div>
                <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Startup UI System</h3>
                <p className="text-[#888891] text-sm leading-relaxed mb-6">
                  End-to-end design system for an early-stage product: typography scale, colour tokens, component variants, and handoff documentation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">Figma</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Claude Code</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Antigravity</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Gemini</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">skills.md</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-emerald-400/20 text-emerald-300/70 bg-emerald-500/5">Google Stitch</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: AI SOLUTION ARCHITECT
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="ai-architect" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#100d18] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-violet-400 font-bold text-xs mb-4">006 // INTELLIGENCE</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">AI Solution<br />Architect.</h2>
              <p className="text-violet-400/80 text-base font-sans italic mb-4">Deep research. Sharper decisions. Faster builds.</p>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                Severus runs structured AI research sprints for startups and solopreneurs using NotebookLM, Gemini, Claude, and Google Stitch. He maps business problems to AI solutions — identifying the right tools, workflows, and automations, then prototyping UI screens in Stitch to validate product direction before a single line of code is written.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-up">
              {/* Card 1: Startup Discovery Sprint */}
              <div className="bg-[#15151A] border border-white/10 p-8 hover:border-violet-500/40 transition-all group">
                <div className="w-full aspect-[16/10] rounded-sm overflow-hidden mb-8 bg-[#0a0d14] border border-white/5 p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
                    <div className="font-mono text-[10px] text-violet-400/60 tracking-widest">DISCOVERY SPRINT</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    {[
                      { label: "01 — Problem Definition", active: true },
                      { label: "02 — Competitive Analysis", active: false },
                      { label: "03 — AI Toolstack Recommendation", active: false },
                    ].map((phase, i) => (
                      <div key={i} className={`flex items-center gap-3 border rounded p-2.5 ${i === 0 ? 'border-violet-500/40 bg-violet-500/10' : 'border-white/5 bg-white/[0.02]'}`}>
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${i === 0 ? 'bg-violet-400' : 'bg-white/20'}`}></div>
                        <div className={`font-mono text-[9px] tracking-widest ${i === 0 ? 'text-violet-300' : 'text-white/30'}`}>{phase.label}</div>
                        {i === 2 && <div className="ml-auto font-mono text-[8px] text-violet-400/60 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">OUTPUT</div>}
                      </div>
                    ))}
                    <div className="flex-1 rounded bg-gradient-to-br from-violet-500/10 to-purple-900/10 border border-violet-500/10 p-3 flex items-center justify-center mt-1">
                      <div className="text-center">
                        <div className="font-mono text-[9px] text-violet-400/60 tracking-widest mb-1">STRATEGIC BRIEF</div>
                        <div className="font-sans font-bold text-sm text-white/60">3-Phase Research Pipeline</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest">AI Research | Strategy</div>
                  <span className="text-xs font-mono text-violet-400">001</span>
                </div>
                <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">Startup Discovery Sprint</h3>
                <p className="text-[#888891] text-sm leading-relaxed mb-6">
                  A 3-phase AI research pipeline: problem definition, competitive landscape analysis, and AI toolstack recommendation. Delivered as a strategic brief.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-violet-500/30 text-violet-400 bg-violet-500/10">NotebookLM</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Gemini</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Claude</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Deep Research</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Strategy</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-violet-400/20 text-violet-300/70 bg-violet-500/5">Google Stitch</span>
                </div>
              </div>

              {/* Card 2: Solopreneur AI Audit */}
              <div className="bg-[#15151A] border border-white/10 p-8 hover:border-violet-500/40 transition-all group">
                <div className="w-full aspect-[16/10] rounded-sm overflow-hidden mb-8 bg-[#0a0d14] border border-white/5 p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <div className="font-mono text-[10px] text-purple-400/60 tracking-widest">AI AUDIT REPORT</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {[
                      { area: "Email / Comms", saving: "3h/wk", pct: 75 },
                      { area: "Content Creation", saving: "4h/wk", pct: 85 },
                      { area: "Admin Tasks", saving: "2h/wk", pct: 55 },
                      { area: "Research", saving: "3h+/wk", pct: 70 },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/5 rounded p-2 flex flex-col gap-1">
                        <div className="font-mono text-[8px] text-white/30 tracking-widest">{item.area}</div>
                        <div className="font-bold text-violet-400 text-sm">{item.saving}</div>
                        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full bg-violet-500/40" style={{width:`${item.pct}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-2 bg-violet-500/10 border border-violet-500/20 rounded p-2">
                    <div className="font-mono text-[9px] text-violet-400/60 tracking-widest">TOTAL IDENTIFIED SAVINGS</div>
                    <div className="font-bold text-violet-400 text-base">12h+/week</div>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Workflow Audit | AI Tools</div>
                  <span className="text-xs font-mono text-violet-400">002</span>
                </div>
                <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">Solopreneur AI Audit</h3>
                <p className="text-[#888891] text-sm leading-relaxed mb-6">
                  Deep review of a solopreneur's current workflow, identifying 5+ areas where AI can save 10+ hours per week.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-violet-500/30 text-violet-400 bg-violet-500/10">NotebookLM</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Gemini</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Claude</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Deep Research</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Strategy</span>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-violet-400/20 text-violet-300/70 bg-violet-500/5">Google Stitch</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: AGENTIC DEV — AI INTEGRATOR IDENTITY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="agentic-dev" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#0a120e] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-emerald-400 font-bold text-xs mb-4">006B // AGENTIC DEV</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">AI Integrator.<br />Agentic Dev.</h2>
              <p className="text-emerald-400/80 text-base font-sans italic mb-4">Systems that build, route, and self-correct.</p>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                Beyond prompting — I build multi-agent pipelines, instrument them with CLAUDE.md rules, and wire them to real business workflows. Every agent has a role, a budget, and a quality gate.
              </p>
            </div>

            {/* Projects: AI Legal Pioneer + Severus OS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 reveal-up">
              {/* AI Legal Pioneer */}
              <div className="bg-[#15151A] border border-white/10 p-8 hover:border-rose-500/40 transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-rose-400/70 mb-2">PORTSWIGGER SUBMISSION</div>
                    <h3 className="text-xl font-sans font-bold text-white group-hover:text-rose-400 transition-colors">AI Legal Pioneer</h3>
                  </div>
                  <span className="text-[10px] font-mono text-white/20 border border-white/10 px-2 py-1 rounded">001</span>
                </div>
                <p className="text-[#888891] text-sm leading-relaxed mb-6">
                  Dual-LLM contract review pipeline: Claude as Architect drafts risk analysis, Gemini as Auditor cross-checks for bias. Submitted to PortSwigger's AI Legal Pioneer competition.
                </p>
                <div className="bg-[#0a0d14] border border-white/5 rounded p-4 mb-6 font-mono text-xs">
                  <div className="text-rose-400/60 mb-2 tracking-widest text-[9px]">PIPELINE</div>
                  <div className="flex items-center gap-2 text-white/50">
                    <span className="text-rose-400">Claude</span>
                    <span>→ risk analysis →</span>
                    <span className="text-amber-400">Gemini</span>
                    <span>→ audit →</span>
                    <span className="text-emerald-400">report</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Claude API", "Gemini API", "Dual-LLM", "Legal AI", "PortSwigger"].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full border border-rose-500/30 text-rose-400 bg-rose-500/10">{t}</span>
                  ))}
                </div>
              </div>

              {/* Severus OS */}
              <div className="bg-[#15151A] border border-white/10 p-8 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-emerald-400/70 mb-2">INTERNAL INFRASTRUCTURE</div>
                    <h3 className="text-xl font-sans font-bold text-white group-hover:text-emerald-400 transition-colors">Severus OS</h3>
                  </div>
                  <span className="text-[10px] font-mono text-white/20 border border-white/10 px-2 py-1 rounded">002</span>
                </div>
                <p className="text-[#888891] text-sm leading-relaxed mb-6">
                  8-agent permission-gated system running as agency operating infrastructure. Kanban, CRM, Vault, Sandbox, and live run history — all wired to Claude Code via a local dashboard.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    { label: "Agents", val: "8" },
                    { label: "Skills", val: "24" },
                    { label: "Commands", val: "21" },
                    { label: "Memory layers", val: "4" },
                  ].map(stat => (
                    <div key={stat.label} className="bg-[#0a0d14] border border-white/5 rounded p-3">
                      <div className="font-serif italic text-2xl text-emerald-400">{stat.val}</div>
                      <div className="font-mono text-[9px] text-white/30 tracking-widest mt-1">{stat.label.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Claude Code", "n8n", "SQLite", "Node.js", "Obsidian"].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Agent Stack */}
            <div className="mb-10 reveal-up">
              <div className="text-[10px] font-mono tracking-widest text-white/30 mb-6">AGENT STACK</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: "Strategist", role: "Campaign concepts + messaging", color: "#10b981" },
                  { name: "Copy Writer", role: "Platform-compliant ad copy", color: "#10b981" },
                  { name: "Budget Auditor", role: "Bid strategy + spend allocation", color: "#10b981" },
                  { name: "Tracking Auditor", role: "Pixel + server-side events", color: "#10b981" },
                  { name: "Creative Auditor", role: "Format diversity + fatigue", color: "#10b981" },
                  { name: "Compliance Auditor", role: "Policy + privacy checks", color: "#10b981" },
                ].map(agent => (
                  <div key={agent.name} className="bg-[#15151A] border border-white/10 p-4 hover:border-emerald-500/30 transition-all">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mb-3"></div>
                    <div className="font-sans font-bold text-white text-sm mb-1">{agent.name}</div>
                    <div className="font-mono text-[9px] text-white/30 leading-relaxed">{agent.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CLAUDE.md Rules + n8n Automations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-up">
              <div className="bg-[#15151A] border border-white/10 p-6">
                <div className="text-[10px] font-mono tracking-widest text-white/30 mb-4">CLAUDE.MD RULES</div>
                <div className="space-y-2">
                  {[
                    "Think before coding — state assumptions",
                    "Simplicity first — minimum viable code",
                    "Surgical changes — touch only what's needed",
                    "Goal-driven execution — define success, loop",
                    "Token budgets are not advisory",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                      <span className="font-mono text-[9px] text-emerald-400/60 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[#888891] text-sm">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#15151A] border border-white/10 p-6">
                <div className="text-[10px] font-mono tracking-widest text-white/30 mb-4">N8N AUTOMATIONS</div>
                <div className="space-y-3">
                  {[
                    { name: "Client Onboarding", desc: "Form → Notion → email sequence", status: "LIVE" },
                    { name: "GA4 Weekly Report", desc: "BigQuery → Sheets → Slack digest", status: "LIVE" },
                    { name: "Lead Qualifier", desc: "Typeform → Claude → CRM tag", status: "BUILDING" },
                    { name: "Ad Alert System", desc: "Google Ads → threshold check → SMS", status: "PLANNED" },
                  ].map(wf => (
                    <div key={wf.name} className="flex items-start justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                      <div>
                        <div className="text-white text-sm font-sans font-bold mb-0.5">{wf.name}</div>
                        <div className="font-mono text-[9px] text-white/30">{wf.desc}</div>
                      </div>
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${
                        wf.status === 'LIVE' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' :
                        wf.status === 'BUILDING' ? 'border-amber-500/30 text-amber-400 bg-amber-500/10' :
                        'border-white/10 text-white/30'
                      }`}>{wf.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: AI BRAND KIT GENERATOR
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="brand-kit" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#131008] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-amber-400 font-bold text-xs mb-4">007 // BRAND</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">AI Brand Kit<br />Generator.</h2>
              <p className="text-amber-400/80 text-base font-sans italic mb-4">From brief to brand — 10 deliverables, zero design fees.</p>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                The AI Influencer Starter Kit is a shipped digital product that proves the concept: input a niche and a brief, output a complete brand system. Built entirely with AI tools, structured by Severus, and live on Gumroad. The workflow collapses weeks of brand strategy into a single afternoon.
              </p>
            </div>

            {/* Product cards */}
            <div className="reveal-up mb-8">
              <div className="bg-[#15151A] border border-white/10 p-8 md:p-12 hover:border-amber-500/40 transition-all group relative">
                {/* Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                  Live on Gumroad
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Workflow pipeline visual */}
                  <div className="w-full rounded-sm overflow-hidden bg-[#0a0d14] border border-white/5 p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <div className="font-mono text-[10px] text-amber-400/60 tracking-widest">AI INFLUENCER STARTER KIT — WORKFLOW</div>
                    </div>
                    {/* 5-stage pipeline */}
                    {[
                      { stage: "01", label: "Brief & Niche", sub: "Define persona, niche, audience problem", color: "border-amber-500/40 bg-amber-500/8", dot: "bg-amber-400", tag: "INPUT" },
                      { stage: "02", label: "Brand DNA", sub: "Personality, voice, pillars, visual identity", color: "border-amber-400/30 bg-amber-500/5", dot: "bg-amber-300", tag: "" },
                      { stage: "03", label: "AI Tool Stack", sub: "20+ free tools mapped to every task", color: "border-orange-400/25 bg-orange-500/5", dot: "bg-orange-400", tag: "" },
                      { stage: "04", label: "Content System", sub: "30 prompts · 50 captions · 7-day calendar", color: "border-yellow-500/25 bg-yellow-500/5", dot: "bg-yellow-400", tag: "" },
                      { stage: "05", label: "Monetisation & Launch", sub: "12-month roadmap · promo assets · $9.99 Gumroad", color: "border-amber-300/30 bg-amber-400/8", dot: "bg-amber-200", tag: "OUTPUT" },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-3 items-stretch">
                        {/* Connector line */}
                        <div className="flex flex-col items-center shrink-0 w-6">
                          <div className={`w-2.5 h-2.5 rounded-full ${s.dot} mt-3 shrink-0`}></div>
                          {i < 4 && <div className="w-px flex-1 bg-amber-500/15 mt-1"></div>}
                        </div>
                        {/* Stage card */}
                        <div className={`flex-1 border ${s.color} rounded p-3 flex justify-between items-center gap-3`}>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-mono text-[8px] text-white/20 tracking-widest">{s.stage}</span>
                              <span className="font-sans font-bold text-xs text-white/80">{s.label}</span>
                            </div>
                            <div className="font-mono text-[9px] text-white/30 leading-relaxed">{s.sub}</div>
                          </div>
                          {s.tag && (
                            <div className="shrink-0 font-mono text-[8px] tracking-widest text-amber-400/60 border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 rounded-full">{s.tag}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Copy */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Claude · ChatGPT · Gumroad</div>
                      <span className="text-xs font-mono text-amber-400">001</span>
                    </div>
                    <h3 className="text-3xl font-sans font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">AI Influencer Starter Kit</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">
                      A complete brand-in-a-box for content creators and AI persona builders. Severus used Claude and ChatGPT to architect 10 production-ready resources — from niche definition to first sale — and deployed the full kit on Gumroad at $9.99.
                    </p>

                    {/* 10 deliverables */}
                    <div className="grid grid-cols-1 gap-2 mb-8">
                      {[
                        ["01", "The AI Influencer Blueprint", "7-step roadmap from idea to first sale"],
                        ["02", "Brand DNA Worksheet", "Fillable persona, voice, and identity framework"],
                        ["03", "Free AI Tool Stack", "20+ tools across 11 categories — $0/month"],
                        ["04", "30 ChatGPT Prompts", "Avatar, content, captions, and positioning"],
                        ["05", "7-Day Content Calendar", "Day-by-day launch plan with repeatable framework"],
                        ["06", "50 Captions + 20 CTAs", "Plug-and-play swipe file for any niche"],
                        ["07", "Monetisation Roadmap", "12-month plan: affiliates, products, brand deals"],
                        ["08", "Launch Promotion Assets", "Social posts, video script, email template"],
                        ["09", "Content Creator Quick-Start", "Adapts kit for real brands — not just AI personas"],
                        ["10", "Social Media Reverse Engineering", "Hook formulas, audit frameworks, platform tactics"],
                      ].map(([num, title, desc]) => (
                        <div key={num} className="flex gap-3 items-start border border-white/5 bg-white/[0.02] p-2.5 rounded group/item hover:border-amber-500/20 transition-colors">
                          <span className="font-mono text-[9px] text-amber-400/50 shrink-0 mt-0.5 w-5">{num}</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-sans text-xs font-bold text-white/80 group-hover/item:text-amber-400 transition-colors truncate">{title}</div>
                            <div className="font-mono text-[9px] text-white/30 leading-snug">{desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags + CTA */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-amber-500/30 text-amber-400 bg-amber-500/10">Claude</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">ChatGPT</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Gumroad</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Canva</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Notion</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">AI Workflow</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://michaelverse453.gumroad.com/l/zasmyp" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-3 border border-amber-500/40 text-amber-400 font-bold uppercase tracking-widest px-6 py-3 rounded-full text-xs hover:bg-amber-500/10 transition-colors hover-target">
                        Get the Kit — $9.99
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </a>
                      <a href="https://ai-influencer-starter-kit.netlify.app" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-3 border border-white/20 text-white/60 font-bold uppercase tracking-widest px-6 py-3 rounded-full text-xs hover:border-amber-500/30 hover:text-amber-400 transition-colors hover-target">
                        Landing Page ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nano Banana Guide card */}
            <div className="reveal-up">
              <div className="bg-[#15151A] border border-white/10 p-8 md:p-12 hover:border-yellow-500/40 transition-all group relative">
                {/* Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></div>
                  Live on Gumroad
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Visual — image-to-video pipeline */}
                  <div className="w-full rounded-sm overflow-hidden bg-[#0a0d14] border border-white/5 p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="font-mono text-[10px] text-yellow-400/60 tracking-widest">NANO BANANA — PIPELINE METHOD</div>
                    </div>

                    {/* Stage 1: Nano Banana → Image */}
                    <div className="flex gap-3 items-stretch">
                      <div className="flex flex-col items-center shrink-0 w-6">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 mt-3 shrink-0"></div>
                        <div className="w-px flex-1 bg-yellow-500/15 mt-1"></div>
                      </div>
                      <div className="flex-1 border border-yellow-500/30 bg-yellow-500/8 rounded p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[8px] text-white/20 tracking-widest">01</span>
                          <span className="font-sans font-bold text-xs text-white/80">Generate in Nano Banana</span>
                          <span className="ml-auto font-mono text-[8px] text-yellow-400/60 border border-yellow-500/20 bg-yellow-500/5 px-2 py-0.5 rounded-full">INPUT</span>
                        </div>
                        <div className="font-mono text-[9px] text-white/30">25 photo prompts · photorealistic · commercial-grade</div>
                        <div className="flex gap-1.5 mt-2">
                          {['AFFILIATE', 'MERCH', 'DIGITAL', 'VIRAL'].map(t => (
                            <div key={t} className="font-mono text-[7px] text-yellow-400/40 border border-yellow-500/15 bg-yellow-500/5 px-1.5 py-0.5 rounded">{t}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stage 2: Animate */}
                    <div className="flex gap-3 items-stretch">
                      <div className="flex flex-col items-center shrink-0 w-6">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-3 shrink-0"></div>
                        <div className="w-px flex-1 bg-yellow-500/15 mt-1"></div>
                      </div>
                      <div className="flex-1 border border-orange-400/20 bg-orange-500/5 rounded p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[8px] text-white/20 tracking-widest">02</span>
                          <span className="font-sans font-bold text-xs text-white/80">Animate with Video AI</span>
                        </div>
                        <div className="font-mono text-[9px] text-white/30">25 video prompts · Kling AI · Luma Dream Machine · Runway Gen-3</div>
                        <div className="flex gap-1.5 mt-2">
                          {['KLING', 'LUMA', 'RUNWAY'].map(t => (
                            <div key={t} className="font-mono text-[7px] text-orange-400/50 border border-orange-500/15 bg-orange-500/5 px-1.5 py-0.5 rounded">{t}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stage 3: Publish */}
                    <div className="flex gap-3 items-stretch">
                      <div className="flex flex-col items-center shrink-0 w-6">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-200 mt-3 shrink-0"></div>
                      </div>
                      <div className="flex-1 border border-yellow-300/20 bg-yellow-400/5 rounded p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[8px] text-white/20 tracking-widest">03</span>
                          <span className="font-sans font-bold text-xs text-white/80">Publish & Monetise</span>
                          <span className="ml-auto font-mono text-[8px] text-yellow-400/60 border border-yellow-500/20 bg-yellow-500/5 px-2 py-0.5 rounded-full">OUTPUT</span>
                        </div>
                        <div className="font-mono text-[9px] text-white/30">faceless channels · affiliate drops · digital product hooks</div>
                      </div>
                    </div>

                    {/* Prompt count summary */}
                    <div className="flex gap-2 mt-1">
                      <div className="flex-1 bg-yellow-500/10 border border-yellow-500/20 rounded p-2 text-center">
                        <div className="font-bold text-yellow-400 text-lg">25</div>
                        <div className="font-mono text-[8px] text-white/30 tracking-widest">PHOTO PROMPTS</div>
                      </div>
                      <div className="flex-1 bg-orange-500/10 border border-orange-500/20 rounded p-2 text-center">
                        <div className="font-bold text-orange-400 text-lg">25</div>
                        <div className="font-mono text-[8px] text-white/30 tracking-widest">VIDEO PROMPTS</div>
                      </div>
                      <div className="flex-1 bg-white/[0.03] border border-white/5 rounded p-2 text-center">
                        <div className="font-bold text-white text-lg">50</div>
                        <div className="font-mono text-[8px] text-white/30 tracking-widest">TOTAL</div>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">AI Image Gen | Content Creator</div>
                      <span className="text-xs font-mono text-yellow-400">002</span>
                    </div>
                    <h3 className="text-3xl font-sans font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">The Ultimate Guide to Nano Banana</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">
                      Nano Banana is the hidden gem of AI image generation — photorealistic, fast, and built for commercial use. This guide weaponises it: 50 engineered prompts covering affiliate marketing, merch mockups, faceless channels, and viral content, plus a full image-to-video pipeline using Kling, Luma, and Runway.
                    </p>

                    <div className="space-y-2 mb-8">
                      {[
                        ["25 Photo Prompts", "Affiliate, merch, digital product, and viral hooks"],
                        ["25 Video Prompts", "Motion directives for Kling AI, Luma Dream Machine & Runway"],
                        ["The Pipeline Method", "Nano Banana image → AI video in 3 steps"],
                        ["NotebookLM Research Pack", "Deep-research sources included for buyers"],
                        ["Monetisation Use Cases", "Faceless channels, affiliate drops, POD, paid communities"],
                      ].map(([title, desc]) => (
                        <div key={title} className="flex gap-3 items-start border border-white/5 bg-white/[0.02] p-2.5 rounded group/item hover:border-yellow-500/20 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5"></div>
                          <div>
                            <div className="font-sans text-xs font-bold text-white/80 group-hover/item:text-yellow-400 transition-colors">{title}</div>
                            <div className="font-mono text-[9px] text-white/30 leading-snug">{desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-yellow-500/30 text-yellow-400 bg-yellow-500/10">Nano Banana</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Kling AI</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Luma</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Runway</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">NotebookLM</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">AI Content</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://michaelverse453.gumroad.com/l/nanobanana-guide" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-3 border border-yellow-500/40 text-yellow-400 font-bold uppercase tracking-widest px-6 py-3 rounded-full text-xs hover:bg-yellow-500/10 transition-colors hover-target">
                        Get the Guide
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </a>
                      <a href="https://nanobanana-guide.netlify.app" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-3 border border-white/20 text-white/60 font-bold uppercase tracking-widest px-6 py-3 rounded-full text-xs hover:border-yellow-500/30 hover:text-yellow-400 transition-colors hover-target">
                        Landing Page ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: SYSTEMS & TOOLS — DASHBOARDS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="systems" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#0a0f0d] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">

            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-emerald-400 font-bold text-xs mb-4">007B // SYSTEMS</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">Built Tools.<br />Not Just Outputs.</h2>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                Every system below is live and in use. Not mockups — real infrastructure running daily client and agency work. Each one was built to solve a specific problem, then refined until it disappeared into the workflow.
              </p>
            </div>

            {/* System Architecture Visualiser — featured top card */}
            <div className="mb-8 reveal-up">
              <div className="bg-[#15151A] border border-white/10 hover:border-amber-500/30 transition-all group overflow-hidden">
                <div className="p-8 md:p-10 pb-0">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
                        <span className="font-mono text-[10px] text-amber-400/60 tracking-widest">INTERACTIVE — CLICK TO EXPLORE</span>
                      </div>
                      <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">System Architecture Visualiser</h3>
                      <p className="text-[#888891] text-sm leading-relaxed max-w-2xl">
                        Every piece of the Severus Connects system in one diagram — who does what, what talks to what, and how a client request flows from trigger to output. Select a workflow on the right to trace the exact data path. Built so clients can see the system, not just trust it exists.
                      </p>
                    </div>
                    <div className="hidden md:flex flex-col gap-2 shrink-0">
                      {["Run GA4 Audit", "Prospect Lookup", "Market Intelligence Brief"].map(flow => (
                        <div key={flow} className="text-[10px] font-mono px-3 py-1.5 border border-amber-500/20 text-amber-400/60 rounded bg-amber-500/5 whitespace-nowrap">{flow}</div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Live iframe */}
                <div className="w-full h-[520px] border-t border-white/5">
                  <iframe
                    src="/system-architecture.html"
                    className="w-full h-full"
                    title="Severus Connects — System Architecture Visualiser"
                    style={{ border: 'none', background: '#141414' }}
                  />
                </div>
              </div>
            </div>

            {/* Severus Overwatch — featured wide card */}
            <div className="mb-8 reveal-up">
              <div className="bg-[#15151A] border border-white/10 p-8 md:p-10 hover:border-emerald-500/30 transition-all group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="font-mono text-[10px] text-emerald-400/60 tracking-widest">LIVE — RUNNING DAILY</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Severus Overwatch</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">
                      Agency mission control. One screen shows everything happening across clients, tasks, agents, and market signals — so nothing falls through the cracks and every decision has context.
                    </p>
                    <div className="space-y-3 mb-6">
                      {[
                        { tab: "Map", plain: "Live overview of London agency activity and client locations" },
                        { tab: "Kanban", plain: "Drag-and-drop task board — Backlog → In Progress → Done" },
                        { tab: "Agents", plain: "Live registry of every AI model connected to the system" },
                        { tab: "Swarm", plain: "Dispatch multiple AI agents on a task and watch them run" },
                        { tab: "Tactical AI", plain: "Strategy layer — brief an AI on a problem, get a structured plan" },
                        { tab: "Markets", plain: "Real-time market signals to inform campaign timing" },
                      ].map(item => (
                        <div key={item.tab} className="flex items-start gap-3">
                          <span className="font-mono text-[9px] text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded shrink-0 mt-0.5">{item.tab}</span>
                          <span className="text-[#888891] text-sm">{item.plain}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "SQLite", "Node.js", "Claude API", "Framer Motion"].map(t => (
                        <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/40">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Visual mockup of the dashboard */}
                  <div className="w-full aspect-[16/10] rounded bg-[#0f1c2e] border border-slate-700/50 overflow-hidden flex flex-col">
                    {/* Nav bar */}
                    <div className="flex items-center gap-1 px-3 py-2 border-b border-slate-700/50 shrink-0" style={{background:"rgba(30,58,95,0.6)"}}>
                      <div className="w-4 h-4 rounded" style={{background:"#C9A84C"}}></div>
                      <span className="text-[9px] font-bold text-white ml-1 tracking-wide">Severus Overwatch</span>
                      <div className="ml-auto flex gap-1">
                        {["Map","Swarm","Agents","Kanban","Tactical","Markets"].map((t,i) => (
                          <div key={t} className={`text-[7px] font-mono px-2 py-0.5 rounded ${i===3 ? 'text-amber-400 bg-amber-400/10' : 'text-slate-400'}`}>{t}</div>
                        ))}
                      </div>
                    </div>
                    {/* Kanban mockup */}
                    <div className="flex-1 p-3 flex gap-2 overflow-hidden">
                      {[
                        { col: "BACKLOG", accent: "border-t-slate-500", cards: ["Research n8n triggers","Brief template v2"] },
                        { col: "IN PROGRESS", accent: "border-t-amber-500", cards: ["GA4 audit — client A","Landing page copy"] },
                        { col: "REVIEW", accent: "border-t-purple-500", cards: ["Agent stack docs"] },
                        { col: "DONE", accent: "border-t-emerald-500", cards: ["Onboarding flow","Ad creative batch"] },
                      ].map(col => (
                        <div key={col.col} className={`flex-1 bg-slate-800/40 rounded border-t-2 ${col.accent} p-2 flex flex-col gap-1.5 min-w-0`}>
                          <div className="font-mono text-[6px] text-slate-400 tracking-widest mb-1">{col.col}</div>
                          {col.cards.map(c => (
                            <div key={c} className="bg-slate-900/60 border border-slate-700/40 rounded p-1.5">
                              <div className="text-[7px] text-slate-200 leading-tight">{c}</div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Three smaller tool cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">

              {/* Swarm Runner */}
              <div className="bg-[#15151A] border border-white/10 p-6 hover:border-blue-500/30 transition-all group">
                <div className="w-full aspect-[4/3] rounded bg-[#0a0d14] border border-white/5 mb-6 overflow-hidden flex flex-col p-3 gap-1.5">
                  <div className="font-mono text-[7px] text-blue-400/60 tracking-widest mb-1">SWARM TASK RUNNER</div>
                  {[
                    { title: "Audit GA4 property", status: "done", agent: "analytics-auditor" },
                    { title: "Draft campaign brief", status: "running", agent: "strategist" },
                    { title: "Check ad compliance", status: "pending", agent: "compliance-auditor" },
                  ].map(task => (
                    <div key={task.title} className="bg-white/[0.03] border border-white/5 rounded p-2 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${task.status==='done'?'bg-emerald-400':task.status==='running'?'bg-blue-400 animate-pulse':'bg-white/20'}`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[7px] text-white/70 truncate">{task.title}</div>
                        <div className="text-[6px] text-white/30 font-mono">{task.agent}</div>
                      </div>
                      <div className={`text-[6px] font-mono px-1.5 py-0.5 rounded-full border ${task.status==='done'?'border-emerald-700/40 text-emerald-300':task.status==='running'?'border-blue-700/40 text-blue-300':'border-slate-700/40 text-slate-400'}`}>{task.status}</div>
                    </div>
                  ))}
                  <div className="mt-auto bg-blue-500/10 border border-blue-500/20 rounded p-2">
                    <div className="font-mono text-[6px] text-blue-400/60">TERMINAL OUTPUT</div>
                    <div className="font-mono text-[6px] text-blue-300 mt-0.5">→ Running compliance checks...</div>
                  </div>
                </div>
                <h3 className="font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Swarm Runner</h3>
                <p className="text-[#888891] text-sm leading-relaxed">Dispatch multiple AI agents on a single task and watch their live logs. One click runs a full campaign audit across GA4, creative, compliance, and budget simultaneously.</p>
              </div>

              {/* Agent Registry */}
              <div className="bg-[#15151A] border border-white/10 p-6 hover:border-violet-500/30 transition-all group">
                <div className="w-full aspect-[4/3] rounded bg-[#0a0d14] border border-white/5 mb-6 overflow-hidden flex flex-col p-3">
                  <div className="font-mono text-[7px] text-violet-400/60 tracking-widest mb-2">AGENT REGISTRY</div>
                  {[
                    { name: "claude-opus-4-7", provider: "Claude", tier: "bg-purple-900/40 text-purple-300" },
                    { name: "gemini-2.5-pro", provider: "Google", tier: "bg-blue-900/40 text-blue-300" },
                    { name: "deepseek-r1", provider: "DeepSeek", tier: "bg-cyan-900/40 text-cyan-300" },
                    { name: "llama-3.3-70b", provider: "Cerebras", tier: "bg-emerald-900/40 text-emerald-300" },
                  ].map(agent => (
                    <div key={agent.name} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-[7px] text-white/70 truncate">{agent.name}</div>
                      </div>
                      <span className={`text-[6px] font-mono px-1.5 py-0.5 rounded border border-white/5 ${agent.tier}`}>{agent.provider}</span>
                    </div>
                  ))}
                </div>
                <h3 className="font-sans font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Agent Registry</h3>
                <p className="text-[#888891] text-sm leading-relaxed">Live view of every AI model wired into the system — Claude, Gemini, DeepSeek, and local models. Switch between them per task based on cost, speed, and capability.</p>
              </div>

              {/* Client Deck */}
              <div className="bg-[#15151A] border border-white/10 p-6 hover:border-amber-500/30 transition-all group">
                <div className="w-full aspect-[4/3] rounded bg-[#0f0e0a] border border-white/5 mb-6 overflow-hidden flex flex-col">
                  {/* Slide preview */}
                  <div className="flex-1 flex items-center justify-center p-4 relative">
                    <div className="text-center">
                      <div className="font-mono text-[7px] text-amber-400/50 tracking-widest mb-2">SLIDE 01 / 10</div>
                      <div className="font-serif italic text-lg text-white leading-tight">Severus Connects</div>
                      <div className="font-mono text-[7px] text-white/30 mt-1">AI Performance Marketing</div>
                    </div>
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      {[...Array(5)].map((_,i) => (
                        <div key={i} className={`w-1 h-1 rounded-full ${i===0?'bg-amber-400':'bg-white/20'}`}></div>
                      ))}
                    </div>
                  </div>
                  {/* Slide nav */}
                  <div className="border-t border-white/5 px-3 py-1.5 flex items-center justify-between">
                    <div className="font-mono text-[6px] text-white/20">← → to navigate</div>
                    <div className="font-mono text-[6px] text-amber-400/60">10 SLIDES</div>
                  </div>
                </div>
                <h3 className="font-sans font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Client Deck</h3>
                <p className="text-[#888891] text-sm leading-relaxed">10-slide HTML presentation built for client meetings. Covers the problem, results, live tools, agent stack, and next steps — keyboard navigable, no PowerPoint required.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: SEVERUS CONNECTS AGENCY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="agency" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#13100d] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-[#F97316] font-bold text-xs mb-4">008 // AGENCY</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-6">Severus<br />Connects.</h2>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                Enterprise-grade design and AI — now available to small businesses that deserve better.
                Fast websites, cinematic reels, and intelligent automation for founders ready to scale.
              </p>
            </div>

            {/* Agency CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#F97316]/10 to-transparent border border-[#F97316]/20 rounded-sm p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 reveal">
              <div>
                <h3 className="font-sans font-bold text-2xl text-white mb-2">Ready to work together?</h3>
                <p className="text-[#888891] text-sm max-w-lg">Free 20-minute audit call. No pitch, just actionable ideas for your business.</p>
              </div>
              <a href="mailto:idris.bakare92@outlook.com" className="hover-target inline-block bg-[#F97316] text-black font-bold uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-white transition-colors shrink-0">
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: AI AUTOMATION & CHATBOTS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="automation" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#0d1012] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 reveal">
              <div className="uppercase tracking-[0.3em] text-sky-400 font-bold text-xs mb-4">009 // AUTOMATION</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">AI Automation<br />& Chatbots.</h2>
              <p className="text-sky-400/80 text-base font-sans italic mb-4">Intelligent systems that work while you sleep.</p>
              <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed">
                Severus designs and builds AI-powered chatbots and automation workflows that handle onboarding, customer queries, and internal processes — freeing up founder time and improving user experience from day one.
              </p>
            </div>

            {/* Featured wide card */}
            <div className="reveal-up">
              <div className="bg-[#15151A] border border-white/10 p-8 md:p-12 hover:border-sky-500/40 transition-all group relative">
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></div>
                  In Development
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Visual — chatbot UI */}
                  <div className="w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#0a0d14] border border-white/5 p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
                      <div className="font-mono text-[10px] text-sky-400/60 tracking-widest">ONBOARDING AGENT</div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 overflow-hidden">
                      {/* Bot welcome */}
                      <div className="flex gap-2 items-start">
                        <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                        </div>
                        <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                          <div className="h-2 w-36 rounded bg-sky-400/25 mb-1"></div>
                          <div className="h-2 w-24 rounded bg-sky-400/15"></div>
                        </div>
                      </div>
                      {/* User reply */}
                      <div className="flex gap-2 items-start justify-end">
                        <div className="bg-white/5 border border-white/10 rounded-lg rounded-tr-none px-3 py-2 max-w-[70%]">
                          <div className="h-2 w-28 rounded bg-white/15 mb-1"></div>
                          <div className="h-2 w-16 rounded bg-white/10"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        </div>
                      </div>
                      {/* Bot with quick replies */}
                      <div className="flex gap-2 items-start">
                        <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                        </div>
                        <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] flex flex-col gap-1.5">
                          <div className="h-2 w-40 rounded bg-sky-400/25"></div>
                          <div className="h-2 w-32 rounded bg-sky-400/15"></div>
                          <div className="flex gap-1.5 mt-1">
                            <div className="h-5 px-2 rounded-full border border-sky-500/30 bg-sky-500/5 flex items-center">
                              <div className="w-8 h-1.5 rounded bg-sky-400/30"></div>
                            </div>
                            <div className="h-5 px-2 rounded-full border border-white/10 bg-white/5 flex items-center">
                              <div className="w-8 h-1.5 rounded bg-white/20"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Escalation indicator */}
                      <div className="mt-auto flex items-center gap-2 bg-amber-500/5 border border-amber-500/20 rounded p-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        <div className="font-mono text-[8px] text-amber-400/60 tracking-widest">ROUTING TO HUMAN AGENT</div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <div className="flex-1 h-8 rounded-full bg-white/5 border border-white/10 flex items-center px-3">
                        <div className="w-24 h-2 rounded bg-white/10"></div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[5px] border-l-sky-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Claude API | Onboarding</div>
                      <span className="text-xs font-mono text-sky-400">001</span>
                    </div>
                    <h3 className="text-3xl font-sans font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">Startup Onboarding Agent</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">
                      An AI chatbot that guides new users through a product, answers FAQs, collects key information, and routes edge cases to a human. Built with Claude API.
                    </p>
                    <div className="space-y-3 mb-8">
                      {[
                        "Guided product onboarding flow",
                        "FAQ handling with context awareness",
                        "Key information collection",
                        "Human escalation routing for edge cases",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-[#888891]">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-sky-500/30 text-sky-400 bg-sky-500/10">Claude API</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Chatbot</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Onboarding</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Snazer Voice Agent */}
            <div className="reveal-up mt-8">
              <div className="bg-[#15151A] border border-white/10 p-8 md:p-12 hover:border-teal-500/40 transition-all group relative">
                <div className="absolute top-6 right-6 bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></div>
                  Live
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Visual */}
                  <div className="w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#0a0d14] border border-white/5 relative">
                    <img src="images/repo-snazer.png" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Snazer Voice Agent" />
                  </div>

                  {/* Copy */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Neural Agent | Voice AI</div>
                      <span className="text-xs font-mono text-teal-400">002</span>
                    </div>
                    <h3 className="text-3xl font-sans font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">Snazer Voice Agent</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">
                      A sophisticated AI voice terminal merging brutalist geometry with fluid glassmorphism. Functional density with a monospace cryptographic hierarchy — designed to feel like a live data stream for voice-driven neural agents.
                    </p>
                    <div className="space-y-3 mb-8">
                      {[
                        "Real-time voice command processing",
                        "Monospace cryptographic UI hierarchy",
                        "Live telemetry HUD with performance metrics",
                        "Brutalist geometry meets fluid glassmorphism",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-[#888891]">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-teal-500/30 text-teal-400 bg-teal-500/10">Voice AI</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Neural Agent</span>
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/50">Automation</span>
                    </div>
                    <a href="https://snazer.gumroad.com/l/ftimbb" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-6 py-3 rounded-full hover:bg-teal-500 hover:border-teal-500 transition-colors inline-block">View Project ↗</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Interactive Guides Carousel */}
        <section id="guides" className="py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal gap-6">
              <div>
                <div className="uppercase tracking-[0.3em] text-[#F97316] font-bold text-xs mb-4">Interactive Directory</div>
                <h2 className="font-serif italic text-4xl md:text-6xl text-white">London Coffee.</h2>
              </div>
              <a href="https://cedar-187.faces.site/fa30p8mk6v1j" target="_blank" className="border-b border-white/30 pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-[#F97316] hover:border-[#F97316] transition-colors pb-2 hover-target">
                View Live Map ↗
              </a>
            </div>

            <div className="relative w-full reveal-up">
              <div className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">☕️</div>
                      <span className="text-xs font-mono text-[#F97316]">001</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Covent Garden</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Monmouth Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">One of London's most revered independent roasters. Expect perfectly pulled espresso, single-origin pourover, and a queue that's always worth the wait.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">☕️</div>
                      <span className="text-xs font-mono text-[#F97316]">002</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Fitzrovia</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Attendant Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Tucked into a beautifully converted Victorian underground toilet. Exceptional flat whites and a cosy, characterful atmosphere unlike anywhere else.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🏢</div>
                      <span className="text-xs font-mono text-[#F97316]">003</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Soho</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Department of Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">A Soho staple with serious beans, great food, and a relaxed buzz. Perfect for a morning meeting or solo work session with outstanding brews.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Café</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🎵</div>
                      <span className="text-xs font-mono text-[#F97316]">004</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Oxford Street</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Notes Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Specialty coffee by day, wine bar by night. A sophisticated spot with direct-trade beans and a beautiful storefront that's perfect for people watching.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">☀️</div>
                      <span className="text-xs font-mono text-[#F97316]">005</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Fitzrovia</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Kaffeine</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Widely considered one of the leading coffee shops in London, Kaffeine brings an Australian-style devotion to quality, speed, and hospitality.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Australian-Style</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">⚡️</div>
                      <span className="text-xs font-mono text-[#F97316]">006</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Soho</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Nude Espresso</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Artisan coffee roasters since 2008. Their Soho shop is a minimalist haven for coffee purists, focusing on ethical sourcing and brewing precision.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Roastery Café</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🎖</div>
                      <span className="text-xs font-mono text-[#F97316]">007</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Holborn</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Prufrock Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">A multi-award-winning café and training hub. Co-founded by a former World Barista Champion, an absolute destination for espresso lovers.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🥐</div>
                      <span className="text-xs font-mono text-[#F97316]">008</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Marylebone</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Gail's Bakery</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Beyond the legendary sourdough and cinnamon buns, Gail's serves a curated selection of house-blend coffee in a bright, bustling setting.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Bakery Café</div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Bottom Ticker */}
        <div className="w-full overflow-hidden mt-12 bg-[#F5F5F7] z-20 relative">
          <div className="ticker-wrap bottom shadow-2xl skew-y-2 py-3">
            <div className="ticker-content pt-1 flex gap-8 items-center w-max animate-[ticker_30s_linear_infinite]">
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION: DEMOS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="demos" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#0D0D12] via-[#0d0f12] to-[#0D0D12]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 reveal">
              <div className="uppercase tracking-[0.3em] text-sky-400 font-bold text-xs mb-4">DEMOS // SEE IT LIVE</div>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white mb-4">Watch It<br />Work.</h2>
              <p className="text-[#888891] text-base md:text-lg max-w-2xl leading-relaxed">
                Four live recordings of the system in action. No slides, no pitch — just the actual tools running real tasks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-up">
              {[
                {
                  num: "01",
                  src: "/demo-4.mp4",
                  title: "Severus OS — Mission Control",
                  desc: "Full walkthrough of the Overwatch dashboard: live kanban, agent registry, swarm runner, and London map. Everything the agency runs on, in one screen.",
                  accent: "sky",
                },
                {
                  num: "02",
                  src: "/demo-2.mp4",
                  title: "Multi-Agent Campaign Audit",
                  desc: "Watch GA4 auditor, creative auditor, and compliance auditor run in parallel on a live campaign — each agent logs its findings in real time.",
                  accent: "emerald",
                },
                {
                  num: "03",
                  src: "/demo-3.mp4",
                  title: "System Architecture Walkthrough",
                  desc: "The flow visualiser explained: how a client request moves from trigger to output, which agents handle what, and how the data store connects everything.",
                  accent: "violet",
                },
                {
                  num: "04",
                  src: "/portswigger-demo.mp4",
                  title: "AI Legal Pioneer — PortSwigger Submission",
                  desc: "The dual-LLM contract review pipeline in action: Claude drafts the risk analysis, Gemini cross-checks for bias. Submitted to PortSwigger's AI Legal Pioneer competition.",
                  accent: "rose",
                },
              ].map(demo => (
                <div key={demo.num} className={`bg-[#15151A] border border-white/10 hover:border-${demo.accent}-500/30 transition-all group overflow-hidden`}>
                  <div className="relative aspect-video bg-black">
                    <video
                      src={demo.src}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                      playsInline
                    />
                    <div className={`absolute top-3 left-3 font-mono text-[10px] text-${demo.accent}-400 bg-${demo.accent}-500/10 border border-${demo.accent}-500/20 px-2 py-0.5 rounded pointer-events-none`}>
                      DEMO {demo.num}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`font-sans font-bold text-white mb-2 group-hover:text-${demo.accent}-400 transition-colors`}>{demo.title}</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">{demo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 text-center reveal">
          <h2 className="font-sans font-black text-5xl md:text-[8vw] uppercase tracking-tighter leading-none mb-12 hover-target">
            Initialize <br />
            <span className="font-serif italic text-outline lowercase text-[#F97316]">Sequence.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 w-full max-w-2xl mx-auto px-4">
            <a href="mailto:idris.bakare92@outlook.com" className="w-full md:w-auto hover-target inline-block bg-white text-black font-bold uppercase tracking-widest px-12 py-6 rounded-full text-lg hover:bg-[#F97316] hover:text-white transition-colors duration-300">
              Send Signal
            </a>
            <a href="https://snazer.gumroad.com/l/ftimbb" target="_blank" className="w-full md:w-auto hover-target inline-flex items-center justify-center gap-3 border border-white/20 bg-[#15151A]/50 backdrop-blur-md text-white font-bold uppercase tracking-widest px-12 py-6 rounded-full text-lg hover:border-[#F97316] hover:text-[#F97316] transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-current stroke-2">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Free Digital Guide
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 flex justify-between items-center border-t border-white/10 text-xs text-[#888891] font-mono uppercase tracking-widest">
          <div>© 2026 Idris Bakare</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Nominal
          </div>
        </footer>

      </div>

      {/* Cinematic Video Lightbox */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0D0D12]/98 backdrop-blur-3xl overflow-y-auto w-full transition-opacity duration-500 animate-in fade-in">
          <div className="min-h-screen flex flex-col items-center py-24 px-6 md:px-12 relative w-full">
            <button onClick={() => setIsVideoOpen(false)} className="fixed top-8 right-8 z-[110] text-white hover:text-purple-400 font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors hover-target">
              [CLOSE]
            </button>
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="font-serif italic text-4xl md:text-6xl text-white mb-16 text-center border-b border-white/10 pb-8">Video Archive.</h2>
              <div className="space-y-32">
                {ytLinks.map((id, index) => (
                  <div key={id} className="video-wrapper w-full relative aspect-video bg-black rounded-sm border border-white/10 shadow-2xl overflow-hidden reveal-video animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white/50 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">SEQ // 00{index + 1}</div>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`} title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 z-0 border-0"></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cinematic UX Slide Viewer Lightbox */}
      {isUxOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0D0D12]/98 backdrop-blur-3xl overflow-y-auto w-full transition-opacity duration-500 animate-in fade-in">
          <div className="min-h-screen flex flex-col items-center py-24 px-6 md:px-12 relative w-full">
            <button onClick={() => setIsUxOpen(false)} className="fixed top-8 right-8 z-[110] text-white hover:text-[#F97316] font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors hover-target">
              [CLOSE]
            </button>
            <div className="w-full max-w-6xl mx-auto">
              <h2 className="font-serif italic text-4xl md:text-6xl text-white mb-16 text-center border-b border-white/10 pb-8">UX Case Studies.</h2>
              <div className="space-y-32">
                {pdfFiles.map((pdf, index) => (
                  <div key={pdf.name} className="reveal-ux animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
                    <h4 className="font-sans font-bold text-xl uppercase tracking-widest text-[#F97316] mb-6">00{index + 1} // {pdf.name}</h4>
                    <div className="w-full relative aspect-[4/3] md:aspect-[16/9] bg-white/5 rounded-sm border border-white/10 shadow-2xl p-2">
                      <iframe src={pdf.file} className="w-full h-full rounded-sm border-0" title={pdf.name}></iframe>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fintech Design Strategy — Full Showcase */}
              <div className="mt-40 border-t border-white/10 pt-16">
                <div className="mb-16">
                  <div className="text-xs font-mono text-emerald-400 tracking-widest mb-4">004 // PRODUCT DESIGN</div>
                  <h3 className="font-serif italic text-4xl md:text-6xl text-white mb-4">Fintech Design Strategy.</h3>
                  <p className="text-[#888891] text-base md:text-lg max-w-3xl leading-relaxed mb-4">
                    A comprehensive multi-direction design exploration for a next-generation fintech platform. Three distinct visual identities — each grounded in competitive analysis, user psychology, and regulatory UX patterns — were developed from a single product requirements document to stress-test brand positioning across radically different market segments.
                  </p>
                  <p className="text-[#888891] text-sm max-w-3xl leading-relaxed">
                    Each direction includes a full PRD, mobile screen flows (pricing, tier selection, fee calculators, checkout, crypto portfolio, and security screens), a tailored colour palette, and component-level specifications. The strategy was synthesised using AI-assisted design tooling to rapidly iterate on layout, hierarchy, and interaction patterns at scale.
                  </p>
                </div>

                {/* Strategy Document Header */}
                <div className="bg-white/[0.03] border border-white/10 rounded-sm p-8 mb-16">
                  <h4 className="font-sans font-bold text-lg text-white mb-2">Fintech Design Strategy: Three Directions</h4>
                  <p className="text-[#888891] text-sm leading-relaxed mb-6">
                    This document establishes three design directions for a modern fintech product, each targeting a distinct market position and user psychology. The strategy was developed to present stakeholders with clear, contrasting approaches to visual identity, interaction patterns, and brand positioning.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="border border-white/5 p-4 bg-white/[0.02]">
                      <span className="font-mono text-[#39ff14] block mb-1">1. Neon Cyber (Dark &amp; Tech-Forward)</span>
                      <span className="text-[#888891]">Aggressive, crypto-native aesthetic with high-energy data visualisation</span>
                    </div>
                    <div className="border border-white/5 p-4 bg-white/[0.02]">
                      <span className="font-mono text-[#10b981] block mb-1">2. Soft Neo-Mint (Clean &amp; Approachable)</span>
                      <span className="text-[#888891]">Trust-first retail banking UI with progressive disclosure and friendly hierarchy</span>
                    </div>
                    <div className="border border-white/5 p-4 bg-white/[0.02]">
                      <span className="font-mono text-[#818cf8] block mb-1">3. Nordic Trust (Institutional &amp; Premium)</span>
                      <span className="text-[#888891]">Enterprise wealth management with compliance-first design and restrained elegance</span>
                    </div>
                  </div>
                </div>

                {/* Design Directions — Full Detail */}
                <div className="space-y-32">
                  {fintechDesigns.map((design, index) => (
                    <div
                      key={design.name}
                      className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                      style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
                    >
                      {/* Direction Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: design.color }}></div>
                        <div className="text-xs font-mono tracking-widest" style={{ color: design.color }}>
                          DIRECTION 00{index + 1}
                        </div>
                        <div className="flex-1 h-px bg-white/10"></div>
                        <div className="font-mono text-xs px-3 py-1 rounded-full border text-white" style={{ borderColor: design.color + '40', backgroundColor: design.color + '15' }}>
                          {design.tag}
                        </div>
                      </div>

                      {/* Two-column: PRD + Preview Image */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* PRD Document */}
                        <div className="bg-white/[0.03] border border-white/10 rounded-sm p-8">
                          <h4 className="font-sans font-bold text-2xl md:text-3xl text-white mb-2">{design.name}</h4>
                          <div className="text-xs font-mono tracking-widest text-white/30 mb-6">PRODUCT REQUIREMENTS DOCUMENT</div>

                          <div className="space-y-6">
                            <div>
                              <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-2" style={{ color: design.color }}>Product Overview</h5>
                              <p className="text-[#888891] text-sm leading-relaxed">{design.overview}</p>
                            </div>

                            <div>
                              <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-2" style={{ color: design.color }}>Design Philosophy</h5>
                              <p className="text-[#888891] text-sm leading-relaxed">{design.designPhilosophy}</p>
                            </div>

                            <div>
                              <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-2" style={{ color: design.color }}>Key Features</h5>
                              <ul className="space-y-2">
                                {design.keyFeatures.map((feature, fIdx) => (
                                  <li key={fIdx} className="text-[#888891] text-sm flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: design.color }}></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-2" style={{ color: design.color }}>Typography</h5>
                              <p className="text-[#888891] text-sm leading-relaxed">{design.typography}</p>
                            </div>
                          </div>
                        </div>

                        {/* Preview Image */}
                        <div className="bg-black border border-white/10 rounded-sm overflow-hidden relative group">
                          <img
                            src={design.image}
                            alt={`${design.name} — Design Preview`}
                            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <div className="font-mono text-xs text-white/50">DESIGN PREVIEW</div>
                          </div>
                        </div>
                      </div>

                      {/* Colour Palette */}
                      <div className="mb-12">
                        <div className="text-xs font-mono tracking-widest text-white/30 mb-4">COLOUR PALETTE</div>
                        <div className="flex gap-2">
                          {design.palette.map((swatch, sIdx) => (
                            <div key={sIdx} className="group/swatch flex flex-col items-center gap-2">
                              <div
                                className="w-12 h-12 md:w-16 md:h-16 rounded-sm border border-white/10 transition-transform group-hover/swatch:scale-110"
                                style={{ backgroundColor: swatch }}
                              ></div>
                              <span className="font-mono text-[10px] text-white/30">{swatch}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Annotated Screen Flows */}
                      <div>
                        <div className="text-xs font-mono tracking-widest text-white/30 mb-6">ANNOTATED SCREEN FLOWS</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                          {design.screens.map((screen, sIdx) => (
                            <div key={sIdx} className="group/screen">
                              {/* Mini phone mockup */}
                              <div
                                className="aspect-[9/16] rounded-xl border-2 p-3 mb-3 transition-all group-hover/screen:scale-105"
                                style={{ borderColor: design.color + '30', backgroundColor: design.bgColor + '10' }}
                              >
                                <div className="w-full h-full rounded-lg overflow-hidden flex flex-col gap-2 p-2" style={{ backgroundColor: design.bgColor }}>
                                  {/* Status bar */}
                                  <div className="flex justify-between items-center px-1">
                                    <div className="w-6 h-1 rounded-full" style={{ backgroundColor: design.color + '40' }}></div>
                                    <div className="flex gap-1">
                                      <div className="w-2 h-1 rounded-full" style={{ backgroundColor: design.color + '30' }}></div>
                                      <div className="w-2 h-1 rounded-full" style={{ backgroundColor: design.color + '30' }}></div>
                                    </div>
                                  </div>
                                  {/* Screen content wireframe */}
                                  <div className="w-3/4 h-2 rounded-sm mt-2" style={{ backgroundColor: design.color + '25' }}></div>
                                  <div className="w-1/2 h-1.5 rounded-sm" style={{ backgroundColor: design.color + '15' }}></div>
                                  <div className="flex-1 rounded-md mt-1" style={{ backgroundColor: design.color + '08' }}></div>
                                  <div className="w-full h-6 rounded-md" style={{ backgroundColor: design.color + '20' }}></div>
                                  <div className="flex gap-1">
                                    <div className="flex-1 h-4 rounded-sm" style={{ backgroundColor: design.color + '10' }}></div>
                                    <div className="flex-1 h-4 rounded-sm" style={{ backgroundColor: design.color + '10' }}></div>
                                  </div>
                                  <div className="flex-1 rounded-md" style={{ backgroundColor: design.color + '06' }}></div>
                                  {/* Bottom nav */}
                                  <div className="flex justify-around pt-1 border-t" style={{ borderColor: design.color + '15' }}>
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: design.color + '20' }}></div>
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: design.color + '40' }}></div>
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: design.color + '20' }}></div>
                                  </div>
                                </div>
                              </div>
                              {/* Annotation */}
                              <div className="font-mono text-xs font-bold mb-1" style={{ color: design.color }}>{screen.name}</div>
                              <p className="text-[#888891] text-[11px] leading-relaxed">{screen.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
