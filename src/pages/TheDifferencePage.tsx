import { useEffect, useRef, useState } from 'react';
import { Leaf, Shield, Zap, Heart, FlaskConical, Sun } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { DIFFERENCE_IMAGES } from '../assets';

function useReveal() {
  const map = useRef<Map<string, Element>>(new Map());
  const [vis, setVis] = useState<Set<string>>(new Set());
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const k = (e.target as HTMLElement).dataset.rk;
          if (k) setVis(p => new Set([...p, k]));
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    map.current.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const ref = (k: string) => (el: HTMLDivElement | null) => {
    if (el) { (el as HTMLElement).dataset.rk = k; map.current.set(k, el); }
  };
  return { ref, isVis: (k: string) => vis.has(k) };
}

const DIFFERENCES = [
  {
    icon: Shield,
    title: '100% Halal Certified',
    subtitle: 'No compromises, ever.',
    body: 'Every piece of chicken and beef used in Al Shamas products is sourced exclusively from certified halal suppliers. Our halal certification is renewed annually and audited by third-party bodies — not a marketing claim, but a verified, ongoing commitment.',
    image: DIFFERENCE_IMAGES['100% Halal Certified'],
    color: 'brand-red',
  },
  {
    icon: Leaf,
    title: 'No MSG',
    subtitle: 'Flavour from real spices only.',
    body: 'We have never added monosodium glutamate to any product. The rich, complex flavour in every Al Shamas item comes entirely from whole spices, herbs, and time-honoured spice blending techniques refined over 31 years.',
    image: DIFFERENCE_IMAGES['No MSG'],
    color: 'brand-green',
  },
  {
    icon: FlaskConical,
    title: 'No Preservatives',
    subtitle: 'Clean label. Clean conscience.',
    body: 'Shelf-life is achieved through proper freezing technology, not chemical preservatives. Our clean label policy means the ingredient list reads like a recipe — recognisable, natural, real.',
    image: DIFFERENCE_IMAGES['No Preservatives'],
    color: 'brand-orange',
  },
  {
    icon: Zap,
    title: 'No Artificial Nitrates',
    subtitle: 'Better for you, better tasting.',
    body: 'Artificial nitrates and nitrites are commonly used in processed meats for colour and preservation. We refuse both. Our products get their natural colour from the quality of the meat and marinade, as nature intended.',
    image: DIFFERENCE_IMAGES['No Artificial Nitrates'],
    color: 'brand-red',
  },
  {
    icon: Heart,
    title: 'No Trans Fats',
    subtitle: 'Heart-healthier frozen foods.',
    body: 'All frying and cooking oils used in Al Shamas products are free from hydrogenated fats and trans fatty acids. We choose heart-conscious ingredients at every step of production.',
    image: DIFFERENCE_IMAGES['No Trans Fats'],
    color: 'brand-green',
  },
  {
    icon: Sun,
    title: 'Natural & Sustainable Sourcing',
    subtitle: 'From responsible farms to your freezer.',
    body: 'We partner with Canadian and international suppliers who meet our strict standards for freshness, sustainability, and ethical animal welfare practices. Fresh chicken, quality beef, locally grown produce wherever possible.',
    image: DIFFERENCE_IMAGES['Natural & Sustainable Sourcing'],
    color: 'brand-orange',
  },
];

const STATS = [
  { value: '0', label: 'Artificial additives' },
  { value: '0g', label: 'Trans fats per serving' },
  { value: '31+', label: 'Years of clean recipes' },
  { value: '100%', label: 'Halal certified' },
];

export default function TheDifferencePage() {
  const { ref, isVis } = useReveal();

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
        <div
          ref={ref('header')}
          className={`max-w-3xl mx-auto px-4 text-center relative transition-all duration-700 ${isVis('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-block bg-brand-green-pale text-brand-green text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            The Al Shamas Difference
          </div>
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-5">
            Why We Are <span className="text-brand-green">Different</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Not all frozen food is created equal. Here is what separates Al Shamas from everything else on the shelf.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-brand-green text-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-brand-orange/20 rounded-full translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                ref={ref(`stat-${i}`)}
                className={`transition-all duration-600 ${isVis(`stat-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-serif font-bold text-4xl mb-1">{value}</div>
                <div className="text-white/70 text-xs uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {DIFFERENCES.map((item, i) => {
            const { icon: Icon, title, subtitle, body, image, color } = item;
            const even = i % 2 === 0;
            return (
              <div
                key={title}
                ref={ref(`diff-${i}`)}
                className={`flex flex-col ${even ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center relative transition-all duration-700 ${
                  isVis(`diff-${i}`) ? 'opacity-100 translate-x-0' : even ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className={`absolute ${even ? '-left-10' : '-right-10'} top-1/2 -translate-y-1/2 w-48 h-48 bg-${color}-pale rounded-full opacity-40 pointer-events-none`}></div>
                <div className="lg:w-1/2 relative">
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img src={image} alt={title} className="w-full h-72 object-cover" />
                  </div>
                  <div className={`absolute -bottom-4 ${even ? '-right-4' : '-left-4'} w-16 h-16 rounded-full bg-${color}-pale border-4 border-white flex items-center justify-center shadow-md`}>
                    <Icon size={24} className={`text-${color}`} />
                  </div>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className={`inline-block bg-${color}-pale text-${color} text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3`}>
                    {subtitle}
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                  <p className="text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green-pale relative overflow-hidden">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-brand-green/10 pointer-events-none"></div>
        <div className="absolute left-10 top-10 w-20 h-20 rounded-full bg-brand-orange-pale pointer-events-none"></div>
        <div
          ref={ref('cta')}
          className={`max-w-2xl mx-auto px-4 text-center relative transition-all duration-700 ${isVis('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Taste the Difference</h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Find Al Shamas products at a store near you — and discover what 31 years of dedication to quality truly tastes like.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-light transition-all shadow-sm text-sm">
              Find a Location
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-orange text-brand-orange font-semibold rounded-full hover:bg-brand-orange hover:text-white transition-all text-sm">
              View Products
            </button>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
