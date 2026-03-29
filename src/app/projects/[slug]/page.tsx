import ProjectDetailPage, {
  generateStaticParams as generateFeatureStaticParams,
} from "@/features/projects/presentation/pages/ProjectDetailPage";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

export async function generateStaticParams() {
  return generateFeatureStaticParams();
}

export default ProjectDetailPage;
