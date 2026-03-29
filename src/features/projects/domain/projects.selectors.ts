import { type Project } from "@/features/projects/data/projects.repository";
import { getProjectPriorityRank } from "@/features/projects/domain/projects.priority";

const supportNoteBySlug: Record<string, string> = {
  "override-shop": "E-commerce fullstack con enfoque en conversion y operacion diaria.",
  "eikocolors-system": "Suite empresarial para gestion, inventario y reportes tecnicos.",
  "atomo-web": "Servicios digitales premium para negocios gastronomicos y creativos.",
  "charmstar-web": "Landing comercial optimizada para identidad de marca y ventas.",
  "override-web": "Sitio institucional orientado a producto, marca y performance.",
  "cotizador-yazbek": "Cotizador web para acelerar flujo comercial en tiempo real.",
  "squid-games-app": "Juego movil con foco en dinamica rapida y feedback visual.",
  "squid-games-desktop": "Control de escritorio para partidas y configuracion en vivo.",
};

export function sortProjectsByPriority(projectList: Project[]): Project[] {
  return [...projectList].sort((a, b) => {
    const rankDiff = getProjectPriorityRank(a.slug) - getProjectPriorityRank(b.slug);
    if (rankDiff !== 0) return rankDiff;
    return Number(a.id) - Number(b.id);
  });
}

export function getProjectBySlug(projectList: Project[], slug: string): Project | undefined {
  const normalizedSlug = slug.toLowerCase().trim();
  return projectList.find((project) => project.slug.toLowerCase().trim() === normalizedSlug);
}

export function getProjectSupportNote(project: Project): string {
  const custom = supportNoteBySlug[project.slug];
  if (custom) return custom;

  if (project.tags.length > 1) {
    return `Stack clave: ${project.tags.slice(0, 2).join(" + ")}`;
  }

  if (project.categories.length > 0) {
    return `Enfoque: ${project.categories.join(" / ")}`;
  }

  return project.description;
}
