
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
    title: "Override Health", // Actualizado de Lyra
    href: "/projects/lyra", // Mantenemos el href interno o puedes cambiarlo a /projects/override-health si cambias la ruta
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
  {
    id: "prod-10",
    title: "Override Shop",
    href: "/projects/override-shop",
    bgColor: "bg-pink-800",
  },
  {
    id: "prod-11",
    title: "Dependency",
    href: "/projects/dependency",
    bgColor: "bg-indigo-600",
  },
  {
    id: "prod-12",
    title: "Cotizador Yazbek",
    href: "/projects/cotizador-yazbek",
    bgColor: "bg-orange-600",
  },
  {
    id: "prod-13",
    title: "EikoColors System",
    href: "/projects/eikocolors-system",
    bgColor: "bg-teal-700",
  },
];


export const projects = [
  {
    id: "1",
    slug: "lyra",
    title: "Override Health", // Actualizado
    description: "Aplicación móvil diseñada para optimizar la interacción entre profesionales de la salud y sus pacientes.",
    longDescription: "Aplicación móvil diseñada para optimizar la interacción entre profesionales de la salud y sus pacientes. Lyra digitaliza los planes de alimentación, eliminando los registros en papel y facilitando un seguimiento continuo y eficaz. La plataforma incorpora herramientas avanzadas, como una IA que asiste a los usuarios en la gestión de su dieta y proporciona recomendaciones personalizadas para mejorar sus hábitos.",
    coverImageId: "lyra-cover",
    galleryImageIds: ["lyra-gallery-1", "lyra-gallery-2", "lyra-gallery-3"],
    link: "https://www.override.com.mx", // Link actualizado
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
    longDescription: "Una plataforma desarrollada para la empresa plasticos del cupatizio aqui la explicacion: Para mitigar estas problemáticas, se propone la migración hacia un ecosistema digital modular y escalable. La solución técnica consiste en una plataforma integral compuesta por cuatro elementos clave: una App Móvil para Conductores, una App Móvil para Almacén, un sistema de visualización TV Almacén (Google TV) y O360 (Suite Logística de Escritorio y App) para la administración central. Todo el ecosistema está potenciado por funcionalidades de Inteligencia Artificial y soportado por una infraestructura en la nube de alta disponibilidad. Este sistema permite la desmaterialización total de la prueba de entrega, la optimización de rutas mediante 'Modo Viaje' y la gestión eficiente de ciclos de carga, asegurando la integridad de la información y la competitividad de la empresa.",
    coverImageId: "logistics-cover",
    galleryImageIds: ["logistics-gallery-1", "logistics-gallery-2", "logistics-gallery-3"],
    link: "https://logistics.override.com.mx", // Actualizado
    tags: ["Jetpack Compose", "Koin", "Ktor", "Coil", "Room", "Datastore", "Firebase", "Google Authentication", "Backend (Ktor)", "Docker", "Supabase", "Gemini API", "MVI", "Clean Architecture", "Multimodularity", "Layered Model", "Repository Pattern", "KMP JVM"], // Actualizado
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
  {
    id: "7",
    slug: "override-shop",
    title: "Override Shop",
    description: "Ecosistema de ventas completo con web, backend y app móvil administrable.",
    longDescription: "Ecosistema de ventas, desarrolle tanto la web, como el backend y la App movil que permite a los administradores controlar el contenido completo de la app, permite ser usada la app y el backend en cualquier otro e comers solo falta cambiar las credenciales y listo, tienes un ecosistema completo para tu ecomers, todo esto impulsado con IA para hacer mas rapido el trabajo del administrador.",
    coverImageId: "shop-cover",
    galleryImageIds: ["shop-gallery-1", "shop-gallery-2"],
    link: "https://shop.override.com.mx",
    tags: ["Jetpack Compose", "Koin", "Ktor", "Coil", "Firebase", "Google Authentication", "Backend (Ktor)", "Docker", "Gemini API", "MVI", "Clean Architecture", "Multimodularity", "Layered Model", "Repository Pattern"],
  },
  {
    id: "8",
    slug: "dependency",
    title: "Dependency",
    description: "Proyecto de código abierto para gestión eficiente de dependencias multiplataforma.",
    longDescription: "Un proyecto de codigo abierto para que los programadores Multiplataforma o de android, tengan la posiblidad de tener las dependencias actualizadas y listas desde el primer momento sin necesidad de buscarlas en ninungun otro lado, salio de la necesidad de eficientar el trabajo.",
    coverImageId: "dependency-cover",
    galleryImageIds: ["dependency-gallery-1"],
    link: "https://dependency.christopher.com.mx",
    tags: ["Vite", "React", "Typescript", "Talwaind", "Vercel"],
  },
  {
    id: "9",
    slug: "cotizador-yazbek",
    title: "Cotizador Yazbek",
    description: "Solución rápida y sencilla para cotizar productos de Yazbek.",
    longDescription: "Desarrollado para la empresa EikoColors, es una solucion rapida y sencilla para cotizar todos los productos de yazbek, rapido y facil, con una interfaz amigable y sencilla.",
    coverImageId: "cotizador-cover",
    galleryImageIds: ["cotizador-gallery-1"],
    link: "https://wasm.christopher.com.mx/cotizador/yazbek",
    tags: ["WasmJs", "KMP", "Koin", "Clean Arquitecture", "MVI", "Github Actions"],
  },
  {
    id: "10",
    slug: "eikocolors-system",
    title: "EikoColors System",
    description: "Ecosistema integral para la gestión administrativa y operativa de EikoColors.",
    longDescription: "Un ecosistema para el control total de la empresa Eikocolors, para gestionar usuarios, gestion de trabajos, de proyectos y de finanzas, resulto muy beneficioso para la empresa.",
    coverImageId: "eiko-cover",
    galleryImageIds: ["eiko-gallery-1"],
    link: "", // No se proporcionó link específico en la descripción
    tags: ["Kmp JVM", "Koin", "Firebase", "Coil", "Room", "Datastore"],
  },
  {
    id: "11",
    slug: "daelia",
    title: "Daelia Experiments",
    description: "Serie de productos experimentales y pruebas de nuevas tecnologías.",
    longDescription: "Es una serie de productos pequeños y algunos experimentos, Daelia se enfoca en probar y desarrollar nuevas tecnologias como: \n- Daelia Social: Hecho para dar explicaciones sobre como se conforma una red social.\n- Daelia Camera Color Detector: Desarrollado para comprobar como funcionan los detectores de la camara.\n- Daelia Weather: Un reloj minimalista que muestra la hora y el clima.",
    coverImageId: "daelia-cover",
    galleryImageIds: ["daelia-gallery-1"],
    link: "/daelia",
    tags: ["Firebase", "Google Auth", "Jetpack Compose", "Koin", "MVI", "WasmJs KMP", "OpenWather Api", "Ktor"],
  },
  {
    id: "12",
    slug: "lumi",
    title: "Lumi (Daelia)",
    description: "Generador de códigos QR impulsado con IA.",
    longDescription: "Un generador de codigos QR impulsado con IA, capaz de recibir una instruccion simple y generar un qr, facil rapido y sencillo. Parte de la serie Daelia.",
    coverImageId: "lumi-cover",
    galleryImageIds: ["lumi-gallery-1"],
    link: "/lumi",
    tags: ["Jetpack Compose", "Koin", "MVI", "Firebase AI", "Google Auth"],
  },
  {
    id: "test-x",
    slug: "x",
    title: "Project X",
    description: "Proyecto de prueba para verificar el enrutamiento.",
    longDescription: "Este es un proyecto de prueba creado para verificar que las nuevas páginas funcionan correctamente cuando se agregan a la base de datos.",
    coverImageId: "lyra-cover",
    galleryImageIds: [],
    link: "",
    tags: ["Test", "Debug"],
  },
];