import { ArrowRight, Award, Palette, ShieldCheck } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { PRODUCT_CATEGORIES, PRODUCTS, categoryLabel } from '../data';
import { useLang } from '../i18n';
import HomeHeroSlider from '../components/HomeHeroSlider';
import RecipeIdeas from '../components/RecipeIdeas';



interface HomePageProps {
  navigate: (path: string) => void;
}

// Chicken Charcoal Kebab, Chicken Samosa, Beef Chapli Kebab, Beef Charcoal Kebab
const FEATURED_IDS = ['5', '26', '8', '4'];

export default function HomePage({ navigate }: HomePageProps) {
  const featured = FEATURED_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter((p): p is (typeof PRODUCTS)[number] => !!p);
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen">
      <HomeHeroSlider navigate={navigate} />

      {/* About block */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              {t('We are a Canadian success story…', 'Nous sommes une réussite canadienne…')}
            </h2>
            <div className="space-y-4 text-[#333333] leading-relaxed">
              <p>
                {t(
                  'Since 2013, Al-Shamas has been bringing delicious, high-quality halal frozen foods to Canadian families. Inspired by traditional home-style recipes and made with carefully selected ingredients, our products deliver authentic flavour and convenience to everyday meals.',
                  'Depuis 2013, Al-Shamas offre aux familles canadiennes de délicieux aliments halal surgelés de grande qualité. Inspirés de recettes traditionnelles maison et préparés avec des ingrédients soigneusement sélectionnés, nos produits apportent saveur authentique et commodité aux repas de tous les jours.',
                )}
              </p>
              <p>
                {t(
                  'Halal certified by the Halal Monitoring Authority (HMA), we’re committed to bringing great taste and quality to families across Canada.',
                  'Certifiés halal par la Halal Monitoring Authority (HMA), nous nous engageons à offrir goût et qualité aux familles de partout au Canada.',
                )}
              </p>
              <p className="font-bold italic">{t('And our story is just getting started!', 'Et notre histoire ne fait que commencer!')}</p>
            </div>
            <button
              onClick={() => navigate('/about-us')}
              className="mt-7 inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange-deep text-white font-semibold rounded-full hover:brightness-95 transition-all text-sm"
            >
              {t('More About Us', 'En savoir plus sur nous')} <ArrowRight size={15} />
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src="/images/about/family-table.jpg"
              alt={t('A family enjoying Al-Shamas kebabs and samosas', 'Une famille qui savoure des kebabs et des samosas Al-Shamas')}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:justify-items-center">
          {[
            { icon: Award, label: t('Since 2013', 'Depuis 2013'), sub: t('Proudly Canadian', 'Fièrement canadien') },
            { icon: ShieldCheck, label: t('HMA Halal', 'Halal HMA'), sub: t('Certified', 'Certifié') },
            { icon: Palette, label: t('No Artificial Colours', 'Sans colorants artificiels'), sub: t('Carefully selected ingredients', 'Ingrédients soigneusement sélectionnés') },
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

      {/* Featured Products */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 left-0 w-72 h-72 bg-brand-orange-pale rounded-full -translate-x-1/2 opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-48 h-48 bg-brand-red-pale rounded-full opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-orange-pale text-brand-orange text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              {t('Top Picks', 'Nos favoris')}
            </div>

            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-3">
              {t('Featured Products', 'Produits vedettes')}
            </h2>

            <p className="text-gray-500 max-w-md mx-auto text-sm">
              {t(
                'Our best-selling frozen favourites — made with halal ingredients and zero compromises.',
                'Nos favoris surgelés les plus vendus — préparés avec des ingrédients halal, sans compromis.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
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

                  <h3 className="font-heading font-bold text-gray-900 text-sm leading-tight mb-1">
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

      {/* Our Halal Commitment (same text as the Certificates page) */}
      <section className="py-16 bg-brand-blue-soft/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-blue-deep text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              <ShieldCheck size={14} /> {t('HMA Halal Certified', 'Certifié halal HMA')}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">{t('Our Halal Commitment', 'Notre engagement halal')}</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-4 border-brand-blue-deep">
            <p className="text-gray-600 leading-relaxed mb-5">
              {t(
                'Since our founding in 2013, halal integrity has been non-negotiable. Every piece of meat we use comes from certified halal suppliers. Our facility is structured to prevent any cross-contamination between halal and non-halal products at every stage of production.',
                'Depuis notre fondation en 2013, l’intégrité halal est non négociable. Toute la viande que nous utilisons provient de fournisseurs halal certifiés. Notre installation est organisée pour prévenir toute contamination croisée entre produits halal et non halal, à chaque étape de la production.'
              )}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t(
                'We maintain full traceability from farm to freezer — knowing exactly where every ingredient comes from and verifying halal status at every step. Our halal certification is renewed annually, audited by third-party accrediting bodies, and displayed on every product we sell.',
                'Nous assurons une traçabilité complète, de la ferme au congélateur : nous savons exactement d’où provient chaque ingrédient et vérifions son statut halal à chaque étape. Notre certification halal est renouvelée chaque année, vérifiée par des organismes d’accréditation tiers et affichée sur chacun de nos produits.'
              )}
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate('/halal')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue-deep text-white font-semibold rounded-full hover:brightness-110 transition text-sm"
              >
                {t('View Our Certificates', 'Voir nos certificats')} <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <RecipeIdeas navigate={navigate} />

      {/* Brand Line */}
      <section className="py-16 bg-brand-orange-soft relative overflow-hidden">

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

          <p className="text-gray-800 text-sm leading-relaxed">
            {t(
              'Al-Shamas proves that frozen can taste just as fresh. Inspired by home-style recipes passed down through generations, every bite brings authentic flavour to your table.',
              'Avec Al-Shamas, le surgelé peut être aussi bon que le frais. Inspirées de recettes maison transmises de génération en génération, nos créations apportent une touche authentique à votre table.'
            )}
          </p>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}