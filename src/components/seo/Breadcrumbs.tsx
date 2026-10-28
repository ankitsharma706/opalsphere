import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { buildBreadcrumbSchema, sanitizeJsonLd } from '../../lib/seo/schemaGenerator';

export interface BreadcrumbCrumb {
  label: string;
  path: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const schemaData = buildBreadcrumbSchema(
    items.map((item) => ({
      name: item.label,
      url: item.path,
    }))
  );

  return (
    <>
      {/* Synchronized JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(schemaData) }}
      />

      <nav aria-label="Breadcrumb" className={`text-xs text-secondary/60 ${className}`}>
        <ol className="flex flex-wrap items-center space-x-2 py-2">
          {items.map((crumb, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={crumb.path} className="flex items-center space-x-2">
                {index > 0 && (
                  <ChevronRight size={12} className="text-secondary/30 shrink-0" aria-hidden="true" />
                )}

                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-secondary truncate max-w-[200px] sm:max-w-none"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {isFirst && <Home size={13} className="shrink-0" />}
                    <span>{crumb.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

