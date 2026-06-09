/**
 * VISUAL IDENTITY — single source of truth.
 *
 * Edit this file intentionally when you want to change how the site looks.
 * Import into tailwind.config.ts; never hard-code these values elsewhere.
 *
 * Palette: Presencia Orgánica · Sage greens neutros (DESIGN.md v2-presencia-fluida)
 * Type: Ysabeau (display) · Atkinson Hyperlegible Next (body) · Open Sans (ui)
 */

export const colors = {
  ground:          '#f9f9f7',
  'ground-raised': '#ffffff',
  'ground-soft':   '#f4f4f2',
  'ground-deep':   '#2f3130',
  'accent-light':  '#ccead3',
  accent:          '#476250',
  'accent-deep':   '#607b68',
  border:          '#c2c8c1',
  ink:             '#1a1c1b',
  'ink-muted':     '#424843',
  'ink-ghost':     '#727973',
  'ink-on-brand':  '#ffffff',
  'feedback-error':'#b91c1c',
};

export const borderRadius = {
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  pill: '9999px',
  btn:  '8px',
};

export const spacing = {
  'section-x':      '3rem',
  'section-x-sm':   '1.5rem',
  'container':      '1200px',
};

// CSS variable names injected by next/font — see app/layout.tsx
export const fontFamily = {
  display: ['var(--font-ysabeau)', 'Georgia', 'serif'],
  body:    ['var(--font-atkinson)', 'system-ui', 'sans-serif'],
  ui:      ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
};

type FontSizeEntry = [string, { lineHeight?: string; letterSpacing?: string; fontWeight?: number }];

export const fontSize: Record<string, FontSizeEntry> = {
  'h1':          ['clamp(2.25rem, 4vw + 0.5rem, 3.5rem)',  { lineHeight: '1.07', letterSpacing: '-0.01em', fontWeight: 700 }],
  'h2':          ['clamp(1.75rem, 2.5vw + 0.5rem, 2.25rem)', { lineHeight: '1.1',  letterSpacing: '-0.005em', fontWeight: 600 }],
  'h2-lg':       ['clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)',  { lineHeight: '1.1',  letterSpacing: '-0.005em', fontWeight: 600 }],
  'body-lg':     ['1.125rem', { lineHeight: '1.75', fontWeight: 400 }],
  'body-md':     ['1rem',     { lineHeight: '1.7',  fontWeight: 400 }],
  'body-sm':     ['0.875rem', { lineHeight: '1.65', fontWeight: 400 }],
  'label':       ['0.75rem',  { lineHeight: '1.0',  letterSpacing: '0.08em', fontWeight: 600 }],
  'label-nav':   ['0.875rem', { lineHeight: '1.0',  fontWeight: 500 }],
  'label-btn':   ['0.9375rem',{ lineHeight: '1.0',  letterSpacing: '0.02em', fontWeight: 700 }],
  'eyebrow-conv':['clamp(1rem, 1.5vw, 1.2rem)', { lineHeight: '1.5', fontWeight: 400 }],
};
