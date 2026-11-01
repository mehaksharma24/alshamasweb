import { ArrowRight, Award, Clock, Palette, ShieldCheck } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { PRODUCT_CATEGORIES, PRODUCTS, RECIPES, categoryLabel } from '../data';
import { RECIPES_FR } from '../recipes-fr';
import { useLang } from '../i18n';

const DIFFICULTY_FR: Record<string, string> = { Easy: 'Facile', Medium: 'Moyen', Hard: 'Difficile' };

// Product boxes on a sunlit table (composed from the packaging photos).
const HERO_IMAGE = '/images/hero/hero-table.webp';

interface HomePageProps {
  navigate: (path: string) => void;
}

// Retailer logos are loaded directly from /images/products.
// These files should be in the project's root images/products folder.
const RETAILER_LOGO_MAP: Record<string, string> = {
  'Freshco': '/images/products/Freshco.png',
  'Nation Fresh Foods': '/images/products/Nation Fresh Foods.png',
  'Nations Fresh Foods': '/images/products/Nation Fresh Foods.png',
  'T&T Supermarket': '/images/products/TT supermarket.png',
  'Adonis': '/images/products/adonis.png',
  'Food Basics': '/images/products/Food Basics.png',
  'Metro': '/images/products/metro.png',
  'Bulk Barn': '/images/products/Bulk Barn.png',
  'Costco': '/images/products/Costco.png',
  'Walmart': '/images/products/walmart.png',
  'Sobeys': '/images/products/sobeys.png',
  'Loblaws': '/images/products/loblaws.png',
  'Iqbal Foods': '/images/products/Iqbal Foods.png',
};

const RETAILER_NAMES = [
  'Freshco',
  'Iqbal Foods',
  'Nations Fresh Foods',
  'T&T Supermarket',
  'Adonis',
  'Food Basics',
  'Metro',
  'Bulk Barn',
  'Costco',
  'Walmart',
  'Sobeys',
  'Loblaws',
];

const FEATURED_IDS = ['1', '4', '5', '8', '11', '12'];

