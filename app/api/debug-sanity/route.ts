import { NextResponse } from 'next/server';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/queries';

export const dynamic = 'force-dynamic';

export async function GET() {
  const raw = await client.fetch(
    `*[_type == "siteSettings"][0]{ _id, _updatedAt, _rev, fotoHero, fotoSobreMi, foto }`,
    {},
    { cache: 'no-store' },
  );

  const safeUrl = (img: unknown) => {
    try {
      return img ? urlFor(img as Parameters<typeof urlFor>[0]).width(1600).url() : null;
    } catch (e) {
      return `ERR: ${(e as Error).message}`;
    }
  };

  return NextResponse.json({
    fetchedAt: new Date().toISOString(),
    raw,
    computedUrls: {
      fotoHero: safeUrl(raw?.fotoHero),
      fotoSobreMi: safeUrl(raw?.fotoSobreMi),
      foto: safeUrl(raw?.foto),
    },
    env: {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    },
  });
}
