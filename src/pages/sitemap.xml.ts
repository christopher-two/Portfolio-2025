import { projects } from '../data/portfolio';
import { siteUrl } from '../data/site';

export const prerender = true;

const staticRoutes = [
  '/landing',
  '/bio',
  '/projects',
  '/projects/resume',
  '/override',
  '/lumi',
  '/daelia',
  '/parse',
  '/spot',
  '/spot/privacy',
  '/spot/terms',
  '/spot/versions',
];

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export function GET() {
  const urls = [...staticRoutes, ...projects.map((project) => `/projects/${project.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
