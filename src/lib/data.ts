
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
  { id: "prod-1", title: "Override Shop", href: "/projects/override-shop", bgColor: "bg-pink-800" },
  { id: "prod-2", title: "EikoColors System", href: "/projects/eikocolors-system", bgColor: "bg-teal-700" },
  { id: "prod-3", title: "Cotizador Yazbek", href: "/projects/cotizador-yazbek", bgColor: "bg-orange-600" },
  { id: "prod-4", title: "Spot", href: "/projects/spot", bgColor: "bg-blue-600" },
  { id: "prod-5", title: "Atomo Web", href: "/projects/atomo-web", bgColor: "bg-purple-900" },
  { id: "prod-6", title: "Atomo App", href: "/projects/atomo-app", bgColor: "bg-indigo-900" },
  { id: "prod-7", title: "Override Web", href: "/projects/override-web", bgColor: "bg-zinc-900" },
  { id: "prod-8", title: "Override Logistics", href: "/projects/override-logistics", bgColor: "bg-slate-900" },
  { id: "prod-9", title: "EikoColors Web", href: "/projects/eikocolors-web", bgColor: "bg-emerald-900" },
  { id: "prod-10", title: "Charmstar Web", href: "/projects/charmstar-web", bgColor: "bg-rose-900" },
  { id: "prod-11", title: "Dependency", href: "/projects/dependency", bgColor: "bg-cyan-800" },
  { id: "prod-12", title: "Colors RGB", href: "/projects/colors", bgColor: "bg-gradient-to-br from-red-500 via-green-500 to-blue-500" },
  { id: "prod-13", title: "Web Experiments", href: "/projects/webs", bgColor: "bg-indigo-600" },
  { id: "prod-14", title: "MindStack", href: "/projects/mindstack", bgColor: "bg-zinc-950" },
  { id: "prod-15", title: "Lerna", href: "/projects/lerna", bgColor: "bg-stone-900" },
];

export const TECH_CATEGORIES = {
  WEB: "Web",
  ANDROID: "Jetpack Compose",
  KMP: "Kotlin Multiplatform",
  AI: "IA",
} as const;

