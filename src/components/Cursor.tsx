import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Custom cursor: an accent dot that tracks tightly plus a lagging outline
 * that grows over interactive elements (.hover-target). Magnetic pull on
 * [data-magnetic]. Disabled on touch pointers and with reduced motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const dot = dotRef.current;
    const out = outRef.current;
    if (reduce || !fine || !dot || !out) return;

    const html = document.documentElement;
    html.classList.add('custom-cursor');

    gsap.set([dot, out], { xPercent: -50, yPercent: -50 });
    const dx = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' });
    const ox = gsap.quickTo(out, 'x', { duration: 0.38, ease: 'power3' });
    const oy = gsap.quickTo(out, 'y', { duration: 0.38, ease: 'power3' });

    const onMove = (e: MouseEvent) => {
      dx(e.clientX); dy(e.clientY); ox(e.clientX); oy(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest('.hover-target, a, button')) html.classList.add('cursor-hover');
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest('.hover-target, a, button')) html.classList.remove('cursor-hover');
    };

    // Magnetic pull
    const magnets = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'));
    const magCleanups: Array<() => void> = [];
    magnets.forEach((el) => {
      const mx = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
      const my = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        mx((e.clientX - r.left - r.width / 2) * 0.4);
        my((e.clientY - r.top - r.height / 2) * 0.4);
      };
      const leave = () => { mx(0); my(0); };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      magCleanups.push(() => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); });
    });

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      html.classList.remove('custom-cursor', 'cursor-hover');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      magCleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div ref={outRef} className="cursor-outline" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
