/**
 * Internal Linking & PageRank Distribution Engine
 * Establishes bidirectional semantic topic clusters across OpalSphere
 * to eliminate orphan pages, maximize crawl efficiency, and distribute PageRank.
 */

export interface RelatedRoute {
  path: string;
  title: string;
  description: string;
  anchorText: string;
  category: 'Atelier' | 'Events' | 'Commerce' | 'Community' | 'Legal';
  image?: string;
}

export const TOPIC_CLUSTER_GRAPH: Record<string, RelatedRoute[]> = {
  '/': [
    {
      path: '/about',
      title: 'Our Atelier & Philosophy',
      description: 'Explore the artisan botanical philosophy and master florists behind OpalSphere.',
      anchorText: 'Discover Our Floral Philosophy',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/events',
      title: 'Grand Galas & Wedding Installations',
      description: 'View breathtaking architectural floral designs for luxury celebrations.',
      anchorText: 'Explore Event Portfolio',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/shop',
      title: 'Curated Floral Collections',
      description: 'Hand-picked luxury bouquets, rare orchids, and bespoke floral decor kits.',
      anchorText: 'Shop Luxury Bouquets',
      category: 'Commerce',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400',
    },
  ],
  '/about': [
    {
      path: '/events',
      title: 'Event Installations & Galas',
      description: 'See our botanical philosophy executed across prestigious worldwide venues.',
      anchorText: 'View Event Commissions',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/gallery',
      title: 'Design Archive & Botanical Gallery',
      description: 'Visual library of floral arches, suspended botanicals, and centerpiece styling.',
      anchorText: 'Browse Design Gallery',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/booking',
      title: 'Design Consultation & Reserve Date',
      description: 'Schedule an initial discovery consultation with our senior creative director.',
      anchorText: 'Book a Floral Consultation',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    },
  ],
  '/events': [
    {
      path: '/gallery',
      title: 'Botanical Photo Gallery',
      description: 'A curated photographic archive of our luxury floral commissions.',
      anchorText: 'Explore Installation Gallery',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/booking',
      title: 'Schedule Event Consultation',
      description: 'Reserve your date for weddings, corporate galas, and bespoke styling.',
      anchorText: 'Schedule Consultation',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/about',
      title: 'Floral Craftsmanship & Ethos',
      description: 'Learn how our team sources ethical, seasonal blooms from master growers.',
      anchorText: 'Read Our Story',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=400',
    },
  ],
  '/shop': [
    {
      path: '/about',
      title: 'Artisan Floral Craftsmanship',
      description: 'Every stem is conditioned and arranged by trained floral artists.',
      anchorText: 'About Our Stems',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/community',
      title: 'Creator Community & Workshops',
      description: 'Discover floral styling masterclasses, workshops, and creative discussions.',
      anchorText: 'Join Creator Workshops',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/contact',
      title: 'Custom Floral Commissions',
      description: 'Looking for a custom bouquet size or corporate weekly floral subscription?',
      anchorText: 'Contact Concierge',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=400',
    },
  ],
  '/community': [
    {
      path: '/about',
      title: 'Our Floral Philosophy',
      description: 'Deep dive into the floral architecture methodologies taught in our hub.',
      anchorText: 'Explore Atelier Philosophy',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/shop',
      title: 'Floral Decor Kits & Botanicals',
      description: 'Order the exact floral kits used in our community masterclasses.',
      anchorText: 'Explore Flower Shop',
      category: 'Commerce',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/gallery',
      title: 'Community Design Gallery',
      description: 'Inspirational installations crafted by our global artist community.',
      anchorText: 'Browse Community Gallery',
      category: 'Atelier',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    },
  ],
  '/gallery': [
    {
      path: '/events',
      title: 'Event Installations & Inquiries',
      description: 'Transform your selected gallery design into a personalized event installation.',
      anchorText: 'View Event Services',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/booking',
      title: 'Reserve Your Floral Styling',
      description: 'Book a consultation to bring our architectural installations to your venue.',
      anchorText: 'Schedule Consultation',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    },
    {
      path: '/shop',
      title: 'Order Curated Arrangements',
      description: 'Experience our gallery-standard flowers delivered directly to your home.',
      anchorText: 'Browse Shop',
      category: 'Commerce',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400',
    },
  ],
};

/**
 * Retrieves contextual internal links for a given path to distribute PageRank.
 */
export function getContextualLinksForRoute(pathname: string, limit: number = 3): RelatedRoute[] {
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const directMatches = TOPIC_CLUSTER_GRAPH[normalized];

  if (directMatches && directMatches.length > 0) {
    return directMatches.slice(0, limit);
  }

  // Fallback cascade to core pillars
  const fallbackRoutes: RelatedRoute[] = [
    {
      path: '/about',
      title: 'About OpalSphere Atelier',
      description: 'Bespoke floral architecture and botanical design philosophy.',
      anchorText: 'Discover Our Atelier',
      category: 'Atelier',
    },
    {
      path: '/events',
      title: 'Luxury Event Floral Architecture',
      description: 'Wedding and gala styling for unforgettable celebrations.',
      anchorText: 'Explore Event Portfolio',
      category: 'Events',
    },
    {
      path: '/shop',
      title: 'Curated Floral Stems & Kits',
      description: 'Hand-crafted luxury bouquets delivered directly to your door.',
      anchorText: 'Shop Bouquets',
      category: 'Commerce',
    },
  ];

  return fallbackRoutes.slice(0, limit);
}
