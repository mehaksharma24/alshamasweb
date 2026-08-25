import { ArrowLeft, ArrowRight, Leaf } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { PRODUCTS } from '../data';

interface ProductDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export default function ProductDetailPage({ slug, navigate }: ProductDetailPageProps) {
  const idx = PRODUCTS.findIndex(p => p.slug === slug);
  const product = PRODUCTS[idx];

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">Product not found</h2>
          <button onClick={() => navigate('/products')} className="text-brand-red hover:underline text-sm">Back to Products</button>
        </div>
      </div>
    );
  }

  const prev = PRODUCTS[idx - 1];
  const next = PRODUCTS[idx + 1];

  // Related: same category, different product, up to 4
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const others = related.length < 4
    ? [...related, ...PRODUCTS.filter(p => p.category !== product.category && p.id !== product.id).slice(0, 4 - related.length)]
    : related;

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <button onClick={() => navigate('/products')} className="hover:text-brand-red transition-colors">Products</button>
          <span>/</span>
          <span className="text-gray-600">{product.category}</span>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>
      </div>

      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange-pale rounded-full translate-x-1/3 -translate-y-1/3 opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-red-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>
              {product.tags.includes('Bestseller') && (
                <div className="absolute top-4 left-4 bg-brand-red text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                  Bestseller
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-2">{product.category}</p>
              <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-400 text-sm mb-4">{product.weight}{product.pieces ? ` · ${product.pieces}` : ''}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {product.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500">{tag}</span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              {/* Ingredients */}
              <div className="bg-brand-green-pale rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf size={14} className="text-brand-green" />
                  <h3 className="font-semibold text-gray-800 text-sm">Ingredients</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{product.ingredients}</p>
              </div>

              {/* Nutrition */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-3">
                  <h3 className="font-bold text-sm">Nutrition Facts</h3>
                  <p className="text-gray-300 text-xs">Serving size: {product.nutrition.servingSize}</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { label: 'Calories', value: product.nutrition.calories },
                    { label: 'Protein', value: product.nutrition.protein },
                    { label: 'Total Fat', value: product.nutrition.fat },
                    { label: 'Total Carbohydrate', value: product.nutrition.carbs },
                    { label: 'Sodium', value: product.nutrition.sodium },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between px-4 py-2.5 text-sm">
                      <span className="text-gray-600">{row.label}</span>
                      <span className="font-semibold text-gray-900">{row.value}</span>
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
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {others.map(p => (
                <button
                  key={p.id}
                  onClick={() => navigate(`/products/${p.slug}`)}
                  className="group text-left bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand-red/20 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img src={p.image} alt={p.name} className="w-full h-full object-coNTAIN group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-0.5">{p.category}</p>
                    <p className="font-serif font-semibold text-gray-900 text-xs leading-tight">{p.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{p.weight}</p>
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
                <div className="text-xs text-gray-400">Previous</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors">{prev.name}</div>
              </div>
            </button>
          ) : <div />}
          {next ? (
            <button onClick={() => navigate(`/products/${next.slug}`)} className="flex items-center gap-3 group text-right">
              <div className="text-right">
                <div className="text-xs text-gray-400">Next</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors">{next.name}</div>
              </div>
              <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all">
                <ArrowRight size={15} />
              </div>
            </button>
          ) : <div />}
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
