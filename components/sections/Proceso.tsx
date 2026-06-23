import type { StepCms } from '@/sanity/queries';

const FALLBACK_STEPS: StepCms[] = [
  {
    sub: 'Sesión inicial',
    titulo: 'Nos conocemos',
    desc: 'En la primera sesión exploramos qué te trae, cómo estás viviendo la situación y qué esperas del proceso. No hay agenda ni preguntas correctas. Es un espacio para que puedas contar lo que quieras, a tu ritmo.',
  },
  {
    sub: 'Evaluación y metas',
    titulo: 'Entendemos el contexto',
    desc: 'Identificamos las áreas de trabajo y definimos metas concretas y alcanzables a corto plazo. El objetivo no es resolver todo de golpe — es saber hacia dónde vamos y por qué.',
  },
  {
    sub: 'Proceso terapéutico',
    titulo: 'Avanzamos juntos',
    desc: 'Trabajamos sesión a sesión con herramientas adaptadas a ti. Cada intervención parte de tu contexto específico, no de un protocolo genérico.',
  },
  {
    sub: 'Revisión de progreso',
    titulo: 'Cada 3 meses',
    desc: 'Revisamos cómo ha evolucionado el trabajo: qué ha cambiado, qué sigue siendo difícil y si hay que ajustar el rumbo. También si hay un cambio importante en tu vida que lo requiera.',
  },
];

type Props = {
  eyebrow?: string;
  heading?: string;
  steps?: StepCms[];
};

export default function Proceso({ eyebrow, heading, steps }: Props) {
  const items = steps?.length ? steps : FALLBACK_STEPS;

  return (
    <section id="proceso" className="bg-paper-alt py-[clamp(3rem,6vw,5rem)] relative z-[1]" aria-labelledby="proceso-h2">
      <div className="max-w-[calc(var(--space-container)+16rem)] mx-auto px-section-x-sm md:px-section-x">
        <div className="mb-12" data-reveal>
          <p className="font-ui text-label font-semibold text-accent-deep uppercase tracking-[0.08em] mb-3.5">
            {eyebrow ?? 'Cómo trabajaríamos juntos'}
          </p>
          <h2 id="proceso-h2" className="font-display text-h2 font-semibold leading-[1.1] tracking-[-0.005em] text-ink">
            {heading ?? 'El proceso terapéutico'}
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute w-[2px] bg-line"
            style={{ left: 13, top: 20, bottom: 20 }}
            aria-hidden="true"
          />

          {items.map((step, i) => (
            <div
              key={i}
              className={`flex gap-8 group ${i < items.length - 1 ? 'pb-10' : ''}`}
              data-reveal
            >
              <div className="w-7 shrink-0 flex justify-center pt-1 relative z-[1]" aria-hidden="true">
                <div className="w-[18px] h-[18px] rounded-full bg-paper-alt border-2 border-line shrink-0 transition-colors duration-fast group-hover:border-accent-deep group-hover:bg-accent" />
              </div>

              <div className="flex-1">
                <p className="font-ui text-tag font-semibold tracking-[0.08em] uppercase text-accent-deep mb-1">
                  {step.sub}
                </p>
                <h3 className="font-display text-h3-lg font-semibold text-ink mb-2">
                  {step.titulo}
                </h3>
                {step.desc && (
                  <p className="font-body text-body-base text-ink-soft">
                    {step.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
