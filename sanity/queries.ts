import { client } from './client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{ foto }`);
}
