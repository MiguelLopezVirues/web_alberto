const servicios = [
  {
    featured: true,
    titulo: 'Terapia psicológica',
    desc: 'Trabajo desde el análisis funcional de la conducta, entendiendo cada dificultad en su contexto para intervenir de forma personalizada. Me baso en terapias contextuales y de tercera generación, centradas en ayudarte a relacionarte de forma más flexible con tus pensamientos y emociones, y avanzar hacia una vida con sentido.',
    tags: ['Ansiedad', 'Depresión', 'Conducta suicida', 'Desregulación emocional', 'Pánico', 'Autoestima', 'Rumiación', 'Dependencia emocional', 'Relaciones afectivas', 'Insatisfacción vital', 'Bullying', 'Obsesiones'],
  },
  {
    titulo: 'Intervención neuropsicológica',
    desc: 'Neuroestimulación en población infantil, favoreciendo el desarrollo cognitivo y atencional, y neurorrehabilitación en adultos dirigida a la recuperación y compensación de funciones tras daño neurológico.',
    tags: ['TDAH', 'Altas Capacidades', 'Problemas de conducta', 'Ictus', 'TCE', 'Demencias', 'Deterioro cognitivo', 'Tumores cerebrales'],
  },
  {
    titulo: 'Informes clínicos',
    desc: 'Evaluaciones psicológicas y neuropsicológicas completas para la elaboración de informes clínicos rigurosos, útiles en contextos sanitarios, educativos o legales.',
    tags: ['Informe psicológico', 'Informe neuropsicológico'],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-ground py-[clamp(3rem,6vw,5rem)] relative z-[1]" aria-labelledby="servicios-h2">
      <div className="max-w-[1200px] mx-auto px-[3rem]">
        <div className="mb-10" data-reveal>
          <p className="font-ui text-label font-semibold text-accent uppercase tracking-[0.08em] mb-3.5">
            Cómo puedo ayudarte
          </p>
          <h2 id="servicios-h2" className="font-display text-h2 font-semibold leading-[1.1] tracking-[-0.005em] text-ink">
            Especialidades
          </h2>
        </div>

        <div className="border-t border-border">
          {servicios.map(s => (
            <article
              key={s.titulo}
              className={[
                'grid gap-10 items-start py-[1.125rem] pl-5',
                'border-l-[3px] border-b border-b-border',
                'transition-colors duration-[180ms]',
                s.featured
                  ? 'border-l-accent-deep bg-[color-mix(in_srgb,#476250_4%,#f9f9f7)] hover:bg-[color-mix(in_srgb,#ccead3_18%,#f9f9f7)]'
                  : 'border-l-accent hover:bg-[color-mix(in_srgb,#ccead3_18%,#f9f9f7)]',
              ].join(' ')}
              style={{ gridTemplateColumns: 'minmax(min-content,15rem) 1fr' }}
              data-reveal
            >
              <h3 className="font-display text-[1.0625rem] font-semibold text-ink leading-[1.25] pt-[3px]">
                {s.titulo}
              </h3>
              <div>
                <p className="font-body text-[0.9375rem] text-ink-muted leading-[1.65] mb-3">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {s.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-ui text-[0.6875rem] font-medium tracking-[0.02em] text-ink-muted bg-ground-raised border border-border rounded-[3px] px-2 py-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
