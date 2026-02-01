
"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { CarouselControls } from "./CarouselControls";

type Project = typeof projects[0];

interface ProjectsCarouselProps {
    projects: Project[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2">
              <ProjectCard
                slug={project.slug}
                title={project.title}
                coverImage={project.coverImage}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {api && <CarouselControls api={api} className="absolute bottom-8 left-1/2 -translate-x-1/2" />}
    </div>
  );
}

