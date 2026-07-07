import Image from 'next/image';
import type { PortableTextBlock } from 'next-sanity';

type PTSpan = { _key?: string; _type: string; text?: string; marks?: string[] };

const FALLBACK_GREETING = 'Hola, soy Alberto.';
const FALLBACK_HEADING = 'Un neuropsicólogo que ayuda a comprenderte y transformar los patrones que limitan tu bienestar.';
const FALLBACK_BODY_PARAS = [
  'Trabajo con población infantojuvenil, adulta y personas mayores. Mi enfoque se basa en el análisis funcional de la conducta y las terapias contextuales de tercera generación — entender el origen y mantenimiento del malestar para intervenir de forma eficaz y personalizada.',
  'Un espacio cercano, seguro y libre de juicios, donde el objetivo es que entiendas lo que te ocurre y aprendas a relacionarte con ello de otra manera.',
];
const FALLBACK_CREDENTIALS = [
  'Graduado en Psicología · UPSA',
  'Máster Psicólogo General Sanitario · UNIE',
  'Neuropsicólogo Clínico · UNIR',
  'Neurocientífico Clínico · UCM',
];

type Props = {
  fotoUrl: string;
  greeting?: string;
  heading?: string;
  body?: PortableTextBlock[];
  credentials?: string[];
};

function renderBody(body: PortableTextBlock[] | undefined) {
  if (!body?.length) {
    return (
      <>
        <p className="font-body text-body-md text-soft-ink leading-[1.72]" data-reveal>
          {FALLBACK_BODY_PARAS[0]}
        </p>
        <p className="font-body text-body-md italic text-soft-ink leading-[1.65]" data-reveal>
          {FALLBACK_BODY_PARAS[1]}
        </p>
      </>
    );
  }

  return body.map((block, i) => {
    if (block._type !== 'block' || !Array.isArray(block.children)) return null;
    const spans = block.children as PTSpan[];
    const isItalic = spans.every(span => span.marks?.includes('em'));
    return (
      <p
        key={block._key ?? i}
        className={`font-body text-body-md text-soft-ink ${isItalic ? 'italic leading-[1.65]' : 'leading-[1.72]'}`}
        data-reveal
      >
        {spans.map((span, si) => {
          const content = span.text ?? '';
          if (span.marks?.includes('em')) {
            return <em key={span._key ?? si}>{content}</em>;
          }
          return content;
        })}
      </p>
    );
  });
}

export default function SobreMi({ fotoUrl, greeting, heading, body, credentials }: Props) {
  const badges = credentials?.length ? credentials : FALLBACK_CREDENTIALS;

  return (
    <section
      id="sobre-mi"
      className="bg-soft text-soft-ink flex flex-col md:flex-row min-h-[clamp(28rem,48vh,36rem)] relative z-[1] overflow-hidden"
      aria-labelledby="sobre-h2"
    >
      {/* Photo — top on mobile (full-width), left on desktop (42%). `foto-frame`
          is keyed by data-foto-shape on <html>: organic preset rounds + insets it.
          `objectPosition` follows Sanity's hotspot so Alberto's face stays framed. */}
      <div className="foto-col w-full h-[60vw] min-h-[260px] max-h-[420px] md:h-auto md:min-h-0 md:max-h-none md:w-[42%] md:shrink-0">
        <div className="foto-frame foto-frame-b relative overflow-hidden w-full h-full">
          <Image
            src={fotoUrl}
            alt="Alberto Aguado Calvo"
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div
        className="flex-1 flex flex-col justify-center gap-[1.625rem] max-w-[760px] px-section-x-sm py-8 md:py-[clamp(2.5rem,5vw,4.5rem)] md:pl-[clamp(1.5rem,3vw,2.5rem)] md:pr-[clamp(2rem,4vw,3rem)]"
      >
        <p className="font-display text-eyebrow-conv text-soft-ink" data-reveal>
          {greeting ?? FALLBACK_GREETING}
        </p>
        <h2
          id="sobre-h2"
          className="font-display text-h2 font-semibold leading-[1.15] tracking-[-0.005em] text-soft-ink"
          data-reveal
        >
          {heading ?? FALLBACK_HEADING}
        </h2>
        {renderBody(body)}
        <div className="flex flex-wrap gap-2 mt-2" data-reveal>
          {badges.map(badge => (
            <span
              key={badge}
              className="font-ui text-tag font-semibold tracking-[0.05em] text-soft-ink bg-[color-mix(in_srgb,var(--paper)_55%,var(--soft))] border border-line rounded-sm px-2.5 py-1"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