export default function HomePage({ navigate }: HomePageProps) {
  const featured = PRODUCTS.filter(p => FEATURED_IDS.includes(p.id));
  const recipes = RECIPES.slice(0, 4);
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen">
      {/* Hero — red & white, product boxes on a sunlit table */}
      <section className="relative pt-20 bg-white overflow-hidden">
        <div className="relative h-[820px] sm:h-[780px] lg:h-[570px]">
          {/* Table scene */}
          <img
            src={HERO_IMAGE}
            alt={t('Al-Shamas kebab, samosa and spring roll boxes on a table', 'Boîtes de kebabs, samosas et rouleaux impériaux Al-Shamas sur une table')}
            className="absolute left-0 right-0 bottom-14 h-[300px] sm:h-[360px] lg:top-6 lg:bottom-14 lg:left-[41%] lg:right-0 w-full lg:w-[59%] lg:h-auto object-contain object-center"
          />
          {/* White fade behind the text (top on mobile, left on desktop) */}
          <div className="absolute inset-0 lg:hidden bg-[linear-gradient(180deg,#fff_0%,#fff_56%,rgba(255,255,255,0)_62%)]" />
          
          {/* Red swooshes */}
          <svg className="absolute bottom-0 left-0 w-full h-28 pointer-events-none" viewBox="0 0 1440 112" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 40 C260 110 560 112 820 78 C1060 46 1260 54 1440 92 V112 H0 Z" fill="#C8102E" />
            <path d="M0 24 C260 96 560 98 820 64 C1060 32 1260 40 1440 78" fill="none" stroke="#C8102E" strokeWidth="4" opacity="0.35" />
          </svg>

          {/* Text */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start pt-20 sm:pt-16 lg:pt-[88px]">
            <div className="w-full lg:w-[40%] max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">
              <p className="inline-block bg-brand-red-pale text-brand-red text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                {t('Canada’s Halal Frozen Foods', 'Aliments halal surgelés du Canada')}
              </p>
              <h1 className="font-display font-black text-[#2b1410] leading-[1.02] tracking-tight text-[38px] sm:text-[54px] lg:text-[40px] xl:text-[48px] lg:whitespace-nowrap">
                {lang === 'fr' ? (
                  <>
                    Aliments <span className="text-brand-red">halal</span>
                    <br />
                    surgelés de qualité
                  </>
                ) : (
                  <>
                    Canada&apos;s Premium
                    <br />
                    <span className="text-brand-red">Halal</span> Frozen Foods
                  </>
                )}
              </h1>
              <p className={`font-script text-brand-red mt-4 leading-tight sm:whitespace-nowrap ${lang === 'fr' ? 'text-[19px] sm:text-[26px] lg:text-[19px] xl:text-[23px]' : 'text-[21px] sm:text-[32px] lg:text-[24px] xl:text-[29px]'}`}>
                {t('Fully Cooked • Heat & Eat • Hand Made', 'Entièrement cuit • Prêt à réchauffer • Fait à la main')}
              </p>
              <svg className="mx-auto lg:mx-0 mt-1 w-56 sm:w-72 h-4" viewBox="0 0 300 16" aria-hidden="true">
                <path d="M4 12 C80 2 200 2 296 8" fill="none" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <p className="mt-5 text-gray-700 text-base sm:text-lg leading-relaxed max-w-[520px] mx-auto lg:mx-0">
                {t(
                  'Proudly Canadian since 2013. High-quality halal kebabs, samosas, spring rolls and other ready-to-cook products — made with carefully selected ingredients and authentic recipes, and free from artificial colours.',
                  'Fièrement canadien depuis 2013. Des kebabs, samosas, rouleaux impériaux et autres produits prêts à cuire halal de grande qualité — préparés à partir d’ingrédients soigneusement sélectionnés et de recettes authentiques, sans colorants artificiels.'
                )}
              </p>
            </div>
          </div>

          {/* Halal badge */}
          <div className="absolute right-4 sm:right-8 bottom-6 sm:bottom-8 z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-brand-red text-white flex flex-col items-center justify-center shadow-lg border-2 border-white">
            <span className="text-3xl sm:text-4xl leading-none" lang="ar">حلال</span>
            <span className="mt-1 text-xs sm:text-sm font-extrabold tracking-widest">HALAL</span>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Award, label: t('Since 2013', 'Depuis 2013'), sub: t('Proudly Canadian', 'Fièrement canadien') },
            { icon: ShieldCheck, label: t('HMA Halal', 'Halal HMA'), sub: t('Certified', 'Certifié') },
            { icon: Palette, label: t('No Artificial Colours', 'Sans colorants artificiels'), sub: t('Carefully selected ingredients', 'Ingrédients soigneusement sélectionnés') },
            { icon: Clock, label: t('Heat & Eat', 'Prêt à réchauffer'), sub: t('Fully cooked kebabs', 'Kebabs entièrement cuits') },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red-pale flex items-center justify-center shrink-0">
                <Icon size={18} className="text-brand-red" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 leading-tight">{label}</div>
                <div className="text-xs text-gray-500 leading-tight">{sub}</div>
              </div>
            </div>
          ))}
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
            {[...RETAILER_NAMES, ...RETAILER_NAMES].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-sm min-w-[140px] border border-gray-100"
              >
                {RETAILER_LOGO_MAP[name] ? (
                  <img
                    src={RETAILER_LOGO_MAP[name]}
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
                'Our best-selling frozen favourites — made with halal ingredients and zero compromises.',
                'Nos favoris surgelés les plus vendus — préparés avec des ingrédients halal, sans compromis.'
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
      <section className="py-16 bg-[#d7ecdf] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c4e2cf] rounded-full opacity-60"></div>
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

      <NewsletterBanner />
    </div>
  );
}