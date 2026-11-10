import { Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import logo from '../logo.png'; // ✅ your real logo
import { COMPANY, ADDRESS_FULL } from '../company';
import { useLang } from '../i18n';

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#F7941D' }}>
      {/* Top accent bar */}
      <div className="h-1 bg-brand-orange-soft"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
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

            <p className="text-gray-800 text-sm leading-relaxed mb-5">
              {t(
                'Canadian manufacturer of high-quality halal frozen foods since 2013. Halal certified by the Halal Monitoring Authority (HMA).',
                'Fabricant canadien d’aliments halal surgelés de grande qualité depuis 2013. Certifié halal par la Halal Monitoring Authority (HMA).'
              )}
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/40 hover:bg-white flex items-center justify-center text-gray-800 hover:text-gray-900 transition-all">
                <Instagram size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/40 hover:bg-white flex items-center justify-center text-gray-800 hover:text-gray-900 transition-all">
                <Facebook size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/40 hover:bg-white flex items-center justify-center text-gray-800 hover:text-gray-900 transition-all">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-heading font-bold mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gray-800 inline-block"></span>
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
                    className="text-gray-800 text-sm hover:text-gray-950 hover:underline transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-heading font-bold mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gray-800 inline-block"></span>
              {t('Contact', 'Nous joindre')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-800">
                <MapPin size={14} className="mt-0.5 text-gray-800 shrink-0" />
                <span>{ADDRESS_FULL}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-800">
                <Phone size={14} className="text-gray-800 shrink-0" />
                <a href={COMPANY.phoneHref} className="hover:text-gray-950 hover:underline">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-800">
                <Mail size={14} className="text-gray-800 shrink-0" />
                <span>{COMPANY.email}</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {[t('HMA Halal', 'Halal HMA'), t('SQF Certified', 'Certifié SQF'), 'SMETA'].map(cert => (
                <span key={cert} className="text-xs px-2.5 py-1 rounded-full border border-gray-800/40 text-gray-800 font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-900 font-heading font-bold mb-2 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gray-800 inline-block"></span>
              {t('Stay in the Loop', 'Restez informé')}
            </h4>
            <p className="text-gray-800 text-sm mb-4">{t('New products, recipes, and exclusive offers.', 'Nouveaux produits, recettes et offres exclusives.')}</p>
            {submitted ? (
              <div className="bg-white/40 text-gray-900 text-sm rounded-xl px-4 py-3 border border-gray-800/20">
                {t('Thank you for subscribing!', 'Merci de votre abonnement !')}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('Your email', 'Votre courriel')}
                  required
                  className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-800/20 focus:outline-none focus:border-gray-800 bg-white text-gray-900 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} Al-Shamas Food Products. {t('All rights reserved.', 'Tous droits réservés.')}
          </p>
          <p className="text-gray-700 text-xs">
            {t('Proudly Canadian • Since 2013 • HMA Halal Certified', 'Fièrement canadien • Depuis 2013 • Certifié halal HMA')}
          </p>
        </div>
      </div>
    </footer>
  );
}
