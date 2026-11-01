import { ArrowLeft, ArrowRight, Flame, Leaf, MapPin, Package, Tag } from 'lucide-react';
import CatalogueText from '../components/CatalogueText';
import NewsletterBanner from '../components/NewsletterBanner';
import NutritionLabel from '../components/NutritionLabel';
import PackCard, { tagLabel } from '../components/PackCard';
import ZoomableImage from '../components/ZoomableImage';
import { PRODUCT_CATEGORIES, PRODUCTS, RECIPES, categoryLabel, findProduct } from '../data';
import { useLang } from '../i18n';
import { RECIPES_FR } from '../recipes-fr';

interface ProductDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export default function ProductDetailPage({ slug, navigate }: ProductDetailPageProps) {
  const { lang, t } = useLang();
  const product = findProduct(slug);

  if (!product) {
    return (
      <div className="min-h-screen pt-40 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">{t('Product not found', 'Produit introuvable')}</h2>
          <button onClick={() => navigate('/products')} className="text-brand-red hover:underline text-sm">
            {t('Back to Products', 'Retour aux produits')}
          </button>
        </div>
      </div>
    );
  }

  const idx = PRODUCTS.indexOf(product);
  const name = product.name[lang];
  const category = PRODUCT_CATEGORIES.find(c => c.name === product.category);
  const recipes = RECIPES.filter(r => r.productId === product.id);
  const prev = PRODUCTS[idx - 1];
  const next = PRODUCTS[idx + 1];
  const ingredients = product.ingredients[lang];
  const instructions = product.instructions[lang];

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const others =
    related.length < 4
      ? [...related, ...PRODUCTS.filter(p => p.category !== product.category && p.id !== product.id).slice(0, 4 - related.length)]
      : related;

  return (
    <div className="min-h-screen pt-40">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <button onClick={() => navigate('/products')} className="hover:text-brand-red transition-colors">
            {t('Products', 'Produits')}
          </button>
          <span>/</span>
          {category && (
            <>
              <button
                onClick={() => navigate(`/products/category/${category.slug}`)}
                className="text-gray-600 hover:text-brand-red transition-colors"
              >
                {categoryLabel(category, lang)}
              </button>
              <span>/</span>
            </>
          )}
          <span className="text-gray-800">{name}</span>
        </div>
      </div>

      {/* Main image */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
            <ZoomableImage src={product.image} alt={name} className="w-full h-full object-contain object-center" />
            {product.tags.includes('Bestseller') && (
              <div className="absolute top-4 left-4 bg-brand-red text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                {tagLabel('Bestseller', lang)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Name & description */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="flex items-center gap-1.5 text-sm text-brand-green bg-brand-green-pale px-3 py-1.5 rounded-full font-medium">
              <Flame size={14} />
              {product.tagline[lang]}
            </span>
            {product.tags
              .filter(tag => tag !== 'Bestseller')
              .map(tag => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100"
                >
                  <Tag size={14} className="text-brand-red" />
                  {tagLabel(tag, lang)}
                </span>
              ))}
          </div>

          <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-2">
            {categoryLabel(category, lang)}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{name}</h1>
          {product.subtitle && <p className="text-gray-500 italic mb-4">{product.subtitle[lang]}</p>}
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto mt-3">{product.description[lang]}</p>
        </div>
      </section>

      {/* Pack sizes */}
      <section className="pb-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center gap-2 font-serif text-2xl font-semibold text-gray-900 mb-6">
            <Package size={20} className="text-brand-orange" />
            {t('Pack Sizes', 'Formats offerts')}
          </h2>
          {product.packs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.packs.map(pack => (
                <PackCard key={pack.key} product={product} pack={pack} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-gray-400">
              {t('Pack sizes coming soon.', 'Formats à venir.')}
            </p>
          )}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/locations')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-full hover:bg-brand-red-light transition-colors"
            >
              <MapPin size={14} />
              {t('Find a Store', 'Trouver un magasin')}
            </button>
          </div>
        </div>
      </section>

      {/* Nutrition + ingredients */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Nutrition */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                {t('Nutrition', 'Valeur nutritive')}
              </h2>
              {product.nutritionFacts ? (
                <NutritionLabel facts={product.nutritionFacts} />
              ) : (
                <p className="text-sm text-gray-400">
                  {t('Nutrition information coming soon.', 'Valeur nutritive à venir.')}
                </p>
              )}
            </div>

            <div className="space-y-6">
              {/* Ingredients */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-gray-900 mb-4">
                  <Leaf size={16} className="text-brand-green" />
                  {t('Ingredients', 'Ingrédients')}
                </h2>
                {ingredients.length ? (
                  <CatalogueText paras={ingredients} lang={lang} />
                ) : (
                  <p className="text-sm text-gray-400">{t('Ingredients coming soon.', 'Ingrédients à venir.')}</p>
                )}
              </div>

              {/* Heating / cooking / storage */}
              {instructions.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                    {t('Preparation & Storage', 'Préparation et conservation')}
                  </h2>
                  <CatalogueText paras={instructions} lang={lang} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recipes */}
      {recipes.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6 text-center">
              {t('Recipe Ideas', 'Idées recettes')}
            </h2>
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
                      alt={recipe.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-gray-900 text-sm leading-tight group-hover:text-brand-orange transition-colors">
                      {lang === 'fr' ? RECIPES_FR[recipe.slug]?.title ?? recipe.title : recipe.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      {others.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              {t('You May Also Like', 'Vous aimerez aussi')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {others.map(p => (
                <button
                  key={p.id}
                  onClick={() => navigate(`/products/${p.slug}`)}
                  className="group text-left bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand-red/20 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={p.image}
                      alt={p.name[lang]}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-0.5">
                      {categoryLabel(PRODUCT_CATEGORIES.find(c => c.name === p.category), lang)}
                    </p>
                    <p className="font-serif font-semibold text-gray-900 text-xs leading-tight">{p.name[lang]}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {p.packs.length
                        ? t(`${p.packs.length} pack size${p.packs.length > 1 ? 's' : ''}`, `${p.packs.length} format${p.packs.length > 1 ? 's' : ''}`)
                        : t('Pack sizes coming soon', 'Formats à venir')}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {prev ? (
            <button onClick={() => navigate(`/products/${prev.slug}`)} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all">
                <ArrowLeft size={15} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">{t('Previous', 'Précédent')}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors">{prev.name[lang]}</div>
              </div>
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button onClick={() => navigate(`/products/${next.slug}`)} className="flex items-center gap-3 group text-right">
              <div className="text-right">
                <div className="text-xs text-gray-400">{t('Next', 'Suivant')}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors">{next.name[lang]}</div>
              </div>
              <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all">
                <ArrowRight size={15} />
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
