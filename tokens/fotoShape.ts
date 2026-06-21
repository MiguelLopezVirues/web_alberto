/**
 * PHOTO-SHAPE PRESET — a second Apariencia option alongside `palette`.
 * Selects how the Hero / Sobre-mí photos are framed:
 *  - rectangular: the current full-bleed rectangular columns (default, the "before").
 *  - organica:    an organic blob-frame mask (border-radius: var(--shape-b)) with a
 *                 soft ambient blob behind it.
 *
 * Mirrors the palette pipeline in tokens/palettes.ts: picked in the CMS (Sanity
 * Apariencia singleton), rendered via `data-foto-shape="<slug>"` on <html>, and
 * consumed by Hero/SobreMi through that attribute (no per-component config).
 */

export type FotoShapeSlug = 'rectangular' | 'organica';

/** Rendered when the CMS has no selection (or an unknown slug). */
export const DEFAULT_FOTO_SHAPE: FotoShapeSlug = 'rectangular';

/** {title, value} list for the Sanity dropdown — Spanish titles, default first. */
export const fotoShapeOptions: { title: string; value: FotoShapeSlug }[] = [
  { title: 'Rectangular', value: 'rectangular' },
  { title: 'Orgánica', value: 'organica' },
];

/** Normalise an arbitrary CMS value to a known slug, falling back to the default. */
export function resolveFotoShape(value: unknown): FotoShapeSlug {
  return value === 'rectangular' || value === 'organica'
    ? value
    : DEFAULT_FOTO_SHAPE;
}
