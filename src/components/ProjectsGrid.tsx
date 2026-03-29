"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { getProjectTechFilters, getUnifiedTechFilters } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  initialProjects: any[];
}

const ventoPriorityOrder = [
  "parse",
  "override-menu",
  "override-logistics",
  "override-sense",
  "atomo-app",
  "spot",
];

const ventoPremiumTiles: Record<string, string> = {
  parse: "md:col-span-2 xl:col-span-2 md:row-span-2",
  "override-menu": "xl:col-span-2",
  "override-logistics": "md:row-span-2",
  "override-sense": "xl:col-span-2",
  "atomo-app": "md:col-span-2",
  spot: "md:row-span-2",
};

function getPriorityRank(slug: string) {
  const index = ventoPriorityOrder.indexOf(slug);
  return index === -1 ? Number.POSITIVE_INFINITY : index;
}

export function ProjectsGrid({ initialProjects }: ProjectsGridProps) {
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hideToolbar, setHideToolbar] = useState(false);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<"up" | "down" | null>(null);
  const accumulatedScrollRef = useRef(0);
  const suppressUntilRef = useRef(0);

  const categories = useMemo(
    () => getUnifiedTechFilters(initialProjects).slice(0, 20),
    [initialProjects]
  );

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 400);

      const now = performance.now();
      if (now < suppressUntilRef.current) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const delta = currentScrollY - lastScrollYRef.current;
      if (Math.abs(delta) < 2) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const direction = delta > 0 ? "down" : "up";

      if (currentScrollY <= 120) {
        setHideToolbar(false);
        scrollDirectionRef.current = null;
        accumulatedScrollRef.current = 0;
      } else {
        if (scrollDirectionRef.current !== direction) {
          scrollDirectionRef.current = direction;
          accumulatedScrollRef.current = 0;
        }

        accumulatedScrollRef.current += Math.abs(delta);

        if (direction === "down" && accumulatedScrollRef.current > 40 && !hideToolbar) {
          setHideToolbar(true);
          accumulatedScrollRef.current = 0;
          suppressUntilRef.current = now + 320;
        }

        if (direction === "up" && accumulatedScrollRef.current > 16 && hideToolbar) {
          setHideToolbar(false);
          accumulatedScrollRef.current = 0;
          suppressUntilRef.current = now + 220;
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideToolbar]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        (project.tags ?? []).some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()));
      
      const matchesCategory = activeTech
        ? getProjectTechFilters(project).includes(activeTech)
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeTech, initialProjects]);

  const sortedFilteredProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      const rankDiff = getPriorityRank(a.slug) - getPriorityRank(b.slug);
      if (rankDiff !== 0) return rankDiff;

      return Number(a.id) - Number(b.id);
    });
  }, [filteredProjects]);

  const usePremiumLayout = !search.trim() && !activeTech;

  return (
    <div className="w-full border-t-2 border-border bg-background pb-20">
      <section className="grid grid-cols-1 border-b-2 border-border md:grid-cols-[1fr_auto]">
        <div className="px-4 py-6 md:px-8 md:py-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">Vento Project Atlas</p>
          <h1 className="mt-2 text-2xl font-headline font-bold tracking-tight md:text-4xl">Explora Todos Los Proyectos</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Grid vivo con jerarquias visuales, filtros unificados por tecnologia y una lectura pensada para desktop y movil.
          </p>
        </div>
        <div className="flex items-center gap-2 border-t-2 border-border px-4 py-6 md:border-l-2 md:border-t-0 md:px-8">
          <div className="border-2 border-border bg-card px-4 py-3 shadow-[4px_4px_0px_theme(colors.border)]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Proyectos</p>
            <p className="text-2xl font-headline font-bold">{initialProjects.length}</p>
          </div>
          <div className="border-2 border-border bg-card px-4 py-3 shadow-[4px_4px_0px_theme(colors.border)]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Tecnologias</p>
            <p className="text-2xl font-headline font-bold">{categories.length}</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <div
        className={cn(
          "sticky top-[58px] z-30 w-full overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-out",
          hideToolbar
            ? "max-h-0 border-b-0 py-0 opacity-0"
            : "max-h-[320px] border-b-2 border-border p-4 opacity-100 md:p-6"
        )}
      >
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-6">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-2xl group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
            <Input
              placeholder="Buscar proyecto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 border-2 border-border rounded-none focus-visible:ring-0 focus-visible:border-accent bg-background shadow-[4px_4px_0px_theme(colors.border)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-accent transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="w-full overflow-x-auto pb-2 no-scrollbar">
            <div className="flex min-w-max flex-nowrap justify-start gap-2 px-2 md:min-w-0 md:flex-wrap md:justify-center md:px-0">
              <button
                onClick={() => setActiveTech(null)}
                className={cn(
                  "px-4 py-2 text-xs font-black uppercase tracking-widest border-2 transition-all whitespace-nowrap",
                  !activeTech
                    ? "bg-accent text-accent-foreground border-border shadow-[4px_4px_0px_theme(colors.border)]"
                    : "bg-background text-muted-foreground border-border/50 hover:border-border hover:text-foreground"
                )}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTech(category === activeTech ? null : category)}
                  className={cn(
                    "px-4 py-2 text-xs font-black uppercase tracking-widest border-2 transition-all whitespace-nowrap",
                    activeTech === category
                      ? "bg-accent text-accent-foreground border-border shadow-[4px_4px_0px_theme(colors.border)]"
                      : "bg-background text-muted-foreground border-border/50 hover:border-border hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Result Info */}
      <div className="flex items-center justify-between border-b-2 border-border px-4 py-3 md:px-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          {sortedFilteredProjects.length} resultados encontrados
        </p>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          {usePremiumLayout ? "Layout premium activo" : "Layout filtrado"}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 border-l-2 border-border sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {sortedFilteredProjects.length > 0 ? (
          sortedFilteredProjects.map((project) => {
            const premiumClass = usePremiumLayout ? ventoPremiumTiles[project.slug] ?? "" : "";
            const isTallTile = premiumClass.includes("row-span-2");

            return (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              title={project.title}
              coverImage={project.coverImage}
              className={cn("col-span-1", premiumClass)}
              tileClassName={cn(
                "min-h-[38vh] sm:min-h-[36vh] lg:min-h-[30vh]",
                isTallTile && "lg:min-h-[62vh]"
              )}
            />
          );})
        ) : (
          <div className="col-span-full py-40 text-center space-y-4 bg-muted/5 border-r-2 border-b-2 border-border">
            <h3 className="text-4xl font-headline font-bold uppercase italic">No se encontraron proyectos</h3>
            <p className="text-muted-foreground">Prueba ajustando los filtros o la búsqueda</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearch(""); setActiveTech(null); }}
              className="border-2 rounded-none"
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 h-12 w-12 rounded-none border-2 border-border bg-background shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        )}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
