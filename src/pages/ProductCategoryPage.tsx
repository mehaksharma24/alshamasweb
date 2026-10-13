import { UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import NewsletterBanner from '../components/NewsletterBanner';
import { PRODUCT_CATEGORIES, PRODUCTS, type Product } from '../data';

interface ProductCategoryPageProps {
  slug: string;
  navigate: (path: string) => void;
}

// Some products don't have a photo yet; show a placeholder instead of a broken image.
function ProductTileImage({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 rounded-2xl bg-brand-red-pale flex items-center justify-center">
        <UtensilsCrossed size={36} className="text-brand-red/60" />
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={product.name}
      onError={() => setFailed(true)}
      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
    />
  );
}

export default function ProductCategoryPage({
  slug,
  navigate,
}: ProductCategoryPageProps) {
  const category = PRODUCT_CATEGORIES.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">
            Category not found
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

  const products = PRODUCTS.filter(p => p.category === category.name);

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <button
              onClick={() => navigate('/products')}
              className="hover:text-brand-red transition-colors"
            >
              Products
            </button>

            <span>/</span>

            <span className="text-gray-800">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Category intro */}
      <section className="pt-10 pb-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-red mb-3">
            {category.name}
          </h1>

          <p className="text-gray-700 italic mb-4">{category.tagline}</p>

          <p className="text-gray-600 leading-relaxed max-w-3xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="pt-6 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {products.map(product => (
              <button
                key={product.id}
                onClick={() => navigate(`/products/${product.slug}`)}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[4/3] mb-3">
                  <ProductTileImage product={product} />
                </div>

                <span className="font-medium text-brand-red group-hover:underline">
                  {product.name}
                </span>

                <span className="text-xs text-gray-400 mt-0.5">
                  {product.weight}
                  {product.pieces ? ` · ${product.pieces}` : ''}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
