import { useEffect, useRef, useState } from 'react';
import { CertificatesGrid, StandardsPractices } from '../components/CertSections';
import NewsletterBanner from '../components/NewsletterBanner';
import { useLang } from '../i18n';

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

export default function HalalPage() {
  const { ref, isVis } = useReveal();
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-24">
      {/* Banner */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative pt-12 pb-10">
          <div
            ref={ref('header')}
            className={`max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${isVis('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="font-script text-brand-red text-3xl sm:text-4xl">{t('Halal • Food Safety • Compliance', 'Halal • Salubrité • Conformité')}</p>
            <h1 className="font-heading font-bold text-[#2b1410] leading-none tracking-tight text-5xl sm:text-6xl mt-2">
              {t('Certificates', 'Certificats')}
            </h1>
            <svg className="mx-auto mt-3 w-48 h-4" viewBox="0 0 300 16" aria-hidden="true">
              <path d="M4 12 C80 2 200 2 296 8" fill="none" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              {t('Our commitment to halal is not a checkbox — it is the foundation of everything we do.', 'Notre engagement envers le halal n’est pas une simple formalité — c’est le fondement de tout ce que nous faisons.')}
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-14 bg-brand-orange-deep relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={ref('commit-title')}
            className={`text-center mb-10 transition-all duration-700 ${isVis('commit-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">{t('Our Halal Commitment', 'Notre engagement halal')}</h2>
          </div>
          <div
            ref={ref('commit-body')}
            className={`bg-white rounded-3xl p-8 shadow-md transition-all duration-700 ${isVis('commit-body') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-gray-600 leading-relaxed mb-5">
              {t(
                'Since our founding in 2013, halal integrity has been non-negotiable. Every piece of meat we use comes from certified halal suppliers. Our facility is structured to prevent any cross-contamination between halal and non-halal products at every stage of production.',
                'Depuis notre fondation en 2013, l’intégrité halal est non négociable. Toute la viande que nous utilisons provient de fournisseurs halal certifiés. Notre installation est organisée pour prévenir toute contamination croisée entre produits halal et non halal, à chaque étape de la production.'
              )}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t(
                'We maintain full traceability from farm to freezer — knowing exactly where every ingredient comes from and verifying halal status at every step. Our halal certification is renewed annually, audited by third-party accrediting bodies, and displayed on every product we sell.',
                'Nous assurons une traçabilité complète, de la ferme au congélateur : nous savons exactement d’où provient chaque ingrédient et vérifions son statut halal à chaque étape. Notre certification halal est renouvelée chaque année, vérifiée par des organismes d’accréditation tiers et affichée sur chacun de nos produits.'
              )}
            </p>
          </div>
        </div>
      </section>

      <CertificatesGrid />

      <StandardsPractices />

      <NewsletterBanner />
    </div>
  );
}
