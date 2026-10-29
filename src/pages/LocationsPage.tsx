import { Phone } from 'lucide-react';
import { COMPANY } from '../company';
import { useLang } from '../i18n';
import { RETAILERS } from '../retailers';

export default function LocationsPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green-pale rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <div className="inline-block bg-brand-green-pale text-brand-green text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            {t('Find Us', 'Où nous trouver')}
          </div>
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-3">{t('Where to Buy', 'Où acheter')}</h1>
          <p className="text-gray-500 text-base">
            {t('Al-Shamas products are available at these stores.', 'Les produits Al-Shamas sont offerts dans ces magasins.')}
          </p>
        </div>
      </section>

      {/* Retailers */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {RETAILERS.map(r => (
              <div
                key={r.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center justify-center gap-3"
              >
                <div className="h-14 flex items-center justify-center">
                  <img src={r.logo} alt={r.name} className="max-h-14 max-w-[150px] object-contain" />
                </div>
                <span className="text-sm font-medium text-gray-700">{r.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-3xl border border-dashed border-gray-300 p-8 text-center">
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-2">
              {t('Store addresses coming soon', 'Adresses des magasins à venir')}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t(
                'Availability can vary by store. For help finding a product near you, call our office.',
                'La disponibilité peut varier selon le magasin. Pour trouver un produit près de chez vous, appelez notre bureau.'
              )}
            </p>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-full hover:bg-brand-red-light transition-colors"
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
