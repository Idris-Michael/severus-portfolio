import React, { useState, useEffect, useRef, useCallback } from 'react';
import { slideshowManifest } from '../../data/slideshowManifest';

interface SlideshowProps {
  initialDeckId?: string;
  onClose: () => void;
}

export const Slideshow: React.FC<SlideshowProps> = ({ initialDeckId = 'agent-reach', onClose }) => {
  const [selectedDeckId, setSelectedDeckId] = useState<string>(initialDeckId);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  
  const slideshowRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  
  // Find current deck
  const currentDeck = slideshowManifest.find(deck => deck.id === selectedDeckId) || slideshowManifest[0];
  const slides = currentDeck.slides;
  const currentSlide = slides[currentSlideIndex] || { image: '', caption: '' };

  // Core navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Handle deck change
  const selectDeck = (deckId: string) => {
    setSelectedDeckId(deckId);
    setCurrentSlideIndex(0);
    setIsZoomed(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        prevSlide();
      } else if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, onClose, isZoomed]);

  // Autoplay Logic
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying, nextSlide]);

  // Touch Swipe Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Minimum swipe distance of 50px
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  // Custom Fullscreen Mode toggle
  const toggleFullscreen = () => {
    if (!slideshowRef.current) return;

    if (!document.fullscreenElement) {
      slideshowRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error enabling fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Focus slideshow container on mount for immediate keyboard control
  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.focus();
    }
  }, []);

  // Theme styling helpers based on deck
  const getDeckColor = (deckId: string) => {
    switch (deckId) {
      case 'agent-reach': return '#F97316'; // Orange / Primary
      case 'endava': return '#3B82F6';      // Blue
      case 'legal-pioneer': return '#8B5CF6'; // Purple
      case 'portfolio': return '#10B981';     // Teal/Green
      default: return '#F97316';
    }
  };

  const deckColor = getDeckColor(selectedDeckId);

  return (
    <div 
      ref={slideshowRef}
      tabIndex={0}
      className="fixed inset-0 z-[100] bg-[#0A0A0E] text-white flex flex-col font-sans select-none overflow-hidden outline-none"
    >
      {/* Background Cybernetic Grid / Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#13131F] via-[#0A0A0F] to-[#050508] pointer-events-none z-0" />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full filter blur-[150px] opacity-10 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: deckColor }}
      />

      {/* 1. Header Telemetry HUD */}
      <header className="relative z-10 w-full border-b border-white/5 bg-[#0D0D12]/80 backdrop-blur-md px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: deckColor }} />
            <span className="font-bold text-white tracking-widest uppercase">SYSTEM: SLIDESHOW // NOMINAL</span>
          </div>
          <span className="text-white/20 hidden md:inline">|</span>
          <div className="text-white/60">
            DECK: <span className="text-white font-bold">[{currentDeck.title}]</span>
          </div>
          <span className="text-white/20 hidden md:inline">|</span>
          <div className="text-white/60">
            INDEX: <span className="text-white font-bold">{String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Deck Select tabs inside Lightbox */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-full">
          {slideshowManifest.map((deck) => (
            <button
              key={deck.id}
              onClick={() => selectDeck(deck.id)}
              className={`px-3 py-1.5 rounded-sm border font-mono text-[10px] tracking-wider uppercase transition-all duration-300 ${
                selectedDeckId === deck.id
                  ? 'bg-white/10 text-white shadow-lg'
                  : 'bg-transparent text-white/40 border-white/5 hover:text-white hover:border-white/20'
              }`}
              style={{ 
                borderColor: selectedDeckId === deck.id ? deckColor : undefined,
                boxShadow: selectedDeckId === deck.id ? `0 0 10px ${deckColor}20` : undefined
              }}
            >
              {deck.title.split(' ')[0]}
            </button>
          ))}
          <button 
            onClick={onClose}
            className="ml-4 px-3 py-1.5 rounded-sm border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all font-sans font-bold uppercase tracking-wider text-[10px]"
          >
            [CLOSE]
          </button>
        </div>
      </header>

      {/* 2. Main Slideshow Arena */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-4 md:p-8 min-h-0 w-full">
        {/* Slide viewport */}
        <div 
          className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/10] bg-black/40 rounded-sm border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden group/slide cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {/* Main Slide Image */}
          <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${isZoomed ? 'scale-125' : 'scale-100'}`}>
            <img 
              src={currentSlide.image} 
              alt={currentSlide.caption}
              className="max-w-full max-h-full object-contain pointer-events-none select-none transition-transform duration-300 animate-in fade-in zoom-in-95 duration-500"
              key={`${selectedDeckId}-${currentSlideIndex}`}
            />
          </div>

          {/* Fullscreen Overlay / Zoom Indicators */}
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 z-20">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 font-mono text-[10px] text-white/60">
              {isZoomed ? 'CLICK TO SHRINK' : 'CLICK TO EXPAND'}
            </div>
          </div>

          {/* Left Arrow Actuator */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all transform -translate-x-4 opacity-0 group-hover/slide:opacity-100 group-hover/slide:translate-x-0 z-20 hover:scale-110"
            style={{ '--tw-hover-border-color': deckColor } as React.CSSProperties}
          >
            ←
          </button>

          {/* Right Arrow Actuator */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all transform translate-x-4 opacity-0 group-hover/slide:opacity-100 group-hover/slide:translate-x-0 z-20 hover:scale-110"
          >
            →
          </button>

          {/* Autoplay Playhead Timeline Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 z-20">
            <div 
              className="h-full transition-all duration-300"
              style={{ 
                width: `${((currentSlideIndex + 1) / slides.length) * 100}%`,
                backgroundColor: deckColor,
                boxShadow: `0 0 10px ${deckColor}`
              }}
            />
          </div>
        </div>

        {/* Info Console panel */}
        <div className="w-full max-w-5xl mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-white/5 bg-[#101015]/60 backdrop-blur-sm p-4 rounded-sm">
          <div className="flex-1">
            <p className="font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1">CAPTION // ANALYSIS</p>
            <h3 className="font-serif italic text-lg md:text-xl text-white tracking-wide">
              {currentSlide.caption}
            </h3>
          </div>
          <div className="flex flex-col items-end shrink-0 font-mono text-[10px] text-white/40 gap-1.5 self-stretch md:self-auto justify-between border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="flex gap-2">
              <span className="text-white/60">AUTOPLAY:</span> 
              <span className={isPlaying ? 'text-green-400 font-bold' : 'text-white/40'}>
                {isPlaying ? 'ACTIVE [4.0s]' : 'PAUSED'}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-white/60">ZOOM:</span>
              <span className={isZoomed ? 'text-blue-400 font-bold' : 'text-white/40'}>
                {isZoomed ? 'IN [1.25x]' : 'OUT'}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Lower Control Center + Thumbnail Scrollboard */}
      <footer className="relative z-10 w-full bg-[#0D0D12]/90 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
        {/* Playback Controls & HUD indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-white/5 border border-white/5 hover:border-white/20 text-white/70 hover:text-white rounded-sm text-xs font-mono uppercase transition-all tracking-wider"
            >
              [PREV]
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 border rounded-sm text-xs font-mono uppercase transition-all tracking-wider flex items-center gap-2"
              style={{ 
                borderColor: isPlaying ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                backgroundColor: isPlaying ? 'rgba(239, 68, 68, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                color: isPlaying ? '#F87171' : 'white'
              }}
            >
              {isPlaying ? '[PAUSE]' : '[PLAY/AUTO]'}
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-white/5 border border-white/5 hover:border-white/20 text-white/70 hover:text-white rounded-sm text-xs font-mono uppercase transition-all tracking-wider"
            >
              [NEXT]
            </button>
          </div>

          {/* Core HUD hotkey reference telemetry */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[9px] text-white/40">
            <div>
              SHORTCUTS: <span className="text-white/60 bg-white/5 px-1 py-0.5 rounded border border-white/5">[← / A]</span> PREV
            </div>
            <div>
              <span className="text-white/60 bg-white/5 px-1 py-0.5 rounded border border-white/5">[→ / D]</span> NEXT
            </div>
            <div>
              <span className="text-white/60 bg-white/5 px-1 py-0.5 rounded border border-white/5">[SPACE]</span> PLAY/PAUSE
            </div>
            <div>
              <span className="text-white/60 bg-white/5 px-1 py-0.5 rounded border border-white/5">[ESC]</span> CLOSE
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="px-4 py-2 bg-white/5 border border-white/5 hover:border-white/20 text-white/70 hover:text-white rounded-sm text-xs font-mono uppercase transition-all tracking-wider"
            >
              {isZoomed ? '[SHRINK]' : '[ZOOM]'}
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 bg-white/5 border border-white/5 hover:border-white/20 text-white/70 hover:text-white rounded-sm text-xs font-mono uppercase transition-all tracking-wider"
            >
              {isFullscreen ? '[WINDOW]' : '[FULLSCREEN]'}
            </button>
          </div>
        </div>

        {/* Thumbnail Filmstrip */}
        <div className="w-full flex gap-3 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlideIndex(index);
                setIsZoomed(false);
              }}
              className="relative shrink-0 w-20 aspect-[16/10] rounded-sm overflow-hidden bg-black/40 border transition-all duration-300 hover:scale-105"
              style={{ 
                borderColor: currentSlideIndex === index ? deckColor : 'rgba(255, 255, 255, 0.05)',
                boxShadow: currentSlideIndex === index ? `0 0 10px ${deckColor}30` : undefined
              }}
            >
              <img 
                src={slide.image} 
                alt="" 
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/80 font-mono text-[8px] text-center text-white/60 py-0.5">
                {String(index + 1).padStart(2, '0')}
              </div>
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};
