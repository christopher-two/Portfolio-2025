
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
    handle: 'christopher_two',
    href: 'https://www.linkedin.com/in/christopher-two/',
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
  { id: "prod-6", title: "Atomo App", href: "/projects/atomo-app", bgColor: "bg-indigo-900" },
  { id: "prod-5", title: "Atomo Web", href: "/projects/atomo-web", bgColor: "bg-purple-900" },
  { id: "prod-8", title: "Override Logistics", href: "/projects/override-logistics", bgColor: "bg-slate-900" },
  { id: "prod-18", title: "Override Menu", href: "/projects/override-menu", bgColor: "bg-orange-500" },
  { id: "prod-20", title: "Parse", href: "/projects/parse", bgColor: "bg-violet-900" },
  { id: "prod-19", title: "Override Sense", href: "/projects/override-sense", bgColor: "bg-green-700" },
  { id: "prod-9", title: "EikoColors Web", href: "/projects/eikocolors-web", bgColor: "bg-emerald-900" },
  { id: "prod-10", title: "Charmstar Web", href: "/projects/charmstar-web", bgColor: "bg-rose-900" },
  { id: "prod-7", title: "Override Web", href: "/projects/override-web", bgColor: "bg-zinc-900" },
  { id: "prod-3", title: "Cotizador Yazbek", href: "/projects/cotizador-yazbek", bgColor: "bg-orange-600" },
  { id: "prod-4", title: "Spot", href: "/projects/spot", bgColor: "bg-blue-600" },
  { id: "prod-11", title: "Dependency", href: "/projects/dependency", bgColor: "bg-cyan-800" },
  { id: "prod-15", title: "Lerna", href: "/projects/lerna", bgColor: "bg-stone-900" },
  { id: "prod-14", title: "MindStack", href: "/projects/mindstack", bgColor: "bg-zinc-950" },
  { id: "prod-13", title: "Web Experiments", href: "/projects/webs", bgColor: "bg-indigo-600" },
  { id: "prod-12", title: "Colors RGB", href: "/projects/colors", bgColor: "bg-gradient-to-br from-red-500 via-green-500 to-blue-500" },
  { id: "prod-16", title: "Squid Games App", href: "/projects/squid-games-app", bgColor: "bg-pink-900" },
  { id: "prod-17", title: "Squid Games Desktop", href: "/projects/squid-games-desktop", bgColor: "bg-slate-900" },
  { id: "prod-22", title: "ParkSpot", href: "/projects/parkspot", bgColor: "bg-lime-700" },
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
    id: "18",
    slug: "override-menu",
    title: "Override Menu",
    description: "Aplicación multiplataforma premium para la gestión de menús digitales en tiempo real.",
    longDescription: `**Override Menu** es una solución integral diseñada para revolucionar la gestión de menús en la industria gastronómica, permitiendo a los restaurantes digitalizar su oferta con una experiencia premium.

### Potencia Multiplataforma

Desarrollado bajo un ecosistema **Kotlin Multiplatform (KMP)**, el sistema ofrece una base de código única para Android, iOS, Desktop y Web.

- 🚀 **Sincronización en Tiempo Real:** Gracias a la integración con **Supabase**, cualquier cambio en el menú se refleja instantáneamente en todas las plataformas.
- 📴 **Filosofía Offline-First:** Capacidad de funcionamiento sin conexión con sincronización inteligente una vez recuperada la red.
- 📸 **Gestión de Multimedia:** Subida y optimización de imágenes de platillos directamente desde la app.
- 📐 **Arquitectura de Élite:** Construido sobre **Clean Architecture** y patrón **MVI**, garantizando una robustez industrial y escalabilidad sin límites.
- 🎨 **Experiencia de Usuario:** Interfaz moderna y fluida desarrollada con **Compose Multiplatform**, siguiendo los estándares del *Override Design System*.

**Override Menu** no es solo un catálogo digital, es una herramienta de gestión multi-tenant que permite a cada establecimiento controlar su inventario, categorías y disponibilidad con la eficiencia de un sistema empresarial de alto nivel.`,
    r2Folder: "OverrideMenu",
    link: "https://menu.override.com.mx",
    categories: [TECH_CATEGORIES.KMP, TECH_CATEGORIES.ANDROID, TECH_CATEGORIES.WEB],
    tags: ["KMP", "Compose Multiplatform", "Supabase", "Clean Architecture", "MVI", "Koin"],
  },
  {
    id: "20",
    slug: "parse",
    title: "Parse",
    description: "Lector de libros moderno para Android con traducción inteligente (ML Kit) y estética minimalista.",
    longDescription: `**Parse** es una aplicación de lectura de libros de vanguardia para Android, diseñada para ofrecer una experiencia inmersiva y fluida inspirada en la simplicidad de los dispositivos Kindle.

### Experiencia de Lectura Superior

- 📖 **Lector Tipo Kindle**: Paginación inteligente y renderizado de texto optimizado para largas sesiones de lectura.
- 📚 **Gestión de Biblioteca**: Organización intuitiva de libros locales y documentos personales.
- 🌍 **Traducción con IA**: Integración con **Google ML Kit** para traducción de texto y detección de idioma en tiempo real.
- ⚡ **Navegación de Nueva Generación**: Implementación pionera de la API **Navigation 3** de Jetpack Compose.
- 🎨 **Estética Minimalista**: Diseño basado en **Material 3** con soporte para temas dinámicos que se adaptan a tu estilo.

### Potencia Tecnológica

- 🏗️ **Arquitectura Multimodular**: Construido bajo principios de **Clean Architecture** para una máxima escalabilidad y testabilidad.
- 📄 **Soporte Avanzado de PDF**: Integración con **PDFBox-Android** para una gestión robusta de documentos digitales.
- 🔐 **Autenticación con Google**: Sincronización segura y gestión de perfiles mediante Firebase.
- 🚀 **Stack Moderno**: Uso extensivo de **Koin**, **Ktor**, **Room** y **DataStore** para una experiencia offline-first reactiva.

Parse representa la evolución de la lectura móvil, combinando el minimalismo visual con una arquitectura de software industrial de alto nivel e inteligencia artificial integrada.`,
    r2Folder: "Parse",
    link: "https://parse.christopher.com.mx",
    categories: [TECH_CATEGORIES.ANDROID, TECH_CATEGORIES.AI],
    tags: ["Android", "Jetpack Compose", "ML Kit", "Translation", "Navigation 3", "PDFBox"],
  },
  {
    id: "19",
    slug: "override-sense",
    title: "Override Sense",
    description: "Aplicación de accesibilidad para Android con IA en dispositivo que detecta sonidos críticos y los convierte en alertas visuales y hápticas.",
    longDescription: `**Override Sense** es una aplicación de accesibilidad para Android diseñada para ayudar a personas con discapacidad auditiva.

Mediante **On-Device AI**, la app detecta, clasifica y visualiza sonidos ambientales críticos en tiempo real, transformando audio en alertas visuales y sensoriales sin depender de la nube.

### Detección Inteligente

La clasificación de eventos sonoros se realiza con **YAMNet + TensorFlow Lite**, cubriendo más de 500 tipos de sonidos y priorizando por niveles:

- 🔴 **Crítico:** alarmas de incendio, detectores de humo y sirenas de emergencia.
- 🟡 **Advertencia:** timbres, golpes en la puerta y zumbadores.
- 🔵 **Información:** llanto de bebé, risas y habla.

### Feedback Visual y Sensorial

- 👁️ **Animación de Pulso:** visualización reactiva que cambia color e intensidad según la prioridad del sonido.
- 🚨 **Notificaciones de Alto Impacto:** alertas heads-up incluso con la pantalla bloqueada.
- 📳 **Patrones de Vibración:** 7 patrones personalizados (Doble, Triple, Latido y más) con intensidad ajustable.
- 💡 **Alertas LED:** uso del flash para eventos críticos en entornos oscuros.

### Personalización y Rendimiento

- 🎨 **Temas Dinámicos:** soporte para Material You y modos claro/oscuro.
- 🎚️ **Sensibilidad Ajustable:** control de ganancia del micrófono y umbrales de detección.
- 🔋 **Optimización de Batería:** modos de ahorro y ejecución condicionada a carga cuando se requiere.

### Privacidad Primero

Todo el procesamiento de audio ocurre **100% en el dispositivo**. Ningún audio se graba, almacena ni envía a servicios externos.

### Stack Tecnológico

- **Kotlin**
- **Jetpack Compose + Material3**
- **MVVM + Clean Architecture**
- **Koin**
- **Coroutines + Kotlin Flow**
- **TensorFlow Lite (Audio Classification)**
- **WorkManager + Foreground Services**
- **DataStore Preferences**
- **Gradle (Kotlin DSL)**

Override Sense combina accesibilidad, privacidad y arquitectura Android moderna para ofrecer una experiencia confiable en escenarios de vida diaria donde cada segundo importa.`,
    r2Folder: "projects/OverrideSense",
    link: "https://sense.override.com.mx/",
    categories: [TECH_CATEGORIES.ANDROID, TECH_CATEGORIES.AI],
    tags: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "TensorFlow Lite",
      "On-Device AI",
      "MVVM",
      "Clean Architecture",
      "Koin",
      "Kotlin Flow",
      "WorkManager",
      "DataStore",
    ],
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
    id: "15",
    slug: "lerna",
    title: "Lerna",
    description: "Plataforma de productividad para educadores impulsada por inteligencia artificial.",
    longDescription: `**Lerna** es una herramienta de vanguardia diseñada para transformar la labor docente mediante la automatización y la optimización de flujos de trabajo educativos.

### Empoderando a los Educadores

Lerna se enfoca en devolver el tiempo valioso a los profesores, permitiéndoles concentrarse en lo que realmente importa: la enseñanza.

- 🤖 **Integración con Gemini AI:** Utiliza modelos de lenguaje avanzados para la generación de contenido didáctico, resúmenes y asistencia personalizada.
- ⚡ **Tecnología de Punta:** Desarrollado con **Kotlin Multiplatform (KMP)** y **Compose Multiplatform**, garantizando una experiencia fluida y nativa en la web mediante **WasmJs**.
- 📐 **Arquitectura Robusta:** Implementado bajo principios de **Clean Architecture**, asegurando escalabilidad y facilidad de mantenimiento.
- 🚀 **Productividad Aumentada:** Flujos de trabajo diseñados para reducir drásticamente la carga administrativa y de planeación docente.

Lerna representa el siguiente paso en la evolución educativa, donde la tecnología actúa como un aliado estratégico del docente para crear experiencias de aprendizaje más ricas y efectivas.`,
    r2Folder: "Lerna",
    link: "https://lerna.override.com.mx",
    categories: [TECH_CATEGORIES.WEB, TECH_CATEGORIES.AI, TECH_CATEGORIES.KMP],
    tags: ["KMP", "Compose Multiplatform", "Gemini AI", "WasmJs", "Clean Architecture"],
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
    id: "16",
    slug: "squid-games-app",
    title: "Squid Games: Mobile App",
    description: "Interfaz de jugador con reconocimiento facial biométrico para el ecosistema Puente de Cristal.",
    longDescription: `**Squid Games Mobile** es la interfaz de interacción del jugador, diseñada para llevar la biometría y el tiempo real al ecosistema del Puente de Cristal.

### Innovación en la Interfaz

La aplicación móvil actúa como el terminal de identidad y estado para los participantes:

- 🤖 **Identificación Biométrica:** Integración de **Teachable Machine** para el reconocimiento facial, permitiendo el registro y validación de jugadores de forma automatizada.
- ⏱️ **Estado en Tiempo Real:** Visualización dinámica del estatus del jugador (Vivo, Eliminado o Ganador) sincronizado instantáneamente con el sistema central.
- 📱 **Experiencia Inmersiva:** Interfaz diseñada para mantener la tensión del juego, sirviendo como el vínculo directo entre el jugador y la lógica del puente físico.
- 📡 **Sincronización Total:** Comunicación fluida con la suite de escritorio para asegurar que la identidad del jugador sea consistente en todo el ecosistema.

Este componente demuestra nuestra capacidad para integrar visión por computadora en dispositivos móviles dentro de una solución de ingeniería compleja.`,
    r2Folder: "SquidGames/mobile",
    link: "https://github.com/christopher-two",
    categories: [TECH_CATEGORIES.ANDROID, TECH_CATEGORIES.AI],
    tags: ["Android Native", "Teachable Machine", "AI", "Real-time", "Biometrics"],
  },
  {
    id: "17",
    slug: "squid-games-desktop",
    title: "Squid Games: Desktop Control",
    description: "Centro de control robusto para la gestión centralizada y monitorización del Puente de Cristal.",
    longDescription: `**Squid Games Desktop** es el núcleo de inteligencia y mando que orquestra todo el ecosistema del Puente de Cristal.

### Centro de Mando Centralizado

Desarrollada para ofrecer una gestión total de la experiencia, esta aplicación actúa como el cerebro del sistema:

- 🖥️ **Gestión de Partida:** Control absoluto sobre el flujo del juego, configuración de reglas y administración de la lógica del puente.
- 📊 **Monitorización Avanzada:** Visualización en tiempo real del estado de todos los jugadores y del sistema físico embebido.
- 🔌 **Integración de Hardware:** Comunicación de bajo nivel para el control de los sensores y actuadores del puente físico.
- 🏆 **Excelencia en Ingeniería:** Construida con un enfoque en la fiabilidad y el rendimiento, asegurando que la coordinación entre la app móvil y el hardware sea perfecta.
- 📡 **Hub de Comunicación:** Centraliza la recepción de datos biométricos de las apps móviles y los sincroniza con las reacciones físicas del puente.

El software de escritorio representa el pilar de robustez del proyecto, demostrando nuestra capacidad para desarrollar sistemas de control centralizados para entornos interactivos complejos.`,
    r2Folder: "SquidGames/desktop",
    link: "https://github.com/christopher-two",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["Desktop Software", "Control System", "Hardware Integration", "Kotlin", "Real-time"],
  },
  {
    id: "21",
    slug: "override-index",
    title: "Override Index",
    description: "Sistema web completo para la gestión de bibliotecas escolares desarrollado con Astro, TailwindCSS, Firebase y desplegado en Cloudflare Pages.",
    longDescription: `**Override Index** es una plataforma integral desarrollada para automatizar y optimizar los procesos de préstamo, devolución y administración de recursos bibliográficos.

### Características del Sistema

- 📚 **Gestión de Inventario:** Control completo de libros, revistas y otros materiales bibliográficos.
- 👥 **Usuarios y Perfiles:** Administración de estudiantes, docentes y personal administrativo con roles específicos.
- 🔄 **Préstamos y Devoluciones:** Sistema automatizado de préstamo y seguimiento de devoluciones con notificaciones.
- 🔍 **Búsqueda Avanzada:** Motor de búsqueda eficiente para encontrar recursos rápidamente.
- 📊 **Reportes y Estadísticas:** Generación de reportes sobre préstamos, popularidad de libros y actividad general.

### Tecnología y Arquitectura

- ⚡ **Astro:** Framework moderno para sitios web estáticos ultra-rápidos con soporte para múltiples frameworks UI.
- 🎨 **TailwindCSS:** Framework de utilidades CSS para un desarrollo rápido y consistente de interfaces.
- 🔥 **Firebase:** Backend como servicio proporcionando autenticación, base de datos en tiempo real y almacenamiento.
- ☁️ **Cloudflare Pages:** Plataforma de alojamiento para despliegue rápido y seguro con edge computing.
- 📱 **Diseño Responsivo:** Compatible con dispositivos móviles, tablets y escritorio para acceso desde cualquier lugar.

El sistema ha sido diseñado para mejorar la eficiencia operativa de la biblioteca escolar, reducir errores manuales y proporcionar una experiencia de usuario moderna tanto para administradores como para usuarios finales.`,
    r2Folder: "Cetis27Library",
    link: "https://github.com/christopher-two/Cetis27-Library",
    categories: [TECH_CATEGORIES.WEB],
    tags: ["Astro", "TailwindCSS", "Firebase", "Cloudflare Pages", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "22",
    slug: "parkspot",
    title: "ParkSpot",
    description: "App Kotlin Multiplatform para guardar la ubicacion del auto, gestionar historial y controlar tickets de parking con timer y notificaciones.",
    longDescription: `**ParkSpot** es una aplicacion **Kotlin Multiplatform** enfocada en resolver un problema diario: recordar donde quedo estacionado tu auto y controlar el tiempo del ticket de parking sin fricciones.

### Lo que hace el proyecto

- 🧭 **Onboarding inicial** para configurar el flujo de uso.
- 📍 **Seleccion y guardado de ubicaciones** de estacionamiento.
- 🗂️ **Historial de lugares guardados** con pantalla de detalle por ticket.
- 🗺️ **Mapa en Android con Mapbox** para crear spots de forma visual.
- 🍎 **Soporte iOS** para la app compartida (mapa nativo iOS en estado base).
- ⏱️ **Timer de ticket de parking** con notificaciones inteligentes.

### Timer y notificaciones de parking

#### Flujo funcional

1. El usuario crea un spot desde la pantalla de mapa (Car) y puede definir \
\`parkUntil\`.
2. Si hay \
\`parkUntil\`, se solicita permiso de notificaciones en Android (\`POST_NOTIFICATIONS\`).
3. Al guardar, se inicia un timer nativo sin depender de abrir ParkingDetail.
4. El timer sigue activo con Foreground Service mientras haya tiempo restante.

#### Android

- Implementacion nativa en \`composeApp/src/androidMain/.../ParkingForegroundService.kt\`.
- Notificacion persistente con cronometro (\`setUsesChronometer(true)\`).
- Deep link al ticket al tocar la notificacion.
- Alertas adicionales automaticas al 50%, 10% y fin del ticket.
- Servicio desacoplado de la pantalla de detalle para mantener el timer fuera de UI.

#### iOS

- Implementacion base en \`composeApp/src/iosMain/.../ParkingNotificationService.ios.kt\`.
- Estructura minima de notificaciones con \`UNUserNotificationCenter\`.
- Aun no replica la experiencia foreground en vivo de Android.

### Stack tecnico

- ⚙️ **Kotlin Multiplatform + Compose Multiplatform**.
- 🧩 **Koin** para inyeccion de dependencias.
- 💾 **Room y DataStore** para persistencia local.
- 🌐 **Ktor** para networking.
- 🗺️ **Mapbox (maps-compose)** en Android.

### Arquitectura y estructura

El proyecto esta organizado por feature y capas:

- \`feature/*/data\`: repositorios e implementaciones de data sources.
- \`feature/*/domain\`: modelos y casos de uso.
- \`feature/*/presentation\`: ViewModel y UI en Compose.
- DI centralizada en \`composeApp/src/commonMain/kotlin/org/christophertwo/car/di/FeaturesModules.kt\`.

### Notas de configuracion

- El token de Mapbox se inyecta en build time desde \`androidapp/build.gradle.kts\` como \`mapbox_access_token\`.
- Configuracion recomendada local: \`local.properties\` con \`MAPBOX_ACCESS_TOKEN=pk.your_token_here\`.
- Tambien existe fallback con \`MAPBOX_SECRET_TOKEN\`.
- Si el usuario deniega notificaciones en Android, el timer visual sigue funcionando en app, pero las notificaciones pueden no mostrarse.

ParkSpot prioriza una experiencia util en el mundo real: guardar rapido, consultar facil y no perder el control del tiempo de estacionamiento.`,
    r2Folder: "projects/parkspot",
    link: "https://parkspot.christopher.com.mx/",
    categories: [TECH_CATEGORIES.KMP, TECH_CATEGORIES.ANDROID],
    tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Koin", "Room", "DataStore", "Ktor", "Mapbox SDK", "Foreground Service", "Notifications", "iOS"],
  },
];

