import React, { useEffect } from 'react';
import { buildMetadata, MetaOptions, GeneratedMetadata } from '../../lib/seo/metaEngine';
import { sanitizeJsonLd, buildOrganizationSchema, buildWebSiteSchema } from '../../lib/seo/schemaGenerator';

export interface SEOHeadProps extends MetaOptions {
  schema?: object | object[];
  includeDefaultSchemas?: boolean;
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType,
  ogImage,
  ogImageAlt,
  noindex,
  nofollow,
  keywords,
  schema,
  includeDefaultSchemas = true,
}: SEOHeadProps) {
  useEffect(() => {
    const metaData: GeneratedMetadata = buildMetadata({
      title,
      description,
      canonicalUrl,
      ogType,
      ogImage,
      ogImageAlt,
      noindex,
      nofollow,
      keywords,
    });

    // 1. Update Document Title
    document.title = metaData.title;

    // 2. Update / Upsert Meta Tags
    metaData.metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (name) el.setAttribute('name', name);
        if (property) el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    });

    // 3. Update / Upsert Canonical and Alternate Link Tags
    metaData.linkTags.forEach(({ rel, href, hreflang }) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (hreflang) el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    });

    // 4. Inject JSON-LD Schema
    const schemaScriptId = 'opalsphere-structured-data';
    let scriptEl = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = schemaScriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const schemasToInject: object[] = [];
    if (includeDefaultSchemas) {
      schemasToInject.push(buildOrganizationSchema(), buildWebSiteSchema());
    }
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    scriptEl.textContent = sanitizeJsonLd(schemasToInject);

    return () => {
      // Optional cleanup if route unmounts
    };
  }, [
    title,
    description,
    canonicalUrl,
    ogType,
    ogImage,
    ogImageAlt,
    noindex,
    nofollow,
    keywords,
    schema,
    includeDefaultSchemas,
  ]);

  return null;
}

