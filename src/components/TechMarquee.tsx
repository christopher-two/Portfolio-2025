import { Asterisk } from 'lucide-react';

const primaryTechnologies = [
  { name: 'Kotlin Multiplatform', badge: 'Core' },
  { name: 'Compose Multiplatform', badge: 'Core' },
  { name: 'Jetpack Compose', badge: 'Core' },
  { name: 'Koin', badge: 'Core' },
  { name: 'Ktor', badge: 'Core' },
  { name: 'Room', badge: 'Core' },
  { name: 'Firebase', badge: 'Core' },
  { name: 'Supabase', badge: 'Core' },
];

const emergingTechnologies = [
  { name: 'Navigation 3', badge: 'Nuevo' },
  { name: 'ML Kit', badge: 'Nuevo' },
  { name: 'TensorFlow Lite', badge: 'Nuevo' },
  { name: 'Wasm', badge: 'Nuevo' },
  { name: 'Next.js 15', badge: 'Nuevo' },
  { name: 'Astro', badge: 'Nuevo' },
  { name: 'Cloudflare Pages', badge: 'Nuevo' },
  { name: 'Tailwind CSS v4', badge: 'Nuevo' },
];

const MarqueeItem = ({ name, badge }: { name: string; badge: string }) => (
  <div className="flex items-center gap-4 px-8">
    <span className="text-2xl font-bold tracking-wider">{name}</span>
    <span className="border border-border/60 bg-muted px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
      {badge}
    </span>
    <Asterisk className="h-6 w-6 text-accent" />
  </div>
);

export function TechMarquee() {
  const firstRow = Array(2).fill(primaryTechnologies).flat();
  const secondRow = Array(2).fill(emergingTechnologies).flat();

  return (
    <section className="border-y-2 border-border bg-background">
      <div className="relative flex w-full flex-col overflow-hidden marquee-hover">
        <div className="flex w-max animate-marquee items-center py-4 [--duration:52s]">
          {firstRow.map((tech, index) => (
            <MarqueeItem key={`core-${index}`} name={tech.name} badge={tech.badge} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-reverse items-center border-t-2 border-border py-4 [--duration:46s]">
          {secondRow.map((tech, index) => (
            <MarqueeItem key={`new-${index}`} name={tech.name} badge={tech.badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
