import { Asterisk } from 'lucide-react';

const technologies = [
  { name: 'Compose Multiplatform' },
  { name: 'Kotlin' },
  { name: 'Jetpack Compose' },
  { name: 'Ktor' },
  { name: 'Firebase' },
  { name: 'Google Cloud' },
  { name: 'Supabase' },
  { name: 'Docker' },
];

const MarqueeItem = ({ name }: { name: string }) => (
  <div className="flex items-center gap-4 px-8">
    <span className="text-2xl font-bold tracking-wider">{name}</span>
    <Asterisk className="h-6 w-6 text-accent" />
  </div>
);

export function TechMarquee() {
  const marqueeContent = Array(3).fill(technologies).flat();

  return (
    <section className="border-y-2 border-border bg-background">
      <div className="relative flex w-full overflow-hidden marquee-hover">
        <div className="flex w-max animate-marquee items-center py-4 [--duration:60s]">
          {marqueeContent.map((tech, index) => (
            <MarqueeItem key={index} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
