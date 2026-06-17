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
      <div className="max-w-container mx-auto px-section-x-sm md:px-section-x">
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
                'grid grid-cols-1 md:grid-cols-[minmax(min-content,15rem)_1fr] gap-4 md:gap-10 items-start py-[1.125rem] pl-5',
                'border-l-[3px] border-b border-b-border',
                'transition-colors duration-fast',
                s.featured
                  ? 'border-l-accent-deep bg-[color-mix(in_srgb,var(--color-accent)_4%,var(--color-ground))] hover:bg-[color-mix(in_srgb,var(--color-accent-light)_18%,var(--color-ground))]'
                  : 'border-l-accent hover:bg-[color-mix(in_srgb,var(--color-accent-light)_18%,var(--color-ground))]',
              ].join(' ')}
              data-reveal
            >
              <h3 className="font-display text-h3 font-semibold text-ink pt-[3px]">
                {s.titulo}
              </h3>
              <div>
                <p className="font-body text-body-base text-ink-muted mb-3">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {s.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-ui text-tag font-medium tracking-[0.02em] text-ink-muted bg-ground-raised border border-border rounded-[3px] px-2 py-[3px]"
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
