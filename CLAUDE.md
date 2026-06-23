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

- [ ] P1: Mobile layout bugs — horizontal scroll (viewport overflow) + burger menu toggle broken on mobile
- [ ] P1: Design refresh (epic) — remaining: palette refinement (gray-ink contrast ramp); done so far: palette re-token, display-font fix, Servicios accordion, credenciales copy, depth/texture/shapes (grain + ink-tinted shadows + organic blobs/photo-frame preset), hero variants (Apariencia preset; selectable: pregunta [default, split copy+photo, new copy pending sign-off]/fondo/dividido/texto — authored emblema+carta kept in code but deactivated from picker)
- [ ] P1: Theming presets (curated) — let Alberto pick from pre-built/locked palettes, fonts & hero variant via a CMS dropdown (never raw tokens)
- [ ] P1: Audit Design System Forge font-selection process — current fonts read SaaS (Open Sans is the tell); fix the method to be less SaaS/more editorial and generate several font presets — feeds Theming presets
- [ ] P2: De-standard / character pass — shift from templated/generic → authored/characterful (the axis is not SaaS↔editorial, both can be generic); keystone = Fraunces serif display; then hero composition, Proceso numerals, Testimonios pull-quotes, motivated shapes, accent restraint
- [ ] P1.5: Verify Sanity on production + Studio UX — deploy to Vercel, confirm CDN images; live preview after design is final
- [ ] P3: Blog — drops in as `post` document type reusing the `PortableTextRenderer` + `app/blog/[slug]` route (infra already built via legal pages)

## Architecture & Key Concepts

### Token-Based Design System
The project uses **tokens as the single source of truth** for visual identity. Before styling anything, check [tokens/theme.ts](tokens/theme.ts):

- **Colors**: Palette uses sage greens (Presencia Orgánica) — never hard-code hex values. Use Tailwind classes (`bg-accent`, `text-ink`, …)
- **Typography**: Three font stacks (Ysabeau/display, Atkinson Hyperlegible/body, Open Sans/ui)
- **Spacing & Borders**: Predefined spacing scale (`section-x`, `section-x-sm`, `container`), `maxWidth.container`, and border radius system
- **Font sizes**: Responsive typography (clamp-based) with built-in line-height and letter-spacing
- **Motion**: `transitionDuration.fast` (180ms) — apply via `duration-fast` on hover/focus transitions, never `duration-[180ms]`

These tokens are imported into [tailwind.config.ts](tailwind.config.ts) and extend Tailwind's theme.

**CSS custom properties**: Colors and the spacing scale are emitted as CSS variables for use inside expressions a Tailwind class name can't express (`color-mix()`, `calc()`). **Note the two different namings:**
- **Colors** are emitted per-palette as `--<token>` (NO `--color-` prefix) by `paletteCss()` (`tokens/palettes.ts`) into a `<style>` keyed by `[data-palette]`: `var(--paper)`, `var(--accent)`, `var(--accent-deep)`, `var(--ink)`, `var(--soft)`, … (the 20 `PaletteToken`s + derived `--jewel-tint`/`--line-soft`).
- **Spacing** is emitted as `--space-*` on `<html>` by [app/layout.tsx](app/layout.tsx) from `tokens/theme.ts`: `var(--space-container)`, …

Use these — never raw hex/px:
- `bg-[color-mix(in_srgb,var(--accent)_5%,var(--paper))]`
- `style={{ maxWidth: 'calc(var(--space-container) * 0.62)' }}`
- inline `style={{ background: 'var(--accent-deep)' }}`

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
- **Shape language**: The site's organic gesture is the **photo frame** (`.foto-frame`, organica `fotoShape` preset) — not floating blobs (dropped: too "wellness-cliché" for a clinician brand, and they clipped at section edges). Section-to-section **seams** are an intentional `Seam` element between sections, styled by the `seam` Apariencia preset (`data-seam` on `<html>`): `hairline` · `arc` · `deckle` (reuses the grain's `feTurbulence`) · `bleed`. See [app/globals.css](app/globals.css) + `components/ui/Seam.tsx`.

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
5. When a class name can't express the value (`color-mix()`, `calc()`), reference the CSS variables — colors as `var(--<token>)` (e.g. `var(--accent)`, NO `--color-` prefix), spacing as `var(--space-*)` — never raw hex or raw pixel values
6. Never hard-code colors, spacing, font sizes, or transition durations directly

## When Adding Content

Edit [tokens/site.ts](tokens/site.ts) for:
- Site name, title, description
- Navigation links
- Call-to-action text
- Copyright/footer info

Component files should import and use these strings, not duplicate them.
