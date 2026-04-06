export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Wedding' | 'Luxury Bouquets' | 'Event Decor Kits' | 'Seasonal Specials';
  flowerType: 'Roses' | 'Orchids' | 'Mixed' | 'Lilies' | 'Peonies';
  occasion: 'Wedding' | 'Birthday' | 'Corporate' | 'Anniversary';
  image: string;
  description: string;
  tag?: 'Premium' | 'Bestseller' | 'New';
  isTrending?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Velvet Roses',
    price: 180,
    category: 'Luxury Bouquets',
    flowerType: 'Roses',
    occasion: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    description: 'Deep crimson roses hand-picked for their velvet texture and intoxicating scent. A timeless symbol of passion.',
    tag: 'Premium',
    isTrending: true
  },
  {
    id: '2',
    name: 'Ivory Cascade Wedding Set',
    price: 1200,
    category: 'Wedding',
    flowerType: 'Mixed',
    occasion: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    description: 'A complete wedding floral set including bridal bouquet, bridesmaids bouquets, and boutonnieres in pure ivory.',
    tag: 'Bestseller'
  },
  {
    id: '3',
    name: 'Azure Orchid Elegance',
    price: 250,
    category: 'Luxury Bouquets',
    flowerType: 'Orchids',
    occasion: 'Corporate',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800',
    description: 'Rare blue-tinted orchids arranged in a minimalist glass vase. Perfect for modern corporate spaces.',
    tag: 'New',
    isTrending: true
  },
  {
    id: '4',
    name: 'Golden Hour Decor Kit',
    price: 450,
    category: 'Event Decor Kits',
    flowerType: 'Mixed',
    occasion: 'Birthday',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800',
    description: 'Everything you need to transform your space into a warm, golden sanctuary for your next celebration.',
    isTrending: true
  },
  {
    id: '5',
    name: 'Spring Awakening',
    price: 140,
    category: 'Seasonal Specials',
    flowerType: 'Mixed',
    occasion: 'Birthday',
    image: 'https://images.unsplash.com/photo-1494333102047-3b273a149224?auto=format&fit=crop&q=80&w=800',
    description: 'A vibrant mix of seasonal spring blooms, bringing the freshness of the garden indoors.',
    tag: 'New'
  },
  {
    id: '6',
    name: 'Royal Peony Collection',
    price: 320,
    category: 'Luxury Bouquets',
    flowerType: 'Peonies',
    occasion: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800',
    description: 'Lush, multi-layered peonies in shades of blush and cream. The ultimate expression of luxury.',
    tag: 'Premium'
  },
  {
    id: '7',
    name: 'Corporate Zen Arrangement',
    price: 190,
    category: 'Event Decor Kits',
    flowerType: 'Lilies',
    occasion: 'Corporate',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=800',
    description: 'Clean lines and serene white lilies designed to bring focus and calm to any office environment.',
    isTrending: true
  },
  {
    id: '8',
    name: 'Enchanted Forest Centerpiece',
    price: 280,
    category: 'Event Decor Kits',
    flowerType: 'Mixed',
    occasion: 'Wedding',
    image: 'https://images.unsplash.com/photo-1464306311933-7967e948293f?auto=format&fit=crop&q=80&w=800',
    description: 'A whimsical arrangement of woodland flowers and greenery, perfect for rustic-themed weddings.',
    tag: 'Bestseller'
  }
];

export const COLLECTIONS = [
  { name: 'Wedding Collection', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { name: 'Luxury Bouquets', image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Event Decor Kits', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800' },
  { name: 'Seasonal Specials', image: 'https://images.unsplash.com/photo-1494333102047-3b273a149224?auto=format&fit=crop&q=80&w=800' }
];
