import { defineType, defineField, defineArrayMember } from 'sanity';
import { paletteOptions, DEFAULT_PALETTE } from '../tokens/palettes';
import { fotoShapeOptions, DEFAULT_FOTO_SHAPE } from '../tokens/fotoShape';
import { heroVariantOptions, DEFAULT_HERO_VARIANT } from '../tokens/heroVariant';
import { seamOptions, DEFAULT_SEAM } from '../tokens/seam';
import {
  igLayoutOptions,
  DEFAULT_IG_LAYOUT,
  igContentTypeOptions,
  DEFAULT_IG_CONTENT_TYPE,
} from '../tokens/igLayout';
import { fontPresetOptions, DEFAULT_FONT_PRESET } from '../tokens/fontPreset';

// Restricted Portable Text — em-only marks, no headings, no arbitrary styling.
// Reused by any field where the client can add emphasis but nothing else.
const emOnlyPT = [
  defineArrayMember({
    type: 'block',
    styles: [{ title: 'Normal', value: 'normal' }],
    lists: [],
    marks: {
      decorators: [{ title: 'Cursiva', value: 'em' }],
      annotations: [],
    },
  }),
];

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nombre del sitio',
      description: 'Nombre completo (aparece en el footer y pestaña del navegador).',
      type: 'string',
      initialValue: 'Alberto Aguado Calvo',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Título SEO',
      description: 'Título de la pestaña del navegador y resultados de búsqueda (≤60 caracteres).',
      type: 'string',
      initialValue: 'Alberto Aguado Calvo — Psicólogo y Neuropsicólogo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descripción SEO',
      description: 'Descripción para resultados de búsqueda (≤160 caracteres).',
      type: 'text',
      rows: 3,
      initialValue: 'Psicólogo General Sanitario y Neuropsicólogo Clínico. Atención online y presencial en Madrid.',
    }),
    defineField({
      name: 'copyright',
      title: 'Pie de página — copyright',
      description: 'Texto legal del pie. Incluye el número de colegiado cuando lo tengas.',
      type: 'string',
      initialValue: '© 2025 · Col. [número pendiente]',
    }),
    defineField({
      name: 'fotoHero',
      title: 'Foto de cabecera (apaisada)',
      description:
        'Imagen ancha/apaisada para la cabecera (Hero). Ideal: Alberto a un lado con espacio libre al otro para el texto. Se usa en la variante "Imagen de fondo"; en "Retrato dividido" se recorta a columna (ajusta el punto focal con el hotspot).',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'fotoSobreMi',
      title: 'Foto de Sobre mí (retrato)',
      description: 'Retrato vertical, primer plano cálido, para la sección "Sobre mí".',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'foto',
      title: 'Foto (heredada)',
      description:
        'Campo antiguo. Solo se usa como reserva si los dos campos de arriba están vacíos. Sube las nuevas fotos arriba y puedes ignorar este.',
      type: 'image',
      options: { hotspot: true },
      hidden: true,
    }),
  ],
});

const apariencia = defineType({
  name: 'apariencia',
  title: 'Apariencia',
  type: 'document',
  fields: [
    defineField({
      name: 'palette',
      title: 'Paleta de color',
      description: 'Elige una de las paletas curadas. Se aplica a todo el sitio.',
      type: 'string',
      options: { list: paletteOptions, layout: 'radio' },
      initialValue: DEFAULT_PALETTE,
    }),
    defineField({
      name: 'fotoShape',
      title: 'Forma de las fotos',
      description: 'Rectangular (columnas a sangre) u orgánica (marco con forma).',
      type: 'string',
      options: { list: fotoShapeOptions, layout: 'radio' },
      initialValue: DEFAULT_FOTO_SHAPE,
    }),
    defineField({
      name: 'heroVariant',
      title: 'Cabecera (Hero)',
      description:
        'Emblema (la marca/logo como protagonista junto al texto, sin foto), Carta (texto a gran tamaño con firma, sin foto), Pregunta (cercana; texto pendiente de revisión), o las variantes con foto: Imagen de fondo, Retrato dividido y Solo texto.',
      type: 'string',
      options: { list: heroVariantOptions, layout: 'radio' },
      initialValue: DEFAULT_HERO_VARIANT,
    }),
    defineField({
      name: 'seam',
      title: 'Transición entre secciones',
      description:
        'Cómo se dibuja el borde entre secciones: Arco suave (curva orgánica), Borde de papel (rasgado, textura), Línea fina (regla sutil) o Degradado (fundido).',
      type: 'string',
      options: { list: seamOptions, layout: 'radio' },
      initialValue: DEFAULT_SEAM,
    }),
    defineField({
      name: 'igLayout',
      title: 'Instagram — composición',
      description:
        'Cómo se muestra la sección "Sígueme en redes": Destacado + cuadrícula (una publicación grande + rejilla) o Galería (rejilla de cuadrados, estilo más clásico).',
      type: 'string',
      options: { list: igLayoutOptions, layout: 'radio' },
      initialValue: DEFAULT_IG_LAYOUT,
    }),
    defineField({
      name: 'igContentType',
      title: 'Instagram — tipo de contenido',
      description: 'Forma de las miniaturas: Publicaciones (cuadradas 1:1) o Reels (verticales 9:16).',
      type: 'string',
      options: { list: igContentTypeOptions, layout: 'radio' },
      initialValue: DEFAULT_IG_CONTENT_TYPE,
    }),
    defineField({
      name: 'fontPreset',
      title: 'Tipografía',
      description:
        'Conjunto tipográfico curado (títulos · texto · botones). Lino: sans-serif aireado (actual). Tinta: serif cálida y editorial. Imprenta: serif de prensa, con autoridad. Remanso: serif suave y sereno. Tiza: grotesca con carácter, moderna. Roble: serif robusta y cercana. El texto siempre usa una tipografía de alta legibilidad.',
      type: 'string',
      options: { list: fontPresetOptions, layout: 'radio' },
      initialValue: DEFAULT_FONT_PRESET,
    }),
  ],
});

