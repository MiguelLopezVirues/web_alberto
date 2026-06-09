import Image from 'next/image';

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="bg-ground-soft flex min-h-[clamp(28rem,48vh,36rem)] relative z-[1]"
      aria-labelledby="sobre-h2"
    >
      {/* Photo — 42% left, no border-radius */}
      <div className="relative overflow-hidden shrink-0 w-[42%]">
        <Image
          src="/images/alberto.png"
          alt="Alberto Aguado Calvo"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Text */}
      <div
        className="flex-1 flex flex-col justify-center gap-[1.625rem] max-w-[600px]"
        style={{ padding: 'clamp(2.5rem,5vw,4.5rem) clamp(2rem,4vw,3rem) clamp(2.5rem,5vw,4.5rem) clamp(1.5rem,3vw,2.5rem)' }}
      >
        <p className="font-display text-eyebrow-conv text-ink-muted" data-reveal>
          Hola, soy Alberto.
        </p>
        <h2
          id="sobre-h2"
          className="font-display text-h2 font-semibold leading-[1.15] tracking-[-0.005em] text-ink"
          data-reveal
        >
          Un neuropsicólogo que ayuda a comprenderte y transformar los patrones que limitan tu bienestar.
        </h2>
        <p className="font-body text-body-md text-ink-muted leading-[1.72]" data-reveal>
          Trabajo con población infantojuvenil, adulta y personas mayores. Mi enfoque se basa en el análisis funcional de la conducta y las terapias contextuales de tercera generación — entender el origen y mantenimiento del malestar para intervenir de forma eficaz y personalizada.
        </p>
        <p className="font-body text-body-md italic text-ink-muted leading-[1.65]" data-reveal>
          Un espacio cercano, seguro y libre de juicios, donde el objetivo es que entiendas lo que te ocurre y aprendas a relacionarte con ello de otra manera.
        </p>
        <div className="flex flex-wrap gap-2 mt-2" data-reveal>
          {[
            'Psicólogo General Sanitario',
            'Neuropsicólogo Clínico · UNIR',
            'Neurocientífico Clínico · UCM',
            'Máster PGS · UNIE',
            'Lic. Psicología · UPSA',
          ].map(badge => (
            <span
              key={badge}
              className="font-ui text-[0.6875rem] font-semibold tracking-[0.05em] text-ink-muted bg-ground-raised border border-border rounded-sm px-2.5 py-1"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
