'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { projects, type SocialLink } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowLeft, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Project = (typeof projects)[0];
type GalleryItem = { url: string; description: string; isVideo?: boolean };

interface ProjectDetailClientProps {
  project: Project;
  gallery: GalleryItem[];
}

export function ProjectDetailClient({ project, gallery = [] }: ProjectDetailClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [aspects, setAspects] = useState<Record<number, 'landscape' | 'portrait'>>({});

  const lightboxImage = selectedIndex !== null ? gallery[selectedIndex] : null;

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const handleImageLoad = (idx: number, e: any) => {
    const { naturalWidth, naturalHeight } = e.target;
    setAspects(prev => ({
      ...prev,
      [idx]: naturalWidth > naturalHeight ? 'landscape' : 'portrait'
    }));
  };

  const navigateGallery = useCallback((direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    
    let newIndex = direction === 'next' ? selectedIndex + 1 : selectedIndex - 1;
    
    if (newIndex >= gallery.length) newIndex = 0;
    if (newIndex < 0) newIndex = gallery.length - 1;
    
    setSelectedIndex(newIndex);
  }, [selectedIndex, gallery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') navigateGallery('next');
      if (e.key === 'ArrowLeft') navigateGallery('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, navigateGallery]);

  return (
    <div className="animate-fade-in w-full">
      <header className="relative flex h-[60vh] flex-col items-center justify-center overflow-hidden border-b-4 border-border bg-background w-full">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Project Navigation in Hero */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-4 md:px-12 pointer-events-none">
          <Button 
            asChild 
            variant="outline" 
            className="pointer-events-auto hidden md:flex h-24 w-12 items-center justify-center rounded-none border-4 border-border bg-background hover:bg-accent hover:text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <Link href={`/projects/${prevProject.slug}`} title={`Anterior: ${prevProject.title}`}>
              <ChevronLeft className="h-8 w-8" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="pointer-events-auto hidden md:flex h-24 w-12 items-center justify-center rounded-none border-4 border-border bg-background hover:bg-accent hover:text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <Link href={`/projects/${nextProject.slug}`} title={`Siguiente: ${nextProject.title}`}>
              <ChevronRight className="h-8 w-8" />
            </Link>
          </Button>
        </div>

        <div className="w-full px-4 md:px-8 text-center z-10 relative">
          <div className="mb-6 inline-block bg-accent px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Project Showcase
          </div>
          <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.8]">
            {project.title}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-muted-foreground text-lg md:text-2xl font-medium leading-relaxed">
            {project.description}
          </p>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden gap-4 justify-center mt-12">
            <Button asChild variant="outline" className="border-2 rounded-none h-12">
              <Link href={`/projects/${prevProject.slug}`}><ChevronLeft className="mr-2" /> PREV</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 rounded-none h-12">
              <Link href={`/projects/${nextProject.slug}`}>NEXT <ChevronRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="w-full py-20 px-4 md:px-8 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
               <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent">Contexto</h2>
               <h3 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">Sobre el Proyecto</h3>
            </div>
            <div className="prose prose-xl dark:prose-invert max-w-none text-muted-foreground leading-relaxed
              prose-headings:font-headline prose-headings:text-foreground prose-headings:uppercase prose-headings:tracking-tighter
              prose-strong:text-accent prose-strong:font-black
              prose-li:marker:text-accent prose-li:font-medium
              prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-code:text-accent">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.longDescription}
              </ReactMarkdown>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="border-4 border-border p-8 bg-muted/5 shadow-[12px_12px_0px_theme(colors.border)]">
              <h3 className="text-xl font-headline font-bold mb-6 uppercase tracking-widest flex items-center gap-2">
                <div className="h-2 w-2 bg-accent" /> Tecnologías
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border-2 border-border px-3 py-1 font-bold rounded-none uppercase text-[10px] tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-4 border-border p-8 bg-accent/5 shadow-[12px_12px_0px_theme(colors.accent)]">
              <h3 className="text-xl font-headline font-bold mb-6 uppercase tracking-widest flex items-center gap-2">
                 <div className="h-2 w-2 bg-foreground" /> Acceso Directo
              </h3>
              <Button asChild size="lg" className="w-full border-4 border-border font-black text-lg rounded-none shadow-[6px_6px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  VISITAR SITIO <ArrowUpRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4 pt-8 border-t-2 border-border/10">
              <Button asChild variant="outline" className="w-full border-2 border-border font-black py-8 rounded-none uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors group">
                <Link href="/projects">
                  <ArrowLeft className="mr-4 h-6 w-6 transition-transform group-hover:-translate-x-2" /> Galería de Proyectos
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>

      {gallery.length > 0 && (
        <section className="w-full mt-20 border-t-4 border-border bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="w-full px-4 md:px-8 py-20">
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-20 text-center uppercase tracking-tighter italic">
              Galería de Medios
            </h2>
            <div className="grid grid-cols-12 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-6 grid-auto-flow-dense">
              {gallery.map((img, idx) => {
                const isLandscape = aspects[idx] === 'landscape';
                
                return (
                  <div 
                    key={idx} 
                    className={cn(
                      "group relative overflow-hidden rounded-none border-4 border-border bg-background transition-all duration-500 hover:z-20 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center",
                      isLandscape 
                        ? "col-span-12 md:col-span-6 row-span-2" 
                        : "col-span-6 md:col-span-3 row-span-3"
                    )}
                  >
                    {img.isVideo ? (
                      <video
                        src={img.url}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={img.url}
                        alt={img.description}
                        onLoad={(e) => handleImageLoad(idx, e)}
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                        onClick={() => {
                          setSelectedIndex(idx);
                          setIsLightboxOpen(true);
                        }}
                      />
                    )}
                    
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[8px] font-black px-2 py-1 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      {isLandscape ? 'Desktop View' : 'Mobile View'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-7xl bg-background border-4 border-border rounded-none shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden">
          <DialogTitle className="sr-only">Visualización de {project.title}</DialogTitle>
          <DialogDescription className="sr-only">Detalle de imagen o video del proyecto</DialogDescription>
          
          {lightboxImage && (
            <div className="relative flex flex-col items-center justify-center bg-background min-h-[70vh]">
              {/* Minimal Header */}
              <div className="absolute top-0 left-0 z-50 bg-border text-white px-4 py-2 font-black uppercase tracking-tighter text-sm flex items-center gap-4">
                <span>{project.title}</span>
                <span className="text-white/50">[{selectedIndex! + 1} / {gallery.length}]</span>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center justify-center z-40 px-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
                  className="rounded-none border-4 border-border bg-background hover:bg-accent hover:text-accent-foreground h-14 w-14 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <ChevronLeft className="h-10 w-10" />
                </Button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center justify-center z-40 px-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
                  className="rounded-none border-4 border-border bg-background hover:bg-accent hover:text-accent-foreground h-14 w-14 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <ChevronRight className="h-10 w-10" />
                </Button>
              </div>

              {lightboxImage.isVideo ? (
                <div className="w-full h-full flex justify-center p-8 md:p-16 mt-8">
                  <video
                    src={lightboxImage.url}
                    controls
                    className="max-h-[80vh] w-auto border-4 border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex justify-center p-8 md:p-16 mt-8">
                  <img
                    src={lightboxImage.url}
                    alt={project.title}
                    className="max-h-[80vh] w-auto object-contain border-4 border-border shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
