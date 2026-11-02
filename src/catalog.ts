// ============================================================
//  AL-SHAMAS — PRODUCT CATALOGUE DATA
//  Generated from: master product list (pack sizes, Costco SKUs),
//  the product catalogue PDF (names, ingredients, instructions,
//  nutrition) and the packaging photos in public/images/products.
//
//  PACK PHOTOS: every pack image lives at
//    public/images/packs/<product-slug>/<pack-key>.png
//  Blue boxes are placeholders. To add the real photo, save it
//  as PNG with exactly the same file name — no code change needed.
// ============================================================

export interface Bi {
  en: string;
  fr: string;
}

/** One paragraph of catalogue text; `label` is the bold lead-in ("Ingredients", "Microwave"…). */
export interface Para {
  label?: string;
  text: string;
}

export interface PackStore {
  name: 'Costco' | 'Costco BC' | 'A1 Cash & Carry' | 'Sysco / Dot Foods';
  sku?: string;
}

export interface Pack {
  key: string;
  title: Bi;
  detail: Bi;
  weight?: string;
  image: string;
  /** false = blue placeholder waiting for a photo */
  photo: boolean;
  stores?: PackStore[];
  /** where the pack size comes from */
  source: 'master' | 'packaging';
  /** true when this pack's photo is the product's main photo */
  main?: boolean;
}

interface Nutrient {
  amount?: string;
  dv?: string;
}

export interface NutritionFacts {
  servingEn: string;
  servingFr: string;
  calories: number;
  fat: Nutrient;
  saturated: string;
  trans: string;
  saturatedTransDv?: string;
  carbs: string;
  carbsDv?: string;
  fibre: Nutrient;
  sugars: Nutrient;
  protein: string;
  cholesterol: Nutrient;
  sodium: Nutrient;
  potassium?: Nutrient;
  calcium: Nutrient;
  iron: Nutrient;
  vitaminA?: Nutrient;
  vitaminC?: Nutrient;
}

export type CategoryName = 'Kebabs' | 'Samosas' | 'Spring Rolls' | 'Wings & Drumsticks' | 'Burgers' | 'Breads';

export interface ProductCategory {
  name: CategoryName;
  nameFr: string;
  slug: string;
  tagline: Bi;
  description: Bi;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  /** previous URLs that should still open this product */
  oldSlugs: string[];
  name: Bi;
  subtitle?: Bi;
  category: CategoryName;
  image: string;
  /** false = main image is a blue placeholder */
  photo: boolean;
  tagline: Bi;
  description: Bi;
  tags: string[];
  /** page in the printed catalogue, if the product appears there */
  cataloguePage: number | null;
  ingredients: { en: Para[]; fr: Para[] };
  instructions: { en: Para[]; fr: Para[] };
  nutritionFacts: NutritionFacts | null;
  packs: Pack[];
}

// Packaging Nutrition Facts tables (transcribed from the packaging NFT images).
const KEBABS = (g: number) => ({
  servingEn: `Per 2 kebabs (${g} g)`,
  servingFr: `pour 2 kebabs (${g} g)`,
});

