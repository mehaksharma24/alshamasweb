import { ChevronDown, Menu, X } from 'lucide-react';
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
  { label: 'Recipes', fr: 'Recettes', path: '/recipes' },
  { label: 'Where to Buy', fr: 'Où acheter', path: '/locations' },
  { label: 'Certificates', fr: 'Certificats', path: '/halal' },
  { label: 'Contact Us', fr: 'Nous joindre', path: '/contact' },
];

/** Products dropdown */
const PRODUCT_LINKS = [
  { label: 'Kebabs', fr: 'Kebabs', path: '/products/category/kababs' },
  { label: 'Samosa', fr: 'Samosas', path: '/products/category/samosas' },
  { label: 'Spring Rolls', fr: 'Rouleaux impériaux', path: '/products/category/spring-rolls' },
  { label: 'Food Service', fr: 'Restauration', path: '/food-service' },
  { label: 'Private Label', fr: 'Marque privée', path: '/private-label' },
];

function isActive(current: string, path: string) {
  if (path === '/') return current === '/';
  if (path === '/products') return current.startsWith('/products') || current === '/food-service' || current === '/private-label';
  if (path === '/recipes') return current.startsWith('/recipes');
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
      className="h-9 min-w-9 px-2 border-2 border-[#2b1410] text-[#2b1410] text-sm font-extrabold tracking-wide hover:bg-[#2b1410] hover:text-white transition-colors"
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
      <nav className="relative bg-brand-orange-deep">

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
              const isProducts = link.path === '/products';
              return (
                <div key={link.path} className="relative group">
                <button
                  onClick={() => go(link.path)}
                  aria-haspopup={isProducts ? 'true' : undefined}
                  className={`relative flex items-center gap-1 px-3 py-2 text-[13px] xl:text-sm font-extrabold uppercase tracking-wide transition-colors ${
                    active ? 'text-[#2b1410]' : 'text-[#2b1410]/80 hover:text-[#2b1410]'
                  }`}
                >
                  {t(link.label, link.fr)}
                  {isProducts && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-[3px] rounded-full bg-[#2b1410] transition-transform origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
                {isProducts && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all z-30">
                    <div className="min-w-[200px] bg-white rounded-xl shadow-xl border-t-4 border-brand-orange-deep py-2">
                      {PRODUCT_LINKS.map(sub => (
                        <button
                          key={sub.path}
                          onClick={() => go(sub.path)}
                          className={`block w-full text-left px-5 py-2.5 text-sm font-bold text-[#333333] hover:bg-brand-orange-soft/40 ${currentPath === sub.path ? 'bg-brand-orange-soft/40' : ''}`}
                        >
                          {t(sub.label, sub.fr)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                </div>
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
              className="w-10 h-10 flex items-center justify-center text-[#2b1410] border-2 border-transparent hover:border-[#2b1410] transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Curved orange edge with a thin white line (same on every page) */}
        <svg className="absolute left-0 right-0 top-full w-full h-6 sm:h-8 pointer-events-none overflow-visible" viewBox="0 0 1440 32" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0 H1440 V2 C1180 8 900 0 640 6 C400 12 180 16 0 18 Z" fill="#F7941D" />
          <path d="M0 26 C180 24 400 20 640 14 C900 8 1180 16 1440 10" fill="none" stroke="#ffffff" strokeWidth="3" />
        </svg>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden relative z-10 bg-brand-orange-deep border-t border-[#2b1410]/15 shadow-lg">
            <div className="px-4 pt-14 pb-4 space-y-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`w-full text-left px-4 py-3 text-sm font-extrabold uppercase tracking-wide ${
                    isActive(currentPath, link.path) ? 'bg-[#2b1410] text-white' : 'text-[#2b1410] hover:bg-white/20'
                  }`}
                >
                  {t(link.label, link.fr)}
                </button>
              )).flatMap((el, i) => NAV_LINKS[i].path === '/products' ? [el, ...PRODUCT_LINKS.map(sub => (
                <button
                  key={sub.path}
                  onClick={() => go(sub.path)}
                  className={`w-full text-left pl-10 pr-4 py-2 text-sm font-bold ${currentPath === sub.path ? 'bg-[#2b1410] text-white' : 'text-[#2b1410]/85 hover:bg-white/20'}`}
                >
                  {t(sub.label, sub.fr)}
                </button>
              ))] : [el])}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
