import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building,
  ChefHat,
  Clock,
  Factory,
  Handshake,
  Hotel,
  LayoutGrid,
  Leaf,
  PartyPopper,
  Repeat,
  SearchCheck,
  ShieldCheck,
  Truck,
  TrendingUp,
  UtensilsCrossed,
} from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import PageBanner from '../components/PageBanner';
import { CertificationLogos } from '../components/CertSections';
import { COSTCO_LOGO, packLabel } from '../components/PackCard';
import { PRODUCTS } from '../data';
import { useLang } from '../i18n';

type Bi = { en: string; fr: string };
type Card = { icon: typeof Award; title: Bi; text: Bi };

const RANGE: { title: Bi; text: Bi; image: string }[] = [
  {
    title: { en: 'Kebabs', fr: 'Kebabs' },
    text: {
      en: 'A selection of Halal meat kebabs, including Charcoal, Chapli, Kafta, Sheekh, and more, bringing authentic flavours to a variety of menus.',
      fr: 'Une sélection de kebabs à la viande halal, dont les kebabs au charbon, chapli, kafta, sheekh et plus encore, pour apporter des saveurs authentiques à une variété de menus.',
    },
    image: '/images/products-banner/chicken-charcoal-kebab-sm.jpg',
  },
  {
    title: { en: 'Samosas', fr: 'Samosas' },
    text: {
      en: 'Traditional meat and vegetable-filled appetizers, ideal for starters, snacks, catering platters, and buffet offerings.',
      fr: 'Des bouchées traditionnelles garnies de viande ou de légumes, idéales en entrée, en collation, sur les plateaux de traiteur et les buffets.',
    },
    image: '/images/products-banner/chicken-samosa-sm.jpg',
  },
  {
    title: { en: 'Spring Rolls', fr: 'Rouleaux impériaux' },
    text: {
      en: 'A variety of frozen spring rolls with meat and vegetable fillings, offering convenient appetizer and side-dish options.',
      fr: 'Une variété de rouleaux impériaux surgelés garnis de viande ou de légumes, pour des entrées et accompagnements pratiques.',
    },
    image: '/images/products-banner/chicken-spring-rolls-sm.jpg',
  },
  {
    title: { en: 'Ready-to-Cook Foods', fr: 'Aliments prêts à cuire' },
    text: {
      en: 'Versatile frozen food products that support efficient meal preparation across different foodservice applications.',
      fr: 'Des produits surgelés polyvalents qui facilitent la préparation des repas dans différents contextes de restauration.',
    },
    image: '/images/products/homebanner-lineup.jpg',
  },
];

const DEMANDS: Card[] = [
  {
    icon: Repeat,
    title: { en: 'Consistent Quality', fr: 'Une qualité constante' },
    text: {
      en: 'Manufactured using established recipes and production processes to deliver dependable flavour, texture, and quality.',
      fr: 'Fabriqués selon des recettes et des procédés de production éprouvés pour une saveur, une texture et une qualité fiables.',
    },
  },
  {
    icon: Clock,
    title: { en: 'Convenient Preparation', fr: 'Une préparation pratique' },
    text: {
      en: 'Frozen food solutions that help simplify kitchen preparation and support efficient day-to-day operations.',
      fr: 'Des solutions surgelées qui simplifient la préparation en cuisine et soutiennent des opérations quotidiennes efficaces.',
    },
  },
  {
    icon: LayoutGrid,
    title: { en: 'Menu Versatility', fr: 'Un menu polyvalent' },
    text: {
      en: 'A diverse selection of products that can be incorporated into appetizers, main courses, platters, buffets, and other menu offerings.',
      fr: 'Une sélection variée de produits à intégrer aux entrées, plats principaux, plateaux, buffets et autres offres du menu.',
    },
  },
  {
    icon: TrendingUp,
    title: { en: 'Operational Efficiency', fr: 'Efficacité opérationnelle' },
    text: {
      en: 'Convenient frozen products that can help reduce preparation requirements and support better kitchen workflow.',
      fr: 'Des produits surgelés pratiques qui peuvent réduire le temps de préparation et améliorer le déroulement du travail en cuisine.',
    },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Halal Confidence', fr: 'La confiance halal' },
    text: {
      en: 'Halal-certified products manufactured in accordance with recognized Halal certification requirements, giving operators confidence in the products they serve.',
      fr: 'Des produits certifiés halal, fabriqués selon des exigences de certification halal reconnues, pour servir vos clients en toute confiance.',
    },
  },
];

