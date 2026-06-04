import { useState, useEffect, useRef } from 'react';
import { BackendWorld } from './worlds/BackendWorld';
import { FrontendWorld } from './worlds/FrontendWorld';
import { Chatbot } from './components/Chatbot';

type World = 'backend' | 'frontend';

// ─── Ambient star canvas ──────────────────────────────────────────────────────
function StarCanvas({ dark }: { dark: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); if (!ctx) return;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.5 + 0.15,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(p => {
        p.x = (p.x + p.vx + 1) % 1;
        p.y = (p.y + p.vy + 1) % 1;
        ctx.beginPath();
        ctx.arc(p.x * c.width, p.y * c.height, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${dark ? p.a * 0.6 : p.a * 0.3})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const ro = new ResizeObserver(resize); ro.observe(c);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [dark]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// ─── Corner bracket decoration ────────────────────────────────────────────────
function Bracket({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 20, stroke = 'rgba(249,115,22,0.35)', w = 2;
  const top = pos.startsWith('t'), left = pos.endsWith('l');
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute"
      style={{
        top: top ? 16 : undefined, bottom: !top ? 16 : undefined,
        left: left ? 16 : undefined, right: !left ? 16 : undefined,
      }}>
      {left && top && <><line x1={w} y1={size} x2={w} y2={w} stroke={stroke} strokeWidth={w} /><line x1={w} y1={w} x2={size} y2={w} stroke={stroke} strokeWidth={w} /></>}
      {!left && top && <><line x1={size - w} y1={size} x2={size - w} y2={w} stroke={stroke} strokeWidth={w} /><line x1={0} y1={w} x2={size - w} y2={w} stroke={stroke} strokeWidth={w} /></>}
      {left && !top && <><line x1={w} y1={0} x2={w} y2={size - w} stroke={stroke} strokeWidth={w} /><line x1={w} y1={size - w} x2={size} y2={size - w} stroke={stroke} strokeWidth={w} /></>}
      {!left && !top && <><line x1={size - w} y1={0} x2={size - w} y2={size - w} stroke={stroke} strokeWidth={w} /><line x1={0} y1={size - w} x2={size - w} y2={size - w} stroke={stroke} strokeWidth={w} /></>}
    </svg>
  );
}

// ─── HUD footer bar ───────────────────────────────────────────────────────────
function HudBar({ label }: { label: string }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT(n => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="absolute bottom-0 left-0 right-0 px-5 py-2 flex justify-between font-mono text-[9px] uppercase tracking-widest select-none"
      style={{ color: 'rgba(249,115,22,0.45)', borderTop: '1px solid rgba(249,115,22,0.1)' }}>
      <span>WORLD :: {label}</span>
      <span>SYS :: NOMINAL</span>
      <span>T+{String(t).padStart(4, '0')}s</span>
    </div>
  );
}

// ─── Entry Gate ───────────────────────────────────────────────────────────────
function WorldGate({ onEnter }: { onEnter: (w: World) => void }) {
  const [hover, setHover] = useState<World | null>(null);
  const [leaving, setLeaving] = useState<World | null>(null);

  const enter = (w: World) => {
    setLeaving(w);
    document.documentElement.dataset.world = w;
    setTimeout(() => onEnter(w), 700);
  };

  return (
    <div
      className="fixed inset-0 flex overflow-hidden"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? 'scale(1.035)' : 'scale(1)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
      }}
    >
      {/* ── FRONTEND half — light left ── */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center cursor-pointer overflow-hidden select-none"
        style={{ background: hover === 'frontend' ? '#f0ede8' : '#FAFAF8', transition: 'background 0.4s ease' }}
        onMouseEnter={() => setHover('frontend')}
        onMouseLeave={() => setHover(null)}
        onClick={() => enter('frontend')}
      >
        <StarCanvas dark={false} />
        <div className="gate-grid" style={{ '--gate-grid-line': 'rgba(0,0,0,0.055)' } as React.CSSProperties} />

        <div className="relative z-10 flex flex-col items-start px-10 md:px-16 max-w-lg">
          <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-8 flex items-center gap-3" style={{ color: '#F97316' }}>
            <span className="w-5 h-px bg-[#F97316]" />
            01 // Frontend
          </div>
          <h2 className="font-serif leading-[0.88] tracking-tight" style={{ fontSize: 'clamp(3.5rem,9vw,7.5rem)', color: '#0E0E12' }}>
            Frontend
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase mt-4" style={{ color: '#52525B' }}>
            Design · UI · Interface
          </p>
          <div
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-[11px] uppercase tracking-widest transition-all duration-300"
            style={{
              background: hover === 'frontend' ? '#F97316' : 'rgba(249,115,22,0.12)',
              color: hover === 'frontend' ? '#fff' : '#0E0E12',
              border: '1px solid rgba(249,115,22,0.3)',
            }}
          >
            Enter
            <span style={{ transform: hover === 'frontend' ? 'translateX(4px)' : 'none', transition: 'transform 0.3s', display: 'inline-block' }}>→</span>
          </div>
        </div>

        <Bracket pos="tl" /><Bracket pos="bl" />
        <HudBar label="frontend" />
      </div>

      {/* ── Centre divider ── */}
      <div className="relative z-20 flex-shrink-0 flex flex-col items-center justify-between py-8"
        style={{ width: 1, background: 'rgba(249,115,22,0.22)' }}>
        <div className="rotate-90 origin-center whitespace-nowrap font-mono text-[9px] tracking-[0.35em] uppercase"
          style={{ color: 'rgba(249,115,22,0.5)' }}>Idris Bakare</div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-sans text-base font-bold"
          style={{ background: '#F97316', boxShadow: '0 0 28px rgba(249,115,22,0.55)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          ◑
        </div>
        <div className="rotate-90 origin-center whitespace-nowrap font-mono text-[9px] tracking-[0.35em] uppercase"
          style={{ color: 'rgba(249,115,22,0.5)' }}>Select Your Path</div>
      </div>

      {/* ── BACKEND half — dark right ── */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center cursor-pointer overflow-hidden select-none"
        style={{ background: hover === 'backend' ? '#100f14' : '#0D0D12', transition: 'background 0.4s ease' }}
        onMouseEnter={() => setHover('backend')}
        onMouseLeave={() => setHover(null)}
        onClick={() => enter('backend')}
      >
        <StarCanvas dark={true} />
        <div className="gate-grid" style={{ '--gate-grid-line': 'rgba(249,115,22,0.07)' } as React.CSSProperties} />
        <div className="hud-scanline" />

        <div className="relative z-10 flex flex-col items-start px-10 md:px-16 max-w-lg">
          <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-8 flex items-center gap-3" style={{ color: '#F97316' }}>
            <span className="w-5 h-px bg-[#F97316]" />
            02 // Backend
          </div>
          <h2 className="font-serif leading-[0.88] tracking-tight" style={{ fontSize: 'clamp(3.5rem,9vw,7.5rem)', color: '#F5F5F7' }}>
            Backend
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase mt-4" style={{ color: '#A1A1AA' }}>
            Systems · AI · Automation
          </p>
          <div
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-[11px] uppercase tracking-widest transition-all duration-300"
            style={{
              background: hover === 'backend' ? '#F97316' : 'rgba(249,115,22,0.12)',
              color: hover === 'backend' ? '#fff' : '#F5F5F7',
              border: '1px solid rgba(249,115,22,0.3)',
            }}
          >
            Enter
            <span style={{ transform: hover === 'backend' ? 'translateX(4px)' : 'none', transition: 'transform 0.3s', display: 'inline-block' }}>→</span>
          </div>
        </div>

        <Bracket pos="tr" /><Bracket pos="br" />
        <HudBar label="backend" />
      </div>

      {/* bottom label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.4em] uppercase z-30"
        style={{ color: 'rgba(249,115,22,0.5)' }}>
        Click a side to enter
      </div>

      <div className="noise-overlay" />
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'severus-world-v2';

export default function WorldRoot() {
  const [world, setWorld] = useState<World | null>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === 'backend' || v === 'frontend') return v;
    } catch { /* ignore */ }
    return null;
  });

  const handleEnter = (w: World) => {
    try { localStorage.setItem(STORAGE_KEY, w); } catch { /* ignore */ }
    setWorld(w);
  };

  // Return to gate — clears stored world
  const handleSwitch = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    setWorld(null);
    document.documentElement.dataset.world = 'backend';
  };

  useEffect(() => {
    document.documentElement.dataset.world = world ?? 'backend';
  }, [world]);

  if (world === null) return <WorldGate onEnter={handleEnter} />;

  return (
    <>
      {world === 'frontend'
        ? <FrontendWorld onSwitch={handleSwitch} />
        : <BackendWorld onSwitch={handleSwitch} />
      }
      <Chatbot />
    </>
  );
}
