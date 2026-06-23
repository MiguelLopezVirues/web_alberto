'use client';

import { useState } from 'react';
import type { ServicioCms } from '@/sanity/queries';

const FALLBACK_ITEMS: ServicioCms[] = [
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

type Props = {
  eyebrow?: string;
  heading?: string;
  items?: ServicioCms[];
};

export default function Servicios({ eyebrow, heading, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const servicios = items?.length ? items : FALLBACK_ITEMS;

  return (
    <section id="servicios" className="bg-paper py-[clamp(3rem,6vw,5rem)] relative z-[1]" aria-labelledby="servicios-h2">
      <div className="max-w-[calc(var(--space-container)+16rem)] mx-auto px-section-x-sm md:px-section-x">
        <div className="mb-10" data-reveal>
          <p className="font-ui text-label font-semibold text-accent-deep uppercase tracking-[0.08em] mb-3.5">
            {eyebrow ?? 'Cómo puedo ayudarte'}
          </p>
          <h2 id="servicios-h2" className="font-display text-h2 font-semibold leading-[1.1] tracking-[-0.005em] text-ink">
            {heading ?? 'Especialidades'}
          </h2>
        </div>

        <div className="border-t border-line">
          {servicios.map((s, i) => {
            const isOpen = openIndex === i;
            const panelId = `servicio-panel-${i}`;
            const btnId = `servicio-btn-${i}`;
            return (
              <article
                key={s.titulo}
                className={[
                  'border-b border-b-line-soft border-l-[3px] transition-colors duration-fast',
                  s.featured ? 'border-l-accent-deep bg-[color-mix(in_srgb,var(--accent)_5%,var(--paper))]' : 'border-l-transparent',
                ].join(' ')}
                data-reveal
              >
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-4 py-[1.125rem] pl-5 pr-4 text-left transition-colors duration-fast hover:bg-[color-mix(in_srgb,var(--accent)_12%,var(--paper))]"
                  >
                    <span className="font-display text-h3-xl font-semibold text-ink">
                      {s.titulo}
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className={[
                        'h-5 w-5 shrink-0 text-accent transition-transform duration-fast',
                        isOpen ? 'rotate-90' : '',
                      ].join(' ')}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  inert={!isOpen}
                  className={[
                    'grid transition-[grid-template-rows] duration-fast',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pl-5 pr-4">
                      {s.desc && (
                        <p className="font-body text-body-base text-ink-soft mb-3">
                          {s.desc}
                        </p>
                      )}
                      {s.tags && s.tags.length > 0 && (
                        <ul className="font-ui text-body-base text-ink-soft list-disc pl-5 marker:text-accent space-y-1">
                          {s.tags.map(tag => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
