/**
 * CURATED PALETTE PRESETS — OKLCH-first, identity-led curation (NOT an M3/HCT derivation).
 * Four locked presets in one shared 20-token schema. The client picks one in the CMS
 * (Apariencia → Paleta de color); it renders via `data-palette="<slug>"` on <html>.
 *
 * Curated in design-system-forge (docs/working/web_alberto-presets.ts):
 *  - olive-grove / clay-pot: curated this pass (OKLCH-authored, gamut-checked, WCAG AA/AAA).
 *  - salvia-suave: extracted from the Claude/Stitch design, accent-deep darkened to AA.
 *  - presencia-fluida: the original shipped v2 — the honest "before". DEFAULT.
 *
 * Values are the single source of truth. Never hard-code these hexes elsewhere —
 * consume them through Tailwind classes / CSS vars (see tokens/theme.ts).
 */

export type PaletteToken =
  | 'paper' | 'paper-alt' | 'paper-deep' | 'soft' | 'soft-ink'
  | 'band' | 'band-ink' | 'ink' | 'ink-soft' | 'ink-ghost'
  | 'accent' | 'accent-deep' | 'action' | 'action-ink'
  | 'jewel' | 'jewel-ink' | 'footer' | 'footer-ink' | 'line' | 'feedback-error';

export type Palette = Record<PaletteToken, string>;

export type PaletteSlug = 'presencia-fluida' | 'olive-grove' | 'clay-pot' | 'salvia-suave';

type Preset = { label: string; note: string; colors: Palette };

/** Ordered: default first — this order drives the CMS dropdown. */
export const presets: Record<PaletteSlug, Preset> = {
  'presencia-fluida': {
    label: 'Presencia fluida',
    note: 'Versión original. Mono-verde neutralizado, papel casi blanco, neutros casi acromáticos — el "antes".',
    colors: {
      paper: '#f9f9f7', 'paper-alt': '#ffffff', 'paper-deep': '#f0f1ef',
      soft: '#f4f4f2', 'soft-ink': '#424843',
      band: '#ccead3', 'band-ink': '#1a1c1b',
      ink: '#1a1c1b', 'ink-soft': '#424843', 'ink-ghost': '#727973',
      accent: '#607b68', 'accent-deep': '#495a51',
      action: '#476250', 'action-ink': '#ffffff',
      jewel: '#607b68', 'jewel-ink': '#495a51',
      footer: '#2f3130', 'footer-ink': '#ffffff',
      line: '#c2c8c1', 'feedback-error': '#b91c1c',
    },
  },
  'olive-grove': {
    label: 'Olivar',
    note: 'Verde oliva análogo, cálido y calmado; chispa terracota. Curado.',
    colors: {
      paper: '#f4f0e3', 'paper-alt': '#eae4d3', 'paper-deep': '#d4d2c3',
      soft: '#d5dbc2', 'soft-ink': '#243221',
      band: '#99b493', 'band-ink': '#1c2b19',
      ink: '#1c2b19', 'ink-soft': '#4d5e48', 'ink-ghost': '#788573',
      accent: '#758f6a', 'accent-deep': '#385632',
      action: '#43653f', 'action-ink': '#f4f0e3',
      jewel: '#bd6e55', 'jewel-ink': '#87462f',
      footer: '#293f26', 'footer-ink': '#f4f0e3',
      line: '#d6d5ca', 'feedback-error': '#a74639',
    },
  },
  'clay-pot': {
    label: 'Barro',
    note: 'Tierra cálida (arena→arcilla→cacao) + oliva como contrapunto + latón. Más carácter. Curado.',
    colors: {
      paper: '#f4ecde', 'paper-alt': '#eadbca', 'paper-deep': '#dbcbb9',
      soft: '#d5d2bc', 'soft-ink': '#3f271d',
      band: '#c09c88', 'band-ink': '#391f13',
      ink: '#391f13', 'ink-soft': '#6e5042', 'ink-ghost': '#8e7c6f',
      accent: '#77875f', 'accent-deep': '#43542b',
      action: '#91583e', 'action-ink': '#f4ecde',
      jewel: '#b48957', 'jewel-ink': '#7f5b30',
      footer: '#4d2c1d', 'footer-ink': '#f4ecde',
      line: '#dacfc3', 'feedback-error': '#ab4235',
    },
  },
  'salvia-suave': {
    label: 'Salvia suave',
    note: 'Diseño Claude/Stitch: arena cálida + verdes salvia, mono-verde (sin contrapunto). accent-deep ajustado a AA.',
    colors: {
      paper: '#F1EBDD', 'paper-alt': '#EAE2D0', 'paper-deep': '#E3D9C4',
      soft: '#D8E4D1', 'soft-ink': '#37463C',
      band: '#C7E3C6', 'band-ink': '#33423A',
      ink: '#33423A', 'ink-soft': '#5D6A5E', 'ink-ghost': '#8A948A',
      accent: '#B0D9B1', 'accent-deep': '#43604a',
      action: '#46604E', 'action-ink': '#F1EBDD',
      jewel: '#7FB587', 'jewel-ink': '#43604a',
      footer: '#3C4E43', 'footer-ink': '#DCE5D6',
      line: '#CDD3C5', 'feedback-error': '#a8443a',
    },
  },
};

/** Rendered when the CMS has no selection (or an unknown slug). */
export const DEFAULT_PALETTE: PaletteSlug = 'presencia-fluida';

/** {title, value} list for the Sanity dropdown — Spanish titles, default first. */
export const paletteOptions = (Object.keys(presets) as PaletteSlug[]).map((slug) => ({
  title: presets[slug].label,
  value: slug,
}));

/** Normalise an arbitrary CMS value to a known slug, falling back to the default. */
export function resolvePalette(value: unknown): PaletteSlug {
  return typeof value === 'string' && value in presets
    ? (value as PaletteSlug)
    : DEFAULT_PALETTE;
}

/**
 * Emit `[data-palette="<slug>"]{ --token: value; }` blocks for every preset.
 * Also emits two derived tokens so they're available as tokens rather than
 * re-derived at each call site:
 *  - `--jewel-tint`: jewel mixed into paper (soft jewel wash)
 *  - `--line-soft`: a softer hairline (the palette's `line` faded out) for
 *    low-emphasis tonal seams; pairs with `line` (16%) as a two-step ramp.
 */
export function paletteCss(): string {
  return (Object.keys(presets) as PaletteSlug[])
    .map((slug) => {
      const vars = Object.entries(presets[slug].colors)
        .map(([t, v]) => `--${t}:${v};`)
        .join('');
      const derived =
        '--jewel-tint:color-mix(in srgb, var(--jewel) 28%, var(--paper));' +
        '--line-soft:color-mix(in srgb, var(--line) 55%, transparent);';
      return `[data-palette="${slug}"]{${vars}${derived}}`;
    })
    .join('\n');
}
