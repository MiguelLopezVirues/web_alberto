---
name: Serene Organic Humanism
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#424843'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#727973'
  outline-variant: '#c2c8c1'
  surface-tint: '#4a6452'
  primary: '#476250'
  on-primary: '#ffffff'
  primary-container: '#607b68'
  on-primary-container: '#f6fff5'
  inverse-primary: '#b0ceb8'
  secondary: '#4f6358'
  on-secondary: '#ffffff'
  secondary-container: '#d2e8da'
  on-secondary-container: '#55695e'
  tertiary: '#655a4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#7f7363'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead3'
  primary-fixed-dim: '#b0ceb8'
  on-primary-fixed: '#062012'
  on-primary-fixed-variant: '#334c3c'
  secondary-fixed: '#d2e8da'
  secondary-fixed-dim: '#b6ccbe'
  on-secondary-fixed: '#0d1f17'
  on-secondary-fixed-variant: '#384b41'
  tertiary-fixed: '#f0e0cd'
  tertiary-fixed-dim: '#d3c4b2'
  on-tertiary-fixed: '#221a0f'
  on-tertiary-fixed-variant: '#4f4538'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
  background-cream: '#F9F7F2'
  surface-sage-light: '#E8EEE9'
  blob-overlay: rgba(168, 189, 176, 0.18)
  text-muted: '#545956'
typography:
  headline-xl:
    fontFamily: Ysabeau
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Ysabeau
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Ysabeau
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-emphasis:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.03em
  label-md:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  headline-xl-mobile:
    fontFamily: Ysabeau
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-safe: clamp(1.5rem, 5vw, 4rem)
  gutter: 1.5rem
  section-gap: clamp(4rem, 10vh, 8rem)
  stack-sm: 0.75rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style
The brand personality is centered on "Professional Empathy"—a delicate balance between clinical authority and a warm, human touch. It is designed to be a safe harbor for users in high-stress emotional states, particularly those who are neurodivergent.

The design style is **Organic Minimalism**. It moves away from the cold, sterile symmetry of traditional medical sites, opting instead for a fluid, asymmetric composition. This approach utilizes soft "blob" shapes, a spacious layout to reduce cognitive load, and a tactile, grounded aesthetic. The goal is to evoke a sense of immediate relief, signaling to the visitor that they are in a place where they will be heard and understood without judgment.

## Colors
The palette is rooted in nature, using desaturated sage and mint greens to provide a calming, non-stimulating environment. 

- **Primary & Secondary:** Sage greens (#7A9682, #A8BDB0) provide the "hand of authority" and safety. They are used for key UI elements and accents.
- **Background:** A warm cream (#F9F7F2) replaces pure white to prevent eye strain and create a "paper-like" tactile warmth.
- **Typography:** A deep charcoal (#2D2F2E) is used instead of pure black to maintain high contrast for accessibility while avoiding the harshness of #000000.
- **Blobs:** Soft, organic background shapes use a low-opacity green (#A8BDB0 at 18%) to add depth and movement without cluttering the visual field.

## Typography
The typographic system prioritizes legibility and character. By avoiding serifs, we maintain a clean, modern look that is accessible to neurodivergent readers.

- **Display (Ysabeau):** Used for headlines to provide a sophisticated, authoritative, yet approachable personality. It has a high "reading comfort" that feels less clinical than standard sans-serifs.
- **Body (Atkinson Hyperlegible Next):** Specifically chosen for its accessibility features. Every character is distinct, reducing the cognitive effort required for reading long-form professional advice or service descriptions.
- **UI (Open Sans):** Used for buttons and navigation labels. Its neutral, upright stress ensures clarity in functional areas where quick recognition is paramount.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on "Spacious Density." This helps prevent the visual overwhelming often associated with medical or clinical sites.

- **Asymmetry:** Elements should not always align to a rigid 12-column center. Use slightly offset placements for images and "blob" shapes to create a natural, organic flow.
- **Vertical Rhythm:** Generous section gaps (80px–120px) allow the user's eyes to rest between different content blocks.
- **Mobile Reflow:** On mobile, margins reduce to 24px, and the section gaps tighten, but line heights are maintained to preserve legibility for those with ADHD or dyslexia.

## Elevation & Depth
In alignment with the organic and safe theme, depth is achieved through **Tonal Layering** rather than shadows.

- **Surfaces:** Use high-contrast surface tiers (e.g., a cream background with a slightly darker sage-tinted card) to define content areas.
- **No Hard Shadows:** Avoid traditional box-shadows. If depth is required, use a very large, extremely diffused (2-5% opacity) shadow that matches the primary sage color, creating a "glow" rather than a drop-shadow.
- **Glassmorphism:** Use subtle backdrop blurs (8px-12px) on navigation bars or sticky contact buttons to maintain a sense of lightness and transparency.

## Shapes
The shape language is strictly **Rounded**. Sharp corners are entirely avoided as they trigger a "threat" response in the subconscious, contrary to the goal of safety.

- **Primary UI Elements:** Buttons and input fields use a consistent 0.5rem (8px) radius.
- **Containers:** Large cards and content sections use a 1rem (16px) radius.
- **Blob Graphics:** These are mathematically "imperfect" circles and ovals used in the background. They should have varied radii and be positioned asymmetrically to break the grid's rigidity.
- **Images:** All professional photos should have rounded corners (1rem) or be masked into organic leaf-like or pebble-like shapes.

## Components
- **Buttons:** Large hit-areas (min 48px height). Primary buttons use the Sage Green background with Cream text; secondary buttons use a Sage outline. No sharp transitions; use a slow (400ms) fade for hover states.
- **Contact Form:** High-contrast labels (Open Sans 500) and spacious input fields. Error states should use a soft terracotta rather than a "vibrant red" to keep the user calm.
- **Cards:** Use "surface-sage-light" backgrounds with no borders and a soft 1rem corner radius. These should feel like physical, soft-touch objects.
- **Chips:** Used for service tags (e.g., "TDAH", "Adultos"). Pill-shaped with a low-saturation green background and dark text.
- **Navigation:** Simple, centered or right-aligned labels in Open Sans. Avoid complex mega-menus; use a clean, spacious mobile overlay for small screens.
- **The "Relief" CTA:** The primary action button should be phrased as "Let's find a way forward" or "Begin your path" rather than "Send Message," reducing emotional friction.