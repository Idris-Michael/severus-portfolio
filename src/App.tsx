import React, { useEffect, useRef, useState, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink, Terminal, Cpu, Box, Workflow, Briefcase,
  ChevronRight, Play, Database, LayoutDashboard,
  Bot, Zap, Code2, Shield, ArrowUpRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Three.js error boundary ───────────────────────────────────────────────
class ThreeErrorBoundary extends Component<{ children: React.ReactNode }, { crashed: boolean }> {
  constructor(props: any) { super(props); this.state = { crashed: false }; }
  static getDerivedStateFromError() { return { crashed: true }; }
  render() {
    if (this.state.crashed) return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-40 h-40 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center">
          <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_32px_rgba(52,211,153,0.9)]" />
        </div>
      </div>
    );
    return this.props.children;
  }
}

const SystemCoreNode = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={1} />
    <directionalLight position={[10, 10, 5]} intensity={2} color="#4ade80" />
    <directionalLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />
    <Sphere args={[1, 64, 64]} scale={2.2}>
      <MeshDistortMaterial
        color="#020403"
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.9}
        roughness={0.1}
        distort={0.4}
        speed={2}
      />
    </Sphere>
    <Environment preset="city" />
  </Float>
);

// ─── Data ──────────────────────────────────────────────────────────────────
const AGENTS = [
  { name: 'audit-google', desc: '74-check Google Ads audit. Conversion tracking, wasted spend, PMax, Quality Score. Outputs scored report + action plan.' },
  { name: 'creative-strategist', desc: 'Brand profile + audit data → campaign concepts and messaging pillars across Meta, Google, LinkedIn, TikTok.' },
  { name: 'copy-writer', desc: 'Platform-compliant ad copy within exact character limits. Validates counts before writing a single word.' },
  { name: 'audit-tracking', desc: 'Pixel install, server-side tracking, event config, attribution audit across LinkedIn, TikTok, Microsoft.' },
  { name: 'audit-budget', desc: 'Budget allocation, bidding strategies, learning phase health, audience targeting across all platforms.' },
  { name: 'visual-designer', desc: 'Brand brief → image generation prompts → platform-spec assets, organised per format.' },
];

const RULES = [
  { n: '01', title: 'Think Before Acting', body: 'State assumptions. Ask when uncertain. Push back when a simpler path exists.' },
  { n: '02', title: 'Surgical Changes Only', body: "Touch only what's needed. Match existing patterns. Never refactor adjacent code." },
  { n: '03', title: 'Goal-Driven Execution', body: "Define success criteria first. Loop until verified. Don't follow steps blindly." },
  { n: '04', title: 'Token Budgets Are Hard Limits', body: '4,000 tokens per task. Surfaces the breach. Never silently overruns.' },
  { n: '05', title: 'Fail Loud', body: '"Completed" is wrong if anything was skipped silently. Default to surfacing uncertainty.' },
];

const SKILLS = [
  'hyperframes','ads-google','ads-meta','ads-linkedin','ads-tiktok','ads-youtube',
  'n8n','impeccable','remotion','firecrawl','playwright','obsidian-cli',
  'claude-mem','pro-workflow','gsap','smithery-ai-cli','daily','ads-audit',
  'ads-budget','ads-creative','ads-generate','ads-plan','ads-competitor',
  'notebooklm','json-canvas','skill-creator','tldr','gepeto',
];

const AUTOMATIONS = [
  'Lead intake → AI scoring → CRM + Slack DM',
  'Deal Won → full onboarding pipeline fires',
  'Monday 08:00 → weekly report auto-generated',
  '30-day check → ROAS ≥ 2× → upsell sequence',
];

