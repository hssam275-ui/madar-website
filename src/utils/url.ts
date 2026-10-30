// Prefix a site-root path with the configured base (e.g. "/madar-website/" on GitHub Pages
// before the custom domain is connected, "/" afterwards).
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
