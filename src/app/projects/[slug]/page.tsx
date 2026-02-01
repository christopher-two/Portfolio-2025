
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { ProjectDetailClient } from '@/components/ProjectDetailClient';
import { getProjectImages } from '@/lib/r2-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Set to true to allow dynamic parameters that weren't generated at build time
export const dynamicParams = true;

/**
 * Project detail page handler.
 * Fetches dynamic gallery from Cloudflare R2 on every request.
 */
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Debug for Vercel/Local logs
  console.log(`[ROUTE] Fetching detail for: "${slug}"`);

  // Robust slug matching
  const normalizedSlug = slug.toLowerCase().trim();
  const project = projects.find((p) => p.slug.toLowerCase().trim() === normalizedSlug);

  if (!project) {
    console.warn(`[ROUTE] Project NOT FOUND for slug: "${slug}"`);
    console.info(`[ROUTE] Available slugs: ${projects.map(p => p.slug).join(', ')}`);
    notFound();
  }

  let gallery = [];
  try {
    if (project.r2Folder) {
      console.log(`[R2] Scanning folder: "${project.r2Folder}"`);
      const dynamicImages = await getProjectImages(project.r2Folder);
      // Shuffle on server to ensure consistent hydration but dynamic view
      gallery = [...dynamicImages].sort(() => Math.random() - 0.5);
    }
  } catch (error) {
    console.error(`[R2] Error scanning folder for "${slug}":`, error);
  }
  
  return <ProjectDetailClient project={project} gallery={gallery} />;
}

/**
 * Generate static params to help Next.js with routing hints.
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
