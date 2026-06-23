/**
 * INSTAGRAM-LAYOUT PRESET — a fifth Apariencia option alongside `palette`,
 * `fotoShape`, `heroVariant` and `seam`. Selects how the "Sígueme en redes"
 * section (components/sections/Redes.tsx) arranges Alberto's Instagram posts.
 * Like `heroVariant` (and unlike the pure-CSS skins), the variants differ
 * STRUCTURALLY, so the section branches its markup on the slug rather than
 * relying on CSS alone.
 *
 *  - destacado: one large featured post anchors the copy, supported by a small
 *               grid of recent posts. Asymmetric/editorial — the warm-clinician
 *               option. DEFAULT.
 *  - galeria:   a clean responsive grid of equal square posts (2 across on
 *               mobile, 4 on desktop) under a left-aligned heading — the
 *               faithful adaptation of the hedone.es Instagram strip.
 *
 * Content TYPE (square posts vs vertical reels) is an orthogonal toggle
 * (`igContentType`) that only changes the thumbnail aspect ratio — it applies
 * to whichever layout is selected.
 *
 * Mirrors the palette/fotoShape/heroVariant/seam pipeline: picked in the CMS
 * (Sanity Apariencia singleton), mirrored onto <html> as
 * `data-ig-layout="<slug>"`, and passed to <Redes> as a prop.
 */

export type IgLayoutSlug = 'destacado' | 'galeria';

/** Rendered when the CMS has no selection (or an unknown slug). */
export const DEFAULT_IG_LAYOUT: IgLayoutSlug = 'destacado';

/** {title, value} list for the Sanity dropdown — Spanish titles, default first. */
export const igLayoutOptions: { title: string; value: IgLayoutSlug }[] = [
  { title: 'Destacado + cuadrícula', value: 'destacado' },
  { title: 'Galería', value: 'galeria' },
];

const IG_LAYOUT_SLUGS: readonly IgLayoutSlug[] = ['destacado', 'galeria'];

/** Normalise an arbitrary CMS value to a known slug, falling back to the default. */
export function resolveIgLayout(value: unknown): IgLayoutSlug {
  return IG_LAYOUT_SLUGS.includes(value as IgLayoutSlug)
    ? (value as IgLayoutSlug)
    : DEFAULT_IG_LAYOUT;
}

/* ── Content type (posts vs reels) ────────────────────────────────────────
 * Orthogonal to layout: switches the thumbnail aspect ratio only.
 *  - posts: square 1:1 thumbnails (feed posts).
 *  - reels: vertical 9:16 thumbnails (reels).
 */

export type IgContentType = 'posts' | 'reels';

export const DEFAULT_IG_CONTENT_TYPE: IgContentType = 'posts';

export const igContentTypeOptions: { title: string; value: IgContentType }[] = [
  { title: 'Publicaciones (1:1)', value: 'posts' },
  { title: 'Reels (9:16)', value: 'reels' },
];

export function resolveIgContentType(value: unknown): IgContentType {
  return value === 'posts' || value === 'reels' ? value : DEFAULT_IG_CONTENT_TYPE;
}
