import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="w-full animate-fade-in">
      <div className="flex flex-col">
        {projects.map((project) => {
          const coverImage: ImagePlaceholder | undefined = PlaceHolderImages.find(p => p.id === project.coverImageId);
          return (
            <Link href={`/projects/${project.slug}`} key={project.id}>
              <div className="group relative flex h-[60vh] w-full items-center justify-center overflow-hidden border-b-2 border-border bg-black">
                {coverImage && (
                  <Image
                    src={coverImage.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 opacity-40 group-hover:opacity-30"
                    data-ai-hint={coverImage.imageHint}
                  />
                )}
                <div className="relative z-10 text-center text-primary-foreground p-4">
                  <h2 className="text-5xl font-headline font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-6xl md:text-7xl">
                    {project.title}
                  </h2>
                  <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ver Proyecto <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