const BUSINESSES: Card[] = [
  {
    icon: UtensilsCrossed,
    title: { en: 'Restaurants & Quick-Service Operations', fr: 'Restaurants et service rapide' },
    text: {
      en: 'Convenient, flavourful products that can be incorporated into everyday menus while supporting consistency and efficient service.',
      fr: 'Des produits pratiques et savoureux à intégrer aux menus de tous les jours, pour un service constant et efficace.',
    },
  },
  {
    icon: PartyPopper,
    title: { en: 'Catering & Event Services', fr: 'Traiteurs et événements' },
    text: {
      en: 'Versatile appetizers and meal options suitable for catering menus, special occasions, buffets, and large gatherings.',
      fr: 'Des entrées et des repas polyvalents pour les menus de traiteur, les occasions spéciales, les buffets et les grands rassemblements.',
    },
  },
  {
    icon: Hotel,
    title: { en: 'Hotels & Hospitality', fr: 'Hôtellerie' },
    text: {
      en: 'A selection of Halal frozen foods that can complement breakfast, lunch, dinner, and banquet menus.',
      fr: 'Une sélection d’aliments halal surgelés pour compléter les menus du déjeuner, du dîner, du souper et des banquets.',
    },
  },
  {
    icon: Building,
    title: { en: 'Commercial & Institutional Kitchens', fr: 'Cuisines commerciales et institutionnelles' },
    text: {
      en: 'Consistent frozen food solutions designed to support the preparation needs of high-volume foodservice environments.',
      fr: 'Des solutions surgelées constantes, conçues pour les besoins de préparation des cuisines à grand volume.',
    },
  },
  {
    icon: Truck,
    title: { en: 'Foodservice Distributors & Wholesalers', fr: 'Distributeurs et grossistes' },
    text: {
      en: 'A diverse range of Halal frozen food products with the potential to complement existing foodservice portfolios and serve a wider customer base.',
      fr: 'Une gamme variée d’aliments halal surgelés pour compléter votre offre actuelle et servir une clientèle plus large.',
    },
  },
];

const QUALITY: Card[] = [
  {
    icon: Leaf,
    title: { en: 'Carefully Selected Ingredients', fr: 'Des ingrédients soigneusement sélectionnés' },
    text: { en: 'Quality ingredients and established recipes that deliver authentic flavour.', fr: 'Des ingrédients de qualité et des recettes éprouvées pour une saveur authentique.' },
  },
  {
    icon: Award,
    title: { en: 'SQF-Certified Manufacturing', fr: 'Fabrication certifiée SQF' },
    text: { en: 'Recognized food safety certification supporting our manufacturing operations.', fr: 'Une certification de salubrité alimentaire reconnue qui encadre nos activités de fabrication.' },
  },
  {
    icon: SearchCheck,
    title: { en: 'Independent Quality Audits', fr: 'Audits de qualité indépendants' },
    text: { en: 'Third-party assessments that provide additional verification of our manufacturing practices.', fr: 'Des évaluations par des tiers qui vérifient davantage nos pratiques de fabrication.' },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Halal Certification', fr: 'Certification halal' },
    text: { en: 'Products manufactured under recognized Halal certification requirements.', fr: 'Des produits fabriqués selon des exigences de certification halal reconnues.' },
  },
  {
    icon: BadgeCheck,
    title: { en: 'Established Production Standards', fr: 'Des normes de production établies' },
    text: { en: 'Manufacturing processes designed to maintain consistency across production runs.', fr: 'Des procédés de fabrication conçus pour assurer la constance d’un lot à l’autre.' },
  },
];