export const projects = [
  {
    id: "1",
    slug: "override-shop",
    title: "Override Shop",
    description: "Plataforma de comercio electrónico completa con panel de administración y aplicaciones web y móviles.",
    longDescription: `Override Shop es una plataforma de **comercio electrónico completa** que incluye tienda web, backend escalable y aplicación móvil. 

### Características Principales

- **Gestión Centralizada:** Control total sobre productos, categorías, inventarios y pedidos.
- **Arquitectura Reutilizable:** Diseñada para ser escalable y adaptable a diferentes tipos de comercio.
- **Inteligencia Artificial:** Incorpora herramientas basadas en IA para automatizar tareas administrativas.
- **Experiencia Multiplataforma:** Aplicaciones nativas optimizadas para ofrecer la mejor experiencia al cliente.

El sistema permite a los administradores gestionar promociones y configuraciones cambiando únicamente credenciales, lo que lo convierte en una solución robusta y flexible para el mercado actual.`,
    r2Folder: "OverrideShop",
    link: "https://shop.override.com.mx",
    categories: [TECH_CATEGORIES.WEB, TECH_CATEGORIES.ANDROID],
    tags: ["Android", "Jetpack Compose", "Room", "Koin", "Ktor", "Firebase"],
  },
  {
    id: "2",
    slug: "eikocolors-system",
    title: "EikoColors System",
    description: "Ecosistema integral para la gestión administrativa y operativa de EikoColors.",
    longDescription: `**Eikocolors System** es un sistema de gestión empresarial de alto rendimiento diseñado para optimizar la operativa diaria.

### Capacidades del Sistema

- ✅ **Gestión de Clientes:** Seguimiento detallado de clientes y sus respectivos trabajos.
- ✅ **Administración de Catálogos:** Control total sobre los productos y stock.
- ✅ **Logística e Inventario:** Gestión eficiente de distribuidores y movimientos de almacén.
- ✅ **Generación de Reportes:** Creación automática de cotizaciones y reportes técnicos en formato PDF.
- ✅ **Sincronización Híbrida:** Trabajo offline con base de datos local (**Room**) y sincronización en la nube con **Supabase**.

Desarrollado bajo una arquitectura multimodular siguiendo patrones de **Clean Architecture** y **MVI**, garantizando un mantenimiento sencillo y una escalabilidad sólida.`,
    r2Folder: "EikoColorsSystem",
    link: "https://eikocolors.atomo.click", 
    categories: [TECH_CATEGORIES.KMP, TECH_CATEGORIES.ANDROID],
    tags: ["Kmp JVM", "Supabase", "Room", "MVI", "Clean Architecture"],
  },
  {
    id: "3",
    slug: "cotizador-yazbek",
    title: "Cotizador Yazbek",
    description: "Solución rápida y sencilla para cotizar productos de Yazbek.",
    longDescription: `**Cotizador Yazbek** es una herramienta web de alta eficiencia desarrollada para facilitar el proceso de ventas de productos textiles.

### Características del Cotizador

- ⚡ **Cotización Instantánea:** Cálculo automático de precios basado en volumen y personalización.
- 🎨 **Interfaz Intuitiva:** Experiencia de usuario optimizada para que los vendedores generen presupuestos en segundos.
- 📱 **Multiplataforma:** Accesible desde cualquier navegador gracias a su arquitectura moderna.
- 🏗️ **Arquitectura Robusta:** Construido con **Kotlin Multiplatform (WasmJs)** y siguiendo patrones de arquitectura limpia.

Diseñado específicamente para el ecosistema de **EikoColors**, integrándose perfectamente en su flujo de trabajo diario para agilizar la atención al cliente.`,
    r2Folder: "CotizadorYazbek",
    link: "https://wasm.christopher.com.mx/cotizador/yazbek",
    categories: [TECH_CATEGORIES.KMP, TECH_CATEGORIES.WEB],
    tags: ["WasmJs", "KMP", "Compose Multiplatform", "Clean Architecture"],
  },
  {
    id: "4",
    slug: "spot",
    title: "Spot",
    description: "Aplicación de geocaching emocional para crear cápsulas del tiempo visuales georreferenciadas.",
    longDescription: `**Spot** es una aplicación móvil innovadora de **geocaching emocional** que transforma coordenadas GPS en experiencias visuales y significativas.

### Concepto y Propósito

Los usuarios pueden crear "spots" (puntos de interés georreferenciados) con fotografías, títulos y descripciones que solo se revelan cuando otros usuarios se encuentran físicamente dentro de un radio de 30 metros. Es una mezcla única entre **red social, geocaching y realidad aumentada**.

### Características Técnicas

- 🗺️ **Mapa Interactivo 3D:** Visualización avanzada con **Mapbox SDK** con inclinación de 60° y zoom dinámico.
- 📸 **Cápsulas del Tiempo:** Creación de spots públicos o privados con hasta 10 imágenes y metadatos detallados.
- 👥 **Ecosistema Social:** Sistema de amigos, búsqueda de usuarios y perfiles personalizados.
- 🎨 **Personalización Material You:** Temas dinámicos que se adaptan al sistema y esquemas de color personalizados.
- 🔐 **Seguridad Avanzada:** Autenticación con Google (Firebase) y protección biométrica opcional.
- 📴 **Offline-First:** Sincronización inteligente y funcionamiento sin conexión gracias a **Room**.

Desarrollada con **Kotlin 2.3.0** y **Jetpack Compose**, siguiendo principios de **Clean Architecture** y patrones **MVI** para un estado de UI predecible y robusto.`,
    r2Folder: "Spot",
    link: "https://github.com/christophertwo/spot",
    categories: [TECH_CATEGORIES.ANDROID],
    tags: ["Android", "Mapbox SDK", "Clean Architecture", "MVI", "Firebase"],
  },
  {
    id: "5",
    slug: "atomo-web",
    title: "Atomo Digital Services",
    description: "Plataforma de servicios digitales premium para negocios gastronómicos y creativos.",
    longDescription: `**Atomo** es un ecosistema digital de vanguardia diseñado para ofrecer experiencias elegantes y altamente personalizables para restaurantes, negocios gastronómicos y perfiles profesionales.

### Ecosistema de Servicios

- 🍽️ **Digital Menu:** Cartas interactivas y dinámicas para restaurantes.
- 🎨 **Portfolio:** Galerías visuales sofisticadas para creativos.
- 🛍️ **Shop:** Tiendas minimalistas con gestión de categorías.
- 📄 **Digital CV:** Hojas de vida profesionales de alto impacto.
- ✉️ **Invitations:** Sistema de invitaciones digitales con RSVP integrado.

### Innovación Tecnológica

- ⚡ **Astro v5:** Generación estática y dinámica ultrarrápida (SSR).
- 🚀 **Incremental Static Regeneration (ISR):** Caché inteligente en el borde mediante **Cloudflare Global Network**.
- 🎨 **Tailwind CSS v4:** Estilizado moderno y eficiente con tokens de diseño personalizados.
- 🔐 **Supabase Backend:** Gestión robusta de base de datos, autenticación y tiempo real.
- 🌐 **Cloudflare Infrastructure:** Despliegue en **Cloudflare Pages** para máxima disponibilidad global.

### Experiencia Premium

La plataforma cuenta con múltiples plantillas (**Minimalist, Elegance, Modern, Luxury, Cyber**) que permiten a cada negocio adaptar la identidad visual de forma precisa, garantizando una presencia digital de alta gama.`,
    r2Folder: "Atomo/web",
    link: "https://atomo.click",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["Astro v5", "Tailwind CSS v4", "Supabase", "Cloudflare Pages"],
  },
  {
    id: "6",
    slug: "atomo-app",
    title: "Atomo App",
    description: "Aplicación Android nativa para la gestión integral de servicios digitales y presencia profesional.",
    longDescription: `**Atomo App** es la extensión móvil nativa del ecosistema Atomo, diseñada para ofrecer una gestión potente y fluida de servicios digitales directamente desde el dispositivo Android.

### Gestión Integral de Servicios

La aplicación permite administrar de forma centralizada todo el ecosistema de Atomo:
- 🍽️ **Menús Digitales:** Edición de platos, precios y disponibilidad en tiempo real.
- 🎨 **Portafolios:** Carga de proyectos y actualización de galerías visuales.
- 🛍️ **Tiendas:** Control de inventario y visualización de productos.
- 📄 **CVs e Invitaciones:** Personalización rápida de perfiles profesionales y eventos.

### Excelencia Técnica (Android Nativo)

- 🎨 **Jetpack Compose & Material 3:** Interfaz de usuario moderna con soporte para **temas dinámicos** y navegación adaptativa.
- 🏗️ **Clean Architecture:** Estructura modular robusta que separa la lógica de negocio, datos y presentación.
- 📴 **Offline-First con Room:** Capacidad completa de trabajo sin conexión con sincronización inteligente mediante **WorkManager**.
- 🔐 **Supabase Integration:** Autenticación segura (Google ID), base de datos en tiempo real y almacenamiento escalable.
- 🚀 **Kotlin Coroutines & Flow:** Programación asíncrona y reactiva para una experiencia de usuario fluida y sin bloqueos.
- 🛡️ **Seguridad Biométrica:** Protección adicional de datos sensibles mediante huella digital o reconocimiento facial.

### Sincronización Inteligente

Gracias a una arquitectura basada en **Workers**, la aplicación garantiza que cualquier cambio realizado offline se sincronice automáticamente con la nube una vez que se recupera la conexión, manteniendo la integridad de los datos en todo momento.`,
    r2Folder: "Atomo/app",
    link: "https://atomo.click",
    categories: [TECH_CATEGORIES.ANDROID],
    tags: ["Android Native", "Kotlin", "Jetpack Compose", "Room", "WorkManager"],
  },
  {
    id: "7",
    slug: "override-web",
    title: "Override Official Web",
    description: "Sitio web oficial de la marca Override, enfocado en servicios de software de alto rendimiento.",
    longDescription: `**Override Web** es la plataforma central de la marca, diseñada para proyectar una imagen tecnológica, profesional y de alto impacto. El sitio actúa como el hub principal para los servicios de desarrollo de software y soluciones digitales de la compañía.

### Excelencia Técnica

- ⚡ **React + Vite:** Rendimiento optimizado con tiempos de carga instantáneos.
- 🎨 **Tailwind CSS:** Diseño neobrutalista moderno con tipografías técnicas y acentos de color vibrantes.
- 🌐 **Vercel Deployment:** Infraestructura de alta disponibilidad y despliegue continuo.
- 📱 **Responsive Design:** Adaptación fluida para ofrecer una experiencia premium en cualquier dispositivo.

### Propósito del Proyecto

El sitio busca centralizar la identidad de Override, permitiendo a los clientes potenciales explorar el portafolio de servicios, contactar directamente con el equipo y conocer la visión tecnológica de la marca.`,
    r2Folder: "Override/Web",
    link: "https://www.override.com.mx",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["React", "Vite", "Tailwind CSS", "Vercel"],
  },
  {
    id: "8",
    slug: "override-logistics",
    title: "Override Logistics",
    description: "Ecosistema digital modular diseñado para la optimización de operaciones logísticas internacionales.",
    longDescription: `**Override Logistics** es una solución integral de alto rendimiento diseñada para mitigar problemáticas operativas mediante la digitalización y automatización de procesos logísticos.

### Ecosistema Modular

La plataforma se compone de cuatro pilares fundamentales:
- 🚛 **App para Conductores:** Gestión de rutas, carga y prueba de entrega digital.
- 📦 **App para Almacén:** Control de inventarios y ciclos de carga en tiempo real.
- 📺 **TV Dashboard:** Visualización de estado de almacén optimizada para Google TV.
- 🖥️ **O360 Suite:** Panel de administración central para la gestión de toda la operación.

### Innovación y Tecnología

- 🤖 **Inteligencia Artificial:** Funcionalidades avanzadas para la optimización de rutas y gestión eficiente.
- 🏗️ **Clean Architecture:** Estructura multimodular basada en **Jetpack Compose** y **Kotlin Multiplatform (KMP)**.
- 🔐 **Seguridad:** Autenticación robusta y sincronización en tiempo real mediante **Supabase** y **Firebase**.

Esta plataforma permite la desmaterialización total de procesos físicos, asegurando la competitividad y eficiencia en el sector de comercio internacional.`,
    r2Folder: "Override/Logistics",
    link: "https://logistics.override.com.mx",
    categories: [TECH_CATEGORIES.KMP, TECH_CATEGORIES.ANDROID],
    tags: ["KMP", "Jetpack Compose", "Supabase", "Firebase", "Google TV"],
  },
  {
    id: "9",
    slug: "eikocolors-web",
    title: "EikoColors Official E-commerce",
    description: "Tienda en línea minimalista y moderna para la venta de productos personalizados de EikoColors.",
    longDescription: `**EikoColors Web** es la plataforma de comercio electrónico definitiva de la marca, diseñada para ofrecer una experiencia de compra fluida, visual y altamente eficiente para productos personalizados.

### Experiencia de Compra Premium

La plataforma combina presencia corporativa con capacidades de venta directa:
- 🛒 **Gestión de Carrito:** Sistema dinámico y reactivo para una compra sin fricciones.
- 📦 **Catálogo Inteligente:** Organización de productos por categorías y colecciones exclusivas (Decor, Life Style).
- 📱 **Diseño Ultra-Responsivo:** Optimizada para dispositivos móviles y escritorio con una estética neobrutalista limpia.
- 🎨 **Interfaz Moderna:** Uso de **Framer Motion** para animaciones fluidas y **Tailwind CSS v4** para un estilo vanguardista.

### Potencia Tecnológica

- ⚡ **Next.js 15:** Rendimiento excepcional aprovechando las últimas capacidades del framework.
- 🔥 **Firebase Integration:** Gestión de datos de productos y autenticación en tiempo real mediante Firestore.
- 🛠️ **Arquitectura Robusta:** Código modular y escalable construido con **TypeScript**.
- 🚀 **Rendimiento Optimizado:** Tiempos de respuesta mínimos y carga de imágenes eficiente desde R2.

Este proyecto representa la madurez digital de EikoColors, integrando toda su oferta comercial en una única experiencia web de alto rendimiento.`,
    r2Folder: "EikoColorsSystem/web",
    link: "https://eikocolors.atomo.click",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["Next.js 15", "React 19", "Firebase", "Tailwind CSS v4"],
  },
  {
    id: "10",
    slug: "charmstar-web",
    title: "Charmstar E-commerce",
    description: "Tienda en línea especializada en la venta de charms y accesorios personalizados con una experiencia visual premium.",
    longDescription: `**Charmstar** es una plataforma de comercio electrónico de alta gama diseñada específicamente para el mercado de joyería y accesorios personalizados. La web ofrece una experiencia de usuario inmersiva, destacando el detalle y la calidad de cada producto.

### Experiencia de Usuario & Ventas

- 🛒 **E-commerce Fluido:** Proceso de compra optimizado desde la selección hasta el checkout.
- ✨ **Visualización de Charms:** Presentación detallada de productos con galerías de alta resolución.
- 📱 **Mobile First:** Diseño totalmente adaptado para compras rápidas desde dispositivos móviles.
- 🎨 **Estética Premium:** Interfaz elegante que resalta la exclusividad de los accesorios.

### Especificaciones Técnicas

- ⚡ **Next.js 15 + React 19:** El stack más moderno para garantizar velocidad y SEO.
- 🔥 **Firebase:** Gestión integral de base de datos, stock y autenticación de usuarios.
- 🎨 **Tailwind CSS v4:** Estilizado de última generación con animaciones suaves mediante **Framer Motion**.
- 🛠️ **Despliegue Profesional:** Infraestructura escalable para soportar picos de tráfico.

Charmstar representa la combinación perfecta entre diseño estético y funcionalidad técnica, ofreciendo una solución de e-commerce robusta para el nicho de accesorios de lujo.`,
    r2Folder: "Charmstar",
    link: "https://charmstar.atomo.click",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["Next.js 15", "React 19", "Firebase", "Tailwind CSS v4"],
  },
  {
    id: "11",
    slug: "dependency",
    title: "Dependency Hub",
    description: "Catálogo centralizado de dependencias para Android y Kotlin Multiplatform (KMP).",
    longDescription: `**Dependency Hub** es una solución diseñada para optimizar el flujo de trabajo de desarrolladores Android y KMP, eliminando la necesidad de buscar dependencias en múltiples repositorios externos.

### Eficiencia en el Desarrollo

- 📦 **Catálogo Unificado:** Repositorio central con las dependencias más utilizadas y actualizadas del ecosistema.
- ⚡ **Acceso Rápido:** Copia y pega configuraciones de Gradle instantáneamente.
- 🏗️ **KMP Ready:** Enfocado en facilitar la configuración de proyectos multiplataforma.
- 🛠️ **Curaduría Técnica:** Selección de librerías verificadas por la comunidad y expertos.

Este proyecto nació de la necesidad de eficientar la fase inicial de configuración de software, permitiendo a los programadores centrarse en la lógica de negocio desde el primer minuto.`,
    r2Folder: "Dependency",
    link: "https://dependency.christopher.com.mx",
    categories: [TECH_CATEGORIES.WEB, TECH_CATEGORIES.KMP],
    tags: ["React", "TypeScript", "Tailwind CSS", "Gradle", "KMP"],
  },
  {
    id: "12",
    slug: "colors",
    title: "Colors RGB Guess",
    description: "Juego de adivinanza de colores desarrollado con Compose Multiplatform.",
    longDescription: `**Colors RGB Guess** es un mini juego interactivo que desafía a los usuarios a recrear un color aleatorio ajustando sus componentes RGB.

### Características del Juego

- 🎲 **Desafío Aleatorio:** Generación dinámica de colores objetivo.
- 🎨 **Interfaz Adaptativa:** Los elementos visuales cambian según el color actual para mantener la legibilidad.
- 📊 **Feedback de Precisión:** Muestra un porcentaje de coincidencia exacto tras cada intento.
- 🏗️ **Compose Multiplatform:** Ejecución nativa en Android, Desktop y Web (WasmJs).

Construido con una arquitectura **MVI** sólida para una gestión de estado predecible y reactiva.`,
    r2Folder: "colors",
    link: "https://wasm.christopher.com.mx/colors",
    categories: [TECH_CATEGORIES.KMP, TECH_CATEGORIES.ANDROID, TECH_CATEGORIES.WEB],
    tags: ["Compose Multiplatform", "Kotlin", "WasmJs", "Android", "MVI"],
  },
  {
    id: "13",
    slug: "webs",
    title: "Web Experiments & Prototypes",
    description: "Colección de interfaces experimentales y componentes de vanguardia.",
    longDescription: `**Web Experiments & Prototypes** es un laboratorio digital donde exploro las fronteras de la interfaz de usuario y la experiencia de desarrollo moderno.
    
### Naturaleza del Proyecto

Esta es una **colección curada de despliegues rápidos, prototipos de componentes y exploraciones visuales** que no necesariamente forman parte de un producto comercial, pero que demuestran capacidades técnicas específicas:

- 🧪 **Laboratorio de UI:** Experimentación con nuevas librerías de animación como Framer Motion y Three.js.
- 📐 **Arquitectura de Componentes:** Pruebas de patrones de diseño escalables y sistemas de diseño atómicos.
- ⚡ **Rendimiento Web:** Optimizaciones extremas en frameworks como Next.js, Astro y Qwik.
- 🎨 **Estética Visual:** Exploración de tendencias como Neobrutalismo, Glassmorphism y Bento Grids.

Cada pieza en esta colección representa un desafío técnico superado, desde micro-interacciones complejas hasta integraciones experimentales con APIs del navegador.`,
    r2Folder: "webs",
    link: "https://www.christopher.com.mx",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["Experimental", "UI/UX", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "14",
    slug: "mindstack",
    title: "Override MindStack",
    description: "Competencia de programación de élite con temática espacial y retos de complejidad galáctica.",
    longDescription: `**Override MindStack** es una plataforma diseñada para albergar una de las competencias de programación más desafiantes para el talento tecnológico.

### El Desafío

Bajo el lema "Desafía los Límites de la Lógica", MindStack propone un entorno de alta presión y complejidad técnica:

- 🌌 **Temática Galáctica:** Una interfaz inmersiva inspirada en el espacio profundo que eleva la experiencia del usuario.
- 🏆 **Programación de Élite:** Diseñado específicamente para detectar y potenciar el talento de alto rendimiento.
- ⏱️ **Eventos en Tiempo Real:** Sistema de cuenta regresiva y registro dinámico para participantes.
- 💻 **Arquitectura Moderna:** Construido con tecnologías web de última generación para garantizar estabilidad durante picos de tráfico de competidores.

El proyecto no es solo una landing page, sino el portal de entrada a un ecosistema de resolución de problemas donde la eficiencia del código y la creatividad lógica son los únicos requisitos para alcanzar la cima del ranking.`,
    r2Folder: "Mindstack",
    link: "https://mindstack.override.com.mx",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["React", "Tailwind CSS", "UI/UX", "Space Theme", "Competition"],
  },
  {
    id: "15",
    slug: "lerna",
    title: "Lerna",
    description: "Plataforma de productividad para educadores impulsada por inteligencia artificial.",
    longDescription: `**Lerna** es una herramienta de vanguardia diseñada para transformar la labor docente mediante la automatización y la optimización de flujos de trabajo educativos.

### Empoderando a los Educadores

Lerna se enfoca en devolver el tiempo valioso a los profesores, permitiéndoles concentrarse en lo que realmente importa: la enseñanza.

- 🤖 **IA Educativa:** Integración de herramientas de inteligencia artificial para la creación de contenido y personalización del aprendizaje.
- ⚡ **Productividad Aumentada:** Flujos de trabajo diseñados para reducir drásticamente la carga administrativa y de planeación.
- 📚 **Gestión Inteligente:** Organización eficiente de recursos didácticos y seguimiento del progreso académico.
- 🎨 **Interfaz Sofisticada:** Una experiencia de usuario limpia y profesional que facilita la adopción tecnológica en el aula.

Lerna representa el siguiente paso en la evolución educativa, donde la tecnología actúa como un aliado estratégico del docente para crear experiencias de aprendizaje más ricas y efectivas.`,
    r2Folder: "Lerna",
    link: "https://lerna.override.com.mx",
    categories: [TECH_CATEGORIES.WEB, TECH_CATEGORIES.AI],
    tags: ["Next.js", "AI", "Education", "Productivity", "Tailwind CSS"],
  },
];
