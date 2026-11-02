import { useEffect, useRef, useState } from 'react';
import { Award, Building2, Factory, Globe2, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { STORY_COVER_IMAGE, CERTIFICATION_LOGOS } from '../assets';
import { COMPANY } from '../company';
import { useLang } from '../i18n';
import PageBanner from '../components/PageBanner';

interface OurStoryPageProps {
  navigate: (path: string) => void;
}

type Bi = { en: string; fr: string };

// ── Company Profile — catalogue text, word for word ─────────────
const PROFILE_HEADING: Bi = {
  en: 'We are a Canadian success story…',
  fr: 'Nous sommes une réussite canadienne…',
};

const PROFILE_PARAGRAPHS: Bi[] = [
  {
    en: '… and the story is just getting started. For nearly a decade, we’ve been bringing delicious halal frozen foods to Canadian families.',
    fr: '… et l’histoire ne fait que commencer. Depuis près d’une décennie, nous offrons aux familles canadiennes de savoureux aliments halal surgelés.',
  },
  {
    en: 'Our mission is simple: deliver high-quality, great-tasting food that makes everyday meals easier. Crafted with care and made with thoughtfully selected ingredients, our products are free from artificial colours.',
    fr: 'Notre mission est simple : proposer des produits de grande qualité, délicieux, et qui facilitent les repas au quotidien. Préparés avec soin et à partir d’ingrédients rigoureusement sélectionnés, nos produits sont sans colorants artificiels.',
  },
  {
    en: 'Al-Shamas proves that frozen can taste just as fresh. Inspired by home-style recipes passed down through generations, every bite brings authentic flavour to your table.',
    fr: 'Avec Al-Shamas, le surgelé peut être aussi bon que le frais. Inspirées de recettes maison transmises de génération en génération, nos créations apportent une touche authentique à votre table.',
  },
  {
    en: 'Our Canadian journey began in 2013, and we’re proud to serve customers from coast to coast.',
    fr: 'Notre aventure au Canada a commencé en 2013, et nous sommes fiers de servir nos clients d’un océan à l’autre.',
  },
  {
    en: 'Al-Shamas follows Islamic principles and is Halal certified by the Halal Monitoring Authority (HMA), so you can enjoy every product with confidence.',
    fr: 'Al-Shamas respecte les principes islamiques et est certifié halal par la Halal Monitoring Authority (HMA), afin que vous puissiez savourer chacun de nos produits en toute confiance.',
  },
];

const PROFILE_CLOSING: Bi = {
  en: 'This is who we are and we’re proud to share our story with you.',
  fr: 'Voilà ce qui nous définit — et nous sommes fiers de partager notre histoire avec vous.',
};

// ── Company at a glance ───────────────────────────────────────
const FACTS: { icon: typeof Award; label: Bi; value: Bi }[] = [
  {
    icon: Sparkles,
    label: { en: 'Established', fr: 'Fondée' },
    value: { en: '2013 in Canada', fr: 'En 2013 au Canada' },
  },
  {
    icon: Building2,
    label: { en: 'Company', fr: 'Entreprise' },
    value: {
      en: 'Canadian manufacturer specializing in high-quality halal frozen foods, including kebabs, samosas, spring rolls, and other ready-to-cook products.',
      fr: 'Fabricant canadien spécialisé dans les aliments halal surgelés de grande qualité, notamment des kebabs, des samosas, des rouleaux impériaux et d’autres produits prêts à cuire.',
    },
  },
  {
    icon: Award,
    label: { en: 'Quality', fr: 'Qualité' },
    value: {
      en: 'Products made with carefully selected ingredients and authentic recipes.',
      fr: 'Des produits préparés à partir d’ingrédients soigneusement sélectionnés et de recettes authentiques.',
    },
  },
  {
    icon: ShieldCheck,
    label: { en: 'Halal Certification', fr: 'Certification halal' },
    value: { en: 'Halal Monitoring Authority (HMA)', fr: 'Halal Monitoring Authority (HMA)' },
  },
  {
    icon: Globe2,
    label: { en: 'Markets', fr: 'Marchés' },
    value: { en: 'Canada and international markets', fr: 'Le Canada et les marchés internationaux' },
  },
];

const LOCATIONS: { label: Bi; address: string; est: string }[] = [
  { label: { en: 'Location 1', fr: 'Emplacement 1' }, address: '2244 Drew Road, Unit 1, Mississauga', est: 'EST #7088' },
  { label: { en: 'Location 2', fr: 'Emplacement 2' }, address: '2244 Drew Road, Unit 3, Mississauga', est: 'EST #866' },
];

// ── Milestones & accomplishments ──────────────────────────────
const MILESTONES: { year: Bi; text: Bi }[] = [
  {
    year: { en: '2013', fr: '2013' },
    text: {
      en: 'Established in Canada, initially importing products from the UK.',
      fr: 'Fondation de l’entreprise au Canada, qui importe d’abord ses produits du Royaume-Uni.',
    },
  },
  {
    year: { en: '2015', fr: '2015' },
    text: {
      en: 'Started operations at a 5,000 sq. ft. Canadian manufacturing facility (EST #866).',
      fr: 'Début des activités dans une installation de fabrication canadienne de 5 000 pi² (EST #866).',
    },
  },
  {
    year: { en: '2016', fr: '2016' },
    text: { en: 'Obtained Provincial Food Licence.', fr: 'Obtention du permis alimentaire provincial.' },
  },
  {
    year: { en: '2020', fr: '2020' },
    text: { en: 'Obtained Federal Food Licence.', fr: 'Obtention de la licence alimentaire fédérale.' },
  },
  {
    year: { en: '2021', fr: '2021' },
    text: { en: 'Became eligible to export internationally.', fr: 'Admissibilité à l’exportation vers les marchés internationaux.' },
  },
  {
    year: { en: 'August 2026', fr: 'Août 2026' },
    text: {
      en: 'Opened our new manufacturing plant (EST #7088), expanding production capacity to support future business growth.',
      fr: 'Ouverture de notre nouvelle usine de fabrication (EST #7088), qui accroît notre capacité de production afin de soutenir la croissance future de l’entreprise.',
    },
  },
];

// ── Certifications — catalogue text, word for word ──────────────
const CERTIFICATIONS: { logo: string; en: string; fr: string }[] = [
  { logo: CERTIFICATION_LOGOS.hma, en: 'HMA Certified', fr: 'Certifié HMA' },
  { logo: CERTIFICATION_LOGOS.sqf, en: 'SQF Certified', fr: 'Certifié SQF' },
  { logo: CERTIFICATION_LOGOS.gmp, en: '3rd party GMP Audited', fr: 'Vérifié BPF par un tiers' },
  { logo: CERTIFICATION_LOGOS.codeOfConduct, en: 'Code of Conduct Audited', fr: 'Audit du code de conduite' },
  { logo: CERTIFICATION_LOGOS.smeta, en: 'SMETA 4-Pillar Audited', fr: 'Audit SMETA à 4 piliers' },
  { logo: CERTIFICATION_LOGOS.supplyChain, en: 'Supply Chain Security Audited', fr: 'Audit de la sécurité de la chaîne d’approvisionnement' },
];

// ── Proudly Canadian — cities served (catalogue) ────────────────
const PROVINCES: { name: Bi; cities: string[] }[] = [
  { name: { en: 'Nova Scotia', fr: 'Nouvelle-Écosse' }, cities: ['Halifax'] },
  { name: { en: 'Quebec', fr: 'Québec' }, cities: ['Montreal'] },
  {
    name: { en: 'Ontario', fr: 'Ontario' },
    cities: [
      'Ottawa', 'Orleans', 'Whitby', 'Oshawa', 'Ajax', 'Pickering', 'Markham', 'Richmond Hill', 'Vaughan', 'Maple',
      'Toronto', 'Scarborough', 'North York', 'East York', 'Brampton', 'Etobicoke', 'Mississauga', 'Oakville',
      'Burlington', 'Hamilton', 'Stoney Creek', 'Guelph', 'Cambridge', 'Kitchener', 'Milton', 'London', 'Windsor',
    ],
  },
  { name: { en: 'Manitoba', fr: 'Manitoba' }, cities: ['Winnipeg'] },
  { name: { en: 'Saskatchewan', fr: 'Saskatchewan' }, cities: ['Saskatoon', 'Regina'] },
  { name: { en: 'Alberta', fr: 'Alberta' }, cities: ['Calgary', 'Edmonton'] },
  { name: { en: 'British Columbia', fr: 'Colombie-Britannique' }, cities: ['Vancouver', 'Surrey', 'Richmond'] },
];

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

function TimelineItem({ year, text, index, visible }: { year: string; text: string; index: number; visible: boolean }) {
  const even = index % 2 === 0;
  return (
    <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : even ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'} ${even ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className={`lg:w-1/2 ${even ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow inline-block text-left ${even ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-sm w-full`}>
          <div className="text-brand-red font-serif font-bold text-2xl mb-2">{year}</div>
          <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
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
  const { lang, t } = useLang();
  const pick = (b: Bi) => b[lang];
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineVisible = useIntersection(timelineRef, 0.05);
  const { ref: revRef, isVis } = useReveal();

  return (
    <div className="min-h-screen pt-24">
      <PageBanner script={t('Since 2013', 'Depuis 2013')} title={t('About Us', 'À propos de nous')} sub={t('Proudly Canadian. Serving families across Canada.', 'Fièrement canadien. Au service des familles partout au Canada.')} />

      {/* Company Profile (catalogue) */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-red text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                {t('Company Profile', 'Profil de l’entreprise')}
              </div>
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-5">{pick(PROFILE_HEADING)}</h2>
              {PROFILE_PARAGRAPHS.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">{pick(p)}</p>
              ))}
              <p className="text-gray-900 font-semibold italic leading-relaxed">{pick(PROFILE_CLOSING)}</p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
                <img
                  src={STORY_COVER_IMAGE}
                  alt={t('Al-Shamas kebabs and samosas', 'Kebabs et samosas Al-Shamas')}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-brand-red font-serif font-bold text-3xl">2013</div>
                <div className="text-gray-500 text-sm">{t('Established in Canada', 'Fondée au Canada')}</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-2 shadow-lg">
                <img src={CERTIFICATION_LOGOS.hma} alt={t('HMA Halal certified', 'Certifié halal HMA')} className="w-20 h-20 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company at a glance */}
      <section className="py-14 bg-[#d7ecdf]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">{t('Company at a Glance', 'L’entreprise en bref')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACTS.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label.en}
                ref={revRef(`fact-${i}`)}
                className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${
                  isVis(`fact-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-green-pale flex items-center justify-center mb-4">
                  <Icon size={22} className="text-brand-green" />
                </div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-2">{pick(label)}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{pick(value)}</p>
              </div>
            ))}

            {/* Facilities & office */}
            <div
              ref={revRef('fact-loc')}
              className={`bg-brand-green rounded-3xl p-6 text-white transition-all duration-500 ${
                isVis('fact-loc') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${FACTS.length * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                <Factory size={22} className="text-white" />
              </div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-3">{t('Facilities', 'Installations')}</h3>
              <ul className="space-y-3 text-sm">
                {LOCATIONS.map(loc => (
                  <li key={loc.est} className="flex gap-2">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-brand-orange-light" />
                    <span>
                      <span className="font-semibold">{pick(loc.label)}:</span> {loc.address} – {loc.est}
                    </span>
                  </li>
                ))}
                <li className="flex gap-2">
                  <Phone size={15} className="mt-0.5 shrink-0 text-brand-orange-light" />
                  <span>
                    <span className="font-semibold">{t('Office Phone', 'Téléphone du bureau')}:</span>{' '}
                    <a href={COMPANY.phoneHref} className="underline-offset-2 hover:underline">{COMPANY.phone}</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-red-pale rounded-full -translate-x-1/2 opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">{t('Company Milestones & Accomplishments', 'Jalons et réalisations')}</h2>
            <p className="text-gray-500 text-sm">{t('Our journey since 2013.', 'Notre parcours depuis 2013.')}</p>
          </div>

          <div className="relative" ref={timelineRef}>
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-red/30 to-transparent -translate-x-1/2"></div>
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <TimelineItem key={m.year.en} year={pick(m.year)} text={pick(m.text)} index={i} visible={timelineVisible} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications (catalogue) */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">{t('Certifications', 'Certifications')}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.en}
                ref={revRef(`cert-${i}`)}
                className={`flex flex-col items-center text-center bg-white rounded-3xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-500 ${
                  isVis(`cert-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="h-20 flex items-center justify-center mb-3">
                  <img src={c.logo} alt="" className="max-h-20 max-w-[120px] object-contain" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{t(c.en, c.fr)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/halal')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-red text-white font-semibold rounded-full hover:bg-brand-red-light transition-all text-sm"
            >
              {t('View Halal & Certifications', 'Voir Halal et certifications')}
            </button>
          </div>
        </div>
      </section>

      {/* Proudly Canadian (catalogue) */}
      <section className="py-14 bg-brand-red relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-white mb-3">
              {t('Proudly Canadian.', 'Fièrement canadien.')}
              <br />
              <span className="font-script font-normal text-[#FFE7C2]">{t('Serving families across Canada.', 'Au service des familles partout au Canada.')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-3xl p-8 shadow-lg">
            {[
              ['Nova Scotia', 'Quebec', 'Manitoba'],
              ['Ontario'],
              ['Saskatchewan', 'Alberta', 'British Columbia'],
            ].map(group => (
              <div key={group.join()} className={group[0] === 'Ontario' ? 'col-span-2 order-last md:order-none' : 'space-y-6'}>
                {PROVINCES.filter(p => group.includes(p.name.en)).map(p => (
                  <div key={p.name.en}>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-brand-red mb-2">{pick(p.name)}</h3>
                    <ul className={`text-sm text-gray-700 space-y-0.5 ${p.cities.length > 5 ? 'columns-2 sm:columns-3' : ''}`}>
                      {p.cities.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
