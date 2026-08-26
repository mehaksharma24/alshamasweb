export const PRODUCT_IMAGES: Record<string, string> = {
  // --- UPDATED WITH NEW IMAGES (matched by name similarity) ---

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

  // Tikka & Paratha
  'tandoori-chicken-tikka':
    '/images/products/tandoori-chicken-tikka.jpg',
  'plain-paratha':
    '/images/products/plain-paratha.jpg',

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

  // --- PRODUCTS WITHOUT NEW IMAGES ---
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
  'kebab-wraps-with-mint-chutney':
    '/images/products/Kebab Wraps with Mint Chutney.png',
  'charcoal-kebab-rice-bowl':
    '/images/products/Charcoal Kebab Rice Bowl.png',
  'samosa-chaat':
    '/images/products/Samosa Chaat.png',
  'tikka-naan-pizza':
    '/images/products/Tikka Naan Pizza.png',
  'paratha-french-toast':
    '/images/products/Paratha French Toast.png',
  'chapli-kebab-burger':
    '/images/products/Chapli Kebab Burger.png',
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

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  product: string;
  productId: string;
  time: string;
  servings: number;
  difficulty: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
  };
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

export const PRODUCTS: Product[] = [
  // ---------- KABABS ----------
  {
    id: '1',
    slug: 'beef-sheekh-kebab-560g',
    name: 'Beef Sheekh Kebab',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description:
      'Hand-formed beef sheekh kebabs made from premium cuts and time-honoured spice blends, crafted to keep that authentic homemade taste in every bite.',
    ingredients:
      'Beef, onion, cilantro, green chili, ginger, garlic, cumin, coriander, garam masala, salt.',
    image: PRODUCT_IMAGES['beef-sheekh-kebab-560g'],
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
      'Tender ground chicken blended with aromatic spices and herbs, hand-formed on skewers to preserve an authentic, homemade taste in every bite.',
    ingredients:
      'Chicken, onion, cilantro, green chili, ginger, garlic, cumin, coriander, garam masala, salt.',
    image: PRODUCT_IMAGES['chicken-sheekh-kebab-560g'],
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
      'Rich, tender lamb kebabs grilled over real charcoal for a deep smoky flavour, packed in a generous catering-size portion.',
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
      'Fully cooked beef kebabs finished with real charcoal smoke for deep, robust flavour, ready to eat within minutes. Also available in 345 g.',
    ingredients:
      'Beef, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['beef-charcoal-kebab-560g'],
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
      'Fully cooked chicken kebabs finished with real charcoal smoke for a mouthwatering flavour, ready to eat within minutes. Also available in 345 g.',
    ingredients:
      'Chicken, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['chicken-charcoal-kebab-560g'],
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
      'Jumbo Peshwari-style chappal kebabs handmade from premium beef and a traditional whole-spice blend for an authentic street-food taste.',
    ingredients:
      'Beef, onion, tomato, egg, green chili, pomegranate seeds, fresh herbs, salt.',
    image: PRODUCT_IMAGES['beef-chappal-kebab-450g'],
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
      'Jumbo Peshwari-style chappal kebabs handmade from premium chicken and a traditional whole-spice blend for an authentic street-food taste.',
    ingredients:
      'Chicken, onion, tomato, egg, green chili, pomegranate seeds, fresh herbs, salt.',
    image: PRODUCT_IMAGES['chicken-chappal-kebab-450g'],
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
      'Flat, disc-shaped Peshwari beef kebabs made with a signature spice blend — crispy outside, juicy inside, and perfect for gatherings.',
    ingredients:
      'Beef, tomato, onion, egg, green chili, dried pomegranate seeds, cumin, coriander, salt.',
    image: PRODUCT_IMAGES['beef-chapli-kebab-1kg'],
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
      'Flat, disc-shaped Peshwari chicken kebabs made with a signature spice blend — crispy outside, juicy inside, and perfect for gatherings.',
    ingredients:
      'Chicken, tomato, onion, egg, green chili, dried pomegranate seeds, cumin, coriander, salt.',
    image: PRODUCT_IMAGES['chicken-chapli-kebab-1kg'],
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
      'Chicken kebabs marinated in a rich tandoori spice blend and slow-grilled to deliver bold, smoky, authentic tandoori flavour.',
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
      'Middle Eastern-style chicken kafta kebabs, seasoned with warm spices and fresh herbs for a fragrant, juicy bite.',
    ingredients:
      'Chicken, onion, parsley, garlic, allspice, cumin, coriander, salt.',
    image: PRODUCT_IMAGES['chicken-kafta-kebab-400g'],
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
    id: '21',
    slug: 'tandoori-chicken-tikka',
    name: 'Tandoori Chicken Tikka',
    category: 'Tikka & Grills',
    weight: '560 g',
    description:
      'Tender chicken tikka marinated in a rich tandoori spice blend and grilled for bold, smoky flavour.',
    ingredients:
      'Chicken, yogurt, tandoori spice blend, ginger, garlic, red chili, lemon juice, salt.',
    image: PRODUCT_IMAGES['tandoori-chicken-tikka'],
    tags: ['Halal', 'Chicken', 'Tandoori'],
    nutrition: {
      calories: 210,
      protein: '22g',
      fat: '11g',
      carbs: '5g',
      sodium: '400mg',
      servingSize: '100g',
    },
  },

  {
    id: '22',
    slug: 'frozen-parathas',
    name: 'Frozen Parathas',
    category: 'Parathas',
    weight: '1 kg',
    pieces: '20 pieces',
    description:
      'Flaky, layered frozen parathas that cook golden and crisp in minutes.',
    ingredients:
      'Wheat flour, vegetable oil, water, salt.',
    image: PRODUCT_IMAGES['plain-paratha'],
    tags: ['Halal', 'Vegetarian'],
    nutrition: {
      calories: 250,
      protein: '5g',
      fat: '12g',
      carbs: '30g',
      sodium: '300mg',
      servingSize: '1 paratha',
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
      'A fully cooked, charcoal-smoked meat kebab blend ready to heat and serve within minutes, with deep smoky flavour throughout.',
    ingredients:
      'Beef, chicken, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['meat-charcoal-kebab-cooked-560g'],
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

  // ---------- SPRING ROLLS ----------

  {
    id: '23',
    slug: 'chicken-spring-roll',
    name: 'Chicken Spring Rolls',
    category: 'Spring Rolls',
    weight: '1.2 kg',
    pieces: '40 pieces',
    description:
      'Crispy golden spring rolls filled with seasoned chicken, vegetables, and aromatic spices. Perfect as a quick snack, appetizer, or party favourite.',
    ingredients:
      'Chicken, cabbage, carrot, onion, spring onion, wheat flour, vegetable oil, garlic, ginger, black pepper, soy sauce, salt.',
    image: PRODUCT_IMAGES['chicken-spring-roll'],
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
      'Crispy golden spring rolls packed with savoury seasoned beef, vegetables, and aromatic spices for a delicious and satisfying bite.',
    ingredients:
      'Beef, cabbage, carrot, onion, spring onion, wheat flour, vegetable oil, garlic, ginger, black pepper, soy sauce, salt.',
    image: PRODUCT_IMAGES['beef-spring-roll'],
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
      'Golden crispy spring rolls filled with tender seasoned mutton, vegetables, and aromatic spices for a rich and flavourful snack.',
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
];

export const RECIPES: Recipe[] = [
  {
    id: '6',
    slug: 'chapli-kebab-burger',
    title: 'Chapli Kebab Burger',
    product: 'Chicken Chapli Kebab',
    productId: '7',
    time: '20 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chapli-kebab-burger'],
    description:
      'Stack a juicy Al Shamas Chicken Chapli Kebab in a toasted brioche bun with garlic sauce, pickles, and shredded cabbage.',
    ingredients: [
      '4 Al Shamas Chicken Chapli Kebabs',
      '4 brioche burger buns',
      'Garlic yogurt sauce',
      'Shredded red cabbage',
      'Sliced tomato',
      'Pickled jalapeños',
      'Lettuce',
      'Lemon wedges',
    ],
    instructions: [
      'Cook chapli kebabs from frozen on a hot griddle 5–6 min per side until charred and cooked through.',
      'Toast buns cut-side down in the same pan.',
      'Spread garlic sauce on both sides of the bun.',
      'Layer lettuce, cabbage, tomato, and kebab.',
      'Top with jalapeños and serve with a lemon wedge.',
    ],
    nutrition: {
      calories: 490,
      protein: '30g',
      fat: '18g',
      carbs: '48g',
    },
    tags: ['Burger', 'Chicken', 'Dinner'],
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