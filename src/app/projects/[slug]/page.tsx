
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { ProjectDetailClient } from '@/components/ProjectDetailClient';
import { getProjectImages } from '@/lib/r2-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Project detail page handler with dynamic R2 gallery support.
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Debug log to terminal
  console.log(`[ROUTE DEBUG] Requesting detail for: "${slug}"`);
  console.log(`[ROUTE DEBUG] Available slugs: ${projects.map(p => p.slug).join(', ')}`);

  // Normalize slug to match lib/data.ts exactly
  const normalizedSlug = slug.toLowerCase().trim();
  const project = projects.find((p) => p.slug.toLowerCase().trim() === normalizedSlug);

  if (!project) {
    console.error(`[ROUTE ERROR] Project not found for slug: ${slug}`);
    notFound();
  }

  // Use dynamic gallery or empty array if not found
  let gallery = [];
  try {
    if (project.r2Folder) {
      console.log(`[R2 DEBUG] Fetching images from folder: ${project.r2Folder}`);
      gallery = await getProjectImages(project.r2Folder);
      // Shuffle gallery on server to avoid hydration mismatch
      gallery = [...gallery].sort(() => Math.random() - 0.5);
    }
  } catch (error) {
    console.error(`[R2 ERROR] Failed to fetch gallery for ${slug}:`, error);
  }
  
  return <ProjectDetailClient project={project} gallery={gallery} />;
}

// generateStaticParams provides hints to Next.js
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
