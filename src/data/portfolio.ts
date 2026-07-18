export {
  getProjectTechFilters,
  getUnifiedTechFilters,
  products,
  projects,
  socialLinks,
  TECH_CATEGORIES,
} from '../lib/data';

import { projects } from '../lib/data';

export type Project = (typeof import('../lib/data').projects)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = [
  'parse',
  'override-menu',
  'override-logistics',
  'override-sense',
  'parkspot',
].map((slug) => getProject(slug)).filter(Boolean) as Project[];

export const skills = [
  {
    index: '01',
    title: 'Multiplataforma productiva',
    stack: 'Kotlin Multiplatform / Compose / Android / Web',
    copy: 'Diseño productos compartidos para Android, iOS, Desktop y Web con una base de código que no sacrifica la experiencia.',
    tone: 'violet',
  },
  {
    index: '02',
    title: 'Android + IA aplicada',
    stack: 'ML Kit / TensorFlow Lite / Room / Material 3',
    copy: 'Construyo herramientas móviles para problemas reales, desde lectura inteligente hasta accesibilidad on-device.',
    tone: 'pink',
  },
  {
    index: '03',
    title: 'Backend y entrega',
    stack: 'Ktor / Firebase / Supabase / Cloudflare',
    copy: 'Arquitecturas mantenibles, servicios escalables y despliegues que convierten una idea en un producto lanzable.',
    tone: 'acid',
  },
];

export const recognitions = [
  ['01', '1er lugar', 'Innovatec Nacional 2025', 'Ganador en Salud con Lyra y en Tecnología con Lerna.'],
  ['02', 'Lanzamiento', 'Google Play Store 2026', 'Parse publicado para usuarios Android con distribución abierta.'],
  ['03', 'Ganador', 'TecNM · Innovación 2024', 'Reconocimiento interno por el proyecto Lyra.'],
  ['04', 'Participante destacado', 'Coding Cup México', 'Participación en las ediciones 2021 y 2025.'],
];
