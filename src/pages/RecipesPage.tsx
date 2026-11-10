import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { PRODUCTS, RECIPES } from '../data';
import { useLang } from '../i18n';
import { RECIPES_FR, RECIPE_TAGS_FR } from '../recipes-fr';

const DIFFICULTY_FR: Record<string, string> = { Easy: 'Facile', Medium: 'Moyen', Hard: 'Difficile' };
const FILTERS = ['All', 'Wraps', 'Burgers', 'Rice', 'Curries', 'Snacks', 'Pizza'];

export default function RecipesPage({ navigate }: { navigate: (path: string) => void }) {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? RECIPES : RECIPES.filter(r => r.tags.includes(filter));
  const tag = (x: string) => (x === 'All' ? t('All', 'Toutes') : lang === 'fr' ? RECIPE_TAGS_FR[x] ?? x : x);

  return (
    <div className="min-h-screen pt-24">
      <PageBanner
        script={t('Inspiration', 'Inspiration')}
        title={t('Recipes', 'Recettes')}
        sub={t('Creative ways to use Al-Shamas products at home.', 'Des façons créatives d’utiliser les produits Al-Shamas à la maison.')}
      />

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  filter === f
                    ? 'bg-brand-orange-deep border-brand-orange-deep text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-brand-orange-deep hover:text-brand-orange-deep'
                }`}
              >
                {tag(f)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map(recipe => {
              const title = lang === 'fr' ? RECIPES_FR[recipe.slug]?.title ?? recipe.title : recipe.title;
              return (
                <button
                  key={recipe.id}
                  onClick={() => navigate(`/recipes/${recipe.slug}`)}
                  className="group text-left bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand-orange-deep/40 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-xs">
                      {recipe.time && (
                        <>
                          <span className="text-brand-orange-deep font-semibold">{recipe.time}</span>
                          <span className="text-gray-300">·</span>
                        </>
                      )}
                      <span className="text-gray-400">
                        {lang === 'fr' ? DIFFICULTY_FR[recipe.difficulty] ?? recipe.difficulty : recipe.difficulty}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-gray-900 text-lg leading-tight">{title}</h2>
                    <p className="text-xs text-gray-400 mt-1">
                      {t('Uses:', 'Produit :')} {PRODUCTS.find(p => p.id === recipe.productId)?.name[lang] ?? recipe.product}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
