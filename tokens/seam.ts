/**
 * SECTION-SEAM PRESET — a fourth Apariencia option alongside `palette`,
 * `fotoShape` and `heroVariant`. Selects how the boundary between two stacked
 * sections is drawn (static — no motion). The chosen style is mirrored onto
 * <html> as `data-seam="<slug>"` and the `Seam` element between sections
 * (components/ui/Seam.tsx) reads it via CSS.
 *
 *  - arc:      one shallow organic curve; the next surface rises into the prior. DEFAULT.
 *              Calm + organic, the "interesting but quiet" option.
 *  - deckle:   an irregular torn-paper edge, generated from the SAME feTurbulence
 *              noise as the grain — the most distinctive, ties to the paper metaphor.
 *  - hairline: a thin ink-tinted rule + a small centred notch. Most rigorous/clinical.
 *  - bleed:    surfaces melt into each other via a vertical gradient (no visible edge).
 *  - none:     no seam at all — clean butt-joins everywhere (fully flat site).
 *
 * Seams are placed SPARINGLY in app/page.tsx (only framing the colored Testimonios
 * "band" beat), never at every boundary — this preset only sets their STYLE.
 * Mirrors the palette/fotoShape/heroVariant pipeline (Sanity Apariencia singleton).
 */

export type SeamSlug = 'arc' | 'deckle' | 'hairline' | 'bleed' | 'none';

/** Rendered when the CMS has no selection (or an unknown slug). */
export const DEFAULT_SEAM: SeamSlug = 'arc';

/** {title, value} list for the Sanity dropdown — Spanish titles, default first. */
export const seamOptions: { title: string; value: SeamSlug }[] = [
  { title: 'Arco suave', value: 'arc' },
  { title: 'Borde de papel', value: 'deckle' },
  { title: 'Línea fina', value: 'hairline' },
  { title: 'Degradado', value: 'bleed' },
  { title: 'Ninguna', value: 'none' },
];

const SEAM_SLUGS: readonly SeamSlug[] = ['arc', 'deckle', 'hairline', 'bleed', 'none'];

/** Normalise an arbitrary CMS value to a known slug, falling back to the default. */
export function resolveSeam(value: unknown): SeamSlug {
  return SEAM_SLUGS.includes(value as SeamSlug) ? (value as SeamSlug) : DEFAULT_SEAM;
}
