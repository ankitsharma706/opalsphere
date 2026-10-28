/**
 * OpalSphere Technical SEO Metadata Engine
 * Enterprise-grade metadata generator supporting dynamic route generation,
 * fallback cascades, title templates, OpenGraph, Twitter Cards, robots directives,
 * language alternates (hreflang), and canonical URL resolution.
 */

export interface MetaOptions {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  locale?: string;
}

export interface GeneratedMetadata {
  title: string;
  metaTags: Array<{ name?: string; property?: string; content: string }>;
  linkTags: Array<{ rel: string; href: string; hreflang?: string }>;
}

export const BASE_CANONICAL_DOMAIN = 'https://maxcnfront.vercel.app';
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200';
export const SITE_NAME = 'OpalSphere';
export const DEFAULT_DESCRIPTION =
  'OpalSphere crafts bespoke luxury floral artistry and experiential installations for prestigious weddings, private galas, and corporate events.';

export function resolveCanonicalUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return BASE_CANONICAL_DOMAIN;
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    try {
      const parsed = new URL(pathOrUrl);
      return `${BASE_CANONICAL_DOMAIN}${parsed.pathname === '/' ? '' : parsed.pathname}`;
    } catch {
      return BASE_CANONICAL_DOMAIN;
    }
  }
  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return cleanPath === '/' ? BASE_CANONICAL_DOMAIN : `${BASE_CANONICAL_DOMAIN}${cleanPath}`;
}

export function buildMetadata(options: MetaOptions = {}): GeneratedMetadata {
  const title = options.title
    ? options.title.includes(SITE_NAME)
      ? options.title
      : `${options.title} | ${SITE_NAME}`
    : 'OpalSphere | Luxury Floral Artistry & Bespoke Events';

  const description = options.description || DEFAULT_DESCRIPTION;
  const canonicalUrl = resolveCanonicalUrl(options.canonicalUrl);
  const ogImage = options.ogImage || DEFAULT_OG_IMAGE;
  const ogType = options.ogType || 'website';
  const locale = options.locale || 'en_US';

  const robotsDirective = options.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const metaTags: Array<{ name?: string; property?: string; content: string }> = [
    { name: 'description', content: description },
    { name: 'robots', content: robotsDirective },
    { name: 'googlebot', content: robotsDirective },
    { name: 'format-detection', content: 'telephone=no' },

    // OpenGraph
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: ogType },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: options.ogImageAlt || `${SITE_NAME} Luxury Florals` },
    { property: 'og:locale', content: locale },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:site', content: '@OpalSphere' },
  ];

  if (options.keywords && options.keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: options.keywords.join(', ') });
  }

  if (options.publishedTime) {
    metaTags.push({ property: 'article:published_time', content: options.publishedTime });
  }

  if (options.modifiedTime) {
    metaTags.push({ property: 'article:modified_time', content: options.modifiedTime });
  }

  if (options.author) {
    metaTags.push({ property: 'article:author', content: options.author });
  }

  const linkTags: Array<{ rel: string; href: string; hreflang?: string }> = [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'alternate', href: canonicalUrl, hreflang: 'en' },
    { rel: 'alternate', href: canonicalUrl, hreflang: 'x-default' },
  ];

  return {
    title,
    metaTags,
    linkTags,
  };
}

