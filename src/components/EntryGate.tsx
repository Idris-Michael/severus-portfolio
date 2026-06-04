import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useWorld, type World } from '@/context/WorldContext';

/**
 * Entry gate — flat split screen that hinges back into 3D and explodes each
 * side's title into a staggered stack of frosted-glass layers, then flies the
 * chosen stack toward the camera and enters that world.
 *
 * Tunables live in CONFIG: change EXPLODE_Z (fan depth), DROP (vertical
 * cascade), STAGGER, TILT, and EASE to retune the whole motion in one place.
 */

const CONFIG = {
  TILT_X: 52, // deg — how far the plane hinges onto the floor
  TILT_Y: 9, // deg — yaw toward the chosen side
  EXPLODE_Z: 132, // px — z-gap between fanned glass layers
  DROP: 60, // px — vertical cascade per layer
  STAGGER: 0.085,
  EASE: 'power4.out',
} as const;

const LAYERS: Record<World, string[]> = {
  // index 0 = the headline that is already visible on the flat split
  frontend: ['Frontend', 'Design', 'UI', 'Interface'],
  backend: ['Backend', 'Systems', 'AI', 'Automation'],
};

export function EntryGate() {
  const { enter, setHoverState } = useWorld();
  const [hovered, setHovered] = useState<World | null>(null);
  const [leaving, setLeaving] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const choose = (world: World) => {
    if (leaving) return;
    if (reduce || !rootRef.current) {
      setHoverState('none');
      enter(world);
      return;
    }
    setLeaving(true);
    const root = rootRef.current;
    const other: World = world === 'frontend' ? 'backend' : 'frontend';
    const yaw = world === 'frontend' ? CONFIG.TILT_Y : -CONFIG.TILT_Y;

    const q = (sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));
    const chosenLayers = q(`[data-gate-stack="${world}"] .gate-layer`);
    const otherStack = root.querySelector<HTMLElement>(`[data-gate-stack="${other}"]`);
    const chosenStack = root.querySelector<HTMLElement>(`[data-gate-stack="${world}"]`);

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        setHoverState('none');
        enter(world);
      },
    });

    // 1 — hinge the whole plane onto the floor
    tl.to(worldRef.current, {
      rotateX: CONFIG.TILT_X,
      rotateY: yaw,
      scale: 0.9,
      duration: 0.75,
    }, 0);

    // crossfade flat titles out, glass stacks + grid in
    tl.to('[data-gate-flat]', { opacity: 0, duration: 0.3 }, 0);
    tl.to('[data-gate-stack]', { opacity: 1, duration: 0.3 }, 0.05);
    tl.to(gridRef.current, { opacity: 1, duration: 0.7 }, 0);

    // 2 — explode the chosen side's layers along Z with a staggered cascade
    tl.fromTo(chosenLayers,
      { z: (i: number) => i * 3, y: 0, opacity: (i: number) => (i === 0 ? 1 : 0) },
      {
        z: (i: number) => i * CONFIG.EXPLODE_Z,
        y: (i: number) => i * CONFIG.DROP,
        opacity: 1,
        duration: 0.85,
        ease: CONFIG.EASE,
        stagger: CONFIG.STAGGER,
      }, 0.2);

    // 3 — slide the unpicked side away and dim it
    if (otherStack) {
      tl.to(otherStack, {
        xPercent: world === 'frontend' ? 70 : -70,
        rotateY: world === 'frontend' ? -35 : 35,
        opacity: 0,
        duration: 0.6,
      }, 0.55);
    }

    // 4 — fly the chosen stack toward the camera
    if (chosenStack) {
      tl.to(chosenStack, { scale: 1.18, duration: 0.7, ease: 'power3.inOut' }, 0.7);
    }
    tl.to(worldRef.current, { rotateY: yaw * 0.4, duration: 0.7 }, 0.7);

    // 5 — wash to the destination world's background, then commit
    tl.to(fadeRef.current, { opacity: 1, duration: 0.4, ease: 'power2.in' }, 1.25);
  };

  const frontGrow = hovered === 'frontend' ? 1.4 : hovered === 'backend' ? 0.72 : 1;
  const backGrow = hovered === 'backend' ? 1.4 : hovered === 'frontend' ? 0.72 : 1;

  return (
    <div
      ref={rootRef}
      className="gate-stage fixed inset-0 z-[200] overflow-hidden select-none"
      role="group"
      aria-label="Choose a portfolio world"
    >
      <div ref={worldRef} className="gate-world absolute inset-0 flex flex-col md:flex-row">
        {/* FRONTEND flat half (white) */}
        <GateHalf
          world="frontend"
          index="01"
          sub="Design · UI · Interface"
          grow={frontGrow}
          leaving={leaving}
          dark
          onHover={(h) => { setHovered(h ? 'frontend' : null); setHoverState(h ? 'frontend' : 'none'); }}
          onChoose={() => choose('frontend')}
        />

        <div className="hidden md:block w-px bg-[#F97316]/40 z-10" aria-hidden="true" />

        {/* BACKEND flat half (black) */}
        <GateHalf
          world="backend"
          index="02"
          sub="Systems · AI · Automation"
          grow={backGrow}
          leaving={leaving}
          onHover={(h) => { setHovered(h ? 'backend' : null); setHoverState(h ? 'backend' : 'none'); }}
          onChoose={() => choose('backend')}
        />

        {/* Glass layer stacks — hidden until the hinge fires */}
        <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none" aria-hidden="true">
          <GlassStack world="frontend" />
          <GlassStack world="backend" />
        </div>

        {/* 3D grid floor */}
        <div ref={gridRef} className="gate-grid" aria-hidden="true" />
      </div>

      {/* HUD chrome (flat, never transformed) */}
      <div className="pointer-events-none absolute inset-x-0 top-7 flex flex-col items-center gap-1 z-20 mix-blend-difference">
        <span className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-white">Idris Bakare</span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">Select your path</span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center z-20 mix-blend-difference">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">Click a side to enter</span>
      </div>

      {/* live region for assistive tech */}
      <p className="sr-only" aria-live="polite">
        {leaving ? `Entering ${hovered ?? ''} world` : 'Two worlds: Frontend on the left, Backend on the right.'}
      </p>

      {/* wash-to-world overlay */}
      <div ref={fadeRef} className="absolute inset-0 z-30 pointer-events-none opacity-0" style={{ background: 'var(--bg)' }} aria-hidden="true" />
    </div>
  );
}