const hero = defineType({
  name: 'hero',
  title: 'Cabecera (Hero)',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Antetítulo',
      description: 'Texto pequeño sobre el titular. Ej.: "Psicólogo General Sanitario · Neuropsicólogo Clínico".',
      type: 'string',
      initialValue: 'Psicólogo General Sanitario · Neuropsicólogo Clínico',
    }),
    defineField({
      name: 'headlineLead',
      title: 'Titular — texto principal',
      description: 'La frase principal del titular, sin la palabra en cursiva final.',
      type: 'string',
      initialValue: 'Acompañándote a comprender lo que te ocurre y a construir una vida con mayor bienestar y',
    }),
    defineField({
      name: 'headlineEmphasis',
      title: 'Titular — palabra en cursiva',
      description: 'La última palabra del titular, que aparece en cursiva. Ej.: "sentido".',
      type: 'string',
      initialValue: 'sentido',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Línea secundaria bajo el titular. Ej.: "Atención online y presencial en Madrid."',
      type: 'string',
      initialValue: 'Atención online y presencial en Madrid.',
    }),
    defineField({
      name: 'cta',
      title: 'Botón principal (CTA)',
      description: 'Texto del botón de llamada a la acción.',
      type: 'string',
      initialValue: 'Cuéntame qué te ocurre',
    }),
    defineField({
      name: 'preguntaQuestion',
      title: 'Variante "Pregunta" — frase de apertura',
      description: 'Primera frase de la variante Pregunta. Ej.: "A veces cuesta poner en palabras lo que nos pasa."',
      type: 'string',
      initialValue: 'A veces cuesta poner en palabras lo que nos pasa.',
    }),
    defineField({
      name: 'preguntaResponseLead',
      title: 'Variante "Pregunta" — respuesta (texto principal)',
      description: 'Respuesta antes de la palabra en cursiva. Ej.: "Te acompaño a comprenderlo y a construir una vida con".',
      type: 'string',
      initialValue: 'Te acompaño a comprenderlo y a construir una vida con',
    }),
    defineField({
      name: 'preguntaResponseEmphasis',
      title: 'Variante "Pregunta" — palabra en cursiva',
      description: 'Palabra final en cursiva de la respuesta. Ej.: "sentido".',
      type: 'string',
      initialValue: 'sentido',
    }),
  ],
});

const sobreMi = defineType({
  name: 'sobreMi',
  title: 'Sobre mí',
  type: 'document',
  fields: [
    defineField({
      name: 'greeting',
      title: 'Saludo',
      description: 'Frase de apertura en display grande. Ej.: "Hola, soy Alberto."',
      type: 'string',
      initialValue: 'Hola, soy Alberto.',
    }),
    defineField({
      name: 'heading',
      title: 'Titular',
      description: 'H2 de la sección.',
      type: 'string',
      initialValue: 'Un neuropsicólogo que ayuda a comprenderte y transformar los patrones que limitan tu bienestar.',
    }),
    defineField({
      name: 'body',
      title: 'Cuerpo (dos párrafos)',
      description: 'Texto de la sección. Puedes usar cursiva para énfasis; nada más. El segundo párrafo suele ir en cursiva completa.',
      type: 'array',
      of: emOnlyPT,
    }),
    defineField({
      name: 'credentials',
      title: 'Credenciales',
      description: 'Badges con titulaciones y registros. Añade o reordena libremente.',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      initialValue: [
        'Graduado en Psicología · UPSA',
        'Máster Psicólogo General Sanitario · UNIE',
        'Neuropsicólogo Clínico · UNIR',
        'Neurocientífico Clínico · UCM',
      ],
    }),
  ],
});

