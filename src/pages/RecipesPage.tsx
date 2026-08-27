import {
  Clock,
  Search,
  SlidersHorizontal,
  Users,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import NewsletterBanner from '../components/NewsletterBanner';
import { RECIPES } from '../data';

interface RecipesPageProps {
  navigate: (path: string) => void;
}

const DIFFICULTY_OPTIONS = ['All', 'Easy', 'Medium', 'Hard'];

export default function RecipesPage({
  navigate,
}: RecipesPageProps) {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [sort, setSort] = useState('default');

  const filtered = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return [...RECIPES]
      .filter((recipe) => {
        const matchesDifficulty =
          difficulty === 'All' ||
          recipe.difficulty === difficulty;

        const matchesSearch =
          searchTerm === '' ||
          recipe.title.toLowerCase().includes(searchTerm) ||
          recipe.product.toLowerCase().includes(searchTerm) ||
          recipe.description.toLowerCase().includes(searchTerm) ||
          recipe.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm),
          );

        return matchesDifficulty && matchesSearch;
      })
      .sort((a, b) => {
        if (sort === 'title-az') {
          return a.title.localeCompare(b.title);
        }

        if (sort === 'time') {
          return parseInt(a.time, 10) - parseInt(b.time, 10);
        }

        return 0;
      });
  }, [search, difficulty, sort]);

  const clearFilters = () => {
    setSearch('');
    setDifficulty('All');
    setSort('default');
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange-pale opacity-40" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-brand-red-pale opacity-30" />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-3 font-serif text-5xl font-bold text-gray-900">
            Recipes
          </h1>

          <p className="text-base text-gray-500">
            Discover six delicious ways to enjoy Al Shamas
            products at home—quick, creative, and always
            satisfying.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-24 z-30 border-b border-gray-100 bg-gray-50 py-5 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col flex-wrap items-start gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search recipes..."
                aria-label="Search recipes"
                className="w-full rounded-2xl border border-gray-200 bg-white py-2.5 pl-9 pr-8 text-sm focus:border-brand-orange focus:outline-none sm:w-56"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-brand-orange"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Difficulty */}
            <div className="flex flex-wrap gap-2">
              {DIFFICULTY_OPTIONS.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setDifficulty(option)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    difficulty === option
                      ? 'bg-brand-orange text-white shadow-sm'
                      : 'border border-gray-200 bg-white text-gray-600 hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <SlidersHorizontal
                size={15}
                className="text-gray-400"
              />

              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value)
                }
                aria-label="Sort recipes"
                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 focus:border-brand-orange focus:outline-none"
              >
                <option value="default">Sort: Default</option>
                <option value="title-az">Title A–Z</option>
                <option value="time">Quickest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-xl text-gray-400">
                No recipes found.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 text-sm text-brand-orange hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-xs text-gray-400">
                {filtered.length}{' '}
                {filtered.length === 1 ? 'recipe' : 'recipes'}
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((recipe) => (
                  <button
                    type="button"
                    key={recipe.id}
                    onClick={() =>
                      navigate(`/recipes/${recipe.slug}`)
                    }
                    className="group overflow-hidden rounded-3xl border border-gray-100 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange/30 hover:shadow-2xl"
                  >
                    {/* Recipe Image */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-orange shadow-sm backdrop-blur-sm">
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Recipe Information */}
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock size={12} />
                          {recipe.time}
                        </span>

                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Users size={12} />
                          {recipe.servings} servings
                        </span>
                      </div>

                      <h3 className="mb-1 font-serif text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand-orange">
                        {recipe.title}
                      </h3>

                      <p className="text-xs font-medium text-brand-green">
                        Uses: {recipe.product}
                      </p>

                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-400">
                        {recipe.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {recipe.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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