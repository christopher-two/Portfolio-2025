"use client";

import { useState, useMemo } from "react";
import { projects, TECH_CATEGORIES } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  initialProjects: any[];
}

export function ProjectsGrid({ initialProjects }: ProjectsGridProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.values(TECH_CATEGORIES);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = activeCategory 
        ? project.categories?.includes(activeCategory)
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, initialProjects]);

  return (
    <div className="w-full space-y-8 pb-20">
      {/* Search and Filter Bar */}
      <div className="sticky top-14 z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-2 border-border p-4 md:p-6">
        <div className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
            <Input
              placeholder="Buscar proyecto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 border-2 border-border rounded-none focus-visible:ring-0 focus-visible:border-accent bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
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
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-4 py-2 text-xs font-black uppercase tracking-widest border-2 transition-all",
                !activeCategory 
                  ? "bg-accent text-accent-foreground border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                  : "bg-background text-muted-foreground border-border/50 hover:border-border hover:text-foreground"
              )}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                className={cn(
                  "px-4 py-2 text-xs font-black uppercase tracking-widest border-2 transition-all",
                  activeCategory === category
                    ? "bg-accent text-accent-foreground border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-background text-muted-foreground border-border/50 hover:border-border hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Result Info */}
      <div className="px-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
        {filteredProjects.length} Resultados encontrados
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t-2 border-l-2 border-border">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              title={project.title}
              coverImage={project.coverImage}
              className="col-span-1"
            />
          ))
        ) : (
          <div className="col-span-full py-40 text-center space-y-4 bg-muted/5">
            <h3 className="text-4xl font-headline font-bold uppercase italic">No se encontraron proyectos</h3>
            <p className="text-muted-foreground">Prueba ajustando los filtros o la búsqueda</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearch(""); setActiveCategory(null); }}
              className="border-2 rounded-none"
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
