import { type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  skills: string;
  description: string;
}

export function TechCard({ icon: Icon, title, skills, description }: TechCardProps) {
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="h-8 w-8 text-primary" />
        <h3 className="text-xl font-headline font-bold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.split(',').map((skill) => (
          <Badge key={skill.trim()} variant="secondary" className="border-2 border-border">
            {skill.trim()}
          </Badge>
        ))}
      </div>
    </div>
  );
}