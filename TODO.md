# web_alberto — Feature Backlog

**Last Updated:** 2026-06-23
**Status:** v1.0 site live. CMS migration complete (2026-06-23): all content singletons seeded, legal pages live. Design refresh is the active priority.

---

## Backlog

> **Direction set with client (2026-06-17):** finalize the visual identity *before* the CMS migration.
> Recurring "let Alberto choose" requests (palette, fonts, hero layout) are handled via a
> **curated preset system** — designer pre-builds safe, locked options; Alberto picks from a CMS dropdown.
> He never edits raw design tokens (see Known Limitations).

### P1: Design refresh (epic) — DO FIRST
Visual-identity pass driven by Alberto's feedback. Treat as one cohesive epic — the pieces interact (palette + texture + font + depth read as a whole), so avoid shipping them piecemeal.
- [ ] **Palette refinement** — the re-token is better than before but not polished; improve via **allocation changes + a few token touches**, not a from-scratch redo. Two concrete steers:
  1. **Contrast via a gray-font scale** — introduce/space out several gray ink tints (work the `ink-soft` / `ink-ghost` ramp, maybe add a step) so secondary copy has real hierarchy instead of reading flat.
  2. **Mine the extracted Claude/Stitch design** at `design-system-forge/inputs/extracted/` — `Alberto Aguado.html`, `app.jsx`, `sections-1.jsx`, `sections-2.jsx`, `styles.css`, `tweaks-panel.jsx` — for allocation/role ideas to fold back into the presets (esp. `salvia-suave`, which was imported from that design).
  Validate in-situ across all 4 presets before re-exporting. Feeds Theming presets.



### P1: Theming presets (curated, Alberto-selectable)
Build the "let Alberto choose" layer on top of the design refresh, the safe way: designer pre-builds a handful of approved palettes, font sets, and the 2 hero variants; Alberto selects from a CMS dropdown. He cannot edit raw tokens.
- [ ] **Audit the Design System Forge font-selection process** (2026-06-22) — the current trio (Ysabeau/display · Atkinson/body · **Open Sans**/ui) reads generic/SaaS; Open Sans for UI+buttons is the tell. The Forge's font-picking method produces safe-but-soulless pairings (same failure mode as the [[forge-palette-curation-lesson]] for color). Fix the *process* (curate from references / add taste gates) and have it **generate several font presets** for the curated picker, rather than choosing one font here by hand. Feeds the still-pending font preset above.
  - **Serif IS on the table — the old "no serifs for accessibility" rule was over-applied** (resolved 2026-06-22): WCAG has no rule against serifs; legibility is driven by x-height / letterform distinctiveness / size / spacing, not serif-vs-sans. The valid concern only bites for **small/long body text** (and thin Didone hairlines). So the accessible move is a **sturdy serif (transitional/old-style — Source Serif / Newsreader / Fraunces class, NOT a thin Bodoni) for DISPLAY only**, while **keeping a hyperlegible sans (Atkinson) for BODY**. That's exactly what the good references (web2 HAVEN, web1) do: serif headlines + sans body. Direction confirmed by client refs; the missing serif headline is why the current page reads generic.
  - **Reference taste calibration (2026-06-22):** north star is **web2 (HAVEN)** — refined, restrained, serif headlines w/ italic accents. **web3 (Beatriz) is OUT — client reads it as "super SaaS"** (heavy sage color-block cards + template Squarespace feel). Target = web2's refinement + a *personal/non-standard* signature (Alberto's art-directed real photo, the brain/speech logo as a recurring motif), NOT another therapist template.

### P2: De-standard / character pass

**Framing (resolved 2026-06-22):** The goal is not "de-SaaS" specifically — SaaS is just one genre of generic, and typical "editorial" can be equally templated. The real axis is **generic/templated ↔ authored/characterful**. Character = the site could only be Alberto's; swap his name and photo onto a Squarespace template and nothing breaks — that is the failure to fix. Character comes from committed specific choices with a point of view; a signature element that recurs; craft details that reward attention; shapes and lines that derive from the brand's meaning rather than arbitrary decoration.

