import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getMobileVentoClass } from "@/features/home/domain/home.constants";
import { type Project } from "@/features/projects/data/projects.repository";
import { getProjectSupportNote } from "@/features/projects/domain/projects.selectors";
import { isImportantProject } from "@/features/projects/domain/projects.priority";

type HomeProjectsMobileSectionProps = {
  projects: Project[];
  totalProjects: number;
};

export function HomeProjectsMobileSection({ projects, totalProjects }: HomeProjectsMobileSectionProps) {
  const hasMoreMobileProjects = totalProjects > projects.length;

  return (
    <section className="relative min-h-screen border-b-2 border-border bg-background md:hidden">
      <div className="grid grid-flow-dense grid-cols-2 auto-rows-[124px] border-l-2 border-border">
        <article className="col-span-2 flex items-end border-r-2 border-b-2 border-border bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] px-4 py-5 text-primary-foreground">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-primary-foreground/85">Seccion</p>
            <h2 className="mt-2 text-3xl font-headline font-black uppercase tracking-[0.06em]">Proyectos</h2>
          </div>
        </article>

        {projects.map((project, index) => {
          const isImportant = isImportantProject(project.slug);
          const mobileVentoClass = getMobileVentoClass(project.slug, index);
          const isExpandedTile = mobileVentoClass.includes("col-span-2") || mobileVentoClass.includes("row-span-2");

          return (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={cn(
                "group relative flex select-text flex-col items-center justify-center border-r-2 border-b-2 border-border px-3 text-center ring-1 ring-inset ring-border",
                isImportant ? "bg-accent/15" : "bg-card",
                mobileVentoClass
              )}
            >
              {isImportant && (
                <div className="absolute left-2 top-2">
                  <span className="inline-block border border-border bg-accent px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-accent-foreground">
                    Clave
                  </span>
                </div>
              )}
              <h3 className={cn("text-balance font-headline font-bold leading-tight text-foreground", isExpandedTile ? "text-2xl" : "text-xl")}>
                {project.title}
              </h3>

              {!isImportant && (
                <p className="mt-2 max-w-[94%] text-balance text-[11px] font-medium leading-relaxed text-muted-foreground">
                  {getProjectSupportNote(project)}
                </p>
              )}
            </Link>
          );
        })}

        {hasMoreMobileProjects && (
          <Link
            href="/projects"
            className="col-span-2 flex min-h-[124px] items-center justify-between border-r-2 border-b-2 border-border bg-primary px-4 py-5 text-primary-foreground"
          >
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-foreground/85">Mas Proyectos</p>
              <h3 className="mt-2 text-2xl font-headline font-black leading-tight">Ver todos en /projects</h3>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Link>
        )}
      </div>
    </section>
  );
}
