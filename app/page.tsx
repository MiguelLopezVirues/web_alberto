import RevealInit from '@/components/ui/RevealInit';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SobreMi from '@/components/sections/SobreMi';
import Servicios from '@/components/sections/Servicios';
import Proceso from '@/components/sections/Proceso';
import Testimonios from '@/components/sections/Testimonios';
import Contacto from '@/components/sections/Contacto';
import Redes from '@/components/sections/Redes';
import { Seam, SeamDefs } from '@/components/ui/Seam';
import { getPageContent, getAppearance, getRedes, urlFor } from '@/sanity/queries';
import { resolveHeroVariant } from '@/tokens/heroVariant';
import { resolveIgLayout, resolveIgContentType } from '@/tokens/igLayout';
import { site } from '@/tokens/site';

export default async function Home() {
  const [content, appearance, redes] = await Promise.all([
    getPageContent(),
    getAppearance(),
    getRedes(),
  ]);

  const { siteSettings, hero, sobreMi, servicios, proceso, testimonios, contacto } = content;

  // Photo slots — prefer named CMS slot, fall back to legacy `foto`, then static file.
  const FALLBACK_FOTO = '/images/alberto.png';
  const heroFoto = siteSettings?.fotoHero ?? siteSettings?.foto;
  const sobreFoto = siteSettings?.fotoSobreMi ?? siteSettings?.foto;
  const heroFotoUrl = heroFoto ? urlFor(heroFoto).width(1600).url() : FALLBACK_FOTO;
  const sobreFotoUrl = sobreFoto ? urlFor(sobreFoto).width(1000).url() : FALLBACK_FOTO;

  const heroVariant = resolveHeroVariant(appearance?.heroVariant);
  const igLayout = resolveIgLayout(appearance?.igLayout);
  const igContentType = resolveIgContentType(appearance?.igContentType);

  const redesPosts = (redes?.posts ?? []).map(p => ({
    url: urlFor(p.image).width(1080).url(),
    alt: p.alt,
    caption: p.caption,
    postUrl: p.postUrl,
    featured: p.featured,
  }));

  return (
    <>
      <RevealInit />
      <SeamDefs />
      <Nav />
      <main>
        {/* Seams frame only the Testimonios beat — two mirrored so it reads as one
            deliberate lens, not a repeated stamp. Style set by `seam` Apariencia preset. */}
        <Hero
          fotoUrl={heroFotoUrl}
          variant={heroVariant}
          eyebrow={hero?.eyebrow ?? site.eyebrow}
          headlineLead={hero?.headlineLead ?? site.hero.headlineLead}
          headlineEmphasis={hero?.headlineEmphasis ?? site.hero.headlineEmphasis}
          tagline={hero?.tagline ?? site.tagline}
          cta={hero?.cta ?? site.cta}
          preguntaQuestion={hero?.preguntaQuestion ?? site.hero.preguntaQuestion}
          preguntaResponseLead={hero?.preguntaResponseLead ?? site.hero.preguntaResponseLead}
          preguntaResponseEmphasis={hero?.preguntaResponseEmphasis ?? site.hero.preguntaResponseEmphasis}
        />
        <SobreMi
          fotoUrl={sobreFotoUrl}
          greeting={sobreMi?.greeting}
          heading={sobreMi?.heading}
          body={sobreMi?.body}
          credentials={sobreMi?.credentials}
        />
        <Servicios
          eyebrow={servicios?.eyebrow}
          heading={servicios?.heading}
          items={servicios?.items}
        />
        <Proceso
          eyebrow={proceso?.eyebrow}
          heading={proceso?.heading}
          steps={proceso?.steps}
        />
        <Seam from="paper-alt" to="band" />
        <Testimonios
          eyebrow={testimonios?.eyebrow}
          items={testimonios?.items}
        />
        <Seam from="band" to="soft" flip />
        <Contacto
          heading={contacto?.heading}
          intro={contacto?.intro}
          ctaButton={contacto?.ctaButton}
          successMsg={contacto?.successMsg}
          errorMsg={contacto?.errorMsg}
          subtext={contacto?.subtext}
        />
        <Redes
          eyebrow={redes?.eyebrow}
          heading={redes?.heading}
          intro={redes?.intro}
          handle={redes?.handle}
          profileUrl={redes?.profileUrl}
          posts={redesPosts}
          variant={igLayout}
          contentType={igContentType}
        />
      </main>
      <Footer copyright={siteSettings?.copyright} />
    </>
  );
}
