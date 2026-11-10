import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLang } from '../i18n';

const SLIDES = [
  { src: '/images/hero/banner-charcoal-kebab.jpg', sm: '/images/hero/banner-charcoal-kebab-sm.jpg', alt: { en: 'Chicken charcoal kebabs', fr: 'Kebabs de poulet au charbon' } },
  { src: '/images/hero/banner-samosa.jpg', sm: '/images/hero/banner-samosa-sm.jpg', alt: { en: 'Chicken samosas', fr: 'Samosas au poulet' } },
  { src: '/images/hero/banner-chapli-kebab.jpg', sm: '/images/hero/banner-chapli-kebab-sm.jpg', alt: { en: 'Chicken chapli kebabs', fr: 'Chapli kebabs au poulet' } },
];

const INTERVAL = 5000;

/** Home banner: food photos that change automatically, with the text card on the left. */
export default function HomeHeroSlider({ navigate }: { navigate: (path: string) => void }) {
  const { lang, t } = useLang();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => setIndex(i => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <section className="relative pt-20 bg-white overflow-hidden" aria-roledescription="carousel">
      <div className="relative h-[620px] sm:h-[560px] lg:h-[540px]">
        {/* Photos */}
        {SLIDES.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            srcSet={`${s.sm} 1200w, ${s.src} 2400w`}
            sizes="100vw"
            alt={s.alt[lang]}
            aria-hidden={i !== index}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover object-[70%_50%] transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Text card */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-6 pb-16">
          <div className="w-full max-w-[460px] rounded-[28px] bg-white/80 backdrop-blur-[2px] shadow-lg px-7 py-7 sm:px-8 sm:py-8">
            <h1 className="font-heading font-bold text-[#1a1a1a] leading-[1.02] text-[38px] sm:text-[46px] tracking-tight">
              {lang === 'fr' ? (
                <>
                  Aliments <span className="text-brand-red">halal</span>
                  <br />
                  surgelés de qualité
                </>
              ) : (
                <>
                  Canada&apos;s Premium
                  <br />
                  <span className="text-brand-red">Halal</span> Frozen Foods
                </>
              )}
            </h1>
            <p className="font-serif italic text-brand-red text-[21px] sm:text-[24px] mt-3">
              {t('Authentic · High Quality · Flavourful', 'Authentique · Grande qualité · Savoureux')}
            </p>
            <p className="mt-3 text-gray-700 text-sm sm:text-[15px] leading-relaxed">
              {t(
                'Proudly Canadian since 2013. Halal kebabs, samosas, spring rolls and other ready-to-cook products — made with carefully selected ingredients and authentic recipes, and free from artificial colours.',
                'Fièrement canadien depuis 2013. Kebabs, samosas, rouleaux impériaux et autres produits prêts à cuire halal — préparés avec des ingrédients soigneusement sélectionnés et des recettes authentiques, sans colorants artificiels.'
              )}
            </p>
            <button
              onClick={() => navigate('/about-us')}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-orange-deep text-white font-bold text-sm shadow hover:brightness-95 transition"
            >
              {t('Read Our Story', 'Lire notre histoire')} <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={t(`Show image ${i + 1}`, `Afficher l’image ${i + 1}`)}
              aria-current={i === index}
              className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${i === index ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>

        {/* Bottom orange wave with a thin white line */}
        <svg className="absolute bottom-0 left-0 w-full h-16 sm:h-20 pointer-events-none" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 34 C260 70 560 76 860 58 C1100 44 1280 50 1440 62 V80 H0 Z" fill="#F7941D" />
          <path d="M0 22 C260 58 560 64 860 46 C1100 32 1280 38 1440 50" fill="none" stroke="#ffffff" strokeWidth="3" />
        </svg>
      </div>
    </section>
  );
}
