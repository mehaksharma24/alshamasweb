import NewsletterBanner from '../components/NewsletterBanner';
import { PRODUCT_CATEGORIES, PRODUCTS, categoryLabel } from '../data';
import type { KebabType } from '../catalog';
import { packLabel, packName } from '../components/PackCard';
import { useLang } from '../i18n';
import PageBanner from '../components/PageBanner';
import ProductsBannerSlider, { KEBAB_SLIDES, SAMOSA_SLIDES, SPRING_ROLL_SLIDES } from '../components/ProductsBannerSlider';

interface ProductCategoryPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export default function ProductCategoryPage({ slug, navigate }: ProductCategoryPageProps) {
  const { lang, t } = useLang();
  const category = PRODUCT_CATEGORIES.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen pt-40 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-2xl text-gray-800 mb-4">{t('Category not found', 'Catégorie introuvable')}</h2>
          <button onClick={() => navigate('/products')} className="text-brand-red hover:underline text-sm">
            {t('Back to Products', 'Retour aux produits')}
          </button>
        </div>
      </div>
    );
  }

  const products = PRODUCTS.filter(p => p.category === category.name);
  // Kebabs are grouped by type (Charcoal, Chapli, Kafta, Sheekh); other categories are one list.
  const KEBAB_TYPES: { key: KebabType; en: string; fr: string }[] = [
    { key: 'Charcoal', en: 'Charcoal Kebabs', fr: 'Kebabs au charbon' },
    { key: 'Chapli', en: 'Chapli Kebabs', fr: 'Chapli kebabs' },
    { key: 'Kafta', en: 'Kafta Kebabs', fr: 'Kafta kebabs' },
    { key: 'Sheekh', en: 'Sheekh Kebabs', fr: 'Sheekh kebabs' },
  ];
  const groups =
    category.name === 'Kebabs'
      ? KEBAB_TYPES.map(k => ({ key: k.key, title: lang === 'fr' ? k.fr : k.en, items: products.filter(p => p.kebabType === k.key) })).filter(g => g.items.length)
      : [{ key: 'all', title: '', items: products }];

  // Photo banners per category (others keep the plain header)
  const slides = category.name === 'Kebabs' ? KEBAB_SLIDES : category.name === 'Samosas' ? SAMOSA_SLIDES : category.name === 'Spring Rolls' ? SPRING_ROLL_SLIDES : null;

  return (
    <div className={`min-h-screen ${slides ? '' : 'pt-40'}`}>
      {slides && <ProductsBannerSlider slides={slides} />}
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

      <PageBanner script={category.tagline[lang]} title={categoryLabel(category, lang)} sub={category.description[lang]} />

      {/* Products */}
      <section className="pt-6 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {groups.map(group => (
            <div key={group.key} className="mb-14 last:mb-0">
              {group.title && (
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#333333] mb-6 pb-3 border-b-2 border-brand-orange-deep">
                  {group.title}
                </h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                {group.items.flatMap(product => {
                  const name = product.name[lang];
                  // Product card, followed by its Food Service packs (they also appear on the Food Service page)
                  const cards = [
                    { key: product.id, title: name, sub: '', image: product.image, path: `/products/${product.slug}` },
                    ...product.packs
                      .filter((pk, i) => pk.foodService && i > 0)
                      .map(pk => ({
                        key: `${product.id}-${pk.key}`,
                        title: packName(product, pk, lang),
                        sub: `${packLabel(pk, lang)}${pk.stores?.[0] ? ` · ${pk.stores[0].name === 'Costco Business Centre' ? t('Costco Business Centre', 'Centre d’affaires Costco') : pk.stores[0].name}` : ''}`,
                        image: pk.image,
                        path: `/products/${product.slug}/${pk.key}`,
                      })),
                  ];
                  return cards.map(c => (
                    <div key={c.key} className="group flex flex-col items-center text-center">
                      <div className="relative w-full aspect-[4/3] mb-3 rounded-2xl overflow-hidden bg-gray-50">
                        <button
                          type="button"
                          onClick={() => navigate(c.path)}
                          aria-label={c.title}
                          className="absolute inset-0 w-full h-full cursor-pointer"
                        >
                          <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </button>
                      </div>

                      <button onClick={() => navigate(c.path)} className="font-medium text-brand-red hover:underline">
                        {c.title}
                      </button>
                      {c.sub && <span className="text-xs text-gray-500 mt-1">{c.sub}</span>}
                    </div>
                  ));
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
