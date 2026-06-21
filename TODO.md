# web_alberto — Feature Backlog

**Last Updated:** 2026-06-21
**Status:** v1.0 site live (static content). Post-call with Alberto (2026-06-17): design-first refresh, then CMS. Palette re-token landed as 4 curated CMS-selectable presets (2026-06-21); needs an allocation/contrast refinement pass.

---

## Backlog

> **Direction set with client (2026-06-17):** finalize the visual identity *before* the CMS migration.
> Recurring "let Alberto choose" requests (palette, fonts, hero layout, IG content type) are handled via a
> **curated preset system** — designer pre-builds safe, locked options; Alberto picks from a CMS dropdown.
> He never edits raw design tokens (see Known Limitations).

### P1: Design refresh (epic) — DO FIRST
Visual-identity pass driven by Alberto's feedback. Treat as one cohesive epic — the pieces interact (palette + texture + font + depth read as a whole), so avoid shipping them piecemeal.
- [X] **Palette re-token** — done (2026-06-21). Curated 4 presets in the forge (`design-system-forge/docs/working/web_alberto-presets.ts`) and wired them into `tokens/palettes.ts` as CMS-selectable curations: **presencia-fluida** (original/default), **olive-grove** (Olivar), **clay-pot** (Barro), **salvia-suave**. Each is a 20-token set (now incl. themed `feedback-error` + derived `jewel-tint`); selected via the Sanity **Apariencia** singleton → `data-palette` on `<html>`. This replaced the old neutralized re-derivation that discarded the moodboard.
- [ ] **Palette refinement** — the re-token is better than before but not polished; improve via **allocation changes + a few token touches**, not a from-scratch redo. Two concrete steers:
  1. **Contrast via a gray-font scale** — introduce/space out several gray ink tints (work the `ink-soft` / `ink-ghost` ramp, maybe add a step) so secondary copy has real hierarchy instead of reading flat.
  2. **Mine the extracted Claude/Stitch design** at `design-system-forge/inputs/extracted/` — `Alberto Aguado.html`, `app.jsx`, `sections-1.jsx`, `sections-2.jsx`, `styles.css`, `tweaks-panel.jsx` — for allocation/role ideas to fold back into the presets (esp. `salvia-suave`, which was imported from that design).
  Validate in-situ across all 4 presets before re-exporting. Feeds Theming presets.
