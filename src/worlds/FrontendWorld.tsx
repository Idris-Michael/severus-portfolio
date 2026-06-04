import { WorldNav, WorldFooter, SectionHead } from './chrome';
import { Reveal } from './Reveal';

const ACCENT = '#F97316';

const WORK = [
  { title: 'UI / UX Design', tag: 'Product Design', desc: 'End-to-end interface design: research, flows, hi-fi UI, and shipped front-ends. From discovery through to deployed product.', gradient: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)', glyph: '◈', href: 'https://github.com/Idris-Michael' },
  { title: 'Front-End Builds', tag: 'React · TypeScript', desc: 'Production React and TypeScript builds with motion, WebGL, and design systems. Severus Overwatch is one example.', gradient: 'linear-gradient(135deg,#0d0d0d 0%,#1a0a00 50%,#2d1500 100%)', glyph: '⬡', href: 'https://github.com/Idris-Michael/severus-overwatch' },
  { title: 'AI Video & Motion', tag: 'Creative', desc: 'Generative video pipelines, automated clipping, and motion direction. Built on VideoDB and custom render pipelines.', gradient: 'linear-gradient(135deg,#050510 0%,#0a0a1f 50%,#0d0d2e 100%)', glyph: '▶', href: 'https://github.com/Idris-Michael' },
];

const DEMOS = [
  { num: '01', title: 'GA4 Audit Dashboard', desc: 'B2B analytics portal: 3 switchable client states, live charts, severity-sorted findings.', href: '/demos/ga4-audit.html', tag: 'B2B SaaS' },
  { num: '02', title: 'GA4 Companion', desc: 'The audit tool as a shipped mobile app. Health ring, bottom-sheet findings, client switcher.', href: '/demos/ga4-mobile.html', tag: 'Mobile' },
  { num: '03', title: 'Triple-Tool Flywheel', desc: 'Three content tools unified into one flywheel with automatic output-to-input handoffs.', href: '/demos/triple-tool.html', tag: 'Ecosystem UX' },
  { num: '04', title: 'Pipeline Command', desc: 'A mobile control surface for an automation pipeline. Approve, trigger, monitor.', href: '/demos/pipeline-mobile.html', tag: 'Mobile' },
  { num: '05', title: 'Dual-LLM Review', desc: 'Claude and Gemini read a contract in parallel; agreement and divergence surfaced as signal.', href: '/demos/portswigger.html', tag: 'AI Product' },
  { num: '06', title: 'Design Token Playbook', desc: 'Live token-tuning workspace: sliders drive CSS vars, a component library updates in real-time, right panel prints the code.', href: '/demos/token-playbook.html', tag: 'Design Systems' },
  { num: '07', title: 'AI Flow Builder', desc: 'Drag agent nodes, connect them, trigger flows. Token budget ceilings enforce guardrails live. Click any node to inspect its manifest.', href: '/demos/ai-flow-builder.html', tag: 'AI Systems UX' },
  { num: '08', title: 'Video Splicer', desc: 'Three-column video editor. Drag scenes to reorder, type a command to transform the player, click captions for micro-interaction controls.', href: '/demos/video-splicer.html', tag: 'Creative Tools' },
  { num: '09', title: 'Figma Variant Comparator', desc: 'A/B design variant review in a Figma-style inspector. Significance bar, Wilson score, winner declaration with confetti.', href: '/demos/figma-ab-variant.html', tag: 'Figma · A/B' },
  { num: '10', title: 'Figma Prototype Flow', desc: 'Two clickable user flows with glowing hotspot navigation. Completion rate comparison and results export.', href: '/demos/figma-prototype-flow.html', tag: 'Figma · UX' },
  { num: '11', title: 'Stitch Component Gen', desc: 'Prompt → 3 AI variants → select two → simulate a 7-day A/B test with live metrics. Google Stitch aesthetic.', href: '/demos/stitch-ab-gen.html', tag: 'Stitch · AI' },
  { num: '12', title: 'Stitch Landing Builder', desc: 'Two AI landing page variants in phone frames with funnel metrics, prompt-edit, and winner badge.', href: '/demos/stitch-landing-builder.html', tag: 'Stitch · A/B' },
];

const PRODUCTS = [
  { title: 'AI Influencer Starter Kit', price: '£9.99', desc: 'A complete kit for launching a consistent AI persona across platforms.', buy: 'https://michaelverse453.gumroad.com/l/zasmyp', live: 'https://ai-influencer-starter-kit.netlify.app' },
  { title: 'Nano Banana Guide', price: 'Guide', desc: 'A practical guide to Google’s image model for production creative.', buy: 'https://michaelverse453.gumroad.com/l/nanobanana-guide', live: 'https://nanobanana-guide.netlify.app' },
];

const FINTECH = [
  { name: 'Neon Cyber', tag: 'Dark · Crypto', img: 'images/fintech-neon-cyber.png', desc: 'High-energy fintech terminal for digital-native traders.' },
  { name: 'Soft Neo-Mint', tag: 'Light · Retail', img: 'images/fintech-soft-neo-mint.png', desc: 'Clean, approachable retail banking built on soft mint tones.' },
  { name: 'Nordic Trust', tag: 'Institutional', img: 'images/fintech-nordic-trust.png', desc: 'Premium wealth-management language in deep navy and indigo.' },
];

const CASE_STUDIES = [
  { name: 'Barbershop App', tag: 'UX Case Study', file: 'barbershop-ux-case-study.pdf' },
  { name: 'Dynamic Fitness App', tag: 'UX Case Study', file: 'dynamic-fitness-ux-case-study.pdf' },
  { name: 'Portfolio Project 1', tag: 'Case Study', file: 'portfolio-project-1.pdf' },
  { name: 'Dog Walker App', tag: 'UX Case Study', file: 'dog-walker-ux-case-study.pdf' },
];

