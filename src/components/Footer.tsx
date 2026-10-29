import { MapPin, Phone } from 'lucide-react';
import logo from '../logo.png'; // ✅ your real logo
import { COMPANY, ADDRESS_FULL } from '../company';
import { useLang } from '../i18n';

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1a3d2b' }}>
      {/* Top accent bar */}
      <div className="h-1 bg-brand-orange"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* 🔥 Replaced circle + text with full logo */}
              <img
                src={logo}
                alt="Al Shamas"
                className="w-32 h-auto object-contain"  // adjust size if needed
              />
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-0">
              {t(
                'Canadian manufacturer of high-quality halal frozen foods since 2013. Halal certified by the Halal Monitoring Authority (HMA).',
                'Fabricant canadien d’aliments halal surgelés de grande qualité depuis 2013. Certifié halal par la Halal Monitoring Authority (HMA).'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-orange inline-block"></span>
              {t('Quick Links', 'Liens rapides')}
            </h4>
            <ul className="space-y-2">
              {[
                { label: t('Products', 'Produits'), path: '/products' },
                { label: t('About Us', 'À propos'), path: '/about-us' },
                { label: t('Find a Store', 'Trouver un magasin'), path: '/locations' },
                { label: t('Halal & Certifications', 'Halal et certifications'), path: '/halal' },
              ].map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-white/60 text-sm hover:text-brand-orange-light transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-orange inline-block"></span>
              {t('Contact', 'Nous joindre')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 text-brand-orange-light shrink-0" />
                <span>{ADDRESS_FULL}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={14} className="text-brand-orange-light shrink-0" />
                <a href={COMPANY.phoneHref} className="hover:text-brand-orange-light">{COMPANY.phone}</a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {[t('HMA Halal', 'Halal HMA'), t('SQF Certified', 'Certifié SQF'), 'SMETA'].map(cert => (
                <span key={cert} className="text-xs px-2.5 py-1 rounded-full border border-brand-orange/40 text-brand-orange-light font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Al-Shamas Food Products. {t('All rights reserved.', 'Tous droits réservés.')}
          </p>
          <p className="text-white/40 text-xs">
            {t('Proudly Canadian • Since 2013 • HMA Halal Certified', 'Fièrement canadien • Depuis 2013 • Certifié halal HMA')}
          </p>
        </div>
      </div>
    </footer>
  );
}