function GateHalf({
  world, index, sub, grow, leaving, dark = false, onHover, onChoose,
}: {
  world: World; index: string; sub: string; grow: number; leaving: boolean;
  dark?: boolean; onHover: (h: boolean) => void; onChoose: () => void;
}) {
  const title = LAYERS[world][0];
  const bg = dark ? '#FAFAF8' : '#0D0D12';
  const fg = dark ? '#0E0E12' : '#F5F5F7';
  const faint = dark ? 'rgba(14,14,18,0.45)' : 'rgba(255,255,255,0.45)';
  const faint2 = dark ? 'rgba(14,14,18,0.55)' : 'rgba(255,255,255,0.55)';

  return (
    <button
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onFocus={() => onHover(true)}
      onBlur={() => onHover(false)}
      onClick={onChoose}
      style={{
        flexGrow: grow, flexBasis: 0, background: bg, color: fg,
        transition: leaving ? 'none' : 'flex-grow 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}
      className="group relative flex-1 min-h-0 flex flex-col items-center justify-center px-6 cursor-pointer focus:outline-none"
      aria-label={`Enter ${world} world`}
    >
      <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-5" style={{ color: faint }}>
        {index} // {title}
      </span>
      <span data-gate-flat className="gate-breathe font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
        {title}
      </span>
      <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase mt-5" style={{ color: faint2 }}>
        {sub}
      </span>
      <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#F97316] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
        Enter <span aria-hidden="true">→</span>
      </span>
      <Brackets dark={dark} />
    </button>
  );
}

function GlassStack({ world }: { world: World }) {
  const labels = LAYERS[world];
  const glass = world === 'frontend' ? 'gate-glass-light' : 'gate-glass-dark';
  const ink = world === 'frontend' ? '#0E0E12' : '#F5F5F7';

  return (
    <div
      data-gate-stack={world}
      className="gate-half3d relative flex-1 min-h-0 flex items-center justify-center opacity-0"
      style={{ ['--gate-grid-line' as string]: world === 'frontend' ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.08)' }}
    >
      <div className="relative" style={{ width: 'clamp(220px,26vw,360px)', height: 'clamp(300px,34vw,460px)' }}>
        {labels.map((label, i) => (
          <div key={label} className={`gate-layer ${glass}`} style={{ transform: `translateZ(${i * 3}px)` }}>
            <span
              className={i === 0 ? 'font-serif tracking-tight' : 'font-serif'}
              style={{
                color: ink,
                fontSize: i === 0 ? 'clamp(2rem,4vw,3.2rem)' : 'clamp(1rem,1.7vw,1.5rem)',
                opacity: i === 0 ? 1 : 0.92,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Brackets({ dark = false }: { dark?: boolean }) {
  const c = dark ? 'border-[#0E0E12]/25' : 'border-white/25';
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-5">
      <span className={`absolute top-0 left-0 w-6 h-6 border-t border-l ${c}`} />
      <span className={`absolute top-0 right-0 w-6 h-6 border-t border-r ${c}`} />
      <span className={`absolute bottom-0 left-0 w-6 h-6 border-b border-l ${c}`} />
      <span className={`absolute bottom-0 right-0 w-6 h-6 border-b border-r ${c}`} />
    </span>
  );
}
