
import { Github, Linkedin, Mail, Instagram, Youtube, Film, Newspaper, Globe, LucideIcon } from "lucide-react";

export type SocialLink = {
  icon: LucideIcon;
  title: string;
  handle: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    title: 'Email',
    handle: 'christopher_two@proton.me',
    href: 'mailto:christopher_two@proton.me',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    handle: 'christopher-alejandro-maldonado-chavez',
    href: 'https://www.linkedin.com/in/christopher-alejandro-maldonado-chavez-8784ba37a/',
  },
  {
    icon: Github,
    title: 'GitHub',
    handle: 'christopher-two',
    href: 'https://github.com/christopher-two',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    handle: '@christopher_two_',
    href: 'https://www.instagram.com/christopher_two_/',
  },
  {
    icon: Youtube,
    title: 'YouTube',
    handle: 'ChristopherTwo',
    href: 'https://www.youtube.com/@ChristopherTwo',
  },
  {
    icon: Film,
    title: 'TikTok',
    handle: '@christopher_two',
    href: 'https://www.tiktok.com/@christopher_two',
  },
  {
    icon: Newspaper,
    title: 'Blog',
    handle: 'blog.christopher.com.mx',
    href: 'https://blog.christopher.com.mx',
  },
  {
    icon: Globe,
    title: 'Override',
    handle: 'override.com.mx',
    href: 'https://www.override.com.mx',
  },
];

export const products = [
  {
    id: "prod-1",
    title: "Override",
    href: "/override",
    bgColor: "bg-black"
  },
  {
    id: "prod-2",
    title: "Lumi",
    href: "/lumi",
    bgColor: "bg-yellow-300"
  },
  {
    id: "prod-3",
    title: "Daelia",
    href: "/daelia",
    bgColor: "bg-blue-800"
  },
  {
    id: "prod-4",
    title: "Lyra",
    href: "/projects/lyra",
    bgColor: "bg-green-800"
  },
  {
    id: "prod-5",
    title: "Override Pass",
    href: "/projects/override-pass",
    bgColor: "bg-red-800"
  },
  {
    id: "prod-6",
    title: "Override Learning",
    href: "/projects/override-learning",
    bgColor: "bg-sky-800",
  },
  {
    id: "prod-7",
    title: "Override Mindstack",
    href: "/projects/override-mindstack",
    bgColor: "bg-purple-800",
  },
  {
    id: "prod-8",
    title: "Override Logistics",
    href: "/projects/override-logistics",
    bgColor: "bg-slate-800",
  },
  {
    id: "prod-9",
    title: "Override News",
    href: "/projects/override-news",
    bgColor: "bg-gray-800",
  },
];