const TECH_ALIAS_MAP: Record<string, string> = {
  web: "Web",
  "jetpack compose": "Jetpack Compose",
  android: "Android",
  "android native": "Android",
  "kotlin multiplatform": "Kotlin Multiplatform",
  kmp: "Kotlin Multiplatform",
  "kmp jvm": "Kotlin Multiplatform",
  ia: "IA",
  ai: "IA",
  "on-device ai": "IA On-Device",
  "gemini ai": "Gemini AI",
  "compose multiplatform": "Compose Multiplatform",
  kotlin: "Kotlin",
  ktor: "Ktor",
  koin: "Koin",
  room: "Room",
  firebase: "Firebase",
  supabase: "Supabase",
  "google tv": "Google TV",
  "navigation 3": "Navigation 3",
  "ml kit": "ML Kit",
  "tensorflow lite": "TensorFlow Lite",
  mapbox: "Mapbox",
  "mapbox sdk": "Mapbox",
  workmanager: "WorkManager",
  datastore: "DataStore",
  "pdfbox-android": "PDFBox",
  pdfbox: "PDFBox",
  astro: "Astro",
  "astro v5": "Astro",
  "next.js": "Next.js",
  "next.js 15": "Next.js",
  react: "React",
  "react 19": "React",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  "tailwind css": "Tailwind CSS",
  tailwindcss: "Tailwind CSS",
  "tailwind css v4": "Tailwind CSS",
  "cloudflare pages": "Cloudflare Pages",
  vercel: "Vercel",
  wasmjs: "Wasm",
  "framer motion": "Framer Motion",
  gradle: "Gradle",
};

