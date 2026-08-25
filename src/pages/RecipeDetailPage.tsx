import { ArrowLeft, ChefHat, Clock, Users } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { PRODUCTS, RECIPES } from '../data';

interface RecipeDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export default function RecipeDetailPage({
  slug,
  navigate,
}: RecipeDetailPageProps) {
  const recipe = RECIPES.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">
            Recipe not found
          </h2>

          <button
            onClick={() => navigate('/recipes')}
            className="text-brand-orange hover:underline text-sm"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  const product = PRODUCTS.find((p) => p.id === recipe.productId);

  return (
    <div className="min-h-screen pt-24">

      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate('/recipes')}
          className="flex items-center gap-2 text-gray-400 hover:text-brand-orange text-sm transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Recipes
        </button>
      </div>

 {/* Hero image */}
<section className="relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
    </div>
  </div>
</section>

      {/* Meta */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex flex-wrap justify-center gap-4 mb-4">

            <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Clock size={14} className="text-brand-orange" />
              {recipe.time}
            </span>

            <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Users size={14} className="text-brand-green" />
              {recipe.servings} servings
            </span>

            <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <ChefHat size={14} className="text-brand-red" />
              {recipe.difficulty}
            </span>

          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            {recipe.description}
          </p>

        </div>
      </section>

      {/* Three-column layout */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Nutrition */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                Nutrition per Serving
              </h2>

              <div className="space-y-3">
                {[
                  {
                    label: 'Calories',
                    value: `${recipe.nutrition.calories} kcal`,
                  },
                  {
                    label: 'Protein',
                    value: recipe.nutrition.protein,
                  },
                  {
                    label: 'Total Fat',
                    value: recipe.nutrition.fat,
                  },
                  {
                    label: 'Carbohydrates',
                    value: recipe.nutrition.carbs,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-sm text-gray-500">
                      {item.label}
                    </span>

                    <span className="font-semibold text-gray-900 text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Ingredients */}
              <h3 className="font-serif text-lg font-semibold text-gray-900 mt-6 mb-3">
                Ingredients
              </h3>

              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li
                    key={`${ing}-${i}`}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Instructions */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                Instructions
              </h2>

              <ol className="space-y-4">

                {recipe.instructions.map((step, i) => (
                  <li
                    key={`${step}-${i}`}
                    className="flex gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}

              </ol>

            </div>

            {/* Featured product */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                Al Shamas Product Used
              </h2>

              {product ? (
                <div>

                  <div className="rounded-2xl overflow-hidden mb-4 bg-white flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-44 object-contain"
                    />
                  </div>

                  <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-1">
                    {product.category}
                  </p>

                  <h3 className="font-serif font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-400 mb-3">
                    {product.weight}
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/products/${product.slug}`)
                    }
                    className="mt-4 w-full py-2.5 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-light transition-colors"
                  >
                    View Product
                  </button>

                </div>
              ) : (
                <p className="text-sm text-gray-400">
                  Product information unavailable.
                </p>
              )}

            </div>

          </div>
        </div>
      </section>

      <NewsletterBanner />

    </div>
  );
}