const SERVICES = [
  { name: 'GA4 Analytics Setup', price: 'From £300', desc: 'Property rebuild, GTM, enhanced ecommerce, goals, attribution' },
  { name: 'AI Shopping Ads', price: 'From £400', desc: 'PMax + Shopping + Smart Bidding with tROAS strategy' },
  { name: 'AI Performance Ads', price: 'From £350', desc: 'Full account restructure, copy, creative direction, reporting' },
  { name: 'Workflow Automation', price: 'From £300', desc: 'n8n workflows for lead intake, onboarding, reporting, retention' },
];

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isUxOpen, setIsUxOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.hero-stagger',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
      if (bentoRef.current) {
        gsap.fromTo('.bento-item',
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: bentoRef.current, start: 'top 80%' } }
        );
      }
      gsap.fromTo('.agency-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '#agency', start: 'top 75%' } }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#030805] text-[#E0E0E0] font-sans selection:bg-emerald-500/30 selection:text-emerald-200">

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-amber-500/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* ── NAV ── */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 border border-white/10 flex items-center gap-8 shadow-2xl backdrop-blur-xl">
        <div className="font-mono font-bold text-white tracking-widest text-sm flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          SEVERUS
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/50 font-medium">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#agency" className="hover:text-white transition-colors">Agency</a>
          <a href="#lab" className="hover:text-white transition-colors">Lab</a>
        </div>
        <a href="mailto:michaelbakare92@gmail.com"
          className="bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:bg-emerald-400 transition-colors">
          Initialize
        </a>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-12 z-10 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="hero-stagger inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full w-max text-xs font-mono font-bold text-white/60">
              <Terminal size={14} className="text-emerald-400" />
              SYSTEM.ACTIVE_SESSION &gt; IDRIS_BAKARE
            </div>
            <h1 className="hero-stagger font-serif italic text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-white tracking-tight">
              AI Integrator.<br />
              <span className="text-emerald-400">Agentic Dev.</span>
            </h1>
            <p className="hero-stagger text-[#888891] text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Designing modular systems, intelligent architectures, and automated pipelines for startups that are ready to scale without bloat.
            </p>
            <div className="hero-stagger flex flex-wrap gap-4 mt-4">
              <button onClick={() => setIsUxOpen(true)}
                className="flex items-center gap-2 bg-[#0f1a0f] hover:bg-[#1a2e1a] text-white border border-white/10 px-6 py-3 rounded-xl font-semibold transition-all hover:border-emerald-500/50">
                <LayoutDashboard size={18} />
                UX Strategy
              </button>
              <button onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 bg-white hover:bg-emerald-400 text-black px-6 py-3 rounded-xl font-bold transition-colors">
                <Play size={18} fill="currentColor" />
                Play Archive
              </button>
            </div>
          </div>
          <div className="hero-stagger h-[50vh] lg:h-[80vh] w-full relative">
            <ThreeErrorBoundary>
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <SystemCoreNode />
              </Canvas>
            </ThreeErrorBoundary>
          </div>
        </div>
      </section>

      {/* ── WORK / BENTO ── */}
      <section id="work" ref={bentoRef} className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto z-10 relative">
        <div className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#888891] mb-2">01 // Modules</h2>
          <h3 className="font-serif italic text-4xl md:text-5xl text-white">Live Operations.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[340px]">

          {/* AI Product Sprints — 2×2 */}
          <div className="bento-item bento-card md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-[#0d1a0d] to-[#080d08] p-8 flex flex-col justify-between group hover:border-emerald-500/30">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Workflow size={20} />
                </div>
                <div className="border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-mono text-[10px] px-2 py-1 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  PHASE 1
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">AI Product Sprints</h4>
              <p className="text-[#888891] text-sm leading-relaxed max-w-sm mb-6">
                Zero to one product strategy, UX, and UI direction shipped in cycles. Delivered inside custom Claude + Gemini architecture environments using Google Stitch.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Claude Code', 'Gemini', 'Google Stitch', 'Figma', 'System Design'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-white/10 bg-white/5 text-white/50 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
            <div className="h-40 w-full rounded-xl bg-black border border-white/5 relative overflow-hidden mt-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black" />
              <div className="absolute bottom-4 left-6 right-6 flex gap-2">
                <div className="h-1 flex-1 bg-emerald-500/40 rounded shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <div className="h-1 flex-1 bg-white/10 rounded" />
                <div className="h-1 flex-1 bg-white/10 rounded" />
              </div>
            </div>
          </div>

          {/* AI Legal Pioneer — 2×1 */}
          <div className="bento-item bento-card md:col-span-2 lg:col-span-2 row-span-1 bg-[#120a0a] p-6 flex flex-col justify-between group hover:border-rose-500/30">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Shield size={16} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-rose-400/60 uppercase tracking-widest">PortSwigger Submission</span>
                  <a href="https://github.com/snazerros" target="_blank" rel="noreferrer"
                    className="text-white/20 hover:text-rose-400 transition-colors">
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">AI Legal Pioneer</h4>
              <p className="text-[#888891] text-xs leading-relaxed max-w-lg">
                Contract review pipeline: Claude (Architect) + Gemini (Auditor) dual-LLM system. Legal team owns the AI behaviour via plain Markdown. Every decision traces to a policy rule. Anything unmapped escalates — never guesses. 30-second review vs 30 minutes. &lt;£0.01 per contract.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Claude', 'Gemini', 'Python', 'NotebookLM', 'Obsidian'].map(tag => (
                <span key={tag} className="text-[10px] font-mono border border-white/10 bg-white/5 text-white/50 px-2 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </div>

          {/* AI Architect */}
          <div className="bento-item bento-card md:col-span-1 lg:col-span-1 row-span-1 bg-[#0e0a14] p-6 flex flex-col justify-between group hover:border-purple-500/30">
            <div>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Cpu size={16} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">AI Architect</h4>
              <p className="text-[#888891] text-xs leading-relaxed">
                Deep research. Sharper decisions. Using NotebookLM and Claude to architect robust AI systems.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-purple-400">
              <span>View Brief</span>
              <ChevronRight size={14} />
            </div>
          </div>

          {/* AI Brand Kit */}
          <div className="bento-item bento-card md:col-span-1 lg:col-span-1 row-span-1 bg-[#14100a] p-6 flex flex-col justify-between group hover:border-amber-500/30">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Box size={16} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">AI Brand Kit</h4>
              <p className="text-[#888891] text-xs leading-relaxed">
                From brief to brand. 10 deliverables, zero design fees. Built entirely with AI tools.
              </p>
            </div>
            <a href="https://michaelverse453.gumroad.com/l/zasmyp" target="_blank" rel="noreferrer"
              className="mt-4 flex items-center justify-between text-[10px] font-mono text-amber-400 hover:text-white transition-colors">
              <span>Gumroad Live</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Nano Banana */}
          <div className="bento-item bento-card md:col-span-2 lg:col-span-2 row-span-1 bg-[#111] p-6 flex flex-col group hover:border-yellow-500/30">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center">
                <Database size={16} />
              </div>
              <div className="text-xs font-mono text-yellow-400/50">DATASET</div>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Nano Banana Guide</h4>
              <p className="text-[#888891] text-xs leading-relaxed max-w-[80%]">
                50 engineered prompts for photorealistic AI imagery. Image-to-video pipeline using Kling, Luma & Runway.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SEVERUS CONNECTS ── */}
      <section id="agency" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto z-10 relative">

        {/* Section header */}
        <div className="agency-reveal mb-16">
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/20 bg-[#C9A84C]/5 px-3 py-1.5 rounded-full mb-6 font-mono text-[10px] uppercase tracking-widest text-[#C9A84C]">
            <Briefcase size={12} />
            Severus Connects — London
          </div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#888891] mb-2">02 // Agency</h2>
          <h3 className="font-serif italic text-4xl md:text-6xl text-white mb-4">
            Agentic intelligence.<br />
            <span className="text-[#C9A84C]">Real results.</span>
          </h3>
          <p className="text-[#888891] text-sm md:text-base leading-relaxed max-w-2xl">
            AI agents, automated workflows, and data-driven ad management built for performance. One system handles everything from lead intake to weekly client reports.
          </p>
        </div>

        {/* Results — 4 numbers, varied sizes to avoid the metric template */}
        <div className="agency-reveal mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {[
              { val: '2.4×', label: 'ROAS delivered', sub: 'e-commerce client, 30 days' },
              { val: '-38%', label: 'CPA reduction', sub: 'post account restructure' },
              { val: '+62%', label: 'CTR improvement', sub: 'search + shopping campaigns' },
              { val: '4', label: 'live workflows', sub: 'fully automated, zero manual' },
            ].map((s, i) => (
              <div key={i} className="bg-[#030805] p-8">
                <div className="font-serif italic text-4xl md:text-5xl text-[#C9A84C] mb-2">{s.val}</div>
                <div className="text-white text-sm font-semibold mb-1">{s.label}</div>
                <div className="font-mono text-[10px] text-[#888891]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture video */}
        <div className="agency-reveal border border-white/8 bg-[#060c06] rounded-2xl overflow-hidden mb-8">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/8">
            <div className="w-2 h-2 rounded-full bg-[#C9A84C] shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#888891]">System Architecture — 45s walkthrough</span>
            <span className="ml-auto font-mono text-[10px] text-white/20">Plain English</span>
          </div>
          <div className="aspect-video w-full bg-black">
            <video className="w-full h-full object-contain" controls src="/severus-arch-video.mp4" />
          </div>
        </div>

        {/* Agent system + CLAUDE.md — side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">

          {/* Agents — wider */}
          <div className="agency-reveal lg:col-span-3 border border-white/8 bg-[#060c06] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <Bot size={14} className="text-[#C9A84C]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888891]">8 Specialist Agents</span>
            </div>
            <h4 className="font-serif italic text-2xl text-white mb-6">The agent stack</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {AGENTS.map((a, i) => (
                <div key={i} className="border border-white/5 rounded-xl p-4 hover:border-[#C9A84C]/20 transition-colors">
                  <div className="font-mono text-[11px] font-bold text-[#C9A84C] mb-2">{a.name}</div>
                  <div className="font-mono text-[10px] text-[#888891] leading-relaxed">{a.desc}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 pt-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#888891] mb-4">Audit request flow</div>
              <div className="flex flex-wrap items-center gap-2">
                {['You', 'TacticalAI', 'Gemini 2.0', 'audit-google', 'SQLite', 'Report'].map((node, i, arr) => (
                  <React.Fragment key={i}>
                    <div className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                      [0, 2, 3, 5].includes(i)
                        ? 'border-[#C9A84C]/30 bg-[#C9A84C]/8 text-[#C9A84C]'
                        : 'border-white/8 bg-white/[0.02] text-white/50'
                    }`}>{node}</div>
                    {i < arr.length - 1 && <ChevronRight size={12} className="text-white/20 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* CLAUDE.md rules */}
          <div className="agency-reveal lg:col-span-2 border border-white/8 bg-[#060c06] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <Code2 size={14} className="text-[#C9A84C]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888891]">CLAUDE.md</span>
            </div>
            <h4 className="font-serif italic text-2xl text-white mb-2">The rulebook</h4>
            <p className="text-[#888891] text-sm leading-relaxed mb-6">
              Every agent runs against a strict 12-rule instruction file. Deterministic behaviour, no hallucination drift.
            </p>
            <div className="flex flex-col gap-0">
              {RULES.map((r, i) => (
                <div key={i} className="flex gap-4 items-start py-4 border-b border-white/5 last:border-0">
                  <span className="font-mono text-[10px] text-[#C9A84C]/50 mt-0.5 shrink-0 w-6">{r.n}</span>
                  <div>
                    <div className="font-semibold text-white text-xs mb-1">{r.title}</div>
                    <div className="font-mono text-[10px] text-[#888891] leading-relaxed">{r.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills + n8n automations — side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="agency-reveal border border-white/8 bg-[#060c06] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <Zap size={14} className="text-[#C9A84C]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888891]">Skills Stack</span>
            </div>
            <h4 className="font-serif italic text-2xl text-white mb-4">55+ installed skills</h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s, i) => (
                <span key={i} className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-md font-mono text-[10px] text-[#888891] hover:border-[#C9A84C]/20 hover:text-white/70 transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="agency-reveal border border-white/8 bg-[#060c06] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <Workflow size={14} className="text-[#C9A84C]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888891]">n8n Automations</span>
            </div>
            <h4 className="font-serif italic text-2xl text-white mb-6">Nothing falls through the cracks</h4>
            <div className="flex flex-col gap-0">
              {AUTOMATIONS.map((flow, i) => (
                <div key={i} className="flex gap-4 items-start py-4 border-b border-white/5 last:border-0">
                  <span className="font-mono text-[10px] text-[#C9A84C] mt-0.5 shrink-0">0{i + 1}</span>
                  <span className="font-mono text-[12px] text-[#888891] leading-relaxed">{flow}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#888891] mb-3">Services</div>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES.map((s, i) => (
                  <div key={i} className="border border-white/5 rounded-xl p-4 hover:border-[#C9A84C]/20 transition-colors">
                    <div className="text-white text-xs font-semibold mb-1">{s.name}</div>
                    <div className="font-mono text-[10px] text-[#C9A84C] mb-2">{s.price}</div>
                    <div className="font-mono text-[10px] text-[#888891] leading-relaxed">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 md:px-12 flex justify-between items-center border-t border-white/8 text-[10px] text-white/40 font-mono uppercase tracking-widest mt-16">
        <div>© 2026 Idris-Michael Bakare</div>
        <div className="flex items-center gap-4">
          <a href="mailto:michaelbakare92@gmail.com" className="hover:text-white transition-colors">michaelbakare92@gmail.com</a>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
            System Nominal
          </div>
        </div>
      </footer>

      {/* ── MODALS ── */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6">
          <button onClick={() => setIsVideoOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white font-mono text-xs border border-white/10 px-4 py-2 rounded-full transition-colors">
            CLOSE
          </button>
          <div className="w-full max-w-5xl aspect-video bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <video className="w-full h-full object-contain" controls src="/severus-arch-video.mp4" />
          </div>
        </div>
      )}

      {isUxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto w-full py-24 px-6">
          <button onClick={() => setIsUxOpen(false)}
            className="fixed top-8 right-8 text-white/50 hover:text-white font-mono text-xs border border-white/10 px-4 py-2 rounded-full z-[110] transition-colors">
            CLOSE
          </button>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif italic text-4xl text-white mb-12 border-b border-white/10 pb-6">UX Case Studies.</h2>
            <div className="aspect-[16/9] w-full bg-[#0a0a0a] rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
              <div className="text-white/30 font-mono text-sm">Coming soon</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
