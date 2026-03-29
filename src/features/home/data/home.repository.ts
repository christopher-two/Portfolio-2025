import { getProjects, getSocialLinks } from "@/features/projects/data/projects.repository";

export function getHomeProjects() {
  return getProjects();
}

export function getHomeSocialLinks() {
  return getSocialLinks();
}
