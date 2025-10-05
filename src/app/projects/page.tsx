import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="w-full animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            slug={project.slug}
            title={project.title}
            coverImageId={project.coverImageId}
          />
        ))}
      </div>
    </div>
  );
}
