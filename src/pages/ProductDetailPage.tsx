import { ArrowLeft, ArrowRight, Leaf, MapPin, Package, Scale, Store, Tag } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import NutritionLabel from '../components/NutritionLabel';
import ZoomableImage from '../components/ZoomableImage';
import {
  PRODUCT_CATEGORIES,
  PRODUCTS,
  RECIPES,
  type StoreAvailability,
} from '../data';

const STORE_LOGOS: Partial<Record<StoreAvailability['store'], string>> = {
  'Costco Canada': '/images/products/Costco.png',
};

interface ProductDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export default function ProductDetailPage({
  slug,
  navigate,
}: ProductDetailPageProps) {
  const idx = PRODUCTS.findIndex(p => p.slug === slug);
  const product = PRODUCTS[idx];

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">
            Product not found
          </h2>

          <button
            onClick={() => navigate('/products')}
            className="text-brand-red hover:underline text-sm"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const category = PRODUCT_CATEGORIES.find(c => c.name === product.category);
  const recipes = RECIPES.filter(r => r.productId === product.id);
  // Products without listed stores still get the store locator.
  const availability: StoreAvailability[] = product.availability ?? [
    { store: 'Retail Stores', packs: [] },
  ];
  const prev = PRODUCTS[idx - 1];
  const next = PRODUCTS[idx + 1];

  // Related: same category, different product, up to 4
  const related = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const others =
    related.length < 4
      ? [
          ...related,
          ...PRODUCTS.filter(
            p => p.category !== product.category && p.id !== product.id
          ).slice(0, 4 - related.length),
        ]
      : related;

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <button
            onClick={() => navigate('/products')}
            className="hover:text-brand-red transition-colors"
          >
            Products
          </button>

          <span>/</span>

          {category ? (
            <button
              onClick={() => navigate(`/products/category/${category.slug}`)}
              className="text-gray-600 hover:text-brand-red transition-colors"
            >
              {product.category}
            </button>
          ) : (
            <span className="text-gray-600">
              {product.category}
            </span>
          )}

          <span>/</span>

          <span className="text-gray-800">
            {product.name}
          </span>
        </div>
      </div>

      {/* Hero image */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
            <ZoomableImage
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain object-center"
            />

            {product.tags.includes('Bestseller') && (
              <div className="absolute top-4 left-4 bg-brand-red text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                Bestseller
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Scale size={14} className="text-brand-orange" />
              {product.weight}
            </span>

            {product.pieces && (
              <span className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <Package size={14} className="text-brand-green" />
                {product.pieces}
              </span>
            )}

            {product.tags.map(tag => (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100"
              >
                <Tag size={14} className="text-brand-red" />
                {tag}
              </span>
            ))}
          </div>

          <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-2">
            {product.category}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            {product.description}
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

            {/* Nutrition */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                Nutrition
              </h2>

                {product.nutritionFacts ? (
                  <NutritionLabel facts={product.nutritionFacts} />
                ) : (
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gray-800 text-white px-4 py-3">
                    <h3 className="font-bold text-sm">
                      Nutrition Facts
                    </h3>

                    <p className="text-gray-300 text-xs">
                      Serving size: {product.nutrition.servingSize}
                    </p>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {[
                      {
                        label: 'Calories',
                        value: product.nutrition.calories,
                      },
                      {
                        label: 'Protein',
                        value: product.nutrition.protein,
                      },
                      {
                        label: 'Total Fat',
                        value: product.nutrition.fat,
                      },
                      {
                        label: 'Total Carbohydrate',
                        value: product.nutrition.carbs,
                      },
                      {
                        label: 'Sodium',
                        value: product.nutrition.sodium,
                      },
                    ].map(row => (
                      <div
                        key={row.label}
                        className="flex justify-between px-4 py-2.5 text-sm"
                      >
                        <span className="text-gray-600">
                          {row.label}
                        </span>

                        <span className="font-semibold text-gray-900">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                )}
            </div>

            <div className="space-y-6">
              {/* Ingredients */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-gray-900 mb-4">
                  <Leaf size={16} className="text-brand-green" />
                  Ingredients
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.ingredients}
                </p>
              </div>

              {/* Recipe suggestions for this product */}
              {recipes.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                    Recipe Suggestions
                  </h2>

                  <div className="space-y-3">
                    {recipes.map(recipe => (
                      <button
                        key={recipe.id}
                        onClick={() => navigate(`/recipes/${recipe.slug}`)}
                        className="group w-full flex items-center gap-3 text-left"
                      >
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-16 h-16 rounded-xl object-cover shrink-0"
                        />

                        <span className="text-sm font-medium text-gray-700 group-hover:text-brand-orange transition-colors">
                          {recipe.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Where to buy */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                  Where to Buy
                </h2>

                <div className="space-y-4">
                  {availability.map(({ store, packs }) => (
                    <div key={store} className="flex items-center gap-4">
                      <div className="w-28 h-12 shrink-0 rounded-xl border border-gray-100 bg-white flex items-center justify-center px-2">
                        {STORE_LOGOS[store] ? (
                          <img
                            src={STORE_LOGOS[store]}
                            alt={store}
                            className="max-w-full max-h-full object-contain"
                          />
                        ) : (
                          <Store size={22} className="text-brand-red" />
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {store}
                        </p>

                        {packs.length > 0 && (
                          <p className="text-xs text-gray-500">
                            {packs.join(' · ')}
                          </p>
                        )}
                      </div>

                      {store === 'Retail Stores' && (
                        <button
                          onClick={() => navigate('/locations')}
                          className="flex items-center gap-1.5 shrink-0 px-3 py-2 bg-brand-red text-white text-xs font-semibold rounded-xl hover:bg-brand-red-light transition-colors"
                        >
                          <MapPin size={13} />
                          Find a Store
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related products */}
      {others.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              You May Also Like
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {others.map(p => (
                <button
                  key={p.id}
                  onClick={() =>
                    navigate(`/products/${p.slug}`)
                  }
                  className="group text-left bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand-red/20 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3">
                    <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-0.5">
                      {p.category}
                    </p>

                    <p className="font-serif font-semibold text-gray-900 text-xs leading-tight">
                      {p.name}
                    </p>

                    <p className="text-xs text-gray-400 mt-0.5">
                      {p.weight}
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
            <button
              onClick={() =>
                navigate(`/products/${prev.slug}`)
              }
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all">
                <ArrowLeft size={15} />
              </div>

              <div className="text-left">
                <div className="text-xs text-gray-400">
                  Previous
                </div>

                <div className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors">
                  {prev.name}
                </div>
              </div>
            </button>
          ) : (
            <div />
          )}

          {next ? (
            <button
              onClick={() =>
                navigate(`/products/${next.slug}`)
              }
              className="flex items-center gap-3 group text-right"
            >
              <div className="text-right">
                <div className="text-xs text-gray-400">
                  Next
                </div>

                <div className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors">
                  {next.name}
                </div>
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