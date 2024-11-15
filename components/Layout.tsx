// components/Layout.tsx
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const SmoothScrollWrapper = dynamic(
  () => import('./Smoothscroll').then((mod) => mod.Smoothscroll),
  { ssr: false }
);

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <SmoothScrollWrapper>{children}</SmoothScrollWrapper>;
};