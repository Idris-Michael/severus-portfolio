import type { PointerEvent } from 'react';

/**
 * Pointer handler for `.spotlight` surfaces: writes the cursor position into
 * `--mx/--my` so the CSS radial glow follows it. One rAF per frame at most.
 */
let frame = 0;

export function trackSpotlight(e: PointerEvent<HTMLElement>): void {
  if (e.pointerType !== 'mouse') return;
  const el = e.currentTarget;
  const { clientX, clientY } = e;
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${clientX - r.left}px`);
    el.style.setProperty('--my', `${clientY - r.top}px`);
  });
}
