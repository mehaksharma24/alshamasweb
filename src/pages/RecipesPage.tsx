import { Clock, Search, SlidersHorizontal, Users, X } from 'lucide-react';
import { useState } from 'react';
import NewsletterBanner from '../components/NewsletterBanner';
import { RECIPES } from '../data';

interface RecipesPageProps {
  navigate: (path: string) => void;
}

const DIFFICULTY_OPTIONS = ['All', 'Easy', 'Medium', 'Hard'];

export default function RecipesPage({ navigate }: RecipesPageProps) {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [sort, setSort] = useState('default');

  const filtered = RECIPES
    .filter(r => {
      const matchDiff = difficulty === 'All' || r.difficulty === difficulty;
      const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.product.toLowerCase().includes(search.toLowerCase());
      return matchDiff && matchSearch;
    })
    .sort((a, b) => {
      if (sort === 'title-az') return a.title.localeCompare(b.title);
      if (sort === 'time') return parseInt(a.time) - parseInt(b.time);
      return 0;
    });

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-3">Recipes</h1>
          <p className="text-gray-500 text-base">
            Delicious ways to enjoy Al Shamas products at home — quick, creative, and always satisfying.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gray-50 py-5 sticky top-24 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-wrap">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search recipes..."
                className="pl-9 pr-8 py-2.5 text-sm rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-brand-orange w-56"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <X size={13} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {DIFFICULTY_OPTIONS.map(d => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                    difficulty === d
                      ? 'bg-brand-orange text-white shadow-sm'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <SlidersHorizontal size={15} className="text-gray-400" />
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="text-xs bg-white border border-gray-200 rounded-xl px-3 py-2 focus:outline-none text-gray-600"
              >
                <option value="default">Sort: Default</option>
                <option value="title-az">Title A–Z</option>
                <option value="time">Quickest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 font-serif text-xl">No recipes found.</p>
              <button onClick={() => { setSearch(''); setDifficulty('All'); }} className="mt-4 text-brand-orange text-sm hover:underline">Clear filters</button>
            </div>
          ) : (
            <>
              <p className="text-gray-400 text-xs mb-6">{filtered.length} recipe{filtered.length !== 1 ? 's' : ''}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(recipe => (
                  <button
                    key={recipe.id}
                    onClick={() => navigate(`/recipes/${recipe.slug}`)}
                    className="group text-left bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-orange/30 transition-all duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img src={recipe.image} alt={recipe.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-brand-orange text-xs font-semibold px-2 py-1 rounded-full">{recipe.difficulty}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={12} />{recipe.time}</span>
                        <span className="flex items-center gap-1 text-xs text-gray-400"><Users size={12} />{recipe.servings} servings</span>
                      </div>
                      <h3 className="font-serif font-semibold text-gray-900 mb-1">{recipe.title}</h3>
                      <p className="text-xs text-brand-green font-medium">Uses: {recipe.product}</p>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2">{recipe.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
