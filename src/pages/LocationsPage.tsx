import { useState, useMemo } from 'react';
import { Search, MapPin, Phone, X } from 'lucide-react';
import { STORES } from '../data';
import { RETAILER_LOGOS } from '../assets';
import NewsletterBanner from '../components/NewsletterBanner';

const PROVINCES = ['All', 'ON', 'QC', 'BC', 'AB', 'MB'];
const CHAINS = ['All', ...Array.from(new Set(STORES.map(s => s.chain)))];

const STORE_BG_COLORS = [
  'bg-white',
  'bg-brand-green-pale',
  'bg-white',
  'bg-brand-orange-pale',
  'bg-white',
  'bg-brand-red-pale',
  'bg-white',
  'bg-brand-green-pale',
  'bg-white',
  'bg-brand-orange-pale',
  'bg-white',
  'bg-brand-red-pale',
];

export default function LocationsPage() {
  const [search, setSearch] = useState('');
  const [province, setProvince] = useState('All');
  const [chain, setChain] = useState('All');

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();
    return STORES.filter(s => {
      const matchSearch = !term ||
        s.name.toLowerCase().includes(term) ||
        s.city.toLowerCase().includes(term) ||
        s.postal.toLowerCase().includes(term) ||
        s.chain.toLowerCase().includes(term);
      const matchProvince = province === 'All' || s.province === province;
      const matchChain = chain === 'All' || s.chain === chain;
      return matchSearch && matchProvince && matchChain;
    }).sort((a, b) => {
      if (!term) return 0;
      return a.name.toLowerCase().indexOf(term) - b.name.toLowerCase().indexOf(term);
    });
  }, [search, province, chain]);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green-pale rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <div className="inline-block bg-brand-green-pale text-brand-green text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Find Us
          </div>
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-3">Store Locator</h1>
          <p className="text-gray-500 text-base">Find Al Shamas products at a store near you.</p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-gray-100 shadow-sm sticky top-24 z-30 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-wrap">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="City, store name, postal code..."
                className="pl-9 pr-8 py-2.5 text-sm rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-green w-72"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={13} />
                </button>
              )}
            </div>

            <select
              value={province}
              onChange={e => setProvince(e.target.value)}
              className="text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none text-gray-600"
            >
              {PROVINCES.map(p => <option key={p} value={p}>{p === 'All' ? 'All Provinces' : p}</option>)}
            </select>

            <select
              value={chain}
              onChange={e => setChain(e.target.value)}
              className="text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none text-gray-600"
            >
              {CHAINS.map(c => <option key={c} value={c}>{c === 'All' ? 'All Chains' : c}</option>)}
            </select>

            {(search || province !== 'All' || chain !== 'All') && (
              <button
                onClick={() => { setSearch(''); setProvince('All'); setChain('All'); }}
                className="text-xs text-brand-red hover:underline flex items-center gap-1"
              >
                <X size={12} /> Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-xs mb-5">{filtered.length} location{filtered.length !== 1 ? 's' : ''} found</p>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-xl text-gray-400">No stores found matching your search.</p>
              <button
                onClick={() => { setSearch(''); setProvince('All'); setChain('All'); }}
                className="mt-3 text-brand-green text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((store, i) => {
                const bgClass = STORE_BG_COLORS[i % STORE_BG_COLORS.length];
                const borderClass = bgClass === 'bg-brand-green-pale' ? 'border-brand-green/10'
                  : bgClass === 'bg-brand-orange-pale' ? 'border-brand-orange/10'
                  : bgClass === 'bg-brand-red-pale' ? 'border-brand-red/10'
                  : 'border-gray-100';
                return (
                  <div key={store.id} className={`${bgClass} rounded-2xl p-5 border ${borderClass} hover:shadow-md transition-all`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {RETAILER_LOGOS[store.chain] ? (
                          <img src={RETAILER_LOGOS[store.chain]} alt={store.chain} className="w-8 h-8 object-contain rounded-md" />
                        ) : (
                          <div className="w-8 h-8 rounded-md bg-white border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                            {store.chain.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{store.name}</h3>
                          <span className="text-xs text-brand-green font-medium">{store.chain}</span>
                        </div>
                      </div>
                      <span className="text-xs bg-white/80 text-gray-500 px-2 py-0.5 rounded-full shrink-0 border border-gray-100 ml-2">{store.province}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <MapPin size={12} className="text-brand-red mt-0.5 shrink-0" />
                        <span>{store.address}, {store.city}, {store.province} {store.postal}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Phone size={12} className="text-brand-green shrink-0" />
                        <span>{store.phone}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
