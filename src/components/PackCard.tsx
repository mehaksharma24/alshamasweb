import { ArrowRight } from 'lucide-react';
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

export function PackStores({ pack, left = false }: { pack: Pack; left?: boolean }) {
  const { t } = useLang();
  if (!pack.stores?.length) return null;
  return (
    <div className={`mt-2 flex flex-col gap-1 ${left ? 'items-start' : 'items-center'}`}>
      {pack.stores.map(s => (
        <div key={`${s.name}-${s.sku}`} className={`flex flex-wrap items-center gap-x-2 gap-y-0.5 ${left ? 'justify-start' : 'justify-center'}`}>
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

/** One pack size: image, name, pieces/weight, packaging and where it's sold.
 *  With onOpen the whole card is a link to that pack's own page. */
export default function PackCard({
  product,
  pack,
  compact = false,
  onOpen,
}: {
  product: Product;
  pack: Pack;
  compact?: boolean;
  onOpen?: () => void;
}) {
  const { lang, t } = useLang();
  const name = product.name[lang];
  const alt = `${name} — ${packLabel(pack, lang)}`;
  const body = (
    <>
      {pack.foodService && (
        <span className="absolute top-3 left-3 z-10 bg-brand-blue-deep text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
          {t('Food Service', 'Restauration')}
        </span>
      )}
      <div className={`aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center ${compact ? 'mb-3' : 'mb-4'}`}>
        {onOpen ? (
          <img src={pack.image} alt={alt} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <ZoomableImage src={pack.image} alt={alt} className="w-full h-full object-contain" loading="lazy" />
        )}
      </div>
      <p className="font-heading font-bold text-gray-900 leading-tight">{name}</p>
      <p className="text-brand-red font-semibold text-sm mt-1">{packLabel(pack, lang)}</p>
      <p className="text-xs text-gray-500 mt-0.5">{pack.detail[lang]}</p>
      <PackStores pack={pack} />
      {onOpen && (
        <span className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-bold text-brand-orange-deep">
          {t('View pack details', 'Voir le format')} <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      )}
    </>
  );
  const cls = `group relative bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center ${compact ? 'p-3' : 'p-4'}`;
  return onOpen ? (
    <button type="button" onClick={onOpen} className={`${cls} hover:shadow-lg hover:border-brand-orange-deep/40 transition-all`}>
      {body}
    </button>
  ) : (
    <div className={cls}>{body}</div>
  );
}
