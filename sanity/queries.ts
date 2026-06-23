import { client } from './client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]{ fotoHero, fotoSobreMi, foto }`,
    {},
    { next: { tags: ['sanity'] } },
  );
}

export async function getAppearance(): Promise<{ palette?: string; fotoShape?: string; heroVariant?: string; seam?: string; igLayout?: string; igContentType?: string; fontPreset?: string } | null> {
  return client.fetch(
    `*[_type == "apariencia"][0]{ palette, fotoShape, heroVariant, seam, igLayout, igContentType, fontPreset }`,
    {},
    { next: { tags: ['sanity'] } },
  );
}

export type RedesPost = {
  image: SanityImageSource;
  alt: string;
  caption?: string;
  postUrl?: string;
  featured?: boolean;
};

export type Redes = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  handle?: string;
  profileUrl?: string;
  posts?: RedesPost[];
};

export async function getRedes(): Promise<Redes | null> {
  return client.fetch(
    `*[_type == "redes"][0]{
      eyebrow, heading, intro, handle, profileUrl,
      posts[]{ image, alt, caption, postUrl, featured }
    }`,
    {},
    { next: { tags: ['sanity'] } },
  );
}
