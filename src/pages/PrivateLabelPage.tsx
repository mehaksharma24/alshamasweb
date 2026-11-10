import { ArrowRight, Award, Factory, Globe2, Handshake, Leaf, SearchCheck, ShieldCheck, TrendingUp } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import PageBanner from '../components/PageBanner';
import { CertificatesGrid, CertificationLogos, StandardsPractices } from '../components/CertSections';
import { useLang } from '../i18n';

type Bi = { en: string; fr: string };

const CAPABILITIES: { title: Bi; text: Bi; image: string }[] = [
  {
    title: { en: 'Kebabs', fr: 'Kebabs' },
    text: {
      en: 'A variety of meat kebabs, including Charcoal, Chapli, Kafta, Sheekh and more.',
      fr: 'Une variété de kebabs à la viande, dont les kebabs au charbon, chapli, kafta, sheekh et plus encore.',
    },
    image: '/images/products-banner/chicken-charcoal-kebab-sm.jpg',
  },
  {
    title: { en: 'Samosas', fr: 'Samosas' },
    text: { en: 'Traditional meat and vegetable-filled appetizers.', fr: 'Des bouchées traditionnelles garnies de viande ou de légumes.' },
    image: '/images/products-banner/chicken-samosa-sm.jpg',
  },
  {
    title: { en: 'Spring Rolls', fr: 'Rouleaux impériaux' },
    text: {
      en: 'A selection of frozen spring rolls with a variety of meat and vegetable fillings.',
      fr: 'Une sélection de rouleaux impériaux surgelés aux garnitures variées de viande et de légumes.',
    },
    image: '/images/products-banner/chicken-spring-rolls-sm.jpg',
  },
  {
    title: { en: 'Ready-to-Cook Foods', fr: 'Aliments prêts à cuire' },
    text: {
      en: 'Convenient frozen food solutions designed for retail and foodservice markets.',
      fr: 'Des solutions d’aliments surgelés pratiques, conçues pour le commerce de détail et la restauration.',
    },
    image: '/images/products/homebanner-lineup.jpg',
  },
];

const QUALITY: { icon: typeof Award; title: Bi; text: Bi }[] = [
  {
    icon: Leaf,
    title: { en: 'Carefully Selected Ingredients', fr: 'Des ingrédients soigneusement sélectionnés' },
    text: {
      en: 'We prioritize quality ingredients and authentic recipes to deliver products with consistent flavour and taste.',
      fr: 'Nous privilégions des ingrédients de qualité et des recettes authentiques pour offrir des produits au goût constant.',
    },
  },
  {
    icon: Award,
    title: { en: 'Food Safety & Quality Assurance', fr: 'Salubrité et assurance qualité' },
    text: {
      en: 'Our SQF-certified manufacturing operations follow established food safety and quality management practices.',
      fr: 'Nos activités de fabrication certifiées SQF suivent des pratiques reconnues de salubrité alimentaire et de gestion de la qualité.',
    },
  },
  {
    icon: SearchCheck,
    title: { en: 'Independent Audits', fr: 'Audits indépendants' },
    text: {
      en: 'Our facilities undergo third-party audits, providing additional verification of manufacturing practices, operational controls, and compliance standards.',
      fr: 'Nos installations font l’objet d’audits par des tiers, qui vérifient nos pratiques de fabrication, nos contrôles opérationnels et nos normes de conformité.',
    },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Halal Integrity', fr: 'Intégrité halal' },
    text: {
      en: 'Our Halal-certified products are produced under recognized Halal certification requirements, helping ensure authenticity and consumer confidence.',
      fr: 'Nos produits certifiés halal sont fabriqués selon des exigences de certification halal reconnues, gages d’authenticité et de confiance pour les consommateurs.',
    },
  },
];

