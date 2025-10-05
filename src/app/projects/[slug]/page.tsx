
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { ProjectDetailClient } from '@/components/ProjectDetailClient';


// This is now a Server Component. It fetches data and passes it to the client component.
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }
  
  const galleryImages: (ImagePlaceholder | undefined)[] = project.galleryImageIds.map(id => PlaceHolderImages.find(p => p.id === id));
  const validImages = galleryImages.filter((img): img is ImagePlaceholder => !!img);


  return <ProjectDetailClient project={project} galleryImages={validImages} />;
}

// generateStaticParams must be in a Server Component.
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
