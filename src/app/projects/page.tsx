import { projects } from "@/lib/data";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { attachProjectCoversPaged } from "@/lib/r2-client";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProjectsPage() {
  const projectsWithCovers = await attachProjectCoversPaged(projects, 6);

  return <ProjectsGrid initialProjects={projectsWithCovers} />;
}