const GROWTH: Card[] = [
  {
    icon: ChefHat,
    title: { en: 'Established Manufacturing Experience', fr: 'Une expérience de fabrication établie' },
    text: {
      en: 'Over a decade of Canadian manufacturing experience specializing in Halal frozen food products.',
      fr: 'Plus de dix ans d’expérience de fabrication au Canada, spécialisée dans les aliments halal surgelés.',
    },
  },
  {
    icon: Factory,
    title: { en: 'Expanded Production Capabilities', fr: 'Une capacité de production accrue' },
    text: {
      en: 'Two manufacturing facilities, operating under CFIA Establishment #866 and Establishment #7088, providing infrastructure to support future growth.',
      fr: 'Deux installations de fabrication, sous les établissements ACIA no 866 et no 7088, pour soutenir la croissance future.',
    },
  },
  {
    icon: Repeat,
    title: { en: 'Consistency You Can Depend On', fr: 'Une constance sur laquelle compter' },
    text: {
      en: 'Established production processes focused on maintaining product quality and consistency.',
      fr: 'Des procédés de production éprouvés, axés sur la qualité et la constance des produits.',
    },
  },
  {
    icon: Handshake,
    title: { en: 'Partnership-Focused Approach', fr: 'Une approche axée sur le partenariat' },
    text: {
      en: 'A commitment to building long-term business relationships based on quality, dependability, and shared growth.',
      fr: 'Un engagement à bâtir des relations d’affaires durables fondées sur la qualité, la fiabilité et une croissance partagée.',
    },
  },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-8">
      <p className="font-heading font-bold uppercase tracking-widest text-sm text-brand-orange-deep mb-2">{kicker}</p>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}

