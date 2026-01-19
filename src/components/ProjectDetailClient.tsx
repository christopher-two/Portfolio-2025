'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type projects } from '@/lib/data';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { CarouselControls } from '@/components/CarouselControls';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Project = (typeof projects)[0];

interface ProjectDetailClientProps {
  project: Project;
  galleryImages: ImagePlaceholder[];
}

export function ProjectDetailClient({ project, galleryImages }: ProjectDetailClientProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [lightboxImage, setLightboxImage] = useState<ImagePlaceholder | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="animate-fade-in">
      <header className="relative flex h-[50vh] items-center justify-center overflow-hidden border-b-2 border-border bg-background">
        <div className="container max-w-screen-lg mx-auto text-center z-10 p-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            {project.description}
          </p>
        </div>
      </header>

      <div className="container max-w-screen-lg mx-auto py-12 px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-headline font-bold">Sobre el Proyecto</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
              <p>{project.longDescription}</p>
            </div>
            
            <section className="py-8">
              <h3 className="text-2xl font-headline font-bold mb-6">Galería del Proyecto</h3>
              <div className="relative">
                <Carousel setApi={setApi} className="w-full" opts={{loop: true}}>
                  <CarouselContent>
                    {galleryImages.map((img, index) => (
                      <CarouselItem key={index}>
                        <Card className="overflow-hidden border-2 border-border">
                          <CardContent className="p-0">
                            <button
                              type="button"
                              className="group relative block w-full aspect-video"
                              onClick={() => {
                                setLightboxImage(img);
                                setIsLightboxOpen(true);
                              }}
                              aria-label="Ver imagen en grande"
                            >
                              <Image
                                src={img.imageUrl}
                                alt={`${project.title} - imagen ${index + 1}`}
                                fill
                                className="object-cover"
                                data-ai-hint={img.imageHint}
                                unoptimized={img.isGif}
                              />
                              <span className="absolute right-3 top-3 rounded-md bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-tight text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                Ver grande
                              </span>
                            </button>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                {api && (
                  <div className="mt-6 flex justify-center">
                    <CarouselControls api={api} />
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside className="md:col-span-1 space-y-8">
            <div className="border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-headline font-bold mb-4">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border-2 border-border">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-headline font-bold mb-4">Ver en vivo</h3>
              <Button asChild className="w-full border-2 border-border font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  Visitar Sitio <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
             <Button asChild variant="outline" className="w-full">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Proyectos
                </Link>
              </Button>
          </aside>
        </div>
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-5xl">
          {lightboxImage && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{lightboxImage.description}</DialogDescription>
              </DialogHeader>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg border border-border bg-background">
                <Image
                  src={lightboxImage.imageUrl}
                  alt={lightboxImage.description}
                  fill
                  className="object-contain"
                  data-ai-hint={lightboxImage.imageHint}
                  unoptimized={lightboxImage.isGif}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
