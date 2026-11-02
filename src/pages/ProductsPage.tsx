import { ArrowRight, UtensilsCrossed } from 'lucide-react';
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
            {PRODUCT_CATEGORIES.map(category => {
              return (
                <button
                  key={category.slug}
                  onClick={() => navigate(`/products/category/${category.slug}`)}
                  className="group flex items-center gap-6 text-left py-6 border-b border-gray-200 hover:border-brand-red transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-3xl font-bold text-brand-red mb-2">{categoryLabel(category, lang)}</h2>
                    <p className="text-sm italic text-gray-600">{category.tagline[lang]}</p>
                    <ArrowRight size={18} className="mt-3 text-gray-400 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="w-40 h-28 sm:w-48 sm:h-32 shrink-0 flex items-center justify-center">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={categoryLabel(category, lang)}
                        className="max-w-full max-h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-brand-red-pale flex items-center justify-center">
                        <UtensilsCrossed size={32} className="text-brand-red/60" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
