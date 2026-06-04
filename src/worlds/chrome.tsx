import { useState } from 'react';
import type { World } from '@/context/WorldContext';
import { Reveal } from './Reveal';

/** Slim themed top bar shared by both worlds. */
export function WorldNav({ world, links, onSwitch }: { world: World; links: { href: string; label: string }[]; onSwitch?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const other: World = world === 'frontend' ? 'backend' : 'frontend';

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[80] flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-xl"
        style={{ background: 'color-mix(in srgb, var(--bg) 75%, transparent)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="flex items-center gap-3">
          <span className="font-sans font-bold text-sm tracking-[0.15em] uppercase" style={{ color: 'var(--fg)' }}>Idris Bakare</span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded" style={{ color: 'var(--accent)', border: '1px solid var(--accent)' }}>
            {world}
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover-target px-3 py-2.5 rounded transition-colors" style={{ color: 'var(--muted)' }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => onSwitch?.()}
            data-magnetic
            aria-label={`Switch to ${other} world`}
            className="hover-target font-mono text-[10px] uppercase tracking-widest px-3 py-2.5 rounded transition-colors"
            style={{ color: 'var(--accent)', border: '1px solid var(--accent)' }}
          >
            ◑ {other}
          </button>
          <a
            href="https://www.upwork.com/freelancers/~019206011393cf6c1b"
            target="_blank"
            rel="noreferrer"
            data-magnetic
            className="hover-target font-mono text-[10px] uppercase tracking-widest px-3 py-2.5 rounded text-white"
            style={{ background: 'var(--accent)' }}
          >
            Hire Me
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2.5 rounded"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            style={{ color: 'var(--fg)' }}
          >
            <span className="block w-5 h-px transition-transform origin-center" style={{ background: 'var(--fg)', transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
            <span className="block w-5 h-px transition-opacity" style={{ background: 'var(--fg)', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-transform origin-center" style={{ background: 'var(--fg)', transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[79] flex flex-col pt-20"
          style={{ background: 'color-mix(in srgb, var(--bg) 96%, transparent)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="font-mono text-base uppercase tracking-widest py-4 border-b"
                style={{ color: 'var(--fg)', borderColor: 'var(--line)' }}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { closeMenu(); onSwitch?.(); }}
              className="font-mono text-base uppercase tracking-widest py-4 border-b text-left"
              style={{ color: 'var(--accent)', borderColor: 'var(--line)' }}
            >
              ◑ Switch to {other}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

/** Shared contact band + footer, token-themed. */
export function WorldFooter() {
  return (
    <footer id="contact" className="relative z-10 px-6 md:px-12 pt-32 pb-12 text-center">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--accent)' }}>Initialise sequence</div>
        <h2 className="font-serif text-5xl md:text-8xl leading-none tracking-tight mb-10" style={{ color: 'var(--fg)' }}>
          Let us build.
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <a
            href="mailto:idris.bakare92@outlook.com"
            data-magnetic
            className="hover-target w-full md:w-auto inline-block font-bold uppercase tracking-widest px-12 py-5 rounded-full text-base text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            Send Signal
          </a>
          <a
            href="https://www.linkedin.com/in/idrisbakare/"
            target="_blank"
            rel="noreferrer"
            data-magnetic
            className="hover-target w-full md:w-auto inline-block font-bold uppercase tracking-widest px-12 py-5 rounded-full text-base transition-colors"
            style={{ color: 'var(--fg)', border: '1px solid var(--line)' }}
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
      <div className="mt-20 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        <span>© 2026 Idris Bakare</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: '#22c55e' }} />
          System nominal
        </span>
      </div>
    </footer>
  );
}

/** Section heading block. */
export function SectionHead({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <Reveal className="mb-12">
      <div className="font-mono text-[11px] tracking-[0.3em] uppercase mb-4 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
        <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
        {kicker}
      </div>
      <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] tracking-tight" style={{ color: 'var(--fg)' }}>{title}</h2>
      {lead && <p className="mt-5 max-w-2xl text-base md:text-lg" style={{ color: 'var(--muted)' }}>{lead}</p>}
    </Reveal>
  );
}
