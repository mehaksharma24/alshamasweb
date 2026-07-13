// ============================================================
//  AL SHAMAS — CENTRAL ASSETS CONFIG
//  Replace any URL below to swap images/logos site-wide.
//  Set a value to '' to fall back to the default placeholder.
// ============================================================

export const BRAND = {
  /** Main logo image URL. Shown in navbar, footer, and splash screen.
   *  Set to '' to use the text "A" fallback. */
  logoUrl: '',

  /** Favicon URL (optional) */
  faviconUrl: '',
};

// ── Hero & page backgrounds ──────────────────────────────────

export const HERO_IMAGE =
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const SPLASH_BG_IMAGE =
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600';

// ── Product images ───────────────────────────────────────────
// Keys match product slugs for easy lookup.

export const PRODUCT_IMAGES: Record<string, string> = {
  'chicken-sheekh-kebab-560g':
    'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800',
  'beef-charcoal-kebab-345g':
    'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
  'beef-charcoal-kebab-560g':
    'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
  'chicken-chapli-kebab-1kg':
    'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=800',
  'chicken-chappal-kebab-450g':
    'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800',
  'jumbo-beef-samosa-360g':
    'https://images.pexels.com/photos/9609847/pexels-photo-9609847.jpeg?auto=compress&cs=tinysrgb&w=800',
  'jumbo-beef-samosa-650g':
    'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=800',
  'jumbo-beef-samosa-1-2kg':
    'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=800',
  'jumbo-beef-samosa-1-5kg':
    'https://images.pexels.com/photos/3792696/pexels-photo-3792696.jpeg?auto=compress&cs=tinysrgb&w=800',
  'vegetable-samosa':
    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
  'tandoori-chicken-tikka':
    'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
  'frozen-parathas':
    'https://images.pexels.com/photos/7512843/pexels-photo-7512843.jpeg?auto=compress&cs=tinysrgb&w=800',
  'plain-paratha-regular':
    'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=800',
  'plain-paratha-family':
    'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800',
};

// ── Recipe images ────────────────────────────────────────────

export const RECIPE_IMAGES: Record<string, string> = {
  'kebab-wraps-with-mint-chutney':
    'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=800',
  'charcoal-kebab-rice-bowl':
    'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
  'samosa-chaat':
    'https://images.pexels.com/photos/9609847/pexels-photo-9609847.jpeg?auto=compress&cs=tinysrgb&w=800',
  'tikka-naan-pizza':
    'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
  'paratha-french-toast':
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  'chapli-kebab-burger':
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
};

// ── Retailer / store chain logos ─────────────────────────────
// These appear in the "Available At" marquee on the home page
// and on store cards in the Locations page.
// Set a value to '' to show text-only fallback.

export const RETAILER_LOGOS: Record<string, string> = {
  Freshco: '',
  'Iqbal Foods': '',
  'Nations Fresh Foods': '',
  'T&T Supermarket': '',
  Adonis: '',
  'Food Basics': '',
  Metro: '',
  'Bulk Barn': '',
  Costco: '',
  Walmart: '',
  Sobeys: '',
  Loblaws: '',
  'Al Shamas': '',
  Independent: '',
  Nations: '',
  'T&T': '',
  FreshCo: '',
};

// ── Our Story section images ──────────────────────────────────

export const STORY_PRODUCTION_IMAGE =
  'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800';

// ── The Difference section images ────────────────────────────

export const DIFFERENCE_IMAGES: Record<string, string> = {
  '100% Halal Certified':
    'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800',
  'No MSG':
    'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800',
  'No Preservatives':
    'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
  'No Artificial Nitrates':
    'https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=800',
  'No Trans Fats':
    'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Natural & Sustainable Sourcing':
    'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
};

// ── Newsletter popup image ────────────────────────────────────

export const NEWSLETTER_POPUP_IMAGE =
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600';
