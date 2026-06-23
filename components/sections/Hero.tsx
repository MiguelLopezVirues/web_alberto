import { createContext, useContext } from 'react';
import Image from 'next/image';
import { site } from '@/tokens/site';
import LogoAlberto from '@/components/ui/LogoAlberto';
import { DEFAULT_HERO_VARIANT, type HeroVariantSlug } from '@/tokens/heroVariant';

const FOTO_ALT =
  'Alberto Aguado Calvo, psicólogo general sanitario y neuropsicólogo clínico';

// Copy context — lets sub-components read CMS copy without prop-drilling
type HeroCopy = {
  eyebrow: string;
  headlineLead: string;
  headlineEmphasis: string;
  tagline: string;
  cta: string;
  preguntaQuestion: string;
  preguntaResponseLead: string;
  preguntaResponseEmphasis: string;
};

const HeroCopyCtx = createContext<HeroCopy>({
  eyebrow: site.eyebrow,
  headlineLead: site.hero.headlineLead,
  headlineEmphasis: site.hero.headlineEmphasis,
  tagline: site.tagline,
  cta: site.cta,
  preguntaQuestion: site.hero.preguntaQuestion,
  preguntaResponseLead: site.hero.preguntaResponseLead,
  preguntaResponseEmphasis: site.hero.preguntaResponseEmphasis,
});

/* ── Shared building blocks ─────────────────────────────────────────────────
   The opening line (with the italic `sentido` accent), the letterhead signature,
   and the quiet text-link CTA. Composed differently by each grammar below. Only
   one variant renders at a time, so the single id="hero-h1" stays unique. */

function Headline({ withId = true, className = '' }: { withId?: boolean; className?: string }) {
  const copy = useContext(HeroCopyCtx);
  return (
    <h1
      {...(withId ? { id: 'hero-h1' } : {})}
      className={`font-display text-h1 font-bold leading-[1.07] tracking-[-0.01em] text-ink ${className}`}
    >
      {copy.headlineLead}{' '}
      <em className="italic text-accent-deep">{copy.headlineEmphasis}</em>.
    </h1>
  );
}

/* Letterhead signature — a short hairline rule, then the name in display type and
   the credential in quiet body. Replaces the uppercase kicker badge. */
function Signature() {
  const copy = useContext(HeroCopyCtx);
  return (
    <div className="mt-9 md:mt-10">
      <div className="w-10 h-px bg-line mb-4" aria-hidden="true" />
      <p className="font-display text-h3 text-ink leading-tight">{site.name}</p>
      <p className="font-body text-body-sm text-ink-soft mt-1.5">{copy.eyebrow}</p>
    </div>
  );
}

/* Quiet text-link CTA — accent text + a nudging arrow on hover, no box. The
   action green is reserved for this one role in the authored grammars. */
function CtaLink() {
  const copy = useContext(HeroCopyCtx);
  return (
    <a
      href="#contacto"
      className="group/cta inline-flex items-center gap-2 mt-8 w-fit font-ui text-label-btn font-semibold text-action underline-offset-[6px] decoration-1 hover:underline transition-colors duration-fast"
    >
      {copy.cta}
      <span aria-hidden="true" className="transition-transform duration-fast group-hover/cta:translate-x-1">
        →
      </span>
    </a>
  );
}

/* Legacy hero copy (eyebrow → headline → tagline → boxed CTA) — the original
   landing-page skeleton, kept for the photo-led legacy variants. */
function HeroCopy() {
  const copy = useContext(HeroCopyCtx);
  return (
    <>
      <p className="font-ui text-label font-semibold text-ink-soft uppercase tracking-[0.08em] mb-5">
        {copy.eyebrow}
      </p>
      <Headline className="mb-5" />
      <p className="font-body text-body-md text-ink-soft leading-[1.65] mb-9 max-w-[400px]">
        {copy.tagline}
      </p>
      {/* CTA: the action green as border + text at rest, then filling solid on
          hover (label flips to action-ink). One color, outline → fill. Left-anchored
          (w-fit), following the copy's flush-left column. */}
      <a
        href="#contacto"
        className="inline-flex items-center justify-center w-fit font-ui text-label-btn font-semibold bg-action text-action-ink border border-action rounded-sm px-7 py-3.5 hover:bg-transparent hover:text-action transition-colors duration-fast"
      >
        {copy.cta}
      </a>
    </>
  );
}

/* ── Authored grammars (from-scratch) ───────────────────────────────────────
   Emblema · Carta · Pregunta. No portrait, no kicker badge, no boxed CTA — the
   type, the brand mark, and air do the work. */

/* Emblema (DEFAULT) — the brain/speech-bubble mark is the hero's subject (mind
   meeting conversation), not a photo. Desktop: type left, mark large on the right,
   bleeding past the edge (clipped by overflow-hidden). Mobile: a quiet watermark
   top-right so the words lead. */
