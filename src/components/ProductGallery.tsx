import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { Product } from '../catalog';
import { useLang } from '../i18n';
import { packLabel } from './PackCard';
import ZoomableImage from './ZoomableImage';

interface Slide {
  src: string;
  label: string;
}

/** Main product image slider: every pack-size image of the product (main photo first). */
export default function ProductGallery({ product }: { product: Product }) {
  const { lang } = useLang();
  const name = product.name[lang];

  const slides = useMemo<Slide[]>(() => {
    const mainPack = product.packs.find(p => p.main);
    const packSlides = product.packs.map(p => ({ src: p.image, label: packLabel(p, lang), main: !!p.main }));
    if (mainPack) {
      return [...packSlides.filter(s => s.main), ...packSlides.filter(s => !s.main)];
    }
    return [{ src: product.image, label: name }, ...packSlides];
  }, [product, lang, name]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => setIndex(0), [product.slug]);
  useEffect(() => {
    if (slides.length < 2 || paused) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setTimeout(() => setIndex(i => (i + 1) % slides.length), 3500);
    return () => clearTimeout(id);
  }, [index, paused, slides.length]);
  const go = (i: number) => setIndex((i + slides.length) % slides.length);
  const current = slides[Math.min(index, slides.length - 1)];
  const many = slides.length > 1;

  return (
    <div>
      <div
        className="relative w-full h-[320px] sm:h-[440px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-gray-50"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            aria-hidden={i !== index}
          >
            <ZoomableImage src={s.src} alt={`${name} — ${s.label}`} className="w-full h-full object-contain object-center" />
          </div>
        ))}

        {many && (
          <>
            <button
              onClick={() => go(index - 1)}
              aria-label={lang === 'fr' ? 'Image précédente' : 'Previous image'}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 shadow-md text-gray-800 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label={lang === 'fr' ? 'Image suivante' : 'Next image'}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 shadow-md text-gray-800 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white/90 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-800 shadow">
              {current.label} <span className="text-gray-400 font-normal">· {index + 1}/{slides.length}</span>
            </div>
          </>
        )}
      </div>

    </div>
  );
}
