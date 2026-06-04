import { WorldNav, WorldFooter, SectionHead } from './chrome';
import { Reveal } from './Reveal';

const ACCENT = '#F97316';

const STACK = [
  { title: 'Hermes OS', tag: 'Multi-agent OS', desc: 'A custom operating system for an AI-run agency: agents, memory, permissions, telemetry on one surface.', href: '/demos/mission-control.html', cta: 'Open Mission Control' },
  { title: 'Dual-LLM Contract Review', tag: 'AI Product', desc: 'Two frontier models read a contract in parallel; agreement builds confidence, divergence flags risk.', href: '/demos/portswigger.html', cta: 'Open demo' },
  { title: '8-Agent Permission Framework', tag: 'IAM', desc: 'Role-based access control across a Pantheon of agents, with a live audit log and conflict detection.', href: '/demos/agent-stack.html', cta: 'Open demo' },
];

const DEMOS = [
  { num: '01', title: 'Mission Control', desc: 'Operations console: Kanban, CRM, live agent status, and run logs on one surface.', href: '/demos/mission-control.html', tag: 'System Arch' },
  { num: '02', title: 'Automation Node Inspector', desc: 'Eight live n8n workflows read node by node, with an animated dataflow schematic.', href: '/demos/n8n-workflows.html', tag: 'Technical UI' },
  { num: '03', title: 'Pipeline Monitor', desc: 'Live terminal plus step tracker for a four-stage content automation pipeline.', href: '/demos/severus-social.html', tag: 'DevEx' },
  { num: '04', title: 'Agent Permission Framework', desc: 'IAM matrix for 8 agents: live toggles, role viewer, conflict detection, audit log.', href: '/demos/agent-stack.html', tag: 'Enterprise IAM' },
];

const TOOLS = [
  { title: 'Severus Overwatch', desc: 'Mission-control dashboard for the agency: kanban, agent registry, swarm runner, run history.', href: 'https://github.com/Idris-Michael/severus-overwatch' },
  { title: 'Nano-Stream AI', desc: 'Real-time AI streaming infrastructure build.', href: 'https://github.com/Idris-Michael/Nano-Stream' },
  { title: 'VideoDB Auto-Clipper', desc: 'Automated long-form to short-form clipping pipeline.', href: 'https://github.com/Idris-Michael/videodb-auto-clipper' },
];

const VIDEOS = [
  { num: '01', src: '/demo-4.mp4', title: 'Severus OS — Mission Control', desc: 'Full walkthrough of the Overwatch dashboard: live kanban, agent registry, swarm runner.' },
  { num: '02', src: '/demo-2.mp4', title: 'Multi-Agent Campaign Audit', desc: 'GA4, creative, and compliance auditors running in parallel on a live campaign.' },
  { num: '03', src: '/demo-3.mp4', title: 'System Architecture Walkthrough', desc: 'How a client request moves from trigger to output across the agent stack.' },
  { num: '04', src: '/portswigger-demo.mp4', title: 'AI Legal Pioneer', desc: 'The dual-LLM contract review pipeline in action. PortSwigger competition submission.' },
];

