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

  // Tikka and Paratha
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
  'kebab-wraps-with-mint-chutney':
    '/images/products/Kebab Wraps with Mint Chutney.png',

  'charcoal-kebab-rice-bowl':
    '/images/products/Charcoal Kebab Rice Bowl.png',

  'samosa-chaat':
    '/images/products/Samosa Chaat.png',

  'tikka-naan-pizza':
    '/images/products/Tikka Naan Pizza.png',

  'chapli-kebab-burger':
    '/images/products/Chapli Kebab Burger.png',

  'al-shamas-snack-platter':
    '/images/products/Al Shamas Snack Platter.png',
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
    id: '21',
    slug: 'tandoori-chicken-tikka',
    name: 'Tandoori Chicken Tikka',
    category: 'Tikka & Grills',
    weight: '560 g',
    description:
      'Tender chicken tikka marinated in a rich tandoori spice blend.',
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
      'Flaky layered frozen parathas that cook golden and crisp in minutes.',
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
    slug: 'kebab-wraps-with-mint-chutney',
    title: 'Kebab Wraps with Mint Chutney',
    product: 'Chicken Sheekh Kebab',
    productId: '2',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['kebab-wraps-with-mint-chutney'],
    description:
      'Wrap juicy Al Shamas Chicken Sheekh Kebabs with crisp vegetables and refreshing mint chutney.',
    ingredients: [
      '8 Al Shamas Chicken Sheekh Kebabs',
      '4 large wraps or flatbreads',
      '1 cup shredded lettuce',
      '1 tomato, thinly sliced',
      '1/2 red onion, thinly sliced',
      '1/2 cucumber, cut into strips',
      '1/2 cup mint chutney',
      '1/2 cup garlic yogurt sauce',
      'Lemon wedges',
    ],
    instructions: [
      'Cook the Al Shamas Chicken Sheekh Kebabs according to the package instructions until hot and lightly charred.',
      'Warm the wraps in a dry pan for 20 seconds per side.',
      'Spread mint chutney and garlic yogurt sauce down the centre of each wrap.',
      'Add lettuce, tomato, onion, cucumber, and two kebabs.',
      'Fold in the sides, roll tightly, and slice in half.',
      'Serve immediately with lemon wedges and extra mint chutney.',
    ],
    nutrition: {
      calories: 430,
      protein: '27g',
      fat: '17g',
      carbs: '43g',
    },
    tags: ['Wraps', 'Chicken', 'Lunch'],
  },

  {
    id: '2',
    slug: 'charcoal-kebab-rice-bowl',
    title: 'Charcoal Kebab Rice Bowl',
    product: 'Chicken Charcoal Kebab',
    productId: '5',
    time: '30 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['charcoal-kebab-rice-bowl'],
    description:
      'A colourful rice bowl topped with smoky Al Shamas Chicken Charcoal Kebabs and fresh vegetables.',
    ingredients: [
      '8 Al Shamas Chicken Charcoal Kebabs',
      '3 cups cooked basmati rice',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, thinly sliced',
      '1 cup shredded lettuce',
      '1/2 cup garlic yogurt sauce',
      'Fresh coriander',
      'Lemon wedges',
    ],
    instructions: [
      'Cook the Al Shamas Chicken Charcoal Kebabs according to the package instructions until hot and lightly charred.',
      'Divide the warm basmati rice among four bowls.',
      'Arrange cucumber, tomatoes, onion, and lettuce around the rice.',
      'Slice the kebabs and place them over each bowl.',
      'Drizzle with garlic yogurt sauce and garnish with coriander.',
      'Serve hot with lemon wedges.',
    ],
    nutrition: {
      calories: 510,
      protein: '31g',
      fat: '16g',
      carbs: '59g',
    },
    tags: ['Rice Bowl', 'Chicken', 'Dinner'],
  },

  {
    id: '3',
    slug: 'samosa-chaat',
    title: 'Samosa Chaat',
    product: 'Chicken Samosas',
    productId: '26',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['samosa-chaat'],
    description:
      'Crispy Al Shamas Chicken Samosas layered with chickpeas, yogurt, chutneys, herbs, and sev.',
    ingredients: [
      '8 Al Shamas Chicken Samosas',
      '1 cup cooked chickpeas',
      '1 cup plain yogurt, whisked',
      '1/3 cup tamarind chutney',
      '1/3 cup mint chutney',
      '1 small red onion, finely chopped',
      '1 small tomato, finely chopped',
      '1/4 cup sev',
      '1 tsp chaat masala',
      'Fresh coriander',
    ],
    instructions: [
      'Cook the Al Shamas Chicken Samosas according to the package instructions until crisp and golden.',
      'Arrange the hot samosas on a serving plate and gently break each one open.',
      'Spoon the chickpeas and whisked yogurt over the samosas.',
      'Drizzle with tamarind chutney and mint chutney.',
      'Top with onion, tomato, sev, chaat masala, and coriander.',
      'Serve immediately while the samosas remain crisp.',
    ],
    nutrition: {
      calories: 460,
      protein: '18g',
      fat: '19g',
      carbs: '55g',
    },
    tags: ['Samosa', 'Chicken', 'Chaat'],
  },

  {
    id: '4',
    slug: 'tikka-naan-pizza',
    title: 'Tikka Naan Pizza',
    product: 'Chicken Kafta Kebab',
    productId: '11',
    time: '35 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['tikka-naan-pizza'],
    description:
      'Naan pizza topped with Al Shamas Chicken Kafta Kebabs coated in tandoori sauce, peppers, onion, and melted cheese.',
    ingredients: [
      '8 Al Shamas Chicken Kafta Kebabs',
      '1/2 cup tandoori sauce',
      '4 naan breads',
      '3/4 cup pizza sauce',
      '2 cups shredded mozzarella',
      '1/2 red onion, thinly sliced',
      '1 bell pepper, thinly sliced',
      '1/4 cup fresh coriander',
      'Chili flakes to taste',
    ],
    instructions: [
      'Preheat the oven to 220°C or 425°F and line a baking tray.',
      'Coat the Al Shamas Chicken Kafta Kebabs evenly with the tandoori sauce.',
      'Let the coated Chicken Kafta Kebabs marinate for 10 minutes.',
      'Cook the marinated Chicken Kafta Kebabs according to the package instructions until hot and lightly charred.',
      'Cut the cooked Chicken Kafta Kebabs into bite-size pieces.',
      'Place the naan breads on the prepared baking tray.',
      'Spread each naan with pizza sauce.',
      'Top with mozzarella, tandoori-coated Chicken Kafta pieces, red onion, and bell pepper.',
      'Bake for 8–10 minutes until the cheese melts and the naan edges become crisp.',
      'Garnish with fresh coriander and chili flakes before serving.',
    ],
    nutrition: {
      calories: 550,
      protein: '36g',
      fat: '22g',
      carbs: '52g',
    },
    tags: ['Pizza', 'Chicken', 'Dinner'],
  },

  {
    id: '5',
    slug: 'chapli-kebab-burger',
    title: 'Chapli Kebab Burger',
    product: 'Chicken Chappal Kebab',
    productId: '7',
    time: '20 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chapli-kebab-burger'],
    description:
      'A juicy Al Shamas Chicken Chappal Kebab served in a toasted brioche bun with garlic sauce and fresh toppings.',
    ingredients: [
      '4 Al Shamas Chicken Chappal Kebabs',
      '4 brioche burger buns',
      '1/2 cup garlic yogurt sauce',
      '1 cup shredded red cabbage',
      '1 tomato, sliced',
      '1/2 cup pickled jalapeños',
      '4 lettuce leaves',
      'Lemon wedges',
    ],
    instructions: [
      'Cook the Al Shamas Chicken Chappal Kebabs from frozen on a hot griddle for 5–6 minutes per side.',
      'Make sure the kebabs are browned and completely cooked through.',
      'Toast the burger buns cut-side down in the same pan.',
      'Spread garlic yogurt sauce on both sides of each bun.',
      'Layer lettuce, shredded cabbage, tomato, and one cooked kebab.',
      'Top with pickled jalapeños and close the burger.',
      'Serve immediately with lemon wedges.',
    ],
    nutrition: {
      calories: 490,
      protein: '30g',
      fat: '18g',
      carbs: '48g',
    },
    tags: ['Burger', 'Chicken', 'Dinner'],
  },

  {
    id: '6',
    slug: 'al-shamas-snack-platter',
    title: 'Al Shamas Snack Platter',
    product: 'Al Shamas Assorted Snacks',
    productId: '23',
    time: '35 min',
    servings: 6,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['al-shamas-snack-platter'],
    description:
      'The ultimate party platter featuring four Al Shamas favourites: Chicken Spring Rolls, Chicken Chappal Kebabs, Chicken Sheekh Kebabs, and Tandoori Chicken Tikka.',
    ingredients: [
      '8 Al Shamas Chicken Spring Rolls',
      '3 Al Shamas Chicken Chappal Kebabs',
      '6 Al Shamas Chicken Sheekh Kebabs',
      '400 g Al Shamas Tandoori Chicken Tikka',
      '1 cup mint chutney',
      '1 cup garlic yogurt dip',
      '1 cucumber, sliced',
      '1 small red onion, sliced into rings',
      '2 lemons, cut into wedges',
      'Fresh coriander for garnish',
    ],
    instructions: [
      'Cook the Al Shamas Chicken Spring Rolls from frozen according to the package instructions until golden and crispy.',
      'Pan-fry the Chicken Chappal Kebabs over medium heat until browned and cooked through.',
      'Cut each cooked Chicken Chappal Kebab into wedges.',
      'Grill or pan-fry the Chicken Sheekh Kebabs until heated through with light char marks.',
      'Cook the Tandoori Chicken Tikka until hot, tender, and lightly charred around the edges.',
      'Arrange all four cooked Al Shamas products in separate sections on a large serving board.',
      'Add small bowls of mint chutney and garlic yogurt dip.',
      'Fill the remaining spaces with cucumber, onion rings, lemon wedges, and fresh coriander.',
      'Serve immediately as a hot party snack platter.',
    ],
    nutrition: {
      calories: 540,
      protein: '42g',
      fat: '30g',
      carbs: '28g',
    },
    tags: ['Snack Platter', 'Chicken', 'Party Food'],
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