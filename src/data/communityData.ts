export interface Creator {
  id: string;
  name: string;
  specialty: 'Wedding' | 'Minimal' | 'Luxury' | 'Bespoke';
  level: 'Master' | 'Professional' | 'Rising Star';
  bio: string;
  image: string;
  badges: string[];
}

export interface DesignPost {
  id: string;
  title: string;
  creatorId: string;
  creatorName: string;
  creatorImage: string;
  image: string;
  likes: number;
  saves: number;
  tags: string[];
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
}

export interface Workshop {
  id: string;
  title: string;
  date: string;
  instructor: string;
  image: string;
}

export const creators: Creator[] = [
  {
    id: 'c1',
    name: 'Elena Rossi',
    specialty: 'Luxury',
    level: 'Master',
    bio: 'Specializing in grand-scale floral installations for high-end weddings across Europe.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    badges: ['Top Rated', 'Expert'],
  },
  {
    id: 'c2',
    name: 'Julian Chen',
    specialty: 'Minimal',
    level: 'Professional',
    bio: 'Bringing Zen philosophy to floral design with clean lines and intentional negative space.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    badges: ['Innovator'],
  },
  {
    id: 'c3',
    name: 'Sarah Jenkins',
    specialty: 'Wedding',
    level: 'Master',
    bio: 'Over 15 years of experience creating romantic, timeless atmospheres for couples worldwide.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    badges: ['Elite'],
  },
  {
    id: 'c4',
    name: 'Marcus Thorne',
    specialty: 'Bespoke',
    level: 'Rising Star',
    bio: 'Pushing the boundaries of floral art with unconventional materials and bold color palettes.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    badges: ['Rising Star'],
  },
];

export const designPosts: DesignPost[] = [
  {
    id: 'p1',
    title: 'Midnight Bloom Gala',
    creatorId: 'c1',
    creatorName: 'Elena Rossi',
    creatorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    likes: 1240,
    saves: 450,
    tags: ['Luxury', 'Gala', 'Night'],
  },
  {
    id: 'p2',
    title: 'Serene Ikebana',
    creatorId: 'c2',
    creatorName: 'Julian Chen',
    creatorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800',
    likes: 890,
    saves: 320,
    tags: ['Minimal', 'Zen', 'Art'],
  },
  {
    id: 'p3',
    title: 'Vintage Rose Arch',
    creatorId: 'c3',
    creatorName: 'Sarah Jenkins',
    creatorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800',
    likes: 2100,
    saves: 850,
    tags: ['Wedding', 'Vintage', 'Romantic'],
  },
  {
    id: 'p4',
    title: 'Neon Petals Concept',
    creatorId: 'c4',
    creatorName: 'Marcus Thorne',
    creatorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800',
    likes: 560,
    saves: 120,
    tags: ['Modern', 'Neon', 'Experimental'],
  },
  {
    id: 'p5',
    title: 'Spring Awakening',
    creatorId: 'c1',
    creatorName: 'Elena Rossi',
    creatorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800',
    likes: 1560,
    saves: 670,
    tags: ['Spring', 'Pastel', 'Fresh'],
  },
  {
    id: 'p6',
    title: 'Autumnal Elegance',
    creatorId: 'c3',
    creatorName: 'Sarah Jenkins',
    creatorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=800',
    likes: 1890,
    saves: 740,
    tags: ['Autumn', 'Warm', 'Classic'],
  },
];

export const courses: Course[] = [
  {
    id: 'l1',
    title: 'Beginner Floral Design',
    thumbnail: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600',
    duration: '4h 30m',
    level: 'Beginner',
    instructor: 'Sarah Jenkins',
  },
  {
    id: 'l2',
    title: 'Wedding Decoration Mastery',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600',
    duration: '8h 15m',
    level: 'Advanced',
    instructor: 'Elena Rossi',
  },
  {
    id: 'l3',
    title: 'Luxury Event Styling',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600',
    duration: '6h 45m',
    level: 'Intermediate',
    instructor: 'Marcus Thorne',
  },
];

export const workshops: Workshop[] = [
  {
    id: 'w1',
    title: 'Summer Solstice Centerpieces',
    date: 'June 21, 2026',
    instructor: 'Julian Chen',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'w2',
    title: 'Sustainable Floral Sourcing',
    date: 'July 15, 2026',
    instructor: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600',
  },
];
