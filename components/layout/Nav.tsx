import { site } from '@/tokens/site';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-[100] bg-ground border-b border-border h-[3.75rem]" aria-label="Navegación principal">
      <div className="max-w-[1200px] mx-auto px-[3rem] h-full flex items-center gap-8">
        <a href="#" className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink shrink-0">
          Alberto Aguado
        </a>
        <ul className="hidden md:flex items-center gap-8 ml-auto list-none" role="list">
          {site.navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-ui text-label-nav font-medium text-ink-muted hover:text-ink transition-colors duration-[180ms]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex font-ui text-[0.875rem] font-bold bg-accent-deep text-ink-on-brand px-5 py-2 rounded-btn shrink-0 hover:bg-accent transition-colors duration-[180ms]"
        >
          Contacto
        </a>
        {/* TODO: hamburger drawer en mobile */}
        <button
          className="flex md:hidden flex-col gap-[5px] ml-auto p-1.5"
          aria-label="Abrir menú"
          aria-expanded="false"
        >
          <span className="block w-[22px] h-[2px] bg-ink-muted rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-ink-muted rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-ink-muted rounded-sm" />
        </button>
      </div>
    </nav>
  );
}