const GROWTH: { icon: typeof Award; title: Bi; text: Bi }[] = [
  {
    icon: Factory,
    title: { en: 'Two Manufacturing Facilities', fr: 'Deux installations de fabrication' },
    text: {
      en: 'Established production operations at CFIA Establishment #866 and our newly opened facility, Establishment #7088.',
      fr: 'Des activités de production établies à l’établissement ACIA no 866 et à notre nouvelle installation, l’établissement no 7088.',
    },
  },
  {
    icon: TrendingUp,
    title: { en: 'Expanded Production Capacity', fr: 'Capacité de production accrue' },
    text: {
      en: 'Our second manufacturing facility represents an important investment in supporting future production requirements and business growth.',
      fr: 'Notre deuxième installation de fabrication représente un investissement important pour répondre aux besoins de production futurs et soutenir la croissance.',
    },
  },
  {
    icon: Globe2,
    title: { en: 'Domestic & International Markets', fr: 'Marchés canadiens et internationaux' },
    text: {
      en: 'With federal food licensing and international export eligibility, we are positioned to explore manufacturing opportunities across Canada and international markets, subject to applicable requirements.',
      fr: 'Grâce à notre licence alimentaire fédérale et à notre admissibilité à l’exportation, nous pouvons explorer des occasions de fabrication au Canada et à l’international, sous réserve des exigences applicables.',
    },
  },
  {
    icon: Handshake,
    title: { en: 'Long-Term Partnership Focus', fr: 'Des partenariats à long terme' },
    text: {
      en: 'We aim to develop dependable business relationships built on product quality, consistency, and shared growth.',
      fr: 'Nous voulons bâtir des relations d’affaires fiables, fondées sur la qualité, la constance et une croissance partagée.',
    },
  },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-10">
      <p className="font-heading font-bold uppercase tracking-widest text-sm text-brand-orange-deep mb-2">{kicker}</p>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}

function CtaButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange-deep text-white font-semibold rounded-full hover:brightness-95 transition-all text-sm"
    >
      {label} <ArrowRight size={15} />
    </button>
  );
}

