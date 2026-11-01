import NewsletterBanner from '../components/NewsletterBanner';
import { packLabel } from '../components/PackCard';
import ZoomableImage from '../components/ZoomableImage';
import { PRODUCT_CATEGORIES, PRODUCTS, categoryLabel } from '../data';
import { useLang } from '../i18n';

interface ProductCategoryPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export default function ProductCategoryPage({ slug, navigate }: ProductCategoryPageProps) {
  const { lang, t } = useLang();
  const category = PRODUCT_CATEGORIES.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">{t('Category not found', 'Catégorie introuvable')}</h2>
          <button onClick={() => navigate('/products')} className="text-brand-red hover:underline text-sm">
            {t('Back to Products', 'Retour aux produits')}
          </button>
        </div>
      </div>
    );
  }

  const products = PRODUCTS.filter(p => p.category === category.name);

  return (
    <div className="min-h-screen pt-32">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <button onClick={() => navigate('/products')} className="hover:text-brand-red transition-colors">
              {t('Products', 'Produits')}
            </button>
            <span>/</span>
            <span className="text-gray-800">{categoryLabel(category, lang)}</span>
          </div>
        </div>
      </div>

      {/* Category intro */}
      <section className="pt-10 pb-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-red mb-3">{categoryLabel(category, lang)}</h1>
          <p className="text-gray-700 italic mb-4">{category.tagline[lang]}</p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">{category.description[lang]}</p>
        </div>
      </section>

      {/* Products with their pack sizes */}
      <section className="pt-6 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {products.map(product => {
              const name = product.name[lang];
              return (
                <div key={product.id} className="group flex flex-col items-center text-center">
                  <div className="relative w-full aspect-[4/3] mb-3 rounded-2xl overflow-hidden bg-gray-50">
                    <ZoomableImage
                      src={product.image}
                      alt={name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <button
                    onClick={() => navigate(`/products/${product.slug}`)}
                    className="font-medium text-brand-red hover:underline"
                  >
                    {name}
                  </button>

                  {/* Pack sizes */}
                  {product.packs.length > 0 ? (
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {product.packs.map(pack => (
                        <button
                          key={pack.key}
                          onClick={() => navigate(`/products/${product.slug}`)}
                          title={pack.detail[lang]}
                          className="flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-full border border-gray-200 bg-white hover:border-brand-red transition-colors"
                        >
                          <img src={pack.image} alt="" loading="lazy" className="w-7 h-7 rounded-full object-cover bg-gray-50" />
                          <span className="text-xs text-gray-600 whitespace-nowrap">{packLabel(pack, lang)}</span>
                          {pack.stores?.length ? (
                            <span className="text-[10px] font-semibold text-[#E31837]">Costco</span>
                          ) : null}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400 mt-1">{t('Pack sizes coming soon', 'Formats à venir')}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
