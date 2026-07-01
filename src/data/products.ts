export type ProductType = 'atelier' | 'salaula' | 'kids';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  type: ProductType;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 'sculpted-wool-blazer',
    name: 'Sculpted Wool Blazer',
    category: 'Tailoring',
    price: 1250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqe-MRpxzg_fcGGpUdx5aer0PUEKTOdoCuAQeIq0mbjIYkjqUgP5VTW1HPLqaEjrosZDerurAMK-wVHMDOQkq2vN-Mohq-2sIdlP9dRVDSXyDFEX5hN0GZ1D1l10_krMIg7jTrEn9FXubRJPizyrU9WCmsQ6PeuRoTV00EEaYPq2c4QFN1fKzxPpQ25n6mrhZVODozLbQ1H_bfw1tg1-gX9cnwotjfnqlqQD0MIlbUtha8D2N5gFchiHcvdsR2snN1J_4O-4yHDUuE',
    type: 'atelier',
    badge: 'New',
    description: 'Architectural charcoal wool blazer with sculpted shoulders and hidden closure.',
  },
  {
    id: 'monolith-tote-bag',
    name: 'Monolith Tote Bag',
    category: 'Accessories',
    price: 2400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEBtFeVezR9dvJaO3ft2VxcMtytEWeibmT98QFRKkTlnOj5xXvrzp5ceZK6cWCjo_wndlaRmmRvFZ2wN2eBCzAdzGXNTL3-4HsSez6DqBZ3rsFf-I8TRpLMrE_trCV4AGReHUDKQFpBn0sEi_BuTYI7pFnxb3GRQ2QiNIEobQDC_hTGu2TqTccuV3Leb60seEPedQCEOLSXrxlVvrmC4N05keFwdGY0bs-qfp9h7zLx6wOX4nSfjV-JU6NfwySJL1x9al8vbwQnyIa',
    type: 'atelier',
    badge: 'Limited',
    description: 'Deep espresso leather tote with structured body and polished hardware.',
  },
  {
    id: 'urban-chelsea-boot',
    name: 'Urban Chelsea Boot',
    category: 'Footwear',
    price: 890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1uXHvS21tsdlJnNJ5mhy4uciZGw_cg5llfC35gf0muZQS6Yjd_RU9qe8-OUbWI5cNnOmFmZR_LV014R-W_nbMdXizeIH1ixagCnKfeFQ1eB0qU4JlSD1IZXxnYmUVMRq8W1nhfTXxmVAhT7lwNLz3vnHhzwnMUZDll-SyjhytsbKr6ZrXdu0Nds31L89bLOY54-Jbvx7C8X31x_dTZwi_5GGR0bMGRq09-EpkIKnEn-XH4okWpgJZk8OxFmAJcoxhYfnolwuF7_sE',
    type: 'atelier',
    description: 'Minimal black leather Chelsea boot with high-gloss finish and clean profile.',
  },
  {
    id: 'cashmere-column-knit',
    name: 'Cashmere Column Knit',
    category: 'Knitwear',
    price: 1080,
    image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=900&q=80',
    type: 'atelier',
    description: 'Soft column knit with quiet texture and elongated proportion.',
  },

  {
    id: 'kids-linen-play-dress',
    name: 'Linen Play Dress',
    category: 'Girls',
    price: 360,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    badge: 'New',
    description: 'Soft linen day dress for warm afternoons, parties, and everyday polish.',
  },
  {
    id: 'kids-cotton-camp-shirt',
    name: 'Cotton Camp Shirt',
    category: 'Boys',
    price: 290,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    description: 'Breathable short-sleeve shirt with an easy tailored fit.',
  },
  {
    id: 'kids-denim-pinafore',
    name: 'Denim Pinafore Set',
    category: 'Girls',
    price: 420,
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    badge: 'Favorite',
    description: 'Layered pinafore set with practical pockets and a soft cotton tee.',
  },
  {
    id: 'kids-everyday-chino-set',
    name: 'Everyday Chino Set',
    category: 'Boys',
    price: 450,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    description: 'Relaxed chino trousers paired with a crisp woven top for smart casual days.',
  },
  {
    id: 'kids-baby-romper',
    name: 'Cloud Cotton Romper',
    category: 'Baby',
    price: 240,
    image: 'https://images.unsplash.com/photo-1522771772219-e6f0d344d2e3?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    badge: 'Baby',
    description: 'Ultra-soft cotton romper with simple snap closures for daily comfort.',
  },
  {
    id: 'kids-rainbow-knit-cardigan',
    name: 'Rainbow Knit Cardigan',
    category: 'Knitwear',
    price: 390,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    description: 'Cosy lightweight cardigan with cheerful colour blocking.',
  },
  {
    id: 'kids-weekend-sneaker',
    name: 'Weekend Sneaker',
    category: 'Shoes',
    price: 310,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    description: 'Durable everyday sneaker made for playgrounds, school runs, and weekend plans.',
  },
  {
    id: 'kids-soft-hooded-jacket',
    name: 'Soft Hooded Jacket',
    category: 'Outerwear',
    price: 520,
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=80',
    type: 'kids',
    badge: 'Layering',
    description: 'Lightweight hooded jacket for cool mornings and travel days.',
  },
  ...Array.from({ length: 25 }, (_, index) => {
    const number = index + 1;
    const names = ['Curated Salaula Find', 'Archive Market Piece', 'Pre-Loved Statement', 'Restored Everyday Essential', 'Found Wardrobe Edit'];
    const categories = ['Outerwear', 'Dresses', 'Tops', 'Tailoring', 'Accessories'];
    return {
      id: `salaula-${String(number).padStart(2, '0')}`,
      image: `/assets/salaula/item-${String(number).padStart(2, '0')}.jpeg`,
      name: `${names[index % names.length]} ${String(number).padStart(2, '0')}`,
      category: categories[index % categories.length],
      price: [240, 310, 390, 460, 520][index % 5],
      type: 'salaula' as const,
      badge: number <= 6 ? 'Drop 01' : undefined,
      description: 'Selected second-hand piece restored, pressed, and styled through the TÀMIKA lens.',
    };
  }),
];

export function formatPrice(price: number): string {
  return `ZK ${price.toLocaleString('en-US')}`;
}

export function getProduct(productId: string): Product | undefined {
  return products.find((product) => product.id === productId);
}

export function getProductsByType(type: ProductType): Product[] {
  return products.filter((product) => product.type === type);
}

export function getCategories(type?: ProductType): string[] {
  const source = type ? getProductsByType(type) : products;
  return Array.from(new Set(source.map((product) => product.category)));
}
