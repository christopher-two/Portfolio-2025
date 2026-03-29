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
  className?: string;
  tileClassName?: string;
}

export function ProjectCard({ slug, title, coverImage, className, tileClassName }: ProjectCardProps) {
  const [isPortraitVento, setIsPortraitVento] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    setImageLoadError(false);
  }, [coverImage]);

  useEffect(() => {
    if (!coverImage) {
      setIsPortraitVento(false);
      return;
    }

    let isMounted = true;
    const probe = new window.Image();
    probe.decoding = "async";

    probe.onload = () => {
      if (!isMounted) return;

      const width = probe.naturalWidth || 1;
      const height = probe.naturalHeight || 1;
      const ratio = width / height;

      // Portrait around 9:16 (0.5625) with small tolerance for compression/crops.
      const is916Portrait = ratio >= 0.49 && ratio <= 0.64;
      setIsPortraitVento(is916Portrait);
    };

    probe.onerror = () => {
      if (!isMounted) return;
      setIsPortraitVento(false);
    };

    probe.src = coverImage;

    return () => {
      isMounted = false;
    };
  }, [coverImage]);

  const hasUsableImage = Boolean(coverImage) && !imageLoadError;

  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        className,
        !hasUsableImage && "lg:col-span-1 lg:row-span-1 xl:col-span-1"
      )}
    >
      <div
        className={cn(
          "group relative flex w-full min-h-[45vh] items-end justify-start overflow-hidden border-b-2 border-r-2 border-border bg-card p-6 transition-all duration-500",
          tileClassName,
          !hasUsableImage && "sm:min-h-0 sm:aspect-[16/9] lg:min-h-0 lg:aspect-[16/9]",
          hasUsableImage && isPortraitVento && "lg:aspect-auto lg:min-h-[68vh] xl:min-h-[72vh]"
        )}
      >
        {hasUsableImage && (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-55 group-hover:opacity-30"
            unoptimized={coverImage.toLowerCase().endsWith('.gif')}
            onError={() => setImageLoadError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/55 to-transparent" />
        <div className="relative z-10 w-full">
          <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-accent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3">
            Case Study
          </span>
          <h2 className="font-headline font-bold tracking-tighter text-foreground transition-all duration-500 group-hover:text-accent text-3xl sm:text-2xl md:text-3xl lg:text-4xl leading-[0.95]">
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h2>
          <div className="mt-4 flex items-center gap-2 text-[9px] font-black tracking-widest text-muted-foreground transition-all duration-500 group-hover:text-foreground">
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