**North star reference:** `inputs/references/web2.jpg` (HAVEN) — refined serif headlines with italic accents, calm asymmetric hero (headline left, framed photo right), sage palette, breathing room, authored feel. **Dropped:** `inputs/references/web3.jpg` (Beatriz) — client reads it as "super SaaS / template" (heavy sage color-block cards, Squarespace therapist kit). Target = web2's refinement + a personal non-standard signature that is specifically Alberto's: his art-directed real portrait, the brain/speech logo as a recurring motif, Fraunces tuned to the brand.

**Shapes + lines principle:** the "interesting non-straight section transitions" instinct is correct and important. The rule: **motivated, not arbitrary** — shapes derive from the brand's meaning (brain/speech-bubble logo curves, paper/notebook texture, organic forms suggesting the mind). The seam system (arc/deckle), paper grain, and organic photo frame are exactly this vocabulary; the work is making them feel connected and intentional rather than applied presets. Restraint is load-bearing: a curve where there is a reason (framing a tonal beat like the testimonials band), not at every boundary. The current placement (seams only framing Testimonios) is correct — keep this discipline.

**What is NOT the enemy (recalibration from earlier wrong advice):** soft pills, rounded cards, and centered section intros are present in web2 and are fine. The template tell was never pill *shape* — it was bright saturated fill + drop shadow + lift-bounce. Don't over-correct with flat/square/left-align-everything.

**Items ordered by leverage:**
- [ ] **Warm second neutral** — the palette is sage on cool-neutral paper; references all add a cream/blush/clay secondary surface. Consider one warm-tinted section background (warm blush or clay) for an intimate section (Sobre mí is the candidate). Wire as a palette token, not hardcoded; feeds palette refinement.

### P1: Make site content CMS-editable ✅ (2026-06-23)
All design-independent content migrated and seeded. Schema, queries, components, and 10 Sanity documents live.
- [x] Schema: 6 content singletons + legalPage type; arrays-of-objects for repeaters; restricted PT (em-only) for emphasis paras
- [x] `getPageContent()` consolidated GROQ query; full TypeScript types
- [x] All section components accept CMS props with hardcoded fallbacks; Hero uses HeroCopyCtx
- [x] 10 documents seeded: siteSettings, hero, sobreMi, servicios, proceso, testimonios, contacto + 3 legal pages
- [ ] **Design-coupled migration (after design signs off):** reseed Hero and SobreMi body/heading once variants are locked
**Reference:** `docs/cms-strategy.md`, `docs/cms-migration-plan.md`

### P1.5: Verify Sanity works on production + improve Studio UX
- [ ] Deploy to Vercel and confirm site reads images from Sanity CDN
- [ ] **Live preview (Level 1) — do after design is final:** Add a live-preview iframe panel in the Studio (split-view: form on the left, real site on the right) so Alberto sees the site update as he edits — including switching the **Apariencia** palette and seeing all sections re-theme live. Needs a preview/draft route + `presentationTool` or a custom structure view.
- [ ] **Visual editing (Level 3) — do after design is final:** Upgrade to the Sanity **Presentation** tool with click-to-edit overlays (click a heading/image on the preview → jumps to that field in Studio). Builds on Level 1.


### P2: Add real legal pages (RGPD / LSSI-CE) ✅ (2026-06-23)
- [x] PT renderer (`components/ui/PortableTextRenderer.tsx`) + `app/[slug]/page.tsx` dynamic route
- [x] `legalPage` schema type + `getLegalPage`/`getLegalSlugs` queries
- [x] 3 documents seeded: Aviso legal, Política de privacidad, Política de cookies — RGPD/LSSI-CE compliant content authored; only NIF, email, and colegiado number remain as [pendiente] placeholders for Alberto to fill in Studio
- [x] Footer links wired to `/aviso-legal`, `/privacidad`, `/cookies`
**Reference:** `docs/cms-strategy.md`, `docs/cms-migration-plan.md`

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
3. ✅ Make site content CMS-editable (2026-06-23)
4. ❌ "Sígueme en redes" — Instagram section (built 2026-06-22; DROPPED 2026-06-23 — code parked, not deleted)
5. ✅ Logo icon → SVG
6. 🔲 Verify Sanity on production + Studio UX (P1.5)

### Later
7. ✅ Add real legal pages (RGPD / LSSI-CE) — P2 (2026-06-23)
8. 🔲 Blog — P3
