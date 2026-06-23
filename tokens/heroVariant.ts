/**
 * HERO VARIANT PRESET — a third Apariencia option alongside `palette` and `fotoShape`.
 * Selects the Hero section's layout. Unlike palette/fotoShape (pure-CSS skins over a
 * fixed DOM), the variants differ structurally, so Hero branches its markup on the slug
 * instead of relying on CSS alone — that also avoids shipping the photo for text-only grammars.
 *
 * Two families:
 *
 * Authored grammars (from-scratch — drop the kicker→headline→subcopy→button skeleton,
 * no portrait, quiet text-link CTA, letterhead signature):
 *  - pregunta: mirrors the visitor (a question they carry), then grounds it — text left,
 *              photo right (the wide hero shot, column-cropped). DEFAULT. NOTE: uses new
 *              copy (site.hero.pregunta*) — pending Alberto's sign-off.
 *  - emblema:  the brain/speech-bubble mark is the hero's subject (mind + conversation),
 *              paired with the opening line. The one motivated shape the brand owns.
 *  - carta:    a spoken opening — the line set large like the first sentence of a letter,
 *              pure type + air, closed by a letterhead signature. Faint mark watermark.
 *              NOTE: emblema + carta are kept in code but DEACTIVATED from the CMS picker
 *              (omitted from heroVariantOptions); re-add them there to re-enable.
 *
 * Legacy "landing" grammars (kept selectable; the original skeleton, photo-led):
 *  - fondo:    full-bleed photo with the text overlaid on a soft paper scrim.
 *  - dividido: text column + photo column (the original split — stacked on mobile).
 *  - texto:    text only, no hero photo (Alberto's face still appears in "Sobre mí").
 *
 * Mirrors the palette/fotoShape pipeline: picked in the CMS (Sanity Apariencia singleton),
 * mirrored onto <html> as `data-hero-variant="<slug>"`, and passed to <Hero> as a prop.
 */

export type HeroVariantSlug =
  | 'emblema'
  | 'carta'
  | 'pregunta'
  | 'fondo'
  | 'dividido'
  | 'texto';

/** Rendered when the CMS has no selection (or an unknown slug). */
export const DEFAULT_HERO_VARIANT: HeroVariantSlug = 'pregunta';

const HERO_VARIANT_SLUGS: readonly HeroVariantSlug[] = [
  'emblema',
  'carta',
  'pregunta',
  'fondo',
  'dividido',
  'texto',
];

/** {title, value} list for the Sanity dropdown — Spanish titles, authored grammars first.
 *  emblema + carta are intentionally omitted (deactivated from the picker; code retained). */
export const heroVariantOptions: { title: string; value: HeroVariantSlug }[] = [
  { title: 'Pregunta (cercana)', value: 'pregunta' },
  { title: 'Imagen de fondo', value: 'fondo' },
  { title: 'Retrato dividido', value: 'dividido' },
  { title: 'Solo texto', value: 'texto' },
];

/** Normalise an arbitrary CMS value to a known slug, falling back to the default. */
export function resolveHeroVariant(value: unknown): HeroVariantSlug {
  return HERO_VARIANT_SLUGS.includes(value as HeroVariantSlug)
    ? (value as HeroVariantSlug)
    : DEFAULT_HERO_VARIANT;
}