export function BackendWorld() {
  return (
    <main className="relative z-10 min-h-screen" style={{ color: 'var(--fg)' }}>
      <WorldNav
        world="backend"
        links={[
          { href: '#stack', label: 'Stack' },
          { href: '#systems', label: 'Systems' },
          { href: '#demos', label: 'Demos' },
          { href: '#videos', label: 'Videos' },
          { href: '#contact', label: 'Contact' },
        ]}
      />

      {/* HERO */}
      <header className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 max-w-7xl mx-auto w-full">
        <Reveal as="div" className="font-mono text-[11px] tracking-[0.3em] uppercase mb-7">
          <span style={{ color: ACCENT }}>Backend</span> <span style={{ color: 'var(--muted)' }}>// Systems · AI · Automation</span>
        </Reveal>
        <Reveal as="h1" delay={80}>
          <span className="block font-serif text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight">Systems that</span>
          <span className="block font-serif italic text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight" style={{ color: ACCENT }}>run themselves.</span>
        </Reveal>
        <Reveal delay={160} className="mt-8 max-w-xl text-lg">
          <p style={{ color: 'var(--muted)' }}>
            I architect multi-agent systems, automation pipelines, and AI infrastructure. Governed, memory-persistent platforms that get work done while you sleep, not demos.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-9 flex flex-wrap gap-4">
          <a href="#systems" data-magnetic className="hover-target inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>
            See the architecture <span aria-hidden="true">→</span>
          </a>
          <a href="https://github.com/Idris-Michael" target="_blank" rel="noreferrer" data-magnetic className="hover-target inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold" style={{ color: 'var(--fg)', border: '1px solid var(--line)' }}>
            GitHub
          </a>
        </Reveal>
      </header>

      {/* STACK */}
      <section id="stack" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="The stack" title="Agentic systems." lead="The platforms and AI products I have designed and shipped." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STACK.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover-target group flex flex-col gap-3 p-7 rounded-2xl h-full transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: ACCENT }}>{s.tag}</span>
                <h3 className="font-serif text-2xl leading-snug">{s.title}</h3>
                <p className="text-sm flex-1" style={{ color: 'var(--muted)' }}>{s.desc}</p>
                <div className="font-mono text-[11px] uppercase tracking-widest pt-1" style={{ color: ACCENT }}>{s.cta} →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SYSTEMS — Architecture Visualiser (kept) */}
      <section id="systems" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="System architecture" title="See it move." lead="A live, interactive map of how a client request flows from lead to delivery." />
        <Reveal className="rounded-2xl overflow-hidden" >
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--line)' }}>
              <span className="flex gap-1.5"><i className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#f87171' }} /><i className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#fbbf24' }} /><i className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#34d399' }} /></span>
              <span className="font-mono text-[11px]" style={{ color: 'var(--muted)' }}>system-architecture · interactive</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest" style={{ color: ACCENT }}>Click to explore</span>
            </div>
            <iframe src="/system-architecture.html" title="System Architecture Visualiser" className="w-full" style={{ height: 520, border: 'none', background: '#141414', display: 'block' }} />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {TOOLS.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <a href={t.href} target="_blank" rel="noreferrer" className="hover-target block p-6 rounded-2xl h-full" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <h3 className="font-serif text-xl mb-2">{t.title}</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{t.desc}</p>
                <div className="font-mono text-[11px] uppercase tracking-widest mt-4" style={{ color: ACCENT }}>View source →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Interactive demos" title="Operational tooling." lead="Live product demos for systems, automation, and AI operations." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DEMOS.map((d, i) => (
            <Reveal key={d.num} delay={i * 70}>
              <a href={d.href} target="_blank" rel="noreferrer" className="hover-target group flex flex-col gap-3 p-6 rounded-2xl h-full transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>{d.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ color: ACCENT, background: 'rgba(249,115,22,0.1)' }}>{d.tag}</span>
                </div>
                <h3 className="font-serif text-xl leading-snug">{d.title}</h3>
                <p className="text-sm flex-1" style={{ color: 'var(--muted)' }}>{d.desc}</p>
                <div className="font-mono text-[11px] uppercase tracking-widest pt-1" style={{ color: ACCENT }}>Open demo →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO WALKTHROUGHS */}
      <section id="videos" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Recorded walkthroughs" title="Watch it work." lead="No slides. The actual systems running real tasks." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.num} delay={i * 70}>
              <div className="rounded-2xl overflow-hidden h-full" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="relative aspect-video" style={{ background: '#000' }}>
                  <video src={v.src} controls preload="metadata" playsInline className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded pointer-events-none" style={{ color: ACCENT, background: 'rgba(0,0,0,0.6)' }}>Demo {v.num}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">{v.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WorldFooter />
    </main>
  );
}
