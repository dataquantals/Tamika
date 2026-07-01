export type WeddingCategory = 'bride' | 'groom' | 'party' | 'kids';

export type WeddingProduct = {
  id: string;
  category: WeddingCategory;
  title: string;
  price: number;
  description: string;
  image: string;
  video?: string;
  sizes: string[];
  colors: string[];
  collection: string;
};

export const weddingCategories: Array<{ id: WeddingCategory; label: string; headline: string; image: string }> = [
  {
    id: 'bride',
    label: 'Bride',
    headline: 'Ceremony silhouettes in ivory restraint.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'groom',
    label: 'Groom',
    headline: 'Tailoring for vows, reception, and after-dark formality.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'party',
    label: 'Bridesmaids / Groomsmen',
    headline: 'A tonal wedding party edit in blush, champagne, and charcoal.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'kids',
    label: 'Kids',
    headline: 'Small ceremony pieces with soft comfort and polish.',
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=1600&q=85',
  },
];

export const fallbackWeddingProducts: WeddingProduct[] = [
  {
    id: 'bride-ivory-column-gown',
    category: 'bride',
    title: 'Ivory Column Gown',
    price: 7800,
    description: 'A clean bridal column with sculpted neckline and fluid train.',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1100&q=85',
    sizes: ['XS', 'S', 'M', 'Made-to-measure'],
    colors: ['Ivory', 'Pearl'],
    collection: 'Ceremony',
  },
  {
    id: 'bride-champagne-slip',
    category: 'bride',
    title: 'Champagne Silk Slip',
    price: 5200,
    description: 'Minimal silk dress for civil ceremonies and reception changes.',
    image: 'https://images.unsplash.com/photo-1523264766116-1e09b3145b84?auto=format&fit=crop&w=1100&q=85',
    video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Champagne', 'Ivory'],
    collection: 'Reception',
  },
  {
    id: 'bride-milla-nova-aria-gown',
    category: 'bride',
    title: 'Milla Nova Aria Gown',
    price: 18500,
    description: 'A breathtaking A-line wedding gown with floral lace appliqué and sweeping cathedral train.',
    image: 'https://images.unsplash.com/photo-1594552072238-18eb295ff68d?auto=format&fit=crop&w=1100&q=85',
    video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    sizes: ['34', '36', '38', '40', '42'],
    colors: ['Ivory'],
    collection: 'Bridal',
  },
  {
    id: 'bride-ethereal-tulle-ballgown',
    category: 'bride',
    title: 'Ethereal Tulle Ballgown',
    price: 22000,
    description: 'A fairytale ballgown layered with shimmering tulle and crystal-embellished corsetry.',
    image: 'https://images.unsplash.com/photo-1546804784-816671b05214?auto=format&fit=crop&w=1100&q=85',
    video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    sizes: ['34', '36', '38', '40', '42'],
    colors: ['Ivory', 'Champagne'],
    collection: 'Bridal',
  },
  {
    id: 'bride-pearl-veil',
    category: 'bride',
    title: 'Pearl Mist Veil',
    price: 1450,
    description: 'Soft tulle veil with quiet pearl detailing and hand-finished edge.',
    image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1100&q=85',
    sizes: ['One size'],
    colors: ['Pearl'],
    collection: 'Accessories',
  },
  {
    id: 'groom-charcoal-tuxedo',
    category: 'groom',
    title: 'Deep Charcoal Tuxedo',
    price: 6400,
    description: 'Sharp evening tailoring with satin peak lapel and precise trouser line.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=85',
    sizes: ['S', 'M', 'L', 'Made-to-measure'],
    colors: ['Charcoal', 'Black'],
    collection: 'Formal',
  },
  {
    id: 'groom-ivory-dinner-jacket',
    category: 'groom',
    title: 'Ivory Dinner Jacket',
    price: 5800,
    description: 'A champagne-ivory jacket for destination vows and evening receptions.',
    image: 'https://images.unsplash.com/photo-1520975867597-0af37a22e31e?auto=format&fit=crop&w=1100&q=85',
    sizes: ['S', 'M', 'L'],
    colors: ['Ivory'],
    collection: 'Destination',
  },
  {
    id: 'groom-silk-bow-tie',
    category: 'groom',
    title: 'Silk Bow Tie Set',
    price: 390,
    description: 'Hand-finished bow tie and pocket square in deep charcoal silk.',
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1100&q=85',
    sizes: ['One size'],
    colors: ['Charcoal', 'Black'],
    collection: 'Accessories',
  },
  {
    id: 'party-blush-satin-dress',
    category: 'party',
    title: 'Blush Satin Dress',
    price: 2450,
    description: 'A soft bias-cut satin dress designed for coordinated bridal parties.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=85',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blush', 'Champagne'],
    collection: 'Wedding Party',
  },
  {
    id: 'party-champagne-waistcoat',
    category: 'party',
    title: 'Champagne Waistcoat',
    price: 1320,
    description: 'Light formal layering for groomsmen in warm champagne tones.',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1100&q=85',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Champagne'],
    collection: 'Wedding Party',
  },
  {
    id: 'party-charcoal-suit',
    category: 'party',
    title: 'Charcoal Ceremony Suit',
    price: 3900,
    description: 'Slim charcoal suit for groomsmen with a clean formal profile.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1100&q=85',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal'],
    collection: 'Wedding Party',
  },
  {
    id: 'kids-ivory-flower-dress',
    category: 'kids',
    title: 'Ivory Flower Dress',
    price: 980,
    description: 'Light ivory dress for flower girls with soft volume and comfort lining.',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1100&q=85',
    sizes: ['2Y', '4Y', '6Y', '8Y'],
    colors: ['Ivory', 'Blush'],
    collection: 'Little Ceremony',
  },
  {
    id: 'kids-mini-charcoal-suit',
    category: 'kids',
    title: 'Mini Charcoal Suit',
    price: 1250,
    description: 'A small formal suit for ring bearers and young wedding guests.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1100&q=85',
    sizes: ['2Y', '4Y', '6Y', '8Y'],
    colors: ['Charcoal'],
    collection: 'Little Ceremony',
  },
  {
    id: 'kids-blush-cardigan',
    category: 'kids',
    title: 'Blush Ceremony Cardigan',
    price: 520,
    description: 'Soft knit layer for children in cooler ceremony settings.',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1100&q=85',
    sizes: ['2Y', '4Y', '6Y', '8Y'],
    colors: ['Blush', 'Ivory'],
    collection: 'Little Ceremony',
  },
];

export async function fetchWeddingProducts(category?: WeddingCategory): Promise<WeddingProduct[]> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  if (!supabaseUrl || !supabaseAnonKey) {
    return filterFallback(category);
  }

  try {
    const url = new URL(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/wedding_products`);
    url.searchParams.set('select', '*');
    if (category) url.searchParams.set('category', `eq.${category}`);

    const response = await fetch(url, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    if (!response.ok) throw new Error('Supabase product request failed');

    const rows = await response.json() as WeddingProduct[];
    return rows.length ? rows : filterFallback(category);
  } catch {
    return filterFallback(category);
  }
}

function filterFallback(category?: WeddingCategory): WeddingProduct[] {
  return category ? fallbackWeddingProducts.filter((product) => product.category === category) : fallbackWeddingProducts;
}

export function weddingPrice(price: number): string {
  return `ZK ${price.toLocaleString('en-US')}`;
}
