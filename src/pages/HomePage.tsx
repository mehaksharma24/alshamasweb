import { ArrowRight, Award, Clock, Palette, ShieldCheck, Star } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS, RECIPES, categoryLabel } from '../data';
import { RECIPES_FR } from '../recipes-fr';
import { RETAILERS } from '../retailers';
import { useLang } from '../i18n';

const DIFFICULTY_FR: Record<string, string> = { Easy: 'Facile', Medium: 'Moyen', Hard: 'Difficile' };

// ONLY CHANGE: Hero banner now uses homebanner.png from images/products
const HERO_IMAGE = '/images/products/homebanner-lineup.jpg';

interface HomePageProps {
  navigate: (path: string) => void;
}

const FEATURED_IDS = ['1', '4', '5', '8', '11', '12'];

export default function HomePage({ navigate }: HomePageProps) {
  const featured = PRODUCTS.filter(p => FEATURED_IDS.includes(p.id));
  const recipes = RECIPES.slice(0, 4);
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Starts below the fixed navbar and anchors to the top so the top row of boxes isn't hidden. */}
        <div
          className="absolute inset-x-0 bottom-0 top-[109px] bg-cover bg-top"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />

        <div className="absolute inset-0 bg-white/80"></div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-brand-red-pale rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-brand-green-pale rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-brand-orange-pale rounded-full opacity-70 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-red-pale text-brand-red text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <Star size={12} fill="currentColor" />
              {t('Canada’s Halal Frozen Foods', 'Aliments halal surgelés du Canada')}
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              {lang === 'fr' ? (
                <>
                  Aliments
                  <br />
                  <span className="text-brand-red">halal</span> surgelés
                  <br />
                  <span className="text-brand-green">de qualité</span>
                </>
              ) : (
                <>
                  Canada's Premium
                  <br />
                  <span className="text-brand-red">Halal</span> Frozen
                  <br />
                  <span className="text-brand-green">Foods</span>
                </>
              )}
            </h1>

            <p className="text-gray-800 text-lg leading-relaxed mb-8 max-w-xl">
              {t(
                'Proudly Canadian since 2013. High-quality halal kebabs, samosas, spring rolls and other ready-to-cook products — made with carefully selected ingredients and authentic recipes, and free from artificial colours.',
                'Fièrement canadien depuis 2013. Des kebabs, samosas, rouleaux impériaux et autres produits prêts à cuire halal de grande qualité — préparés à partir d’ingrédients soigneusement sélectionnés et de recettes authentiques, sans colorants artificiels.'
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/products')}
                className="flex items-center gap-2 px-7 py-3.5 bg-brand-red text-white font-semibold rounded-full hover:bg-brand-red-light transition-all shadow-lg shadow-brand-red/20 text-sm"
              >
                {t('Shop Products', 'Voir les produits')} <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate('/about-us')}
                className="flex items-center gap-2 px-7 py-3.5 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all border border-gray-200 text-sm"
              >
                {t('About Us', 'À propos de nous')}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                { icon: Award, label: t('Since 2013', 'Depuis 2013'), sub: t('Proudly Canadian', 'Fièrement canadien') },
                { icon: ShieldCheck, label: t('HMA Halal', 'Halal HMA'), sub: t('Certified', 'Certifié') },
                { icon: Palette, label: t('No Artificial', 'Sans colorants'), sub: t('Colours', 'artificiels') },
                { icon: Clock, label: t('Heat & Eat', 'Prêt à réchauffer'), sub: t('Fully cooked', 'Entièrement cuit') },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-full bg-brand-green-pale flex items-center justify-center">
                    <Icon size={14} className="text-brand-green" />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-gray-800 leading-tight">
                      {label}
                    </div>
                    <div className="text-xs text-gray-700 leading-tight">
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Retailer Marquee */}
      <section className="py-10 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div className="text-center mb-6">
          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
            {t('Available At', 'Offert chez')}
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex animate-scroll-left gap-8"
            style={{ width: 'max-content' }}
          >
            {[...RETAILERS, ...RETAILERS].map(({ name, logo }, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-sm min-w-[140px] border border-gray-100"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={name}
                    className="h-11 w-auto object-contain"
                  />
                ) : (
                  <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 left-0 w-72 h-72 bg-brand-orange-pale rounded-full -translate-x-1/2 opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-48 h-48 bg-brand-red-pale rounded-full opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-orange-pale text-brand-orange text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              {t('Top Picks', 'Nos favoris')}
            </div>

            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">
              {t('Featured Products', 'Produits vedettes')}
            </h2>

            <p className="text-gray-500 max-w-md mx-auto text-sm">
              {t(
                'A selection of our halal frozen favourites.',
                'Une sélection de nos favoris halal surgelés.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {featured.map(product => (
              <button
                key={product.id}
                onClick={() => navigate(`/products/${product.slug}`)}
                className="group text-left rounded-3xl p-5 border border-gray-100 hover:border-brand-orange/50 hover:bg-brand-orange-pale hover:shadow-lg transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {product.tags.includes('Bestseller') && (
                    <div className="absolute top-2 left-2 bg-brand-red text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      {t('Bestseller', 'Populaire')}
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-1">
                    {categoryLabel(PRODUCT_CATEGORIES.find(c => c.name === product.category), lang)}
                  </p>

                  <h3 className="font-serif font-semibold text-gray-900 text-sm leading-tight mb-1">
                    {product.name[lang]}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {t(
                      `${product.packs.length} pack size${product.packs.length === 1 ? '' : 's'}`,
                      `${product.packs.length} format${product.packs.length === 1 ? '' : 's'}`
                    )}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-red text-brand-red font-semibold rounded-full hover:bg-brand-red hover:text-white transition-all text-sm"
            >
              {t('View All Products', 'Voir tous les produits')} <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Brand Line */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-green-pale rounded-full opacity-30"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-800 leading-snug mb-4">
            {lang === 'fr' ? (
              <>
                « De notre cuisine à la vôtre —{' '}
                <span className="text-brand-red italic">l’authenticité</span> à chaque bouchée. »
              </>
            ) : (
              <>
                "From our kitchen to yours —{' '}
                <span className="text-brand-red italic">authenticity</span> in every bite."
              </>
            )}
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            {t(
              'Al-Shamas proves that frozen can taste just as fresh. Inspired by home-style recipes passed down through generations, every bite brings authentic flavour to your table.',
              'Avec Al-Shamas, le surgelé peut être aussi bon que le frais. Inspirées de recettes maison transmises de génération en génération, nos créations apportent une touche authentique à votre table.'
            )}
          </p>
        </div>
      </section>

      {/* Recipes */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-red-pale text-brand-red text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              {t('Inspiration', 'Inspiration')}
            </div>

            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">
              {t('Recipe Ideas', 'Idées recettes')}
            </h2>

            <p className="text-gray-500 text-sm">
              {t('Creative ways to use Al-Shamas products at home.', 'Des façons créatives d’utiliser les produits Al-Shamas à la maison.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recipes.map(recipe => (
              <button
                key={recipe.id}
                onClick={() => navigate(`/recipes/${recipe.slug}`)}
                className="group text-left bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={lang === 'fr' ? RECIPES_FR[recipe.slug]?.title ?? recipe.title : recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {recipe.time && (
                      <>
                        <span className="text-xs text-brand-orange font-semibold">
                          {recipe.time}
                        </span>

                        <span className="text-gray-300">·</span>
                      </>
                    )}

                    <span className="text-xs text-gray-400">
                      {lang === 'fr' ? DIFFICULTY_FR[recipe.difficulty] ?? recipe.difficulty : recipe.difficulty}
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-gray-900 text-sm leading-tight">
                    {lang === 'fr' ? RECIPES_FR[recipe.slug]?.title ?? recipe.title : recipe.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-1">
                    {t('Uses:', 'Produit :')}{' '}
                    {PRODUCTS.find(p => p.id === recipe.productId)?.name[lang] ?? recipe.product}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}