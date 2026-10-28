/**
 * Google AdSense Compliance Configuration & Route Guardrails
 * Publisher ID: pub-4318712038607459
 * Client ID: ca-pub-4318712038607459
 */

export const ADSENSE_CONFIG = {
  publisherId: 'pub-4318712038607459',
  clientId: 'ca-pub-4318712038607459',
  scriptUrl: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4318712038607459',
};

/**
 * STRICT WHITELIST: Only genuine, content-rich, publicly accessible editorial pages.
 * Any route NOT in this list will completely suppress AdSense scripts and ad units.
 */
export const ALLOWED_EDITORIAL_ROUTES = [
  '/',
  '/about',
  '/events',
  '/shop',
  '/community',
  '/gallery',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
];

/**
 * STRICT BLACKLIST: Under no circumstances should ads load on these screens.
 * Includes authentication views, user dashboards, cart/checkout flows, booking forms,
 * error pages, and empty/loading states.
 */
export const RESTRICTED_ROUTES = [
  '/login',
  '/signup',
  '/profile',
  '/dashboard',
  '/cart',
  '/wishlist',
  '/booking',
  '/reset-password',
  '/404',
  '/500',
  '/maintenance',
];

/**
 * Determines whether a route is compliant for AdSense delivery.
 */
export function isAdDeliveryPermitted(pathname: string): boolean {
  // Normalize path
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

  // Check if directly restricted
  if (RESTRICTED_ROUTES.some((route) => normalized === route || normalized.startsWith(`${route}/`))) {
    return false;
  }

  // Check if explicitly on the allowed editorial whitelist
  return ALLOWED_EDITORIAL_ROUTES.includes(normalized);
}

/**
 * Determines if a route requires noindex, nofollow (private/transactional screens)
 */
export function isPrivateOrUtilityRoute(pathname: string): boolean {
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return RESTRICTED_ROUTES.some((route) => normalized === route || normalized.startsWith(`${route}/`));
}

