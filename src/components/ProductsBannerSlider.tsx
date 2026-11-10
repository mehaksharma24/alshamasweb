import { useEffect, useState } from 'react';
import { useLang } from '../i18n';

const B = '/images/products-banner/';
type Slide = { file: string; en: string; fr: string };

const ALL_SLIDES: Slide[] = [
  { file: 'chicken-charcoal-kebab', en: 'Chicken charcoal kebabs', fr: 'Kebabs de poulet au charbon' },
  { file: 'chicken-samosa', en: 'Chicken samosas', fr: 'Samosas au poulet' },
  { file: 'beef-spring-rolls', en: 'Beef spring rolls', fr: 'Rouleaux impériaux au bœuf' },
  { file: 'chapli-kebabs', en: 'Chapli kebabs', fr: 'Chapli kebabs' },
  { file: 'beef-charcoal-kebab', en: 'Beef charcoal kebabs', fr: 'Kebabs de bœuf au charbon' },
  { file: 'beef-samosa', en: 'Beef samosas', fr: 'Samosas au bœuf' },
  { file: 'chicken-spring-rolls', en: 'Chicken spring rolls', fr: 'Rouleaux impériaux au poulet' },
  { file: 'chicken-sheekh-kebab', en: 'Chicken sheekh kebabs', fr: 'Sheekh kebabs au poulet' },
  { file: 'meat-charcoal-kebab', en: 'Meat charcoal kebabs', fr: 'Kebabs de viande au charbon' },
  { file: 'beef-sheekh-kebab', en: 'Beef sheekh kebabs', fr: 'Sheekh kebabs au bœuf' },
  { file: 'chicken-kafta-kebab', en: 'Chicken kafta kebabs', fr: 'Kafta kebabs au poulet' },
  { file: 'beef-kafta-kebab', en: 'Beef kafta kebabs', fr: 'Kafta kebabs au bœuf' },
];

/** Products page order: mix kebabs, samosas and spring rolls */
const PRODUCTS_ORDER = ['chicken-charcoal-kebab', 'chicken-samosa', 'chapli-kebabs', 'beef-spring-rolls', 'chicken-kafta-kebab', 'beef-charcoal-kebab', 'beef-samosa', 'chicken-sheekh-kebab', 'meat-charcoal-kebab', 'chicken-spring-rolls', 'beef-kafta-kebab', 'beef-sheekh-kebab'];
const PRODUCTS_SLIDES = PRODUCTS_ORDER.map(f => ALL_SLIDES.find(s => s.file === f)!);

/** Kebab category page: kebab photos only */
export const KEBAB_SLIDES = ['chicken-charcoal-kebab', 'chapli-kebabs', 'beef-charcoal-kebab', 'chicken-sheekh-kebab', 'chicken-kafta-kebab', 'meat-charcoal-kebab', 'beef-sheekh-kebab', 'beef-kafta-kebab']
  .map(f => ALL_SLIDES.find(s => s.file === f)!);

/** Samosa category page */
export const SAMOSA_SLIDES = ['chicken-samosa', 'beef-samosa'].map(f => ALL_SLIDES.find(s => s.file === f)!);

/** Spring rolls category page */
export const SPRING_ROLL_SLIDES = ['chicken-spring-rolls', 'beef-spring-rolls'].map(f => ALL_SLIDES.find(s => s.file === f)!);

const INTERVAL = 5000;

/** Products / category page banner: photos that change automatically (same fade as Home), no text. */
export default function ProductsBannerSlider({ slides = PRODUCTS_SLIDES }: { slides?: Slide[] }) {
  const SLIDES = slides;
  const { lang, t } = useLang();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => setIndex(i => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <section className="relative pt-20 bg-white overflow-hidden" aria-roledescription="carousel">
      <div className="relative w-full aspect-[7185/2385] min-h-[220px]">
        {SLIDES.map((s, i) => (
          <img
            key={s.file}
            src={`${B}${s.file}.jpg`}
            srcSet={`${B}${s.file}-sm.jpg 1200w, ${B}${s.file}.jpg 2400w`}
            sizes="100vw"
            alt={lang === 'fr' ? s.fr : s.en}
            aria-hidden={i !== index}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={t(`Show image ${i + 1}`, `Afficher l’image ${i + 1}`)}
              aria-current={i === index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-white transition-colors ${i === index ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
