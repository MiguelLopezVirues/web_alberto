import { site } from '@/tokens/site';
import NavDrawer from './NavDrawer';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-[100] bg-ground border-b border-border h-[3.75rem]" aria-label="Navegación principal">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[3rem] h-full flex items-center gap-8">
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
        <NavDrawer />
      </div>
    </nav>
  );
}
