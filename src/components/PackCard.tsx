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
  const { t } = useLang();
  if (!pack.stores?.length) return null;
  return (
    <div className="mt-2 flex flex-col items-center gap-1">
      {pack.stores.map(s => (
        <div key={`${s.name}-${s.sku}`} className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
          {s.name.startsWith('Costco') ? (
            <img src={COSTCO_LOGO} alt="Costco" className="h-5 w-auto object-contain" />
          ) : (
            <span className="text-xs font-bold text-gray-700">{s.name}</span>
          )}
          {s.name === 'Costco Business Centre' && (
            <span className="text-xs font-semibold text-gray-700">{t('Business Centre', 'Centre d’affaires')}</span>
          )}
          {s.sku && <span className="text-xs text-gray-600">{t(`Item # ${s.sku}`, `Article no ${s.sku}`)}</span>}
        </div>
      ))}
    </div>
  );
}

/** Small thumbnails of the packaging panels (ingredients, nutrition facts, instructions) — click to enlarge. */
export function PackPanels({ pack }: { pack: Pack }) {
  const { t } = useLang();
  if (!pack.panels) return null;
  const items = [
    { src: pack.panels.ingredients, label: t('Ingredients', 'Ingrédients') },
    { src: pack.panels.nutrition, label: t('Nutrition', 'Nutrition') },
    { src: pack.panels.instructions, label: t('Instructions', 'Instructions') },
  ];
  return (
    <div className="mt-3 grid grid-cols-3 gap-2">
      {items.map(i => (
        <div key={i.src} className="flex flex-col items-center gap-1">
          <div className="w-full aspect-square rounded-lg border border-gray-200 bg-white overflow-hidden">
            <ZoomableImage src={i.src} alt={i.label} className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <span className="text-[11px] text-gray-500 leading-tight">{i.label}</span>
        </div>
      ))}
    </div>
  );
}

/** One pack size: image (click to enlarge), name, pieces/weight, packaging, where it's sold and its packaging panels. */
export default function PackCard({ product, pack, compact = false }: { product: Product; pack: Pack; compact?: boolean }) {
  const { lang, t } = useLang();
  const name = product.name[lang];
  return (
    <div className={`relative bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col text-center ${compact ? 'p-3' : 'p-4'}`}>
      {pack.foodService && (
        <span className="absolute top-3 left-3 z-10 bg-brand-blue-deep text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
          {t('Food Service', 'Restauration')}
        </span>
      )}
      <div className={`aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center ${compact ? 'mb-3' : 'mb-4'}`}>
        <ZoomableImage
          src={pack.image}
          alt={`${name} — ${packLabel(pack, lang)}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="font-heading font-bold text-gray-900 leading-tight">{name}</p>
      <p className="text-brand-red font-semibold text-sm mt-1">{packLabel(pack, lang)}</p>
      <p className="text-xs text-gray-500 mt-0.5">{pack.detail[lang]}</p>
      <PackStores pack={pack} />
      {pack.upc && <p className="text-[11px] text-gray-400 mt-1">UPC {pack.upc}</p>}
      <PackPanels pack={pack} />
    </div>
  );
}
