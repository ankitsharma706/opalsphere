/**
 * Static Pre-rendering & HTML Snapshot Pipeline for Google Crawlers & Mediapartners-Google
 * Generates physical pre-rendered HTML files into dist/<route>/index.html for every
 * canonical public route so crawlers see rich text and semantic markup on initial load.
 */

import fs from 'fs';
import path from 'path';

interface RouteSnapshot {
  route: string;
  title: string;
  description: string;
  canonicalUrl: string;
  contentHtml: string;
}

const BASE_URL = 'https://maxcnfront.vercel.app';
const DIST_DIR = path.resolve(process.cwd(), 'dist');

const SNAPSHOTS: RouteSnapshot[] = [
  {
    route: '/about',
    title: 'About Atelier & Philosophy | OpalSphere',
    description: 'Discover the artisan craftsmanship, creative philosophy, and floral architecture team behind OpalSphere luxury events.',
    canonicalUrl: `${BASE_URL}/about`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-5xl font-serif mb-6">About OpalSphere Atelier</h1>
          <p class="text-lg leading-relaxed mb-8">
            Founded with a commitment to floral artistry and sensory narrative, OpalSphere curates immersive botanical experiences for weddings, luxury galas, and corporate celebrations worldwide.
          </p>
          <h2 class="text-3xl font-serif mb-4">Our Creative Philosophy</h2>
          <p class="leading-relaxed mb-6">
            We believe that every celebration is a unique narrative, and flowers are the most eloquent storytellers. Working directly with regenerative flower estates, our creative team sources pristine seasonal blooms with zero artificial preservatives.
          </p>
          <h2 class="text-3xl font-serif mb-4">Artisan Craftsmanship & Values</h2>
          <p class="leading-relaxed mb-6">
            From monumental cascading wedding arches to intimate table centerpieces, every stem is conditioned, wired, and positioned to interact harmoniously with natural venue light.
          </p>
          <div class="p-6 bg-white rounded-2xl border border-accent/10">
            <h3 class="text-xl font-serif mb-2">Our Commitments</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm text-secondary/70">
              <li>100% sustainably harvested and ethical floral provenance</li>
              <li>Bespoke spatial design tailored to architectural acoustics and lighting</li>
              <li>Zero single-use non-biodegradable floral foam</li>
            </ul>
          </div>
        </div>
      </main>
    `,
  },
  {
    route: '/events',
    title: 'Event Floral Installations & Galas | OpalSphere',
    description: 'Explore our archive of high-profile wedding florals, corporate installations, and bespoke botanical architectures.',
    canonicalUrl: `${BASE_URL}/events`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-5xl mx-auto px-4">
          <h1 class="text-5xl font-serif mb-6">Event Floral Architecture & Galas</h1>
          <p class="text-lg leading-relaxed mb-8">
            OpalSphere designs, engineers, and installs large-scale floral architecture for luxury private weddings, international fashion galas, and high-profile corporate summits.
          </p>
          <h2 class="text-3xl font-serif mb-4">Signature Event Categories</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="p-6 bg-white rounded-2xl border border-accent/10">
              <h3 class="text-xl font-serif mb-2">Bespoke Weddings</h3>
              <p class="text-sm text-secondary/70">Custom ceremonial arches, aisle floral runners, cascading bridal bouquets, and reception ceiling suspensions.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl border border-accent/10">
              <h3 class="text-xl font-serif mb-2">Corporate Galas</h3>
              <p class="text-sm text-secondary/70">Brand launch botanical backdrops, centerpiece installations, and ambient stage floral framing.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl border border-accent/10">
              <h3 class="text-xl font-serif mb-2">Private Soirées</h3>
              <p class="text-sm text-secondary/70">Intimate dinner party tablescapes, entrance floral sculptures, and exotic orchid compositions.</p>
            </div>
          </div>
        </div>
      </main>
    `,
  },
  {
    route: '/shop',
    title: 'Luxury Floral Collections & Bouquets | OpalSphere',
    description: 'Browse exquisite hand-crafted bouquets, bespoke floral decor kits, and rare seasonal stems curated by master floral artists.',
    canonicalUrl: `${BASE_URL}/shop`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-5xl mx-auto px-4">
          <h1 class="text-5xl font-serif mb-6">Luxury Floral Collections</h1>
          <p class="text-lg leading-relaxed mb-8">
            Hand-crafted floral arrangements featuring rare garden roses, scented peonies, Dutch ranunculus, and exotic blue-tinted orchids.
          </p>
          <h2 class="text-3xl font-serif mb-4">Curated Stems & Kits</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div class="p-8 bg-white rounded-2xl border border-accent/10">
              <h3 class="text-2xl font-serif mb-2">Midnight Velvet Roses</h3>
              <p class="text-sm text-secondary/70 mb-4">Deep crimson roses hand-picked for their velvet texture and intoxicating scent. A timeless symbol of passion.</p>
              <span class="text-xl font-serif font-bold text-secondary">$180</span>
            </div>
            <div class="p-8 bg-white rounded-2xl border border-accent/10">
              <h3 class="text-2xl font-serif mb-2">Ivory Cascade Wedding Set</h3>
              <p class="text-sm text-secondary/70 mb-4">A complete wedding floral set including bridal bouquet, bridesmaids bouquets, and boutonnieres in pure ivory.</p>
              <span class="text-xl font-serif font-bold text-secondary">$1,200</span>
            </div>
          </div>
        </div>
      </main>
    `,
  },
  {
    route: '/gallery',
    title: 'Design Gallery & Floral Installations | OpalSphere',
    description: 'View our curated portfolio of bespoke botanical architectures, wedding arches, centerpiece arrangements, and gala florals.',
    canonicalUrl: `${BASE_URL}/gallery`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-5xl mx-auto px-4">
          <h1 class="text-5xl font-serif mb-6">Floral Design Gallery</h1>
          <p class="text-lg leading-relaxed mb-8">
            A visual retrospective of our landmark installations across architectural venues, private estates, and luxury ballrooms.
          </p>
        </div>
      </main>
    `,
  },
  {
    route: '/community',
    title: 'Floral Creator Community & Masterclasses | OpalSphere',
    description: 'Join OpalSphere international community of artisan florists, botanical designers, masterclasses, and creative workshops.',
    canonicalUrl: `${BASE_URL}/community`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-5xl mx-auto px-4">
          <h1 class="text-5xl font-serif mb-6">Creator Community & Floral Masterclasses</h1>
          <p class="text-lg leading-relaxed mb-8">
            A collaborative learning ecosystem connecting floral artists, botanical architects, and luxury event producers worldwide.
          </p>
        </div>
      </main>
    `,
  },
  {
    route: '/contact',
    title: 'Contact OpalSphere | Luxury Floral Consultations',
    description: 'Connect with OpalSphere artisan florists for bespoke weddings, galas, floral commissions, and corporate events. Direct phone, email, and studio location.',
    canonicalUrl: `${BASE_URL}/contact`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-5xl font-serif mb-6">Contact OpalSphere Concierge</h1>
          <p class="text-lg leading-relaxed mb-8">
            Our creative directors and concierge team are available for private consultations, architectural site surveys, and luxury floral commissions.
          </p>
          <div class="space-y-4 bg-white p-8 rounded-3xl border border-accent/10">
            <p><strong>Email:</strong> <a href="mailto:hello@opalsphere.com" class="text-accent underline">hello@opalsphere.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+15550001234" class="text-accent underline">+1 (555) 000-1234</a></p>
            <p><strong>Studio Address:</strong> 123 Luxury Lane, Bloom District, New York, NY 10001</p>
            <p><strong>Hours:</strong> Monday – Saturday: 10:00 AM – 7:00 PM EST</p>
          </div>
        </div>
      </main>
    `,
  },
  {
    route: '/privacy-policy',
    title: 'Privacy Policy | OpalSphere',
    description: 'Learn how OpalSphere collects, uses, and protects your personal data, along with Google AdSense, third-party cookies, and DART cookie disclosures.',
    canonicalUrl: `${BASE_URL}/privacy-policy`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-serif mb-6">Privacy Policy</h1>
          <p class="text-sm text-secondary/60 mb-8">Last updated: October 28, 2026</p>
          <div class="space-y-6 text-secondary/80 leading-relaxed">
            <h2 class="text-2xl font-serif text-secondary">1. Overview</h2>
            <p>At OpalSphere (maxcnfront.vercel.app), we respect your personal data and comply with GDPR, CCPA, and Google Publisher Policies.</p>
            <h2 class="text-2xl font-serif text-secondary">2. Google AdSense & Third-Party Cookies Disclosure</h2>
            <p>We partner with Google AdSense to display advertisements on content-rich pages. Google uses cookies, including the DoubleClick DART cookie, to serve ads based on prior visits to our site and other websites across the Internet.</p>
            <p>Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" class="text-accent underline">Google Ads Settings</a> or <a href="https://optout.networkadvertising.org/" class="text-accent underline">aboutads.info</a>.</p>
            <h2 class="text-2xl font-serif text-secondary">3. Contact</h2>
            <p>For data privacy inquiries, contact our Data Protection Officer at hello@opalsphere.com.</p>
          </div>
        </div>
      </main>
    `,
  },
  {
    route: '/terms-of-service',
    title: 'Terms of Service | OpalSphere',
    description: 'Review the terms and conditions governing bespoke floral styling, luxury event bookings, website use, and floral commerce at OpalSphere.',
    canonicalUrl: `${BASE_URL}/terms-of-service`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-serif mb-6">Terms of Service</h1>
          <p class="text-sm text-secondary/60 mb-8">Last updated: October 28, 2026</p>
          <div class="space-y-6 text-secondary/80 leading-relaxed">
            <h2 class="text-2xl font-serif text-secondary">1. Agreement to Terms</h2>
            <p>By accessing OpalSphere at maxcnfront.vercel.app, you agree to these Terms of Service.</p>
            <h2 class="text-2xl font-serif text-secondary">2. Floral Commissions & Bookings</h2>
            <p>Due to the seasonal nature of botanicals, substitutions of equal or higher value may occasionally occur. Custom event reservations require an advance deposit retainer.</p>
          </div>
        </div>
      </main>
    `,
  },
  {
    route: '/booking',
    title: 'Book a Bespoke Floral Consultation | OpalSphere',
    description: 'Schedule a private floral design consultation with OpalSphere master botanical artisans for luxury weddings, galas, and corporate events.',
    canonicalUrl: `${BASE_URL}/booking`,
    contentHtml: `
      <main class="bg-primary min-h-screen text-secondary pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-5xl font-serif mb-6">Bespoke Floral Design Consultation</h1>
          <p class="text-lg leading-relaxed mb-8">
            Tell us about your upcoming celebration. Our senior floral directors curate custom botanical atmospheres tailored to your venue and aesthetic vision.
          </p>
          <h2 class="text-3xl font-serif mb-4">Our Collaborative Process</h2>
          <p class="leading-relaxed mb-4">
            Phase 1: Discovery & Vision — Venue architectural review and aesthetic brief.
          </p>
          <p class="leading-relaxed mb-4">
            Phase 2: Bespoke Proposal — Dimensional spatial plans, floral arches, and centerpieces.
          </p>
          <p class="leading-relaxed mb-4">
            Phase 3: Installation & Artistry — On-site construction, flower conditioning, and temperature control.
          </p>
        </div>
      </main>
    `,
  },
];

async function runPrerender() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');

  console.log(`Starting static snapshot generation for ${SNAPSHOTS.length} canonical routes...`);

  for (const snapshot of SNAPSHOTS) {
    const routeDir = path.join(DIST_DIR, snapshot.route.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let pageHtml = baseHtml;

    // 1. Replace Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${snapshot.title}</title>`
    );

    // 2. Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta name="description" content=".*?" \/>/i,
      `<meta name="description" content="${snapshot.description}" />`
    );

    // 3. Replace Canonical Link
    pageHtml = pageHtml.replace(
      /<link rel="canonical" href=".*?" \/>/i,
      `<link rel="canonical" href="${snapshot.canonicalUrl}" />`
    );

    // 4. Inject Rich Pre-rendered Content inside #root for Immediate Crawler Rendering
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${snapshot.contentHtml}</div>`
    );

    const outPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outPath, pageHtml, 'utf8');
    console.log(`✓ Pre-rendered: ${snapshot.route} -> dist/${snapshot.route.replace(/^\//, '')}/index.html`);
  }

  console.log('All public routes successfully pre-rendered into static HTML snapshots!');
}

runPrerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});

