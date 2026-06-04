import { WorldNav, WorldFooter, SectionHead } from './chrome';
import { Reveal } from './Reveal';

const ACCENT = 'var(--accent)';

const WORK = [
  {
    title: 'UI / UX Design',
    tag: 'Product Design',
    desc: 'End-to-end interface design: research, flows, hi-fi UI, and shipped front-ends. From discovery through to deployed product.',
    href: 'https://github.com/Idris-Michael',
    label: 'Research → Figma → Ship',
    sub: 'Design systems, accessibility, conversion',
  },
  {
    title: 'Front-End Builds',
    tag: 'React · TypeScript',
    desc: 'Production React and TypeScript builds with motion, WebGL, and design systems. Severus Overwatch is one example.',
    href: 'https://github.com/Idris-Michael/severus-overwatch',
    label: 'React · TypeScript · WebGL',
    sub: 'Motion design, Three.js, GSAP',
  },
  {
    title: 'AI Video & Motion',
    tag: 'Creative',
    desc: 'Generative video pipelines, automated clipping, and motion direction. Built on VideoDB and custom render pipelines.',
    href: 'https://github.com/Idris-Michael',
    label: 'VideoDB · Hyperframes',
    sub: 'Automated clipping, voiceover, publish',
  },
];

const DESIGN_CONCEPTS = [
  { title: 'Figma A/B Variant Review', tag: 'Figma · A/B Testing', img: 'images/figma/gen-dashboard.png', href: '/demos/figma-ab-variant.html', desc: 'Side-by-side variant comparison in a Figma-style inspector. Wilson score significance, winner declaration.' },
  { title: 'Figma Prototype Flows', tag: 'Figma · UX Research', img: 'images/figma/gen-mobile.png', href: '/demos/figma-prototype-flow.html', desc: 'Two interactive user flows with glowing hotspot navigation and completion rate tracking.' },
  { title: 'Stitch Component Gen', tag: 'Google Stitch · AI', img: 'images/figma/gen-ai-panel.png', href: '/demos/stitch-ab-gen.html', desc: 'Prompt-to-component generator. Three variants, predicted CTR scores, live 7-day A/B simulation.' },
  { title: 'Stitch Landing Builder', tag: 'Google Stitch · A/B', img: 'images/figma/gen-social.png', href: '/demos/stitch-landing-builder.html', desc: 'Two AI-generated landing page variants in phone frames with live funnel metrics and winner badge.' },
];

/* Top 3 featured demos — displayed at larger scale */
const DEMOS_FEATURED = [
  { num: '01', title: 'GA4 Audit Dashboard', desc: 'B2B analytics portal: 3 switchable client states, live charts, severity-sorted findings.', href: '/demos/ga4-audit.html', tag: 'B2B SaaS' },
  { num: '02', title: 'Triple-Tool Flywheel', desc: 'Three content tools unified into one flywheel with automatic output-to-input handoffs.', href: '/demos/triple-tool.html', tag: 'Ecosystem UX' },
  { num: '03', title: 'AI Flow Builder', desc: 'Drag agent nodes, connect them, trigger flows. Token budget ceilings enforce guardrails live.', href: '/demos/ai-flow-builder.html', tag: 'AI Systems UX' },
];

/* Remaining demos — displayed as compact list rows */
const DEMOS_LIST = [
  { num: '04', title: 'GA4 Companion', desc: 'The audit tool as a shipped mobile app. Health ring, bottom-sheet findings, client switcher.', href: '/demos/ga4-mobile.html', tag: 'Mobile' },
  { num: '05', title: 'Pipeline Command', desc: 'A mobile control surface for an automation pipeline. Approve, trigger, monitor.', href: '/demos/pipeline-mobile.html', tag: 'Mobile' },
  { num: '06', title: 'Dual-LLM Review', desc: 'Claude and Gemini read a contract in parallel; divergence surfaced as signal.', href: '/demos/portswigger.html', tag: 'AI Product' },
  { num: '07', title: 'Design Token Playbook', desc: 'Live token-tuning workspace: sliders drive CSS vars, a component library updates in real-time.', href: '/demos/token-playbook.html', tag: 'Design Systems' },
  { num: '08', title: 'Video Splicer', desc: 'Three-column video editor. Drag scenes to reorder, type a command to transform the player.', href: '/demos/video-splicer.html', tag: 'Creative Tools' },
  { num: '09', title: 'Figma Variant Comparator', desc: 'A/B design variant review in a Figma-style inspector. Wilson score, winner declaration.', href: '/demos/figma-ab-variant.html', tag: 'Figma · A/B' },
  { num: '10', title: 'Figma Prototype Flow', desc: 'Two clickable user flows with glowing hotspot navigation and completion rate comparison.', href: '/demos/figma-prototype-flow.html', tag: 'Figma · UX' },
  { num: '11', title: 'Stitch Component Gen', desc: 'Prompt to 3 AI variants to 7-day A/B simulation with live metrics.', href: '/demos/stitch-ab-gen.html', tag: 'Stitch · AI' },
  { num: '12', title: 'Stitch Landing Builder', desc: 'Two AI landing page variants in phone frames with funnel metrics and winner badge.', href: '/demos/stitch-landing-builder.html', tag: 'Stitch · A/B' },
];

