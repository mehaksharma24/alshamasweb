import { PRODUCT_IMAGES, RECIPE_IMAGES } from './assets';

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
  nutrition: { calories: number; protein: string; fat: string; carbs: string };
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
    slug: 'chicken-sheekh-kebab-560g',
    name: 'Chicken Sheekh Kebab',
    category: 'Kababs',
    weight: '560 g',
    pieces: '13 pieces',
    description: 'Tender ground chicken blended with aromatic spices and herbs, formed on skewers and perfectly chargrilled. A classic North Indian kabab reimagined for modern tables.',
    ingredients: 'Chicken, onion, cilantro, green chili, ginger, garlic, cumin, coriander, garam masala, salt.',
    image: PRODUCT_IMAGES['chicken-sheekh-kebab-560g'],
    tags: ['Bestseller', 'Halal', 'Chicken'],
    nutrition: { calories: 210, protein: '18g', fat: '12g', carbs: '6g', sodium: '380mg', servingSize: '2 pieces (86g)' },
  },
  {
    id: '2',
    slug: 'beef-charcoal-kebab-345g',
    name: 'Beef Charcoal Kebab',
    category: 'Kababs',
    weight: '345 g',
    description: 'Premium beef kababs kissed with real charcoal smoke, delivering deep, robust flavour in every bite. Available in 345 g and 560 g packs.',
    ingredients: 'Beef, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['beef-charcoal-kebab-345g'],
    tags: ['Halal', 'Beef', 'Charcoal Smoked'],
    nutrition: { calories: 240, protein: '20g', fat: '15g', carbs: '4g', sodium: '420mg', servingSize: '2 pieces (90g)' },
  },
  {
    id: '3',
    slug: 'beef-charcoal-kebab-560g',
    name: 'Beef Charcoal Kebab',
    category: 'Kababs',
    weight: '560 g',
    description: 'Premium beef kababs kissed with real charcoal smoke, delivering deep, robust flavour in every bite. Family-size 560 g pack.',
    ingredients: 'Beef, charcoal smoked spice blend, onion, garlic, ginger, cumin, salt.',
    image: PRODUCT_IMAGES['beef-charcoal-kebab-560g'],
    tags: ['Halal', 'Beef', 'Charcoal Smoked', 'Family Pack'],
    nutrition: { calories: 240, protein: '20g', fat: '15g', carbs: '4g', sodium: '420mg', servingSize: '2 pieces (90g)' },
  },
  {
    id: '4',
    slug: 'chicken-chapli-kebab-1kg',
    name: 'Chicken Chapli Kebab',
    category: 'Kababs',
    weight: '1 kg',
    pieces: '20 pieces',
    description: 'Flat, disc-shaped Peshwari-style chicken kebabs made with a secret spice blend — crispy on the outside, juicy on the inside. Perfect for gatherings.',
    ingredients: 'Chicken, tomato, onion, egg, green chili, dried pomegranate seeds, cumin, coriander, salt.',
    image: PRODUCT_IMAGES['chicken-chapli-kebab-1kg'],
    tags: ['Bestseller', 'Halal', 'Chicken', 'Party Pack'],
    nutrition: { calories: 195, protein: '16g', fat: '11g', carbs: '8g', sodium: '360mg', servingSize: '1 piece (50g)' },
  },
  {
    id: '5',
    slug: 'chicken-chappal-kebab-450g',
    name: 'Chicken Chappal Kebab',
    category: 'Kababs',
    weight: '450 g',
    pieces: '6 pieces',
    description: 'Jumbo Peshwari chappal-style chicken kebabs — large, flavourful, and made with whole spices for an authentic street-food experience.',
    ingredients: 'Chicken, onion, tomato, egg, green chili, pomegranate seeds, fresh herbs, salt.',
    image: PRODUCT_IMAGES['chicken-chappal-kebab-450g'],
    tags: ['Halal', 'Chicken', 'Jumbo'],
    nutrition: { calories: 220, protein: '17g', fat: '13g', carbs: '7g', sodium: '370mg', servingSize: '1 piece (75g)' },
  },
  {
    id: '6',
    slug: 'jumbo-beef-samosa-360g',
    name: 'Jumbo Beef Samosa',
    category: 'Samosas',
    weight: '360 g',
    description: 'Crispy golden pastry stuffed with spiced minced beef and potatoes. Each samosa is generously sized for a hearty snack or appetiser.',
    ingredients: 'Wheat flour, beef, potato, onion, peas, cumin, coriander, garam masala, vegetable oil, salt.',
    image: PRODUCT_IMAGES['jumbo-beef-samosa-360g'],
    tags: ['Bestseller', 'Halal', 'Beef'],
    nutrition: { calories: 280, protein: '12g', fat: '16g', carbs: '24g', sodium: '340mg', servingSize: '1 samosa (90g)' },
  },
  {
    id: '7',
    slug: 'jumbo-beef-samosa-650g',
    name: 'Jumbo Beef Samosa',
    category: 'Samosas',
    weight: '650 g',
    description: 'Family-size pack of our most popular jumbo beef samosas — crispy, golden, and stuffed with richly spiced beef and potato filling.',
    ingredients: 'Wheat flour, beef, potato, onion, peas, cumin, coriander, garam masala, vegetable oil, salt.',
    image: PRODUCT_IMAGES['jumbo-beef-samosa-650g'],
    tags: ['Halal', 'Beef', 'Family Pack'],
    nutrition: { calories: 280, protein: '12g', fat: '16g', carbs: '24g', sodium: '340mg', servingSize: '1 samosa (90g)' },
  },
  {
    id: '8',
    slug: 'jumbo-beef-samosa-1-2kg',
    name: 'Jumbo Beef Samosa',
    category: 'Samosas',
    weight: '1.2 kg',
    description: 'Catering-size pack of jumbo beef samosas — ideal for events, parties, and family gatherings. Same great taste at every scale.',
    ingredients: 'Wheat flour, beef, potato, onion, peas, cumin, coriander, garam masala, vegetable oil, salt.',
    image: PRODUCT_IMAGES['jumbo-beef-samosa-1-2kg'],
    tags: ['Halal', 'Beef', 'Catering'],
    nutrition: { calories: 280, protein: '12g', fat: '16g', carbs: '24g', sodium: '340mg', servingSize: '1 samosa (90g)' },
  },
  {
    id: '9',
    slug: 'jumbo-beef-samosa-1-5kg',
    name: 'Jumbo Beef Samosa',
    category: 'Samosas',
    weight: '1.5 kg',
    description: 'Our largest pack — perfect for restaurants, catering, and big celebrations. Consistently crispy, consistently delicious.',
    ingredients: 'Wheat flour, beef, potato, onion, peas, cumin, coriander, garam masala, vegetable oil, salt.',
    image: PRODUCT_IMAGES['jumbo-beef-samosa-1-5kg'],
    tags: ['Halal', 'Beef', 'Catering', 'Bulk'],
    nutrition: { calories: 280, protein: '12g', fat: '16g', carbs: '24g', sodium: '340mg', servingSize: '1 samosa (90g)' },
  },
  {
    id: '10',
    slug: 'vegetable-samosa',
    name: 'Vegetable Samosa',
    category: 'Samosas',
    weight: '400 g',
    description: 'Light, crispy pastry filled with a fragrant blend of spiced potatoes, peas, and herbs. A beloved classic for everyone at the table.',
    ingredients: 'Wheat flour, potato, peas, onion, carrot, cumin, coriander, green chili, ginger, vegetable oil, salt.',
    image: PRODUCT_IMAGES['vegetable-samosa'],
    tags: ['Halal', 'Vegetarian'],
    nutrition: { calories: 210, protein: '4g', fat: '10g', carbs: '28g', sodium: '280mg', servingSize: '1 samosa (80g)' },
  },
  {
    id: '11',
    slug: 'tandoori-chicken-tikka',
    name: 'Tandoori Chicken Tikka',
    category: 'Tikka & Grills',
    weight: '500 g',
    description: 'Bone-in chicken pieces marinated overnight in a rich yogurt and tandoori spice blend, then char-grilled for authentic smoky flavour.',
    ingredients: 'Chicken, yogurt, lemon juice, tandoori spice blend, ginger, garlic, red chili, salt.',
    image: PRODUCT_IMAGES['tandoori-chicken-tikka'],
    tags: ['Bestseller', 'Halal', 'Chicken', 'Grilled'],
    nutrition: { calories: 185, protein: '22g', fat: '9g', carbs: '4g', sodium: '410mg', servingSize: '2 pieces (120g)' },
  },
  {
    id: '12',
    slug: 'frozen-parathas',
    name: 'Frozen Parathas',
    category: 'Parathas',
    weight: '400 g',
    description: 'Soft, fluffy, layered flatbreads that cook perfectly in minutes — no thawing needed. Made with simple wholesome ingredients the traditional way.',
    ingredients: 'Whole wheat flour, water, vegetable oil, salt.',
    image: PRODUCT_IMAGES['frozen-parathas'],
    tags: ['Halal', 'Vegetarian', 'Ready in Minutes'],
    nutrition: { calories: 160, protein: '4g', fat: '5g', carbs: '26g', sodium: '210mg', servingSize: '1 paratha (60g)' },
  },
  {
    id: '13',
    slug: 'plain-paratha-regular',
    name: 'Plain Paratha',
    category: 'Parathas',
    weight: '600 g',
    description: 'Classic plain parathas — golden, flaky, and ready in minutes on the tawa. Perfect alongside curries, dips, or morning chai.',
    ingredients: 'Whole wheat flour, water, vegetable oil, salt.',
    image: PRODUCT_IMAGES['plain-paratha-regular'],
    tags: ['Halal', 'Vegetarian'],
    nutrition: { calories: 155, protein: '4g', fat: '5g', carbs: '25g', sodium: '200mg', servingSize: '1 paratha (60g)' },
  },
  {
    id: '14',
    slug: 'plain-paratha-family',
    name: 'Plain Paratha Family Pack',
    category: 'Parathas',
    weight: '1.2 kg',
    description: 'Family-size pack of our classic plain parathas — stock the freezer and have a wholesome staple ready any time.',
    ingredients: 'Whole wheat flour, water, vegetable oil, salt.',
    image: PRODUCT_IMAGES['plain-paratha-family'],
    tags: ['Halal', 'Vegetarian', 'Family Pack'],
    nutrition: { calories: 155, protein: '4g', fat: '5g', carbs: '25g', sodium: '200mg', servingSize: '1 paratha (60g)' },
  },
];

