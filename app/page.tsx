import RevealInit from '@/components/ui/RevealInit';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SobreMi from '@/components/sections/SobreMi';
import Servicios from '@/components/sections/Servicios';
import Proceso from '@/components/sections/Proceso';
import Testimonios from '@/components/sections/Testimonios';
import Contacto from '@/components/sections/Contacto';
import { getSiteSettings, urlFor } from '@/sanity/queries';

export default async function Home() {
  const settings = await getSiteSettings();
  const fotoUrl = settings?.foto
    ? urlFor(settings.foto).width(1200).url()
    : '/images/alberto.png';

  return (
    <>
      {/* Ambient blobs — fixed, organic soft color fields that wash across the
          page (and across section seams) to soften the flat color transitions. */}
      <RevealInit />
      <div className="blob" style={{ width: 560, height: 560, top: '-8%', right: '-12%' }} aria-hidden="true" />
      <div className="blob blob-b bg-accent-deep" style={{ width: 460, height: 460, top: '40%', left: '-12%', opacity: 0.13 }} aria-hidden="true" />
      <div className="blob blob-b bg-jewel" style={{ width: 380, height: 380, bottom: '-6%', right: '-6%', opacity: 0.12 }} aria-hidden="true" />
      <Nav />
      <main>
        <Hero fotoUrl={fotoUrl} />
        <SobreMi fotoUrl={fotoUrl} />
        <Servicios />
        <Proceso />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
