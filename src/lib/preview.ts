/**
 * Utility functions for project live preview routing and embedding.
 */

/**
 * Checks whether a project live URL strictly enforces frame-busting or
 * framing denials (X-Frame-Options: DENY / SAMEORIGIN or CSP frame-ancestors 'none')
 * requiring the server-side /api/preview proxy to sanitize headers.
 *
 * Sites that allow native framing (e.g. northdemy.com, 360radiotv.com, sicolines.com,
 * zyradex.com, fixeroni-page.netlify.app) MUST be embedded directly to preserve their
 * native CORS, audio contexts, and session cookies.
 */
export function requiresPreviewProxy(url: string): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();

  return (
    lower.includes("stormsale-one.vercel.app") ||
    lower.includes("vera-os-xi.vercel.app") ||
    lower.includes("stellar-market-pay.vercel.app") ||
    lower.includes("stellar-indigo-pay.vercel.app")
  );
}

/**
 * Returns the effective iframe src URL for a project.
 */
export function getProjectPreviewSrc(url: string): string {
  if (!url) return "";
  if (requiresPreviewProxy(url)) {
    return `/api/preview?url=${encodeURIComponent(url)}`;
  }
  return url;
}