export const CATEGORIES = ['All', 'Kababs', 'Samosas', 'Tikka & Grills', 'Parathas'];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    slug: 'kebab-wraps-with-mint-chutney',
    title: 'Kebab Wraps with Mint Chutney',
    product: 'Chicken Sheekh Kebab',
    productId: '1',
    time: '20 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['kebab-wraps-with-mint-chutney'],
    description: 'Quick, satisfying wraps built around Al Shamas Chicken Sheekh Kebabs with fresh mint chutney, crisp lettuce, and pickled onions.',
    ingredients: ['6 Al Shamas Chicken Sheekh Kebabs', '4 flatbreads or tortillas', 'Shredded lettuce', '1 tomato, sliced', 'Red onion, thinly sliced', 'Greek yogurt', 'Fresh mint chutney', 'Squeeze of lemon'],
    instructions: ['Cook kebabs from frozen on a hot skillet or grill for 8–10 min, turning occasionally.', 'Warm flatbreads in a dry pan for 1 minute each side.', 'Spread a spoonful of yogurt on each flatbread.', 'Lay lettuce, tomato, and onion on top.', 'Slice kebabs and arrange on the wrap.', 'Drizzle with mint chutney and a squeeze of lemon. Fold and serve immediately.'],
    nutrition: { calories: 420, protein: '28g', fat: '14g', carbs: '42g' },
    tags: ['Quick', 'Chicken', 'Wrap'],
  },
  {
    id: '2',
    slug: 'charcoal-kebab-rice-bowl',
    title: 'Charcoal Kebab Rice Bowl',
    product: 'Beef Charcoal Kebab',
    productId: '2',
    time: '30 min',
    servings: 2,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['charcoal-kebab-rice-bowl'],
    description: 'Smoky beef charcoal kebabs over fluffy basmati rice with roasted peppers and a tangy tamarind drizzle.',
    ingredients: ['4 Al Shamas Beef Charcoal Kebabs', '1.5 cups basmati rice', '1 red bell pepper', '1 yellow bell pepper', 'Tamarind sauce', 'Fresh coriander', 'Sliced cucumber', 'Salt and pepper'],
    instructions: ['Cook rice as per package instructions.', 'Grill kebabs from frozen for 10–12 min, turning halfway.', 'Slice peppers and char them in the same grill pan.', 'Divide rice between bowls. Top with peppers and sliced kebabs.', 'Drizzle with tamarind sauce and garnish with coriander.'],
    nutrition: { calories: 560, protein: '32g', fat: '18g', carbs: '64g' },
    tags: ['Rice Bowl', 'Beef', 'Dinner'],
  },
  {
    id: '3',
    slug: 'samosa-chaat',
    title: 'Samosa Chaat',
    product: 'Jumbo Beef Samosa',
    productId: '6',
    time: '15 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['samosa-chaat'],
    description: 'A vibrant street-food classic — crispy Al Shamas beef samosas topped with chickpea curry, tangy chutneys, and crunchy sev.',
    ingredients: ['4 Al Shamas Jumbo Beef Samosas', '1 can chickpeas, drained', '1 tsp cumin', 'Tamarind chutney', 'Mint chutney', 'Plain yogurt', 'Sev (crispy noodles)', 'Chopped red onion', 'Fresh coriander'],
    instructions: ['Bake or air-fry samosas from frozen until golden and crispy, about 15 min at 375°F.', 'Warm chickpeas with cumin, salt, and a splash of water.', 'Place samosas on a plate and lightly crush.', 'Spoon chickpeas over top.', 'Drizzle with yogurt, tamarind chutney, and mint chutney.', 'Finish with sev, onion, and coriander.'],
    nutrition: { calories: 480, protein: '16g', fat: '20g', carbs: '58g' },
    tags: ['Street Food', 'Snack', 'Beef'],
  },
  {
    id: '4',
    slug: 'tikka-naan-pizza',
    title: 'Tikka Naan Pizza',
    product: 'Tandoori Chicken Tikka',
    productId: '11',
    time: '25 min',
    servings: 2,
    difficulty: 'Medium',
    image: RECIPE_IMAGES['tikka-naan-pizza'],
    description: 'Fusion at its finest — tandoori chicken pieces on naan, with mozzarella, roasted peppers, and a drizzle of cilantro yogurt.',
    ingredients: ['200 g Al Shamas Tandoori Chicken Tikka, cooked and shredded', '2 naan breads', 'Tomato passata', 'Shredded mozzarella', 'Sliced red onion', 'Sliced green pepper', 'Plain yogurt mixed with cilantro and garlic', 'Chili flakes'],
    instructions: ['Pre-heat oven to 425°F.', 'Cook tikka pieces per pack instructions, then remove from bone and shred.', 'Spread passata on naan. Add mozzarella, then vegetables.', 'Top with shredded tikka.', 'Bake for 10–12 min until cheese bubbles.', 'Drizzle with cilantro yogurt and chili flakes before serving.'],
    nutrition: { calories: 510, protein: '34g', fat: '16g', carbs: '52g' },
    tags: ['Fusion', 'Chicken', 'Pizza'],
  },
  {
    id: '5',
    slug: 'paratha-french-toast',
    title: 'Paratha French Toast',
    product: 'Frozen Parathas',
    productId: '12',
    time: '15 min',
    servings: 2,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['paratha-french-toast'],
    description: 'A desi twist on a breakfast classic — Al Shamas parathas soaked in a spiced egg batter and pan-fried until golden.',
    ingredients: ['4 Al Shamas Frozen Parathas, cooked', '3 eggs', '1/4 cup milk', '1/2 tsp cumin', '1/4 tsp red chili', 'Salt to taste', 'Butter for frying', 'Ketchup or chutney to serve'],
    instructions: ['Cook parathas per pack instructions and cool slightly.', 'Whisk eggs, milk, cumin, chili, and salt together.', 'Dip each paratha in the egg mixture, coating both sides.', 'Melt butter in a pan over medium heat.', 'Fry each paratha 2–3 min per side until golden.', 'Serve with ketchup or mint chutney.'],
    nutrition: { calories: 340, protein: '14g', fat: '16g', carbs: '32g' },
    tags: ['Breakfast', 'Quick', 'Vegetarian'],
  },
  {
    id: '6',
    slug: 'chapli-kebab-burger',
    title: 'Chapli Kebab Burger',
    product: 'Chicken Chapli Kebab',
    productId: '4',
    time: '20 min',
    servings: 4,
    difficulty: 'Easy',
    image: RECIPE_IMAGES['chapli-kebab-burger'],
    description: 'Stack a juicy Al Shamas Chicken Chapli Kebab in a toasted brioche bun with garlic sauce, pickles, and shredded cabbage.',
    ingredients: ['4 Al Shamas Chicken Chapli Kebabs', '4 brioche burger buns', 'Garlic yogurt sauce', 'Shredded red cabbage', 'Sliced tomato', 'Pickled jalapeños', 'Lettuce', 'Lemon wedges'],
    instructions: ['Cook chapli kebabs from frozen on a hot griddle 5–6 min per side until charred and cooked through.', 'Toast buns cut-side down in the same pan.', 'Spread garlic sauce on both sides of the bun.', 'Layer lettuce, cabbage, tomato, and kebab.', 'Top with jalapeños and serve with a lemon wedge.'],
    nutrition: { calories: 490, protein: '30g', fat: '18g', carbs: '48g' },
    tags: ['Burger', 'Chicken', 'Dinner'],
  },
];

