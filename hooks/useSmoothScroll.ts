'use client';

import { useEffect, useCallback, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal';
  wheelMultiplier?: number;
  smooth?: boolean;
}

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time);
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const options: LenisOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smooth: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    };

    lenisRef.current = new Lenis(options);

    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      if (typeof window !== 'undefined') {
        window.cancelAnimationFrame(requestAnimationFrame(raf));
      }
    };
  }, [raf]);

  return lenisRef.current;
};