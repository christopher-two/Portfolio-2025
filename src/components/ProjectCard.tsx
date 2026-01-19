import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

interface ProjectCardProps {
  slug: string;
  title: string;
  coverImageId: string;
}

export function ProjectCard({ slug, title, coverImageId }: ProjectCardProps) {
  const coverImage: ImagePlaceholder | undefined = PlaceHolderImages.find(p => p.id === coverImageId);
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative flex h-full min-h-[60vh] md:min-h-[50vh] w-full items-end justify-start overflow-hidden border-b-2 border-r-2 border-border bg-black p-8">
        {coverImage && (
          <Image
            src={coverImage.imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 opacity-40 group-hover:opacity-30"
            data-ai-hint={coverImage.imageHint}
            unoptimized={coverImage.isGif}
          />
        )}
        <div className="relative z-10 text-primary-foreground">
          <h2 className="relative inline-block text-4xl font-headline font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-5xl after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100">
            {title}
          </h2>
          <div className="mt-4 flex items-center gap-2 text-lg font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Ver Proyecto <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
