import { NextResponse } from 'next/server';
import { client } from '@/sanity/client';

export const dynamic = 'force-dynamic';

export async function GET() {
  const allSiteSettings = await client.fetch(
    `*[_type == "siteSettings"]{ _id, _updatedAt, _rev, "fotoHeroRef": fotoHero.asset._ref }`,
    {},
    { cache: 'no-store' },
  );

  const allLegalPages = await client.fetch(
    `*[_type == "legalPage"]{ _id, _updatedAt, "slug": slug.current, title }`,
    {},
    { cache: 'no-store' },
  );

  const allHero = await client.fetch(
    `*[_type == "hero"]{ _id, _updatedAt }`,
    {},
    { cache: 'no-store' },
  );

  const allApariencia = await client.fetch(
    `*[_type == "apariencia"]{ _id, _updatedAt }`,
    {},
    { cache: 'no-store' },
  );

  return NextResponse.json({
    fetchedAt: new Date().toISOString(),
    counts: {
      siteSettings: allSiteSettings.length,
      legalPage: allLegalPages.length,
      hero: allHero.length,
      apariencia: allApariencia.length,
    },
    allSiteSettings,
    allLegalPages,
    allHero,
    allApariencia,
    env: {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    },
  });
}
