import { env } from 'cloudflare:workers';
import { projects } from '../../data/portfolio';

export const prerender = false;

export async function GET({ url }: { url: URL }) {
  const key = url.searchParams.get('key')?.trim().replace(/^\/+/, '');
  if (!key) return new Response("Missing 'key' query param", { status: 400 });

  const isProjectMedia = projects.some((project) => {
    const folder = project.r2Folder.replace(/^\/+|\/+$/g, '');
    const withoutProjects = folder.replace(/^projects\//i, '');
    return [folder, `projects/${withoutProjects}`, withoutProjects].some((prefix) => key.startsWith(`${prefix}/`));
  });
  if (!isProjectMedia) return new Response('Media not found', { status: 404 });

  const object = await env.PROJECTS_BUCKET?.get(key);
  if (!object) return new Response('Media not found', { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
  headers.set('ETag', object.httpEtag);

  return new Response(object.body, { headers });
}
