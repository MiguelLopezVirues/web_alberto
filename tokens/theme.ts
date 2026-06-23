/**
 * VISUAL IDENTITY — single source of truth.
 *
 * Edit this file intentionally when you want to change how the site looks.
 * Import into tailwind.config.ts; never hard-code these values elsewhere.
 *
 * Palette: Presencia Orgánica · Sage greens neutros (DESIGN.md v2-presencia-fluida)
 * Type: Ysabeau (display) · Atkinson Hyperlegible Next (body) · Open Sans (ui)
 */

// Colors are bound to runtime CSS variables injected per-direction in layout.tsx
// (see tokens/palettes.ts). This is the curated 17-token schema — NOT the old
// M3/HCT slots. Switching `ACTIVE` re-themes every utility class at runtime.
export const colors = {
  paper:          'var(--paper)',
  'paper-alt':    'var(--paper-alt)',
  'paper-deep':   'var(--paper-deep)',
  soft:           'var(--soft)',
  'soft-ink':     'var(--soft-ink)',
  band:           'var(--band)',
  'band-ink':     'var(--band-ink)',
  ink:            'var(--ink)',
  'ink-soft':     'var(--ink-soft)',
  'ink-ghost':    'var(--ink-ghost)',
  accent:         'var(--accent)',
  'accent-deep':  'var(--accent-deep)',
  action:         'var(--action)',
  'action-ink':   'var(--action-ink)',
  jewel:          'var(--jewel)',
  'jewel-ink':    'var(--jewel-ink)',
  'jewel-tint':   'var(--jewel-tint)',
  footer:         'var(--footer)',
  'footer-ink':   'var(--footer-ink)',
  line:           'var(--line)',
  'line-soft':    'var(--line-soft)',
  'feedback-error':'var(--feedback-error)',
};

export const borderRadius = {
  sm:    '4px',
  md:    '8px',
  lg:    '12px',
  card:  '22px',
  panel: '26px',
  pill:  '9999px',
  btn:   '8px',
};

// Elevation — ink-tinted (never neutral black) so each palette tints its own
// shadow. `float` is the signature soft lift (floating contact card); `card` is
// the resting surface; `lift` is the hover state. Apply via shadow-* utilities.
export const boxShadow = {
  card:  '0 1px 2px color-mix(in srgb, var(--ink) 6%, transparent), 0 14px 30px -20px color-mix(in srgb, var(--ink) 22%, transparent)',
  float: '0 30px 60px -42px color-mix(in srgb, var(--ink) 35%, transparent)',
  lift:  '0 4px 14px -8px color-mix(in srgb, var(--ink) 25%, transparent)',
};

export const spacing = {
  'section-x':      '3rem',
  'section-x-sm':   '1.25rem',
  'nav-x':          '3.5rem',
  'nav-x-sm':       '2rem',
  'container':      '1200px',
};

// max-w-* reads from its own theme key, not `spacing` — mirror it here.
export const maxWidth = {
  container: spacing.container,
};

// Interaction timing — keep hover/focus transitions consistent.
export const transitionDuration = {
  fast: '180ms',
};

// Font families use a two-level indirection: next/font injects the raw face vars
// (--font-ysabeau, --font-fraunces, …), then the [data-font-preset] blocks in
// globals.css map them onto the semantic --font-display / --font-body / --font-ui
// slots per curated trio (tokens/fontPreset.ts). Tailwind utilities (font-display,
// font-body, font-ui) always reference the semantic vars — never the raw face vars.
export const fontFamily = {
  display: ['var(--font-display)', 'Georgia', 'serif'],
  body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
  ui:      ['var(--font-ui)', 'system-ui', 'sans-serif'],
};

type FontSizeEntry = [string, { lineHeight?: string; letterSpacing?: string; fontWeight?: number }];

export const fontSize: Record<string, FontSizeEntry> = {
  // Fluid scale: clamp(mobile floor, vw track, desktop ceiling ≈ +~10%).
  // h1 is intentionally left static — the hero title size is dialed in.
  'h1':          ['clamp(2.25rem, 4vw + 0.5rem, 3.5rem)',  { lineHeight: '1.07', letterSpacing: '-0.01em', fontWeight: 700 }],
  'h2':          ['clamp(1.875rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.005em', fontWeight: 600 }],
  'h2-lg':       ['clamp(1.875rem, 3vw + 0.5rem, 2.75rem)',  { lineHeight: '1.1',  letterSpacing: '-0.005em', fontWeight: 600 }],
  'h3':          ['clamp(1.0625rem, 0.4vw + 0.9625rem, 1.1875rem)', { lineHeight: '1.25' }],
  'h3-lg':       ['clamp(1.1rem, 0.4vw + 1rem, 1.2rem)',    { lineHeight: '1.2'  }],
  'h3-xl':       ['clamp(1.25rem, 0.4vw + 1.15rem, 1.375rem)',   { lineHeight: '1.3'  }],
  'body-lg':     ['clamp(1.125rem, 0.4vw + 1.025rem, 1.25rem)', { lineHeight: '1.75', fontWeight: 400 }],
  'body-md':     ['clamp(1rem, 0.4vw + 0.9rem, 1.0625rem)',     { lineHeight: '1.7',  fontWeight: 400 }],
  'body-base':   ['clamp(0.9375rem, 0.4vw + 0.8375rem, 1.0625rem)', { lineHeight: '1.65', fontWeight: 400 }],
  'body-sm':     ['clamp(0.875rem, 0.4vw + 0.775rem, 0.9375rem)', { lineHeight: '1.65', fontWeight: 400 }],
  'tag':         ['clamp(0.6875rem, 0.4vw + 0.5875rem, 0.75rem)', { lineHeight: '1' }],
  'label':       ['clamp(0.75rem, 0.4vw + 0.65rem, 0.8125rem)',  { lineHeight: '1.0',  letterSpacing: '0.08em', fontWeight: 600 }],
  'label-nav':   ['clamp(0.875rem, 0.4vw + 0.775rem, 0.9375rem)', { lineHeight: '1.0',  fontWeight: 500 }],
  'label-btn':   ['clamp(0.9375rem, 0.4vw + 0.8375rem, 1rem)',   { lineHeight: '1.0',  letterSpacing: '0.02em', fontWeight: 700 }],
  'eyebrow-conv':['clamp(1.1rem, 0.5vw + 1rem, 1.3rem)', { lineHeight: '1.5', fontWeight: 400 }],
};
