import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import NewsletterBanner from '../components/NewsletterBanner';
import { CATEGORIES, PRODUCTS } from '../data';

interface ProductsPageProps {
  navigate: (path: string) => void;
}

export default function ProductsPage({ navigate }: ProductsPageProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('default');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = PRODUCTS
    .filter(p => {
      const matchCat = category === 'All' || p.category === category;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sort === 'name-az') return a.name.localeCompare(b.name);
      if (sort === 'name-za') return b.name.localeCompare(a.name);
      return 0;
    });

  const handleProductClick = (slug: string) => {
    setSelected(slug);
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange-pale rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-red-pale rounded-full translate-x-1/3 translate-y-1/3 opacity-40 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-3">Our Products</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Halal frozen foods — crafted with real ingredients, no shortcuts.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gray-50 py-6 sticky top-24 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-8 py-2.5 text-sm rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-brand-orange"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                    category === cat
                      ? 'bg-brand-orange text-white shadow-sm'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 ml-auto">
              <SlidersHorizontal size={15} className="text-gray-400" />
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="text-xs bg-white border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-orange text-gray-600"
              >
                <option value="default">Sort: Default</option>
                <option value="name-az">Name A–Z</option>
                <option value="name-za">Name Z–A</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute right-10 top-10 w-40 h-40 bg-brand-green-pale rounded-full opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 font-serif text-xl">No products match your search.</p>
              <button onClick={() => { setSearch(''); setCategory('All'); }} className="mt-4 text-brand-orange text-sm hover:underline">Clear filters</button>
            </div>
          ) : (
            <>
              <p className="text-gray-400 text-xs mb-6">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filtered.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    className={`group text-left rounded-3xl p-5 border transition-all duration-300 hover:bg-brand-orange-pale hover:border-brand-orange/50 hover:shadow-xl ${
                      selected === product.slug
                        ? 'border-brand-red border-2 ring-2 ring-brand-red/20 bg-brand-red-pale/30'
                        : 'bg-white border-gray-100'
                    }`}
                  >
                    <div className="relative mb-4">
                      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {product.tags.includes('Bestseller') && (
                        <div className="absolute top-2 left-2 bg-brand-red text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          Bestseller
                        </div>
                      )}
                      {product.tags.includes('Vegetarian') && (
                        <div className="absolute top-2 right-2 bg-brand-green text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          Veg
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                      <h3 className="font-serif font-semibold text-gray-900 text-sm leading-tight mb-1">{product.name}</h3>
                      <p className="text-xs text-gray-400">{product.weight}{product.pieces ? ` · ${product.pieces}` : ''}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-400 rounded-full border border-gray-100">{tag}</span>
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
