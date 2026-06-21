'use client';

import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { structureTool, type StructureBuilder } from 'sanity/structure';
import { schema } from '@/sanity/schema';

// Apariencia is a singleton: one fixed-ID document, edited in place (no list /
// "create new"). siteSettings stays a normal list so its existing photo doc is
// untouched.
const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Apariencia')
        .id('apariencia')
        .child(S.document().schemaType('apariencia').documentId('apariencia')),
      S.documentTypeListItem('siteSettings').title('Ajustes del sitio'),
    ]);

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath:  '/studio',
  plugins:   [structureTool({ structure })],
  schema,
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
