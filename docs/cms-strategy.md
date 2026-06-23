# CMS Strategy — web_alberto

> How content for Alberto (a non-technical solo psychologist) is made CMS-editable, robustly and in a way that allows the site to keep evolving (legal pages, blog).
>
> **Status (2026-06-23):** CMS decision is **settled — Sanity**, and partially live. This doc is no longer a "which CMS" analysis; it's the content-migration plan on the existing Sanity setup.

## The short answer

Roughly **80% of the visible text and all images** are CMS-editable; the remaining ~20% (layout, design tokens, the italic-emphasis styling, form logic, animations) stays in code. Robustness comes not from "make everything a text box" but from modeling content as **structured fields that can't break the design** (split fields + restricted Portable Text).

## Where it actually stands

**Already live in Sanity** (don't re-architect — replicate the pattern):
- `siteSettings` (photo slots: `fotoHero`, `fotoSobreMi`, legacy `foto` fallback), `apariencia` (curated palette/font/hero/seam presets), `redes`.
- `urlFor` image pipeline, a Studio at `app/studio`, and **on-demand revalidation** via an HMAC-verified webhook (`revalidateTag('sanity')`, `app/api/revalidate/route.ts`).
- The wiring pattern: `app/page.tsx` is a server component that `Promise.all`s its fetches and passes data down as **props**; `SobreMi` already takes `fotoUrl`, `Redes` takes its whole content set as props.

**Still hardcoded (the remaining work):**
- Client-component arrays: `Servicios.tsx:5-22`, `Testimonios.tsx:5-18`.
- Server copy/arrays: `Proceso.tsx:1-22`, `SobreMi.tsx` (greeting, h2, 2 paragraphs, 4 credential badges), `Contacto.tsx` (headings, form labels, button, ok/error strings).
- `tokens/site.ts`: name, SEO title/description, eyebrow, tagline, CTA, footer `Col. [número pendiente]`, hero copy, navLinks.
- Legal pages: don't exist (dead `#` links in `Footer.tsx:11-13`).

## Architectural leverage

The existing server-fetch → props pattern **is** the right pattern. The migration is mechanical replication:
- **Fetching stays in `page.tsx`** — consolidate the singletons/arrays into one GROQ `getPageContent()` query (one round trip) alongside the existing `getAppearance()`.
- **Client islands keep their `useState`** (Servicios accordion, Testimonios carousel) but receive data as props instead of a module-level `const`. No server/client split needed — just hoist the array out.

## Content model

**Singletons per section + arrays-of-objects for repeaters** (decision confirmed 2026-06-23: arrays-of-objects, *not* standalone document types, for the small fixed lists — drag-reorder, fewer loose documents, one query).

| Sanity type | Holds | Shape |
|---|---|---|
| `siteSettings` (extend) | name, SEO title/description, footer/Col. number, nav labels | flat fields |
| `hero` (singleton) | eyebrow, `headlineLead` + `emphasisWord`, tagline, CTA, `pregunta*` | **split fields** (already the shape in `site.ts`) |
| `sobreMi` (singleton) | greeting, heading, body paras, `credentials[]` | body = restricted Portable Text; credentials = string array |
| `servicios` (singleton) | `items[]` {titulo, desc, tags[], featured} | array-of-objects |
| `proceso` (singleton) | `steps[]` {sub, titulo, desc} | array-of-objects |
| `testimonios` (singleton) | `items[]` {cita, autor} | array-of-objects |
| `contacto` (singleton) | heading, intro, labels, button, ok/error strings | flat fields |

**Robustness rule:** design-coupled copy gets a *split field*, never one free text box.
- Hero headline → `headlineLead` + `emphasisWord` (already done in `site.ts:17-18` — keep this exact shape in CMS).
- SobreMi paragraphs that carry italic emphasis → **Portable Text with the mark set restricted to `em` only** (no headings/arbitrary styling). This one restricted-PT config is reused everywhere copy needs emphasis.

### Never CMS (keeps it robust)
Section order/layout, Tailwind classes, design tokens (`tokens/theme.ts`), fonts, photo frame, seams, animations, form submission logic, nav anchor structure. The sanctioned exception is the **curated Apariencia presets** — Alberto picks from locked options, never raw tokens.

## The evolution unlock: build two primitives once

Legal pages (P2) and Blog (P3) are the **same problem** — a long-form Portable Text document addressed by a slug. Decision (2026-06-23): **legal pages are the deliberate vehicle to build the shared infra**:

1. **A shared Portable Text renderer** (`@portabletext/react` with branded/restricted serializers).
2. **A dynamic route pattern** — `app/[slug]` for legal, `app/blog/[slug]` later for posts.

Model legal as a `legalPage` document type (`title`, `slug`, `body` PT) → 3 documents (Aviso legal / Privacidad / Cookies) → wire `Footer.tsx:11-13`. Then the **blog drops in as a `post` document type reusing both primitives — no new architecture.** Legal both satisfies the RGPD/LSSI-CE obligation (health professional taking contact-form personal data) and de-risks the blog.

## Sequencing (respects design-first)

Hero/SobreMi copy is entangled with the in-flight design refresh (hero variants, the `pregunta` split-copy layout pending sign-off), so migrate in two risk tiers:

- **Design-independent → safe anytime:** `servicios`, `proceso`, `testimonios`, credentials, SEO/site settings, footer Col. number, contact strings.
- **Design-coupled → after design signs off:** hero copy, SobreMi headline/paragraphs (so schema matches final markup).

Recommended order:
1. Consolidated `getPageContent()` query + migrate the **design-independent** collections (proves the full content pipeline on safe content).
2. **Legal pages** → builds the PT-renderer + `[slug]` infra (P2, pulled earlier in spirit because it's foundational, even if scheduled "Later").
3. **Design-coupled** hero/sobremi copy, after the design refresh signs off.
4. **Blog** reuses step 2's infra (P3).
5. **Live preview / Presentation** Studio upgrades last (P1.5), once content + design are stable.
