import { MapPin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../logo.png'; // logo inside src/
import { COMPANY, ADDRESS_SHORT } from '../company';
import { LangToggle, useLang } from '../i18n';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', fr: 'Accueil', path: '/' },
  { label: 'About Us', fr: 'À propos', path: '/about-us' },
  { label: 'Products', fr: 'Produits', path: '/products' },
  { label: 'Locations', fr: 'Points de vente', path: '/locations' },
  { label: 'Halal & Certifications', fr: 'Halal et certifications', path: '/halal' },
  { label: 'Contact', fr: 'Contact', path: '/contact' },
];

export default function Navbar({ currentPath, navigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-brand-red text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a href={COMPANY.phoneHref} className="flex items-center gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap">
              <Phone size={11} />
              <span>{COMPANY.phone}</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-white/80 whitespace-nowrap">
              <MapPin size={11} />
              <span>{ADDRESS_SHORT}</span>
            </span>
          </div>
          <span className="text-white/70 hidden md:block whitespace-nowrap">{t('Proudly Canadian • Since 2013', 'Fièrement canadien • Depuis 2013')}</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Increased height from h-14 → h-20 */}
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button
              onClick={() => { navigate('/'); setOpen(false); }}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={logo}
                alt="Al Shamas"
                className="h-20 w-auto object-contain"  // Increased logo size
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(link => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    currentPath === link.path
                      ? 'bg-brand-red text-white shadow-sm'
                      : 'text-gray-600 hover:text-brand-red hover:bg-brand-red-pale'
                  }`}
                >
                  {t(link.label, link.fr)}
                </button>
              ))}
              <LangToggle className="ml-3" />
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden flex items-center gap-2">
            <LangToggle />
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full text-gray-500 hover:text-brand-red hover:bg-brand-red-pale transition-colors"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.path}
                  onClick={() => { navigate(link.path); setOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    currentPath === link.path
                      ? 'bg-brand-red text-white'
                      : 'text-gray-600 hover:text-brand-red hover:bg-brand-red-pale'
                  }`}
                >
                  {t(link.label, link.fr)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
