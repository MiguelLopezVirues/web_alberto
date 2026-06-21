import type { Metadata } from 'next';
import { Ysabeau, Atkinson_Hyperlegible_Next, Open_Sans } from 'next/font/google';
import { site } from '@/tokens/site';
import { spacing } from '@/tokens/theme';
import { paletteCss, resolvePalette } from '@/tokens/palettes';
import { resolveFotoShape } from '@/tokens/fotoShape';
import { getAppearance } from '@/sanity/queries';
import './globals.css';

// Spacing tokens as CSS vars (used inside color-mix()/calc()). Colors are now
// supplied by the per-direction palette blocks injected below (tokens/palettes.ts).
const tokenVars = {
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const appearance = await getAppearance();
  const palette = resolvePalette(appearance?.palette);
  const fotoShape = resolveFotoShape(appearance?.fotoShape);

  return (
    <html
      lang="es"
      data-palette={palette}
      data-foto-shape={fotoShape}
      data-texture="on"
      className={`scroll-smooth ${ysabeau.variable} ${atkinson.variable} ${openSans.variable}`}
      style={tokenVars}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: paletteCss() }} />
      </head>
      <body className="bg-paper text-ink font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
