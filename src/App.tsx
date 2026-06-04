import { useState, useEffect, useRef } from 'react';
import { useWorld } from '@/context/WorldContext';
import { FrontendWorld } from '@/worlds/FrontendWorld';
import { BackendWorld } from '@/worlds/BackendWorld';

// ─── Particle canvas for entry gate background ────────────────────────────────
function ParticleCanvas({ side }: { side: 'frontend' | 'backend' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const count = 60;
    const color = side === 'backend' ? '249,115,22' : '249,115,22';
    const bgAlpha = side === 'backend' ? 0.06 : 0.04;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.a * bgAlpha * 10})`;
        ctx.fill();
      });
      // draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${color},${(1 - dist / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [side]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// ─── HUD status bar at the bottom of each half ───────────────────────────────
function HudBar({ side }: { side: 'frontend' | 'backend' }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const scroll = (tick * 2) % 100;
  return (
    <div
      className="absolute bottom-0 left-0 right-0 px-5 py-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest select-none"
      style={{ color: 'rgba(249,115,22,0.55)', borderTop: '1px solid rgba(249,115,22,0.12)' }}
    >
      <span>WORLD :: {side.toUpperCase()}</span>
      <span>SCROLL :: {String(scroll).padStart(4, '0')}</span>
      <span>SYS :: NOMINAL</span>
    </div>
  );
}

// ─── Entry Gate ───────────────────────────────────────────────────────────────
function EntryGate() {
  const { enter } = useWorld();
  const [hover, setHover] = useState<'none' | 'backend' | 'frontend'>('none');
  const [entering, setEntering] = useState<'backend' | 'frontend' | null>(null);

  const handleEnter = (world: 'backend' | 'frontend') => {
    setEntering(world);
    setTimeout(() => enter(world), 640);
  };

  const backendLabel = (
    <>
      <span className="block font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-tight text-white">
        Systems that
      </span>
      <span
        className="block font-serif italic text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-tight"
        style={{ color: '#F97316' }}
      >
        run themselves.
      </span>
    </>
  );

  const frontendLabel = (
    <>
      <span className="block font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-tight"
        style={{ color: '#0E0E12' }}>
        Interfaces
      </span>
      <span
        className="block font-serif italic text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-tight"
        style={{ color: '#F97316' }}
      >
        that ship.
      </span>
    </>
  );

  return (
    <div
      className="gate-stage fixed inset-0 flex overflow-hidden"
      style={{
        opacity: entering ? 0 : 1,
        transform: entering ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* ── BACKEND half (dark left) ── */}
      <div
        className="gate-world relative flex-1 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        style={{
          background: hover === 'backend' ? '#100f14' : '#0D0D12',
          transition: 'background 0.4s ease',
        }}
        onMouseEnter={() => setHover('backend')}
        onMouseLeave={() => setHover('none')}
        onClick={() => handleEnter('backend')}
        role="button"
        aria-label="Enter Backend world"
      >
        <ParticleCanvas side="backend" />

        {/* grid overlay */}
        <div
          className="gate-grid"
          style={{ '--gate-grid-line': 'rgba(249,115,22,0.07)' } as React.CSSProperties}
        />

        {/* scanline sweep */}
        <div className="hud-scanline" />

        {/* content */}
        <div
          className="gate-half3d relative z-10 flex flex-col items-start px-10 md:px-16 py-8 gate-breathe"
          style={{ maxWidth: 640 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
            style={{ color: '#F97316' }}>
            <span className="w-6 h-px bg-[#F97316]" />
            Backend // Systems · AI · Automation
          </div>

          {backendLabel}

          <p className="mt-6 text-base md:text-lg max-w-sm" style={{ color: '#A1A1AA' }}>
            Multi-agent systems, automation pipelines, and AI infrastructure.
          </p>

          <button
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: hover === 'backend' ? '#F97316' : 'rgba(249,115,22,0.15)',
              border: '1px solid rgba(249,115,22,0.4)',
            }}
          >
            Enter Backend
            <span aria-hidden="true" style={{
              transform: hover === 'backend' ? 'translateX(4px)' : 'none',
              transition: 'transform 0.3s ease',
              display: 'inline-block',
            }}>→</span>
          </button>
        </div>

        <HudBar side="backend" />
      </div>

      {/* ── Divider line ── */}
      <div
        className="relative z-10 flex-shrink-0 flex flex-col items-center justify-center"
        style={{ width: 1, background: 'rgba(249,115,22,0.25)' }}
      >
        <div
          className="absolute w-8 h-8 rounded-full flex items-center justify-center text-xs"
          style={{
            background: '#F97316',
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: 14,
            boxShadow: '0 0 24px rgba(249,115,22,0.6)',
          }}
        >
          ◑
        </div>
      </div>

      {/* ── FRONTEND half (light right) ── */}
      <div
        className="gate-world relative flex-1 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        style={{
          background: hover === 'frontend' ? '#f0f0ee' : '#FAFAF8',
          transition: 'background 0.4s ease',
        }}
        onMouseEnter={() => setHover('frontend')}
        onMouseLeave={() => setHover('none')}
        onClick={() => handleEnter('frontend')}
        role="button"
        aria-label="Enter Frontend world"
      >
        <ParticleCanvas side="frontend" />

        <div
          className="gate-grid"
          style={{ '--gate-grid-line': 'rgba(0,0,0,0.06)' } as React.CSSProperties}
        />

        <div
          className="gate-half3d relative z-10 flex flex-col items-start px-10 md:px-16 py-8 gate-breathe"
          style={{ maxWidth: 640 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
            style={{ color: '#F97316' }}>
            <span className="w-6 h-px bg-[#F97316]" />
            Frontend // Design · UI · Interface
          </div>

          {frontendLabel}

          <p className="mt-6 text-base md:text-lg max-w-sm" style={{ color: '#52525B' }}>
            Product designer and front-end engineer. Research, design, and ship.
          </p>

          <button
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              color: hover === 'frontend' ? '#fff' : '#0E0E12',
              background: hover === 'frontend' ? '#F97316' : 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.35)',
            }}
          >
            Enter Frontend
            <span aria-hidden="true" style={{
              transform: hover === 'frontend' ? 'translateX(4px)' : 'none',
              transition: 'transform 0.3s ease',
              display: 'inline-block',
            }}>→</span>
          </button>
        </div>

        <HudBar side="frontend" />
      </div>

      {/* Noise texture */}
      <div className="noise-overlay" />
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const { view, world } = useWorld();

  // Custom cursor
  useEffect(() => {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const outline = document.createElement('div');
    outline.className = 'cursor-outline';
    document.body.append(dot, outline);
    document.documentElement.classList.add('custom-cursor');

    let mx = -999, my = -999, ox = -999, oy = -999;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    let raf: number;
    const tick = () => {
      ox += (mx - ox) * 0.18;
      oy += (my - oy) * 0.18;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      outline.style.transform = `translate(${ox}px,${oy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => document.documentElement.classList.add('cursor-hover');
    const onLeave = () => document.documentElement.classList.remove('cursor-hover');
    document.querySelectorAll('.hover-target,[data-magnetic]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.documentElement.classList.remove('custom-cursor');
      dot.remove();
      outline.remove();
    };
  }, [view]);

  // Scroll-reveal
  useEffect(() => {
    if (view !== 'world') return;
    const els = document.querySelectorAll('.rv');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [view, world]);

  return (
    <>
      {view === 'gate' && <EntryGate />}
      {view === 'world' && (
        world === 'frontend' ? <FrontendWorld /> : <BackendWorld />
      )}
    </>
  );
}
