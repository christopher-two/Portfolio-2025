# Christopher Alejandro Maldonado Chávez - Portfolio 2025

Bienvenido a mi portafolio profesional, una plataforma digital que showcasea mis trabajos, proyectos y trayectoria profesional como **Desarrollador Multiplataforma** especializado en **Kotlin Multiplataforma** y **Jetpack Compose**.

## 📋 Tabla de Contenidos

- [Acerca del Sitio](#acerca-del-sitio)
- [Características Principales](#características-principales)
- [Estructura del Portafolio](#estructura-del-portafolio)
- [Proyectos Destacados](#proyectos-destacados)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Secciones del Sitio](#secciones-del-sitio)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Contacto](#contacto)

---

## 🎯 Acerca del Sitio

Este portafolio digital es una plataforma completa que presenta mi experiencia profesional, proyectos innovadores y visión empresarial. Construido con **Astro**, **TypeScript**, CSS nativo y **Cloudflare Workers**, representa un showcase rápido y funcional de mis capacidades como desarrollador multiplataforma.

### Propósito Principal

- **Mostrar mis habilidades técnicas** a través de proyectos reales
- **Presentar mi empresa Override** y sus soluciones digitales
- **Conectar con potenciales clientes y colaboradores**
- **Documentar mi trayectoria profesional** y reconocimientos

---

## ✨ Características Principales

### 🎨 Diseño Moderno
- Interfaz minimalista con grid decorativo
- Modo oscuro/claro automático
- Animaciones suaves y transiciones fluidas
- Responsive design (mobile-first)
- Componentes reutilizables con shadcn/ui

### 🚀 Rendimiento
- Astro SSR ejecutado en Cloudflare Workers
- Optimización de imágenes automática
- TypeScript para type-safety
- Compilación eficiente para producción

### 🎭 Interactividad
- Carruseles dinámicos de proyectos
- Marquee animado de tecnologías
- Nombre animado en la página de inicio
- Navegaciones especializadas por sección

---

## 📁 Estructura del Portafolio

```
src/
├── app/
│   ├── page.tsx                 # Página de inicio principal
│   ├── layout.tsx               # Layout global
│   ├── globals.css              # Estilos globales
│   ├── bio/page.tsx             # Página sobre mí (biografía y metas)
│   ├── projects/page.tsx        # Galería de todos los proyectos
│   ├── projects/[slug]/page.tsx # Detalle individual de cada proyecto
│   ├── override/page.tsx        # Página de Override (empresa)
│   ├── lumi/page.tsx            # Producto Lumi
│   ├── daelia/page.tsx          # Producto Daelia
│   ├── spot/page.tsx            # Producto Spot
│   └── spot/
│       ├── privacy/page.tsx     # Política de privacidad
│       ├── terms/page.tsx       # Términos de servicio
│       └── versions/page.tsx    # Historial de versiones
├── components/
│   ├── AnimatedName.tsx         # Nombre animado
│   ├── CarouselControls.tsx     # Controles de carrusel
│   ├── Footer.tsx               # Pie de página
│   ├── Header.tsx               # Encabezado
│   ├── ProjectCard.tsx          # Tarjeta de proyecto
│   ├── ProjectDetailClient.tsx  # Detalle de proyecto (cliente)
│   ├── ProjectsCarousel.tsx     # Carrusel de proyectos
│   ├── TechCard.tsx             # Tarjeta de tecnología/habilidad
│   ├── TechMarquee.tsx          # Marquee de tecnologías
│   ├── InfoPage.tsx             # Página de información genérica
│   ├── theme-provider.tsx       # Proveedor de tema
│   ├── theme-toggle.tsx         # Toggle de tema
│   ├── [Logo components]        # Logos de los productos
│   └── ui/                      # Componentes UI de shadcn/ui
├── lib/
│   ├── data.ts                  # Datos centralizados (proyectos, enlaces)
│   ├── utils.ts                 # Funciones de utilidad
│   └── placeholder-images.ts    # Gestión de imágenes
├── hooks/
│   ├── use-mobile.tsx           # Hook para detectar vista móvil
│   └── use-toast.ts             # Hook para notificaciones toast
└── content/
    └── spot/                    # Contenido markdown de Spot
        ├── privacy.md           # Privacidad de Spot
        ├── terms.md             # Términos de Spot
        └── versions.md          # Versiones de Spot
```

---

## 🚀 Proyectos Destacados

### 1. **Override Health** (anteriormente Lyra)
**Descripción:** Aplicación móvil para optimizar la interacción entre profesionales de la salud y sus pacientes.

**Características:**
- Digitalización de planes de alimentación
- IA asistente para gestión de dieta
- Recomendaciones personalizadas
- Seguimiento continuo y eficaz

**Tecnologías:** Jetpack Compose, Room, Firebase, Google Cloud Functions, Gemini API, MVI, Clean Architecture

**Link:** https://www.override.com.mx

---

### 2. **Override Pass**
**Descripción:** Solución de control de accesos para empresas con máxima seguridad y eficiencia.

**Características:**
- Códigos QR encriptados con Stack3
- Gestión centralizada de entradas/salidas
- Implementación rápida sin infraestructura compleja
- Control robusto y confiable

**Tecnologías:** Compose Multiplatform, Room, Koin, Ktor, Firebase, Gemini API, MVVM, Wasm

**Link:** https://pass.override.com.mx

---

### 3. **Override Learning**
**Descripción:** Plataforma educativa con IA para automatizar tareas administrativas y potenciar la labor docente.

**Características:**
- Generación y publicación automática de tareas en Google Classroom
- Monitoreo de progreso de estudiantes
- Ejercicios de refuerzo basados en desempeño
- Modernización del proceso educativo

**Tecnologías:** Compose Multiplatform, Koin, Ktor, Firebase, Classroom API, Gemini API, MVI, Clean Architecture

**Link:** https://learning.override.com.mx

---

### 4. **Override Logistics**
**Descripción:** Plataforma integral para optimizar operaciones de logística en comercio internacional.

**Características:**
- App móvil para conductores y almacén
- Visualización en Google TV para almacén
- O360 (Suite Logística de Escritorio)
- Desmaterialización de prueba de entrega
- Optimización de rutas
- Gestión de ciclos de carga
- Infraestructura en nube de alta disponibilidad

**Tecnologías:** Jetpack Compose, Koin, Ktor, Room, Firebase, Google Auth, Supabase, Gemini API, MVI, Clean Architecture, KMP JVM

**Link:** https://logistics.override.com.mx

---

### 5. **Override News**
**Descripción:** Aplicación de noticias con IA para agilizar el consumo de información.

**Características:**
- Generación de resúmenes concisos con IA
- Interfaz minimalista
- Experiencia de usuario intuitiva
- Mantenerse informado rápidamente

**Tecnologías:** Jetpack Compose, Koin, Ktor, Firebase, Google Auth, Gemini API, MVI, Clean Architecture

**Link:** https://www.override.com.mx

---

### 6. **Override Mindstack**
**Descripción:** Concurso de programación competitiva centrado en problemas NP-HARD.

**Características:**
- Diseño de problemas complejos
- Evento con 30+ participantes
- Logística completa del evento
- Prueba de límites en lógica y algoritmia

**Tecnologías:** Event Organization, Problem Design, Logistics

**Link:** https://mindstack.override.com.mx

---

### 7. **Override Shop**
**Descripción:** Ecosistema de ventas completo con web, backend y app móvil administrable.

**Características:**
- Control total del contenido desde administrador
- Reutilizable para cualquier ecommerce
- Automatización con IA
- Ecosistema modular

**Tecnologías:** Jetpack Compose, Koin, Ktor, Firebase, Google Auth, Gemini API, MVI, Clean Architecture

**Link:** https://shop.override.com.mx

---

### 8. **Dependency**
**Descripción:** Proyecto de código abierto para gestión eficiente de dependencias multiplataforma.

**Características:**
- Actualización de dependencias
- Disponibles desde el inicio
- Eficiencia en desarrollo

**Tecnologías:** Vite, React, TypeScript, Tailwind, Vercel

**Link:** https://dependency.christopher.com.mx

---

### 9. **Cotizador Yazbek**
**Descripción:** Solución rápida para cotizar productos de Yazbek (empresa EikoColors).

**Características:**
- Interfaz amigable y sencilla
- Cotización rápida de productos
- Fácil de usar

**Tecnologías:** WasmJs, KMP, Koin, Clean Architecture, MVI, Github Actions

**Link:** https://wasm.christopher.com.mx/cotizador/yazbek

---

### 10. **EikoColors System**
**Descripción:** Ecosistema integral para gestión administrativa y operativa de EikoColors.

**Características:**
- Gestión de usuarios
- Control de trabajos y proyectos
- Gestión de finanzas
- Control total de la empresa

**Tecnologías:** KMP JVM, Koin, Firebase, Room, Datastore

---

### 11. **Daelia Experiments**
**Descripción:** Serie de productos experimentales para probar nuevas tecnologías.

**Subproductos:**
- **Daelia Social:** Explicaciones sobre arquitectura de redes sociales
- **Daelia Camera Color Detector:** Detector de colores por cámara
- **Daelia Weather:** Reloj minimalista con hora y clima

**Tecnologías:** Firebase, Google Auth, Jetpack Compose, Koin, MVI, WasmJs KMP, OpenWeather API, Ktor

**Link:** /daelia

---

### 12. **Lumi** (parte de Daelia)
**Descripción:** Generador de códigos QR impulsado con IA.

**Características:**
- Generación rápida y sencilla
- Interfaz intuitiva
- Powered by Gemini API

**Tecnologías:** Jetpack Compose, Koin, MVI, Firebase, Google Auth

**Link:** /lumi

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Astro** - Renderizado rápido orientado a contenido
- **TypeScript** - Type-safe development
- **CSS nativo** - Sistema visual neo-brutalista propio

### Backend & Cloud
- **Ktor** - Framework Kotlin multiplataforma
- **Firebase** - BaaS (Autenticación, Firestore, Storage)
- **Google Cloud Functions** - Serverless computing
- **Supabase** - Alternative/complemento a Firebase
- **Docker** - Containerización

### Mobile
- **Jetpack Compose** - UI toolkit moderno
- **Compose Multiplatform** - Desarrollo multiplataforma
- **Kotlin Multiplataforma (KMP)** - Shared code
- **Koin** - Dependency Injection
- **Room** - Base de datos local
- **DataStore** - Almacenamiento de preferencias

### IA & APIs
- **Gemini API** - Google's generative AI
- **Google Classroom API** - Integración educativa
- **OpenWeather API** - Datos meteorológicos
- **Google Authentication** - Autenticación

### DevOps & Tools
- **GitHub Actions** - CI/CD
- **Cloudflare Workers** - Deployment edge
- **Docker** - Containerización
- **pnpm** - Package manager

---

## 📑 Secciones del Sitio

### 🏠 Página de Inicio (`/`)
La página principal presenta:
- **Presentación personalizada** con nombre animado
- **CTA buttons** - Ver trabajo, contacto, descargar CV
- **Carrusel de proyectos destacados** (primeros 6 proyectos)
- **Sección "Sobre Mí"** con biografía y foto
- **Marquee de tecnologías** animado
- **Tarjetas de habilidades técnicas:**
  - Desarrollo Multiplataforma
  - Desarrollo Móvil
  - Backend y Cloud
- **Reconocimientos y certificados:**
  - 1er Lugar Innovatec 2025 (Salud) - Lyra
  - 1er Lugar Innovatec 2025 (Tecnología) - Lerna
  - Participante Destacado Innovatec 2023
  - Ganador Concurso Interno 2024 (TecNM) - Lyra
  - Ganador Concurso Interno 2023 (TecNM) - Quickness
  - Participante Destacado Coding Cup México 2021 y 2025
- **Sección de contacto** con enlaces a redes sociales

### 👤 Página de Biografía (`/bio`)
Información personal detallada:
- **Infancia y trayectoria**
- **Metas profesionales:**
  - Corto plazo (4 años)
  - Mediano plazo (10 años)
  - Largo plazo (10+ años)
- **Motivaciones y estrategias**

### 🏢 Página de Override (`/override`)
Presentación de la empresa Override con:
- **Desglose de la palabra OVERRIDE:**
  - O - RIGEN (Punto de partida para transformación digital)
  - V - ISIÓN (Soluciones escalables)
  - E - FICACIA (Resultados medibles)
  - R - IGOR (Código robusto)
  - R - APIDEZ (Despliegues ágiles)
  - I - NNOVACIÓN (Creatividad sin límites)
  - D - IÁLOGO (Comunicación cercana)
  - E - XPRESIÓN (Marca auténtica)

### 🎨 Página de Proyectos (`/projects`)
Galería completa de todos los proyectos en grid de 2 columnas.

### 📖 Detalle de Proyecto (`/projects/[slug]`)
Página individual para cada proyecto con:
- Título y descripción larga
- Galería de imágenes
- Tags de tecnologías
- Link al proyecto
- Información detallada

### 💡 Página de Lumi (`/lumi`)
Generador de códigos QR con IA.

### 🔬 Página de Daelia (`/daelia`)
Serie de experimentos y productos pequeños.

### 📍 Página de Spot (`/spot`)
Red social basada en ubicación con:
- **Sentimiento** - Recuerdos anclados
- **Proximidad** - Contenido geográfico
- **Objetivo** - Visual-first
- **Tesoros** - Geocaching emocional
- Secciones de privacidad, términos y versiones

---

## 🎓 Habilidades Técnicas

### Desarrollo Multiplataforma
- Compose Multiplataforma
- Kotlin Multiplataforma (KMP)
- Arquitectura modular y escalable

### Desarrollo Móvil
- Jetpack Compose (Mid-Senior)
- Kotlin
- Clean Architecture
- MVI/MVVM patterns

### Backend & Cloud
- Ktor (Kotlin framework)
- Firebase (Firestore, Auth, Storage)
- Google Cloud
- Supabase
- Docker & containerización

### Frontend Web
- Next.js
- TypeScript
- React
- Tailwind CSS

### Especialidades
- Clean Architecture
- Multimodularity
- Repository Pattern
- Layered Model
- DeepLinks
- Wasm (WebAssembly)

---

## 🔗 Enlaces Importantes

### Redes Sociales
- **Email:** hola@christopher.com.mx
- **LinkedIn:** christopher-alejandro-maldonado-chavez
- **GitHub:** christopher-two
- **Instagram:** @christopher_two_
- **YouTube:** ChristopherTwo
- **TikTok:** @christopher_two
- **Blog:** blog.christopher.com.mx
- **Sitio Principal:** override.com.mx

### Productos
- **Override:** https://www.override.com.mx
- **Lumi:** /lumi
- **Daelia:** /daelia
- **Spot:** /spot
- **Override Pass:** https://pass.override.com.mx
- **Override Learning:** https://learning.override.com.mx
- **Override Logistics:** https://logistics.override.com.mx
- **Override News:** https://www.override.com.mx
- **Override Shop:** https://shop.override.com.mx
- **Dependency:** https://dependency.christopher.com.mx
- **Cotizador Yazbek:** https://wasm.christopher.com.mx/cotizador/yazbek

---

## 🚀 Cómo Ejecutar

### Requisitos
- Node.js 20+
- pnpm

### Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo con el runtime de Cloudflare (puerto 9002)
pnpm dev

# Verificar Astro y los tipos de Wrangler
pnpm check

# Compilar para Cloudflare Workers
pnpm build

# Previsualizar el Worker compilado
pnpm preview

# Desplegar a Cloudflare Workers
pnpm deploy

```

El sitio estará disponible en `http://localhost:9002` en desarrollo.

### Configuración

- **Astro Config:** astro.config.ts
- **TypeScript Config:** tsconfig.json
- **Cloudflare Config:** wrangler.jsonc
- **Variables locales:** .dev.vars

---

## 🎯 Objetivos del Portafolio

✅ Showcase de habilidades técnicas
✅ Presentación de proyectos exitosos
✅ Documentación de trayectoria profesional
✅ Plataforma de contacto y colaboración
✅ Visión empresarial (Override)
✅ Experiencia de usuario moderna

---

## 📝 Notas Adicionales

- El CV está disponible para descargar desde la página de inicio
- El contenido está optimizado para dispositivos móviles
- Se utiliza un sistema modular de componentes reutilizables
- Las imágenes se cargan desde Supabase
- El portafolio incluye múltiples temas de productos y soluciones

---

## 📞 Contacto

Para colaboraciones, consultoría o preguntas:

- Email: hola@christopher.com.mx
- LinkedIn: https://www.linkedin.com/in/christopher-alejandro-maldonado-chavez-8784ba37a/
- GitHub: https://github.com/christopher-two

---

**Última actualización:** 22 de enero de 2026

Construido con ❤️ usando Astro, TypeScript, CSS nativo y Cloudflare Workers
