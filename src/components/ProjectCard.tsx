import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  coverImage: string;
  className?: string;
}

export function ProjectCard({ slug, title, coverImage, className }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className={className}>
      <div className="group relative flex w-full min-h-[45vh] items-end justify-start overflow-hidden border-b-2 border-r-2 border-border bg-black p-6 transition-all duration-500">
        {coverImage && (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-30"
            unoptimized={coverImage.toLowerCase().endsWith('.gif')}
          />
        )}
        <div className="relative z-10 w-full">
          <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-accent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3">
            Case Study
          </span>
          <h2 className="font-headline font-bold tracking-tighter text-white transition-all duration-500 group-hover:text-accent text-3xl sm:text-2xl md:text-3xl lg:text-4xl leading-[0.95]">
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h2>
          <div className="mt-4 flex items-center gap-2 text-[9px] font-black tracking-widest text-white/40 transition-all duration-500 group-hover:text-white">
             <div className="h-[1px] w-4 bg-accent transition-all duration-500 group-hover:w-8" />
             VIEW
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="h-6 w-6 text-accent -rotate-45" />
        </div>
      </div>
    </Link>
  )
}
