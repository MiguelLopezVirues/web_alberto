'use client';

import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { structureTool, type StructureBuilder } from 'sanity/structure';
import { schema } from '@/sanity/schema';

const singleton = (S: StructureBuilder, id: string, title: string, type?: string) =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(type ?? id).documentId(id));

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contenido')
    .items([
      // ── Apariencia ────────────────────────────────────────────────────────
      singleton(S, 'apariencia', '🎨 Apariencia'),
      S.divider(),
      // ── Contenido del sitio ───────────────────────────────────────────────
      singleton(S, 'siteSettings', '⚙️ Ajustes del sitio'),
      singleton(S, 'hero',        '🏠 Cabecera (Hero)'),
      singleton(S, 'sobreMi',     '👤 Sobre mí'),
      singleton(S, 'servicios',   '🩺 Servicios'),
      singleton(S, 'proceso',     '🔄 Proceso terapéutico'),
      singleton(S, 'testimonios', '💬 Testimonios'),
      singleton(S, 'contacto',    '📬 Contacto'),
      S.divider(),
      // ── Instagram ─────────────────────────────────────────────────────────
      singleton(S, 'redes', '📸 Instagram (Sígueme en redes)'),
      S.divider(),
      // ── Páginas legales (list — multiple documents) ───────────────────────
      S.documentTypeListItem('legalPage').title('⚖️ Páginas legales'),
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
