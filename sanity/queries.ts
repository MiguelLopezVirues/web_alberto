import { client } from './client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import type { PortableTextBlock } from 'next-sanity';

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SanityImage = { asset: { _ref: string } } & Record<string, unknown>;

export type HeroCms = {
  eyebrow?: string;
  headlineLead?: string;
  headlineEmphasis?: string;
  tagline?: string;
  cta?: string;
  preguntaQuestion?: string;
  preguntaResponseLead?: string;
  preguntaResponseEmphasis?: string;
};

export type SobreMiCms = {
  greeting?: string;
  heading?: string;
  body?: PortableTextBlock[];
  credentials?: string[];
};

export type ServicioCms = {
  titulo: string;
  desc?: string;
  tags?: string[];
  featured?: boolean;
};

export type ServiciosCms = {
  eyebrow?: string;
  heading?: string;
  items?: ServicioCms[];
};

export type StepCms = {
  sub: string;
  titulo: string;
  desc?: string;
};

export type ProcesoCms = {
  eyebrow?: string;
  heading?: string;
  steps?: StepCms[];
};

export type TestimonioCms = {
  cita: string;
  autor: string;
};

export type TestimoniosCms = {
  eyebrow?: string;
  items?: TestimonioCms[];
};

export type ContactoCms = {
  heading?: string;
  intro?: string;
  ctaButton?: string;
  successMsg?: string;
  errorMsg?: string;
  subtext?: string;
};

export type SiteSettingsCms = {
  _updatedAt?: string;
  siteName?: string;
  seoTitle?: string;
  seoDescription?: string;
  copyright?: string;
  fotoHero?: SanityImage;
  fotoSobreMi?: SanityImage;
  foto?: SanityImage;
};

export type PageContent = {
  siteSettings: SiteSettingsCms | null;
  hero: HeroCms | null;
  sobreMi: SobreMiCms | null;
  servicios: ServiciosCms | null;
  proceso: ProcesoCms | null;
  testimonios: TestimoniosCms | null;
  contacto: ContactoCms | null;
};

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

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

export async function getPageContent(): Promise<PageContent> {
  return client.fetch(
    `{
      "siteSettings": *[_type == "siteSettings"][0]{
        _updatedAt,
        siteName, seoTitle, seoDescription, copyright,
        fotoHero, fotoSobreMi, foto
      },
      "hero": *[_type == "hero"][0]{
        eyebrow, headlineLead, headlineEmphasis, tagline, cta,
        preguntaQuestion, preguntaResponseLead, preguntaResponseEmphasis
      },
      "sobreMi": *[_type == "sobreMi"][0]{
        greeting, heading, body, credentials
      },
      "servicios": *[_type == "servicios"][0]{
        eyebrow, heading,
        items[]{ titulo, desc, tags, featured }
      },
      "proceso": *[_type == "proceso"][0]{
        eyebrow, heading,
        steps[]{ sub, titulo, desc }
      },
      "testimonios": *[_type == "testimonios"][0]{
        eyebrow,
        items[]{ cita, autor }
      },
      "contacto": *[_type == "contacto"][0]{
        heading, intro, ctaButton, successMsg, errorMsg, subtext
      }
    }`,
    {},
    { cache: 'no-store' },
  );
}

export async function getAppearance(): Promise<{
  palette?: string;
  fotoShape?: string;
  heroVariant?: string;
  seam?: string;
  igLayout?: string;
  igContentType?: string;
  fontPreset?: string;
} | null> {
  return client.fetch(
    `*[_type == "apariencia"][0]{ palette, fotoShape, heroVariant, seam, igLayout, igContentType, fontPreset }`,
    {},
    { cache: 'no-store' },
  );
}

export async function getRedes(): Promise<Redes | null> {
  return client.fetch(
    `*[_type == "redes"][0]{
      eyebrow, heading, intro, handle, profileUrl,
      posts[]{ image, alt, caption, postUrl, featured }
    }`,
    {},
    { cache: 'no-store' },
  );
}

export type LegalPage = {
  title: string;
  slug: string;
  body: PortableTextBlock[];
};

export async function getLegalSlugs(): Promise<string[]> {
  const docs = await client.fetch<{ slug: string }[]>(
    `*[_type == "legalPage"]{ "slug": slug.current }`,
    {},
    { cache: 'no-store' },
  );
  return docs.map(d => d.slug).filter(Boolean);
}

export async function getLegalPage(slug: string): Promise<LegalPage | null> {
  return client.fetch(
    `*[_type == "legalPage" && slug.current == $slug][0]{ title, "slug": slug.current, body }`,
    { slug },
    { cache: 'no-store' },
  );
}

// Legacy — kept for any callers that haven't migrated to getPageContent yet
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]{ fotoHero, fotoSobreMi, foto }`,
    {},
    { cache: 'no-store' },
  );
}
