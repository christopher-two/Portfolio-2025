import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDesktopVentoClass } from "@/features/home/domain/home.constants";
import { type Project } from "@/features/projects/data/projects.repository";
import { getProjectSupportNote } from "@/features/projects/domain/projects.selectors";
import { isImportantProject } from "@/features/projects/domain/projects.priority";

type HomeProjectsDesktopSectionProps = {
  projects: Project[];
  totalProjects: number;
};

export function HomeProjectsDesktopSection({ projects, totalProjects }: HomeProjectsDesktopSectionProps) {
  const hasMoreDesktopProjects = totalProjects > projects.length;

  return (
    <section className="hidden border-b-2 border-border bg-background md:block md:h-[calc(100svh-56px)] md:overflow-hidden">
      <div className="grid h-full grid-flow-dense grid-cols-6 border-l-2 border-border md:[grid-template-rows:160px_repeat(3,minmax(0,1fr))]">
        <article className="relative col-span-6 flex items-end border-r-2 border-b-2 border-border bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] p-8 text-primary-foreground">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/85">Seccion</p>
            <h2 className="mt-2 text-5xl font-headline font-black uppercase tracking-[0.04em]">Proyectos</h2>
          </div>
        </article>

        {projects.map((project, index) => {
          const ventoClass = getDesktopVentoClass(project.slug, index);
          const isImportant = isImportantProject(project.slug);
          const isExpandedTile = ventoClass.includes("col-span-2") || ventoClass.includes("row-span-2");

          return (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={cn(
                "group relative flex h-full select-text flex-col items-center justify-center overflow-hidden border-r-2 border-b-2 border-border px-4 py-6 text-center ring-1 ring-inset ring-border transition-colors",
                isImportant ? "bg-accent/15 hover:bg-accent/25" : "bg-card hover:bg-muted/40",
                ventoClass
              )}
            >
              {isImportant && (
                <div className="absolute left-3 top-3 z-10 text-foreground">
                  <span className="inline-block border border-border bg-accent px-2 py-1 text-[9px] font-black uppercase tracking-[0.25em] text-accent-foreground">
                    Importante
                  </span>
                </div>
              )}

              <h3
                className={cn(
                  "max-w-[92%] text-balance break-words font-headline font-bold leading-[1.05] text-foreground",
                  isExpandedTile ? "text-[clamp(1.9rem,2.7vw,3.8rem)]" : "text-[clamp(1.4rem,1.7vw,2.6rem)]"
                )}
              >
                {project.title}
              </h3>

              {!isImportant && (
                <p className="mt-2 max-w-[90%] text-balance text-xs font-medium leading-relaxed text-muted-foreground">
                  {getProjectSupportNote(project)}
                </p>
              )}
            </Link>
          );
        })}

        {hasMoreDesktopProjects && (
          <Link
            href="/projects"
            className="group col-span-2 flex h-full items-center justify-between border-r-2 border-b-2 border-border bg-primary px-6 py-6 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-foreground/85">Mas Proyectos</p>
              <h3 className="mt-2 text-2xl font-headline font-black leading-tight">Ver todos</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">
                {totalProjects - projects.length} adicionales en /projects
              </p>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0" />
          </Link>
        )}
      </div>
    </section>
  );
}
