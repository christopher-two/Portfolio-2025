import { env } from 'cloudflare:workers';

export interface ProjectMedia {
  key: string;
  url: string;
  description: string;
  isVideo: boolean;
}

function prefixesFor(folder: string) {
  const clean = folder.replace(/^\/+|\/+$/g, '');
  const withoutProjects = clean.replace(/^projects\//i, '');
  return [...new Set([clean, `projects/${withoutProjects}`, withoutProjects])]
    .filter(Boolean)
    .map((prefix) => `${prefix}/`);
}

export async function getProjectMedia(folder: string, maxItems = 12): Promise<ProjectMedia[]> {
  const bucket = env.PROJECTS_BUCKET;
  if (!bucket || !folder) return [];

  for (const prefix of prefixesFor(folder)) {
    const listing = await bucket.list({ prefix, limit: maxItems });
    if (listing.objects.length === 0) continue;

    return listing.objects.map((object) => ({
      key: object.key,
      url: `/api/r2-image?key=${encodeURIComponent(object.key)}`,
      description: object.key.split('/').pop() ?? object.key,
      isVideo: /\.(mp4|webm)$/i.test(object.key),
    }));
  }

  return [];
}