const PRODUCTS = [
  { title: 'AI Influencer Starter Kit', price: '£9.99', desc: 'A complete kit for launching a consistent AI persona across platforms.', buy: 'https://michaelverse453.gumroad.com/l/zasmyp', live: 'https://ai-influencer-starter-kit.netlify.app' },
  { title: 'Nano Banana Guide', price: 'Guide', desc: 'A practical guide to Google\'s image model for production creative.', buy: 'https://michaelverse453.gumroad.com/l/nanobanana-guide', live: 'https://nanobanana-guide.netlify.app' },
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
          width: 'min(240px, 42vw)',
          height: 'min(490px, 86vw)',
          background: 'linear-gradient(160deg,#2a2a2a 0%,#1a1a1a 60%,#222 100%)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.1),0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <iframe
          src={src}
          title={label}
          loading="lazy"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: 44 }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{label}</span>
    </div>
  );
}

export function FrontendWorld({ onSwitch }: { onSwitch?: () => void }) {
  return (
    <main className="relative z-10 min-h-screen" style={{ color: 'var(--fg)' }}>
      <WorldNav
        world="frontend"
        onSwitch={onSwitch}
        links={[
          { href: '#work', label: 'Work' },
          { href: '#design-concepts', label: 'Design' },
          { href: '#phone-live', label: 'Live Preview' },
          { href: '#demos', label: 'Demos' },
          { href: '#products', label: 'Products' },
          { href: '#case-studies', label: 'Cases' },
          { href: '#contact', label: 'Contact' },
        ]}
      />

      {/* HERO */}
      <header className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 max-w-7xl mx-auto w-full">
        <Reveal as="div" className="font-mono text-[11px] tracking-[0.3em] uppercase mb-7">
          <span style={{ color: ACCENT }}>Frontend</span> <span style={{ color: 'var(--muted)' }}>// Design · UI · Interface</span>
        </Reveal>
        <Reveal as="h1" delay={80}>
          <span className="block font-serif text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight">Interfaces</span>
          <span className="block font-serif italic text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight" style={{ color: ACCENT }}>that ship.</span>
        </Reveal>
        <Reveal delay={160} className="mt-8 max-w-xl text-lg">
          <p style={{ color: 'var(--muted)' }}>
            Product designer and front-end engineer. I research, design, and build interfaces in React and TypeScript, then ship them as real, interactive products.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-9 flex flex-wrap gap-4">
          <a href="#demos" data-magnetic className="hover-target inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold" style={{ background: ACCENT, color: 'oklch(98% 0.003 80)' }}>
            See the work <span aria-hidden="true">→</span>
          </a>
          <a href="https://8f0385f1-idris-michael-bakare-digital-cv-portfolio.netlify.app/" target="_blank" rel="noreferrer" data-magnetic className="hover-target inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold" style={{ color: 'var(--fg)', border: '1px solid var(--line)' }}>
            View CV
          </a>
        </Reveal>
      </header>

      {/* WORK — typographic cards, no glyph/gradient */}
      <section id="work" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Selected work" title="What I make." lead="Design and front-end across product, web, and motion." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <a
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="hover-target group block rounded-2xl overflow-hidden h-full"
                style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                {/* Typographic hero — no generic glyph */}
                <div
                  className="aspect-[4/3] flex flex-col items-start justify-end p-6 relative overflow-hidden"
                  style={{ background: 'var(--bg)' }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 20% 80%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 65%)` }}
                  />
                  <span className="relative font-mono text-[10px] uppercase tracking-widest mb-3 px-2 py-0.5 rounded" style={{ color: ACCENT, border: `1px solid color-mix(in srgb, var(--accent) 35%, transparent)` }}>{w.tag}</span>
                  <span className="relative font-serif text-3xl leading-tight tracking-tight" style={{ color: 'var(--fg)' }}>{w.label}</span>
                  <span className="relative font-mono text-[10px] tracking-widest mt-2" style={{ color: 'var(--muted)' }}>{w.sub}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">{w.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{w.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESIGN CONCEPTS */}
      <section id="design-concepts" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Figma · Google Stitch" title="Design work." lead="Interactive prototypes built in Figma and Google Stitch — each one live, not a static mockup." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DESIGN_CONCEPTS.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <a href={d.href} target="_blank" rel="noreferrer" className="hover-target group block rounded-2xl overflow-hidden h-full" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={d.img} alt={d.title} width={800} height={450} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{d.tag}</div>
                  <h3 className="font-serif text-xl mb-2">{d.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{d.desc}</p>
                  <div className="font-mono text-[11px] uppercase tracking-widest mt-4" style={{ color: ACCENT }}>Open demo →</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHONE LIVE */}
      <section id="phone-live" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Live preview" title="Test it on device." lead="Two prototypes running in a virtual mobile environment — Figma A/B inspector and Google Stitch AI generator." />
        <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
          <PhoneEnv label="Figma · A/B Variant" src="/demos/figma-ab-variant.html" />
          <PhoneEnv label="Stitch · Component Gen" src="/demos/stitch-ab-gen.html" />
        </div>
      </section>

      {/* DEMOS — featured 3 large + list for the rest */}
      <section id="demos" className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
        <SectionHead kicker="Interactive demos" title="Shipped, not mocked." lead="Live, deployed product demos across analytics, design systems, AI, and video. Click to explore each one." />

        {/* Featured top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {DEMOS_FEATURED.map((d, i) => (
            <Reveal key={d.num} delay={i * 80}>
              <a href={d.href} target="_blank" rel="noreferrer" className="hover-target group flex flex-col gap-4 p-7 rounded-2xl h-full transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold leading-none" style={{ color: 'color-mix(in srgb, var(--accent) 25%, var(--bg))' }}>{d.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ color: ACCENT, background: 'color-mix(in srgb, var(--accent) 12%, transparent)' }}>{d.tag}</span>
                </div>
                <h3 className="font-serif text-2xl leading-snug flex-1">{d.title}</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{d.desc}</p>
                <div className="font-mono text-[11px] uppercase tracking-widest pt-1 group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }}>Open demo →</div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Remaining demos as compact rows */}
        <div className="flex flex-col divide-y" style={{ borderColor: 'var(--line)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
          {DEMOS_LIST.map((d, i) => (
            <Reveal key={d.num} delay={i * 40}>
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="hover-target group flex items-center justify-between gap-4 px-6 py-4 transition-colors"
                style={{ background: 'var(--surface)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 5%, var(--surface))')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
              >
                <div className="flex items-center gap-5 min-w-0">
                  <span className="font-mono text-[10px] shrink-0" style={{ color: 'var(--muted)' }}>{d.num}</span>
                  <div className="min-w-0">
                    <span className="font-serif text-base leading-snug block">{d.title}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:block" style={{ color: 'var(--muted)' }}>{d.desc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest hidden md:block px-2 py-0.5 rounded" style={{ color: ACCENT, background: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}>{d.tag}</span>
                  <span className="font-mono text-[11px] uppercase tracking-widest group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }}>→</span>
                </div>
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
                  <a href={p.buy} target="_blank" rel="noreferrer" data-magnetic className="hover-target px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: ACCENT, color: 'oklch(98% 0.003 80)' }}>Get it</a>
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
                  <img src={f.img} alt={f.name} width={600} height={450} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
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
              <a
                href={c.file}
                target="_blank"
                rel="noreferrer"
                aria-label={`${c.name} — opens PDF in new tab`}
                className="hover-target flex items-center justify-between p-5 rounded-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{c.tag}</div>
                  <h3 className="font-serif text-lg">{c.name}</h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest shrink-0 ml-3" style={{ color: ACCENT }} aria-hidden="true">PDF →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <WorldFooter />
    </main>
  );
}
