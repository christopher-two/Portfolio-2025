import { daeliaSections } from "@/features/brand-pages/domain/daelia.sections";
import { lumiSections } from "@/features/brand-pages/domain/lumi.sections";
import { overrideSections } from "@/features/brand-pages/domain/override.sections";
import { parseSections } from "@/features/brand-pages/domain/parse.sections";

export function getOverrideSections() {
  return overrideSections;
}

export function getDaeliaSections() {
  return daeliaSections;
}

export function getLumiSections() {
  return lumiSections;
}

export function getParseSections() {
  return parseSections;
}
