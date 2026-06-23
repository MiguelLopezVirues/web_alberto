import { site } from '@/tokens/site';

type Props = {
  copyright?: string;
};

export default function Footer({ copyright }: Props) {
  return (
    <footer className="bg-footer text-footer-ink px-section-x-sm md:px-section-x relative z-[1]" aria-label="Pie de página">
      <div className="max-w-container mx-auto w-full flex flex-wrap items-center gap-4 py-[1.25rem] md:h-[60px] md:py-0">
        <span className="font-display text-[0.875rem] font-semibold text-[color-mix(in_srgb,var(--footer-ink)_75%,var(--footer))] shrink-0">
          {site.name}
        </span>
        <ul className="flex gap-6 mx-auto list-none" role="list">
          {[
            { label: 'Aviso legal', href: '/aviso-legal' },
            { label: 'Privacidad',  href: '/privacidad' },
            { label: 'Cookies',     href: '/cookies' },
          ].map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="font-ui text-[0.75rem] text-[color-mix(in_srgb,var(--footer-ink)_45%,var(--footer))] hover:text-footer-ink transition-colors duration-fast">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <span className="font-ui text-[0.75rem] text-[color-mix(in_srgb,var(--footer-ink)_35%,var(--footer))] shrink-0">
          {copyright ?? site.copyright}
        </span>
      </div>
    </footer>
  );
}
