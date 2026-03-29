import { Code, Cpu, Smartphone, type LucideIcon } from "lucide-react";

export const parsePlayStoreUrl =
  "https://play.google.com/store/apps/details?id=org.christophertwo.parse&pcampaignid=web_share";

export const homeDesktopProjectsLimit = 8;
export const homeMobileProjectsLimit = 8;

const homeDesktopFeaturedTiles: Record<string, string> = {
  parse: "col-span-2 row-span-2",
  "override-menu": "col-span-2",
  "override-logistics": "row-span-2",
  "override-sense": "col-span-2",
  parkspot: "col-span-2",
};

const homeDesktopVentoPattern = [
  "col-span-2",
  "",
  "col-span-2",
  "",
  "col-span-2",
  "",
  "",
  "col-span-2",
  "",
  "",
];

const homeMobileFeaturedTiles: Record<string, string> = {
  parse: "col-span-2 row-span-2",
  "override-menu": "col-span-2",
  "override-logistics": "row-span-2",
  "override-sense": "col-span-2",
  parkspot: "col-span-2",
};

const homeMobileVentoPattern = ["", "col-span-2", "", "", "col-span-2", "", "", "col-span-2"];

export function getDesktopVentoClass(slug: string, index: number) {
  return homeDesktopFeaturedTiles[slug] ?? homeDesktopVentoPattern[index % homeDesktopVentoPattern.length];
}

export function getMobileVentoClass(slug: string, index: number) {
  return homeMobileFeaturedTiles[slug] ?? homeMobileVentoPattern[index % homeMobileVentoPattern.length];
}

export type HomeTechSkill = {
  icon: LucideIcon;
  title: string;
  skills: string;
  description: string;
  bgColor: string;
};

export const homeTechSkills: HomeTechSkill[] = [
  {
    icon: Code,
    title: "Multiplataforma Productiva",
    skills: "Kotlin Multiplatform, Compose Multiplatform, Jetpack Compose, Navigation 3",
    description:
      "Diseno y desarrollo productos compartidos para Android, iOS, Desktop y Web con una sola base de codigo, priorizando velocidad de entrega, estabilidad y una UX consistente en cada release.",
    bgColor: "bg-skill-1 dark:bg-skill-1-dark",
  },
  {
    icon: Smartphone,
    title: "Android + IA Aplicada",
    skills: "ML Kit, TensorFlow Lite, Material 3, WorkManager, Room",
    description:
      "Construyo apps Android enfocadas en casos reales, integrando IA on-device, traduccion inteligente y experiencias offline-first como Parse y Override Sense.",
    bgColor: "bg-skill-2 dark:bg-skill-2-dark",
  },
  {
    icon: Cpu,
    title: "Backend y Entrega Continua",
    skills: "Ktor, Koin, Firebase, Supabase, Cloudflare Pages, Docker",
    description:
      "Arquitecturas limpias con servicios escalables, autenticacion robusta y despliegues continuos para productos web y moviles con foco en rendimiento y mantenibilidad.",
    bgColor: "bg-skill-4 dark:bg-skill-4-dark",
  },
];

export type HomeRecognition = {
  title: string;
  issuer: string;
  description: string;
};

export const homeRecognitions: HomeRecognition[] = [
  {
    title: "1er Lugar",
    issuer: "Innovatec Nacional 2025",
    description: 'Ganador en la categoria de "Salud", con el proyecto Lyra.',
  },
  {
    title: "1er Lugar",
    issuer: "Innovatec Nacional 2025",
    description: 'Ganador en la categoria de "Tecnologia", con el proyecto Lerna.',
  },
  {
    title: "Lanzamiento Publico",
    issuer: "Google Play Store 2026",
    description: "Publicacion oficial de Parse para usuarios Android con distribucion abierta.",
  },
  {
    title: "Ganador",
    issuer: "Concurso Interno de Innovacion",
    description:
      "Instituto Tecnologico Superior de Uruapan (TecNM) - Edicion 2024. Con el proyecto de Lyra.",
  },
  {
    title: "Ganador",
    issuer: "Concurso Interno de Innovacion",
    description:
      "Instituto Tecnologico Superior de Uruapan (TecNM) - Edicion 2023. Con el proyecto Quickness.",
  },
  {
    title: "Participante Destacado",
    issuer: "Coding Cup Mexico",
    description: "Edicion 2021",
  },
  {
    title: "Participante Destacado",
    issuer: "Coding Cup Mexico",
    description: "Edicion 2025",
  },
];
