export const projectPriorityOrder = [
  "parse",
  "override-menu",
  "override-logistics",
  "override-sense",
  "parkspot",
  "atomo-app",
  "spot",
];

export function getProjectPriorityRank(slug: string) {
  const index = projectPriorityOrder.indexOf(slug);
  return index === -1 ? Number.POSITIVE_INFINITY : index;
}

export function isImportantProject(slug: string) {
  return projectPriorityOrder.slice(0, 5).includes(slug);
}
