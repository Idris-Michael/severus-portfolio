import { useEffect, useState } from 'react';
import { useWorld } from '@/context/WorldContext';

/**
 * Game HUD overlay: corner brackets, a scanline sweep, a live status readout,
 * and the world toggle (Frontend <-> Backend). Only mounts inside a world,
 * never over the entry gate. Colours come from the themed --hud / --accent
 * tokens so it reads on both white and black.
 */
export function Hud() {
  const { view, world, setWorld, toGate } = useWorld();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(h > 0 ? Math.min(100, Math.round((window.scrollY / h) * 100)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [view]);

  if (view !== 'world') return null;

  const other = world === 'frontend' ? 'backend' : 'frontend';
  const hud = 'var(--hud)';

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none font-mono" aria-hidden="false">
      <div className="hud-scanline" />

      {/* corner brackets */}
      <span className="absolute top-4 left-4 w-7 h-7 border-t border-l" style={{ borderColor: hud, opacity: 0.5 }} />
      <span className="absolute top-4 right-4 w-7 h-7 border-t border-r" style={{ borderColor: hud, opacity: 0.5 }} />
      <span className="absolute bottom-4 left-4 w-7 h-7 border-b border-l" style={{ borderColor: hud, opacity: 0.5 }} />
      <span className="absolute bottom-4 right-4 w-7 h-7 border-b border-r" style={{ borderColor: hud, opacity: 0.5 }} />

      {/* status readout — bottom left */}
      <div className="absolute bottom-7 left-8 hidden md:flex flex-col gap-1 text-[10px] tracking-[0.18em] uppercase" style={{ color: hud }}>
        <span><span style={{ color: 'var(--accent)' }}>world</span> :: {world}</span>
        <span>scroll :: {String(scroll).padStart(3, '0')}%</span>
        <span>sys :: nominal</span>
      </div>

      {/* world toggle — bottom centre (interactive); chat launcher owns bottom-right */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-auto">
        <button
          onClick={toGate}
          data-magnetic
          className="hover-target text-[10px] tracking-[0.2em] uppercase px-3 py-2 rounded border transition-colors"
          style={{ color: hud, borderColor: 'var(--line)' }}
        >
          Gate
        </button>
        <button
          onClick={() => setWorld(other)}
          data-magnetic
          className="hover-target text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded border transition-colors"
          style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
        >
          ◑ Switch to {other}
        </button>
      </div>
    </div>
  );
}
