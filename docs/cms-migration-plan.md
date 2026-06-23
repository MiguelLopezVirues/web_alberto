# CMS Migration Plan — execution tracker

> Companion to `docs/cms-strategy.md`. Tracks what's done, what's next, and what decisions were made during execution.
> **Last updated:** 2026-06-23

## Status

### ✅ Phase 1 — Schema + query foundation
- `sanity/schema.ts`: 6 new singletons (`hero`, `sobreMi`, `servicios`, `proceso`, `testimonios`, `contacto`) + `siteSettings` extended (SEO title/description, copyright, site name). Repeaters as arrays-of-objects. `sobreMi.body` uses restricted PT (`em`-only marks). `legalPage` document type added (full PT: h2/h3, bold/em, links, lists).
- `sanity/queries.ts`: `getPageContent()` (one GROQ round trip, all singletons), `getLegalPage(slug)`, `getLegalSlugs()`. Full TypeScript types exported for every shape.

### ✅ Phase 2 — Design-independent content migration
- `app/page.tsx`: consolidated `getPageContent()` + `getAppearance()` + `getRedes()` in `Promise.all`; props threaded to all sections.
- `app/layout.tsx`: `generateMetadata()` fetches SEO title/description from Sanity; falls back to `site.ts`.
- `components/layout/Footer.tsx`: accepts `copyright` prop from CMS; footer legal links wired to real routes.
- All section components migrated to **props-with-hardcoded-fallback** pattern — site works identically with empty CMS documents:
  - `Servicios`, `Testimonios` — keep `useState`, receive CMS arrays as props
  - `Proceso`, `Contacto` — server-friendly, CMS props
  - `SobreMi` — PT body renderer (em-only, with fallback to hardcoded paragraphs); credentials array
  - `Hero` — `HeroCopyCtx` React context so all 6 sub-variants read CMS copy without prop-drilling

### ✅ Phase 3 — Legal pages infra (also the blog foundation)
- `@portabletext/react` installed.
- `components/ui/PortableTextRenderer.tsx` — branded serializers using site tokens (font-display/body/ui, text-ink, text-accent-deep, duration-fast). Handles: normal/h2/h3 blocks, strong/em marks, external links, bullet/number lists.
- `app/[slug]/page.tsx` — dynamic route: `generateStaticParams` from `getLegalSlugs()`, `generateMetadata` per page, ISR via on-demand revalidation (`revalidate = false`). Simple layout: Nav + full-width prose column + Footer.

### 🔲 Phase 3 — Content: author 3 legal documents in Sanity Studio
Open the Studio → "Páginas legales" → create:

| Title | Slug |
|---|---|
| Aviso legal | `aviso-legal` |
| Política de privacidad | `privacidad` |
| Política de cookies | `cookies` |

For each, use the template below (standard RGPD/LSSI-CE boilerplate for a Spanish health professional with a contact form). The slug must match the footer links exactly.

**Aviso legal** — include: identificación del responsable (nombre, NIF, colegiado), domicilio, datos de contacto, objeto del sitio, propiedad intelectual, exclusión de responsabilidad.

**Política de privacidad** — include: responsable del tratamiento, finalidades (gestión de consultas vía formulario de contacto), base jurídica (consentimiento), destinatarios (ninguno, salvo obligación legal), derechos del interesado (acceso, rectificación, supresión, portabilidad, oposición), plazo de conservación, cómo ejercer derechos (email de contacto), reclamación ante AEPD.

**Política de cookies** — include: qué son cookies, qué cookies usa el sitio (técnicas/sesión, analíticas si las hay), cómo desactivarlas, tabla de cookies.

### ✅ Phase 4 — Design-coupled copy (seeded 2026-06-23 with current copy)
`hero` and `sobreMi` were included in the `scripts/seed-cms.mjs` run alongside the other singletons. Current copy is live in Sanity now.

**⚠️ Reseed trigger:** once the design refresh signs off on the final hero variant and SobreMi headline/body wording, re-run the seed (or edit directly in Studio) to update these two documents. The schema fields (`headlineLead`, `headlineEmphasis`, `pregunta*`, `sobreMi.heading`, `sobreMi.body`) are already correctly modeled — no schema change needed, just a content update.

### 🔲 Phase 5 — Seed remaining design-independent CMS documents
Open Studio and create these singletons with the current copy (copy from fallbacks in components — they match exactly):
- `servicios` — 3 items (Terapia psicológica, Intervención neuropsicológica, Informes clínicos) with tags
- `proceso` — 4 steps
- `testimonios` — 3 items
- `contacto` — heading, intro, ctaButton, successMsg, errorMsg, subtext
- `siteSettings` — siteName, seoTitle, seoDescription, copyright (`© 2025 · Col. [número pendiente]`)

### 🔲 Phase 6 — Blog (P3, after legal content is live)
Reuses Phase 3 infra. Add:
- `post` document type (title, slug, body PT, cover image, publishedDate)
- `app/blog/page.tsx` — index
- `app/blog/[slug]/page.tsx` — reuses `PortableTextRenderer`
- Nav entry

### 🔲 Phase 7 — Live preview / Presentation Studio (P1.5)
Do last, once content + design are stable. Needs a preview/draft route + `presentationTool` or custom structure.

---

## Key decisions made

- **Arrays-of-objects** (not standalone document types) for services/process/testimonials — simpler for a non-technical solo user, drag-reorder, one query.
- **Legal pages = deliberate vehicle** to build the PT renderer + `[slug]` route so Blog (P3) reuses both with no new architecture.
- **Hero uses `HeroCopyCtx`** (React context) so 6 sub-variants read CMS copy without threading props into every variant function.
- **`revalidate = false` + on-demand webhook** on `[slug]` route — pages are static until the Sanity webhook fires `revalidateTag('sanity', 'max')`.
- **Design-coupled copy deferred** — Hero/SobreMi heading/body are wired but not seeded, to avoid schema churn before the design refresh signs off.

---

## What `PortableTextRenderer` does

`components/ui/PortableTextRenderer.tsx` wraps `@portabletext/react` with custom serializers that use the site's design tokens:
- **Blocks:** `normal` → body paragraph; `h2`/`h3` → display font with site heading sizes + top margin
- **Marks:** `strong` → `font-semibold`; `em` → italic; `link` → `text-accent-deep` underline, opens in new tab
- **Lists:** bullet/number with `marker:text-accent`; list items with comfortable line-height
- All font/color classes use Tailwind tokens (`font-display`, `font-body`, `text-ink`, `text-accent-deep`, `duration-fast`) — never hardcoded values. Changing the palette or font preset automatically re-themes legal pages.
