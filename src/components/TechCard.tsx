import { type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  skills: string;
  description: string;
  bgColor?: string;
}

export function TechCard({ icon: Icon, title, skills, description, bgColor }: TechCardProps) {
  return (
    <div className={cn("p-8 md:p-12 h-full flex flex-col transition-colors", bgColor)}>
      <div className="flex items-center gap-4 mb-4">
        <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
        <h3 className="text-xl md:text-2xl lg:text-3xl font-headline font-bold">{title}</h3>
      </div>
      <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.split(',').map((skill) => (
          <Badge key={skill.trim()} variant="secondary" className="border-2 border-border bg-black/10 hover:bg-black/20 text-xs md:text-sm">
            {skill.trim()}
          </Badge>
        ))}
      </div>
    </div>
  );
}
