'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { site } from '@/tokens/site';

export default function NavDrawer() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const portal = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[200] bg-ink/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 z-[201] h-full w-[min(80vw,320px)] bg-paper shadow-2xl flex flex-col transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-[3.75rem] px-5 border-b border-line shrink-0">
          <span className="font-display text-[1rem] font-semibold text-ink">Menú</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="w-9 h-9 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-fast"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col">
          {site.navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-ui text-[1rem] font-medium text-ink py-3.5 border-b border-line hover:text-accent-deep transition-colors duration-fast"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center font-ui text-label-btn font-semibold text-action border border-action px-7 py-3.5 rounded-btn hover:bg-action hover:text-action-ink transition-colors duration-fast"
          >
            Reservar primera cita
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger — stays inside Nav so it participates in the nav's flex layout */}
      <button
        className="flex md:hidden flex-col gap-[5px] ml-auto p-1.5"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="nav-drawer"
        onClick={() => setOpen(o => !o)}
      >
        <span className="block w-[22px] h-[2px] bg-ink rounded-sm" />
        <span className="block w-[22px] h-[2px] bg-ink rounded-sm" />
        <span className="block w-[22px] h-[2px] bg-ink rounded-sm" />
      </button>

      {/* Backdrop + drawer portalled to <body> so backdrop-filter on Nav doesn't
          create a new containing block and misplace the fixed elements. */}
      {mounted && createPortal(portal, document.body)}
    </>
  );
}
