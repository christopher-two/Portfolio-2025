
"use client";
import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type CarouselApi } from "@/components/ui/carousel";

type CarouselControlsProps = {
  api: CarouselApi;
  className?: string;
};

export function CarouselControls({ api, className }: CarouselControlsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <button
        onClick={() => api?.scrollPrev()}
        className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-border bg-background shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <div className="flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => api.scrollTo(index)}
            className={cn(
              "h-3 w-3 rounded-sm border-2 border-border bg-background transition-all duration-300",
              index === selectedIndex ? "shadow-[2px_2px_0px_theme(colors.border)] scale-110" : "shadow-[1px_1px_0px_theme(colors.border)]",
               "hover:shadow-[2px_2px_0px_theme(colors.border)] hover:scale-110"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => api?.scrollNext()}
        className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-border bg-background shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
}
