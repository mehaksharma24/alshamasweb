import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../logo-badge.png';
import { useLang } from '../i18n';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', fr: 'Accueil', path: '/' },
  { label: 'Products', fr: 'Produits', path: '/products' },
  { label: 'About Us', fr: 'À propos', path: '/about-us' },
  { label: 'Where to Buy', fr: 'Où acheter', path: '/locations' },
  { label: 'Halal', fr: 'Halal', path: '/halal' },
  { label: 'Contact Us', fr: 'Nous joindre', path: '/contact' },
];

function isActive(current: string, path: string) {
  if (path === '/') return current === '/';
  if (path === '/products') return current.startsWith('/products') || current.startsWith('/recipes');
  return current === path || (path === '/about-us' && current === '/our-story');
}

/** Boxed language switch: shows the language you can switch TO. */
function LangBox() {
  const { lang, setLang } = useLang();
  const next = lang === 'en' ? 'fr' : 'en';
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={next === 'fr' ? 'Français' : 'English'}
      className="h-9 min-w-9 px-2 border-2 border-white text-white text-sm font-extrabold tracking-wide hover:bg-white hover:text-brand-red transition-colors"
    >
      {next.toUpperCase()}
    </button>
  );
}

export default function Navbar({ currentPath, navigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="relative bg-brand-red">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo badge — hangs below the bar like the mockup */}
          <button
            onClick={() => go('/')}
            aria-label="Al-Shamas — Home"
            className="relative z-20 self-start mt-2 shrink-0 focus:outline-none"
          >
            <img
              src={logo}
              alt="Al-Shamas Food Products"
              className="w-[130px] sm:w-[160px] lg:w-[180px] h-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)]"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {NAV_LINKS.map(link => {
              const active = isActive(currentPath, link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`relative px-3 py-2 text-[13px] xl:text-sm font-extrabold uppercase tracking-wide transition-colors ${
                    active ? 'text-white' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {t(link.label, link.fr)}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-[3px] rounded-full bg-white transition-transform origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
            <div className="ml-3">
              <LangBox />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <LangBox />
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? t('Close menu', 'Fermer le menu') : t('Open menu', 'Ouvrir le menu')}
              className="w-10 h-10 flex items-center justify-center text-white border-2 border-white/0 hover:border-white transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Curved red edge under the bar (same on every page) */}
        <svg className="absolute left-0 right-0 top-full w-full h-9 sm:h-12 pointer-events-none overflow-visible" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0 H1440 V4 C1100 18 760 2 520 14 C330 24 150 26 0 32 Z" fill="#C8102E" />
          <path d="M0 32 C150 26 330 24 520 14 C760 2 1100 18 1440 4" fill="none" stroke="#F5A04A" strokeWidth="2.5" opacity="0.7" />
          <path d="M0 44 C150 38 330 36 520 26 C760 14 1100 30 1440 16" fill="none" stroke="#C8102E" strokeWidth="3" opacity="0.35" />
        </svg>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden relative z-10 bg-brand-red border-t border-white/20 shadow-lg">
            <div className="px-4 pt-14 pb-4 space-y-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`w-full text-left px-4 py-3 text-sm font-extrabold uppercase tracking-wide ${
                    isActive(currentPath, link.path) ? 'bg-white text-brand-red' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {t(link.label, link.fr)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
