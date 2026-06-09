import RevealInit from '@/components/ui/RevealInit';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SobreMi from '@/components/sections/SobreMi';
import Servicios from '@/components/sections/Servicios';
import Proceso from '@/components/sections/Proceso';
import Testimonios from '@/components/sections/Testimonios';
import Contacto from '@/components/sections/Contacto';

export default function Home() {
  return (
    <>
      {/* Ambient blobs — fixed, traverse all sections */}
      <RevealInit />
      <div className="blob" style={{ width: 600, height: 600, top: -120, right: -160 }} aria-hidden="true" />
      <div className="blob" style={{ width: 480, height: 480, bottom: '15%', left: -140 }} aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <SobreMi />
        <Servicios />
        <Proceso />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