export const STORES: Store[] = [
  { id: '1', name: 'Al-Shamas Store — Mississauga', chain: 'Al Shamas', address: '1234 Hurontario St', city: 'Mississauga', province: 'ON', postal: 'L5B 1M5', phone: '905-555-0101' },
  { id: '2', name: 'Tahoe Supermarket', chain: 'Independent', address: '456 Dundas St W', city: 'Toronto', province: 'ON', postal: 'M6J 1X5', phone: '416-555-0102' },
  { id: '3', name: 'Freshco — Brampton', chain: 'FreshCo', address: '789 Queen St E', city: 'Brampton', province: 'ON', postal: 'L6W 2B3', phone: '905-555-0103' },
  { id: '4', name: 'Nations Fresh Foods', chain: 'Nations', address: '2 King St W', city: 'Hamilton', province: 'ON', postal: 'L8P 1A1', phone: '905-555-0104' },
  { id: '5', name: 'Iqbal Foods — Scarborough', chain: 'Iqbal Foods', address: '3515 Lawrence Ave E', city: 'Scarborough', province: 'ON', postal: 'M1H 1B1', phone: '416-555-0105' },
  { id: '6', name: 'Adonis — Montreal', chain: 'Adonis', address: '2001 Sauvé Est', city: 'Montreal', province: 'QC', postal: 'H2C 1Z3', phone: '514-555-0106' },
  { id: '7', name: 'Marché Halal Laval', chain: 'Independent', address: '500 Boul de la Concorde O', city: 'Laval', province: 'QC', postal: 'H7N 5A3', phone: '450-555-0107' },
  { id: '8', name: 'T&T Supermarket — Burnaby', chain: 'T&T', address: '4800 Kingsway', city: 'Burnaby', province: 'BC', postal: 'V5H 4J2', phone: '604-555-0108' },
  { id: '9', name: 'Halal Meats & More — Calgary', chain: 'Independent', address: '112 17 Ave SW', city: 'Calgary', province: 'AB', postal: 'T2S 0A1', phone: '403-555-0109' },
  { id: '10', name: 'Freshco — Ottawa', chain: 'FreshCo', address: '200 Rideau St', city: 'Ottawa', province: 'ON', postal: 'K1N 5Y1', phone: '613-555-0110' },
  { id: '11', name: 'Iqbal Foods — North York', chain: 'Iqbal Foods', address: '2940 Lawrence Ave E', city: 'North York', province: 'ON', postal: 'M1P 2T8', phone: '416-555-0111' },
  { id: '12', name: 'Bulk Barn — Winnipeg', chain: 'Bulk Barn', address: '1485 Portage Ave', city: 'Winnipeg', province: 'MB', postal: 'R3G 0W4', phone: '204-555-0112' },
];
