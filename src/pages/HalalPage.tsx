import { useEffect, useRef, useState } from 'react';
import { Shield, Award, CheckCircle2, Download, Eye } from 'lucide-react';
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

// Certificate PDFs live in public/certificates.
const CERTS = [
  {
    name: { en: 'IFANCC Halal Product Certificate', fr: 'Certificat de produits halal IFANCC' },
    body: { en: 'Islamic Food and Nutrition Council of Canada', fr: 'Islamic Food and Nutrition Council of Canada' },
    desc: {
      en: 'Certifies our kebabs and samosas as Halal under the OIC/SMIIC 1:2019 standard, produced under IFANCC supervision at our Mississauga facility.',
      fr: 'Certifie nos kebabs et nos samosas comme halal selon la norme OIC/SMIIC 1:2019, produits sous la supervision de l’IFANCC à notre installation de Mississauga.',
    },
    validity: { en: 'Valid until December 31, 2026', fr: 'Valide jusqu’au 31 décembre 2026' },
    file: '/certificates/ifancc-halal-product-certificate.pdf',
    color: 'brand-green',
    icon: Shield,
  },
  {
    name: { en: 'IFANCC Halal Registration', fr: 'Enregistrement halal IFANCC' },
    body: { en: 'Islamic Food and Nutrition Council of Canada', fr: 'Islamic Food and Nutrition Council of Canada' },
    desc: {
      en: 'Registers our Mississauga facility (CFIA Est. No. 866) to produce Halal products under IFANCC supervision.',
      fr: 'Enregistre notre installation de Mississauga (no d’établissement ACIA 866) pour la production de produits halal sous la supervision de l’IFANCC.',
    },
    validity: { en: 'Valid until December 31, 2026', fr: 'Valide jusqu’au 31 décembre 2026' },
    file: '/certificates/ifancc-halal-registration.pdf',
    color: 'brand-green',
    icon: Shield,
  },
  {
    name: { en: 'HMA Halal Registration', fr: 'Enregistrement halal HMA' },
    body: { en: 'Halal Monitoring Authority', fr: 'Halal Monitoring Authority' },
    desc: {
      en: 'Verifies that Al-Shamas is approved to process and supply our listed kebabs and samosas, and that HMA-labelled Halal products are hand-slaughtered (dhabihah).',
      fr: 'Atteste qu’Al-Shamas est autorisé à transformer et à fournir les kebabs et samosas inscrits, et que les produits halal portant le logo HMA proviennent d’un abattage à la main (dhabihah).',
    },
    validity: { en: 'Issued June 29, 2026', fr: 'Délivré le 29 juin 2026' },
    file: '/certificates/hma-halal-registration.pdf',
    color: 'brand-red',
    icon: Shield,
  },
  {
    name: { en: 'SQF Food Safety Certification', fr: 'Certification de salubrité alimentaire SQF' },
    body: { en: 'Intertek SAI Global', fr: 'Intertek SAI Global' },
    desc: {
      en: 'SQF Edition 9 food safety certification for our facility, covering chicken and beef kebabs, samosas and spring rolls. Audit rating: Good.',
      fr: 'Certification de salubrité alimentaire SQF, édition 9, pour notre installation, couvrant les kebabs au poulet et au bœuf, les samosas et les rouleaux impériaux. Cote d’audit : Bonne.',
    },
    validity: { en: 'Valid until December 28, 2026', fr: 'Valide jusqu’au 28 décembre 2026' },
    file: '/certificates/sqf-food-safety-audit.pdf',
    color: 'brand-orange',
    icon: Award,
  },
  {
    name: { en: 'Sedex Management Controls', fr: 'Contrôles de gestion Sedex' },
    body: { en: 'Sedex (SMETA 4-Pillar)', fr: 'Sedex (SMETA à 4 piliers)' },
    desc: {
      en: 'Site score of 3.8 / 5 — ranking in the top 12% of food manufacturers in Canada for management controls.',
      fr: 'Note du site de 3,8 / 5 — parmi les 12 % meilleurs fabricants alimentaires au Canada pour les contrôles de gestion.',
    },
    validity: { en: 'Valid until February 17, 2027', fr: 'Valide jusqu’au 17 février 2027' },
    file: '/certificates/sedex-management-controls-performance.pdf',
    color: 'brand-red',
    icon: Award,
  },
  {
    name: { en: 'Code of Conduct Audit', fr: 'Audit du code de conduite' },
    body: { en: 'Third-party social compliance audit', fr: 'Audit de conformité sociale par un tiers' },
    desc: {
      en: 'Our facility was rated High Performance (100) in a semi-announced code of conduct audit.',
      fr: 'Notre installation a obtenu la cote Haute performance (100) lors d’un audit semi-annoncé du code de conduite.',
    },
    validity: { en: 'Assessed July 8, 2026', fr: 'Évalué le 8 juillet 2026' },
    file: '/certificates/code-of-conduct-audit-report.pdf',
    color: 'brand-orange',
    icon: CheckCircle2,
  },
];

