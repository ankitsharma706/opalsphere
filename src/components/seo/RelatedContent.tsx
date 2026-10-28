import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getContextualLinksForRoute, RelatedRoute } from '../../lib/seo/internalLinking';

export interface RelatedContentProps {
  customLinks?: RelatedRoute[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function RelatedContent({
  customLinks,
  title = 'Continue Exploring OpalSphere',
  subtitle = 'Discover related botanical narratives, curated collections, and event portfolios.',
  className = '',
}: RelatedContentProps) {
  const location = useLocation();
  const links = customLinks || getContextualLinksForRoute(location.pathname, 3);

  if (!links || links.length === 0) return null;

  return (
    <section
      aria-labelledby="related-editorial-heading"
      className={`py-20 bg-primary/40 border-t border-accent/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left md:flex md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center space-x-2 text-accent text-[10px] font-bold uppercase tracking-widest mb-3">
              <Sparkles size={13} />
              <span>Contextual Editorial</span>
            </div>
            <h2 id="related-editorial-heading" className="text-3xl md:text-4xl font-serif text-secondary">
              {title}
            </h2>
            <p className="text-secondary/60 text-sm mt-2 max-w-xl">{subtitle}</p>
          </div>
        </div>

        <nav aria-label="Related Editorial & Collections">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group bg-white p-6 rounded-3xl border border-accent/10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {link.image && (
                    <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-secondary/5 relative">
                      <img
                        src={link.image}
                        alt={link.title}
                        width="400"
                        height="250"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-secondary">
                        {link.category}
                      </span>
                    </div>
                  )}

                  <h3 className="font-serif text-xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-secondary/70 leading-relaxed mb-6">
                    {link.description}
                  </p>
                </div>

                <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all pt-4 border-t border-accent/5">
                  <span>{link.anchorText}</span>
                  <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

