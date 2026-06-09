---
name: Vital Serenity
colors:
  surface: '#f8faf9'
  surface-dim: '#d7dfdc'
  surface-bright: '#f8faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f5f4'
  surface-container: '#eaf0ec'
  surface-container-high: '#e4eae7'
  surface-container-highest: '#dde5e1'
  on-surface: '#0d1f17'
  on-surface-variant: '#414944'
  inverse-surface: '#22342b'
  inverse-on-surface: '#e1f6e9'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3e6752'
  primary: '#002d1c'
  on-primary: '#ffffff'
  primary-container: '#1a4331'
  on-primary-container: '#85b098'
  inverse-primary: '#a4d0b8'
  secondary: '#4f635b'
  on-secondary: '#ffffff'
  secondary-container: '#cfe5db'
  on-secondary-container: '#53675f'
  tertiary: '#4f0e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d230f'
  on-tertiary-container: '#f3896d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0edd3'
  primary-fixed-dim: '#a4d0b8'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#264e3c'
  secondary-fixed: '#d2e7de'
  secondary-fixed-dim: '#b6cbc2'
  on-secondary-fixed: '#0c1f19'
  on-secondary-fixed-variant: '#374b44'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#7c2e19'
  background: '#FAF9F6'
  on-background: '#0d1f17'
  surface-variant: '#d3e7db'
  muted-sage: '#8CA396'
  accent-hover: '#C86247'
  glass-surface: rgba(250, 249, 246, 0.8)
typography:
  hero-display:
    fontFamily: Fraunces
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  quote-text:
    fontFamily: Fraunces
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.5'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  small-text:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  headline-lg-mobile:
    fontFamily: Fraunces
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 120px
  grid-gutter: 24px
  card-offset: 60px
  image-overlap: 80px
  container-max: 1280px
---

## Brand & Style

The design system is built upon the philosophy of **Natural Dynamism**. It deliberately moves away from the rigid, clinical architecture of traditional healthcare to create a "refuge" that feels proactive and welcoming. The brand personality is grounded yet restorative, evoking the feeling of a forest sanctuary.

The visual style is a blend of **Organic Minimalism** and **Modern Asymmetry**. It leverages intentional "broken" layouts, fluid shapes, and deep botanical tones to create a sense of movement and vitality. By using overlapping layers and organic masks, the UI mirrors the unpredictable yet harmonious patterns found in nature, providing a professional experience that prioritizes emotional safety and growth.

## Colors

This color palette is rooted in a biophilic foundation. **Forest Green** (Primary) acts as the anchor, providing a sense of stability and professional authority. It is contrasted by **Pale Mint** (Secondary), which serves as a breathable surface color for organic elements. 

**Terracotta** (Tertiary/Accent) is used strategically to inject warmth and vitality, serving as the primary driver for call-to-action elements. The background is a soft **Off-White**, reducing eye strain and providing a more natural canvas than pure white. All typography is rendered in **Dark Moss** to maintain a softer, high-contrast readability that feels more organic than pure black.

## Typography

The typography strategy pairs the expressive, high-contrast serif **Fraunces** with the pragmatic geometric sans-serif **DM Sans**. 

Fraunces is reserved for headings and quotes, providing an editorial and intellectual feel. Its soft curves complement the organic shapes used throughout the UI. DM Sans handles all functional text and body copy, ensuring clarity and modern readability. Large display headings should utilize negative letter spacing to feel more cohesive, while small labels use generous tracking and uppercase styling for a sophisticated, disciplined look.

## Layout & Spacing

This design system utilizes a **Dynamic Asymmetrical Grid**. While based on a 12-column foundation, the layout intentionally breaks the grid to create visual interest.

- **Asymmetry**: Implement a 60px vertical offset on the middle item of 3-column grids (e.g., service cards).
- **Overlaps**: Text boxes and images should overlap by 80px to create depth. Images often carry a -40px Y-axis offset relative to their sibling containers.
- **Fluidity**: Use wide 120px gaps between major sections to allow the content to "breathe."
- **Mobile Reflow**: On mobile, asymmetrical offsets are neutralized to a single-column flow with 24px side margins, maintaining the organic feel through blob-shaped image masks rather than complex positioning.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Ambient Shadows** rather than traditional elevation levels. 

- **Soft Shadows**: Use a primary-tinted shadow `0 20px 40px rgba(26, 67, 49, 0.08)` for overlapping photos and floating cards.
- **Glassmorphism**: The primary navigation utilizes a sticky `backdrop-blur` (10px) with a semi-transparent off-white tint to maintain context while scrolling.
- **Z-Index Strategy**: Establish a clear hierarchy where organic blobs sit at the base layer, photography at the middle layer, and critical text/CTA boxes at the highest elevation to ensure legibility over complex backgrounds.

## Shapes

The cornerstone of the visual language is the **Organic Blob**. This is defined by a complex, 8-value border-radius that creates a fluid, non-geometric shape. 

- **Image Masks**: All photography must be contained within these organic blob shapes.
- **Cards**: Functional cards (Methodology, Services) use a consistent 24px (rounded-lg) corner radius for a soft, approachable feel.
- **Interactive Elements**: Buttons are strictly pill-shaped (32px radius) to contrast against the more complex organic shapes.

## Components

### Buttons & Interactive
- **Primary CTA**: Pill-shaped with Terracotta background and Off-White text. On hover, translate -2px on the Y-axis and shift to a deeper terracotta.
- **Secondary CTA**: Forest Green text with a bottom-only 2px border.

### Cards
- **Service Cards**: 320px wide with a 2px Pale Mint border. On hover, the border transitions to Forest Green and the internal icon blob scales by 10%.
- **Methodology Cards**: Pale Mint background with 24px radius, featuring staggered entrance animations.

### Inputs & Forms
- **Style**: Minimalist approach using only a bottom border (2px Sage). 
- **States**: On focus, the bottom border thickens to 4px and changes to Forest Green. Placeholders use Muted Sage.

### Imagery & Icons
- **Photography**: Portraits should feel candid and natural, always masked in the `blob_radius`.
- **Icons**: Thin-stroke Forest Green line art, always layered over a small, decorative Pale Mint organic blob.