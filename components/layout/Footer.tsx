import { site } from '@/tokens/site';

export default function Footer() {
  return (
    <footer className="bg-ground-deep px-[3rem] relative z-[1]" aria-label="Pie de página">
      <div className="max-w-[1200px] mx-auto w-full flex flex-wrap items-center gap-4 py-[1.25rem] md:h-[60px] md:py-0">
        <span className="font-display text-[0.875rem] font-semibold text-white/65 shrink-0">
          {site.name}
        </span>
        <ul className="flex gap-6 mx-auto list-none" role="list">
          {['Aviso legal', 'Privacidad', 'Cookies'].map(label => (
            <li key={label}>
              <a href="#" className="font-ui text-[0.75rem] text-white/35 hover:text-white/70 transition-colors duration-[180ms]">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <span className="font-ui text-[0.75rem] text-white/25 shrink-0">{site.copyright}</span>
      </div>
    </footer>
  );
}
