/**
 * SITE DATA — single source of truth for all content-specific strings.
 *
 * Edit this file to update Alberto's details, nav links, or metadata.
 */

export const site = {
  name:        'Alberto Aguado Calvo',
  title:       'Alberto Aguado Calvo — Psicólogo y Neuropsicólogo',
  description: 'Psicólogo General Sanitario y Neuropsicólogo Clínico. Atención online y presencial en Madrid.',
  eyebrow:     'Psicólogo General Sanitario · Neuropsicólogo Clínico',
  tagline:     'Atención online y presencial en Madrid.',
  cta:         'Cuéntame qué te ocurre',
  copyright:   '© 2025 · Col. [número pendiente]',
  navLinks: [
    { href: '#sobre-mi',  label: 'Sobre mí'   },
    { href: '#servicios', label: 'Servicios'  },
    { href: '#proceso',   label: 'Proceso'    },
    { href: '#contacto',  label: 'Contacto'   },
  ],
} as const;
