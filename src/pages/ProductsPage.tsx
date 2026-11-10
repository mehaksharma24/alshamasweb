import { ArrowRight, Tag } from 'lucide-react';
import RecipeIdeas from '../components/RecipeIdeas';
import NewsletterBanner from '../components/NewsletterBanner';
import { PRODUCT_CATEGORIES, categoryLabel } from '../data';
import { useLang } from '../i18n';
import PageBanner from '../components/PageBanner';

interface ProductsPageProps {
  navigate: (path: string) => void;
}

export default function ProductsPage({ navigate }: ProductsPageProps) {
  const { lang, t } = useLang();
  return (
    <div className="min-h-screen pt-24">
      <PageBanner script={t('Halal • Handmade • Authentic', 'Halal • Fait à la main • Authentique')} title={t('Our Products', 'Nos produits')} sub={t('Halal frozen foods — handmade with carefully selected ingredients and authentic recipes.', 'Aliments halal surgelés — faits à la main avec des ingrédients soigneusement sélectionnés et des recettes authentiques.')} />

      {/* Categories */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {[
              ...PRODUCT_CATEGORIES.map(c => ({ key: c.slug, path: `/products/category/${c.slug}`, title: categoryLabel(c, lang), tagline: c.tagline[lang], image: c.image })),
              { key: 'food-service', path: '/food-service', title: t('Food Service', 'Restauration'), tagline: t('Larger formats for restaurants & distributors', 'Grands formats pour restaurants et distributeurs'), image: '/images/products/3D Box-Alshamas-BeefSamosa_40Pcs.png' },
              { key: 'private-label', path: '/private-label', title: t('Private Label', 'Marque privée'), tagline: t('Our halal products, packed under your brand', 'Nos produits halal, emballés sous votre marque'), image: '' },
            ].map(item => (
              <button
                key={item.key}
                onClick={() => navigate(item.path)}
                className="group flex items-center gap-6 text-left py-6 border-b-2 border-brand-orange-deep transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-3xl font-bold text-[#333333] mb-2">{item.title}</h2>
                  <p className="text-sm italic text-[#333333]">{item.tagline}</p>
                  <ArrowRight size={18} className="mt-3 text-brand-orange-deep group-hover:translate-x-1 transition-all" />
                </div>
                <div className="w-40 h-28 sm:w-48 sm:h-32 shrink-0 flex items-center justify-center">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-brand-orange-soft/40 flex items-center justify-center">
                      <Tag size={32} className="text-brand-orange-deep" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <RecipeIdeas navigate={navigate} />

      <NewsletterBanner />
    </div>
  );
}
