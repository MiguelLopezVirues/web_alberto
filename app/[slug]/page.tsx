import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PortableTextRenderer from '@/components/ui/PortableTextRenderer';
import { getLegalPage, getLegalSlugs } from '@/sanity/queries';

export const revalidate = false; // ISR via on-demand revalidation (webhook)

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getLegalSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLegalPage(slug);
  if (!page) return {};
  return { title: `${page.title} — Alberto Aguado Calvo` };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = await getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <main className="bg-paper min-h-screen">
        <div className="max-w-[720px] mx-auto px-section-x-sm md:px-section-x py-[clamp(4rem,8vw,6rem)]">
          <a
            href="/#contacto"
            className="inline-flex items-center gap-1.5 font-ui text-label text-accent-deep hover:text-ink transition-colors duration-fast mb-10"
          >
            <span aria-hidden="true">←</span> Volver al inicio
          </a>
          <h1 className="font-display text-h1 font-bold leading-[1.07] tracking-[-0.01em] text-ink mb-10">
            {page.title}
          </h1>
          <PortableTextRenderer value={page.body} />
        </div>
      </main>
      <Footer />
    </>
  );
}