function Emblema() {
  return (
    <section
      id="hero"
      className="bg-paper relative z-[1] flex items-center min-h-[clamp(28rem,62vh,40rem)] overflow-hidden"
      aria-labelledby="hero-h1"
    >
      {/* Desktop: the mark as subject. */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute right-[-4%] top-1/2 -translate-y-1/2 w-[42%] max-w-[480px] text-accent-deep opacity-[0.92]"
      >
        <LogoAlberto />
      </div>
      {/* Mobile: the mark as a faint watermark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none md:hidden absolute right-4 top-8 w-20 text-accent opacity-[0.12]"
      >
        <LogoAlberto />
      </div>
      <div
        className="relative z-[2] w-full px-section-x-sm py-16 md:px-section-x md:py-[clamp(4rem,8vw,6.5rem)]"
        style={{ maxWidth: 'calc(var(--space-container) * 0.6)' }}
      >
        <Headline />
        <Signature />
        <CtaLink />
      </div>
    </section>
  );
}

/* Carta — a spoken opening. The line set large like the first sentence of a
   letter, pure type and air, closed by the letterhead signature. The mark is a
   faint corner watermark, like a seal. */
function Carta() {
  return (
    <section
      id="hero"
      className="bg-paper relative z-[1] flex items-center min-h-[clamp(28rem,64vh,40rem)] overflow-hidden"
      aria-labelledby="hero-h1"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[14%] w-[clamp(3.5rem,9vw,7rem)] text-accent opacity-[0.10]"
      >
        <LogoAlberto />
      </div>
      <div
        className="relative w-full px-section-x-sm py-16 md:px-section-x md:py-[clamp(4.5rem,9vw,7rem)]"
        style={{ maxWidth: 'calc(var(--space-container) * 0.74)' }}
      >
        <Headline className="!leading-[1.12]" />
        <Signature />
        <CtaLink />
      </div>
    </section>
  );
}

/* Pregunta — mirrors the visitor's state (the question as the h1), then grounds
   it with Alberto's response (carrying the `sentido` accent). Split layout: copy
   left, photo right (the wide hero shot, column-cropped; foto-frame picks up the
   organica fotoShape preset). NEW copy — pending sign-off (see tokens/site.ts). */
function Pregunta({ fotoUrl }: { fotoUrl: string }) {
  const copy = useContext(HeroCopyCtx);
  return (
    <section
      id="hero"
      className="bg-paper flex flex-col md:flex-row min-h-[clamp(28rem,56vh,38rem)] relative z-[1] overflow-hidden"
      aria-labelledby="hero-h1"
    >
      <div className="foto-col order-first md:order-last h-[55vw] min-h-[240px] max-h-[400px] md:h-auto md:min-h-0 md:max-h-none md:[flex:42]">
        <div className="foto-frame foto-frame-a relative overflow-hidden bg-accent w-full h-full">
          <Image src={fotoUrl} alt={FOTO_ALT} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover object-top" priority />
        </div>
      </div>
      <div
        className="flex flex-col justify-center px-section-x-sm py-10 md:[flex:58] md:px-section-x md:py-[clamp(3.5rem,7vw,5.5rem)]"
        style={{ maxWidth: 'calc(var(--space-container) * 0.62)' }}
      >
        <h1
          id="hero-h1"
          className="font-display text-h1 font-bold leading-[1.07] tracking-[-0.01em] text-ink mb-6"
        >
          {copy.preguntaQuestion}
        </h1>
        <p className="font-display text-h3-lg text-ink-soft leading-[1.4] max-w-[34ch]">
          {copy.preguntaResponseLead}{' '}
          <em className="italic text-accent-deep">{copy.preguntaResponseEmphasis}</em>.
        </p>
        <Signature />
        <CtaLink />
      </div>
    </section>
  );
}

/* Imagen de fondo (DEFAULT) — responsive by design:
   - Desktop: full-bleed photo backdrop with the copy overlaid on a left→right paper
     scrim (.hero-scrim) for photo-independent legibility.
   - Mobile: an editorial TEXT hero (no photo). A full-bleed background can't read on
     a narrow portrait screen, and any hero photo here would collide with the
     Sobre-mí portrait directly below. So the message leads and the face arrives in
     context one scroll down, beside his name + credentials — no card, no SaaS tell.
   Background stays rectangular regardless of fotoShape (organica only frames the
   portrait columns, not a full-bleed backdrop). */
function Fondo({ fotoUrl }: { fotoUrl: string }) {
  return (
    <section
      id="hero"
      className="bg-paper relative z-[1] flex flex-col justify-center md:flex-row md:justify-start md:items-center min-h-[clamp(23rem,56vh,29rem)] md:min-h-[clamp(32rem,72vh,42rem)] overflow-hidden"
      aria-labelledby="hero-h1"
    >
      {/* Photo — desktop only: full-bleed backdrop + scrim. Hidden on mobile (the
          portrait lives just below in Sobre mí). `sizes` stops phones downloading
          the wide hero image they never see. */}
      <div className="hidden overflow-hidden bg-accent md:block md:absolute md:inset-0">
        <Image
          src={fotoUrl}
          alt={FOTO_ALT}
          fill
          sizes="(min-width: 768px) 100vw, 1px"
          className="object-cover object-center"
          priority
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      </div>
      {/* Copy — mobile: the editorial text hero. Desktop: overlaid, centered. */}
      <div
        className="relative z-[2] flex flex-col w-full px-section-x-sm py-14 md:px-section-x md:py-[clamp(4rem,8vw,6.5rem)]"
        style={{ maxWidth: 'calc(var(--space-container) * 0.62)' }}
      >
        <HeroCopy />
      </div>
    </section>
  );
}

/* Retrato dividido — the original split: text column + photo column, stacked on
   mobile. foto-frame picks up the organica fotoShape preset. */
function Dividido({ fotoUrl }: { fotoUrl: string }) {
  return (
    <section
      id="hero"
      className="bg-paper flex flex-col md:flex-row min-h-[clamp(28rem,48vh,36rem)] relative z-[1] overflow-hidden"
      aria-labelledby="hero-h1"
    >
      <div className="foto-col order-first md:order-last h-[55vw] min-h-[240px] max-h-[400px] md:h-auto md:min-h-0 md:max-h-none md:[flex:42]">
        <div className="foto-frame foto-frame-a relative overflow-hidden bg-accent w-full h-full">
          <Image src={fotoUrl} alt={FOTO_ALT} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover object-top" priority />
        </div>
      </div>
      <div
        className="flex flex-col justify-center px-section-x-sm py-10 md:[flex:58] md:px-section-x md:py-[clamp(3.5rem,7vw,5.5rem)]"
        style={{ maxWidth: 'calc(var(--space-container) * 0.62)' }}
      >
        <HeroCopy />
      </div>
    </section>
  );
}

/* Solo texto — no hero photo (Alberto's face still appears in "Sobre mí"). The
   global grain + the section seam keep it from feeling cold. With no photo to
   anchor a left column, the copy is centered so it reads as a deliberate
   editorial statement rather than a split layout missing its image. */
function SoloTexto() {
  return (
    <section
      id="hero"
      className="bg-paper relative z-[1] flex items-center min-h-[clamp(26rem,56vh,34rem)] overflow-hidden"
      aria-labelledby="hero-h1"
    >
      <div
        className="relative flex flex-col justify-center items-center text-center mx-auto w-full px-section-x-sm py-16 md:px-section-x md:py-[clamp(4rem,9vw,7rem)]"
        style={{ maxWidth: 'calc(var(--space-container) * 0.7)' }}
      >
        <HeroCopy />
      </div>
    </section>
  );
}

type HeroProps = {
  fotoUrl: string;
  variant?: HeroVariantSlug;
  eyebrow?: string;
  headlineLead?: string;
  headlineEmphasis?: string;
  tagline?: string;
  cta?: string;
  preguntaQuestion?: string;
  preguntaResponseLead?: string;
  preguntaResponseEmphasis?: string;
};

export default function Hero({
  fotoUrl,
  variant = DEFAULT_HERO_VARIANT,
  eyebrow,
  headlineLead,
  headlineEmphasis,
  tagline,
  cta,
  preguntaQuestion,
  preguntaResponseLead,
  preguntaResponseEmphasis,
}: HeroProps) {
  const copy: HeroCopy = {
    eyebrow: eyebrow ?? site.eyebrow,
    headlineLead: headlineLead ?? site.hero.headlineLead,
    headlineEmphasis: headlineEmphasis ?? site.hero.headlineEmphasis,
    tagline: tagline ?? site.tagline,
    cta: cta ?? site.cta,
    preguntaQuestion: preguntaQuestion ?? site.hero.preguntaQuestion,
    preguntaResponseLead: preguntaResponseLead ?? site.hero.preguntaResponseLead,
    preguntaResponseEmphasis: preguntaResponseEmphasis ?? site.hero.preguntaResponseEmphasis,
  };

  let variant_component: React.ReactNode;
  switch (variant) {
    case 'carta':     variant_component = <Carta />; break;
    case 'pregunta':  variant_component = <Pregunta fotoUrl={fotoUrl} />; break;
    case 'fondo':     variant_component = <Fondo fotoUrl={fotoUrl} />; break;
    case 'dividido':  variant_component = <Dividido fotoUrl={fotoUrl} />; break;
    case 'texto':     variant_component = <SoloTexto />; break;
    case 'emblema':
    default:          variant_component = <Emblema />; break;
  }

  return (
    <HeroCopyCtx.Provider value={copy}>
      {variant_component}
    </HeroCopyCtx.Provider>
  );
}