export const projects = [
  {
    id: "1",
    slug: "lyra",
    title: "Lyra",
    description: "Aplicación móvil diseñada para optimizar la interacción entre profesionales de la salud y sus pacientes.",
    longDescription: "Aplicación móvil diseñada para optimizar la interacción entre profesionales de la salud y sus pacientes. Lyra digitaliza los planes de alimentación, eliminando los registros en papel y facilitando un seguimiento continuo y eficaz. La plataforma incorpora herramientas avanzadas, como una IA que asiste a los usuarios en la gestión de su dieta y proporciona recomendaciones personalizadas para mejorar sus hábitos.",
    coverImageId: "lyra-cover",
    galleryImageIds: ["lyra-gallery-1", "lyra-gallery-2", "lyra-gallery-3"],
    link: "https://lyra.com.mx",
    tags: ["Jetpack Compose", "Room", "Datastore", "Koin", "Ktor", "Coil", "Firebase", "Docker", "Google Cloud Functions", "Gemini API", "MVI", "DeepLinks", "Clean Architecture", "Multimodularity", "Layered Model", "Repository Pattern", "Google Authentication"],
  },
  {
    id: "2",
    slug: "override-pass",
    title: "Override Pass",
    description: "Solución de control de accesos para empresas que buscan la máxima seguridad y eficiencia.",
    longDescription: "Solución de control de accesos para empresas que buscan la máxima seguridad y eficiencia. Mediante el uso de códigos QR encriptados con el sistema propietario Stack3, la aplicación centraliza y agiliza la gestión de entradas y salidas. Su diseño permite una implementación rápida en cualquier entorno, sin requerir la compleja infraestructura de los sistemas de acceso tradicionales, garantizando un control robusto y confiable.",
    coverImageId: "quickness-cover",
    galleryImageIds: ["quickness-gallery-1", "quickness-gallery-2", "quickness-gallery-3"],
    link: "https://pass.override.com.mx",
    tags: ["Compose Multiplatform", "Room", "Datastore", "Koin", "Ktor", "Firebase", "Gemini API", "Biometric", "Moko Permissions", "Coil", "MVVM", "Clean Architecture", "Multimodularity", "Layered Model", "Repository Pattern", "DeepLinks", "Wasm"],
  },
  {
    id: "3",
    slug: "override-learning",
    title: "Override Learning",
    description: "Plataforma educativa que utiliza inteligencia artificial para automatizar tareas administrativas y potenciar la labor docente.",
    longDescription: "Plataforma educativa que utiliza inteligencia artificial para automatizar tareas administrativas y potenciar la labor docente. La herramienta permite a los profesores generar y publicar tareas en Google Classroom, monitorear el progreso de los estudiantes y asignar ejercicios de refuerzo basados en el desempeño individual. Al reducir el tiempo dedicado al papeleo, Lerna moderniza el proceso educativo y permite a los educadores centrarse en la enseñanza.",
    coverImageId: "lerna-cover",
    galleryImageIds: ["lerna-gallery-1", "lerna-gallery-2", "lerna-gallery-3"],
    link: "https://learning.override.com.mx",
    tags: ["Compose Multiplatform", "Koin", "Ktor", "Coil", "Firebase", "Classroom API", "Backend (Ktor)", "Docker", "Google Cloud Functions", "Gemini API", "MVI", "Clean Architecture", "Multimodularity", "Layered Model", "Repository Pattern"],
  },
  {
    id: "6",
    slug: "override-mindstack",
    title: "Override Mindstack",
    description: "Organización de un desafiante concurso de programación centrado en la resolución de un único problema de alta complejidad (NP-HARD).",
    longDescription: "Organización de un desafiante concurso de programación centrado en la resolución de un único problema de alta complejidad (NP-HARD). Mis responsabilidades incluyeron el diseño y desarrollo del problema, así como la planificación y ejecución de la logística completa del evento, el cual reunió a más de 30 estudiantes para poner a prueba sus límites en lógica y algoritmia.",
    coverImageId: "mindstack-cover",
    galleryImageIds: ["mindstack-gallery-1", "mindstack-gallery-2", "mindstack-gallery-3"],
    link: "https://mindstack.override.com.mx",
    tags: ["Event Organization", "Problem Design", "Logistics", "Competitive Programming"],
  },
  {
    id: "4",
    slug: "override-logistics",
    title: "Override Logistics",
    description: "Plataforma integral diseñada para optimizar las operaciones de logística en el sector de comercio internacional.",
    longDescription: "Plataforma integral diseñada para optimizar las operaciones de logística en el sector de comercio internacional. A través de una aplicación móvil con interfaces adaptadas a cada etapa del proceso (carga, transporte y asignación), se digitaliza el flujo de trabajo, eliminando el papeleo y minimizando el riesgo de pérdida de documentos. La plataforma, que cuenta con funciones de IA, simplifica las tareas del personal y mejora la eficiencia operativa.",
    coverImageId: "logistics-cover",
    galleryImageIds: ["logistics-gallery-1", "logistics-gallery-2", "logistics-gallery-3"],
    link: "https://override-logistic-web.vercel.app",
    tags: ["Jetpack Compose", "Koin", "Ktor", "Coil", "Firebase", "Google Authentication", "Backend (Ktor)", "Docker", "Supabase", "Gemini API", "MVI", "Clean Architecture", "Multimodularity", "Layered Model", "Repository Pattern"],
  },
  {
    id: "5",
    slug: "override-news",
    title: "Override News",
    description: "Aplicación de noticias que utiliza inteligencia artificial para agilizar el consumo de información.",
    longDescription: "Aplicación de noticias que utiliza inteligencia artificial para agilizar el consumo de información. La plataforma genera resúmenes concisos de cualquier artículo, permitiendo a los usuarios mantenerse informados de manera rápida y eficiente. Su diseño minimalista y una interfaz de usuario simplificada garantizan una experiencia de uso intuitiva y directa.",
    coverImageId: "news-cover",
    galleryImageIds: ["news-gallery-1", "news-gallery-2", "news-gallery-3"],
    link: "https://www.override.com.mx",
    tags: ["Jetpack Compose", "Koin", "Ktor", "Coil", "Firebase", "Google Authentication", "Backend (Ktor)", "Docker", "Supabase", "Gemini API", "MVI", "Clean Architecture", "Multimodularity", "Layered Model", "Repository Pattern"],
  },
];

    