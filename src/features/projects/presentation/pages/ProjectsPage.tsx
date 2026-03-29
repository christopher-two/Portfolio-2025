import { attachProjectCoversPaged } from "@/features/projects/data/project-media.repository";
import { getProjects } from "@/features/projects/data/projects.repository";
import { ProjectsGrid } from "@/features/projects/presentation/components/ProjectsGrid";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProjectsPage() {
  const projectsWithCovers = await attachProjectCoversPaged(getProjects(), 6);
  return <ProjectsGrid initialProjects={projectsWithCovers} />;
}
