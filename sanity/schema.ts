import { defineType, defineField } from 'sanity';
import { paletteOptions, DEFAULT_PALETTE } from '../tokens/palettes';
import { fotoShapeOptions, DEFAULT_FOTO_SHAPE } from '../tokens/fotoShape';

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'foto',
      title: 'Foto de Alberto',
      type: 'image',
      options: { hotspot: true },
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
  ],
});

export const schema = { types: [siteSettings, apariencia] };
