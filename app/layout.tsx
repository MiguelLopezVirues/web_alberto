import type { Metadata } from 'next';
import { Ysabeau, Atkinson_Hyperlegible_Next, Open_Sans } from 'next/font/google';
import { site } from '@/tokens/site';
import { colors, spacing } from '@/tokens/theme';
import './globals.css';

// Expose design tokens as CSS custom properties so raw values never get
// hard-coded inside color-mix()/calc() expressions. Single source of truth
// stays in tokens/theme.ts. Colors → --color-*, spacing → --space-*.
const tokenVars = {
  ...Object.fromEntries(Object.entries(colors).map(([k, v]) => [`--color-${k}`, v])),
  ...Object.fromEntries(Object.entries(spacing).map(([k, v]) => [`--space-${k}`, v])),
} as React.CSSProperties;

const ysabeau = Ysabeau({
  subsets: ['latin'],
  variable: '--font-ysabeau',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ['latin'],
  variable: '--font-atkinson',
  weight: ['400', '500', '600'],
  display: 'swap',
  adjustFontFallback: false,
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${ysabeau.variable} ${atkinson.variable} ${openSans.variable}`}
      style={tokenVars}
    >
      <body className="bg-ground text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