const servicios = defineType({
  name: 'servicios',
  title: 'Servicios (Especialidades)',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Antetítulo',
      type: 'string',
      initialValue: 'Cómo puedo ayudarte',
    }),
    defineField({
      name: 'heading',
      title: 'Titular',
      type: 'string',
      initialValue: 'Especialidades',
    }),
    defineField({
      name: 'items',
      title: 'Servicios',
      description: 'Arrastra para reordenar. El primero marcado como "Destacado" aparece con borde de color.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'servicio',
          title: 'Servicio',
          type: 'object',
          fields: [
            defineField({ name: 'titulo', title: 'Título', type: 'string', validation: r => r.required() }),
            defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 4 }),
            defineField({
              name: 'tags',
              title: 'Etiquetas',
              description: 'Una por línea, o usa la lista. Se muestran como puntos bajo la descripción.',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
              name: 'featured',
              title: 'Destacado',
              description: 'Aparece con borde de acento y fondo suave.',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: { select: { title: 'titulo', subtitle: 'desc' } },
        }),
      ],
    }),
  ],
});

const proceso = defineType({
  name: 'proceso',
  title: 'Proceso terapéutico',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Antetítulo',
      type: 'string',
      initialValue: 'Cómo trabajaríamos juntos',
    }),
    defineField({
      name: 'heading',
      title: 'Titular',
      type: 'string',
      initialValue: 'El proceso terapéutico',
    }),
    defineField({
      name: 'steps',
      title: 'Pasos',
      description: 'Arrastra para reordenar.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'step',
          title: 'Paso',
          type: 'object',
          fields: [
            defineField({ name: 'sub', title: 'Etiqueta (encima del título)', type: 'string', validation: r => r.required() }),
            defineField({ name: 'titulo', title: 'Título', type: 'string', validation: r => r.required() }),
            defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 4 }),
          ],
          preview: { select: { title: 'titulo', subtitle: 'sub' } },
        }),
      ],
    }),
  ],
});

const testimonios = defineType({
  name: 'testimonios',
  title: 'Testimonios',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Antetítulo',
      type: 'string',
      initialValue: 'Experiencias de pacientes',
    }),
    defineField({
      name: 'items',
      title: 'Testimonios',
      description: 'Arrastra para reordenar. El primero se muestra al cargar.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'testimonio',
          title: 'Testimonio',
          type: 'object',
          fields: [
            defineField({ name: 'cita', title: 'Cita', type: 'text', rows: 3, validation: r => r.required() }),
            defineField({ name: 'autor', title: 'Autor', type: 'string', validation: r => r.required() }),
          ],
          preview: { select: { title: 'autor', subtitle: 'cita' } },
        }),
      ],
    }),
  ],
});

const contacto = defineType({
  name: 'contacto',
  title: 'Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Titular',
      type: 'string',
      initialValue: '¿Hablamos?',
    }),
    defineField({
      name: 'intro',
      title: 'Texto de introducción',
      description: 'Aparece bajo el titular, antes del formulario.',
      type: 'text',
      rows: 2,
      initialValue: 'No necesitas preparar nada.\nSolo cuéntame qué te ocurre.',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Botón de enviar',
      type: 'string',
      initialValue: 'Cuéntame qué te ocurre',
    }),
    defineField({
      name: 'successMsg',
      title: 'Mensaje de éxito',
      type: 'string',
      initialValue: 'Mensaje enviado. Te responderé lo antes posible.',
    }),
    defineField({
      name: 'errorMsg',
      title: 'Mensaje de error',
      type: 'string',
      initialValue: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.',
    }),
    defineField({
      name: 'subtext',
      title: 'Texto bajo el formulario',
      type: 'string',
      initialValue: 'Te responderé lo antes posible.',
    }),
  ],
});

const redes = defineType({
  name: 'redes',
  title: 'Instagram (Sígueme en redes)',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Antetítulo',
      description: 'Texto pequeño sobre el título. Ej.: "Sígueme en redes".',
      type: 'string',
      initialValue: 'Sígueme en redes',
    }),
    defineField({
      name: 'heading',
      title: 'Título',
      description: 'Ej.: "Un poco del día a día".',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Texto de introducción',
      description: 'Frase breve junto al título (se muestra sobre todo en la composición "Destacado").',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'handle',
      title: 'Usuario de Instagram',
      description: 'Ej.: "@alberto.psicologia". Se muestra como enlace al perfil.',
      type: 'string',
    }),
    defineField({
      name: 'profileUrl',
      title: 'Enlace al perfil',
      description: 'URL completa del perfil de Instagram (https://instagram.com/...).',
      type: 'url',
    }),
    defineField({
      name: 'posts',
      title: 'Publicaciones',
      description:
        'Sube las imágenes manualmente y enlázalas a cada publicación. La primera marcada como "Destacada" ocupa el hueco grande en la composición "Destacado".',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'igPost',
          title: 'Publicación',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              description: 'Describe la imagen brevemente (accesibilidad/SEO).',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({ name: 'caption', title: 'Pie (opcional)', type: 'string' }),
            defineField({
              name: 'postUrl',
              title: 'Enlace a la publicación',
              description: 'URL de la publicación en Instagram.',
              type: 'url',
            }),
            defineField({
              name: 'featured',
              title: 'Destacada',
              description: 'Ocupa el hueco grande en la composición "Destacado".',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: { select: { title: 'alt', subtitle: 'caption', media: 'image' } },
        }),
      ],
    }),
  ],
});

export const schema = {
  types: [siteSettings, apariencia, hero, sobreMi, servicios, proceso, testimonios, contacto, redes],
};
