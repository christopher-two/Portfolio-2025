import { projects } from "@/lib/data";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getProjectImages } from "@/lib/r2-client";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProjectsPage() {
  const projectsWithCovers = await Promise.all(
    projects.map(async (project) => {
      if (!project.r2Folder) return { ...project, coverImage: "" };
      
      const images = await getProjectImages(project.r2Folder);
      return {
        ...project,
        coverImage: images[0]?.url || ""
      };
    })
  );

  return <ProjectsGrid initialProjects={projectsWithCovers} />;
}
