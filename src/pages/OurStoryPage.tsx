import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Leaf, Shield, Users, Star } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { STORY_PRODUCTION_IMAGE } from '../assets';

interface OurStoryPageProps {
  navigate: (path: string) => void;
}

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

const TIMELINE = [
  { year: '1993', title: 'Founded in Mississauga', desc: 'Al Shamas Food Products opens its doors with a small production facility and a big vision — to bring authentic South Asian halal flavours to Canadian tables.' },
  { year: '1998', title: 'Halal Certification', desc: 'Received official Halal certification, reaffirming our commitment to quality and trust within the Muslim Canadian community.' },
  { year: '2003', title: 'National Retail Expansion', desc: 'Products reach shelves across Ontario and Quebec, entering major grocery chains and specialty halal stores nationwide.' },
  { year: '2010', title: 'HACCP & ISO 9001', desc: 'Achieved HACCP food safety certification and ISO 9001 quality management system, setting new benchmarks in frozen halal production.' },
  { year: '2015', title: 'FSSC 22000 Certified', desc: 'Earned the globally recognised FSSC 22000 food safety certification — one of the first halal frozen food companies in Canada to do so.' },
  { year: '2020', title: 'Western Canada Launch', desc: 'Expanded distribution to Alberta, British Columbia, and Manitoba, making Al Shamas a truly coast-to-coast Canadian brand.' },
  { year: '2024', title: '31+ Years Strong', desc: 'Serving millions of Canadians with over 20 SKUs, 100+ retail locations, and the same original family recipes that started it all.' },
];

const VALUES = [
  { icon: Leaf, title: 'No Shortcuts', desc: 'We never use MSG, artificial preservatives, trans fats, or artificial nitrates. Clean ingredients only.', color: 'brand-green' },
  { icon: Shield, title: 'Halal Always', desc: 'Every product, every batch — certified halal by accredited Canadian bodies. Non-negotiable.', color: 'brand-red' },
  { icon: Heart, title: 'Family Recipes', desc: 'Our spice blends and techniques have been refined over three decades by the same founding family.', color: 'brand-orange' },
  { icon: Users, title: 'Community First', desc: 'We give back to the communities that have supported us — locally sourcing ingredients wherever possible.', color: 'brand-green' },
  { icon: Star, title: 'Award-Winning Taste', desc: 'Recognised by industry bodies and community organisations for consistent quality and authentic flavour.', color: 'brand-red' },
  { icon: Award, title: 'Certified Excellence', desc: 'FSSC 22000, HACCP, ISO 9001, and Halal certifications — we meet the highest global food safety standards.', color: 'brand-orange' },
];

const REACH_STATS = [
  { target: 100, suffix: '+', label: 'Retail Locations', color: 'text-brand-red' },
  { target: 8, suffix: '', label: 'Provinces', color: 'text-brand-green' },
  { target: 20, suffix: '+', label: 'Product SKUs', color: 'text-brand-orange' },
  { target: 31, suffix: '+', label: 'Years of Trust', color: 'text-brand-red' },
];

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function CountUp({ target, suffix, visible }: { target: number; suffix: string; visible: boolean }) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const steps = 50;
    const inc = (target - 1) / steps;
    let current = 1;
    setCount(1);
    const interval = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [visible, target]);
  return <>{count}{suffix}</>;
}

function TimelineItem({ item, index, visible }: { item: typeof TIMELINE[0]; index: number; visible: boolean }) {
  const even = index % 2 === 0;
  return (
    <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : even ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'} ${even ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className={`lg:w-1/2 ${even ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow inline-block text-left ${even ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-sm w-full`}>
          <div className="text-brand-red font-serif font-bold text-2xl mb-1">{item.year}</div>
          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
      <div className="hidden lg:flex relative z-10 w-10 h-10 rounded-full bg-brand-red items-center justify-center shadow-md shrink-0">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
      <div className="lg:w-1/2"></div>
    </div>
  );
}

export default function OurStoryPage({ navigate }: OurStoryPageProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reachRef = useRef<HTMLDivElement>(null);
  const timelineVisible = useIntersection(timelineRef, 0.05);
  const reachVisible = useIntersection(reachRef, 0.3);
  const { ref: revRef, isVis } = useReveal();

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-56 h-56 bg-brand-red-pale rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-brand-orange-pale rounded-full opacity-30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <p className="font-serif italic text-brand-red text-lg mb-2">Since 1993</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            A family dream of sharing authentic, wholesome halal food with all of Canada — one perfect kebab at a time.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-green-pale rounded-full opacity-25"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-5">
                Born in Mississauga.<br />
                <span className="text-brand-red">Loved across Canada.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In 1993, a passionate family of food entrepreneurs recognised a gap in the Canadian market — there was no premium, fully-certified halal frozen food that delivered the authentic South Asian flavours families craved.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What began as a modest production kitchen in Mississauga, Ontario has grown into one of Canada's most trusted halal food brands. We now operate from a state-of-the-art FSSC 22000-certified facility, distributing to over 100 retail locations from Victoria to Halifax.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through three decades of growth, our core promise has never changed: use only the finest halal ingredients, respect traditional recipes, and deliver consistent quality that families can trust at every meal.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={STORY_PRODUCTION_IMAGE}
                  alt="Al Shamas production"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-brand-red font-serif font-bold text-3xl">31+</div>
                <div className="text-gray-500 text-sm">Years of excellence</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-brand-red rounded-2xl p-4 shadow-lg">
                <div className="text-white font-serif font-bold text-3xl">100+</div>
                <div className="text-white/80 text-sm">Retail locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-red-pale rounded-full -translate-x-1/2 opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">Our Journey</h2>
            <p className="text-gray-500 text-sm">Three decades of milestones, one consistent mission.</p>
          </div>

          <div className="relative" ref={timelineRef}>
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-red/30 to-transparent -translate-x-1/2"></div>
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <TimelineItem key={item.year} item={item} index={i} visible={timelineVisible} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reach across Canada — counting on scroll */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 bottom-0 w-56 h-56 bg-brand-orange-pale rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-12">Our Reach Across Canada</h2>
          <div ref={reachRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {REACH_STATS.map(({ target, suffix, label, color }) => (
              <div key={label} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`font-serif font-bold text-4xl ${color} mb-1`}>
                  <CountUp target={target} suffix={suffix} visible={reachVisible} />
                </div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-10 top-10 w-48 h-48 bg-brand-green-pale rounded-full opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">How We Are Different</h2>
            <p className="text-gray-500 text-sm">Our values set us apart in the frozen food industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                ref={revRef(`val-${i}`)}
                className={`bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-500 ${
                  isVis(`val-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-${color}-pale flex items-center justify-center mb-4`}>
                  <Icon size={22} className={`text-${color}`} />
                </div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award */}
      <section className="py-16 bg-brand-red-pale relative overflow-hidden">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-56 bg-white/30 rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red mb-4 shadow-lg">
            <Award size={28} className="text-white" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Award-Winning Quality</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Recognised by the Canadian Halal Food Council, community organisations, and industry peers for three consecutive years as a top-tier producer of premium frozen halal products. Our commitment to quality isn't just our promise — it's our track record.
          </p>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
