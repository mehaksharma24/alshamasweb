import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n';

type Bi = { en: string; fr: string };

interface Slide {
  bg: string;
  products: string;
  eyebrow: Bi;
  title: Bi;
  accent: Bi;
  sub: Bi;
  /** which side the text sits on (desktop) */
  textSide: 'left' | 'right';
}

const SLIDES: Slide[] = [
  {
    bg: '/images/recipes/chicken-kebab-rice-platter.jpg',
    products: '/images/hero/slide-kebabs.webp',
    eyebrow: { en: 'Our Best Sellers', fr: 'Nos meilleurs vendeurs' },
    title: { en: 'Handmade Kebabs', fr: 'Kebabs faits à la main' },
    accent: { en: 'Ready in Minutes', fr: 'Prêts en quelques minutes' },
    sub: { en: 'Fully Cooked • Handmade • Heat & Eat', fr: 'Entièrement cuits • Faits à la main • Prêts à réchauffer' },
    textSide: 'left',
  },
  {
    bg: '/images/recipes/chicken-samosa-platter-with-chutneys.jpg',
    products: '/images/hero/slide-samosas.webp',
    eyebrow: { en: 'Crispy & Golden', fr: 'Croustillants et dorés' },
    title: { en: 'Samosas for', fr: 'Des samosas pour' },
    accent: { en: 'Every Gathering', fr: 'chaque occasion' },
    sub: {
      en: 'Chicken, beef, tandoori, tikka, mutton and vegetable',
      fr: 'Poulet, bœuf, tandoori, tikka, mouton et légumes',
    },
    textSide: 'right',
  },
  {
    bg: '/images/recipes/loaded-chicken-kebab-fries.jpg',
    products: '/images/hero/slide-party.webp',
    eyebrow: { en: 'Straight from the Freezer', fr: 'Directement du congélateur' },
    title: { en: 'Party Platters', fr: 'Plateaux de fête' },
    accent: { en: 'Made Easy', fr: 'en toute simplicité' },
    sub: {
      en: 'Spring rolls, samosas and kebabs — halal certified by HMA',
      fr: 'Rouleaux impériaux, samosas et kebabs — certifiés halal par la HMA',
    },
    textSide: 'left',
  },
];

const INTERVAL = 6000;

export default function HeroSlider() {
  const { lang, t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex((i + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return;
    const id = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  return (
    <section
      className="relative pt-[108px] bg-[#1c1410]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={e => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={e => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
      aria-roledescription="carousel"
      aria-label={t('Featured products', 'Produits vedettes')}
    >
      <div className="relative h-[680px] sm:h-[600px] lg:h-[580px] overflow-hidden">
        {SLIDES.map((s, i) => {
          const active = i === index;
          const right = s.textSide === 'right';
          return (
            <div
              key={s.products}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${SLIDES.length}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-700 ${active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            >
              {/* Background photo */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${active ? 'scale-105' : 'scale-100'}`}
                style={{ backgroundImage: `url('${s.bg}')` }}
              />
              {/* Overlay: strongest behind the text */}
              <div
                className={`absolute inset-0 ${
                  right
                    ? 'bg-gradient-to-t lg:bg-gradient-to-l from-[#1c1410]/90 via-[#1c1410]/60 to-[#1c1410]/10'
                    : 'bg-gradient-to-t lg:bg-gradient-to-r from-[#1c1410]/90 via-[#1c1410]/60 to-[#1c1410]/10'
                }`}
              />

              <div
                className={`relative h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center gap-6 lg:gap-10 ${
                  right ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } lg:items-center`}
              >
                {/* Text */}
                <div className={`lg:w-[46%] ${right ? 'lg:text-right' : ''} transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <p className="text-brand-orange-light text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
                    {s.eyebrow[lang]}
                  </p>
                  <h2 className="font-sans font-extrabold uppercase leading-[0.95] tracking-tight text-[#FFF3D6] text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg">
                    {s.title[lang]}
                    <span className="block text-brand-orange-light">{s.accent[lang]}</span>
                  </h2>
                  <p className="mt-4 text-white/85 text-sm sm:text-base">{s.sub[lang]}</p>
                </div>

                {/* Product boxes */}
                <div className={`lg:w-[54%] flex justify-center transition-all duration-700 delay-150 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <img
                    src={s.products}
                    alt={`${s.title[lang]} ${s.accent[lang]}`}
                    className="w-full max-w-[340px] sm:max-w-[520px] lg:max-w-[640px] h-auto drop-shadow-[0_25px_30px_rgba(0,0,0,0.5)]"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={() => go(index - 1)}
          aria-label={t('Previous slide', 'Diapositive précédente')}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center transition-colors"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label={t('Next slide', 'Diapositive suivante')}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center transition-colors"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={t(`Go to slide ${i + 1}`, `Aller à la diapositive ${i + 1}`)}
              aria-current={i === index}
              className={`w-3.5 h-3.5 rounded-full border-2 border-brand-orange transition-colors ${
                i === index ? 'bg-brand-orange' : 'bg-transparent hover:bg-brand-orange/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
