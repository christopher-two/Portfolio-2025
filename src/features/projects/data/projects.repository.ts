import {
  getProjectTechFilters as getProjectTechFiltersFromLib,
  getUnifiedTechFilters as getUnifiedTechFiltersFromLib,
  projects,
  socialLinks,
} from "@/lib/data";

export type Project = (typeof projects)[number];
export type SocialLink = (typeof socialLinks)[number];

export function getProjects(): Project[] {
  return projects;
}

export function getSocialLinks(): SocialLink[] {
  return socialLinks;
}

export const getProjectTechFilters = getProjectTechFiltersFromLib;
export const getUnifiedTechFilters = getUnifiedTechFiltersFromLib;
