import React from 'react';
import { motion } from 'motion/react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { RelatedContent } from '../components/seo/RelatedContent';
import { buildBreadcrumbSchema } from '../lib/seo/schemaGenerator';

export default function Gallery() {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', category: 'Wedding Architecture' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Corporate Galas' },
    { id: 3, url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800', category: 'Celebration Styling' },
    { id: 4, url: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800', category: 'Luxury Botanicals' },
    { id: 5, url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800', category: 'Artisan Bouquets' },
    { id: 6, url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800', category: 'Spatial Floral Decor' },
  ];

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Design Gallery', path: '/gallery' },
  ];

  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen text-secondary">
      <SEOHead
        title="Design Gallery & Floral Installations | OpalSphere"
        description="View our curated portfolio of bespoke botanical architectures, wedding arches, centerpiece arrangements, and gala florals."
        canonicalUrl="https://maxcnfront.vercel.app/gallery"
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery' },
        ])}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent block mb-3">
            Artisan Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Design Gallery</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated showcase of our most breathtaking botanical installations, high-concept weddings, and luxury floral decor.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 relative">
          {images.map((img) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer bg-white/50 border border-accent/10 shadow-sm"
            >
              <img
                src={img.url}
                alt={`${img.category} luxury floral design installation - OpalSphere`}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center backdrop-blur-[2px]">
                <span className="text-primary font-serif text-2xl italic tracking-wide">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internal PageRank Distribution */}
      <RelatedContent />
    </div>
  );
}
