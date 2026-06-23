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
import { getSiteSettings, getAppearance, getRedes, urlFor } from '@/sanity/queries';
import { resolveHeroVariant } from '@/tokens/heroVariant';
import { resolveIgLayout, resolveIgContentType } from '@/tokens/igLayout';

export default async function Home() {
  const [settings, appearance, redes] = await Promise.all([
    getSiteSettings(),
    getAppearance(),
    getRedes(),
  ]);

  // Two named photo slots, each with the legacy `foto` as a migration fallback:
  //  - fotoHero (wide)    → Hero, all variants
  //  - fotoSobreMi (port.) → Sobre mí
  const FALLBACK_FOTO = '/images/alberto.png';
  const heroFoto = settings?.fotoHero ?? settings?.foto;
  const sobreFoto = settings?.fotoSobreMi ?? settings?.foto;
  const heroFotoUrl = heroFoto ? urlFor(heroFoto).width(1600).url() : FALLBACK_FOTO;
  const sobreFotoUrl = sobreFoto ? urlFor(sobreFoto).width(1000).url() : FALLBACK_FOTO;

  const heroVariant = resolveHeroVariant(appearance?.heroVariant);
  const igLayout = resolveIgLayout(appearance?.igLayout);
  const igContentType = resolveIgContentType(appearance?.igContentType);

  // Resolve each IG post's Sanity image to a CDN URL (manual-upload content).
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
        {/* Seams are used SPARINGLY — only to frame the one colored "beat", the
            Testimonios band, where a shaped transition is earned. Every other
            boundary is a clean butt-join. The two band seams mirror each other
            (flip) so the band reads as one deliberate lens, not a repeated stamp.
            Style is set by the `seam` Apariencia preset (data-seam on <html>). */}
        <Hero fotoUrl={heroFotoUrl} variant={heroVariant} />
        <SobreMi fotoUrl={sobreFotoUrl} />
        <Servicios />
        <Proceso />
        <Seam from="paper-alt" to="band" />
        <Testimonios />
        <Seam from="band" to="soft" flip />
        <Contacto />
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
      <Footer />
    </>
  );
}
