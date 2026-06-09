const steps = [
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
] as const;

export default function Proceso() {
  return (
    <section id="proceso" className="bg-ground-raised py-[clamp(3rem,6vw,5rem)] relative z-[1]" aria-labelledby="proceso-h2">
      <div className="max-w-[1200px] mx-auto px-[3rem]">
        <div className="mb-12" data-reveal>
          <p className="font-ui text-label font-semibold text-accent uppercase tracking-[0.08em] mb-3.5">
            Cómo trabajaríamos juntos
          </p>
          <h2 id="proceso-h2" className="font-display text-h2 font-semibold leading-[1.1] tracking-[-0.005em] text-ink">
            El proceso terapéutico
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line — runs through center of dot column (28px / 2 = 14px from left) */}
          <div
            className="absolute w-[2px] bg-border"
            style={{ left: 13, top: 20, bottom: 20 }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex gap-8 group ${i < steps.length - 1 ? 'pb-10' : ''}`}
              data-reveal
            >
              {/* Dot column */}
              <div className="w-7 shrink-0 flex justify-center pt-1 relative z-[1]" aria-hidden="true">
                <div className="w-[18px] h-[18px] rounded-full bg-ground-raised border-2 border-border shrink-0 transition-colors duration-[180ms] group-hover:border-accent group-hover:bg-accent-light" />
              </div>

              <div className="flex-1">
                <p className="font-ui text-[0.6875rem] font-semibold tracking-[0.08em] uppercase text-accent mb-1">
                  {step.sub}
                </p>
                <h3 className="font-display text-[1.1rem] font-semibold text-ink leading-[1.2] mb-2">
                  {step.titulo}
                </h3>
                <p className="font-body text-[0.9375rem] text-ink-muted leading-[1.65]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