// Transcribed from the packaging Nutrition Facts tables (NFT_*.png).
const NFT = {
  // Sheekh and Charcoal kebabs share the same panel.
  // Sheekh and Charcoal kebabs share the same panel.
  beefSheekhCharcoalKebab: {
    ...KEBABS(86), calories: 180,
    fat: { amount: '10 g', dv: '14 %' }, saturated: '3 g', trans: '0 g', saturatedTransDv: '22 %',
    carbs: '4 g', fibre: { amount: '2 g', dv: '4 %' }, sugars: { amount: '0 g', dv: '0 %' },
    protein: '16 g', cholesterol: { amount: '50 mg' }, sodium: { amount: '480 mg', dv: '20 %' },
    potassium: { amount: '300 mg', dv: '6 %' }, calcium: { amount: '20 mg', dv: '2 %' }, iron: { amount: '2.5 mg', dv: '14 %' },
  },
  chickenSheekhCharcoalKebab: {
    ...KEBABS(86), calories: 160,
    fat: { amount: '9 g', dv: '12 %' }, saturated: '2 g', trans: '0 g', saturatedTransDv: '10 %',
    carbs: '4 g', fibre: { amount: '0 g', dv: '0 %' }, sugars: { amount: '0 g', dv: '0 %' },
    protein: '14 g', cholesterol: { amount: '50 mg' }, sodium: { amount: '460 mg', dv: '20 %' },
    potassium: { amount: '300 mg', dv: '9 %' }, calcium: { amount: '40 mg', dv: '3 %' }, iron: { amount: '1.5 mg', dv: '8 %' },
  },
  beefChapliKebab: {
    ...KEBABS(100), calories: 200,
    fat: { amount: '12 g', dv: '16 %' }, saturated: '4 g', trans: '0.2 g', saturatedTransDv: '21 %',
    carbs: '4 g', fibre: { amount: '2 g', dv: '7 %' }, sugars: { amount: '0 g', dv: '0 %' },
    protein: '20 g', cholesterol: { amount: '50 mg' }, sodium: { amount: '540 mg', dv: '23 %' },
    potassium: { amount: '350 mg', dv: '7 %' }, calcium: { amount: '40 mg', dv: '3 %' }, iron: { amount: '3 mg', dv: '17 %' },
  },
  chickenChapliKebab: {
    ...KEBABS(100), calories: 280,
    fat: { amount: '22 g', dv: '29 %' }, saturated: '6 g', trans: '0.2 g', saturatedTransDv: '31 %',
    carbs: '6 g', fibre: { amount: '2 g', dv: '7 %' }, sugars: { amount: '0 g', dv: '0 %' },
    protein: '16 g', cholesterol: { amount: '290 mg' }, sodium: { amount: '520 mg', dv: '23 %' },
    potassium: { amount: '300 mg', dv: '6 %' }, calcium: { amount: '60 mg', dv: '5 %' }, iron: { amount: '2 mg', dv: '11 %' },
  },
  chickenKaftaKebab: {
    ...KEBABS(80), calories: 160,
    fat: { amount: '9 g', dv: '12 %' }, saturated: '2 g', trans: '0 g', saturatedTransDv: '10 %',
    carbs: '4 g', fibre: { amount: '0 g', dv: '0 %' }, sugars: { amount: '0 g', dv: '0 %' },
    protein: '14 g', cholesterol: { amount: '50 mg' }, sodium: { amount: '420 mg', dv: '18 %' },
    potassium: { amount: '250 mg', dv: '5 %' }, calcium: { amount: '40 mg', dv: '3 %' }, iron: { amount: '1.5 mg', dv: '8 %' },
  },
  meatCharcoalKebab: {
    ...KEBABS(86), calories: 190,
    fat: { amount: '15 g', dv: '20 %' }, saturated: '6 g', trans: '0 g', saturatedTransDv: '30 %',
    carbs: '5 g', fibre: { amount: '1 g', dv: '4 %' }, sugars: { amount: '0 g', dv: '0 %' },
    protein: '12 g', cholesterol: { amount: '45 mg' }, sodium: { amount: '400 mg', dv: '17 %' },
    potassium: { amount: '50 mg', dv: '1 %' }, calcium: { amount: '20 mg', dv: '2 %' }, iron: { amount: '1.5 mg', dv: '8 %' },
  },
  chickenSpringRoll: {
    servingEn: 'Per 3 Spring Rolls (90 g)', servingFr: 'pour 3 Rouleau impérial (90 g)', calories: 130,
    fat: { amount: '3.5 g', dv: '5 %' }, saturated: '2 g', trans: '0 g', saturatedTransDv: '10 %',
    carbs: '17 g', fibre: { amount: '2 g', dv: '7 %' }, sugars: { amount: '1 g', dv: '1 %' },
    protein: '9 g', cholesterol: { amount: '20 mg', dv: '7 %' }, sodium: { amount: '400 mg', dv: '17 %' },
    potassium: { amount: '175 mg', dv: '4 %' }, calcium: { amount: '30 mg', dv: '2 %' }, iron: { amount: '0.75 mg', dv: '4 %' },
  },
  beefSpringRoll: {
    servingEn: 'Per 3 Spring Rolls (90 g)', servingFr: 'pour 3 Rouleau de printemps (90 g)', calories: 170,
    fat: { amount: '9 g', dv: '11 %' }, saturated: '4 g', trans: '0.5 g', saturatedTransDv: '23 %',
    carbs: '17 g', fibre: { amount: '2 g', dv: '7 %' }, sugars: { amount: '1 g', dv: '1 %' },
    protein: '7 g', cholesterol: { amount: '20 mg', dv: '6 %' }, sodium: { amount: '400 mg', dv: '17 %' },
    potassium: { amount: '175 mg', dv: '4 %' }, calcium: { amount: '30 mg', dv: '2 %' }, iron: { amount: '1 mg', dv: '6 %' },
  },
  chickenSamosa: {
    servingEn: 'Per 3 Samosas (90 g)', servingFr: 'pour 3 samosas (90 g)', calories: 150,
    fat: { amount: '3 g', dv: '4 %' }, saturated: '1.5 g', trans: '0 g', saturatedTransDv: '8 %',
    carbs: '15 g', fibre: { amount: '0 g', dv: '0 %' }, sugars: { amount: '0 g', dv: '0 %' },
    protein: '9 g', cholesterol: { amount: '15 mg' }, sodium: { amount: '375 mg', dv: '16 %' },
    potassium: { amount: '150 mg', dv: '3 %' }, calcium: { amount: '30 mg', dv: '2 %' }, iron: { amount: '0.6 mg', dv: '3 %' },
  },
} satisfies Record<string, NutritionFacts>;

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: "Kebabs",
    slug: "kababs",
    nameFr: "Kebabs",
    tagline: {
      en: "Handmade kebabs — fully cooked, heat and eat",
      fr: "Kebabs faits à la main — entièrement cuits, prêts à réchauffer"
    },
    description: {
      en: "Charcoal, sheekh, chapli and kafta kebabs made with halal chicken, beef, lamb and mutton — fully cooked and ready in minutes.",
      fr: "Kebabs au charbon, sheekh, chapli et kafta préparés avec du poulet, du bœuf, de l’agneau et du mouton halal — entièrement cuits et prêts en quelques minutes."
    },
    image: "/images/products/3D Box-Alshamas-BeefCharcoalKebab_8Pcs.png"
  },
  {
    name: "Samosas",
    slug: "samosas",
    nameFr: "Samosas",
    tagline: {
      en: "Crispy pastry with a savoury filling",
      fr: "Pâte croustillante et garniture savoureuse"
    },
    description: {
      en: "Handmade samosas with chicken, beef, mutton or vegetable fillings — cook from frozen.",
      fr: "Samosas faits à la main, garnis de poulet, de bœuf, de mouton ou de légumes — à cuire directement congelés."
    },
    image: "/images/products/3D Box-Alshamas-ChickenSamosa_40Pcs.png"
  },
  {
    name: "Spring Rolls",
    slug: "spring-rolls",
    nameFr: "Rouleaux impériaux",
    tagline: {
      en: "Thin, crispy rolls with savoury fillings",
      fr: "Rouleaux minces et croustillants à la garniture savoureuse"
    },
    description: {
      en: "Handmade spring rolls with chicken, beef, mutton or vegetable fillings — cook from frozen.",
      fr: "Rouleaux faits à la main, garnis de poulet, de bœuf, de mouton ou de légumes — à cuire directement congelés."
    },
    image: "/images/products/3D Box-Alshamas-ChickenSpringRoll_40Pcs.png"
  },
  {
    name: "Wings & Drumsticks",
    slug: "wings-drumsticks",
    nameFr: "Ailes et pilons",
    tagline: {
      en: "Spiced chicken — heat and eat",
      fr: "Poulet épicé — prêt à réchauffer"
    },
    description: {
      en: "Tandoori chicken wings and peri peri chicken drumsticks.",
      fr: "Ailes de poulet tandoori et pilons de poulet peri peri."
    },
    image: "/images/packs/tandoori-chicken-wings/main.png"
  },
  {
    name: "Burgers",
    slug: "burgers",
    nameFr: "Burgers",
    tagline: {
      en: "Handmade burger patties — fully cooked",
      fr: "Galettes de burger faites à la main — entièrement cuites"
    },
    description: {
      en: "Halal chicken and beef burger patties.",
      fr: "Galettes de burger au poulet et au bœuf halal."
    },
    image: "/images/packs/chicken-burger/main.png"
  },
  {
    name: "Breads",
    slug: "breads",
    nameFr: "Pains",
    tagline: {
      en: "Handmade naan and paratha",
      fr: "Naan et paratha faits à la main"
    },
    description: {
      en: "Tandoori naan and paratha — heat from frozen.",
      fr: "Naan tandoori et paratha — à réchauffer directement congelés."
    },
    image: "/images/packs/tandoori-naan/main.png"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "5",
    slug: "chicken-charcoal-kebab",
    oldSlugs: [
      "chicken-charcoal-kebab-560g"
    ],
    name: {
      en: "Chicken Charcoal Kebab",
      fr: "Kebab de poulet au charbon de bois"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-ChickenCharcoalKebab_8Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal chicken and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du poulet halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Chicken",
      "Charcoal Grilled"
    ],
    cataloguePage: 5,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal chicken, Onion, Water, Spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, green chilli, crushed chilli, red chilli powder, & carom seeds), Salt, Enriched wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Poulet halal, Oignon, Eau, Épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, gingembre en poudre, ail en poudre, curcuma, piment vert, piment broyé, piment rouge en poudre et graines de carambole), Sel, Farine de blé enrichie"
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour, grill the kebabs on BBQ till the internal temperature reaches 74°C (165°F)."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et une saveur fumée au charbon de bois, faites griller les kebabs au BBQ jusqu’à ce que la température interne atteigne 74 °C (165 °F)."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.chickenSheekhCharcoalKebab,
    packs: [
      {
        title: {
          en: "8 pieces",
          fr: "8 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "344 g",
        main: true,
        key: "8-pcs-344g-box",
        source: "master",
        image: "/images/packs/chicken-charcoal-kebab/8-pcs-344g-box.png",
        photo: true
      },
      {
        title: {
          en: "13 pieces",
          fr: "13 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "13-pcs-box",
        source: "master",
        image: "/images/packs/chicken-charcoal-kebab/13-pcs-box.png",
        photo: false
      },
      {
        title: {
          en: "20 pieces",
          fr: "20 morceaux"
        },
        detail: {
          en: "Bulk bag · 10 per case",
          fr: "Sac en vrac · 10 par caisse"
        },
        key: "20-pcs-bulk-bag",
        source: "master",
        image: "/images/packs/chicken-charcoal-kebab/20-pcs-bulk-bag.png",
        photo: false
      },
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Foodservice box · 2 per case",
          fr: "Boîte pour la restauration · 2 par caisse"
        },
        key: "40-pcs-foodservice-box",
        source: "master",
        image: "/images/packs/chicken-charcoal-kebab/40-pcs-foodservice-box.png",
        photo: false
      },
      {
        title: {
          en: "Costco case",
          fr: "Caisse Costco"
        },
        detail: {
          en: "Case",
          fr: "Caisse"
        },
        key: "costco-sku-1768778",
        stores: [
          {
            name: "Costco",
            sku: "1768778"
          }
        ],
        source: "master",
        image: "/images/packs/chicken-charcoal-kebab/costco-sku-1768778.png",
        photo: false
      },
      {
        title: {
          en: "Costco case",
          fr: "Caisse Costco"
        },
        detail: {
          en: "Case",
          fr: "Caisse"
        },
        key: "costco-bc-sku-2768779",
        stores: [
          {
            name: "Costco BC",
            sku: "2768779"
          }
        ],
        source: "master",
        image: "/images/packs/chicken-charcoal-kebab/costco-bc-sku-2768779.png",
        photo: false
      },
      {
        title: {
          en: "2 kg",
          fr: "2 kg"
        },
        detail: {
          en: "Case of 2 × 2 kg",
          fr: "Caisse de 2 × 2 kg"
        },
        weight: "2 kg",
        key: "a1-2kg-case",
        source: "master",
        image: "/images/packs/chicken-charcoal-kebab/a1-2kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "MEA081"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    slug: "beef-charcoal-kebab",
    oldSlugs: [
      "beef-charcoal-kebab-560g"
    ],
    name: {
      en: "Beef Charcoal Kebab",
      fr: "Kebab de bœuf au charbon de bois"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-BeefCharcoalKebab_8Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal beef and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du bœuf halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Beef",
      "Charcoal Grilled"
    ],
    cataloguePage: 6,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal beef, Onion, Water, Spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, green chili, crushed chili, red chili powder, carom seeds), Salt, Enriched wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Bœuf halal, Oignon, Eau, Épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, poudre de gingembre, poudre d’ail, curcuma, piment vert, piment broyé, poudre de piment rouge, graines d’ajowan), Sel, Farine de blé enrichie."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour, grill the kebabs on BBQ till the internal temperature reaches 74°C (165°F)."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et une saveur fumée au charbon de bois, faites griller les kebabs au BBQ jusqu’à ce que la température interne atteigne 74 °C (165 °F)."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.beefSheekhCharcoalKebab,
    packs: [
      {
        title: {
          en: "8 pieces",
          fr: "8 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "344 g",
        main: true,
        key: "8-pcs-344g-box",
        source: "master",
        image: "/images/packs/beef-charcoal-kebab/8-pcs-344g-box.png",
        photo: true
      },
      {
        title: {
          en: "13 pieces",
          fr: "13 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "13-pcs-box",
        source: "master",
        image: "/images/packs/beef-charcoal-kebab/13-pcs-box.png",
        photo: false
      },
      {
        title: {
          en: "20 pieces",
          fr: "20 morceaux"
        },
        detail: {
          en: "Bulk bag · 10 per case",
          fr: "Sac en vrac · 10 par caisse"
        },
        key: "20-pcs-bulk-bag",
        source: "master",
        image: "/images/packs/beef-charcoal-kebab/20-pcs-bulk-bag.png",
        photo: false
      },
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Foodservice box · 2 per case",
          fr: "Boîte pour la restauration · 2 par caisse"
        },
        key: "40-pcs-foodservice-box",
        source: "master",
        image: "/images/packs/beef-charcoal-kebab/40-pcs-foodservice-box.png",
        photo: false
      },
      {
        title: {
          en: "Costco case",
          fr: "Caisse Costco"
        },
        detail: {
          en: "Case",
          fr: "Caisse"
        },
        key: "costco-bc-sku-4768778",
        stores: [
          {
            name: "Costco BC",
            sku: "4768778"
          }
        ],
        source: "master",
        image: "/images/packs/beef-charcoal-kebab/costco-bc-sku-4768778.png",
        photo: false
      },
      {
        title: {
          en: "2 kg",
          fr: "2 kg"
        },
        detail: {
          en: "Case of 2 × 2 kg",
          fr: "Caisse de 2 × 2 kg"
        },
        weight: "2 kg",
        key: "a1-2kg-case",
        source: "master",
        image: "/images/packs/beef-charcoal-kebab/a1-2kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "MEA080"
          }
        ]
      }
    ]
  },
  {
    id: "10",
    slug: "tandoori-chicken-charcoal-kebab",
    oldSlugs: [
      "chicken-tandoori-kebab-560g"
    ],
    name: {
      en: "Tandoori Chicken Charcoal Kebab",
      fr: "Kebab de poulet tandoori au charbon"
    },
    category: "Kebabs",
    image: "/images/packs/tandoori-chicken-charcoal-kebab/main.png",
    photo: false,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal chicken, tandoori-style and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du poulet de style tandoori halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Chicken",
      "Tandoori"
    ],
    cataloguePage: 7,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal chicken, onion, water, spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, thai chilli, crushed chilli, red chilli powder & carom seeds), salt, Enriched wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Poulet halal, oignon, eau, épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, gingembre en poudre, ail en poudre, curcuma, piment thaï, piment broyé, piment rouge en poudre et graines de carambole), sel, farine de blé enrichie."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour, grill the kebabs on BBQ till the internal temperature reaches 74°C (165°F)."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et une saveur fumée au charbon de bois, faites griller les kebabs au BBQ jusqu’à ce que la température interne atteigne 74 °C (165 °F)."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 1 Kabab (43 g)",
      servingFr: "pour 1 kabab (43 g)",
      calories: 80,
      fat: {
        amount: "4.5 g",
        dv: "6 %"
      },
      saturated: "1 g",
      trans: "0 g",
      saturatedTransDv: "6 %",
      carbs: "2 g",
      fibre: {
        amount: "0 g",
        dv: "0 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "7 g",
      cholesterol: {
        amount: "25 mg",
        dv: "9 %"
      },
      sodium: {
        amount: "230 mg",
        dv: "10 %"
      },
      calcium: {
        amount: "20 mg",
        dv: "2 %"
      },
      iron: {
        amount: "0.75 mg",
        dv: "4 %"
      },
      potassium: {
        amount: "150 mg",
        dv: "3 %"
      }
    },
    packs: [
      {
        title: {
          en: "13 pieces",
          fr: "13 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "13-pcs-box",
        source: "master",
        image: "/images/packs/tandoori-chicken-charcoal-kebab/13-pcs-box.png",
        photo: false
      }
    ]
  },
  {
    id: "3",
    slug: "lamb-charcoal-kebab",
    oldSlugs: [
      "lamb-charcoal-grilled-kebab-2kg"
    ],
    name: {
      en: "Lamb Charcoal Kebab",
      fr: "Kebab d’agneau au charbon"
    },
    subtitle: {
      en: "Mutton & Chicken",
      fr: "Mouton et poulet"
    },
    category: "Kebabs",
    image: "/images/packs/lamb-charcoal-kebab/main.png",
    photo: false,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal mutton and chicken and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du mouton et poulet halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Lamb",
      "Charcoal Grilled"
    ],
    cataloguePage: 8,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal mutton, halal chicken, onion, water, spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, thai chilli, crushed chilli, red chilli powder & carom seeds), salt, wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Mouton halal, poulet halal, farine de blé, farine de pois chiche, oignon, sel, ail, gingembre, piment vert, coriandre, fenugrec, herbes et épices (piment rouge, poivre noir, cannelle, graines de cardamome, clous de girofle, cumin et gingembre sec)."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour, grill the kebabs on BBQ till the internal temperature reaches 74°C (165°F)."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et une saveur fumée au charbon de bois, faites griller les kebabs au BBQ jusqu’à ce que la température interne atteigne 74 °C (165 °F)."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 1 Kabab (43 g)",
      servingFr: "pour 1 kabab (43 g)",
      calories: 90,
      fat: {
        amount: "5 g",
        dv: "7 %"
      },
      saturated: "1.5 g",
      trans: "0.5 g",
      saturatedTransDv: "11 %",
      carbs: "2 g",
      fibre: {
        amount: "1 g",
        dv: "2 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "8 g",
      cholesterol: {
        amount: "25 mg",
        dv: "8 %"
      },
      sodium: {
        amount: "240 mg",
        dv: "10 %"
      },
      calcium: {
        amount: "10 mg",
        dv: "1 %"
      },
      iron: {
        amount: "1.25 mg",
        dv: "7 %"
      },
      potassium: {
        amount: "150 mg",
        dv: "3 %"
      }
    },
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Foodservice box · 2 per case",
          fr: "Boîte pour la restauration · 2 par caisse"
        },
        key: "40-pcs-foodservice-box",
        source: "master",
        image: "/images/packs/lamb-charcoal-kebab/40-pcs-foodservice-box.png",
        photo: false
      },
      {
        title: {
          en: "2 kg",
          fr: "2 kg"
        },
        detail: {
          en: "Case of 2 × 2 kg",
          fr: "Caisse de 2 × 2 kg"
        },
        weight: "2 kg",
        key: "a1-2kg-case",
        source: "master",
        image: "/images/packs/lamb-charcoal-kebab/a1-2kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "MEA082"
          }
        ]
      }
    ]
  },
  {
    id: "12",
    slug: "meat-charcoal-kebab",
    oldSlugs: [
      "meat-charcoal-kebab-cooked-560g"
    ],
    name: {
      en: "Meat Charcoal Kebab",
      fr: "Kebab de viande au charbon"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-MeatCharcoalKebab_8Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade and fully cooked — just heat and eat.",
      fr: "Fait à la main et entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Charcoal Grilled"
    ],
    cataloguePage: null,
    ingredients: {
      en: [],
      fr: []
    },
    instructions: {
      en: [],
      fr: []
    },
    nutritionFacts: NFT.meatCharcoalKebab,
    packs: [
      {
        title: {
          en: "8 pieces",
          fr: "8 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "344 g",
        main: true,
        key: "8-pcs-344g-box",
        source: "packaging",
        image: "/images/packs/meat-charcoal-kebab/8-pcs-344g-box.png",
        photo: true
      },
      {
        title: {
          en: "13 pieces",
          fr: "13 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "13-pcs-box",
        source: "master",
        image: "/images/packs/meat-charcoal-kebab/13-pcs-box.png",
        photo: false
      },
      {
        title: {
          en: "20 pieces",
          fr: "20 morceaux"
        },
        detail: {
          en: "Bulk bag · 10 per case",
          fr: "Sac en vrac · 10 par caisse"
        },
        key: "20-pcs-bulk-bag",
        source: "master",
        image: "/images/packs/meat-charcoal-kebab/20-pcs-bulk-bag.png",
        photo: false
      }
    ]
  },
  {
    id: "2",
    slug: "chicken-sheekh-kebab",
    oldSlugs: [
      "chicken-sheekh-kebab-560g"
    ],
    name: {
      en: "Chicken Sheekh Kebab",
      fr: "Sheekh kebab au poulet"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-ChickenSheekhKebab_8Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal chicken and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du poulet halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Bestseller",
      "Halal",
      "Chicken"
    ],
    cataloguePage: 9,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal Chicken, Onion, Corn Flour, Gram Flour, Wheat Flour, Garlic, Ginger, Salt, Green Chilli, Coriander, Herbs and Spices (Red Chilli, Black Pepper, Cinnamon, Cardamom Seeds, Cloves, Cumin & Dry Ginger)."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Poulet halal, oignon, farine de maïs, farine de pois chiche, farine de blé, ail, gingembre, sel, piment vert, coriandre, herbes et épices (piment rouge, poivre noir, cannelle, graine de cardamome, clous de girofle, cumin et gingembre sec)."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour, grill the kebabs on BBQ till the internal temperature reaches 74°C (165°F)."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et une saveur fumée au charbon de bois, faites griller les kebabs au BBQ jusqu’à ce que la température interne atteigne 74 °C (165 °F)."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.chickenSheekhCharcoalKebab,
    packs: [
      {
        title: {
          en: "8 pieces",
          fr: "8 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "344 g",
        main: true,
        key: "8-pcs-344g-box",
        source: "packaging",
        image: "/images/packs/chicken-sheekh-kebab/8-pcs-344g-box.png",
        photo: true
      },
      {
        title: {
          en: "13 pieces",
          fr: "13 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "13-pcs-box",
        source: "master",
        image: "/images/packs/chicken-sheekh-kebab/13-pcs-box.png",
        photo: false
      }
    ]
  },
  {
    id: "1",
    slug: "beef-sheekh-kebab",
    oldSlugs: [
      "beef-sheekh-kebab-560g"
    ],
    name: {
      en: "Beef Sheekh Kebab",
      fr: "Sheekh kebab au bœuf"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-BeefSheekhKebab_8Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal beef and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du bœuf halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Beef"
    ],
    cataloguePage: 10,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal Beef, Onion, Corn Flour, Gram Flour, Wheat Flour, Garlic, Ginger, Salt, Green Chilli, Coriander, Herbs and Spices (Red Chilli, Black Pepper, Cinnamon, Cardamom Seeds, Cloves, Cumin & Dry Ginger)."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Bœuf halal, oignon, farine de maïs, farine de pois chiche, farine de blé, ail, gingembre, sel, piment vert, coriandre, herbes et épices (piment rouge, poivre noir, cannelle, graine de cardamome, clous de girofle, cumin et gingembre sec)."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour, grill the kebabs on BBQ till the internal temperature reaches 74°C (165°F)."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et une saveur fumée au charbon de bois, faites griller les kebabs au BBQ jusqu’à ce que la température interne atteigne 74 °C (165 °F)."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.beefSheekhCharcoalKebab,
    packs: [
      {
        title: {
          en: "8 pieces",
          fr: "8 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "344 g",
        main: true,
        key: "8-pcs-344g-box",
        source: "packaging",
        image: "/images/packs/beef-sheekh-kebab/8-pcs-344g-box.png",
        photo: true
      },
      {
        title: {
          en: "13 pieces",
          fr: "13 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "13-pcs-box",
        source: "master",
        image: "/images/packs/beef-sheekh-kebab/13-pcs-box.png",
        photo: false
      }
    ]
  },
  {
    id: "27",
    slug: "lamb-sheekh-kebab",
    oldSlugs: [],
    name: {
      en: "Lamb Sheekh Kebab",
      fr: "Sheekh kebab d’agneau"
    },
    category: "Kebabs",
    image: "/images/packs/lamb-sheekh-kebab/main.png",
    photo: false,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal lamb and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du agneau halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Lamb"
    ],
    cataloguePage: 11,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal Lamb, Wheat Flour, Gram Flour, Onion, Salt, Garlic, Ginger, Green Chilli, Coriander, Fenugreek, Herbs and Spices (Red Chilli, Black Pepper, Cinnamon, Cardamom Seeds, Cloves & Cumin)."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Agneau halal, farine de blé, farine de pois chiche, oignon, sel, ail, gingembre, piment vert, coriandre, fenugrec, herbes et épices (piment rouge, poivre noir, cannelle, graines de cardamome, clous de girofle et cumin)."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour, grill the kebabs on BBQ till the internal temperature reaches 74°C (165°F)."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et une saveur fumée au charbon de bois, faites griller les kebabs au BBQ jusqu’à ce que la température interne atteigne 74 °C (165 °F)."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 2 Kebabs (87 g)",
      servingFr: "Pour 2 brochettes (87 g)",
      calories: 210,
      fat: {
        amount: "13 g",
        dv: "20 %"
      },
      saturated: "6 g",
      trans: "0 g",
      saturatedTransDv: "29 %",
      carbs: "14 g",
      fibre: {
        amount: "2 g",
        dv: "7 %"
      },
      sugars: {
        amount: "2 g"
      },
      protein: "11 g",
      cholesterol: {
        amount: "57 mg",
        dv: "19 %"
      },
      sodium: {
        amount: "540 mg",
        dv: "23 %"
      },
      calcium: {
        dv: "3 %"
      },
      iron: {
        dv: "8 %"
      },
      carbsDv: "5 %",
      vitaminA: {
        dv: "2 %"
      },
      vitaminC: {
        dv: "2 %"
      }
    },
    packs: []
  },
  {
    id: "28",
    slug: "meat-sheekh-kebab",
    oldSlugs: [],
    name: {
      en: "Meat Sheekh Kebab",
      fr: "Sheekh kebab à la viande"
    },
    category: "Kebabs",
    image: "/images/packs/meat-sheekh-kebab/main.png",
    photo: false,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade and fully cooked — just heat and eat.",
      fr: "Fait à la main et entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal"
    ],
    cataloguePage: null,
    ingredients: {
      en: [],
      fr: []
    },
    instructions: {
      en: [],
      fr: []
    },
    nutritionFacts: null,
    packs: [
      {
        title: {
          en: "13 pieces",
          fr: "13 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "13-pcs-box",
        source: "master",
        image: "/images/packs/meat-sheekh-kebab/13-pcs-box.png",
        photo: false
      }
    ]
  },
  {
    id: "9",
    slug: "chicken-chapli-kebab",
    oldSlugs: [
      "chicken-chapli-kebab-1kg",
      "chicken-chappal-kebab-450g"
    ],
    name: {
      en: "Chicken Chapli Kebab",
      fr: "Chapli kebab au poulet"
    },
    subtitle: {
      en: "Also sold as Chicken Chappal Kebab",
      fr: "Aussi vendu sous le nom Chappal kebab au poulet"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-ChickenChapliKebab_8Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal chicken and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du poulet halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Bestseller",
      "Halal",
      "Chicken"
    ],
    cataloguePage: 12,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal chicken, Water, Onion, Spices (black pepper, cinnamon, green chili, red chili powder, crushed chili, cumin powder, cumin seeds, ginger powder, garlic powder, cardamom seeds, carom seeds, cloves, turmeric, coriander powder, fenugreek), Enriched wheat flour, Whole coriander, Salt."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Poulet halal, Eau, Oignon, Épices (poivre noir, cannelle, piment vert, poudre de piment rouge, piment broyé, poudre de cumin, graines de cumin, poudre de gingembre, poudre d’ail, graines de cardamome, graines d’ajowan, clous de girofle, curcuma, poudre de coriandre, fenugrec), Farine de blé enrichie, Coriandre entière, Sel."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Keep frozen. Must be cooked thoroughly. Do not thaw. Product must be cooked to an internal temperature of 165°F (74°C) as measured by a meat thermometer."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          text: "These instructions are guidelines only. Individual appliances vary."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Garder congelé. Doit être bien cuit. Ne pas décongeler. Le produit doit être cuit jusqu’à une température interne de 165°F (74°C), mesurée à l’aide d’un thermomètre à viande."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          text: "Ces instructions sont fournies à titre indicatif seulement. Les appareils varient."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.chickenChapliKebab,
    packs: [
      {
        title: {
          en: "8 pieces",
          fr: "8 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "400 g",
        main: true,
        key: "8-pcs-400g-box",
        source: "master",
        image: "/images/packs/chicken-chapli-kebab/8-pcs-400g-box.png",
        photo: true
      },
      {
        title: {
          en: "6 pieces",
          fr: "6 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "6-pcs-box",
        source: "master",
        image: "/images/packs/chicken-chapli-kebab/6-pcs-box.png",
        photo: false
      },
      {
        title: {
          en: "1 kg",
          fr: "1 kg"
        },
        detail: {
          en: "Case of 2 × 1 kg",
          fr: "Caisse de 2 × 1 kg"
        },
        weight: "1 kg",
        key: "a1-1kg-case",
        source: "master",
        image: "/images/packs/chicken-chapli-kebab/a1-1kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "CHK237"
          }
        ]
      }
    ]
  },
  {
    id: "8",
    slug: "beef-chapli-kebab",
    oldSlugs: [
      "beef-chapli-kebab-1kg",
      "beef-chappal-kebab-450g"
    ],
    name: {
      en: "Beef Chapli Kebab",
      fr: "Chapli kebab au bœuf"
    },
    subtitle: {
      en: "Also sold as Beef Chappal Kebab",
      fr: "Aussi vendu sous le nom Chappal kebab au bœuf"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-BeefChapliKebab_8Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal beef and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du bœuf halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Beef"
    ],
    cataloguePage: 13,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal beef, Water, Onion, Spices (black pepper, cinnamon, green chili, red chili powder, crushed chili, cumin powder, cumin seeds, ginger powder, garlic powder, cardamom seeds, carom seeds, cloves, turmeric, coriander powder, fenugreek), Enriched wheat flour, Whole coriander, Salt."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Bœuf halal, Eau, Oignon, Épices (poivre noir, cannelle, piment vert, poudre de piment rouge, piment broyé, poudre de cumin, graines de cumin, poudre de gingembre, poudre d’ail, graines de cardamome, graines d’ajowan, clous de girofle, curcuma, poudre de coriandre, fenugrec), Farine de blé enrichie, Coriandre entière, Sel."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Keep frozen. Must be cooked thoroughly. Do not thaw. Product must be cooked to an internal temperature of 165°F (74°C) as measured by a meat thermometer."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          text: "These instructions are guidelines only. Individual appliances vary."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Garder congelé. Doit être bien cuit. Ne pas décongeler. Le produit doit être cuit jusqu’à une température interne de 165°F (74°C), mesurée à l’aide d’un thermomètre à viande."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          text: "Ces instructions sont fournies à titre indicatif seulement. Les appareils varient."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.beefChapliKebab,
    packs: [
      {
        title: {
          en: "8 pieces",
          fr: "8 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "400 g",
        main: true,
        key: "8-pcs-400g-box",
        source: "master",
        image: "/images/packs/beef-chapli-kebab/8-pcs-400g-box.png",
        photo: true
      },
      {
        title: {
          en: "6 pieces",
          fr: "6 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        key: "6-pcs-box",
        source: "master",
        image: "/images/packs/beef-chapli-kebab/6-pcs-box.png",
        photo: false
      },
      {
        title: {
          en: "1 kg",
          fr: "1 kg"
        },
        detail: {
          en: "Case of 2 × 1 kg",
          fr: "Caisse de 2 × 1 kg"
        },
        weight: "1 kg",
        key: "a1-1kg-case",
        source: "master",
        image: "/images/packs/beef-chapli-kebab/a1-1kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "MEA440"
          }
        ]
      }
    ]
  },
  {
    id: "29",
    slug: "mutton-chapli-kebab",
    oldSlugs: [],
    name: {
      en: "Mutton Chapli Kebab",
      fr: "Chapli kebab de mouton"
    },
    category: "Kebabs",
    image: "/images/packs/mutton-chapli-kebab/main.png",
    photo: false,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal mutton and chicken and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du mouton et poulet halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Mutton"
    ],
    cataloguePage: 14,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal Mutton, Halal Chicken, Onion, Wheat Flour, Gram Flour, Tomato, Salt, Garlic, Ginger, Coriander, Cumin, Egg, Green Onion, Herbs and Spices (Red Chilli, Green Chilli, Fenugreek, Cinnamon, Turmeric, Black Pepper, Bay Leaf, Cardamom, Nutmeg, Fennel, Pomegranate, Sunflower Oil, Cloves, Star Aniseed)."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Agneau halal, poulet halal, oignon, farine de blé, farine de pois chiche, tomate, sel, ail, gingembre, coriandre, cumin, œuf, oignon vert, herbes et épices (piment rouge, piment vert, fenugrec, cannelle, curcuma, poivre noir, feuille de laurier, cardamome, muscade, fenouil, grenade, huile de tournesol, clous de girofle, anis étoilé)."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Keep frozen. Must be cooked thoroughly. Do not thaw. Product must be cooked to an internal temperature of 165°F (74°C) as measured by a meat thermometer."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in microwave (1000 watts) for 2-3 minutes."
        },
        {
          text: "These instructions are guidelines only. Individual appliances vary."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Garder congelé. Doit être bien cuit. Ne pas décongeler. Le produit doit être cuit jusqu’à une température interne de 165°F (74°C), mesurée à l’aide d’un thermomètre à viande."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez aussi réchauffer au micro-ondes (1 000 W) pendant 2 à 3 minutes."
        },
        {
          text: "Ces instructions sont fournies à titre indicatif seulement. Les appareils varient."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving Size 1 kebab (50 g)",
      servingFr: "Portion 1 kebab (50 g)",
      calories: 115,
      fat: {
        amount: "6.5 g",
        dv: "12 %"
      },
      saturated: "2 g",
      trans: "0 g",
      saturatedTransDv: "13 %",
      carbs: "6 g",
      fibre: {
        amount: "1 g",
        dv: "2 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "8 g",
      cholesterol: {
        amount: "30 mg",
        dv: "0 %"
      },
      sodium: {
        amount: "280 mg",
        dv: "12 %"
      },
      calcium: {
        amount: "0 mg",
        dv: "2 %"
      },
      iron: {
        amount: "1.5 mg",
        dv: "8 %"
      },
      potassium: {
        amount: "175 mg",
        dv: "5 %"
      }
    },
    packs: []
  },
  {
    id: "11",
    slug: "chicken-kafta-kebab",
    oldSlugs: [
      "chicken-kafta-kebab-400g"
    ],
    name: {
      en: "Chicken Kafta Kebab",
      fr: "Kebab kafta au poulet"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-ChickenKaftaKebab_10Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal chicken and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du poulet halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Chicken"
    ],
    cataloguePage: 15,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal chicken, Yellow spilt peas, Water, Onion, Fresh parsley, Spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, green chili, crushed chili, red chili powder & carom seeds), Whole coriander, Salt, Enriched wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Poulet halal, Pois cassés jaunes, Eau, Oignon, Persil frais, Épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, poudre de gingembre, poudre d’ail, curcuma, piment vert, piment broyé, poudre de piment rouge & graines d’ajowan), Coriandre entière, Sel, Farine de blé enrichie."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Keep frozen. Do not thaw."
        },
        {
          label: "BBQ/Grill",
          text: "Preheat to medium-high (450°F / 230°C). Oil the grates. Grill frozen kebabs, turning occasionally, until the internal temperature reaches 165°F (74°C)—about 6-8 minutes."
        },
        {
          label: "Microwave (1000 W)",
          text: "Place 1-2 frozen kebabs on a microwave-safe plate and cover loosely. Heat on HIGH for 2-3 minutes, or until the internal temperature reaches 165°F (74°C). Let stand 1 minute before serving."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils varient; ces indications sont fournies à titre indicatif seulement."
        },
        {
          text: "Garder congelé. Ne pas décongeler."
        },
        {
          label: "BBQ/Gril",
          text: "Préchauffer à intensité moyenne-élevée (450 °F / 230 °C). Huiler les grilles. Faire griller les kebabs congelés en les retournant de temps à autre, jusqu’à ce que la température interne atteigne 165 °F (74 °C) — environ 6 à 8 minutes."
        },
        {
          label: "Micro-ondes (1 000 W)",
          text: "Déposer 1 à 2 kebabs congelés sur une assiette allant au micro-ondes et couvrir légèrement. Chauffer à puissance ÉLEVÉE pendant 2 à 3 minutes, ou jusqu’à ce que la température interne atteigne 165 °F (74 °C). Laisser reposer 1 minute avant de servir."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.chickenKaftaKebab,
    packs: [
      {
        title: {
          en: "10 pieces",
          fr: "10 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "400 g",
        main: true,
        key: "10-pcs-box",
        source: "master",
        image: "/images/packs/chicken-kafta-kebab/10-pcs-box.png",
        photo: true
      }
    ]
  },
  {
    id: "30",
    slug: "beef-kafta-kebab",
    oldSlugs: [],
    name: {
      en: "Beef Kafta Kebab",
      fr: "Kebab kafta au bœuf"
    },
    category: "Kebabs",
    image: "/images/products/3D Box-Alshamas-BeefKaftaKebab_10Pcs.png",
    photo: true,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade with halal beef and a blend of spices, fully cooked — just heat and eat.",
      fr: "Préparé à la main avec du bœuf halal et un mélange d’épices, entièrement cuit — il suffit de réchauffer et de déguster."
    },
    tags: [
      "Halal",
      "Beef"
    ],
    cataloguePage: 16,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal beef, Yellow spilt peas, Water, Onion, Fresh parsley, Spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, green chili, crushed chili, red chili powder & carom seeds), Whole coriander, Salt, Enriched wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Bœuf halal, Pois cassés jaunes, Eau, Oignon, Persil frais, Épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, poudre de gingembre, poudre d’ail, curcuma, piment vert, piment broyé, poudre de piment rouge & graines d’ajowan), Coriandre entière, Sel, Farine de blé enrichie."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Keep frozen. Do not thaw."
        },
        {
          label: "BBQ/Grill",
          text: "Preheat to medium-high (450°F / 230°C). Oil the grates. Grill frozen kebabs, turning occasionally, until the internal temperature reaches 165°F (74°C)—about 6-8 minutes."
        },
        {
          label: "Microwave (1000 W)",
          text: "Place 1-2 frozen kebabs on a microwave-safe plate and cover loosely. Heat on HIGH for 2-3 minutes, or until the internal temperature reaches 165°F (74°C). Let stand 1 minute before serving."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils varient; ces indications sont fournies à titre indicatif seulement."
        },
        {
          text: "Garder congelé. Ne pas décongeler."
        },
        {
          label: "BBQ/Gril",
          text: "Préchauffer à intensité moyenne-élevée (450 °F / 230 °C). Huiler les grilles. Faire griller les kebabs congelés en les retournant de temps à autre, jusqu’à ce que la température interne atteigne 165 °F (74 °C) — environ 6 à 8 minutes."
        },
        {
          label: "Micro-ondes (1 000 W)",
          text: "Déposer 1 à 2 kebabs congelés sur une assiette allant au micro-ondes et couvrir légèrement. Chauffer à puissance ÉLEVÉE pendant 2 à 3 minutes, ou jusqu’à ce que la température interne atteigne 165 °F (74 °C). Laisser reposer 1 minute avant de servir."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving size 2 kebabs (76 g)",
      servingFr: "Portion 2 kebabs (76 g)",
      calories: 150,
      fat: {
        amount: "10 g",
        dv: "13 %"
      },
      saturated: "3 g",
      trans: "1 g",
      saturatedTransDv: "20 %",
      carbs: "4 g",
      fibre: {
        amount: "2 g",
        dv: "7 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "15 g",
      cholesterol: {
        amount: "40 mg"
      },
      sodium: {
        amount: "420 mg",
        dv: "18 %"
      },
      calcium: {
        amount: "20 mg",
        dv: "2 %"
      },
      iron: {
        amount: "2.4 mg",
        dv: "13 %"
      },
      potassium: {
        amount: "290 mg",
        dv: "9 %"
      }
    },
    packs: [
      {
        title: {
          en: "10 pieces",
          fr: "10 morceaux"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "400 g",
        main: true,
        key: "10-pcs-box",
        source: "master",
        image: "/images/packs/beef-kafta-kebab/10-pcs-box.png",
        photo: true
      }
    ]
  },
  {
    id: "26",
    slug: "chicken-samosa",
    oldSlugs: [
      "chicken-samosa-1-5kg"
    ],
    name: {
      en: "Chicken Samosa",
      fr: "Samosa au poulet"
    },
    category: "Samosas",
    image: "/images/products/3D Box-Alshamas-ChickenSamosa_40Pcs.png",
    photo: true,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade samosas with a crisp pastry and a spiced halal chicken filling. Cook from frozen.",
      fr: "Samosas faits à la main, pâte croustillante et garniture au poulet halal épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Chicken"
    ],
    cataloguePage: 17,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal chicken, Onion, Water, Spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, green chili, crushed chili, red chili powder), Salt, Enriched wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Poulet halal, Oignon, Eau, Épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, poudre de gingembre, poudre d’ail, curcuma, piment vert, piment broyé, poudre de piment rouge), Sel, Farine de blé enrichie."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.chickenSamosa,
    packs: [
      {
        title: {
          en: "10 pieces",
          fr: "10 morceaux"
        },
        detail: {
          en: "Bag · 12 per case",
          fr: "Sachet · 12 par caisse"
        },
        weight: "300 g",
        key: "10-pcs-bag",
        source: "master",
        image: "/images/packs/chicken-samosa/10-pcs-bag.png",
        photo: true
      },
      {
        title: {
          en: "20 pieces",
          fr: "20 morceaux"
        },
        detail: {
          en: "Box · 6 per case",
          fr: "Boîte · 6 par caisse"
        },
        key: "20-pcs-box",
        source: "master",
        image: "/images/packs/chicken-samosa/20-pcs-box.png",
        photo: false
      },
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        weight: "1.2 kg",
        main: true,
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/chicken-samosa/40-pcs-container.png",
        photo: true
      },
      {
        title: {
          en: "25 pieces",
          fr: "25 morceaux"
        },
        detail: {
          en: "Restaurant bag · 10 per case (250 pieces)",
          fr: "Sac pour restaurants · 10 par caisse (250 morceaux)"
        },
        key: "25-pcs-restaurant-bag",
        source: "master",
        image: "/images/packs/chicken-samosa/25-pcs-restaurant-bag.png",
        photo: false
      },
      {
        title: {
          en: "50 pieces",
          fr: "50 morceaux"
        },
        detail: {
          en: "Case",
          fr: "Caisse"
        },
        key: "costco-50-pcs",
        stores: [
          {
            name: "Costco",
            sku: "3768778"
          }
        ],
        source: "master",
        image: "/images/packs/chicken-samosa/costco-50-pcs.png",
        photo: false
      },
      {
        title: {
          en: "100 pieces · 3 kg",
          fr: "100 morceaux · 3 kg"
        },
        detail: {
          en: "Case · 4 × 25",
          fr: "Caisse · 4 × 25"
        },
        key: "costco-bc-100-pcs-3kg",
        stores: [
          {
            name: "Costco BC",
            sku: "3778778"
          }
        ],
        source: "master",
        image: "/images/packs/chicken-samosa/costco-bc-100-pcs-3kg.png",
        photo: false
      },
      {
        title: {
          en: "3 kg",
          fr: "3 kg"
        },
        detail: {
          en: "Case · 40 g samosas",
          fr: "Caisse · samosas de 40 g"
        },
        weight: "3 kg",
        key: "sysco-3kg-case",
        source: "master",
        image: "/images/packs/chicken-samosa/sysco-3kg-case.png",
        photo: false,
        stores: [
          {
            name: "Sysco / Dot Foods",
            sku: "7398471"
          }
        ]
      },
      {
        title: {
          en: "1.2 kg",
          fr: "1,2 kg"
        },
        detail: {
          en: "Case of 6 × 1.2 kg",
          fr: "Caisse de 6 × 1,2 kg"
        },
        weight: "1.2 kg",
        key: "a1-1-2kg-case",
        source: "master",
        image: "/images/packs/chicken-samosa/a1-1-2kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "CHK223"
          }
        ]
      },
      {
        title: {
          en: "Jumbo · 1.5 kg",
          fr: "Jumbo · 1,5 kg"
        },
        detail: {
          en: "Case of 2 × 1.5 kg",
          fr: "Caisse de 2 × 1,5 kg"
        },
        weight: "1.5 kg",
        key: "a1-jumbo-1-5kg-case",
        source: "master",
        image: "/images/packs/chicken-samosa/a1-jumbo-1-5kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "CHK238"
          }
        ]
      }
    ]
  },
  {
    id: "31",
    slug: "beef-samosa",
    oldSlugs: [],
    name: {
      en: "Beef Samosa",
      fr: "Samosa au bœuf"
    },
    category: "Samosas",
    image: "/images/products/3D Box-Alshamas-BeefSamosa_40Pcs.png",
    photo: true,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade samosas with a crisp pastry and a spiced halal beef filling. Cook from frozen.",
      fr: "Samosas faits à la main, pâte croustillante et garniture au bœuf halal épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Beef"
    ],
    cataloguePage: 18,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal Beef, Onion, Water, Spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, green chili, red chili powder), Salt, Wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Bœuf halal, Oignon, Eau, Épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, poudre de gingembre, poudre d’ail, curcuma, piment vert, poudre de piment rouge), Sel, Farine de blé."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving size 3 samosas per (90 g)",
      servingFr: "Portion 3 samosas par (90 g)",
      calories: 160,
      fat: {
        amount: "3.5 g",
        dv: "5 %"
      },
      saturated: "1 g",
      trans: "0 g",
      saturatedTransDv: "6 %",
      carbs: "26 g",
      fibre: {
        amount: "0 g",
        dv: "0 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "7 g",
      cholesterol: {
        amount: "15 mg",
        dv: "5 %"
      },
      sodium: {
        amount: "500 mg",
        dv: "22 %"
      },
      calcium: {
        amount: "30 mg",
        dv: "2 %"
      },
      iron: {
        amount: "0.9 mg",
        dv: "6 %"
      },
      potassium: {
        amount: "180 mg",
        dv: "4 %"
      }
    },
    packs: [
      {
        title: {
          en: "10 pieces",
          fr: "10 morceaux"
        },
        detail: {
          en: "Bag · 12 per case",
          fr: "Sachet · 12 par caisse"
        },
        weight: "300 g",
        key: "10-pcs-bag",
        source: "master",
        image: "/images/packs/beef-samosa/10-pcs-bag.png",
        photo: true
      },
      {
        title: {
          en: "20 pieces",
          fr: "20 morceaux"
        },
        detail: {
          en: "Box · 6 per case",
          fr: "Boîte · 6 par caisse"
        },
        key: "20-pcs-box",
        source: "master",
        image: "/images/packs/beef-samosa/20-pcs-box.png",
        photo: false
      },
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        weight: "1.2 kg",
        main: true,
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/beef-samosa/40-pcs-container.png",
        photo: true
      },
      {
        title: {
          en: "25 pieces",
          fr: "25 morceaux"
        },
        detail: {
          en: "Restaurant bag · 10 per case (250 pieces)",
          fr: "Sac pour restaurants · 10 par caisse (250 morceaux)"
        },
        key: "25-pcs-restaurant-bag",
        source: "master",
        image: "/images/packs/beef-samosa/25-pcs-restaurant-bag.png",
        photo: false
      },
      {
        title: {
          en: "3 kg",
          fr: "3 kg"
        },
        detail: {
          en: "Case · 40 g samosas",
          fr: "Caisse · samosas de 40 g"
        },
        weight: "3 kg",
        key: "sysco-3kg-case",
        source: "master",
        image: "/images/packs/beef-samosa/sysco-3kg-case.png",
        photo: false,
        stores: [
          {
            name: "Sysco / Dot Foods",
            sku: "7398463"
          }
        ]
      },
      {
        title: {
          en: "1.2 kg",
          fr: "1,2 kg"
        },
        detail: {
          en: "Case of 6 × 1.2 kg",
          fr: "Caisse de 6 × 1,2 kg"
        },
        weight: "1.2 kg",
        key: "a1-1-2kg-case",
        source: "master",
        image: "/images/packs/beef-samosa/a1-1-2kg-case.png",
        photo: false,
        stores: [
          {
            name: "A1 Cash & Carry",
            sku: "MEA420"
          }
        ]
      }
    ]
  },
  {
    id: "32",
    slug: "chicken-tandoori-samosa",
    oldSlugs: [],
    name: {
      en: "Chicken Tandoori Samosa",
      fr: "Samosa au poulet tandoori"
    },
    category: "Samosas",
    image: "/images/products/3D Box-Alshamas-ChickenTandooriSamosa_40Pcs.png",
    photo: true,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade samosas with a crisp pastry and a spiced tandoori chicken filling. Cook from frozen.",
      fr: "Samosas faits à la main, pâte croustillante et garniture au poulet tandoori épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Chicken",
      "Tandoori"
    ],
    cataloguePage: 19,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal chicken, Onion, Salt, Green Chili, Red chili powder, Whole cumin, Crushed chili, Whole coriander, Tandoori masala seasoning [paprika, salt, cumin, coriander powder, garlic powder, onion powder, ginger powder, black pepper, chili powder, sugar, clove, cinnamon, cardamom, citric acid, fennel, mustard powder, fenugreek, nutmeg, colour (mustard)], Fenugreek, Garlic powder, Coriander powder, Cumin powder, Ginger powder."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Poulet halal, Oignon, Sel, Piment vert, Poudre de piment rouge, Cumin entier, Piment broyé, Coriandre entière, Assaisonnement tandoori masala [paprika, sel, cumin, poudre de coriandre, poudre d’ail, poudre d’oignon, poudre de gingembre, poivre noir, poudre de piment, sucre, clou de girofle, cannelle, cardamome, acide citrique, fenouil, poudre de moutarde, fenugrec, muscade, couleur (moutarde)], Fenugrec, Poudre d’ail, Poudre de coriandre, Poudre de cumin, Poudre de gingembre."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving size 3 samosas per (90 g)",
      servingFr: "Portion 3 samosas par (90 g)",
      calories: 150,
      fat: {
        amount: "3 g",
        dv: "4 %"
      },
      saturated: "0.6 g",
      trans: "0 g",
      saturatedTransDv: "3 %",
      carbs: "24 g",
      fibre: {
        amount: "0 g",
        dv: "0 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "6 g",
      cholesterol: {
        amount: "15 mg",
        dv: "5 %"
      },
      sodium: {
        amount: "390 mg",
        dv: "17 %"
      },
      calcium: {
        amount: "30 mg",
        dv: "2 %"
      },
      iron: {
        amount: "0.9 mg",
        dv: "5 %"
      },
      potassium: {
        amount: "150 mg",
        dv: "3 %"
      }
    },
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        weight: "1.2 kg",
        main: true,
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/chicken-tandoori-samosa/40-pcs-container.png",
        photo: true
      }
    ]
  },
  {
    id: "33",
    slug: "chicken-tikka-samosa",
    oldSlugs: [],
    name: {
      en: "Chicken Tikka Samosa",
      fr: "Samosa au poulet tikka"
    },
    category: "Samosas",
    image: "/images/products/3D Box-Alshamas-ChickenTikkaSamosa_40Pcs.png",
    photo: true,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade samosas with a crisp pastry and a spiced chicken tikka filling. Cook from frozen.",
      fr: "Samosas faits à la main, pâte croustillante et garniture au poulet tikka épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Chicken"
    ],
    cataloguePage: 20,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal chicken, Onion, Salt, Green Chili, Red chili powder, Whole cumin, Crushed chili, Whole coriander, Tandoori masala seasoning [paprika, salt, cumin, coriander powder, garlic powder, onion powder, ginger powder, black pepper, chili powder, sugar, clove, cinnamon, cardamom, citric acid, fennel, mustard powder, fenugreek, nutmeg, colour (mustard)], Fenugreek, Garlic powder, Coriander powder, Cumin powder, Ginger powder."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Poulet halal, Oignon, Sel, Piment vert, Poudre de piment rouge, Cumin entier, Piment broyé, Coriandre entière, Assaisonnement tandoori masala [paprika, sel, cumin, poudre de coriandre, poudre d’ail, poudre d’oignon, poudre de gingembre, poivre noir, poudre de piment, sucre, clou de girofle, cannelle, cardamome, acide citrique, fenouil, poudre de moutarde, fenugrec, muscade, couleur (moutarde)], Fenugrec, Poudre d’ail, Poudre de coriandre, Poudre de cumin, Poudre de gingembre."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving size 3 samosas per (90 g)",
      servingFr: "Portion 3 samosas par (90 g)",
      calories: 150,
      fat: {
        amount: "3 g",
        dv: "4 %"
      },
      saturated: "0.6 g",
      trans: "0 g",
      saturatedTransDv: "3 %",
      carbs: "24 g",
      fibre: {
        amount: "0 g",
        dv: "0 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "6 g",
      cholesterol: {
        amount: "15 mg",
        dv: "5 %"
      },
      sodium: {
        amount: "390 mg",
        dv: "17 %"
      },
      calcium: {
        amount: "30 mg",
        dv: "2 %"
      },
      iron: {
        amount: "0.9 mg",
        dv: "5 %"
      },
      potassium: {
        amount: "150 mg",
        dv: "3 %"
      }
    },
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        weight: "1.2 kg",
        main: true,
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/chicken-tikka-samosa/40-pcs-container.png",
        photo: true
      }
    ]
  },
  {
    id: "34",
    slug: "mutton-samosa",
    oldSlugs: [],
    name: {
      en: "Mutton Samosa",
      fr: "Samosa au mouton"
    },
    category: "Samosas",
    image: "/images/packs/mutton-samosa/main.png",
    photo: false,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade samosas with a crisp pastry and a spiced halal mutton filling. Cook from frozen.",
      fr: "Samosas faits à la main, pâte croustillante et garniture au mouton halal épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Mutton"
    ],
    cataloguePage: 21,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal Mutton, Onion, Potato, Pea, Salt, Coriander, Cumin, Herbs and Spices (Red Chilli, Fenugreek, Cinnamon, Turmeric, Black Pepper, Bay Leaf, Cardamom, Nutmeg, Cloves, Star Aniseed)."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "mouton halal, oignon, pomme de terre, pois, sel, coriandre, cumin, herbes et épices (piment rouge, fenugrec, cannelle, curcuma, poivre noir, feuille de laurier, cardamome, muscade, clous de girofle, anis étoilé)."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving size 3 samosas per (90 g)",
      servingFr: "Portion 3 samosas par (90 g)",
      calories: 190,
      fat: {
        amount: "5 g",
        dv: "8 %"
      },
      saturated: "2.5 g",
      trans: "0 g",
      saturatedTransDv: "11 %",
      carbs: "29 g",
      fibre: {
        amount: "1 g",
        dv: "5 %"
      },
      sugars: {
        amount: "2 g",
        dv: "0 %"
      },
      protein: "7 g",
      cholesterol: {
        amount: "12 mg",
        dv: "4 %"
      },
      sodium: {
        amount: "390 mg",
        dv: "16 %"
      },
      calcium: {
        amount: "10 mg",
        dv: "1 %"
      },
      iron: {
        amount: "0.2 mg",
        dv: "1 %"
      },
      potassium: {
        amount: "240 mg",
        dv: "4 %"
      }
    },
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/mutton-samosa/40-pcs-container.png",
        photo: false
      }
    ]
  },
  {
    id: "35",
    slug: "vegetable-samosa",
    oldSlugs: [],
    name: {
      en: "Vegetable Samosa",
      fr: "Samosa aux légumes"
    },
    category: "Samosas",
    image: "/images/packs/vegetable-samosa/main.png",
    photo: false,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade samosas with a crisp pastry and a spiced potato and pea filling. Cook from frozen.",
      fr: "Samosas faits à la main, pâte croustillante et garniture aux pommes de terre et aux pois épicée. À cuire directement congelés."
    },
    tags: [
      "Vegetarian"
    ],
    cataloguePage: 22,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Potato, Peas, Water, Spices (black pepper, cinnamon, cardamom seeds, cloves, coriander powder, cumin powder, cumin seeds, fenugreek, ginger powder, garlic powder, turmeric, green chili, red chili powder), Salt, Wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Pomme de terre, Pois, Eau, Épices (poivre noir, cannelle, graines de cardamome, clous de girofle, poudre de coriandre, poudre de cumin, graines de cumin, fenugrec, poudre de gingembre, poudre d’ail, curcuma, piment vert, poudre de piment rouge), Sel, Farine de blé."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 3 samosas (90 g)",
      servingFr: "pour 3 samosas (90 g)",
      calories: 190,
      fat: {
        amount: "3 g",
        dv: "4 %"
      },
      saturated: "1.5 g",
      trans: "0 g",
      saturatedTransDv: "8 %",
      carbs: "37 g",
      fibre: {
        amount: "1 g",
        dv: "3 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "4 g",
      cholesterol: {
        amount: "0 mg"
      },
      sodium: {
        amount: "360 mg",
        dv: "16 %"
      },
      calcium: {
        amount: "0 mg",
        dv: "0 %"
      },
      iron: {
        amount: "0.75 mg",
        dv: "4 %"
      },
      potassium: {
        amount: "175 mg",
        dv: "5 %"
      }
    },
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/vegetable-samosa/40-pcs-container.png",
        photo: false
      },
      {
        title: {
          en: "25 pieces",
          fr: "25 morceaux"
        },
        detail: {
          en: "Restaurant bag · 10 per case (250 pieces)",
          fr: "Sac pour restaurants · 10 par caisse (250 morceaux)"
        },
        key: "25-pcs-restaurant-bag",
        source: "master",
        image: "/images/packs/vegetable-samosa/25-pcs-restaurant-bag.png",
        photo: false
      },
      {
        title: {
          en: "3 kg",
          fr: "3 kg"
        },
        detail: {
          en: "Case · 40 g samosas",
          fr: "Caisse · samosas de 40 g"
        },
        weight: "3 kg",
        key: "sysco-3kg-case",
        source: "master",
        image: "/images/packs/vegetable-samosa/sysco-3kg-case.png",
        photo: false,
        stores: [
          {
            name: "Sysco / Dot Foods",
            sku: "7398494"
          }
        ]
      }
    ]
  },
  {
    id: "23",
    slug: "chicken-spring-roll",
    oldSlugs: [],
    name: {
      en: "Chicken Spring Roll",
      fr: "Rouleau impérial au poulet"
    },
    category: "Spring Rolls",
    image: "/images/products/3D Box-Alshamas-ChickenSpringRoll_40Pcs.png",
    photo: true,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade spring rolls with a crisp pastry and a spiced halal chicken filling. Cook from frozen.",
      fr: "Rouleaux impériaux faits à la main, pâte croustillante et garniture au poulet halal épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Chicken"
    ],
    cataloguePage: 23,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal chicken, Green chili, Red chili powder, Whole cumin, Crushed chili, Whole coriander, Garam masala (spices), Fenugreek, Garlic powder, Coriander powder, Cumin powder, Ginger powder."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Poulet halal, Piment vert, Poudre de piment rouge, Cumin entier, Piment broyé, Coriandre entière, Garam masala (épices), Fenugrec, Poudre d’ail, Poudre de coriandre, Poudre de cumin, Poudre de gingembre."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.chickenSpringRoll,
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        weight: "1.2 kg",
        main: true,
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/chicken-spring-roll/40-pcs-container.png",
        photo: true
      },
      {
        title: {
          en: "10 pieces",
          fr: "10 morceaux"
        },
        detail: {
          en: "Bag · 12 per case",
          fr: "Sachet · 12 par caisse"
        },
        key: "10-pcs-bag",
        source: "master",
        image: "/images/packs/chicken-spring-roll/10-pcs-bag.png",
        photo: false
      }
    ]
  },
  {
    id: "24",
    slug: "beef-spring-roll",
    oldSlugs: [],
    name: {
      en: "Beef Spring Roll",
      fr: "Rouleau impérial au bœuf"
    },
    category: "Spring Rolls",
    image: "/images/products/3D Box-Alshamas-BeefSpringRoll_40Pcs.png",
    photo: true,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade spring rolls with a crisp pastry and a spiced halal beef filling. Cook from frozen.",
      fr: "Rouleaux impériaux faits à la main, pâte croustillante et garniture au bœuf halal épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Beef"
    ],
    cataloguePage: 24,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal beef, Onion, Salt, Green chili, Red chili powder, Whole cumin, Spices, Crushed chili, Whole coriander, Garlic powder."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Bœuf halal, Oignon, Sel, Piment vert, Poudre de piment rouge, Cumin entier, Épices, Piment broyé, Coriandre entière, Poudre d’ail."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: NFT.beefSpringRoll,
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        weight: "1.2 kg",
        main: true,
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/beef-spring-roll/40-pcs-container.png",
        photo: true
      },
      {
        title: {
          en: "10 pieces",
          fr: "10 morceaux"
        },
        detail: {
          en: "Bag · 12 per case",
          fr: "Sachet · 12 par caisse"
        },
        key: "10-pcs-bag",
        source: "master",
        image: "/images/packs/beef-spring-roll/10-pcs-bag.png",
        photo: false
      }
    ]
  },
  {
    id: "25",
    slug: "mutton-spring-roll",
    oldSlugs: [],
    name: {
      en: "Mutton Spring Roll",
      fr: "Rouleau de printemps au mouton"
    },
    category: "Spring Rolls",
    image: "/images/packs/mutton-spring-roll/main.png",
    photo: false,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade spring rolls with a crisp pastry and a spiced mutton and chicken filling. Cook from frozen.",
      fr: "Rouleaux de printemps faits à la main, pâte croustillante et garniture au mouton et au poulet épicée. À cuire directement congelés."
    },
    tags: [
      "Halal",
      "Mutton"
    ],
    cataloguePage: 25,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Halal Mutton, Halal chicken, Green chili, Red chili powder, Whole cumin, Crushed chili, Whole coriander, Garam masala (spices), Fenugreek, Garlic powder, Coriander powder, Cumin powder, Ginger powder."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Agneau halal, Poulet halal, Piment vert, Poudre de piment rouge, Cumin entier, Piment broyé, Coriandre entière, Garam masala (épices), Fenugrec, Poudre d’ail, Poudre de coriandre, Poudre de cumin, Poudre de gingembre."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir: Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving size 3 samosas per (90 g)",
      servingFr: "Portion 3 samosas par (90 g)",
      calories: 190,
      fat: {
        amount: "5 g",
        dv: "8 %"
      },
      saturated: "2.5 g",
      trans: "0 g",
      saturatedTransDv: "11 %",
      carbs: "29 g",
      fibre: {
        amount: "1 g",
        dv: "5 %"
      },
      sugars: {
        amount: "2 g",
        dv: "0 %"
      },
      protein: "7 g",
      cholesterol: {
        amount: "12 mg",
        dv: "4 %"
      },
      sodium: {
        amount: "390 mg",
        dv: "16 %"
      },
      calcium: {
        amount: "10 mg",
        dv: "1 %"
      },
      iron: {
        amount: "0.2 mg",
        dv: "1 %"
      },
      potassium: {
        amount: "240 mg",
        dv: "4 %"
      }
    },
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/mutton-spring-roll/40-pcs-container.png",
        photo: false
      }
    ]
  },
  {
    id: "36",
    slug: "vegetable-spring-roll",
    oldSlugs: [],
    name: {
      en: "Vegetable Spring Roll",
      fr: "Rouleau impérial aux légumes"
    },
    category: "Spring Rolls",
    image: "/images/packs/vegetable-spring-roll/main.png",
    photo: false,
    tagline: {
      en: "Uncooked • Handmade",
      fr: "Non cuit • Fait à la main"
    },
    description: {
      en: "Handmade spring rolls with a crisp pastry and a spiced vegetable filling. Cook from frozen.",
      fr: "Rouleaux impériaux faits à la main, pâte croustillante et garniture aux légumes épicée. À cuire directement congelés."
    },
    tags: [
      "Vegetarian"
    ],
    cataloguePage: 26,
    ingredients: {
      en: [
        {
          label: "Pastry ingredients",
          text: "Wheat flour, Water, Sunflower oil, Salt."
        },
        {
          label: "Filling ingredients",
          text: "Potato, Carrot, Pea, Cut bean, Broad bean, Sweet corn, Salt, Coriander, Cumin, Vegetable oil, Herbs and spices (red chilli, fenugreek, cinnamon, black pepper, bay leaf, cardamom, nutmeg, cloves, star aniseed)."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients de la pâte",
          text: "Farine de blé, Eau, Huile de tournesol, Sel."
        },
        {
          label: "Ingrédients de la garniture",
          text: "Pomme de terre, Carotte, Pois, Haricots coupés, Fèves, Maïs sucré, Sel, Coriandre, Cumin, Huile végétale, Herbes et épices (piment rouge, fenugrec, cannelle, poivre noir, feuille de laurier, cardamome, muscade, clous de girofle, anis étoilé)."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Cooking Instructions",
          text: ""
        },
        {
          text: "Fry from frozen. Deep fry in hot oil at 180°C (356°F) for 6-8 minutes until golden brown. Cook to a minimum internal temperature of 165°F (74°C)."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de cuisson",
          text: ""
        },
        {
          text: "Faites frire directement depuis l’état congelé. Faites frire dans de l’huile chaude à 180°C (356°F) pendant 6 à 8 minutes jusqu’à ce qu’ils soient dorés. Cuisez à une température interne minimale de 165°F (74°C)."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 3 samosas (90 g)",
      servingFr: "pour 3 samosas (90 g)",
      calories: 315,
      fat: {
        amount: "1 g",
        dv: "1 %"
      },
      saturated: "0 g",
      trans: "0 g",
      saturatedTransDv: "0 %",
      carbs: "28 g",
      fibre: {
        amount: "1 g",
        dv: "4 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "4 g",
      cholesterol: {
        amount: "0 mg"
      },
      sodium: {
        amount: "370 mg",
        dv: "16 %"
      },
      calcium: {
        amount: "50 mg",
        dv: "4 %"
      },
      iron: {
        amount: "0.4 mg",
        dv: "2 %"
      },
      potassium: {
        amount: "0 mg",
        dv: "0 %"
      }
    },
    packs: [
      {
        title: {
          en: "40 pieces",
          fr: "40 morceaux"
        },
        detail: {
          en: "Container · 6 per case",
          fr: "Contenant · 6 par caisse"
        },
        key: "40-pcs-container",
        source: "master",
        image: "/images/packs/vegetable-spring-roll/40-pcs-container.png",
        photo: false
      }
    ]
  },
  {
    id: "37",
    slug: "tandoori-chicken-wings",
    oldSlugs: [],
    name: {
      en: "Tandoori Chicken Wings",
      fr: "Ailes de poulet tandoori"
    },
    category: "Wings & Drumsticks",
    image: "/images/packs/tandoori-chicken-wings/main.png",
    photo: false,
    tagline: {
      en: "Heat & Eat",
      fr: "Prêt à réchauffer"
    },
    description: {
      en: "Skin-on chicken wings in a tandoori spice blend — heat and eat.",
      fr: "Ailes de poulet avec la peau, dans un mélange d’épices tandoori — prêtes à réchauffer."
    },
    tags: [
      "Chicken",
      "Tandoori"
    ],
    cataloguePage: 27,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Skin on chicken wings. Tandoori spice blend, Monosodium glutamate, Garlic Powder, Maize starch, Tomato powder, Chillies, Onion powder, Herbs, Citric acid. Vegetable oil, Concentrated lemon juice, Sodium Benzoate, Ascorbic acid, Sodium diacetate, Brine solution (soya), Maltodextrin, Salt, Water."
        },
        {
          label: "Contains",
          text: "Soya, Mustard. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Peau sur les ailes de poulet. Mélange d’épices de Tandoori, glutamate de Monosodium, poudre d’ail, amidon de maïs, poudre de tomate, piments, poudre d’oignon, fines herbes, acide citrique. Huile végétale, Jus de citron concentré, Benzoate de sodium, Acide ascorbique, Diacétate de sodium, Solution de saumure (soja), Maltodextrine, Sel, Eau."
        },
        {
          label: "Contient",
          text: "Soja et Moutarde. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour grill the chicken wings on BBQ till the internal temperature reaches 74°C."
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in Microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et cette saveur de charbon de bois fumé, faites griller les ailes de poulet au barbecue jusqu’à ce que la température interne atteigne 74°C."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez également réchauffer au micro-ondes (1000 watts) pendant 2-3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 1 Piece (85 g)",
      servingFr: "pour 1 brochette (85 g)",
      calories: 140,
      fat: {
        amount: "9 g",
        dv: "13 %"
      },
      saturated: "3 g",
      trans: "0 g",
      saturatedTransDv: "23 %",
      carbs: "7 g",
      fibre: {
        amount: "9 g",
        dv: "9 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "11 g",
      cholesterol: {
        amount: "45 mg",
        dv: "16 %"
      },
      sodium: {
        amount: "230 mg",
        dv: "23 %"
      },
      calcium: {
        dv: "2 %"
      },
      iron: {
        dv: "4 %"
      },
      vitaminC: {
        dv: "6 %"
      }
    },
    packs: [
      {
        title: {
          en: "560 g",
          fr: "560 g"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "560 g",
        key: "560g-box",
        source: "master",
        image: "/images/packs/tandoori-chicken-wings/560g-box.png",
        photo: false
      }
    ]
  },
  {
    id: "38",
    slug: "peri-peri-chicken-drumsticks",
    oldSlugs: [],
    name: {
      en: "Peri Peri Chicken Drumsticks",
      fr: "Pilons de poulet peri peri"
    },
    category: "Wings & Drumsticks",
    image: "/images/packs/peri-peri-chicken-drumsticks/main.png",
    photo: false,
    tagline: {
      en: "Heat & Eat",
      fr: "Prêt à réchauffer"
    },
    description: {
      en: "Skin-on chicken drumsticks in a peri peri spice blend — heat and eat.",
      fr: "Pilons de poulet avec la peau, dans un mélange d’épices peri peri — prêts à réchauffer."
    },
    tags: [
      "Chicken",
      "Peri Peri"
    ],
    cataloguePage: 28,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Skin on chicken drumsticks, Peri Peri spice blend, Monosodium glutamate, Garlic powder, Maize starch, Tomato powder, Chillies, Onion powder, Herbs, Citric acid. Vegetable oil, Concentrated lemon juice, Sodium benzoate, Ascorbic acid, Sodium diacetate, Brine solution (soya), Maltodextrin, Salt, Water."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Peau sur les pilons de poulet. Mélange d’épices de Peri Peri, glutamate de monosodium, poudre d’ail, amidon de maïs, poudre de tomate, piments, poudre d’oignon, fines herbes, acide citrique. Huile végétale, jus de citron concentré, benzoate de sodium, acide ascorbique, diacétate de sodium, solution de saumure (soja), maltodextrine, sel, eau."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour grill the drumsticks on BBQ until the internal temperature reaches 74°C"
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in Microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et cette saveur de charbon de bois fumé, faites griller les pilons de poulet au barbecue jusqu’à ce que la température interne atteigne 74°C."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez également réchauffer au micro-ondes (1000 watts) pendant 2-3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 1 Drumstick",
      servingFr: "pour 1 pilon",
      calories: 176,
      fat: {
        amount: "10 g",
        dv: "15 %"
      },
      saturated: "3 g",
      trans: "0 g",
      saturatedTransDv: "23 %",
      carbs: "7 g",
      fibre: {
        amount: "7 g",
        dv: "11 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "17 g",
      cholesterol: {
        amount: "60 mg",
        dv: "21 %"
      },
      sodium: {
        amount: "94 mg",
        dv: "9 %"
      },
      calcium: {
        dv: "9 %"
      },
      iron: {
        dv: "4 %"
      },
      vitaminC: {
        dv: "4 %"
      }
    },
    packs: [
      {
        title: {
          en: "560 g",
          fr: "560 g"
        },
        detail: {
          en: "Box · 12 per case",
          fr: "Boîte · 12 par caisse"
        },
        weight: "560 g",
        key: "560g-box",
        source: "master",
        image: "/images/packs/peri-peri-chicken-drumsticks/560g-box.png",
        photo: false
      }
    ]
  },
  {
    id: "39",
    slug: "chicken-burger",
    oldSlugs: [],
    name: {
      en: "Chicken Burger",
      fr: "Burger au poulet"
    },
    category: "Burgers",
    image: "/images/packs/chicken-burger/main.png",
    photo: false,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade halal chicken burger patties, fully cooked — just heat and eat.",
      fr: "Galettes de burger au poulet halal faites à la main, entièrement cuites — il suffit de réchauffer."
    },
    tags: [
      "Halal",
      "Chicken"
    ],
    cataloguePage: 29,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal Chicken, Onion, Water, Spices (Black pepper, Cinnamon, Cardamom seeds, Cloves, Coriander Powder, Cumin powder, Cumin seeds, Fenugreek, Ginger powder, Garlic powder, Turmeric, Thai chilli, Crushed chilli, Red chilli powder & Carom seeds), Whole coriander, Salt, Wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Poulet halal, oignon, eau, épices (poivre noir, cannelle, graines de cardamome, clous de girofle, coriandre en poudre, cumin en poudre, graines de cumin, fenugrec, gingembre en poudre, ail en poudre, curcuma, piment thaï, piment broyé, piment rouge en poudre & graines de carambole), coriandre entière, sel, farine de blé."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour grill the Burgers on BBQ till the internal temperature reaches 74°C"
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in Microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et cette saveur de charbon de bois fumé, faites griller les galettes au barbecue jusqu’à ce que la température interne atteigne 74 °C."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez également réchauffer au micro-ondes (1000 watts) pendant 2-3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 1 Kebab (75 g)",
      servingFr: "pour 1 kebab (75 g)",
      calories: 200,
      fat: {
        amount: "16 g",
        dv: "21 %"
      },
      saturated: "4 g",
      trans: "0.1 g",
      saturatedTransDv: "21 %",
      carbs: "4 g",
      fibre: {
        amount: "1 g",
        dv: "3 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "11 g",
      cholesterol: {
        amount: "220 mg",
        dv: "73 %"
      },
      sodium: {
        amount: "390 mg",
        dv: "17 %"
      },
      calcium: {
        amount: "50 mg",
        dv: "4 %"
      },
      iron: {
        amount: "1.75 mg",
        dv: "10 %"
      },
      potassium: {
        amount: "225 mg",
        dv: "5 %"
      }
    },
    packs: []
  },
  {
    id: "40",
    slug: "beef-burger",
    oldSlugs: [],
    name: {
      en: "Beef Burger",
      fr: "Burger au bœuf"
    },
    category: "Burgers",
    image: "/images/packs/beef-burger/main.png",
    photo: false,
    tagline: {
      en: "Fully Cooked • Handmade • Heat & Eat",
      fr: "Entièrement cuit • Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade halal beef burger patties, fully cooked — just heat and eat.",
      fr: "Galettes de burger au bœuf halal faites à la main, entièrement cuites — il suffit de réchauffer."
    },
    tags: [
      "Halal",
      "Beef"
    ],
    cataloguePage: 30,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Halal Beef, Onion, Water, Spices (Black pepper, Cinnamon, Cardamom seeds, Cloves, Coriander Powder, Cumin powder, Cumin seeds, Fenugreek, Ginger powder, Garlic powder, Turmeric, Thai chilli, Crushed chilli, Red chilli powder & Carom seeds), Whole coriander, Salt, Wheat flour."
        },
        {
          label: "Contains",
          text: "Wheat."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Bœuf halal, oignon, eau, épices (poivre noir, cannelle, graines de cardamome, clous de girofle, coriandre en poudre, cumin en poudre, graines de cumin, fenugrec, gingembre en poudre, ail en poudre, curcuma, piment thaï, piment broyé, piment rouge en poudre & graines de carambole), coriandre entière, sel, farine de blé."
        },
        {
          label: "Contient",
          text: "Blé."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Heating Instructions",
          text: ""
        },
        {
          text: "Individual appliances vary; these are guidelines only. Do not thaw."
        },
        {
          label: "BBQ Grill",
          text: "For best results and that smokey charcoal flavour grill the Burgers on BBQ till the internal temperature reaches 74°C"
        },
        {
          label: "Microwave",
          text: "Alternatively reheat in Microwave (1000 watts) for 2-3 minutes."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de chauffage",
          text: ""
        },
        {
          text: "Les appareils individuels peuvent varier ; ce ne sont que des lignes directrices."
        },
        {
          label: "Barbecue",
          text: "Pour de meilleurs résultats et cette saveur de charbon de bois fumé, faites griller les galettes au barbecue jusqu’à ce que la température interne atteigne 74 °C."
        },
        {
          label: "Micro-ondes",
          text: "Vous pouvez également réchauffer au micro-ondes (1000 watts) pendant 2-3 minutes."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 1 Kebab (75 g)",
      servingFr: "pour 1 kebab (75 g)",
      calories: 200,
      fat: {
        amount: "16 g",
        dv: "21 %"
      },
      saturated: "4 g",
      trans: "0.1 g",
      saturatedTransDv: "21 %",
      carbs: "4 g",
      fibre: {
        amount: "1 g",
        dv: "3 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "11 g",
      cholesterol: {
        amount: "220 mg",
        dv: "73 %"
      },
      sodium: {
        amount: "390 mg",
        dv: "17 %"
      },
      calcium: {
        amount: "50 mg",
        dv: "4 %"
      },
      iron: {
        amount: "1.75 mg",
        dv: "10 %"
      },
      potassium: {
        amount: "225 mg",
        dv: "5 %"
      }
    },
    packs: []
  },
  {
    id: "41",
    slug: "tandoori-naan",
    oldSlugs: [],
    name: {
      en: "Tandoori Naan",
      fr: "Naan tandoori"
    },
    category: "Breads",
    image: "/images/packs/tandoori-naan/main.png",
    photo: false,
    tagline: {
      en: "Handmade • Heat & Eat",
      fr: "Fait à la main • Prêt à réchauffer"
    },
    description: {
      en: "Handmade tandoori naan — heat from frozen in a pan, in the microwave or in the oven.",
      fr: "Naan tandoori fait à la main — à réchauffer directement congelé à la poêle, au micro-ondes ou au four."
    },
    tags: [
      "Bread"
    ],
    cataloguePage: 31,
    ingredients: {
      en: [
        {
          label: "Allergen Warning",
          text: "Product contains wheat. May contain peanuts, milk, egg and other tree nuts not listed."
        }
      ],
      fr: [
        {
          label: "Avertissement allergène",
          text: "Le produit contient du blé. Peut contenir des arachides, du lait, des œufs et d’autres noix non répertoriées."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Preparation Instructions",
          text: ""
        },
        {
          label: "Pan (Tawa)",
          text: "Take naan directly from freezer (no need to thaw). Remove naan from the packet. Pre-heat non-stick pan on medium heat. Place naan on pre-heated pan. Heat the naan flipping every 30 sec till naan is soft on both sides. Remove naan from the pan and serve it hot."
        },
        {
          label: "Microwave",
          text: "Take naan directly from freezer (no need to thaw). Remove Naan from the packet. Heat naan in microwave for 1 to 2 Min or as required."
        },
        {
          label: "Oven",
          text: "Preheat oven for 400F. Remove naan from the packet. Heat the naan in the oven for 1 to 1.5 Mins. Serve hot. glaze with butter to enhance the taste."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de préparation",
          text: ""
        },
        {
          label: "Poêle (Tawa)",
          text: "Prenez le naan directement du congélateur (pas besoin de décongeler). Retirez le naan du paquet. Préchauffez une poêle antiadhésive à feu moyen. Placez le naan sur la poêle préchauffée. Chauffez en le retournant toutes les 30 secondes jusqu’à ce qu’il soit tendre des deux côtés. Retirez-le de la poêle et servez chaud."
        },
        {
          label: "Micro-ondes",
          text: "Prenez le naan directement du congélateur (pas besoin de décongeler). Retirez le naan du paquet. Chauffez-le au micro-ondes pendant 1 à 2 minutes ou selon le besoin."
        },
        {
          label: "Four",
          text: "Préchauffez le four à 400 °F. Retirez le naan du paquet. Chauffez-le au four pendant 1 à 1,5 minute. Servez chaud. Badigeonnez de beurre pour rehausser la saveur."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Serving size 1 piece (80 g)",
      servingFr: "Pour 1 morceaux (80 g)",
      calories: 103,
      fat: {
        amount: "3 g",
        dv: "5 %"
      },
      saturated: "1 g",
      trans: "0 g",
      saturatedTransDv: "5 %",
      carbs: "17 g",
      fibre: {
        amount: "1 g",
        dv: "4 %"
      },
      sugars: {
        amount: "3 g",
        dv: "1 %"
      },
      protein: "3 g",
      cholesterol: {
        amount: "0 mg"
      },
      sodium: {
        amount: "300 mg",
        dv: "13 %"
      },
      calcium: {
        amount: "40 mg",
        dv: "3 %"
      },
      iron: {
        amount: "0.75 mg",
        dv: "6 %"
      },
      potassium: {
        amount: "240 mg",
        dv: "5 %"
      }
    },
    packs: []
  },
  {
    id: "42",
    slug: "paratha",
    oldSlugs: [],
    name: {
      en: "Paratha",
      fr: "Paratha"
    },
    category: "Breads",
    image: "/images/packs/paratha/main.png",
    photo: false,
    tagline: {
      en: "Handmade",
      fr: "Fait à la main"
    },
    description: {
      en: "Handmade paratha — cook from frozen in a hot pan until golden on both sides.",
      fr: "Paratha fait à la main — à cuire directement congelé dans une poêle chaude jusqu’à ce qu’il soit doré des deux côtés."
    },
    tags: [
      "Bread"
    ],
    cataloguePage: 32,
    ingredients: {
      en: [
        {
          label: "Ingredients",
          text: "Fine Wheat Flour, Sugar, Margarine, Vegetable Oil, Water, Salt & Leavening Agent (E-500)."
        },
        {
          label: "Contains",
          text: "Wheat. May contain: Egg."
        }
      ],
      fr: [
        {
          label: "Ingrédients",
          text: "Farine de blé fine, Sucre, Margarine, Huile végétale, Eau, Sel et Agent de levage (E-500)."
        },
        {
          label: "Contient",
          text: "Blé. Peut contenir : Œuf."
        }
      ]
    },
    instructions: {
      en: [
        {
          label: "Preparation Instructions",
          text: ""
        },
        {
          text: "Take out the Paratha from the packet and place it on a preheated frying pan for 1 to 2 minutes. Use oil if needed."
        },
        {
          text: "Press the Paratha gently & turn it over until both sides are golden."
        },
        {
          text: "When both sides are ready, take out Paratha from the pan & serve it as you like."
        },
        {
          label: "Storage Instructions",
          text: "Store frozen below -18°C."
        }
      ],
      fr: [
        {
          label: "Instructions de préparation",
          text: ""
        },
        {
          text: "Retirez le paratha du sachet et placez-le dans une poêle préchauffée pendant 1 à 2 minutes. Utilisez de l’huile au besoin."
        },
        {
          text: "Pressez délicatement le paratha et retournez-le jusqu’à ce que les deux côtés soient dorés."
        },
        {
          text: "Lorsque les deux côtés sont prêts, retirez le paratha de la poêle et servez-le comme désiré."
        },
        {
          label: "Instructions de stockage",
          text: "Conservez congelé en dessous de -18°C."
        }
      ]
    },
    nutritionFacts: {
      servingEn: "Per 5 Pieces (90 g)",
      servingFr: "Pour 5 morceaux (90 g)",
      calories: 187,
      fat: {
        amount: "3 g",
        dv: "7 %"
      },
      saturated: "1 g",
      trans: "0 g",
      saturatedTransDv: "23 %",
      carbs: "5 g",
      fibre: {
        amount: "1 g",
        dv: "5 %"
      },
      sugars: {
        amount: "0 g",
        dv: "0 %"
      },
      protein: "32 g",
      cholesterol: {
        amount: "75 mg"
      },
      sodium: {
        amount: "134 mg",
        dv: "11 %"
      },
      calcium: {
        amount: "30 mg",
        dv: "15 %"
      },
      iron: {
        amount: "0.75 mg",
        dv: "4 %"
      },
      potassium: {
        amount: "240 mg",
        dv: "5 %"
      }
    },
    packs: []
  }
];

/** Find a product by its current or any previous URL slug. */
export function findProduct(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug || p.oldSlugs.includes(slug));
}

export function categoryLabel(c: ProductCategory | undefined, lang: 'en' | 'fr'): string {
  if (!c) return '';
  return lang === 'fr' ? c.nameFr : c.name;
}
