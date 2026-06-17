import Image from 'next/image';
import { site } from '@/tokens/site';

export default function Hero({ fotoUrl }: { fotoUrl: string }) {
  return (
    <section
      id="hero"
      className="bg-ground flex flex-col md:flex-row min-h-[clamp(28rem,48vh,36rem)] relative z-[1]"
      aria-labelledby="hero-h1"
    >
      {/* Photo column — top on mobile, right on desktop */}
      <div
        className="relative overflow-hidden bg-accent-light order-first md:order-last h-[55vw] min-h-[240px] max-h-[400px] md:h-auto md:min-h-0 md:max-h-none md:[flex:42]"
      >
        <Image
          src={fotoUrl}
          alt="Alberto Aguado Calvo, psicólogo general sanitario y neuropsicólogo clínico"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Text column — bottom on mobile, left on desktop */}
      <div
        className="flex flex-col justify-center px-section-x-sm py-10 md:[flex:58] md:px-section-x md:py-[clamp(3.5rem,7vw,5.5rem)]"
        style={{ maxWidth: 'calc(var(--space-container) * 0.62)' }}
      >
        <p className="font-ui text-label font-semibold text-accent uppercase tracking-[0.08em] mb-5">
          {site.eyebrow}
        </p>
        <h1
          id="hero-h1"
          className="font-display text-h1 font-bold leading-[1.07] tracking-[-0.01em] text-ink mb-5"
        >
          Acompañándote a comprender lo que te ocurre y a construir una vida con mayor bienestar y{' '}
          <em className="italic text-accent">sentido</em>.
        </h1>
        <p className="font-body text-body-md text-ink-muted leading-[1.65] mb-9 max-w-[400px]">
          {site.tagline}
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center justify-center font-ui text-label-btn font-bold text-ink-on-brand bg-accent-deep px-7 py-3.5 rounded-btn w-fit hover:bg-accent transition-colors duration-fast"
        >
          {site.cta}
        </a>
      </div>
    </section>
  );
}
