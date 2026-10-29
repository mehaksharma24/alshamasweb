import { useEffect, useRef, useState } from 'react';
import { Shield, Award, CheckCircle2, Download, Eye } from 'lucide-react';
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

// Certificate PDFs live in public/certificates.
const CERTS = [
  {
    name: 'IFANCC Halal Product Certificate',
    body: 'Islamic Food and Nutrition Council of Canada',
    desc: 'Certifies our kebabs and samosas as Halal under the OIC/SMIIC 1:2019 standard, produced under IFANCC supervision at our Mississauga facility.',
    validity: 'Valid until December 31, 2026',
    file: '/certificates/ifancc-halal-product-certificate.pdf',
    color: 'brand-green',
    icon: Shield,
  },
  {
    name: 'IFANCC Halal Registration',
    body: 'Islamic Food and Nutrition Council of Canada',
    desc: 'Registers our Mississauga facility (CFIA Est. No. 866) to produce Halal products under IFANCC supervision.',
    validity: 'Valid until December 31, 2026',
    file: '/certificates/ifancc-halal-registration.pdf',
    color: 'brand-green',
    icon: Shield,
  },
  {
    name: 'HMA Halal Registration',
    body: 'Halal Monitoring Authority',
    desc: 'Verifies that Al Shamas is approved to process and supply our listed kebabs and samosas, and that HMA-labelled Halal products are hand-slaughtered (dhabihah).',
    validity: 'Issued June 29, 2026',
    file: '/certificates/hma-halal-registration.pdf',
    color: 'brand-red',
    icon: Shield,
  },
  {
    name: 'SQF Food Safety Certification',
    body: 'Intertek SAI Global',
    desc: 'SQF Edition 9 food safety certification for our facility, covering chicken and beef kebabs, samosas and spring rolls. Audit rating: Good.',
    validity: 'Valid until December 28, 2026',
    file: '/certificates/sqf-food-safety-audit.pdf',
    color: 'brand-orange',
    icon: Award,
  },
  {
    name: 'Sedex Management Controls',
    body: 'Sedex (SMETA 4-Pillar)',
    desc: 'Site score of 3.8 / 5 — ranking in the top 12% of food manufacturers in Canada for management controls.',
    validity: 'Valid until February 17, 2027',
    file: '/certificates/sedex-management-controls-performance.pdf',
    color: 'brand-red',
    icon: Award,
  },
  {
    name: 'Code of Conduct Audit',
    body: 'Third-party social compliance audit',
    desc: 'Our facility was rated High Performance (100) in a semi-announced code of conduct audit.',
    validity: 'Assessed July 8, 2026',
    file: '/certificates/code-of-conduct-audit-report.pdf',
    color: 'brand-orange',
    icon: CheckCircle2,
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
              Since our founding in 2013, halal integrity has been non-negotiable. Every piece of meat we use comes from certified halal suppliers. Our facility is structured to prevent any cross-contamination between halal and non-halal products at every stage of production.
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
            <p className="text-gray-500 text-sm">View or download our current halal, food safety and compliance certificates.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTS.map(({ name, body, desc, validity, file, color, icon: Icon }, i) => (
              <div
                key={name}
                ref={ref(`cert-${i}`)}
                className={`flex flex-col bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 group ${
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
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <p className="mt-auto text-xs text-gray-400 mb-4">{validity}</p>
                <div className="flex gap-3">
                  <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:border-brand-red hover:text-brand-red transition-colors"
                  >
                    <Eye size={15} />
                    View
                  </a>
                  <a
                    href={file}
                    download
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-light transition-colors"
                  >
                    <Download size={15} />
                    Download
                  </a>
                </div>
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
