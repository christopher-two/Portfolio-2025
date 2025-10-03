import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrlId: string;
  link: string;
  tags: string[];
}

export function ProjectCard({ title, description, imageUrlId, link, tags }: ProjectCardProps) {
  const placeholder: ImagePlaceholder | undefined = PlaceHolderImages.find(p => p.id === imageUrlId);

  return (
    <Card className="group overflow-hidden border-2 border-transparent hover:border-accent transition-colors duration-300 h-full flex flex-col">
      <CardHeader className="p-0">
        {placeholder && (
          <div className="relative h-48 w-full">
            <Image
              src={placeholder.imageUrl}
              alt={placeholder.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={placeholder.imageHint}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 space-y-3 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <CardTitle as="h3" className="text-lg font-headline font-bold">{title}</CardTitle>
          <Link href={link} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-4">
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="sr-only">Visit project</span>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="border-2 border-border">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
