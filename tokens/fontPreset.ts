/**
 * FONT PRESET — a sixth Apariencia option alongside palette, fotoShape,
 * heroVariant, seam, and igLayout. Each preset is a curated TRIO (display /
 * body / ui), applied to the whole site via CSS variables on
 * <html data-font-preset="…">. The actual face → slot binding lives in
 * app/globals.css; this file owns the slug list, titles, and resolver.
 *
 * Like the palettes (olive-grove/Olivar, clay-pot/Barro…), each preset is named
 * for a material SCENE, not a typographic category. Body is anchored to Atkinson
 * Hyperlegible in every preset (the legibility anchor) — the display face carries
 * the character, the ui face the supporting labels/buttons.
 *
 *  - lino:     Ysabeau / Atkinson / Figtree. DEFAULT. Sun-warmed linen — airy,
 *              clean, contemporary.
 *  - tinta:    Fraunces / Atkinson / Atkinson. Wet pen-ink on cream paper —
 *              warm old-style serif headlines, hyperlegible everywhere else.
 *  - imprenta: Newsreader / Atkinson / Schibsted Grotesk. Lead type on a printed
 *              page — high-contrast, authoritative, restrained.
 *  - remanso:  Lora / Atkinson / Hanken Grotesk. A still pool where the river
 *              slows — brushed, gentle serif; calm.
 *  - tiza:     Bricolage Grotesque / Atkinson / Hanken Grotesk. Chalk on a board —
 *              a crafted editorial grotesque with real character; modern, human.
 *  - roble:    Bitter / Atkinson / Figtree. Oak — a sturdy, warm slab serif;
 *              grounded and trustworthy, screen-legible at every size.
 *
 * Atkinson Hyperlegible is the body face in EVERY preset (the accessibility
 * anchor); the display faces are only ever used at large sizes.
 */

export type FontPresetSlug = 'lino' | 'tinta' | 'imprenta' | 'remanso' | 'tiza' | 'roble';

export const DEFAULT_FONT_PRESET: FontPresetSlug = 'lino';

/** {title, value} list for the Sanity radio — Spanish titles, default first. */
export const fontPresetOptions: { title: string; value: FontPresetSlug }[] = [
  { title: 'Lino', value: 'lino' },
  { title: 'Tinta', value: 'tinta' },
  { title: 'Imprenta', value: 'imprenta' },
  { title: 'Remanso', value: 'remanso' },
  { title: 'Tiza', value: 'tiza' },
  { title: 'Roble', value: 'roble' },
];

const FONT_PRESET_SLUGS: readonly FontPresetSlug[] = [
  'lino',
  'tinta',
  'imprenta',
  'remanso',
  'tiza',
  'roble',
];

/** Normalise an arbitrary CMS value to a known slug, falling back to the default. */
export function resolveFontPreset(value: unknown): FontPresetSlug {
  return FONT_PRESET_SLUGS.includes(value as FontPresetSlug)
    ? (value as FontPresetSlug)
    : DEFAULT_FONT_PRESET;
}
