import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

export type World = 'frontend' | 'backend';
export type View = 'gate' | 'world';
export type HoverState = 'none' | 'frontend' | 'backend';

interface WorldContextValue {
  view: View;
  world: World;
  hoverState: HoverState;
  setHoverState: (state: HoverState) => void;
  /** Choose a world from the entry gate and enter it. */
  enter: (world: World) => void;
  /** Switch the active world without leaving the portfolio (HUD toggle). */
  setWorld: (world: World) => void;
  /** Return to the entry gate. */
  toGate: () => void;
}

const WorldContext = createContext<WorldContextValue | null>(null);

const STORAGE_KEY = 'severus-world';

function readStoredWorld(): World {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'frontend' || v === 'backend') return v;
  } catch {
    /* localStorage unavailable */
  }
  return 'backend';
}

export function WorldProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>('gate');
  const [world, setWorldState] = useState<World>(readStoredWorld);
  const [hoverState, setHoverState] = useState<HoverState>('none');

  // Reflect the active world onto <html> so CSS tokens swap.
  useEffect(() => {
    document.documentElement.dataset.world = world;
  }, [world]);

  const setWorld = useCallback((next: World) => {
    setWorldState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const enter = useCallback(
    (next: World) => {
      setWorld(next);
      setView('world');
    },
    [setWorld],
  );

  const toGate = useCallback(() => setView('gate'), []);

  return (
    <WorldContext.Provider value={{ view, world, hoverState, setHoverState, enter, setWorld, toGate }}>
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld(): WorldContextValue {
  const ctx = useContext(WorldContext);
  if (!ctx) throw new Error('useWorld must be used within a WorldProvider');
  return ctx;
}

