import { ArrowLeft, ChefHat, Clock, Users } from 'lucide-react';
import { PackStores, packLabel } from '../components/PackCard';
import ZoomableImage from '../components/ZoomableImage';
import { PRODUCT_CATEGORIES, PRODUCTS, RECIPES, categoryLabel } from '../data';
import { useLang } from '../i18n';
import { RECIPES_FR } from '../recipes-fr';

interface RecipeDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

const DIFFICULTY_FR: Record<string, string> = { Easy: 'Facile', Medium: 'Moyen', Hard: 'Difficile' };

export default function RecipeDetailPage({ slug, navigate }: RecipeDetailPageProps) {
  const { lang, t } = useLang();
  const recipe = RECIPES.find(r => r.slug === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">{t('Recipe not found', 'Recette introuvable')}</h2>
          <button onClick={() => navigate('/products')} className="text-brand-orange hover:underline text-sm">
            {t('Back to Products', 'Retour aux produits')}
          </button>
        </div>
      </div>
    );
  }

  const fr = lang === 'fr' ? RECIPES_FR[recipe.slug] : undefined;
  const title = fr?.title ?? recipe.title;
  const description = fr?.description ?? recipe.description;
  const ingredients = fr?.ingredients ?? recipe.ingredients;
  const instructions = fr?.instructions ?? recipe.instructions;

  const product = PRODUCTS.find(p => p.id === recipe.productId);
  const category = product && PRODUCT_CATEGORIES.find(c => c.name === product.category);

  return (
    <div className="min-h-screen pt-24">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate(product ? `/products/${product.slug}` : '/products')}
          className="flex items-center gap-2 text-gray-400 hover:text-brand-orange text-sm transition-colors"
        >
          <ArrowLeft size={14} />
          {product
            ? t(`Back to ${product.name.en}`, `Retour à : ${product.name.fr}`)
            : t('Back to Products', 'Retour aux produits')}
        </button>
      </div>

      {/* Hero image */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl">
            <ZoomableImage src={recipe.image} alt={title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {recipe.time && (
              <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <Clock size={14} className="text-brand-orange" />
                {recipe.time}
              </span>
            )}
            {recipe.servings && (
              <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <Users size={14} className="text-brand-green" />
                {t(`${recipe.servings} servings`, `${recipe.servings} portions`)}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <ChefHat size={14} className="text-brand-red" />
              {lang === 'fr' ? DIFFICULTY_FR[recipe.difficulty] ?? recipe.difficulty : recipe.difficulty}
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Three-column layout */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Ingredients */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">{t('Ingredients', 'Ingrédients')}</h3>
              <ul className="space-y-2">
                {ingredients.map((ing, i) => (
                  <li key={`${ing}-${i}`} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">{t('Instructions', 'Préparation')}</h2>
              <ol className="space-y-4">
                {instructions.map((step, i) => (
                  <li key={`${step}-${i}`} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Product used + its pack sizes */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                {t('Al-Shamas Product Used', 'Produit Al-Shamas utilisé')}
              </h2>

              {product ? (
                <div>
                  <div className="rounded-2xl overflow-hidden mb-4 bg-gray-50 flex items-center justify-center">
                    <ZoomableImage src={product.image} alt={product.name[lang]} className="w-full h-44 object-contain" />
                  </div>
                  <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-1">
                    {categoryLabel(category, lang)}
                  </p>
                  <h3 className="font-serif font-semibold text-gray-900 mb-1">{product.name[lang]}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{product.description[lang]}</p>

                  {product.packs.length > 0 && (
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        {t('Available pack sizes', 'Formats offerts')}
                      </p>
                      <ul className="space-y-2">
                        {product.packs.map(pack => (
                          <li key={pack.key} className="flex items-center gap-3 rounded-xl border border-gray-100 p-2">
                            <ZoomableImage
                              src={pack.image}
                              alt={`${product.name[lang]} — ${packLabel(pack, lang)}`}
                              loading="lazy"
                              className="w-14 h-14 rounded-lg object-contain bg-gray-50 shrink-0"
                            />
                            <div className="min-w-0 text-left">
                              <p className="text-sm font-semibold text-gray-800">{packLabel(pack, lang)}</p>
                              <p className="text-xs text-gray-500">{pack.detail[lang]}</p>
                              {pack.stores?.length ? (
                                <div className="[&>div]:items-start [&>div]:mt-1">
                                  <PackStores pack={pack} />
                                </div>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => navigate(`/products/${product.slug}`)}
                    className="mt-5 w-full py-2.5 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-light transition-colors"
                  >
                    {t('View Product', 'Voir le produit')}
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-400">
                  {t('Product information unavailable.', 'Renseignements sur le produit non disponibles.')}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
