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
          "group grid h-full w-full min-h-[45vh] grid-rows-[1fr_auto] overflow-hidden border-b-2 border-r-2 border-border bg-card transition-all duration-500",
          tileClassName,
          !hasUsableImage && "sm:min-h-0 sm:aspect-[16/9] lg:min-h-0 lg:aspect-[16/9]",
          hasUsableImage && isPortraitVento && "lg:aspect-auto lg:min-h-[68vh] xl:min-h-[72vh]"
        )}
      >
        <div className="relative min-h-0 bg-muted/30">
          {hasUsableImage && (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
              unoptimized={coverImage.toLowerCase().endsWith('.gif')}
              onError={() => setImageLoadError(true)}
            />
          )}
        </div>

        <div className="w-full border-t-2 border-border bg-background p-4">
          <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-accent">
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

          <div className="mt-3 flex justify-end">
            <ArrowRight className="h-5 w-5 text-accent -rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  )
}
