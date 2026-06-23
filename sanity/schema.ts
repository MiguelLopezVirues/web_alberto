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

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  fields: [
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
      options: {
        list: paletteOptions,
        layout: 'radio',
      },
      initialValue: DEFAULT_PALETTE,
    }),
    defineField({
      name: 'fotoShape',
      title: 'Forma de las fotos',
      description: 'Rectangular (columnas a sangre) u orgánica (marco con forma).',
      type: 'string',
      options: {
        list: fotoShapeOptions,
        layout: 'radio',
      },
      initialValue: DEFAULT_FOTO_SHAPE,
    }),
    defineField({
      name: 'heroVariant',
      title: 'Cabecera (Hero)',
      description:
        'Emblema (la marca/logo como protagonista junto al texto, sin foto), Carta (texto a gran tamaño con firma, sin foto), Pregunta (cercana; texto pendiente de revisión), o las variantes con foto: Imagen de fondo, Retrato dividido y Solo texto.',
      type: 'string',
      options: {
        list: heroVariantOptions,
        layout: 'radio',
      },
      initialValue: DEFAULT_HERO_VARIANT,
    }),
    defineField({
      name: 'seam',
      title: 'Transición entre secciones',
      description:
        'Cómo se dibuja el borde entre secciones: Arco suave (curva orgánica), Borde de papel (rasgado, textura), Línea fina (regla sutil) o Degradado (fundido).',
      type: 'string',
      options: {
        list: seamOptions,
        layout: 'radio',
      },
      initialValue: DEFAULT_SEAM,
    }),
    defineField({
      name: 'igLayout',
      title: 'Instagram — composición',
      description:
        'Cómo se muestra la sección "Sígueme en redes": Destacado + cuadrícula (una publicación grande + rejilla) o Galería (rejilla de cuadrados, estilo más clásico).',
      type: 'string',
      options: {
        list: igLayoutOptions,
        layout: 'radio',
      },
      initialValue: DEFAULT_IG_LAYOUT,
    }),
    defineField({
      name: 'igContentType',
      title: 'Instagram — tipo de contenido',
      description:
        'Forma de las miniaturas: Publicaciones (cuadradas 1:1) o Reels (verticales 9:16).',
      type: 'string',
      options: {
        list: igContentTypeOptions,
        layout: 'radio',
      },
      initialValue: DEFAULT_IG_CONTENT_TYPE,
    }),
    defineField({
      name: 'fontPreset',
      title: 'Tipografía',
      description:
        'Conjunto tipográfico curado (títulos · texto · botones). Lino: sans-serif aireado (actual). Tinta: serif cálida y editorial. Imprenta: serif de prensa, con autoridad. Remanso: serif suave y sereno. Tiza: grotesca con carácter, moderna. Roble: serif robusta y cercana. El texto siempre usa una tipografía de alta legibilidad.',
      type: 'string',
      options: {
        list: fontPresetOptions,
        layout: 'radio',
      },
      initialValue: DEFAULT_FONT_PRESET,
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
            defineField({
              name: 'caption',
              title: 'Pie (opcional)',
              type: 'string',
            }),
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
          preview: {
            select: { title: 'alt', subtitle: 'caption', media: 'image' },
          },
        }),
      ],
    }),
  ],
});

export const schema = { types: [siteSettings, apariencia, redes] };
