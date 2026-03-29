import { readSpotDocumentContent } from "@/features/spot/data/spot-content.repository";
import { getSpotDocument, type SpotDocumentKey } from "@/features/spot/domain/spot-documents";
import { SpotInfoPage } from "@/features/spot/presentation/components/SpotInfoPage";

type SpotDocumentPageProps = {
  documentKey: SpotDocumentKey;
};

export async function SpotDocumentPage({ documentKey }: SpotDocumentPageProps) {
  const document = getSpotDocument(documentKey);
  const content = readSpotDocumentContent(documentKey);

  return (
    <SpotInfoPage
      title={document.title}
      subtitle={document.subtitle}
      content={content}
      backHref="/spot"
    />
  );
}
