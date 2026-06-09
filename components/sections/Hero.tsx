import Image from 'next/image';
import { site } from '@/tokens/site';

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-ground flex min-h-[clamp(28rem,48vh,36rem)] relative z-[1]"
      aria-labelledby="hero-h1"
    >
      {/* Text column — 58% */}
      <div
        className="flex flex-col justify-center"
        style={{
          flex: '58',
          padding: 'clamp(3.5rem,7vw,5.5rem) 3rem clamp(3.5rem,7vw,5.5rem) 3rem',
          maxWidth: 'calc(1200px * 0.62)',
        }}
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
          className="inline-flex items-center justify-center font-ui text-label-btn font-bold text-ink-on-brand bg-accent-deep px-7 py-3.5 rounded-btn w-fit hover:bg-accent transition-colors duration-[180ms]"
        >
          {site.cta}
        </a>
      </div>

      {/* Photo column — 42%, background matches photo background */}
      <div
        className="relative overflow-hidden min-h-[400px] bg-accent-light"
        style={{ flex: '42' }}
      >
        <Image
          src="/images/alberto.png"
          alt="Alberto Aguado Calvo, psicólogo general sanitario y neuropsicólogo clínico"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}