function CardGrid({ cards, cols, pick }: { cards: Card[]; cols: string; pick: (b: Bi) => string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-6`}>
      {cards.map(({ icon: Icon, title, text }) => (
        <div key={title.en} className="rounded-3xl p-6 border-t-4 border-brand-orange-deep bg-white shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange-soft/40 flex items-center justify-center mb-4">
            <Icon size={22} className="text-brand-orange-deep" />
          </div>
          <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{pick(title)}</h3>
          <p className="text-sm text-[#333333] leading-relaxed">{pick(text)}</p>
        </div>
      ))}
    </div>
  );
}

function OrangeButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange-deep text-white font-semibold rounded-full hover:brightness-95 transition-all text-sm"
    >
      {label} <ArrowRight size={15} />
    </button>
  );
}

export default function FoodServicePage({ navigate }: { navigate: (path: string) => void }) {
  const { lang, t } = useLang();
  const pick = (b: Bi) => b[lang];
  // Every Food Service pack from the product catalogue
  const fsPacks = PRODUCTS.flatMap(p => p.packs.filter(pk => pk.foodService).map(pk => ({ p, pk })));

  return (
    <div className="min-h-screen pt-24">
      <PageBanner
        script={t('Quality You Can Trust. Flavours They’ll Love.', 'Une qualité fiable. Des saveurs qu’ils adoreront.')}
        title={t('Food Service', 'Restauration')}
        sub={t('Made for Your Kitchen. Crafted for Your Customers.', 'Conçu pour votre cuisine. Préparé pour vos clients.')}
      />

      {/* Intro */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 text-[#333333] leading-relaxed">
          <p>
            {t(
              'At Al-Shamas Food Products, we understand that consistency, quality, and convenience are essential to every successful foodservice operation.',
              'Chez Al-Shamas Food Products, nous savons que la constance, la qualité et la commodité sont essentielles au succès de toute entreprise de restauration.',
            )}
          </p>
          <p>
            {t(
              'With over a decade of experience in Halal frozen food manufacturing, we provide a diverse range of products designed to help foodservice businesses deliver authentic flavours while maintaining efficiency in their kitchens.',
              'Forts de plus de dix ans d’expérience dans la fabrication d’aliments halal surgelés, nous offrons une gamme variée de produits qui aident les entreprises de restauration à servir des saveurs authentiques tout en restant efficaces en cuisine.',
            )}
          </p>
          <p>
            {t(
              'From restaurants and catering businesses to commercial kitchens and foodservice distributors, our products bring together quality ingredients, established recipes, and dependable manufacturing standards.',
              'Des restaurants et traiteurs aux cuisines commerciales et distributeurs, nos produits réunissent des ingrédients de qualité, des recettes éprouvées et des normes de fabrication fiables.',
            )}
          </p>
          <div className="pt-4">
            <OrangeButton label={t('Get in Touch to Explore Food Service Solutions', 'Contactez-nous pour découvrir nos solutions de restauration')} onClick={() => navigate('/contact')} />
          </div>
        </div>
      </section>

      {/* Our Food Service Range */}
      <section className="py-16 bg-brand-orange-soft/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Our Food Service Range', 'Notre gamme pour la restauration')} title={t('Authentic Flavours. Endless Possibilities.', 'Des saveurs authentiques. Des possibilités infinies.')} />
          <p className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed mb-4">
            {t(
              'Every kitchen has its own demands. Our frozen food range offers versatile solutions that help businesses expand their menus, streamline preparation, and consistently deliver satisfying meals.',
              'Chaque cuisine a ses propres exigences. Notre gamme de produits surgelés offre des solutions polyvalentes pour élargir votre menu, simplifier la préparation et servir des repas satisfaisants, à chaque fois.',
            )}
          </p>
          <p className="text-center font-semibold text-[#333333] mb-8">{t('Our foodservice product categories include:', 'Nos catégories de produits pour la restauration comprennent :')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RANGE.map(c => (
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
              'Whether served as a main course, appetizer, side dish, or part of a larger menu, our products offer the flexibility to meet a wide range of customer preferences.',
              'En plat principal, en entrée, en accompagnement ou dans un menu plus large, nos produits offrent la souplesse nécessaire pour plaire à une grande variété de clients.',
            )}
          </p>
        </div>
      </section>

      {/* Food Service products */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Existing Food Service Options', 'Nos formats pour la restauration')} title={t('Our Food Service Products', 'Nos produits pour la restauration')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fsPacks.map(({ p, pk }) => {
              const store = pk.stores?.[0];
              return (
                <button
                  key={`${p.id}-${pk.key}`}
                  onClick={() => navigate(`/products/${p.slug}`)}
                  className="group relative flex flex-col items-center text-center bg-white rounded-3xl border border-gray-100 shadow-sm p-4 hover:shadow-lg transition-shadow"
                >
                  <span className="absolute top-3 left-3 z-10 bg-brand-blue-deep text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    {t('Food Service', 'Restauration')}
                  </span>
                  <div className="w-full aspect-[4/3] mb-3 rounded-2xl overflow-hidden bg-gray-50">
                    <img src={pk.image} alt={p.name[lang]} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="font-heading font-bold text-gray-900 leading-tight">{p.name[lang]}</span>
                  <span className="text-brand-red font-semibold text-sm mt-1">{packLabel(pk, lang)}</span>
                  {store && (
                    <span className="mt-2 flex items-center gap-2 text-xs font-bold text-gray-700">
                      {store.name.startsWith('Costco') && <img src={COSTCO_LOGO} alt="Costco" className="h-5 w-auto object-contain" />}
                      {store.name === 'Costco Business Centre' ? t('Business Centre', 'Centre d’affaires') : store.name === 'Costco' ? '' : store.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Designed for the demands of food service */}
      <section className="py-16 bg-brand-blue-soft/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Designed for the Demands of Food Service', 'Conçu pour les exigences de la restauration')} title={t('Less Preparation. More Possibilities.', 'Moins de préparation. Plus de possibilités.')} />
          <div className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed space-y-4 mb-10">
            <p>
              {t(
                'Running a successful foodservice operation requires balancing quality, speed, labour, and consistency.',
                'Réussir en restauration exige un équilibre entre qualité, rapidité, main-d’œuvre et constance.',
              )}
            </p>
            <p>
              {t(
                'Our frozen food solutions are designed to support busy kitchens, helping operators simplify preparation without compromising on flavour.',
                'Nos solutions surgelées sont conçues pour les cuisines occupées et aident à simplifier la préparation sans compromis sur le goût.',
              )}
            </p>
          </div>
          <CardGrid cards={DEMANDS} cols="lg:grid-cols-3" pick={pick} />
        </div>
      </section>

      {/* Serving a variety of businesses */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Serving a Variety of Food Service Businesses', 'Au service de toutes sortes d’entreprises de restauration')} title={t('Flexible Solutions for Every Operation.', 'Des solutions souples pour chaque entreprise.')} />
          <p className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed mb-10">
            {t(
              'From independent restaurants to larger foodservice operations, Al-Shamas offers a range of products suited to different kitchen environments and business needs.',
              'Des restaurants indépendants aux grandes entreprises de restauration, Al-Shamas offre une gamme de produits adaptée à différents environnements de cuisine et besoins d’affaires.',
            )}
          </p>
          <CardGrid cards={BUSINESSES} cols="lg:grid-cols-3" pick={pick} />
        </div>
      </section>

      {/* Quality behind every serving */}
      <section className="pt-16 bg-brand-orange-soft/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <SectionTitle kicker={t('Quality Behind Every Serving', 'La qualité derrière chaque portion')} title={t('Made with Care. Backed by Standards.', 'Préparé avec soin. Appuyé par des normes.')} />
          <div className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed space-y-4 mb-10">
            <p className="font-semibold">{t('Great food begins with dependable quality.', 'Les bons plats commencent par une qualité fiable.')}</p>
            <p>
              {t(
                'At Al-Shamas, our manufacturing processes are built around food safety, product consistency, and Halal integrity, helping foodservice businesses serve their customers with confidence.',
                'Chez Al-Shamas, nos procédés de fabrication reposent sur la salubrité alimentaire, la constance des produits et l’intégrité halal, pour que les entreprises de restauration servent leurs clients en toute confiance.',
              )}
            </p>
            <p className="font-semibold">{t('Our commitment to quality includes:', 'Notre engagement envers la qualité comprend :')}</p>
          </div>
          <CardGrid cards={QUALITY} cols="lg:grid-cols-5" pick={pick} />
          <p className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed mt-10">
            {t(
              'Our focus on quality helps foodservice partners maintain dependable menu offerings while meeting the expectations of their customers.',
              'Notre souci de la qualité aide nos partenaires à offrir un menu fiable tout en répondant aux attentes de leurs clients.',
            )}
          </p>
        </div>
      </section>

      {/* Same certifications block as the About Us page */}
      <CertificationLogos navigate={navigate} />

      {/* Supporting your business */}
      <section className="py-16 bg-brand-blue-soft/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker={t('Supporting Your Business as It Grows', 'Soutenir votre entreprise dans sa croissance')} title={t('Reliable Manufacturing. Stronger Partnerships.', 'Une fabrication fiable. Des partenariats solides.')} />
          <div className="max-w-3xl mx-auto text-center text-[#333333] leading-relaxed space-y-4 mb-10">
            <p>
              {t(
                'As foodservice businesses evolve, having a dependable manufacturing partner becomes increasingly important.',
                'À mesure que les entreprises de restauration évoluent, un partenaire de fabrication fiable devient de plus en plus important.',
              )}
            </p>
            <p>
              {t(
                'Since establishing our Canadian operations in 2013, Al-Shamas has continued to expand its manufacturing capabilities to support growing market demand.',
                'Depuis le lancement de nos activités au Canada en 2013, Al-Shamas n’a cessé d’accroître sa capacité de fabrication pour répondre à une demande croissante.',
              )}
            </p>
            <p>
              {t(
                'With two manufacturing facilities in Mississauga, Ontario, including our newest facility opened in August 2026, we continue to invest in the infrastructure needed to serve our business partners.',
                'Avec deux installations de fabrication à Mississauga, en Ontario, dont la plus récente a ouvert en août 2026, nous continuons d’investir dans l’infrastructure nécessaire pour servir nos partenaires.',
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
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('Let’s Bring More to Your Menu.', 'Enrichissons votre menu.')}</h2>
          <p className="text-gray-900 leading-relaxed mb-3">
            {t(
              'Looking for quality Halal frozen foods to complement your menu or expand your foodservice offerings?',
              'Vous cherchez des aliments halal surgelés de qualité pour compléter votre menu ou élargir votre offre?',
            )}
          </p>
          <p className="text-gray-900 leading-relaxed mb-8">
            {t(
              'At Al-Shamas Food Products, we’re ready to explore how our products can support your kitchen, your customers, and your business.',
              'Chez Al-Shamas Food Products, nous sommes prêts à voir comment nos produits peuvent soutenir votre cuisine, vos clients et votre entreprise.',
            )}
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all text-sm"
          >
            {t('Discuss Your Food Service Needs', 'Parlons de vos besoins en restauration')} <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