const PRACTICES = [
  { en: 'All halal certifications renewed annually and third-party audited', fr: 'Toutes les certifications halal sont renouvelées chaque année et vérifiées par des tiers' },
  { en: 'Segregated halal production lines — no cross-contamination', fr: 'Chaînes de production halal séparées — aucune contamination croisée' },
  { en: 'Certified halal suppliers for all meat ingredients', fr: 'Fournisseurs halal certifiés pour toutes les viandes' },
  { en: 'Regular third-party facility inspections', fr: 'Inspections régulières de l’installation par des tiers' },
  { en: 'Full traceability from farm to freezer', fr: 'Traçabilité complète, de la ferme au congélateur' },
  { en: 'Employee halal-awareness training programmes', fr: 'Programmes de formation des employés sur les exigences halal' },
  { en: 'Clean-label policy — no hidden additives', fr: 'Politique d’étiquetage transparent — aucun additif caché' },
  { en: 'Allergen control and labelling compliance', fr: 'Contrôle des allergènes et conformité de l’étiquetage' },
];

export default function HalalPage() {
  const { ref, isVis } = useReveal();
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen pt-24">
      {/* Banner */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative pt-12 pb-24 sm:pb-28">
          <div
            ref={ref('header')}
            className={`max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${isVis('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="font-script text-brand-red text-3xl sm:text-4xl">{t('Halal • Food Safety • Compliance', 'Halal • Salubrité • Conformité')}</p>
            <h1 className="font-serif font-black text-[#2b1410] leading-none tracking-tight text-5xl sm:text-6xl mt-2">
              {t('Certificates', 'Certificats')}
            </h1>
            <svg className="mx-auto mt-3 w-48 h-4" viewBox="0 0 300 16" aria-hidden="true">
              <path d="M4 12 C80 2 200 2 296 8" fill="none" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              {t('Our commitment to halal is not a checkbox — it is the foundation of everything we do.', 'Notre engagement envers le halal n’est pas une simple formalité — c’est le fondement de tout ce que nous faisons.')}
            </p>
          </div>
          <svg className="absolute bottom-0 left-0 w-full h-16 sm:h-20 pointer-events-none" viewBox="0 0 1440 112" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 40 C260 110 560 112 820 78 C1060 46 1260 54 1440 92 V112 H0 Z" fill="#C8102E" />
          </svg>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-14 bg-[#d7ecdf] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={ref('commit-title')}
            className={`text-center mb-10 transition-all duration-700 ${isVis('commit-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-3">{t('Our Halal Commitment', 'Notre engagement halal')}</h2>
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

      {/* Certifications grid */}
      <section className="py-16 bg-[#fff8f1] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={ref('cert-title')}
            className={`text-center mb-12 transition-all duration-700 ${isVis('cert-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">{t('Our Certifications', 'Nos certifications')}</h2>
            <p className="text-gray-500 text-sm">{t('View or download our current halal, food safety and compliance certificates.', 'Consultez ou téléchargez nos certificats actuels de halal, de salubrité alimentaire et de conformité.')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTS.map(({ name, body, desc, validity, file, color, icon: Icon }, i) => (
              <div
                key={name.en}
                ref={ref(`cert-${i}`)}
                className={`flex flex-col bg-white rounded-3xl p-6 shadow-sm border-t-4 border-brand-red hover:shadow-xl transition-all duration-500 group ${
                  isVis(`cert-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-${color}-pale flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={26} className={`text-${color}`} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 leading-tight">{name[lang]}</h3>
                    <p className={`text-xs text-${color} font-medium mt-0.5`}>{body[lang]}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc[lang]}</p>
                <p className="mt-auto text-xs text-gray-400 mb-4">{validity[lang]}</p>
                <div className="flex gap-3">
                  <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:border-brand-red hover:text-brand-red transition-colors"
                  >
                    <Eye size={15} />
                    {t('View', 'Voir')}
                  </a>
                  <a
                    href={file}
                    download
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-light transition-colors"
                  >
                    <Download size={15} />
                    {t('Download', 'Télécharger')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-14 bg-brand-red relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            ref={ref('prac-title')}
            className={`text-center mb-10 transition-all duration-700 ${isVis('prac-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="font-serif text-3xl font-bold text-white">{t('Our Standards & Practices', 'Nos normes et pratiques')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRACTICES.map((practice, i) => (
              <div
                key={i}
                ref={ref(`prac-${i}`)}
                className={`flex items-start gap-3 bg-white rounded-2xl p-4 shadow-md transition-all duration-500 ${
                  isVis(`prac-${i}`) ? 'opacity-100 translate-x-0' : i % 2 === 0 ? 'opacity-0 -translate-x-5' : 'opacity-0 translate-x-5'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{practice[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
