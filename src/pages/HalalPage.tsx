import { useEffect, useRef, useState } from 'react';
import { Shield, Award, CheckCircle2 } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';

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

const CERTS = [
  {
    name: 'Halal Certified',
    body: 'Canadian Halal Food Council',
    desc: 'Every product and every batch is certified halal by an accredited third-party certifying body. Our halal status covers all ingredients, processing, handling, and packaging.',
    color: 'brand-green',
    icon: Shield,
  },
  {
    name: 'FSSC 22000',
    body: 'Foundation FSSC',
    desc: 'One of the most rigorous globally-recognised food safety certifications, covering all aspects of our supply chain, production processes, and quality control systems.',
    color: 'brand-red',
    icon: Award,
  },
  {
    name: 'HACCP',
    body: 'Hazard Analysis & Critical Control Points',
    desc: 'Our HACCP plan identifies, evaluates, and controls food safety hazards throughout the production process — ensuring every product leaving our facility is safe.',
    color: 'brand-orange',
    icon: CheckCircle2,
  },
  {
    name: 'ISO 9001',
    body: 'International Standards Organisation',
    desc: 'ISO 9001 certification confirms that our quality management systems meet international benchmarks — consistent quality, continuous improvement, and customer focus.',
    color: 'brand-green',
    icon: Award,
  },
  {
    name: 'USDA Compliant',
    body: 'United States Department of Agriculture',
    desc: 'Our production facilities and processes meet USDA standards for food safety and quality — enabling export to US markets and validating our commitment to global standards.',
    color: 'brand-red',
    icon: Shield,
  },
];

const PRACTICES = [
  'All halal certifications renewed annually and third-party audited',
  'Segregated halal production lines — no cross-contamination',
  'Certified halal suppliers for all meat ingredients',
  'Regular third-party facility inspections',
  'Full traceability from farm to freezer',
  'Employee halal-awareness training programmes',
  'Clean-label policy — no hidden additives',
  'Allergen control and labelling compliance',
];

export default function HalalPage() {
  const { ref, isVis } = useReveal();

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green-pale rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-red-pale rounded-full translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none"></div>
        <div
          ref={ref('header')}
          className={`max-w-3xl mx-auto px-4 text-center relative transition-all duration-700 ${isVis('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-green mb-4 shadow-md">
            <Shield size={24} className="text-white" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-4">Halal & Certifications</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our commitment to halal is not a checkbox — it is the foundation of everything we do.
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-14 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-green-pale rounded-full opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={ref('commit-title')}
            className={`text-center mb-10 transition-all duration-700 ${isVis('commit-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-3">Our Halal Commitment</h2>
          </div>
          <div
            ref={ref('commit-body')}
            className={`bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-700 ${isVis('commit-body') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-gray-600 leading-relaxed mb-5">
              Since our founding in 1993, halal integrity has been non-negotiable. Every piece of meat we use comes from certified halal suppliers. Our facility is structured to prevent any cross-contamination between halal and non-halal products at every stage of production.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We maintain full traceability from farm to freezer — knowing exactly where every ingredient comes from and verifying halal status at every step. Our halal certification is renewed annually, audited by third-party accrediting bodies, and displayed on every product we sell.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 bg-brand-orange-pale rounded-full opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={ref('cert-title')}
            className={`text-center mb-12 transition-all duration-700 ${isVis('cert-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">Our Certifications</h2>
            <p className="text-gray-500 text-sm">Recognised by leading Canadian and international food safety bodies.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTS.map(({ name, body, desc, color, icon: Icon }, i) => (
              <div
                key={name}
                ref={ref(`cert-${i}`)}
                className={`bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 group ${
                  isVis(`cert-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-${color}-pale flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={26} className={`text-${color}`} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 leading-tight">{name}</h3>
                    <p className={`text-xs text-${color} font-medium mt-0.5`}>{body}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-56 h-56 bg-brand-green-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-40 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={ref('prac-title')}
            className={`text-center mb-10 transition-all duration-700 ${isVis('prac-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="font-serif text-3xl font-bold text-gray-900">Our Standards & Practices</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRACTICES.map((practice, i) => (
              <div
                key={i}
                ref={ref(`prac-${i}`)}
                className={`flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm transition-all duration-500 ${
                  isVis(`prac-${i}`) ? 'opacity-100 translate-x-0' : i % 2 === 0 ? 'opacity-0 -translate-x-5' : 'opacity-0 translate-x-5'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
