# web_alberto — Feature Backlog

**Last Updated:** 2026-06-17
**Status:** v1.0 site live (static content), backlog open

---

## Backlog

### P1: Make site content CMS-editable
Move ~80% of visible text and all images out of hardcoded JSX/`tokens/site.ts` into a headless CMS so the client (non-technical) can self-edit without breaking the design. Full analysis in `docs/cms-strategy.md`.
- [ ] Decide CMS: Sanity (hosted editor, native blog) vs Keystatic (Git-backed, free) — see trade-off in `docs/cms-strategy.md`
- [ ] Model content as structured fields that can't break layout (e.g. Hero headline split into `headline` + `emphasisWord`; restricted Portable Text marks)
- [ ] Migrate Tier 1 collections: testimonials, services, process steps, credentials, photos (with alt text); make footer copyright / Col. number editable
- [ ] Migrate Tier 2 fields: Hero copy, Sobre mí, section headings, contact form strings, SEO title/description; convert `tokens/site.ts` to a "Site settings" singleton
- [ ] Wire components to fetch from CMS + enable on-demand revalidation/ISR on Vercel
**Reference:** `docs/cms-strategy.md`

### P1.5: Verify Sanity works on production + improve Studio UX
- [ ] Deploy to Vercel and confirm site reads images from Sanity CDN
- [ ] Register Sanity webhook pointing to `https://albertoaguadopsicologia.vercel.app/api/revalidate`
- [ ] **Do after design is final — Level 1:** Add live preview iframe panel in Studio so Alberto sees the real site update as he edits fields
- [ ] **Do after design is final — Level 3:** Add Sanity Presentation tool with click-to-edit overlays (click text/image on the site preview, highlights the field in Studio)

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

- **Design/layout stays in code:** Section order, Tailwind classes, design tokens (`tokens/theme.ts`), fonts, ambient blobs, animations, form logic, and nav anchor structure are deliberately NOT CMS-editable — exposing them is how non-technical clients break a site.

---

## Implementation Order

### Now (P1)
1. 🔲 Make site content CMS-editable

### Next (P2)
2. 🔲 Add real legal pages (RGPD / LSSI-CE)

### Later (P3)
3. 🔲 Blog
