import { useEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-scrubbed parallax for descendants of `root`:
 *  - `[data-parallax="0.2"]`: drifts up by that fraction of its height across the viewport.
 *  - `[data-parallax-img]`: image slides inside its overflow-hidden frame (slight overscale hides edges).
 * Skipped entirely under prefers-reduced-motion.
 */
export function useParallax(root: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((node) => {
        const speed = Number(node.dataset.parallax) || 0.1;
        gsap.to(node, {
          yPercent: -speed * 100,
          ease: 'none',
          scrollTrigger: { trigger: node, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax-img]').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.14 },
          {
            yPercent: 6,
            scale: 1.14,
            ease: 'none',
            scrollTrigger: { trigger: img.parentElement ?? img, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, [root]);
}
