# CMS Strategy — web_alberto

> Analysis of how much and what should be made CMS-editable for the client (Alberto, a non-technical solo psychologist), in a robust and maintainable way.

## The short answer

Roughly **80% of the visible text and all images** can and should be CMS-editable. The remaining ~20% (layout, the italic-emphasis styling, design tokens, form logic, animations) should stay in code. The trick to making it *robust* is not "make everything a text box" — it's modeling content as **structured fields that can't break the design**.

Given a non-technical solo client + a blog already on the roadmap (the brief says Next.js was chosen *specifically* for this), the recommendation is a real headless CMS over editing files.

## What should be editable — tiered

### Tier 1 — definitely CMS (changes often, low risk)

| Content | Where it lives now | Notes |
|---|---|---|
| Testimonials (quote + author) | `components/sections/Testimonios.tsx:5-18` | Brief says these are *coming soon* and will be added incrementally → the #1 CMS candidate. Model as a repeatable list. |
| Services (title, description, tags, "featured" flag) | `components/sections/Servicios.tsx:1-18` | Repeatable list; tags as a string array. |
| Process steps (sub, title, desc) | `components/sections/Proceso.tsx:1-22` | Repeatable list. |
| Credentials/badges | `components/sections/SobreMi.tsx:41-47` | Will grow as he registers (Col. number, new degrees). |
| Photos | `public/images/alberto.png` used in `Hero.tsx:16` & `SobreMi.tsx:13` | Brief: "2+ fotos en proceso de recopilar." Needs media management + alt text. |
| Footer copyright / **Col. number** | `tokens/site.ts:14` | Currently `Col. [número pendiente]` — a real placeholder he'll need to fill himself. |

### Tier 2 — should be editable, but with guardrails (changes rarely, high design-risk)

- Hero eyebrow / headline / tagline / CTA (`Hero.tsx:29-47`). ⚠️ The headline has an italicized emphasis word (`sentido`). Don't make this one free rich-text field — model it as **`headline` + `emphasisWord`** (or portable-text with a single allowed "emphasis" mark). Otherwise the client either loses the styling or can break it.
- "Sobre mí" greeting, h2, two body paragraphs (`SobreMi.tsx:24-39`).
- Section eyebrows/headings ("Especialidades", "El proceso terapéutico", "¿Hablamos?", etc.).
- Contact form intro + button + success/error messages (`Contacto.tsx:54-101`).
- SEO `title` / `description` (`tokens/site.ts:9-10`, consumed in `layout.tsx:30-32`).

### Tier 3 — needed content, currently missing entirely

- **Legal pages** — Aviso legal, Privacidad, Cookies are dead `#` links (`Footer.tsx:11-13`). For a Spanish health professional handling personal data via a contact form, RGPD + LSSI-CE compliance is a real obligation, not optional. These are perfect long-form CMS documents (rich text). **Flag this as a gap regardless of CMS choice.**
- **Blog** — roadmap item; the canonical reason to pick a CMS now rather than later.

### Never CMS (keep in code — this is what keeps it robust)

Section order/layout, Tailwind classes, design tokens (`tokens/theme.ts`), fonts, ambient blobs, animations, form submission logic + Google Apps Script wiring, nav anchor structure. Exposing these to a CMS is how non-technical clients accidentally break a site.

## Recommended approach

**Use a structured headless CMS — primary pick is Sanity** (or Keystatic as the lighter free alternative). Reasoning:

- **Maintainable for a non-technical client:** a polished hosted editing UI beats editing JSON/MDX in a Git repo. He won't touch code or run a build.
- **Image pipeline:** built-in upload, cropping, and alt-text — directly serves the "photos being collected/swapped" need.
- **Native blog support:** the roadmap blog drops in as another document type, no re-architecture.
- **Robustness:** structured schemas + Portable Text with a *restricted* mark set mean he can edit copy and add testimonials without ever being able to break layout or typography.
- **Cost/ops:** free tier covers a site this size comfortably; content is decoupled from deploys (with on-demand revalidation/ISR on Vercel).

The migration is mechanical: each section's hardcoded array/string becomes a CMS document/field, and components fetch from the CMS instead of importing literals. `tokens/site.ts` becomes a "Site settings" singleton; the per-section arrays become collections.

**Trade-off to decide:** Sanity (best editor UX, external SaaS, native blog) vs. **Keystatic** (Git-backed, free forever, no external service, edits = commits → rebuild, slightly more technical setup). Both are excellent on Next.js 15.
