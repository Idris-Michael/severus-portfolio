import { useState, useEffect, useCallback, useRef } from 'react';
import type { Deck } from '../data/decks';

interface DeckViewerProps {
  deck: Deck;
  onClose: () => void;
}

export default function DeckViewer({ deck, onClose }: DeckViewerProps) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));
  const touchStartX = useRef<number | null>(null);
  const total = deck.slides.length;

  const prev = useCallback(() => setCurrent(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setCurrent(i => Math.min(total - 1, i + 1)), [total]);

  // Preload adjacent slides
  useEffect(() => {
    const toLoad = new Set(loaded);
    if (current > 0) toLoad.add(current - 1);
    toLoad.add(current);
    if (current < total - 1) toLoad.add(current + 1);
    setLoaded(toLoad);
  }, [current, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  const slide = deck.slides[current];
  const progress = ((current + 1) / total) * 100;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: deck.accentColor }}
          />
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">{deck.tag}</span>
          <span className="font-mono text-xs text-white/20">·</span>
          <span className="font-mono text-xs text-white/60">{deck.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-white/30">
            {current + 1} / {total}
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs text-white/40 hover:text-white transition-colors px-2 py-1 border border-white/10 hover:border-white/30"
            aria-label="Close"
          >
            ESC
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-px bg-white/5 flex-shrink-0">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: deck.accentColor }}
        />
      </div>

      {/* Slide area */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden min-h-0">
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-3 z-10 w-10 h-10 flex items-center justify-center border border-white/10 bg-black/60 hover:border-white/30 hover:bg-black/80 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <span className="text-white text-lg leading-none">‹</span>
        </button>

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center px-16">
          {deck.slides.map((s, i) => (
            loaded.has(i) ? (
              <img
                key={s.src}
                src={s.src}
                alt={s.caption}
                className="absolute max-w-full max-h-full object-contain transition-opacity duration-200"
                style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
                draggable={false}
              />
            ) : null
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          disabled={current === total - 1}
          className="absolute right-3 z-10 w-10 h-10 flex items-center justify-center border border-white/10 bg-black/60 hover:border-white/30 hover:bg-black/80 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <span className="text-white text-lg leading-none">›</span>
        </button>
      </div>

      {/* Caption + dot strip */}
      <div className="flex-shrink-0 border-t border-white/10 px-6 py-4 bg-[#0a0a0f]">
        <p className="text-white/60 text-sm font-mono leading-relaxed mb-3 min-h-[1.5rem]">
          {slide.caption}
        </p>
        <div className="flex gap-1 flex-wrap">
          {deck.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === current ? '20px' : '6px',
                height: '6px',
                backgroundColor: i === current ? deck.accentColor : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
