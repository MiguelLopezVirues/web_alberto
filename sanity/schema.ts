import { defineType, defineField } from 'sanity';

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

export const schema = { types: [siteSettings] };
