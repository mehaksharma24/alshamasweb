import type { Pack, Product } from '../catalog';
import { useLang } from '../i18n';
import ZoomableImage from './ZoomableImage';

export const COSTCO_LOGO = '/images/products/Costco.png';

const TAG_FR: Record<string, string> = {
  Halal: 'Halal',
  Chicken: 'Poulet',
  Beef: 'Bœuf',
  Lamb: 'Agneau',
  Mutton: 'Mouton',
  'Charcoal Grilled': 'Grillé au charbon',
  Tandoori: 'Tandoori',
  Bestseller: 'Populaire',
  Vegetarian: 'Végétarien',
  'Peri Peri': 'Peri peri',
  Bread: 'Pain',
};

// eslint-disable-next-line react-refresh/only-export-components
export function tagLabel(tag: string, lang: 'en' | 'fr') {
  return lang === 'fr' ? TAG_FR[tag] ?? tag : tag;
}

/** "8 pieces · 344 g" — the pack title plus weight when the weight isn't already in the title. */
// eslint-disable-next-line react-refresh/only-export-components
export function packLabel(pack: Pack, lang: 'en' | 'fr') {
  const title = pack.title[lang];
  if (!pack.weight) return title;
  const w = lang === 'fr' ? pack.weight.replace('.', ',') : pack.weight;
  return title.includes(w) ? title : `${title} · ${w}`;
}

export function PackStores({ pack }: { pack: Pack }) {
  if (!pack.stores?.length) return null;
  return (
    <div className="mt-2 flex flex-col items-center gap-1">
      {pack.stores.map(s => (
        <div key={`${s.name}-${s.sku}`} className="flex items-center gap-2">
          <img src={COSTCO_LOGO} alt="Costco" className="h-5 w-auto object-contain" />
          <span className="text-xs text-gray-600">
            {s.name === 'Costco BC' ? 'BC · ' : ''}
            {s.sku ? `SKU ${s.sku}` : ''}
          </span>
        </div>
      ))}
    </div>
  );
}

/** One pack size: image (click to enlarge), name, pieces/weight, packaging and where it's sold. */
export default function PackCard({ product, pack }: { product: Product; pack: Pack }) {
  const { lang } = useLang();
  const name = product.name[lang];
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 flex flex-col text-center">
      <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-50 mb-4 flex items-center justify-center">
        <ZoomableImage
          src={pack.image}
          alt={`${name} — ${packLabel(pack, lang)}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="font-serif font-semibold text-gray-900 leading-tight">{name}</p>
      <p className="text-brand-red font-semibold text-sm mt-1">{packLabel(pack, lang)}</p>
      <p className="text-xs text-gray-500 mt-0.5">{pack.detail[lang]}</p>
      <PackStores pack={pack} />
    </div>
  );
}
