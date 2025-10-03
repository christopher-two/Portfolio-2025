import {
  IconKotlin,
  IconReact,
  IconNextjs,
  IconTailwind,
  IconVite,
  IconKtor,
  IconFirebase,
  IconGCP,
  IconSupabase,
  IconDocker,
  IconCompose,
} from './icons';
import { Asterisk } from 'lucide-react';

const technologies = [
  { name: 'Compose Multiplatform', icon: <IconCompose className="h-6 w-6" /> },
  { name: 'Kotlin', icon: <IconKotlin className="h-6 w-6" /> },
  { name: 'Jetpack Compose', icon: <IconCompose className="h-6 w-6" /> },
  { name: 'React', icon: <IconReact className="h-6 w-6" /> },
  { name: 'Next.js', icon: <IconNextjs className="h-6 w-6" /> },
  { name: 'Tailwind CSS', icon: <IconTailwind className="h-6 w-6" /> },
  { name: 'Vite', icon: <IconVite className="h-6 w-6" /> },
  { name: 'Ktor', icon: <IconKtor className="h-6 w-6" /> },
  { name: 'Firebase', icon: <IconFirebase className="h-6 w-6" /> },
  { name: 'Google Cloud', icon: <IconGCP className="h-6 w-6" /> },
  { name: 'Supabase', icon: <IconSupabase className="h-6 w-6" /> },
  { name: 'Docker', icon: <IconDocker className="h-6 w-6" /> },
];

const MarqueeItem = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <div className="flex items-center gap-4 px-6">
    <span className="text-lg font-medium">{name}</span>
    {icon}
  </div>
);

export function TechMarquee() {
  const marqueeContent = Array(2).fill(technologies).flat();

  return (
    <section className="border-y-2 border-border bg-background">
      <div className="relative flex w-full overflow-hidden marquee-hover">
        <div className="flex w-max animate-marquee items-center">
          {marqueeContent.map((tech, index) => (
            <MarqueeItem key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
