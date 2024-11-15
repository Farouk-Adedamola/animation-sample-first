'use client';

import { ReactNode } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface SmoothScrollProps {
  children: ReactNode;
}

export function Smoothscroll({ children }: SmoothScrollProps) {
  useSmoothScroll();
  return <>{children}</>;
}