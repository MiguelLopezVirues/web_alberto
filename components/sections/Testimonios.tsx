'use client';

import { useState } from 'react';

const testimonios = [
  {
    cita: 'Por fin encontré a alguien que no me hizo sentir raro por lo que me pasaba. Alberto escucha de verdad y las sesiones se sienten como un espacio seguro, sin prisas.',
    autor: 'Marcos T.',
  },
  {
    cita: 'Llevaba años con ansiedad pensando que era mi forma de ser. En pocos meses entendí qué la mantenía y cómo cambiar mi relación con ella.',
    autor: 'Laura G.',
  },
  {
    cita: 'Mi hijo tiene TDAH y las sesiones con Alberto han sido un punto de inflexión. Nos ha dado herramientas a él y a nosotros como familia.',
    autor: 'Carmen R.',
  },
] as const;

export default function Testimonios() {
  const [current, setCurrent] = useState(0);
  const [busy, setBusy] = useState(false);
  const FADE_MS = 1000;

  function show(n: number) {
    if (busy) return;
    const next = ((n % testimonios.length) + testimonios.length) % testimonios.length;
    if (next === current) return;
    setBusy(true);
    setTimeout(() => {
      setCurrent(next);
      setBusy(false);
    }, FADE_MS);
  }

  return (
    <section
      id="testimonios"
      className="bg-ground-soft py-[clamp(3rem,6vw,5rem)] pb-6 relative z-[1]"
      aria-labelledby="test-heading"
    >
      <div className="max-w-[680px] mx-auto px-[3rem] flex flex-col items-center text-center">
        <p id="test-heading" className="font-ui text-label text-accent uppercase tracking-[0.08em] mb-10" data-reveal>
          Experiencias de pacientes
        </p>

        {/* All testimonials stacked in same grid cell */}
        <div className="grid w-full">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="[grid-area:1/1] flex flex-col items-center transition-[opacity,transform] duration-[1000ms]"
              style={{
                opacity: i === current && !busy ? 1 : 0,
                transform: i === current && !busy ? 'none' : 'translateY(10px)',
                pointerEvents: i === current ? 'auto' : 'none',
                transitionTimingFunction: 'cubic-bezier(0.5,0,0.2,1)',
              }}
              role="group"
              aria-label={`Testimonio ${i + 1} de ${testimonios.length}`}
            >
              <p className="font-display text-[5.5rem] leading-[0.55] text-accent-light font-bold mb-5 select-none" aria-hidden="true">&ldquo;</p>
              <blockquote className="font-body text-body-lg italic text-ink leading-[1.75] mb-5">
                {t.cita}
              </blockquote>
              <cite className="font-ui text-label text-ink-ghost not-italic">— {t.autor}</cite>
            </div>
          ))}
        </div>

        <nav className="flex items-center gap-4 mt-9" aria-label="Navegación de testimonios">
          <button
            onClick={() => show(current - 1)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink-ghost hover:border-accent hover:text-accent transition-colors duration-[180ms]"
            aria-label="Testimonio anterior"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex gap-[7px] items-center" role="list">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => show(i)}
                className="w-[7px] h-[7px] rounded-full transition-[background,transform] duration-500"
                style={{
                  background: i === current ? '#607b68' : '#c2c8c1',
                  transform: i === current ? 'scale(1.35)' : 'scale(1)',
                  transitionTimingFunction: 'cubic-bezier(0.5,0,0.2,1)',
                }}
                aria-label={`Ver testimonio ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                role="listitem"
              />
            ))}
          </div>

          <button
            onClick={() => show(current + 1)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink-ghost hover:border-accent hover:text-accent transition-colors duration-[180ms]"
            aria-label="Siguiente testimonio"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>
      </div>
    </section>
  );
}
