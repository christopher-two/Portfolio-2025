"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  coverImage: string;
  description?: string;
  isImportant?: boolean;
  className?: string;
  tileClassName?: string;
}

export function ProjectCard({ slug, title, coverImage, description, isImportant = false, className, tileClassName }: ProjectCardProps) {
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    setImageLoadError(false);
  }, [coverImage]);

  const hasUsableImage = Boolean(coverImage) && !imageLoadError;

  return (
    <Link
      href={`/projects/${slug}`}
      className={className}
    >
      <div
        className={cn(
          "group relative h-full w-full overflow-hidden border-b-2 border-r-2 border-border bg-card transition-all duration-500",
          tileClassName
        )}
      >
        {hasUsableImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            unoptimized={coverImage.toLowerCase().endsWith('.gif')}
            onError={() => setImageLoadError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.25),transparent_50%),linear-gradient(135deg,hsl(var(--muted))_0%,hsl(var(--background))_100%)]" />
        )}

        <div className={cn(
          "absolute inset-0",
          isImportant
            ? "bg-[linear-gradient(to_top,rgba(5,5,12,0.85)_0%,rgba(7,7,16,0.35)_55%,rgba(8,8,16,0.2)_100%)]"
            : "bg-[linear-gradient(to_top,rgba(6,6,12,0.9)_0%,rgba(8,8,16,0.45)_55%,rgba(8,8,16,0.22)_100%)]"
        )} />

        <div className="absolute left-3 top-3 z-10">
          <span className={cn(
            "inline-block border border-border px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em]",
            isImportant
              ? "bg-accent text-accent-foreground"
              : "bg-background/80 text-muted-foreground"
          )}>
            {isImportant ? "Importante" : "Proyecto"}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
          <h2 className="overflow-hidden text-balance text-2xl font-headline font-bold leading-[0.95] text-white drop-shadow-sm sm:text-3xl lg:text-[2rem] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {title}
          </h2>
          {description && (
            <p className="mt-2 overflow-hidden text-xs font-medium leading-relaxed text-white/80 sm:text-sm [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
              {description}
            </p>
          )}
          <div className="mt-3 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.18em] text-white/85">
            <span>Case Study</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
