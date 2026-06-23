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
  hero: {
    // Headline split so the emphasis word can be italicised in-component (the one
    // characterful accent gesture). Used by every hero variant except `pregunta`.
    headlineLead:     'Acompañándote a comprender lo que te ocurre y a construir una vida con mayor bienestar y',
    headlineEmphasis: 'sentido',
    // "Pregunta" grammar — mirrors the visitor's state, then grounds it. NEW copy,
    // pending Alberto's sign-off before this variant ships as the live default.
    preguntaQuestion:        'A veces cuesta poner en palabras lo que nos pasa.',
    preguntaResponseLead:    'Te acompaño a comprenderlo y a construir una vida con',
    preguntaResponseEmphasis: 'sentido',
  },
  copyright:   '© 2025 · Col. [número pendiente]',
  navLinks: [
    { href: '#sobre-mi',  label: 'Sobre mí'   },
    { href: '#servicios', label: 'Servicios'  },
    { href: '#proceso',   label: 'Proceso'    },
    { href: '#contacto',  label: 'Contacto'   },
  ],
} as const;
