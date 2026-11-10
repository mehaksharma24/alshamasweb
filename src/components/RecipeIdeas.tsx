import { ArrowRight } from 'lucide-react';
import { PRODUCTS, RECIPES } from '../data';
import { RECIPES_FR } from '../recipes-fr';
import { useLang } from '../i18n';

const DIFFICULTY_FR: Record<string, string> = { Easy: 'Facile', Medium: 'Moyen', Hard: 'Difficile' };

/** "Recipe Ideas" block (4 recipes + View More Recipes) — used on Home and Products. */
export default function RecipeIdeas({ navigate }: { navigate: (path: string) => void }) {
  const { lang, t } = useLang();
  const recipes = RECIPES.slice(0, 4);
  return (
  <section className="py-20 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-12">
        <div className="inline-block bg-brand-red-pale text-brand-red text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
          {t('Inspiration', 'Inspiration')}
        </div>

        <h2 className="font-heading text-4xl font-bold text-gray-900 mb-3">
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

              <h3 className="font-heading font-bold text-gray-900 text-sm leading-tight">
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

      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/recipes')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange-deep text-white font-semibold rounded-full hover:brightness-95 transition-all text-sm"
        >
          {t('View More Recipes', 'Voir plus de recettes')} <ArrowRight size={15} />
        </button>
      </div>
    </div>
  </section>
  );
}
