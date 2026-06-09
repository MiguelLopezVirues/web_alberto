---
name: Serene Equilibrium
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#434843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737872'
  outline-variant: '#c3c8c1'
  surface-tint: '#506354'
  primary: '#334537'
  on-primary: '#ffffff'
  primary-container: '#4a5d4e'
  on-primary-container: '#c0d5c2'
  inverse-primary: '#b7ccb9'
  secondary: '#566342'
  on-secondary: '#ffffff'
  secondary-container: '#d7e5bb'
  on-secondary-container: '#5a6745'
  tertiary: '#3f442a'
  on-tertiary: '#ffffff'
  tertiary-container: '#575b3f'
  on-tertiary-container: '#ced3b0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e8d5'
  primary-fixed-dim: '#b7ccb9'
  on-primary-fixed: '#0e1f13'
  on-primary-fixed-variant: '#394b3d'
  secondary-fixed: '#dae8be'
  secondary-fixed-dim: '#becca3'
  on-secondary-fixed: '#141f05'
  on-secondary-fixed-variant: '#3f4b2c'
  tertiary-fixed: '#e1e6c2'
  tertiary-fixed-dim: '#c5c9a7'
  on-tertiary-fixed: '#1a1d07'
  on-tertiary-fixed-variant: '#45492f'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-display:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 24px
  margin-mobile: 20px
  section-gap-lg: 120px
  section-gap-md: 80px
---

## Brand & Style

The design system is centered on the concept of "Guided Growth." It is crafted for a psychological practice that prioritizes emotional safety, professional excellence, and organic healing. The brand personality is empathetic and grounded, avoiding the sterile coldness of clinical environments or the generic nature of corporate templates.

The aesthetic blends **Minimalism** with **Tactile/Organic** influences. By utilizing expansive whitespace (breathable room), the interface reduces cognitive load for users who may be in a state of distress. The style feels "polished" through high-end editorial typography and subtle, natural-feeling depth, evoking the sensation of a high-quality physical journal or a tranquil, sun-lit consulting room.

## Colors

The palette is rooted in a biophilic spectrum designed to lower cortisol levels and project stability.

- **Primary (Forest Moss):** A deep, desaturated green used for high-level hierarchy, primary buttons, and grounding text. It represents the "authoritative but kind" presence of the therapist.
- **Secondary (Sage):** A muted middle-tone for accents and secondary UI elements, bridging the gap between deep forest and light neutrals.
- **Tertiary (Pale Mint):** A soft, breathable green used for subtle highlighting or large background containers.
- **Neutral (Warm Alabaster):** The foundation of the system. This replaces stark white with a soft, creamy off-white to prevent eye strain and create a "parchment" feel.
- **Contrast (Soft Sand):** Used for subtle borders and dividers to maintain structure without the harshness of grey.

## Typography

This design system uses a sophisticated typographic contrast to signal both "Heritage" and "Modernity."

**Playfair Display** (Headings) provides an editorial, authoritative feel. It should be used with slightly tighter letter-spacing for large display titles to emphasize its elegant serifs.

**Be Vietnam Pro** (Body & UI) offers a contemporary, humanist touch. Its slightly wider apertures make it exceptionally readable and friendly, countering the formal nature of the serif headings.

Line heights are intentionally generous (1.6x+) to ensure that long-form therapeutic content is easy to digest and feels "light" on the page.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a contained, safe feeling, while transitioning to a fluid model on mobile.

- **Grid:** A 12-column grid is used for desktop layouts.
- **Whitespace:** Emphasize vertical rhythm. Use `section-gap-lg` between major content blocks (e.g., Hero to Services) to allow the design to "breathe."
- **Asymmetry:** To avoid a "template" look, utilize offset columns. For example, a text block might span 6 columns while its accompanying image spans 4, leaving empty columns in between to create a sense of organic flow rather than rigid boxes.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layers** and **Soft Ambient Shadows**.

- **Surfaces:** Use subtle shifts in background color (Cream to Pale Mint) rather than shadows to define most containers.
- **Shadows:** When elevation is required (e.g., for "Appointment" cards), use a very soft, diffused shadow: `box-shadow: 0 10px 30px rgba(74, 93, 78, 0.05)`. Note the use of the primary green color in the shadow's tint to keep it feeling natural rather than "digital grey."
- **Glassmorphism:** Use sparingly for navigation bars to maintain a sense of light and transparency as users scroll through content.

## Shapes

The shape language is the core of the "helping hand" feel.

- **Containers:** Standard cards use a `rounded-lg` (16px) radius to feel approachable.
- **Organic Blobs:** Large, non-geometric "blob" shapes in Tertiary colors should be used as background decorations. These should be asymmetrical and "fluid" to mimic natural forms like stones or leaves.
- **Images:** Photography should use either a standard `rounded-xl` corner or be masked into organic, pebble-like shapes to break away from the rigid rectangular nature of web layouts.

## Components

- **Buttons:** Primary buttons feature the Forest Moss color with white text and `rounded-xl` (24px) corners. Hover states should involve a soft transition to Sage. Avoid harsh borders; use a subtle scale-up effect (1.02x) to indicate interactivity.
- **Input Fields:** Use a "minimalist-warm" style. Light sand borders that turn Sage on focus. Labels should use `label-sm` style for clarity.
- **Chips/Tags:** Used for therapy specializations (e.g., "Anxiety," "CBT"). These should have a background of Pale Mint and text in Forest Moss, with pill-shaped corners.
- **Cards:** Essential for services or testimonials. Use a background color slightly lighter or darker than the main section background with a very soft ambient shadow.
- **Accordion:** For FAQs, use a clean line-based divider. The transition should be fluid, reinforcing the calm nature of the system.
- **Call-to-Action (CTA):** The "Book a Session" button should always be the most prominent element, utilizing a slightly more saturated version of the secondary green to draw the eye without creating a "warning" effect.