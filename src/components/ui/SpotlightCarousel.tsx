import { useCallback, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent, PointerEvent } from 'react';
import type { RecentProject } from '../../data/recentProjects';
import { trackSpotlight } from '../../lib/spotlight';

const SWIPE_PX = 50;

/**
 * Spotlight carousel: the active card sits centre-stage at full scale, its
 * neighbours recede in 3D (smaller, dimmer, softly blurred) and a cursor-led
 * glow tracks the active card. Arrows, ←/→ keys, swipe, dots, or click a
 * neighbour to bring it forward. Reduced motion becomes a plain crossfade (CSS).
 */
export function SpotlightCarousel({ items }: { items: RecentProject[] }) {
  const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const n = items.length;

  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    drag.current = { x: e.clientX, moved: false };
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > SWIPE_PX) {
      d.moved = true;
      go(active + (dx < 0 ? 1 : -1));
    }
  };
  // Swallow the click that ends a swipe so it doesn't open a link.
  const onClickCapture = (e: MouseEvent) => {
    if (drag.current?.moved) { e.preventDefault(); e.stopPropagation(); }
    drag.current = null;
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Recent projects"
      className="sc"
      onKeyDown={onKeyDown}
    >
      <div
        className="sc-stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onClickCapture={onClickCapture}
      >
        {items.map((p, i) => {
          // Shortest signed distance on the ring, so the deck wraps both ways.
          let o = i - active;
          if (o > n / 2) o -= n;
          if (o < -n / 2) o += n;
          const isActive = o === 0;
          return (
            <article
              key={p.title}
              className="sc-slide"
              data-offset={Math.max(-2, Math.min(2, o))}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${p.title}`}
              aria-hidden={!isActive}
            >
              {/* inert on the card only: the sibling pick button must stay clickable */}
              <div
                inert={!isActive}
                className="sc-card spotlight"
                onPointerMove={isActive ? trackSpotlight : undefined}
              >
                <div className="sc-media">
                  {p.img ? (
                    <img src={p.img} alt={`${p.title} screen`} width={1280} height={800} loading={i < 2 ? 'eager' : 'lazy'} draggable={false} />
                  ) : (
                    <div className="sc-type">
                      <span className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">{p.label}</span>
                    </div>
                  )}
                </div>
                <div className="sc-body">
                  <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest">
                    <span className="px-2 py-0.5 rounded" style={{ color: 'var(--accent)', border: '1px solid color-mix(in srgb, var(--accent) 35%, transparent)' }}>{p.tag}</span>
                    <span style={{ color: 'var(--muted)' }}>{p.year} · {p.role}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-[1.05] tracking-tight mt-5">{p.title}</h3>
                  <p className="text-sm md:text-[15px] mt-3 leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc}</p>
                  <ul className="flex flex-wrap gap-1.5 mt-5" aria-label="Stack">
                    {p.stack.map((s) => (
                      <li key={s} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full" style={{ background: 'color-mix(in srgb, var(--fg) 5%, transparent)', color: 'var(--fg)' }}>{s}</li>
                    ))}
                  </ul>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-target group inline-flex items-center gap-2 mt-auto pt-6 font-mono text-[11px] uppercase tracking-widest"
                    style={{ color: 'var(--accent)' }}
                  >
                    {p.cta} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
              {!isActive && (
                <button type="button" className="sc-pick" tabIndex={-1} aria-hidden="true" onClick={() => go(i)} />
              )}
            </article>
          );
        })}
      </div>

      <div className="sc-controls">
        <button type="button" className="sc-arrow hover-target" onClick={() => go(active - 1)} aria-label="Previous project">←</button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose project">
          {items.map((p, i) => (
            <button
              key={p.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={p.title}
              className="sc-dot"
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="sc-arrow hover-target" onClick={() => go(active + 1)} aria-label="Next project">→</button>
      </div>
      <p className="sr-only" aria-live="polite">{`Showing ${items[active].title}, ${active + 1} of ${n}`}</p>
    </section>
  );
}
