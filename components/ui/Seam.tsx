import type { CSSProperties } from 'react';

/**
 * Section seam — the intentional boundary between two stacked sections. The
 * visual style is driven entirely by the `seam` Apariencia preset
 * (`data-seam` on <html>; see tokens/seam.ts + the `.seam` rules in
 * app/globals.css). This component only declares WHICH two surfaces meet, via
 * the `--seam-from` (section above) and `--seam-to` (section below) CSS vars,
 * so the gradient/arc/deckle can blend the correct palette surfaces.
 *
 * The `deckle` style references a global SVG filter (#seam-deckle) rendered once
 * by <SeamDefs />.
 */

const SURFACE_VAR = {
  paper: 'var(--paper)',
  'paper-alt': 'var(--paper-alt)',
  'paper-deep': 'var(--paper-deep)',
  soft: 'var(--soft)',
  band: 'var(--band)',
  footer: 'var(--footer)',
} as const;

export type SeamSurface = keyof typeof SURFACE_VAR;

/**
 * `flip` mirrors the shaped edge vertically (the *upper* surface descends into
 * the lower instead of the lower rising into the upper). Used so the two seams
 * framing the Testimonios band curve symmetrically — band top bulges up, band
 * bottom bulges down — reading as one deliberate "beat", not a repeated stamp.
 */
export function Seam({
  from,
  to,
  flip = false,
}: {
  from: SeamSurface;
  to: SeamSurface;
  flip?: boolean;
}) {
  return (
    <div
      className={flip ? 'seam seam--flip' : 'seam'}
      aria-hidden="true"
      style={
        {
          '--seam-from': SURFACE_VAR[from],
          '--seam-to': SURFACE_VAR[to],
        } as CSSProperties
      }
    />
  );
}

/**
 * Rendered ONCE per page. Holds the torn-paper (`deckle`) SVG filter referenced
 * by `.seam::after { filter: url(#seam-deckle) }`. Same fractalNoise family as
 * the grain (app/globals.css) so texture + seam share one visual language.
 */
export function SeamDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <filter id="seam-deckle" x="-5%" y="-60%" width="110%" height="220%">
        <feTurbulence type="fractalNoise" baseFrequency="0.013 0.022" numOctaves="2" seed="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

export default Seam;
