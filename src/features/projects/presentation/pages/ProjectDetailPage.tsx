import { notFound } from "next/navigation";
import { getProjectImages } from "@/features/projects/data/project-media.repository";
import { getProjects } from "@/features/projects/data/projects.repository";
import { getProjectBySlug } from "@/features/projects/domain/projects.selectors";
import { ProjectDetailClient } from "@/features/projects/presentation/components/ProjectDetailClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = getProjects();
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  let gallery: Awaited<ReturnType<typeof getProjectImages>> = [];
  try {
    if (project.r2Folder) {
      const dynamicImages = await getProjectImages(project.r2Folder);
      gallery = [...dynamicImages].sort(() => Math.random() - 0.5);
    }
  } catch (error) {
    console.error(`[R2] Error scanning folder for "${slug}":`, error);
  }

  return <ProjectDetailClient project={project} gallery={gallery} />;
}

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}
