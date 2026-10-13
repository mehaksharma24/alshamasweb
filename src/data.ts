export const PRODUCT_IMAGES: Record<string, string> = {
  // Sheekh Kebabs
  'beef-sheekh-kebab-560g':
    '/images/products/3D Box-Alshamas-BeefSheekhKebab_8Pcs.png',
  'chicken-sheekh-kebab-560g':
    '/images/products/3D Box-Alshamas-ChickenSheekhKebab_8Pcs.png',

  // Chapli / Chappal Kebabs
  'beef-chappal-kebab-450g':
    '/images/products/3D Box-Alshamas-BeefChapliKebab_8Pcs.png',
  'chicken-chappal-kebab-450g':
    '/images/products/3D Box-Alshamas-ChickenChapliKebab_8Pcs.png',
  'beef-chapli-kebab-1kg':
    '/images/products/3D Box-Alshamas-BeefChapliKebab_8Pcs.png',
  'chicken-chapli-kebab-1kg':
    '/images/products/3D Box-Alshamas-ChickenChapliKebab_8Pcs.png',

  // Charcoal Kebabs
  'beef-charcoal-kebab-560g':
    '/images/products/3D Box-Alshamas-BeefCharcoalKebab_8Pcs.png',
  'chicken-charcoal-kebab-560g':
    '/images/products/3D Box-Alshamas-ChickenCharcoalKebab_8Pcs.png',
  'meat-charcoal-kebab-cooked-560g':
    '/images/products/3D Box-Alshamas-MeatCharcoalKebab_8Pcs.png',

  // Kafta Kebabs
  'chicken-kafta-kebab-400g':
    '/images/products/3D Box-Alshamas-ChickenKaftaKebab_10Pcs.png',


  // Samosas
  'chicken-samosa-1-5kg':
    '/images/products/3D Box-Alshamas-ChickenSamosa_40Pcs.png',
  'jumbo-chicken-samosa-1-5kg':
    '/images/products/3D Box-Alshamas-ChickenSamosa_40Pcs.png',
  'jumbo-beef-samosa-1-5kg':
    '/images/products/3D Box-Alshamas-BeefSamosa_40Pcs.png',
  'beef-samosa':
    '/images/products/3D Box-Alshamas-BeefSamosa_10Pcs.png',
  'tandoori-chicken-samosa-1-2kg':
    '/images/products/3D Box-Alshamas-ChickenTandooriSamosa_40Pcs.png',
  'chicken-tikka-samosa-40pcs':
    '/images/products/3D Box-Alshamas-ChickenTikkaSamosa_40Pcs.png',

  // Spring Rolls
  'chicken-spring-roll':
    '/images/products/3D Box-Alshamas-ChickenSpringRoll_40Pcs.png',
  'beef-spring-roll':
    '/images/products/3D Box-Alshamas-BeefSpringRoll_40Pcs.png',
  'mutton-spring-roll':
    '/images/products/3D Box-Alshamas-MuttonSpringRoll_40Pcs.png',

  // Other products
  'lamb-charcoal-grilled-kebab-2kg':
    '/images/products/lamb-charcoal-grilled-kebab-2kg.jpg',
  'chicken-tandoori-kebab-560g':
    '/images/products/chicken-tandoori-kebab-560g.jpg',
  'vegetable-samosa':
    '/images/products/vegetable-samosa.jpg',
  'peri-peri-chicken-drumsticks':
    '/images/products/peri-peri-chicken-drumsticks.jpg',
  'tandoori-chicken-wings':
    '/images/products/tandoori-chicken-wings.jpg',
  'tandoori-naan':
    '/images/products/tandoori-naan.jpg',
};

export const RECIPE_IMAGES: Record<string, string> = {
  'beef-chapli-kebab-burger': '/images/recipes/beef-chapli-kebab-burger.jpg',
  'chicken-charcoal-kebab-shawarma-wrap': '/images/recipes/chicken-charcoal-kebab-shawarma-wrap.jpg',
  'chicken-samosa-chaat': '/images/recipes/chicken-samosa-chaat.jpg',
  'beef-charcoal-kebab-karahi': '/images/recipes/beef-charcoal-kebab-karahi.jpg',
  'beef-kebab-paratha-roll': '/images/recipes/beef-kebab-paratha-roll.jpg',
  'beef-chapli-kebab-roll': '/images/recipes/beef-chapli-kebab-roll.jpg',
  'beef-chapli-kebab-rice-platter': '/images/recipes/beef-chapli-kebab-rice-platter.jpg',
  'loaded-beef-chapli-kebab-fries': '/images/recipes/loaded-beef-chapli-kebab-fries.jpg',
  'beef-kebab-rice-platter': '/images/recipes/beef-kebab-rice-platter.jpg',
  'beef-kebab-stuffed-pizza': '/images/recipes/beef-kebab-stuffed-pizza.jpg',
  'chicken-kebab-rice-platter': '/images/recipes/chicken-kebab-rice-platter.jpg',
  'loaded-chicken-kebab-fries': '/images/recipes/loaded-chicken-kebab-fries.jpg',
  'chicken-charcoal-kebab-karahi': '/images/recipes/chicken-charcoal-kebab-karahi.jpg',
  'chicken-chapli-kebab-burger': '/images/recipes/chicken-chapli-kebab-burger.jpg',
  'chicken-chapli-kebab-roll': '/images/recipes/chicken-chapli-kebab-roll.jpg',
  'chicken-samosa-platter-with-chutneys': '/images/recipes/chicken-samosa-platter-with-chutneys.jpg',
  'chicken-samosa-street-chaat': '/images/recipes/chicken-samosa-street-chaat.jpg',
};

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  weight: string;
  pieces?: string;
  description: string;
  ingredients: string;
  image: string;
  // Nutrition Facts from the packaging; falls back to `nutrition` when absent.
  nutritionFacts?: NutritionFacts;
  // Stores carrying this product and the pack sizes sold there.
  availability?: StoreAvailability[];
  tags: string[];
  nutrition: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
    sodium: string;
    servingSize: string;
  };
}

export interface StoreAvailability {
  store: 'Costco Canada' | 'Sysco' | 'Retail Stores';
  packs: string[];
}

interface Nutrient {
  amount: string;
  dv?: string;
}

export interface NutritionFacts {
  servingEn: string;
  servingFr: string;
  calories: number;
  fat: Nutrient;
  saturated: string;
  trans: string;
  saturatedTransDv: string;
  carbs: string;
  fibre: Nutrient;
  sugars: Nutrient;
  protein: string;
  cholesterol: Nutrient;
  sodium: Nutrient;
  potassium: Nutrient;
  calcium: Nutrient;
  iron: Nutrient;
}

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

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  product: string;
  productId: string;
  // Optional: only shown when the recipe card provides them.
  time?: string;
  servings?: number;
  difficulty: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export interface Store {
  id: string;
  name: string;
  chain: string;
  address: string;
  city: string;
  province: string;
  postal: string;
  phone: string;
}

