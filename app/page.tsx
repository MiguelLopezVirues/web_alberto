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
      {/* Ambient blobs — fixed, traverse all sections */}
      <RevealInit />
      <div className="blob" style={{ width: 600, height: 600, top: -120, right: -160 }} aria-hidden="true" />
      <div className="blob" style={{ width: 480, height: 480, bottom: '15%', left: -140 }} aria-hidden="true" />
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
