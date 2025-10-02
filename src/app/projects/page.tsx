import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="container max-w-screen-lg mx-auto py-12 px-4 animate-fade-in">
      <section className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
          My Work
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A collection of projects I've built. Each one is a step in my journey as a developer.
        </p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-border">
        {projects.map((project) => (
          <div key={project.id} className="border-r-2 border-b-2 border-border p-4 md:p-6">
            <ProjectCard {...project} />
          </div>
        ))}
        {projects.length % 2 !== 0 && <div className="border-r-2 border-b-2 border-border"></div>}
      </div>
    </div>
  );
}