export interface ProductCategory {
  name: string; // matches Product.category
  slug: string;
  tagline: string;
  description: string;
  image?: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: 'Kababs',
    slug: 'kababs',
    tagline: 'Hand-made kababs, ready to heat and eat',
    description:
      'From smoky charcoal kebabs to Peshawari-style chapli kebabs, our kababs are made with halal beef and chicken and authentic spice blends — fully cooked and ready in minutes.',
    image: PRODUCT_IMAGES['beef-charcoal-kebab-560g'],
  },
  {
    name: 'Samosas',
    slug: 'samosas',
    tagline: 'Crispy pastry with a savoury halal filling',
    description:
      'Golden, crispy samosas filled with seasoned halal chicken — perfect as a snack, a starter or the star of a chaat.',
    image: PRODUCT_IMAGES['chicken-samosa-1-5kg'],
  },
  {
    name: 'Spring Rolls',
    slug: 'spring-rolls',
    tagline: 'Thin, crispy rolls with savoury fillings',
    description:
      'Hand-rolled spring rolls filled with seasoned meat and vegetables — a quick snack or the centrepiece of a party platter.',
    image: PRODUCT_IMAGES['chicken-spring-roll'],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'beef-sheekh-kebab-560g',
    name: 'Beef Sheekh Kebab',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description:
      'Hand-formed beef sheekh kebabs made from premium cuts and time-honoured spice blends.',
    ingredients:
      'Beef, onion, cilantro, green chili, ginger, garlic, cumin, coriander, garam masala, salt.',
    image: PRODUCT_IMAGES['beef-sheekh-kebab-560g'],
    nutritionFacts: NFT.beefSheekhCharcoalKebab,
    tags: ['Halal', 'Beef'],
    nutrition: {
      calories: 230,
      protein: '19g',
      fat: '14g',
      carbs: '5g',
      sodium: '400mg',
      servingSize: '2 pieces (86g)',
    },
  },

  {
    id: '2',
    slug: 'chicken-sheekh-kebab-560g',
    name: 'Chicken Sheekh Kebab',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description:
      'Tender ground chicken blended with aromatic spices and herbs.',
    ingredients:
      'Chicken, onion, cilantro, green chili, ginger, garlic, cumin, coriander, garam masala, salt.',
    image: PRODUCT_IMAGES['chicken-sheekh-kebab-560g'],
    nutritionFacts: NFT.chickenSheekhCharcoalKebab,
    tags: ['Bestseller', 'Halal', 'Chicken'],
    nutrition: {
      calories: 210,
      protein: '18g',
      fat: '12g',
      carbs: '6g',
      sodium: '380mg',
      servingSize: '2 pieces (86g)',
    },
  },

  {
    id: '3',
    slug: 'lamb-charcoal-grilled-kebab-2kg',
    name: 'Lamb Charcoal Grilled Kebab',
    category: 'Kababs',
    weight: '2 kg',
    pieces: '40 pieces',
    description:
      'Rich and tender lamb kebabs grilled over charcoal for a deep smoky flavour.',
    ingredients:
      'Lamb, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['lamb-charcoal-grilled-kebab-2kg'],
    tags: ['Halal', 'Lamb', 'Charcoal Smoked', 'Catering'],
    nutrition: {
      calories: 250,
      protein: '21g',
      fat: '16g',
      carbs: '4g',
      sodium: '430mg',
      servingSize: '2 pieces (90g)',
    },
  },

  {
    id: '4',
    slug: 'beef-charcoal-kebab-560g',
    name: 'Beef Charcoal Kebab',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description:
      'Fully cooked beef kebabs finished with real charcoal smoke.',
    ingredients:
      'Beef, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['beef-charcoal-kebab-560g'],
    nutritionFacts: NFT.beefSheekhCharcoalKebab,
    availability: [
      { store: 'Costco Canada', packs: ['40 pieces'] },
      { store: 'Retail Stores', packs: ['8 pieces'] },
    ],
    tags: ['Halal', 'Beef', 'Charcoal Smoked'],
    nutrition: {
      calories: 240,
      protein: '20g',
      fat: '15g',
      carbs: '4g',
      sodium: '420mg',
      servingSize: '2 pieces (90g)',
    },
  },

  {
    id: '5',
    slug: 'chicken-charcoal-kebab-560g',
    name: 'Chicken Charcoal Kebab',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description:
      'Fully cooked chicken kebabs finished with real charcoal smoke.',
    ingredients:
      'Chicken, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['chicken-charcoal-kebab-560g'],
    nutritionFacts: NFT.chickenSheekhCharcoalKebab,
    availability: [
      { store: 'Costco Canada', packs: ['20 pieces', '40 pieces'] },
      { store: 'Retail Stores', packs: ['8 pieces'] },
    ],
    tags: ['Halal', 'Chicken', 'Charcoal Smoked'],
    nutrition: {
      calories: 200,
      protein: '19g',
      fat: '11g',
      carbs: '4g',
      sodium: '390mg',
      servingSize: '2 pieces (90g)',
    },
  },

  {
    id: '6',
    slug: 'beef-chappal-kebab-450g',
    name: 'Beef Chappal Kebab',
    category: 'Kababs',
    weight: '450 g',
    pieces: '6 pieces',
    description:
      'Jumbo Peshwari-style chappal kebabs made from premium beef.',
    ingredients:
      'Beef, onion, tomato, egg, green chili, pomegranate seeds, fresh herbs, salt.',
    image: PRODUCT_IMAGES['beef-chappal-kebab-450g'],
    nutritionFacts: NFT.beefChapliKebab,
    availability: [{ store: 'Retail Stores', packs: ['8 pieces'] }],
    tags: ['Halal', 'Beef', 'Jumbo'],
    nutrition: {
      calories: 235,
      protein: '18g',
      fat: '15g',
      carbs: '7g',
      sodium: '400mg',
      servingSize: '1 piece (75g)',
    },
  },

  {
    id: '7',
    slug: 'chicken-chappal-kebab-450g',
    name: 'Chicken Chappal Kebab',
    category: 'Kababs',
    weight: '450 g',
    pieces: '6 pieces',
    description:
      'Jumbo Peshwari-style chappal kebabs made from premium chicken.',
    ingredients:
      'Chicken, onion, tomato, egg, green chili, pomegranate seeds, fresh herbs, salt.',
    image: PRODUCT_IMAGES['chicken-chappal-kebab-450g'],
    nutritionFacts: NFT.chickenChapliKebab,
    availability: [{ store: 'Retail Stores', packs: ['8 pieces'] }],
    tags: ['Halal', 'Chicken', 'Jumbo'],
    nutrition: {
      calories: 220,
      protein: '17g',
      fat: '13g',
      carbs: '7g',
      sodium: '370mg',
      servingSize: '1 piece (75g)',
    },
  },

  {
    id: '8',
    slug: 'beef-chapli-kebab-1kg',
    name: 'Beef Chapli Kebab',
    category: 'Kababs',
    weight: '1 kg',
    pieces: '20 pieces',
    description:
      'Flat Peshwari beef kebabs that are crispy outside and juicy inside.',
    ingredients:
      'Beef, tomato, onion, egg, green chili, dried pomegranate seeds, cumin, coriander, salt.',
    image: PRODUCT_IMAGES['beef-chapli-kebab-1kg'],
    nutritionFacts: NFT.beefChapliKebab,
    availability: [{ store: 'Retail Stores', packs: ['8 pieces'] }],
    tags: ['Halal', 'Beef', 'Party Pack'],
    nutrition: {
      calories: 205,
      protein: '17g',
      fat: '12g',
      carbs: '8g',
      sodium: '370mg',
      servingSize: '1 piece (50g)',
    },
  },

  {
    id: '9',
    slug: 'chicken-chapli-kebab-1kg',
    name: 'Chicken Chapli Kebab',
    category: 'Kababs',
    weight: '1 kg',
    pieces: '20 pieces',
    description:
      'Flat Peshwari chicken kebabs that are crispy outside and juicy inside.',
    ingredients:
      'Chicken, tomato, onion, egg, green chili, dried pomegranate seeds, cumin, coriander, salt.',
    image: PRODUCT_IMAGES['chicken-chapli-kebab-1kg'],
    nutritionFacts: NFT.chickenChapliKebab,
    availability: [{ store: 'Retail Stores', packs: ['8 pieces'] }],
    tags: ['Bestseller', 'Halal', 'Chicken', 'Party Pack'],
    nutrition: {
      calories: 195,
      protein: '16g',
      fat: '11g',
      carbs: '8g',
      sodium: '360mg',
      servingSize: '1 piece (50g)',
    },
  },

  {
    id: '10',
    slug: 'chicken-tandoori-kebab-560g',
    name: 'Chicken Tandoori Kebab',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description:
      'Chicken kebabs marinated in a rich tandoori spice blend.',
    ingredients:
      'Chicken, yogurt, tandoori spice blend, ginger, garlic, red chili, lemon juice, salt.',
    image: PRODUCT_IMAGES['chicken-tandoori-kebab-560g'],
    tags: ['Halal', 'Chicken', 'Tandoori'],
    nutrition: {
      calories: 190,
      protein: '20g',
      fat: '10g',
      carbs: '4g',
      sodium: '400mg',
      servingSize: '2 pieces (86g)',
    },
  },

  {
    id: '11',
    slug: 'chicken-kafta-kebab-400g',
    name: 'Chicken Kafta Kebab',
    category: 'Kababs',
    weight: '400 g',
    pieces: '10 pieces',
    description:
      'Middle Eastern-style chicken kafta kebabs seasoned with warm spices.',
    ingredients:
      'Chicken, onion, parsley, garlic, allspice, cumin, coriander, salt.',
    image: PRODUCT_IMAGES['chicken-kafta-kebab-400g'],
    nutritionFacts: NFT.chickenKaftaKebab,
    tags: ['Halal', 'Chicken'],
    nutrition: {
      calories: 200,
      protein: '18g',
      fat: '12g',
      carbs: '5g',
      sodium: '380mg',
      servingSize: '2 pieces (80g)',
    },
  },

  {
    id: '12',
    slug: 'meat-charcoal-kebab-cooked-560g',
    name: 'Meat Charcoal Kebab (Cooked)',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description:
      'Fully cooked charcoal-smoked meat kebabs ready to heat and serve.',
    ingredients:
      'Beef, chicken, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['meat-charcoal-kebab-cooked-560g'],
    nutritionFacts: NFT.meatCharcoalKebab,
    availability: [{ store: 'Retail Stores', packs: ['8 pieces'] }],
    tags: ['Halal', 'Charcoal Smoked', 'Ready to Eat'],
    nutrition: {
      calories: 235,
      protein: '19g',
      fat: '14g',
      carbs: '4g',
      sodium: '410mg',
      servingSize: '2 pieces (90g)',
    },
  },

  {
    id: '23',
    slug: 'chicken-spring-roll',
    name: 'Chicken Spring Rolls',
    category: 'Spring Rolls',
    weight: '1.2 kg',
    pieces: '40 pieces',
    description:
      'Crispy golden spring rolls filled with seasoned chicken and vegetables.',
    ingredients:
      'Chicken, cabbage, carrot, onion, spring onion, wheat flour, vegetable oil, garlic, ginger, black pepper, soy sauce, salt.',
    image: PRODUCT_IMAGES['chicken-spring-roll'],
    nutritionFacts: NFT.chickenSpringRoll,
    availability: [{ store: 'Retail Stores', packs: ['10 pieces', '40 pieces'] }],
    tags: ['Halal', 'Chicken', '40 Pieces'],
    nutrition: {
      calories: 180,
      protein: '8g',
      fat: '8g',
      carbs: '20g',
      sodium: '360mg',
      servingSize: '2 pieces (60g)',
    },
  },

  {
    id: '24',
    slug: 'beef-spring-roll',
    name: 'Beef Spring Rolls',
    category: 'Spring Rolls',
    weight: '1.2 kg',
    pieces: '40 pieces',
    description:
      'Crispy golden spring rolls filled with seasoned beef and vegetables.',
    ingredients:
      'Beef, cabbage, carrot, onion, spring onion, wheat flour, vegetable oil, garlic, ginger, black pepper, soy sauce, salt.',
    image: PRODUCT_IMAGES['beef-spring-roll'],
    nutritionFacts: NFT.beefSpringRoll,
    availability: [{ store: 'Retail Stores', packs: ['40 pieces'] }],
    tags: ['Halal', 'Beef', '40 Pieces'],
    nutrition: {
      calories: 195,
      protein: '9g',
      fat: '10g',
      carbs: '19g',
      sodium: '380mg',
      servingSize: '2 pieces (60g)',
    },
  },

  {
    id: '25',
    slug: 'mutton-spring-roll',
    name: 'Mutton Spring Rolls',
    category: 'Spring Rolls',
    weight: '1.2 kg',
    pieces: '40 pieces',
    description:
      'Golden spring rolls filled with seasoned mutton and vegetables.',
    ingredients:
      'Mutton, cabbage, carrot, onion, spring onion, wheat flour, vegetable oil, garlic, ginger, black pepper, coriander, cumin, salt.',
    image: PRODUCT_IMAGES['mutton-spring-roll'],
    tags: ['Halal', 'Mutton', '40 Pieces'],
    nutrition: {
      calories: 205,
      protein: '9g',
      fat: '11g',
      carbs: '19g',
      sodium: '390mg',
      servingSize: '2 pieces (60g)',
    },
  },

  {
    id: '26',
    slug: 'chicken-samosa-1-5kg',
    name: 'Chicken Samosas',
    category: 'Samosas',
    weight: '1.5 kg',
    pieces: '40 pieces',
    description:
      'Crispy pastry triangles filled with seasoned chicken and vegetables.',
    ingredients:
      'Chicken, onion, potato, peas, wheat flour, vegetable oil, ginger, garlic, green chili, cumin, coriander, garam masala, salt.',
    image: PRODUCT_IMAGES['chicken-samosa-1-5kg'],
    nutritionFacts: NFT.chickenSamosa,
    availability: [
      { store: 'Costco Canada', packs: ['20 pieces', '100 pieces'] },
      { store: 'Sysco', packs: [] },
      { store: 'Retail Stores', packs: ['10 pieces', '40 pieces'] },
    ],
    tags: ['Halal', 'Chicken', '40 Pieces'],
    nutrition: {
      calories: 190,
      protein: '8g',
      fat: '9g',
      carbs: '21g',
      sodium: '370mg',
      servingSize: '2 pieces (70g)',
    },
  },
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    slug: 'beef-chapli-kebab-burger',
    title: 'Beef Chapli Kebab Burger',
    product: 'Beef Chapli Kebab',
    productId: '8',
    time: '23 min',
    servings: 2,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['beef-chapli-kebab-burger'],
    description:
      'A delicious and juicy Beef Chapli Kebab Burger with fresh vegetables and a creamy sauce. Perfect for a quick and satisfying meal.',
    ingredients: [
      '2 pieces Al-Shamas Beef Chapli Kebabs (frozen, fully cooked)',
      '2 burger buns',
      '1 cup lettuce (shredded)',
      '1/2 cup tomatoes (sliced)',
      '1/2 cup red onions (sliced)',
      '1/2 cup cucumber (sliced)',
      '1/4 cup mayonnaise',
      '2 tbsp ketchup',
      '1 tsp mustard (optional)',
      '1/2 tsp garlic (minced, optional)',
      '1 tbsp fresh cilantro (chopped)',
      'Salt and pepper, to taste',
      '1 tsp olive oil or butter (for toasting buns)',
    ],
    instructions: [
      'Reheat Kebabs: Heat frozen Al-Shamas Beef Chapli Kebabs in a pan, oven or air fryer for 6–8 minutes on each side until hot and slightly crispy. (They are already fully cooked.)',
      'Prepare Sauce: In a small bowl, mix mayonnaise, ketchup, mustard, minced garlic and chopped cilantro. Add salt and pepper to taste.',
      'Prepare Vegetables: Wash and slice lettuce, tomatoes, red onions and cucumber.',
      'Toast Buns: Lightly toast burger buns in a pan with a little oil or butter until golden and warm.',
      'Assemble Burger: Spread sauce on both sides of the bun. Place lettuce on the bottom bun, add the beef chapli kebab, then top with tomatoes, onions and cucumber.',
      'Serve: Add more sauce if desired, place the top bun and serve immediately with fries or salad.',
    ],
    tags: ['Burgers', 'Beef', 'Lunch'],
  },

  {
    id: '2',
    slug: 'chicken-charcoal-kebab-shawarma-wrap',
    title: 'Chicken Charcoal Kebab Shawarma Wrap',
    product: 'Chicken Charcoal Kebab',
    productId: '5',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-charcoal-kebab-shawarma-wrap'],
    description:
      'Delicious Chicken Charcoal Kebab Shawarma Wrap made with tender, smoky kebabs, fresh vegetables and a creamy garlic yogurt sauce, all wrapped in warm pita bread. A quick and flavourful meal perfect for lunch or dinner.',
    ingredients: [
      '8 Chicken Charcoal Kebabs (from frozen)',
      '4 large pita bread or flatbread',
      '1 cup lettuce, shredded',
      '1 tomato, sliced',
      '1 cucumber, sliced',
      '1 small red onion, thinly sliced',
      '1/2 cup plain yogurt',
      '2 tbsp mayonnaise',
      '1 tbsp lemon juice',
      '1 clove garlic, minced',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1/2 tsp cumin powder',
      '1/2 tsp paprika',
      '1 tbsp fresh cilantro, chopped',
      'Hot sauce (optional)',
    ],
    instructions: [
      'Cook the Chicken Charcoal Kebabs according to the package instructions (grill, pan fry or bake) until heated through and lightly charred.',
      'Prepare the garlic yogurt sauce by mixing yogurt, mayonnaise, lemon juice, minced garlic, salt, black pepper, cumin and paprika.',
      'Slice the cooked kebabs into bite-sized pieces.',
      'Warm the pita bread or flatbread on a skillet or in the oven for a few seconds.',
      'Place the sliced kebab pieces on the bread.',
      'Add lettuce, tomato, cucumber and red onion.',
      'Drizzle with garlic yogurt sauce and add hot sauce if desired.',
      'Sprinkle with fresh cilantro.',
      'Roll tightly and serve immediately.',
    ],
    tags: ['Wraps', 'Chicken', 'Lunch'],
  },

  {
    id: '3',
    slug: 'chicken-samosa-chaat',
    title: 'Chicken Samosa Chaat',
    product: 'Chicken Samosas',
    productId: '26',
    time: '25 min',
    servings: 2,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-samosa-chaat'],
    description:
      'Crispy Al-Shamas Chicken Samosas topped with tangy chutneys, fresh vegetables, yogurt and crunchy sev. A delicious and easy chaat recipe perfect for any occasion.',
    ingredients: [
      '6 pieces Al-Shamas Chicken Samosas (frozen, fully cooked)',
      '1/2 cup tomatoes (diced)',
      '1/2 cup red onions (chopped)',
      '2 tbsp fresh cilantro (chopped)',
      '1/2 cup plain yogurt',
      '2 tbsp tamarind chutney',
      '2 tbsp green chutney (mint)',
      '2 tbsp sev (crunchy noodles)',
      '1/2 tsp chaat masala',
      'Salt (optional), to taste',
    ],
    instructions: [
      'Cook Samosas: Prepare Al-Shamas Chicken Samosas according to package instructions (oven, air fryer or deep fryer) until golden and crispy.',
      'Prepare Vegetables: Dice tomatoes, chop red onions and cilantro.',
      'Prepare Yogurt: In a small bowl, whisk plain yogurt until smooth. Add a pinch of salt if desired.',
      'Assemble Chaat: Place cooked samosas on a serving plate. Lightly break them into pieces.',
      'Add Toppings: Top with diced tomatoes, red onions and fresh cilantro.',
      'Add Sauces & Serve: Drizzle yogurt, tamarind chutney and green chutney over the top. Sprinkle with sev and chaat masala. Serve immediately.',
    ],
    tags: ['Snacks', 'Chicken', 'Chaat'],
  },

  {
    id: '4',
    slug: 'beef-charcoal-kebab-karahi',
    title: 'Beef Charcoal Kebab Karahi',
    product: 'Beef Charcoal Kebab',
    productId: '4',
    difficulty: 'Easy',
    image: RECIPE_IMAGES['beef-charcoal-kebab-karahi'],
    description:
      'Flavorful Al-Shamas beef charcoal kebab cooked in a classic karahi style with tomatoes, peppers and spices.',
    ingredients: [
      'Al-Shamas Beef Charcoal Kebab: 6–8 pieces (about 300–350 g), cut into pieces',
      'Tomatoes: 3 medium, chopped',
      'Onion: 1 large, sliced',
      'Green bell pepper: 1, sliced',
      'Green chilies: 2–3, slit (optional)',
      'Ginger: 1 tbsp, julienned (plus extra for garnish)',
      'Garlic: 1 tbsp, minced',
      'Cooking oil: 2 tbsp',
      'Salt: to taste',
      'Black pepper: 1/2 tsp',
      'Red chili powder: 1 tsp (adjust to taste)',
      'Garam masala: 1/2 tsp',
      'Fresh cilantro: 2 tbsp, chopped (for garnish)',
      'Lemon: 1, cut into wedges (for serving)',
    ],
    instructions: [
      'Heat oil in a karahi or deep pan over medium heat. Add sliced onions and sauté until soft and lightly golden.',
      'Add minced garlic and cook for 1 minute until fragrant.',
      'Add chopped tomatoes and cook for 5–6 minutes, stirring occasionally, until they soften and form a thick sauce.',
      'Add salt, red chili powder, black pepper and garam masala. Mix well.',
      'Add sliced green bell pepper and green chilies. Cook for 2–3 minutes.',
      'Add Al-Shamas Beef Charcoal Kebab pieces and gently mix. Cook for 4–6 minutes until heated through and well coated in the sauce.',
      'Garnish with fresh ginger julienne and chopped cilantro.',
      'Serve hot with naan, roti or steamed rice, with lemon wedges on the side.',
    ],
    tags: ['Curries', 'Beef', 'Dinner'],
  },

  {
    id: '5',
    slug: 'beef-kebab-paratha-roll',
    title: 'Beef Kebab Paratha Roll',
    product: 'Beef Charcoal Kebab',
    productId: '4',
    difficulty: 'Easy',
    image: RECIPE_IMAGES['beef-kebab-paratha-roll'],
    description:
      'Delicious Al-Shamas beef charcoal kebab wrapped in a flaky paratha with fresh vegetables and sauce.',
    ingredients: [
      'Al-Shamas Beef Charcoal Kebab: 4–6 pieces (about 250 g), heated and sliced',
      'Paratha: 2 pieces (plain or whole wheat)',
      'Lettuce: 1 cup, shredded',
      'Tomatoes: 1 medium, sliced',
      'Cucumber: 1 medium, sliced',
      'Red onion: 1/2, thinly sliced',
      'Yogurt sauce (garlic or plain): 1/2 cup',
      'Hot sauce (optional): 2–3 tbsp',
      'Fresh parsley or cilantro: 2 tbsp, chopped',
      'Salt: to taste',
      'Black pepper: to taste',
    ],
    instructions: [
      'Heat Al-Shamas Beef Charcoal Kebab pieces in a pan over medium heat for 4–6 minutes, until heated through. Slice into strips.',
      'Warm the parathas on a skillet or pan until soft and lightly golden.',
      'In a small bowl, mix yogurt sauce with a pinch of salt and pepper. Keep hot sauce ready if using.',
      'Lay the warm paratha on a flat surface.',
      'Add shredded lettuce, sliced tomatoes, cucumber and onions.',
      'Top with the sliced beef kebab.',
      'Drizzle with yogurt sauce and hot sauce.',
      'Sprinkle with fresh parsley or cilantro.',
      'Roll tightly, cut in half and serve immediately.',
    ],
    tags: ['Wraps', 'Beef', 'Lunch'],
  },

  {
    id: '6',
    slug: 'beef-chapli-kebab-roll',
    title: 'Beef Chapli Kebab Roll',
    product: 'Beef Chapli Kebab',
    productId: '8',
    time: '23 min',
    servings: 2,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['beef-chapli-kebab-roll'],
    description:
      'A delicious Middle Eastern style roll with flavorful Beef Chapli Kebab, fresh vegetables and a creamy sauce. Perfect for a quick and satisfying meal.',
    ingredients: [
      '4 pieces Al-Shamas Beef Chapli Kebabs (frozen, fully cooked)',
      '2 large tortilla wraps or pita bread',
      '1 cup lettuce (shredded)',
      '1/2 cup tomatoes (diced)',
      '1/2 cup red onions (thinly sliced)',
      '1/2 cup cucumber (sliced)',
      '1/4 cup garlic sauce or yogurt sauce',
      '2 tbsp hot sauce (optional)',
    ],
    instructions: [
      'Reheat Kebabs: Heat frozen Al-Shamas Beef Chapli Kebabs in a pan, oven or air fryer for 4–5 minutes on each side until hot and slightly crispy. (They are already fully cooked.)',
      'Warm Wraps: Heat tortilla wraps or pita bread in a dry pan or microwave for 30–60 seconds per side until soft and warm.',
      'Prepare Vegetables: Wash and prepare lettuce, tomatoes, red onions and cucumbers as desired.',
      'Assemble Rolls: Place 2 hot beef chapli kebabs on each wrap. Add lettuce, tomatoes, red onions, cucumbers and garlic sauce. Add hot sauce if desired.',
      'Roll & Serve: Fold in the sides and roll tightly. Slice in half if desired and serve immediately.',
    ],
    tags: ['Wraps', 'Beef', 'Lunch'],
  },

  {
    id: '7',
    slug: 'beef-chapli-kebab-rice-platter',
    title: 'Beef Chapli Kebab Rice Platter',
    product: 'Beef Chapli Kebab',
    productId: '8',
    time: '23 min',
    servings: 2,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['beef-chapli-kebab-rice-platter'],
    description:
      'A flavorful and satisfying rice platter with juicy Beef Chapli Kebabs, aromatic rice, fresh salad and a creamy sauce. Perfect for a complete meal.',
    ingredients: [
      '4 pieces Al-Shamas Beef Chapli Kebabs (frozen, fully cooked)',
      '2 cups basmati rice (cooked)',
      '1/2 cup onion (sliced)',
      '1/2 cup tomatoes (diced)',
      '1/2 cup cucumber (sliced)',
      '1 cup lettuce (shredded)',
      '1/2 cup plain yogurt (for sauce)',
      '1 tsp garlic (minced, for sauce)',
      '2 tbsp fresh cilantro (chopped)',
      '1 tbsp lemon juice',
      'Salt, to taste',
      'Optional: green chutney or hot sauce, as desired',
    ],
    instructions: [
      'Reheat Kebabs: Heat frozen Al-Shamas Beef Chapli Kebabs in a pan, oven or air fryer for 6–8 minutes on each side until hot and slightly crispy. (They are already fully cooked.)',
      'Prepare Rice: Cook basmati rice according to package instructions or use leftover rice. Keep warm.',
      'Make Sauce: In a small bowl, mix yogurt, minced garlic, chopped cilantro and a squeeze of lemon juice. Add salt to taste.',
      'Prepare Salad: Slice onions, dice tomatoes, slice cucumbers and shred lettuce.',
      'Assemble Platter: Place a generous portion of cooked rice on a plate. Top with 2 Beef Chapli Kebabs.',
      'Add Toppings: Add fresh salad on the side and a dollop of yogurt sauce. Garnish with extra cilantro and serve immediately.',
    ],
    tags: ['Rice', 'Beef', 'Dinner'],
  },

  {
    id: '8',
    slug: 'loaded-beef-chapli-kebab-fries',
    title: 'Loaded Beef Chapli Kebab Fries',
    product: 'Beef Chapli Kebab',
    productId: '8',
    time: '25 min',
    servings: 2,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['loaded-beef-chapli-kebab-fries'],
    description:
      'Crispy fries topped with juicy Beef Chapli Kebab, fresh vegetables and flavorful sauces. Perfect for a quick and satisfying meal or snack.',
    ingredients: [
      '2 pieces Al-Shamas Beef Chapli Kebabs (frozen, fully cooked)',
      '400 g French fries (frozen or fresh)',
      '1/2 cup tomatoes (diced)',
      '1/2 cup red onions (sliced)',
      '1/2 cup cucumber (diced)',
      '2 tbsp fresh cilantro (chopped)',
      '1/4 cup mayonnaise',
      '2 tbsp ketchup',
      '1/2 tsp garlic (minced)',
      '2 tbsp plain yogurt (optional)',
      '1–2 tbsp hot sauce (optional)',
      'Salt and pepper, to taste',
      'Cooking oil (for fries), as needed',
    ],
    instructions: [
      'Cook Fries: Prepare French fries according to package instructions (oven, air fryer or deep fryer) until golden and crispy. Add a little salt to taste.',
      'Reheat Kebabs: Heat frozen Al-Shamas Beef Chapli Kebabs in a pan, oven or air fryer for 6–8 minutes on each side until hot and slightly crispy. Slice into strips or bite-sized pieces.',
      'Prepare Sauce: In a small bowl, mix mayonnaise, ketchup, minced garlic and yogurt. Add hot sauce if desired. Mix well.',
      'Prepare Vegetables: Dice tomatoes, slice red onions, dice cucumber and chop fresh cilantro.',
      'Assemble Fries: Place hot, crispy fries on a plate or in a serving basket. Top with sliced beef chapli kebab, then add tomatoes, onions and cucumber.',
      'Add Sauce & Serve: Drizzle the prepared sauce over the top. Garnish with fresh cilantro and extra hot sauce if desired. Serve immediately.',
    ],
    tags: ['Snacks', 'Beef', 'Fries'],
  },

  {
    id: '9',
    slug: 'beef-kebab-rice-platter',
    title: 'Beef Kebab Rice Platter',
    product: 'Beef Charcoal Kebab',
    productId: '4',
    difficulty: 'Easy',
    image: RECIPE_IMAGES['beef-kebab-rice-platter'],
    description:
      'Al-Shamas Beef Charcoal Kebabs sautéed with onions, tomatoes and green chilies, tossed with basmati rice and served with fresh salad.',
    ingredients: [
      'Al-Shamas Beef Charcoal Kebab (frozen, fully cooked): 6–8 pieces',
      'Basmati rice: 2 cups (cooked)',
      'Onion: 1 medium (sliced)',
      'Tomato: 1 medium (chopped)',
      'Green chilies: 1–2 (sliced)',
      'Ginger (julienned): 1 tbsp',
      'Fresh coriander: 2 tbsp (chopped)',
      'Oil or butter: 1–2 tbsp',
      'Salt: to taste',
      'Chaat masala (optional): 1/2 tsp',
    ],
    instructions: [
      'Prepare the rice: Cook basmati rice with a little salt. You can also use leftover rice. Keep it warm.',
      'Heat oil or butter: In a pan, add sliced onions and sauté until soft and light golden.',
      'Add tomatoes: Add chopped tomatoes and green chilies. Cook for 2–3 minutes until tomatoes soften.',
      'Add kebabs: Add the frozen, cooked Al-Shamas beef kebabs to the pan. Sauté on medium heat for 4–6 minutes, gently mixing so they are heated through and slightly coated with the tomato-onion mixture.',
      'Combine with rice: Add the cooked rice and mix gently. Adjust salt and add chaat masala if using.',
      'Finish: Sprinkle ginger and fresh coriander on top. Give a final gentle mix and cook for 1–2 minutes.',
      'Serve: Plate the rice, top with the beef kebabs and extra onion-tomato mixture. Serve with fresh salad and yogurt or mint sauce on the side.',
    ],
    tags: ['Rice', 'Beef', 'Dinner'],
  },

  {
    id: '10',
    slug: 'beef-kebab-stuffed-pizza',
    title: 'Beef Kebab Stuffed Pizza',
    product: 'Beef Charcoal Kebab',
    productId: '4',
    difficulty: 'Easy',
    image: RECIPE_IMAGES['beef-kebab-stuffed-pizza'],
    description:
      'A delicious homemade pizza topped with Al-Shamas beef kebab, cheese and fresh vegetables.',
    ingredients: [
      'Al-Shamas Beef Charcoal Kebab: 4–6 pieces (about 250 g), sliced',
      'Pizza dough: 1 medium (store-bought or homemade)',
      'Pizza sauce: 1/2 cup',
      'Mozzarella cheese: 1 1/2 cups, shredded',
      'Cheddar cheese (optional): 1/4 cup, shredded',
      'Green bell pepper: 1/2, sliced',
      'Red bell pepper: 1/2, sliced',
      'Red onion: 1/2, sliced',
      'Tomatoes: 1 small, sliced (optional)',
      'Oregano: 1 tsp',
      'Chili flakes (optional): 1/2 tsp',
      'Fresh parsley or cilantro: 2 tbsp, chopped',
      'Olive oil: 1 tbsp',
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). If using store-bought dough, follow package instructions.',
      'Heat a pan over medium heat and add a little olive oil. Add sliced Al-Shamas Beef Kebab and sauté for 4–5 minutes until heated through. Set aside.',
      'Roll out the pizza dough on a lightly floured surface and place it on a pizza pan or baking tray.',
      'Spread pizza sauce evenly over the dough.',
      'Add shredded mozzarella (and cheddar if using).',
      'Top with the heated beef kebab, bell peppers, onions and tomatoes.',
      'Sprinkle with oregano and chili flakes.',
      'Bake for 12–15 minutes, or until the crust is golden and the cheese is melted and bubbly. Garnish with fresh parsley or cilantro and serve hot.',
    ],
    tags: ['Pizza', 'Beef', 'Dinner'],
  },

  {
    id: '11',
    slug: 'chicken-kebab-rice-platter',
    title: 'Chicken Kebab Rice Platter',
    product: 'Chicken Charcoal Kebab',
    productId: '5',
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-kebab-rice-platter'],
    description:
      'Tender Al-Shamas chicken kebab served over flavorful rice with fresh salad and sauces.',
    ingredients: [
      'Al-Shamas Chicken Charcoal Kebab: 4–6 pieces (about 250 g), sliced',
      'Basmati rice: 1 cup (dry)',
      'Water: 2 cups',
      'Onion: 1/2, thinly sliced',
      'Tomatoes: 1, diced',
      'Cucumber: 1, diced',
      'Fresh parsley or cilantro: 2 tbsp, chopped',
      'Yogurt sauce (garlic or plain): 1/2 cup',
      'Hot sauce (optional): 2–3 tbsp',
      'Salt: to taste',
      'Black pepper: to taste',
      'Oil or butter: 1 tbsp',
    ],
    instructions: [
      'Rinse rice until the water runs clear. In a pot, add water, a pinch of salt and bring to a boil. Add rice, reduce heat, cover and cook for 12–15 minutes until tender. Fluff with a fork.',
      'Heat a pan over medium heat and add a little oil or butter. Add sliced Al-Shamas Chicken Kebab and sauté for 4–6 minutes until heated through and lightly browned.',
      'In a bowl, combine diced tomatoes, cucumber, sliced onion, a pinch of salt and chopped parsley or cilantro.',
      'Prepare yogurt sauce by mixing yogurt with a little salt (and garlic if desired). Keep hot sauce ready if using.',
      'Plate the cooked rice on a serving plate.',
      'Top with the heated chicken kebab.',
      'Add fresh salad on the side.',
      'Drizzle with yogurt sauce and hot sauce.',
      'Garnish with chopped parsley or cilantro and serve immediately.',
    ],
    tags: ['Rice', 'Chicken', 'Dinner'],
  },

  {
    id: '12',
    slug: 'loaded-chicken-kebab-fries',
    title: 'Loaded Chicken Kebab Fries',
    product: 'Chicken Charcoal Kebab',
    productId: '5',
    difficulty: 'Easy',
    image: RECIPE_IMAGES['loaded-chicken-kebab-fries'],
    description:
      'Crispy fries topped with Al-Shamas chicken kebab, fresh toppings and creamy sauces.',
    ingredients: [
      'Al-Shamas Chicken Charcoal Kebab: 4–6 pieces (about 250 g), sliced',
      'Frozen French fries: 500 g',
      'Onion (red or white): 1/2, thinly sliced',
      'Tomatoes: 1 medium, diced',
      'Fresh parsley or cilantro: 2 tbsp, chopped',
      'Garlic sauce or yogurt sauce: 1/2 cup',
      'Hot sauce (optional): 2–3 tbsp',
      'Salt: to taste',
      'Black pepper: to taste',
    ],
    instructions: [
      'Prepare fries according to the package instructions until golden and crispy. Keep warm.',
      'Heat Al-Shamas Chicken Kebab (sliced or chopped) in a pan over medium heat for 4–6 minutes, until heated through and lightly browned. No need to cook from raw as the kebab is already cooked and frozen.',
      'In a small bowl, mix yogurt sauce with a little salt and pepper. Keep hot sauce ready if using.',
      'Arrange the hot fries on a serving plate.',
      'Top with heated chicken kebab, diced tomatoes and sliced onions.',
      'Drizzle with yogurt sauce and hot sauce. Garnish with fresh parsley or cilantro and serve immediately.',
    ],
    tags: ['Snacks', 'Chicken', 'Fries'],
  },

  {
    id: '13',
    slug: 'chicken-charcoal-kebab-karahi',
    title: 'Chicken Charcoal Kebab Karahi',
    product: 'Chicken Charcoal Kebab',
    productId: '5',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-charcoal-kebab-karahi'],
    description:
      'A classic restaurant-style Chicken Charcoal Kebab Karahi made with tender, smoky kebabs cooked in a rich and flavourful tomato-onion gravy. Perfect for a quick and delicious meal at home.',
    ingredients: [
      '8 Chicken Charcoal Kebabs (from frozen)',
      '2 tbsp oil or butter',
      '1 large onion, sliced',
      '2 tomatoes, chopped',
      '1 tbsp ginger, julienned',
      '1 tbsp garlic, minced',
      '2 green chilies, sliced',
      '1 tsp crushed red chili (adjust to taste)',
      '1 tsp cumin seeds',
      '1 tsp coriander powder',
      '1/2 tsp turmeric powder',
      '1/2 tsp garam masala',
      'Salt, to taste',
      '2 tbsp fresh cilantro, chopped',
      '1 tbsp lemon juice',
      '1/4 cup water',
    ],
    instructions: [
      'Heat oil or butter in a karahi or deep pan. Add cumin seeds and let them splutter.',
      'Add sliced onions and sauté until golden brown.',
      'Add ginger and garlic. Cook for 1 minute.',
      'Add chopped tomatoes, green chilies, red chili, coriander powder, turmeric and salt. Cook until the tomatoes are soft and oil separates.',
      'Add 1/4 cup water and bring to a simmer.',
      'Add the Chicken Charcoal Kebabs (whole or cut into pieces) and gently mix with the gravy.',
      'Cover and cook on low heat for 8–10 minutes, stirring occasionally, until the kebabs are heated through and well coated with the sauce.',
      'Sprinkle garam masala, fresh cilantro and lemon juice.',
      'Serve hot in a karahi with naan or steamed rice.',
    ],
    tags: ['Curries', 'Chicken', 'Dinner'],
  },

  {
    id: '14',
    slug: 'chicken-chapli-kebab-burger',
    title: 'Chicken Chapli Kebab Burger',
    product: 'Chicken Chapli Kebab',
    productId: '9',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-chapli-kebab-burger'],
    description:
      'A flavorful Chicken Chapli Kebab served in a soft burger bun with fresh lettuce, tomato, onion, cucumber and creamy sauce. A quick and satisfying meal option.',
    ingredients: [
      '4 pieces chicken chapli kebabs (frozen, fully cooked)',
      '4 burger buns',
      '4 lettuce leaves',
      '1 large tomato (sliced)',
      '1 medium red onion (sliced)',
      '1 medium cucumber (sliced)',
      '4 tbsp mayonnaise',
      '2 tbsp ketchup (optional)',
      '1 tbsp lemon juice (optional)',
      'Salt & black pepper, to taste',
    ],
    instructions: [
      'Heat the Kebabs: Heat the chicken chapli kebabs in a pan, oven or air fryer for 4–6 minutes on each side until hot and slightly crispy. (They are already fully cooked.)',
      'Toast the Buns: Lightly toast the burger buns in a pan or toaster until warm and golden.',
      'Prepare the Sauce: Mix mayonnaise and ketchup. Add lemon juice, salt and pepper to taste (optional).',
      'Prepare the Vegetables: Wash and slice lettuce, tomato, onion and cucumber.',
      'Assemble the Burger: Spread sauce on the bottom bun, add lettuce, hot chicken chapli kebab, tomato, onion, cucumber and more sauce. Place the top bun and serve immediately.',
    ],
    tags: ['Burgers', 'Chicken', 'Lunch'],
  },

  {
    id: '15',
    slug: 'chicken-chapli-kebab-roll',
    title: 'Chicken Chapli Kebab Roll',
    product: 'Chicken Chapli Kebab',
    productId: '9',
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-chapli-kebab-roll'],
    description:
      'Hot Al-Shamas Chicken Chapli Kebabs rolled in warm paratha with fresh vegetables, yogurt sauce and chutney.',
    ingredients: [
      'Chicken Chapli Kebab (frozen, fully cooked): 2 pieces',
      'Paratha or flatbread: 1–2 pieces',
      'Lettuce: 2–3 leaves (shredded)',
      'Tomato: 1 medium (sliced)',
      'Red onion: 1 small (thinly sliced)',
      'Cucumber: 1 small (julienned)',
      'Yogurt or garlic sauce: 2–3 tbsp',
      'Chutney (optional, mint or tamarind): 1–2 tbsp',
      'Salt: to taste',
      'Chaat masala (optional): 1/2 tsp',
    ],
    instructions: [
      'Heat the kebabs: In a pan, add a little oil and cook the frozen, ready-to-eat chicken chapli kebabs on medium heat for 4–6 minutes, turning occasionally until hot and slightly crisp.',
      'Prepare the vegetables: Slice the lettuce, tomato, onion and cucumber.',
      'Warm the paratha: Heat the paratha or flatbread on a pan until soft and pliable.',
      'Make the sauce: In a small bowl, mix yogurt with a little salt and optional chaat masala. You can also use garlic sauce or mint chutney.',
      'Assemble the roll: Place 1–2 kebabs on the paratha, add lettuce, tomato, onion and cucumber.',
      'Add sauce: Drizzle yogurt sauce and optional chutney over the kebabs and veggies.',
      'Roll and serve: Fold the paratha tightly and serve immediately. You can also wrap it in foil or parchment for easy handling.',
    ],
    tags: ['Wraps', 'Chicken', 'Lunch'],
  },

  {
    id: '16',
    slug: 'chicken-samosa-platter-with-chutneys',
    title: 'Chicken Samosa Platter with Chutneys',
    product: 'Chicken Samosas',
    productId: '26',
    time: '22–25 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-samosa-platter-with-chutneys'],
    description:
      'Crispy chicken samosas served with a selection of homemade chutneys – perfect for sharing, snacking or as a starter.',
    ingredients: [
      '10 pieces (300 g) chicken samosas (frozen, uncooked)',
      '1/2 cup green chutney (mint & coriander)',
      '1/2 cup tamarind chutney',
      '1/2 cup red chili chutney',
      '2 tbsp fresh coriander (for garnish)',
      '4 lemon wedges (for serving)',
      '1/4 cup sliced onions (for serving)',
      '1 cup mixed salad leaves (for serving)',
    ],
    instructions: [
      'Cook Samosas: Heat oil in a deep fryer or saucepan to 180°C (350°F). Fry frozen chicken samosas for 12–15 minutes, or until golden brown and crispy. Alternatively, bake in a preheated oven at 200°C (400°F) for 18–20 minutes, turning halfway through.',
      'Prepare Chutneys: Set out green chutney, tamarind chutney and red chili chutney in small bowls.',
      'Arrange Platter: Place the hot, crispy samosas on a serving board or platter. Add lemon wedges, sliced onions and salad leaves on the side.',
      'Serve: Garnish with fresh coriander and serve immediately with the three chutneys.',
    ],
    tags: ['Snacks', 'Chicken', 'Appetizers'],
  },

  {
    id: '17',
    slug: 'chicken-samosa-street-chaat',
    title: 'Chicken Samosa Street Chaat',
    product: 'Chicken Samosas',
    productId: '26',
    time: '22–25 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chicken-samosa-street-chaat'],
    description:
      'Crispy chicken samosas topped with yogurt, chutneys, fresh onions, tomatoes and crunchy sev – a delicious street-style favorite.',
    ingredients: [
      '10 pieces (300 g) chicken samosas (frozen, uncooked)',
      '1 cup plain yogurt (whisked)',
      '1/4 cup green chutney (mint & coriander)',
      '1/4 cup tamarind chutney',
      '1/2 cup red onion (finely chopped)',
      '1/2 cup tomatoes (finely chopped)',
      '1 tsp chaat masala',
      '1/4 cup sev (crunchy noodles)',
      '2 tbsp fresh coriander (chopped)',
      '4 lemon wedges (for serving)',
    ],
    instructions: [
      'Cook Samosas: Heat oil in a deep fryer or saucepan to 180°C (350°F). Fry frozen chicken samosas for 12–15 minutes, or until golden brown and crispy. Ensure the filling reaches an internal temperature of 74°C (165°F). Alternatively, bake in a preheated oven at 200°C (400°F) for 18–20 minutes.',
      'Prepare Toppings: In a bowl, whisk the yogurt until smooth. Chop onions, tomatoes and fresh coriander.',
      'Assemble Chaat: Break the hot, crispy samosas into bite-sized pieces and place them on a serving plate or bowl.',
      'Add Flavors: Top with yogurt, green chutney, tamarind chutney, chopped onions, tomatoes and sev. Sprinkle with chaat masala and fresh coriander.',
      'Serve: Add a side of lemon wedges and enjoy immediately while crispy.',
    ],
    tags: ['Snacks', 'Chicken', 'Chaat'],
  },
];

