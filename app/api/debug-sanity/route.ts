import { NextResponse } from 'next/server';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/queries';

export const dynamic = 'force-dynamic';

export async function GET() {
  const siteSettings = await client.fetch(
    `*[_id == "siteSettings"][0]{
      _id, _updatedAt, _rev,
      fotoHero, fotoSobreMi, foto
    }`,
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

  const heroFoto = siteSettings?.fotoHero ?? siteSettings?.foto;
  const sobreFoto = siteSettings?.fotoSobreMi ?? siteSettings?.foto;

  const generatedUrls = {
    heroFoto1200: heroFoto ? urlFor(heroFoto).width(1200).height(1200).fit('crop').url() : null,
    heroFotoWide1920: heroFoto ? urlFor(heroFoto).width(1920).height(1080).fit('crop').url() : null,
    sobreFoto1200: sobreFoto ? urlFor(sobreFoto).width(1200).height(1200).fit('crop').url() : null,
  };

  return NextResponse.json({
    fetchedAt: new Date().toISOString(),
    counts: {
      legalPage: allLegalPages.length,
      hero: allHero.length,
      apariencia: allApariencia.length,
    },
    siteSettings,
    heroFoto,
    sobreFoto,
    generatedUrls,
    allLegalPages,
    allHero,
    allApariencia,
    env: {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    },
  });
}
