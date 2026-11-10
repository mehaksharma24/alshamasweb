import { ArrowRight } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import PageBanner from '../components/PageBanner';
import { PRODUCTS } from '../data';
import type { Pack } from '../data';
import { useLang } from '../i18n';

/** Packs sold to restaurants / distributors (foodservice boxes and Sysco cases). */
const isFoodService = (pk: Pack) =>
  pk.key.includes('foodservice') || pk.key.includes('sysco') || !!pk.stores?.some(s => s.name.startsWith('Sysco'));

export default function FoodServicePage({ navigate }: { navigate: (path: string) => void }) {
  const { lang, t } = useLang();
  const items = PRODUCTS.flatMap(p => p.packs.filter(isFoodService).map(pk => ({ p, pk })));

  return (
    <div className="min-h-screen pt-24">
      <PageBanner
        script={t('For restaurants & distributors', 'Pour les restaurants et distributeurs')}
        title={t('Food Service', 'Restauration')}
        sub={t('Our halal products in larger foodservice formats.', 'Nos produits halal en formats pour la restauration.')}
      />

      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {items.map(({ p, pk }) => (
              <button
                key={`${p.id}-${pk.key}`}
                onClick={() => navigate(`/products/${p.slug}`)}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[4/3] mb-3 rounded-2xl overflow-hidden bg-gray-50">
                  <img src={pk.image} alt={p.name[lang]} loading="lazy" className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="font-medium text-[#333333] group-hover:underline">{p.name[lang]}</span>
                <span className="text-xs text-gray-500 mt-1">{pk.title[lang]} · {pk.detail[lang]}</span>
              </button>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange-deep text-white font-semibold rounded-full hover:brightness-95 transition-all text-sm"
            >
              {t('Contact Us for Food Service', 'Contactez-nous pour la restauration')} <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
