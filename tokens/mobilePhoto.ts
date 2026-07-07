/**
 * MOBILE-PHOTO PRESET — a fourth Apariencia option (alongside palette, fotoShape,
 * heroVariant). Controls whether the Hero photo renders on mobile for the variants
 * that have a photo (Fondo, Pregunta, Dividido). Variants without a photo (Emblema,
 * Carta, Solo texto) ignore this setting.
 *
 * Rationale: Fondo hides its full-bleed photo on mobile by default because a wide
 * hero shot can't read on a narrow portrait screen and would collide with the
 * Sobre-mí portrait directly below. But Alberto may want mobile to lead with the
 * photo (Pregunta/Dividido do that already). This preset lets him decide instead
 * of hard-coding a behavior.
 *
 * Mirrors the palette pipeline in tokens/palettes.ts: picked in the CMS (Sanity
 * Apariencia singleton) and passed to <Hero> as a prop; Hero uses it to swap the
 * mobile visibility class on the photo column.
 */

export type MobilePhotoSlug = 'mostrar' | 'ocultar';

/** Rendered when the CMS has no selection (or an unknown slug). */
export const DEFAULT_MOBILE_PHOTO: MobilePhotoSlug = 'mostrar';

/** {title, value} list for the Sanity dropdown — Spanish titles, default first. */
export const mobilePhotoOptions: { title: string; value: MobilePhotoSlug }[] = [
  { title: 'Mostrar foto en móvil', value: 'mostrar' },
  { title: 'Solo texto en móvil (ocultar foto)', value: 'ocultar' },
];

/** Normalise an arbitrary CMS value to a known slug, falling back to the default. */
export function resolveMobilePhoto(value: unknown): MobilePhotoSlug {
  return value === 'mostrar' || value === 'ocultar'
    ? value
    : DEFAULT_MOBILE_PHOTO;
}
