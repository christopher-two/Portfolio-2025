
"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

type Project = typeof projects[0];

interface ProjectsCarouselProps {
    projects: Project[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <Carousel
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
              coverImageId={project.coverImageId}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16 hidden md:flex" />
      <CarouselNext className="mr-16 hidden md:flex" />
    </Carousel>
  );
}
