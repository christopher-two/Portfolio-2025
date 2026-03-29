import fs from "fs";
import path from "path";
import { getSpotDocument, type SpotDocumentKey } from "@/features/spot/domain/spot-documents";

export function readSpotDocumentContent(key: SpotDocumentKey): string {
  const document = getSpotDocument(key);
  const absolutePath = path.join(process.cwd(), document.relativePath);
  return fs.readFileSync(absolutePath, "utf8");
}
