import { site } from '@/tokens/site';
import LogoAlberto from '@/components/ui/LogoAlberto';
import NavDrawer from './NavDrawer';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-[100] bg-[color-mix(in_srgb,var(--paper)_85%,transparent)] backdrop-blur-md border-b border-line h-[3.75rem]" aria-label="Navegación principal">
      <div className="w-full px-nav-x-sm md:px-nav-x h-full flex items-center gap-8">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <LogoAlberto className="h-8 w-auto text-accent-deep" />
          <span className="font-display text-h3 font-semibold tracking-[-0.01em] text-ink">Alberto Aguado</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 ml-auto list-none" role="list">
          {site.navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-ui text-label-nav font-medium text-ink-soft hover:text-ink transition-colors duration-fast"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex font-ui text-label-btn font-semibold text-action border border-action px-5 py-2 rounded-btn shrink-0 hover:bg-action hover:text-action-ink transition-colors duration-fast"
        >
          Reservar primera cita
        </a>
        <NavDrawer />
      </div>
    </nav>
  );
}
