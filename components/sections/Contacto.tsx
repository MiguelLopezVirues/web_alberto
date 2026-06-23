'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function Contacto() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = {
      nombre:   (form.elements.namedItem('nombre') as HTMLInputElement).value.trim(),
      email:    (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement).value.trim(),
      motivo:   (form.elements.namedItem('motivo') as HTMLTextAreaElement).value.trim(),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputCls = 'w-full font-body text-body-base text-ink bg-paper-deep border border-line rounded-md px-3.5 py-3 appearance-none placeholder:text-ink-ghost focus:outline-none focus:border-accent-deep focus:ring-2 focus:ring-[color-mix(in_srgb,var(--jewel)_28%,transparent)] transition-[border-color,box-shadow] duration-fast';
  const labelCls = 'font-ui text-[0.75rem] font-semibold tracking-[0.06em] text-ink-ghost';

  return (
    <section
      id="contacto"
      className="bg-soft text-soft-ink pt-[clamp(3rem,6vw,5rem)] pb-[clamp(3rem,6vw,5rem)] relative z-[1] overflow-hidden"
      aria-labelledby="contacto-h2"
    >
      <div className="max-w-[860px] w-full mx-auto px-section-x-sm md:px-section-x flex flex-col items-center text-center">
        <h2
          id="contacto-h2"
          className="font-display text-[clamp(2rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.005em] text-soft-ink mb-3"
          data-reveal
        >
          ¿Hablamos?
        </h2>
        <p className="font-body text-body-base text-soft-ink mb-9" data-reveal>
          No necesitas preparar nada.<br />Solo cuéntame qué te ocurre.
        </p>

        <form className="w-full flex flex-col gap-3.5 text-left bg-paper rounded-panel shadow-float p-6 md:p-9" onSubmit={handleSubmit} noValidate data-reveal>
          <div className="flex flex-col gap-1.5">
            <label className={labelCls} htmlFor="nombre">Nombre</label>
            <input className={inputCls} type="text" id="nombre" name="nombre" placeholder="Tu nombre" autoComplete="given-name" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelCls} htmlFor="email">Email</label>
            <input className={inputCls} type="email" id="email" name="email" placeholder="tu@email.com" autoComplete="email" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelCls} htmlFor="telefono">
              Teléfono <span className="font-normal">(opcional)</span>
            </label>
            <input className={inputCls} type="tel" id="telefono" name="telefono" placeholder="600 000 000" autoComplete="tel" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelCls} htmlFor="motivo">¿Qué puedo hacer por ti?</label>
            <textarea
              className={`${inputCls} h-28 resize-y`}
              id="motivo"
              name="motivo"
              placeholder="Cuéntame lo que quieras, sin estructura ni formato."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-1 w-full font-ui text-label-btn font-bold text-action-ink bg-action py-[0.9375rem] rounded-btn shadow-lift hover:brightness-95 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition duration-fast"
          >
            {status === 'sending' ? 'Enviando…' : 'Cuéntame qué te ocurre'}
          </button>

          {status === 'ok' && (
            <p className="font-body text-[0.875rem] text-accent-deep" aria-live="polite">
              Mensaje enviado. Te responderé lo antes posible.
            </p>
          )}
          {status === 'error' && (
            <p className="font-body text-[0.875rem] text-feedback-error" aria-live="polite">
              No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.
            </p>
          )}
        </form>

        <p className="font-body text-[0.8125rem] text-ink-ghost mt-4" data-reveal>
          Te responderé lo antes posible.
        </p>
      </div>
    </section>
  );
}