export const STORES: Store[] = [
  {
    id: '1',
    name: 'Al-Shamas Store — Mississauga',
    chain: 'Al Shamas',
    address: '1234 Hurontario St',
    city: 'Mississauga',
    province: 'ON',
    postal: 'L5B 1M5',
    phone: '905-555-0101',
  },
  {
    id: '2',
    name: 'Tahoe Supermarket',
    chain: 'Independent',
    address: '456 Dundas St W',
    city: 'Toronto',
    province: 'ON',
    postal: 'M6J 1X5',
    phone: '416-555-0102',
  },
  {
    id: '3',
    name: 'Freshco — Brampton',
    chain: 'FreshCo',
    address: '789 Queen St E',
    city: 'Brampton',
    province: 'ON',
    postal: 'L6W 2B3',
    phone: '905-555-0103',
  },
  {
    id: '4',
    name: 'Nations Fresh Foods',
    chain: 'Nations',
    address: '2 King St W',
    city: 'Hamilton',
    province: 'ON',
    postal: 'L8P 1A1',
    phone: '905-555-0104',
  },
  {
    id: '5',
    name: 'Iqbal Foods — Scarborough',
    chain: 'Iqbal Foods',
    address: '3515 Lawrence Ave E',
    city: 'Scarborough',
    province: 'ON',
    postal: 'M1H 1B1',
    phone: '416-555-0105',
  },
  {
    id: '6',
    name: 'Adonis — Montreal',
    chain: 'Adonis',
    address: '2001 Sauvé Est',
    city: 'Montreal',
    province: 'QC',
    postal: 'H2C 1Z3',
    phone: '514-555-0106',
  },
  {
    id: '7',
    name: 'Marché Halal Laval',
    chain: 'Independent',
    address: '500 Boul de la Concorde O',
    city: 'Laval',
    province: 'QC',
    postal: 'H7N 5A3',
    phone: '450-555-0107',
  },
  {
    id: '8',
    name: 'T&T Supermarket — Burnaby',
    chain: 'T&T',
    address: '4800 Kingsway',
    city: 'Burnaby',
    province: 'BC',
    postal: 'V5H 4J2',
    phone: '604-555-0108',
  },
  {
    id: '9',
    name: 'Halal Meats & More — Calgary',
    chain: 'Independent',
    address: '112 17 Ave SW',
    city: 'Calgary',
    province: 'AB',
    postal: 'T2S 0A1',
    phone: '403-555-0109',
  },
  {
    id: '10',
    name: 'Freshco — Ottawa',
    chain: 'FreshCo',
    address: '200 Rideau St',
    city: 'Ottawa',
    province: 'ON',
    postal: 'K1N 5Y1',
    phone: '613-555-0110',
  },
  {
    id: '11',
    name: 'Iqbal Foods — North York',
    chain: 'Iqbal Foods',
    address: '2940 Lawrence Ave E',
    city: 'North York',
    province: 'ON',
    postal: 'M1P 2T8',
    phone: '416-555-0111',
  },
  {
    id: '12',
    name: 'Bulk Barn — Winnipeg',
    chain: 'Bulk Barn',
    address: '1485 Portage Ave',
    city: 'Winnipeg',
    province: 'MB',
    postal: 'R3G 0W4',
    phone: '204-555-0112',
  },
];