export default function PrivateLabelPage({ navigate }: { navigate: (path: string) => void }) {
  const { lang, t } = useLang();
  const pick = (b: Bi) => b[lang];

  return (
    <div className="min-h-screen pt-24">
      <PageBanner
        script={t('Your Brand. Our Expertise.', 'Votre marque. Notre expertise.')}
        title={t('Private Label Manufacturing', 'Fabrication sous marque privée')}
        sub={t('Manufacturing Quality. Building Brands.', 'Fabriquer la qualité. Bâtir des marques.')}
      />

      {/* Intro */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 text-[#333333] leading-relaxed">
          <p>
            {t(
              'At Al-Shamas Food Products, we bring together manufacturing expertise, authentic flavours, and a commitment to quality to deliver reliable private label food solutions.',
              'Chez Al-Shamas Food Products, nous réunissons expertise de fabrication, saveurs authentiques et engagement envers la qualité pour offrir des solutions alimentaires fiables sous marque privée.',
            )}
          </p>
          <p>
            {t(
              'Since establishing our Canadian operations in 2013, we’ve grown into an experienced Halal frozen food manufacturer, producing a diverse range of products for the Canadian and international markets.',
              'Depuis le lancement de nos activités au Canada en 2013, nous sommes devenus un fabricant expérimenté d’aliments halal surgelés, avec une gamme variée de produits pour les marchés canadien et international.',
            )}
          </p>
          <p>
            {t(
              'With two manufacturing facilities, recognized food safety certifications, and expanding production capabilities, we’re equipped to support businesses looking for a dependable manufacturing partner.',
              'Avec deux installations de fabrication, des certifications de salubrité alimentaire reconnues et une capacité de production croissante, nous sommes prêts à accompagner les entreprises à la recherche d’un partenaire de fabrication fiable.',
            )}
          </p>
          <div className="pt-4">
            <CtaButton label={t('Partner With Us', 'Devenez partenaire')} onClick={() => navigate('/contact')} />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-brand-orange-soft/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Our Manufacturing Capabilities', 'Nos capacités de fabrication')} title={t('Expertise Behind Every Product.', 'L’expertise derrière chaque produit.')} />
          <p className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed mb-4">
            {t(
              'With over a decade of industry experience, Al-Shamas specializes in manufacturing high-quality Halal frozen foods, combining traditional recipes with established production processes.',
              'Forte de plus de dix ans d’expérience, Al-Shamas se spécialise dans la fabrication d’aliments halal surgelés de grande qualité, alliant recettes traditionnelles et procédés de production éprouvés.',
            )}
          </p>
          <p className="text-center font-semibold text-[#333333] mb-8">{t('Our manufacturing capabilities include:', 'Nos capacités de fabrication comprennent :')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map(c => (
              <div key={c.title.en} className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={pick(c.title)} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{pick(c.title)}</h3>
                  <p className="text-sm text-[#333333] leading-relaxed">{pick(c.text)}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed mt-8">
            {t(
              'Our manufacturing experience allows us to support private label opportunities across multiple product categories while maintaining a strong focus on taste, quality, and consistency.',
              'Notre expérience nous permet de soutenir des projets de marque privée dans plusieurs catégories de produits, en restant axés sur le goût, la qualité et la constance.',
            )}
          </p>
        </div>
      </section>

      {/* Quality */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Quality at Every Stage', 'La qualité à chaque étape')} title={t('Built on Quality. Backed by Standards.', 'Fondé sur la qualité. Appuyé par des normes.')} />
          <p className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed mb-10">
            {t(
              'Quality is fundamental to our manufacturing operations. From ingredient selection to finished products, our processes are designed to maintain high standards of food safety, consistency, and product integrity.',
              'La qualité est au cœur de nos activités de fabrication. De la sélection des ingrédients aux produits finis, nos procédés visent à maintenir des normes élevées de salubrité, de constance et d’intégrité des produits.',
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY.map(({ icon: Icon, title, text }) => (
              <div key={title.en} className="rounded-3xl p-6 border-t-4 border-brand-orange-deep bg-white shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange-soft/40 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-brand-orange-deep" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{pick(title)}</h3>
                <p className="text-sm text-[#333333] leading-relaxed">{pick(text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Same block as the Certificates page */}
      <StandardsPractices />

      {/* Certifications & Compliance */}
      <section className="pt-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Certifications & Compliance', 'Certifications et conformité')} title={t('Independently Verified. Committed to Excellence.', 'Vérifié de façon indépendante. Engagé envers l’excellence.')} />
          <p className="text-center text-[#333333] leading-relaxed -mt-2">
            {t(
              'Our commitment to food safety, Halal integrity, and responsible manufacturing is supported by recognized certifications and independent assessments.',
              'Notre engagement envers la salubrité alimentaire, l’intégrité halal et une fabrication responsable s’appuie sur des certifications reconnues et des évaluations indépendantes.',
            )}
          </p>
        </div>
      </section>

      {/* Same block as the About Us page */}
      <CertificationLogos navigate={navigate} />

      <section className="pb-4 bg-white">
        <p className="max-w-3xl mx-auto px-4 text-center text-[#333333] leading-relaxed">
          {t(
            'These certifications and assessments demonstrate our commitment to maintaining reliable manufacturing standards and meeting the expectations of our business partners.',
            'Ces certifications et évaluations témoignent de notre volonté de maintenir des normes de fabrication fiables et de répondre aux attentes de nos partenaires d’affaires.',
          )}
        </p>
      </section>

      {/* Same block as the Certificates page */}
      <CertificatesGrid />

      {/* Growth */}
      <section className="py-16 bg-brand-blue-soft/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Built to Grow With Your Business', 'Prêts à grandir avec votre entreprise')} title={t('Expanding Capacity. Greater Possibilities.', 'Plus de capacité. Plus de possibilités.')} />
          <div className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed space-y-4 mb-10">
            <p className="font-semibold">{t('As our customers grow, so do we.', 'Nous grandissons avec nos clients.')}</p>
            <p>
              {t(
                'From our first Canadian manufacturing facility established in 2015 to the opening of our second manufacturing plant in August 2026, Al-Shamas continues to invest in expanding its production capabilities.',
                'De notre première installation de fabrication au Canada, établie en 2015, à l’ouverture de notre deuxième usine en août 2026, Al-Shamas continue d’investir pour accroître sa capacité de production.',
              )}
            </p>
            <p>
              {t(
                'Operating from two manufacturing facilities in Mississauga, Ontario, we have strengthened our manufacturing infrastructure to support growing demand and future business opportunities.',
                'Avec deux installations de fabrication à Mississauga, en Ontario, nous avons renforcé notre infrastructure pour répondre à une demande croissante et aux occasions d’affaires futures.',
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GROWTH.map(({ icon: Icon, title, text }) => (
              <div key={title.en} className="flex gap-4 bg-white rounded-3xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-deep flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">{pick(title)}</h3>
                  <p className="text-sm text-[#333333] leading-relaxed">{pick(text)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-brand-orange-deep">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('Let’s Build Your Brand Together.', 'Bâtissons votre marque ensemble.')}</h2>
          <p className="text-gray-900 leading-relaxed mb-3">
            {t(
              'Looking for a manufacturing partner that understands quality, Halal integrity, and the importance of delivering consistent products?',
              'Vous cherchez un partenaire de fabrication qui comprend la qualité, l’intégrité halal et l’importance de produits constants?',
            )}
          </p>
          <p className="text-gray-900 leading-relaxed mb-8">
            {t(
              'At Al-Shamas Food Products, we’re ready to explore private label opportunities that align with your business needs.',
              'Chez Al-Shamas Food Products, nous sommes prêts à explorer des occasions de marque privée adaptées aux besoins de votre entreprise.',
            )}
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all text-sm"
          >
            {t('Discuss Your Private Label Needs', 'Parlons de vos besoins en marque privée')} <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