function PhoneEnv({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="rounded-[44px] overflow-hidden"
        style={{
          width: 240,
          height: 490,
          background: 'linear-gradient(160deg,#2a2a2a 0%,#1a1a1a 60%,#222 100%)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.1),0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <iframe
          src={src}
          title={label}
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: 44 }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{label}</span>
    </div>
  );
}

export function FrontendWorld() {
  return (
    <main className="relative z-10 min-h-screen" style={{ color: 'var(--fg)' }}>
      <WorldNav
        world="frontend"
        links={[
          { href: '#work', label: 'Work' },
          { href: '#phone-live', label: 'Live Preview' },
          { href: '#demos', label: 'Demos' },
          { href: '#products', label: 'Products' },
          { href: '#case-studies', label: 'Cases' },
          { href: '#contact', label: 'Contact' },
        ]}
      />

      {/* HERO */}
      <header className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 max-w-7xl mx-auto w-full">
        <Reveal as="div" className="font-mono text-[11px] tracking-[0.3em] uppercase mb-7" >
          <span style={{ color: ACCENT }}>Frontend</span> <span style={{ color: 'var(--muted)' }}>// Design · UI · Interface</span>
        </Reveal>
        <Reveal as="h1" delay={80}>
          <span className="block font-serif text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight">Interfaces</span>
          <span className="block font-serif italic text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight" style={{ color: ACCENT }}>that ship.</span>
        </Reveal>
        <Reveal delay={160} className="mt-8 max-w-xl text-lg" >
          <p style={{ color: 'var(--muted)' }}>
            Product designer and front-end engineer. I research, design, and build interfaces in React and TypeScript, then ship them as real, interactive products.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-9 flex flex-wrap gap-4">
          <a href="#demos" data-magnetic className="hover-target inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>
            See the work <span aria-hidden="true">→</span>
          </a>
          <a href="https://8f0385f1-idris-michael-bakare-digital-cv-portfolio.netlify.app/" target="_blank" rel="noreferrer" data-magnetic className="hover-target inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold" style={{ color: 'var(--fg)', border: '1px solid var(--line)' }}>
            View CV
          </a>
        </Reveal>
      </header>

      {/* WORK */}
      <section id="work" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Selected work" title="What I make." lead="Design and front-end across product, web, and motion." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <a href={w.href} target="_blank" rel="noreferrer" className="hover-target group block rounded-2xl overflow-hidden h-full" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="aspect-[4/3] overflow-hidden flex items-center justify-center relative" style={{ background: w.gradient }}>
                  <span className="text-6xl opacity-20 select-none transition-all duration-700 group-hover:opacity-40 group-hover:scale-110" style={{ color: ACCENT }}>{w.glyph}</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{w.tag}</div>
                  <h3 className="font-serif text-2xl mb-2">{w.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{w.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHONE LIVE */}
      <section id="phone-live" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Live preview" title="Test it on device." lead="Two prototypes running in a virtual mobile environment — Figma A/B inspector and Google Stitch AI generator." />
        <div className="flex justify-center gap-8 flex-wrap">
          <PhoneEnv label="Figma · A/B Variant" src="/demos/figma-ab-variant.html" />
          <PhoneEnv label="Stitch · Component Gen" src="/demos/stitch-ab-gen.html" />
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Interactive demos" title="Shipped, not mocked." lead="Live, deployed product demos across analytics, design systems, AI, and video. Click to explore each one." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEMOS.map((d, i) => (
            <Reveal key={d.num} delay={i * 70}>
              <a href={d.href} target="_blank" rel="noreferrer" className="hover-target group flex flex-col gap-3 p-6 rounded-2xl h-full transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>{d.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ color: ACCENT, background: 'rgba(249,115,22,0.1)' }}>{d.tag}</span>
                </div>
                <h3 className="font-serif text-xl leading-snug">{d.title}</h3>
                <p className="text-sm flex-1" style={{ color: 'var(--muted)' }}>{d.desc}</p>
                <div className="font-mono text-[11px] uppercase tracking-widest pt-1 transition-colors" style={{ color: ACCENT }}>Open demo →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Products" title="Things you can buy." lead="Packaged kits and guides for AI-native creators." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="p-8 rounded-2xl h-full flex flex-col" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <span className="font-mono text-sm" style={{ color: ACCENT }}>{p.price}</span>
                </div>
                <p className="text-sm mb-6 flex-1" style={{ color: 'var(--muted)' }}>{p.desc}</p>
                <div className="flex gap-3">
                  <a href={p.buy} target="_blank" rel="noreferrer" data-magnetic className="hover-target px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white" style={{ background: ACCENT }}>Get it</a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="hover-target px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--fg)', border: '1px solid var(--line)' }}>Preview</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CASE STUDIES & DESIGN EXPLORATIONS */}
      <section id="case-studies" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Case studies & explorations" title="Design, in depth." lead="Fintech design directions and full UX case studies." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {FINTECH.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <a href={f.img} target="_blank" rel="noreferrer" className="hover-target group block rounded-2xl overflow-hidden h-full" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{f.tag}</div>
                  <h3 className="font-serif text-2xl mb-2">{f.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{f.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <a href={c.file} target="_blank" rel="noreferrer" className="hover-target flex items-center justify-between p-5 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{c.tag}</div>
                  <h3 className="font-serif text-lg">{c.name}</h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: ACCENT }}>PDF →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <WorldFooter />
    </main>
  );
}
