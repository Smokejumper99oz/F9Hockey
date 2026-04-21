"use client";

import { useCallback, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "f9-home-intro-complete";

/** Total time before overlay unmount + session flag (matches CSS sequence). */
const INTRO_TOTAL_MS = 5300;

export function HomeIntroSplash() {
  const [visible, setVisible] = useState(false);

  const complete = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore quota / private mode */
    }
    setVisible(false);
  }, []);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        return;
      }
      setVisible(true);
    } catch {
      return;
    }
  }, []);

  useLayoutEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(complete, INTRO_TOTAL_MS);
    return () => window.clearTimeout(t);
  }, [visible, complete]);

  if (!visible) return null;

  return (
    <div
      className="home-intro-root fixed inset-0 z-[200] flex items-center justify-center bg-zinc-950"
      aria-hidden
    >
      <div className="home-intro-inner flex items-center gap-4 sm:gap-5">
        <div className="home-intro-puck" />
        <div className="home-intro-brand">
          <span className="text-xl font-semibold tracking-[0.18em] text-white sm:text-2xl">
            F9 Hockey
          </span>
        </div>
      </div>
    </div>
  );
}
