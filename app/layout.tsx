import type { Metadata } from 'next';
import {
  Ysabeau,
  Fraunces,
  Newsreader,
  Lora,
  Bricolage_Grotesque,
  Bitter,
  Figtree,
  Schibsted_Grotesk,
  Hanken_Grotesk,
  Atkinson_Hyperlegible_Next,
} from 'next/font/google';
import { site } from '@/tokens/site';
import { spacing } from '@/tokens/theme';
import { paletteCss, resolvePalette } from '@/tokens/palettes';
import { resolveFotoShape } from '@/tokens/fotoShape';
import { resolveHeroVariant } from '@/tokens/heroVariant';
import { resolveSeam } from '@/tokens/seam';
import { resolveIgLayout, resolveIgContentType } from '@/tokens/igLayout';
import { resolveFontPreset, type FontPresetSlug } from '@/tokens/fontPreset';
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

// The faces below back the curated trios in tokens/fontPreset.ts. All are loaded
// regardless of the selected preset so there is no CLS when the preset switches.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
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

// UI / supporting sans faces — one per trio (labels, buttons, nav).
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Each preset attaches only its own three faces to <html>, so a visitor only
// downloads the trio they see (not all 10 faces). Body is Atkinson in every
// preset; the ui face repeats where two presets share one. The matching
// face → slot mapping lives in app/globals.css ([data-font-preset]).
const fontPresetVariables: Record<FontPresetSlug, string> = {
  lino:     `${ysabeau.variable} ${atkinson.variable} ${figtree.variable}`,
  tinta:    `${fraunces.variable} ${atkinson.variable}`,
  imprenta: `${newsreader.variable} ${atkinson.variable} ${schibsted.variable}`,
  remanso:  `${lora.variable} ${atkinson.variable} ${hanken.variable}`,
  tiza:     `${bricolage.variable} ${atkinson.variable} ${hanken.variable}`,
  roble:    `${bitter.variable} ${atkinson.variable} ${figtree.variable}`,
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const appearance = await getAppearance();
  const palette = resolvePalette(appearance?.palette);
  const fotoShape = resolveFotoShape(appearance?.fotoShape);
  const heroVariant = resolveHeroVariant(appearance?.heroVariant);
  const seam = resolveSeam(appearance?.seam);
  const igLayout = resolveIgLayout(appearance?.igLayout);
  const igContentType = resolveIgContentType(appearance?.igContentType);
  const fontPreset = resolveFontPreset(appearance?.fontPreset);

  return (
    <html
      lang="es"
      data-palette={palette}
      data-foto-shape={fotoShape}
      data-hero-variant={heroVariant}
      data-seam={seam}
      data-ig-layout={igLayout}
      data-ig-content={igContentType}
      data-font-preset={fontPreset}
      data-texture="on"
      className={`scroll-smooth ${fontPresetVariables[fontPreset]}`}
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