- [X] **Display-font fix** — Ysabeau renders "broken"/weird at large sizes (`text-h1`). **First: diagnose** (likely a variable-font axis or font-swap/load glitch, not an aesthetic issue) — don't swap the font until this is ruled out. Fix the bug if found; only then decide if a font change is also warranted (feeds Theming presets font sets).
- [X] **Depth / texture / shapes** — done (2026-06-21). Ported the "Salvia suave" reference language as palette-agnostic tokens, validated in-situ. **Texture:** barely-there paper-grain overlay (`body::before` fractalNoise, gated by `data-texture`, default on) + two-step hairline ramp (`--line` / derived `--line-soft`, used in Servicios rows). **Depth:** ink-tinted shadow scale (`shadow-card/float/lift` via `color-mix(var(--ink))`) — signature `shadow-float` on the contact form (now a floating `rounded-panel` card), `-1px` hover lifts on CTAs. **Shapes:** ambient blobs refined (organic `--shape-a/-b` radii, `blur(40px)`, low-opacity, tonal variety, placed to bleed across section seams) + organic photo-frame as a CMS preset (see below). Files: `tokens/theme.ts` (boxShadow, card/panel radii, line-soft), `tokens/palettes.ts` (derived `--line-soft`), `app/globals.css`, all section components.
- [X] **Photo-shape preset** — done (2026-06-21). The organic blob photo-frame ships as a 2nd **Apariencia** preset (`fotoShape`: `rectangular` default / `organica`), wired exactly like `palette` (Sanity radio → `data-foto-shape` on `<html>` → `.foto-frame` CSS in `app/globals.css`). Rectangular path is pixel-identical to before. New module `tokens/fotoShape.ts`. Feeds Theming presets + partially the Hero-variant work.
- [ ] **Hero treatment — design BOTH variants for Alberto to compare** (resolves the #7/#9 indecision):
  - (A, preferred) photo set inside an organic blob shape with texture
  - (B) full-text hero, no photo
  - Goal: make both easy to visualize before he decides; the choice itself becomes a Theming preset toggle.
- [X] **Servicios overhaul** — convert the always-open table (`components/sections/Servicios.tsx`) to a Hedoné-style accordion/desplegable; review style + spacing; convert the per-service tag-pills into a **bullet list**.
- [X] **Credenciales copy fixes** — chips stay chips (`components/sections/SobreMi.tsx:41-46`). "Lic. Psicología · UPSA" → "Graduado en Psicología · UPSA"; merge into a single `Psicólogo General Sanitario · Máster PGS · UNIE` chip (not two); Miguel to finalize the full corrected list (other incoherences).
**Photos note:** photos already live *only* in Hero + Sobre mí — scope is "shrink + reshape these two," not removing photos elsewhere.

### P1: Theming presets (curated, Alberto-selectable)
Build the "let Alberto choose" layer on top of the design refresh, the safe way: designer pre-builds a handful of approved palettes, font sets, and the 2 hero variants; Alberto selects from a CMS dropdown. He cannot edit raw tokens.
- [ ] Define preset shape: N palettes, N font pairings, hero variant (A/B), IG content type (posts/reels)
- [~] Build presets as selectable token sets (reuse the CSS-var pipeline from `tokens/theme.ts` → `app/layout.tsx`) — **palette done** (`tokens/palettes.ts`, 4 presets via `data-palette`) + **photo-shape done** (`tokens/fotoShape.ts`, 2 presets via `data-foto-shape`); fonts/hero(text-vs-photo)/IG still pending
- [~] Expose selection as a CMS "Site Theme" singleton (dropdowns only) — **palette + photo-shape done** (Sanity **Apariencia** singleton, radio pickers; defaults presencia-fluida / rectangular); add font/hero/IG dropdowns when those presets exist
**Depends on:** P1 Design refresh (presets are the design outputs) + CMS (for the picker UI).

### P2: "Sígueme en redes" — Instagram section
New section integrating Alberto's Instagram. Build it **configurable** so the posts-vs-reels choice is a setting (defer that question — let him pick in config rather than blocking on it).
- [ ] Decide embed approach (IG embed vs API/feed)
- [ ] Build section with posts/reels toggle wired to config/CMS

### P2: Logo icon → SVG ✅
Alberto has a logo (icon + wordmark in the *Ablation* typeface). Convert the **icon** to SVG and place it in the site (nav/header). The font is just background context — its "choose your font" angle is covered by Theming presets.
- [X] Get the icon asset from Alberto — received `logo_alberto.svg`
- [X] Convert to optimized SVG, integrate into header/nav — `components/ui/LogoAlberto.tsx`, colored `accent-deep`, also wired as `app/icon.svg` favicon

### P1: Make site content CMS-editable
Move ~80% of visible text and all images out of hardcoded JSX/`tokens/site.ts` into a headless CMS so the client (non-technical) can self-edit without breaking the design. Full analysis in `docs/cms-strategy.md`.
- [ ] Decide CMS: Sanity (hosted editor, native blog) vs Keystatic (Git-backed, free) — see trade-off in `docs/cms-strategy.md`
- [ ] Model content as structured fields that can't break layout (e.g. Hero headline split into `headline` + `emphasisWord`; restricted Portable Text marks)
- [ ] Migrate Tier 1 collections: testimonials, services, process steps, **credentials** (Alberto's #5 "make editable"), photos (with alt text); make footer copyright / Col. number editable
- [ ] Migrate Tier 2 fields: Hero copy, **Sobre mí text** (#3), **Atención online/presencial line** (#1), section headings, contact form strings, SEO title/description; convert `tokens/site.ts` to a "Site settings" singleton
- [ ] Wire components to fetch from CMS + enable on-demand revalidation/ISR on Vercel
**Reference:** `docs/cms-strategy.md`

### P1.5: Verify Sanity works on production + improve Studio UX
- [ ] Deploy to Vercel and confirm site reads images from Sanity CDN
- [ ] Register Sanity webhook pointing to `https://albertoaguadopsicologia.vercel.app/api/revalidate`
- [ ] **Live preview (Level 1) — do after design is final:** Add a live-preview iframe panel in the Studio (split-view: form on the left, real site on the right) so Alberto sees the site update as he edits — including switching the **Apariencia** palette and seeing all sections re-theme live. Needs a preview/draft route + `presentationTool` or a custom structure view.
- [ ] **Visual editing (Level 3) — do after design is final:** Upgrade to the Sanity **Presentation** tool with click-to-edit overlays (click a heading/image on the preview → jumps to that field in Studio). Builds on Level 1.

### P2: Add real legal pages (RGPD / LSSI-CE)
Aviso legal, Privacidad, and Cookies are dead `#` links in the footer — a real compliance obligation for a Spanish health professional handling contact-form personal data.
- [ ] Author legal content (Aviso legal, Privacidad, Cookies)
- [ ] Create routes/pages and wire footer links (`components/layout/Footer.tsx:11-13`)
- [ ] Model as long-form rich-text CMS documents (depends on CMS choice)
**Blocked by:** P1 (CMS choice) for the editable version; static pages could ship sooner
**Reference:** `docs/cms-strategy.md` (Tier 3)

### P3: Blog
Roadmap item — the canonical reason Next.js was chosen. Drops in as another CMS document type once the CMS is in place.
- [ ] Define post schema (title, slug, body, cover image, published date)
- [ ] Build index + post routes with SSG/ISR
- [ ] Add nav entry
**Blocked by:** P1
**Reference:** `docs/cms-strategy.md` (Tier 3)

---

## Known Limitations

- **Design/layout stays in code:** Section order, Tailwind classes, design tokens (`tokens/theme.ts`), individual font assignment, ambient blobs, animations, form logic, and nav anchor structure are deliberately NOT freely CMS-editable — exposing them is how non-technical clients break a site. The **Theming presets** item is the sanctioned exception: Alberto chooses among *pre-built, locked* options only, never raw token values.

---

## Implementation Order

### Now (design-first)
1. 🔲 Design refresh (epic)
2. 🔲 Theming presets (curated) — extends the design outputs into CMS-selectable options

### Next
3. 🔲 Make site content CMS-editable
4. 🔲 "Sígueme en redes" — Instagram section
5. ✅ Logo icon → SVG
6. 🔲 Verify Sanity on production + Studio UX (P1.5)

### Later
7. 🔲 Add real legal pages (RGPD / LSSI-CE) — P2
8. 🔲 Blog — P3
