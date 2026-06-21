# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Run production server
npm run lint      # Run ESLint
```

## Project Overview

**web_alberto** is a Next.js 15 + Tailwind + TypeScript website for Alberto Aguado Calvo, a psychologist (Psicólogo General Sanitario y Neuropsicólogo Clínico). It's a single-page site with multiple sections: Hero, About, Services, Process, Testimonials, and Contact.

## Backlog

> Maintain this section every conversation. Full task detail lives in `TODO.md`.
>
> - **New item surfaces:** propose it (`[?]`), confirm with user, then add here + `TODO.md` together.
> - **Work completes an item:** remove it from this section; remove full entry from `TODO.md` Backlog; mark `✅` in `TODO.md` Implementation Order. Completed items are not shown here — only open items.
> - **Unconfirmed proposals** (`[?]`) stay here only — never written to `TODO.md` until confirmed.
>
> **Format:** `- [ ] P{1|2|3}: {Title} — {one-sentence why}`
> **Proposed/unconfirmed:** `- [?] {Title} — {why it came up}`

- [ ] P1: Design refresh (epic) — remaining: palette refinement (gray-ink contrast ramp) + two hero variants to compare; done so far: palette re-token, display-font fix, Servicios accordion, credenciales copy, depth/texture/shapes (grain + ink-tinted shadows + organic blobs/photo-frame preset)
- [ ] P1: Theming presets (curated) — let Alberto pick from pre-built/locked palettes, fonts, hero variant & IG content type via a CMS dropdown (never raw tokens)
- [ ] P1: Make site content CMS-editable — let the non-technical client self-edit ~80% of copy + all images without breaking the design (see `docs/cms-strategy.md`)
- [ ] P2: "Sígueme en redes" Instagram section — new section, configurable posts/reels toggle
- [ ] P2: Add real legal pages (RGPD / LSSI-CE) — Aviso legal/Privacidad/Cookies are dead links; a compliance obligation for a health professional
- [ ] P3: Blog — roadmap item, drops in as a CMS document type once the CMS exists

## Architecture & Key Concepts

### Token-Based Design System
The project uses **tokens as the single source of truth** for visual identity. Before styling anything, check [tokens/theme.ts](tokens/theme.ts):

- **Colors**: Palette uses sage greens (Presencia Orgánica) — never hard-code hex values. Use Tailwind classes (`bg-accent`, `text-ink`, …)
- **Typography**: Three font stacks (Ysabeau/display, Atkinson Hyperlegible/body, Open Sans/ui)
- **Spacing & Borders**: Predefined spacing scale (`section-x`, `section-x-sm`, `container`), `maxWidth.container`, and border radius system
- **Font sizes**: Responsive typography (clamp-based) with built-in line-height and letter-spacing
- **Motion**: `transitionDuration.fast` (180ms) — apply via `duration-fast` on hover/focus transitions, never `duration-[180ms]`

These tokens are imported into [tailwind.config.ts](tailwind.config.ts) and extend Tailwind's theme.

**CSS custom properties**: The full color palette and spacing scale are also emitted as CSS variables (`--color-*`, `--space-*`) on the `<html>` element by [app/layout.tsx](app/layout.tsx), generated directly from `tokens/theme.ts`. Use these — never raw hex — inside expressions a Tailwind class name can't express, e.g. `color-mix()` or `calc()`:
- `bg-[color-mix(in_srgb,var(--color-accent)_4%,var(--color-ground))]`
- `style={{ maxWidth: 'calc(var(--space-container) * 0.62)' }}`
- inline `style={{ background: 'var(--color-accent-deep)' }}`

**Site content** (name, description, nav links, CTAs) lives in [tokens/site.ts](tokens/site.ts) — keep all text there.

### Component Organization

- **`app/`**: Next.js 15 app directory (routing, layouts, API routes)
- **`components/layout/`**: Navigation, footer, structural components
- **`components/sections/`**: Page sections (Hero, SobreMi, Servicios, Proceso, Testimonios, Contacto)
- **`components/ui/`**: Reusable UI primitives (RevealInit for scroll animations)

### Styling & Animations

- **Tailwind**: Extended with custom tokens from `tokens/theme.ts`
- **Responsive Design**: Mobile-first. Use `md:` breakpoint for desktop changes
- **Scroll Reveal**: Use `data-reveal` attribute on elements you want to animate on scroll (see [components/ui/RevealInit.tsx](components/ui/RevealInit.tsx))
- **Ambient Blobs**: Fixed decorative elements (see [app/globals.css](app/globals.css)) that traverse all sections

### Typography System
Font sizes use CSS `clamp()` for fluid scaling between mobile and desktop. Define type in [tokens/theme.ts](tokens/theme.ts) with predefined line-height and letter-spacing; then apply via class names. Full scale: `text-h1`, `text-h2`/`text-h2-lg`, `text-h3`/`text-h3-lg` (card/step titles), `text-body-lg`/`text-body-md`/`text-body-base`/`text-body-sm`, `text-tag` (chips/badges), `text-label`/`text-label-nav`/`text-label-btn`, `text-eyebrow-conv`. Line-height is baked into each token, so don't re-add `leading-*` when it would just duplicate the token. Use `text-tag`/`text-body-base` instead of arbitrary values like `text-[0.6875rem]`/`text-[0.9375rem]`.

## Development Notes

- **ESLint disabled during builds** (`next.config.ts`) — run `npm run lint` separately in CI
- **Google Fonts** loaded in [app/layout.tsx](app/layout.tsx) with `display: 'swap'` for font swap safety
- **Language**: Spanish (`lang="es"` in root HTML)
- **Images**: Using Next.js `Image` component for optimization
- **Metadata**: Site title and description from `tokens/site.ts`

## When Styling Something

1. Check if the token already exists in [tokens/theme.ts](tokens/theme.ts)
2. If not, add it (prefer consistent naming: `color-*`, `spacing-*`, `fontSize-*`) and wire it into [tailwind.config.ts](tailwind.config.ts)
3. Use Tailwind classes that reference the token (e.g., `bg-accent`, `text-h1`, `px-section-x`, `max-w-container`, `duration-fast`)
4. For section wrappers, use `px-section-x-sm md:px-section-x` + `max-w-container`, not arbitrary `px-5`/`max-w-[1200px]`
5. When a class name can't express the value (`color-mix()`, `calc()`), reference the CSS variables (`var(--color-*)`, `var(--space-*)`) — never raw hex or raw pixel values
6. Never hard-code colors, spacing, font sizes, or transition durations directly

## When Adding Content

Edit [tokens/site.ts](tokens/site.ts) for:
- Site name, title, description
- Navigation links
- Call-to-action text
- Copyright/footer info

Component files should import and use these strings, not duplicate them.
