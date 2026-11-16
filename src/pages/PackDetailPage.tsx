import { ArrowLeft, MapPin } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { PackStores, packLabel } from '../components/PackCard';
import ProductInfo from '../components/ProductInfo';
import ZoomableImage from '../components/ZoomableImage';
import { PRODUCT_CATEGORIES, categoryLabel, findProduct } from '../data';
import { useLang } from '../i18n';

interface PackDetailPageProps {
  slug: string;
  packKey: string;
  navigate: (path: string) => void;
}

/** One pack size of a product: its own photos, packaging panels, store and the product's nutrition info. */
export default function PackDetailPage({ slug, packKey, navigate }: PackDetailPageProps) {
  const { lang, t } = useLang();
  const product = findProduct(slug);
  const pack = product?.packs.find(p => p.key === packKey);

  if (!product || !pack) {
    return (
      <div className="min-h-screen pt-40 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-2xl text-gray-800 mb-4">{t('Product not found', 'Produit introuvable')}</h2>
          <button onClick={() => navigate(product ? `/products/${product.slug}` : '/products')} className="text-brand-red hover:underline text-sm">
            {t('Back to Products', 'Retour aux produits')}
          </button>
        </div>
      </div>
    );
  }

  const name = product.name[lang];
  const category = PRODUCT_CATEGORIES.find(c => c.name === product.category);
  const store = pack.stores?.[0];
  const soldAt = !store
    ? t('Al-Shamas retail pack — available at grocery stores', 'Format de détail Al-Shamas — offert en épicerie')
    : store.name === 'A1 Cash & Carry'
      ? 'A1 Cash & Carry'
      : store.name === 'Costco Business Centre'
        ? t('Costco Business Centre', 'Centre d’affaires Costco')
        : 'Costco';

  return (
    <div className="min-h-screen pt-40">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <button onClick={() => navigate('/products')} className="hover:text-brand-red transition-colors">
            {t('Products', 'Produits')}
          </button>
          <span>/</span>
          {category && (
            <>
              <button onClick={() => navigate(`/products/category/${category.slug}`)} className="text-gray-600 hover:text-brand-red transition-colors">
                {categoryLabel(category, lang)}
              </button>
              <span>/</span>
            </>
          )}
          <button onClick={() => navigate(`/products/${product.slug}`)} className="text-gray-600 hover:text-brand-red transition-colors">
            {name}
          </button>
          <span>/</span>
          <span className="text-gray-800">{packLabel(pack, lang)}</span>
        </div>
      </div>

      {/* Pack photos + details */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="relative aspect-[4/3] rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center p-4">
              <ZoomableImage key={pack.image} src={pack.image} alt={`${name} — ${packLabel(pack, lang)}`} className="max-w-full max-h-full object-contain" />
            </div>
            {/* Other pack sizes of this product (current one highlighted) */}
            {product.packs.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-3">
                {product.packs.map(p => {
                  const on = p.key === pack.key;
                  return (
                    <button
                      key={p.key}
                      onClick={() => !on && navigate(`/products/${product.slug}/${p.key}`)}
                      aria-current={on ? 'page' : undefined}
                      className={`flex flex-col items-center gap-1 rounded-xl p-1.5 border-2 transition-colors ${on ? 'border-brand-orange-deep bg-brand-orange-soft/20' : 'border-transparent hover:border-gray-200'}`}
                    >
                      <span className="w-full aspect-square rounded-lg bg-white overflow-hidden border border-gray-100 flex items-center justify-center">
                        <img src={p.image} alt="" loading="lazy" className="w-full h-full object-contain" />
                      </span>
                      <span className="text-[11px] text-gray-700 font-semibold leading-tight">{packLabel(p, lang)}</span>
                      {p.stores?.[0] && (
                        <span className="text-[10px] text-gray-500 leading-tight">
                          {p.stores[0].name === 'Costco Business Centre' ? t('Costco Business Centre', 'Centre d’affaires Costco') : p.stores[0].name}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="lg:pt-6">
            <p className="text-brand-orange-deep text-xs font-bold uppercase tracking-widest mb-2">{categoryLabel(category, lang)}</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#2b1410] tracking-tight mb-2">{name}</h1>
            <p className="text-brand-red font-bold text-2xl mb-1">{packLabel(pack, lang)}</p>
            <p className="text-gray-500 mb-6">{pack.detail[lang]}</p>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 space-y-3 text-sm text-[#333333]">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{t('Where to buy', 'Où acheter')}</p>
                {store ? <PackStores pack={pack} left /> : <p className="font-semibold">{soldAt}</p>}
                {store && <p className="sr-only">{soldAt}</p>}
              </div>
              {pack.upc && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">UPC</p>
                  <p className="font-semibold tracking-wide">{pack.upc}</p>
                </div>
              )}
            </div>

            <p className="text-gray-500 leading-relaxed mt-6">{product.description[lang]}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => navigate('/locations')}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-full hover:bg-brand-red-light transition-colors"
              >
                <MapPin size={14} />
                {t('Find a Store', 'Trouver un magasin')}
              </button>
              <button
                onClick={() => navigate(`/products/${product.slug}`)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-full hover:border-brand-orange-deep transition-colors"
              >
                <ArrowLeft size={14} />
                {t('All pack sizes', 'Tous les formats')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Same Nutrition / Ingredients / Preparation section as the product page */}
      <ProductInfo product={product} pack={pack} />

      <NewsletterBanner />
    </div>
  );
}
