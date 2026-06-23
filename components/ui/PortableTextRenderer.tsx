import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from 'next-sanity';

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-body text-body-base text-ink leading-[1.75] mb-5 last:mb-0">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-h2 font-semibold text-ink leading-[1.15] tracking-[-0.005em] mt-12 mb-4 first:mt-0">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-h3 font-semibold text-ink leading-[1.2] mt-8 mb-3">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-deep underline underline-offset-[3px] decoration-1 hover:text-ink transition-colors duration-fast"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="font-body text-body-base text-ink list-disc pl-6 space-y-1.5 mb-5 marker:text-accent">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="font-body text-body-base text-ink list-decimal pl-6 space-y-1.5 mb-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li className="leading-[1.7]">{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li className="leading-[1.7]">{children}</li>,
  },
};

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
