/**
 * Schema.org JSON-LD Structured Data Builder
 * Typed, modular generator for WebSite, Organization, Article, BreadcrumbList,
 * FAQPage, and LocalBusiness schemas with XSS sanitization.
 */

import { BASE_CANONICAL_DOMAIN, SITE_NAME, DEFAULT_OG_IMAGE } from './metaEngine';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

/**
 * Escapes unsafe characters in JSON-LD strings to prevent XSS injection.
 */
export function sanitizeJsonLd(data: object): string {
  const jsonString = JSON.stringify(data);
  return jsonString
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    '@id': `${BASE_CANONICAL_DOMAIN}/#organization`,
    name: SITE_NAME,
    url: BASE_CANONICAL_DOMAIN,
    logo: `${BASE_CANONICAL_DOMAIN}/favicon.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      'OpalSphere crafts bespoke luxury floral artistry and experiential botanical installations for high-profile celebrations.',
    email: 'hello@opalsphere.com',
    telephone: '+1-555-000-1234',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Luxury Lane, Bloom District',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    sameAs: [
      'https://instagram.com/opalsphere',
      'https://pinterest.com/opalsphere',
      'https://linkedin.com/company/opalsphere',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-000-1234',
        contactType: 'customer service',
        email: 'hello@opalsphere.com',
        availableLanguage: ['English'],
      },
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_CANONICAL_DOMAIN}/#website`,
    url: BASE_CANONICAL_DOMAIN,
    name: SITE_NAME,
    description: 'Bespoke Luxury Floral Artistry & Event Styling',
    publisher: {
      '@id': `${BASE_CANONICAL_DOMAIN}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_CANONICAL_DOMAIN}/shop?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_CANONICAL_DOMAIN}${item.url}`,
    })),
  };
}

export function buildArticleSchema(options: ArticleSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    url: options.url.startsWith('http') ? options.url : `${BASE_CANONICAL_DOMAIN}${options.url}`,
    image: options.image || DEFAULT_OG_IMAGE,
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    author: {
      '@type': 'Person',
      name: options.authorName || 'Elena Rossi',
      jobTitle: 'Founder & Creative Director',
    },
    publisher: {
      '@id': `${BASE_CANONICAL_DOMAIN}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': options.url.startsWith('http') ? options.url : `${BASE_CANONICAL_DOMAIN}${options.url}`,
    },
  };
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

