'use client';

import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from '@/sanity/schema';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath:  '/studio',
  plugins:   [structureTool()],
  schema,
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