const TECH_FILTER_ORDER = [
  "Kotlin Multiplatform",
  "Compose Multiplatform",
  "Jetpack Compose",
  "Kotlin",
  "IA",
  "ML Kit",
  "TensorFlow Lite",
  "Gemini AI",
  "Navigation 3",
  "Ktor",
  "Koin",
  "Room",
  "WorkManager",
  "Firebase",
  "Supabase",
  "Next.js",
  "React",
  "Astro",
  "Tailwind CSS",
  "Cloudflare Pages",
  "Wasm",
  "Mapbox",
];

const toKey = (value: string) => value.toLowerCase().trim();

function normalizeTechLabel(value: string): string {
  const key = toKey(value);
  return TECH_ALIAS_MAP[key] ?? value.trim();
}

export function getProjectTechFilters(project: { categories?: string[]; tags?: string[] }): string[] {
  const labels = [...(project.categories ?? []), ...(project.tags ?? [])]
    .map(normalizeTechLabel)
    .filter(Boolean);

  return Array.from(new Set(labels));
}

export function getUnifiedTechFilters(projectList: Array<{ categories?: string[]; tags?: string[] }>): string[] {
  const discovered = new Set<string>();

  projectList.forEach((project) => {
    getProjectTechFilters(project).forEach((label) => discovered.add(label));
  });

  const ordered = TECH_FILTER_ORDER.filter((label) => discovered.has(label));
  const remaining = Array.from(discovered).filter((label) => !TECH_FILTER_ORDER.includes(label)).sort();

  return [...ordered, ...remaining];
}
