export interface EventStory {
  problem: string;
  solution: string;
  outcome: string;
}

export interface PastEvent {
  id: string;
  title: string;
  location: string;
  budgetRange: string;
  theme: string;
  category: 'Weddings' | 'Corporate' | 'Private Events' | 'Luxury Experiences';
  image: string;
  gallery: string[];
  story: EventStory;
  designTheme: string;
  budgetEstimate: number;
}

export interface UpcomingEvent {
  id: string;
  type: string;
  date: string;
  location: string;
  availableSlots: number;
  totalSlots: number;
  image: string;
  price: number;
}

export const PAST_EVENTS: PastEvent[] = [
  {
    id: '1',
    title: 'The Azure Gala',
    location: 'Lake Como, Italy',
    budgetRange: '$50k - $100k',
    theme: 'Mediterranean Elegance',
    category: 'Luxury Experiences',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800'
    ],
    story: {
      problem: 'The client wanted a lakeside event that felt intimate yet grand, but the venue had strict space limitations for floral structures.',
      solution: 'We designed a floating floral canopy that utilized the vertical space without encroaching on the guest floor area.',
      outcome: 'A breathtaking "floating garden" effect that became the centerpiece of the evening, perfectly reflecting the lake\'s serenity.'
    },
    designTheme: 'Monochromatic Blues & Whites',
    budgetEstimate: 75000
  },
  {
    id: '2',
    title: 'Corporate Zenith Summit',
    location: 'London, UK',
    budgetRange: '$20k - $40k',
    theme: 'Modern Minimalist',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
    ],
    story: {
      problem: 'A tech giant needed a floral identity that didn\'t feel "too soft" for a high-stakes leadership summit.',
      solution: 'We used architectural lilies and geometric structures to create a sense of precision and growth.',
      outcome: 'The decor was praised for its "intellectual elegance," aligning perfectly with the summit\'s theme of innovation.'
    },
    designTheme: 'Geometric Greens & Architectural Whites',
    budgetEstimate: 35000
  },
  {
    id: '3',
    title: 'The Rosewood Wedding',
    location: 'Napa Valley, CA',
    budgetRange: '$100k+',
    theme: 'Vintage Romance',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1465495910483-fb4158a2df7e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1465495910483-fb4158a2df7e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800'
    ],
    story: {
      problem: 'The couple wanted 10,000 roses but also wanted to ensure zero floral waste post-event.',
      solution: 'We partnered with a local composting initiative and used potted rose bushes for 40% of the decor, which were later gifted to guests.',
      outcome: 'A stunning, sustainable wedding that set a new standard for luxury eco-consciousness in the valley.'
    },
    designTheme: 'Antique Blush & Deep Burgundy',
    budgetEstimate: 125000
  },
  {
    id: '4',
    title: 'Private Estate Soirée',
    location: 'Hamptons, NY',
    budgetRange: '$15k - $30k',
    theme: 'Coastal Chic',
    category: 'Private Events',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800'
    ],
    story: {
      problem: 'A birthday celebration in a private garden needed to feel like a hidden oasis without blocking the ocean view.',
      solution: 'Low-profile arrangements using local wildflowers and driftwood elements.',
      outcome: 'A seamless blend of natural beauty and curated luxury that felt like it belonged to the landscape.'
    },
    designTheme: 'Sand, Seafoam & Sun-bleached Wood',
    budgetEstimate: 22000
  }
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: 'u1',
    type: 'Masterclass: Bridal Florals',
    date: '2026-05-15',
    location: 'Paris, France',
    availableSlots: 4,
    totalSlots: 15,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    price: 450
  },
  {
    id: 'u2',
    type: 'Luxury Event Design Summit',
    date: '2026-06-20',
    location: 'Dubai, UAE',
    availableSlots: 12,
    totalSlots: 50,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    price: 1200
  },
  {
    id: 'u3',
    type: 'Seasonal Showcase: Autumn',
    date: '2026-09-10',
    location: 'New York, NY',
    availableSlots: 25,
    totalSlots: 100,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
    price: 150
  }
];

export const SIGNATURE_COLLECTIONS = [
  {
    id: 'sc1',
    title: 'Royal Heritage',
    desc: 'Traditional opulence with a modern twist.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sc2',
    title: 'Minimalist Zen',
    desc: 'Clean lines, architectural blooms, pure focus.',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sc3',
    title: 'Enchanted Forest',
    desc: 'Whimsical, organic, and deeply immersive.',
    image: 'https://images.unsplash.com/photo-1464306311933-7967e948293f?auto=format&fit=crop&q=80&w=800'
  }
];
