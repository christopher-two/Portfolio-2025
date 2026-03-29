import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Smartphone, Award, Download, MessageSquare, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechCard } from "@/components/TechCard";
import { TechMarquee } from "@/components/TechMarquee";
import { AnimatedName } from "@/components/AnimatedName";
import { socialLinks, projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import profileImage from "@/assets/images/IMG_6195.jpg";

const parsePlayStoreUrl = "https://play.google.com/store/apps/details?id=org.christophertwo.parse&pcampaignid=web_share";

const homePremiumPriority = [
  "parse",
  "override-menu",
  "override-logistics",
  "override-sense",
  "parkspot",
  "atomo-app",
  "spot",
];

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

const homeMobileVentoPattern = [
  "",
  "col-span-2",
  "",
  "",
  "col-span-2",
  "",
  "",
  "col-span-2",
];

const homeDesktopProjectsLimit = 8;
const homeMobileProjectsLimit = 8;

function getHomePriorityRank(slug: string) {
  const index = homePremiumPriority.indexOf(slug);
  return index === -1 ? Number.POSITIVE_INFINITY : index;
}

function isHomeImportantProject(slug: string) {
  return homePremiumPriority.slice(0, 5).includes(slug);
}

function getDesktopVentoClass(slug: string, index: number) {
  return homeDesktopFeaturedTiles[slug] ?? homeDesktopVentoPattern[index % homeDesktopVentoPattern.length];
}

function getMobileVentoClass(slug: string, index: number) {
  return homeMobileFeaturedTiles[slug] ?? homeMobileVentoPattern[index % homeMobileVentoPattern.length];
}

function getProjectSupportNote(project: (typeof projects)[number]) {
  const noteBySlug: Record<string, string> = {
    "override-shop": "E-commerce fullstack con enfoque en conversion y operacion diaria.",
    "eikocolors-system": "Suite empresarial para gestion, inventario y reportes tecnicos.",
    "atomo-web": "Servicios digitales premium para negocios gastronomicos y creativos.",
    "charmstar-web": "Landing comercial optimizada para identidad de marca y ventas.",
    "override-web": "Sitio institucional orientado a producto, marca y performance.",
    "cotizador-yazbek": "Cotizador web para acelerar flujo comercial en tiempo real.",
    "squid-games-app": "Juego movil con foco en dinamica rapida y feedback visual.",
    "squid-games-desktop": "Control de escritorio para partidas y configuracion en vivo.",
  };

  const custom = noteBySlug[project.slug];
  if (custom) return custom;

  if (project.tags.length > 1) {
    return `Stack clave: ${project.tags.slice(0, 2).join(" + ")}`;
  }

  if (project.categories.length > 0) {
    return `Enfoque: ${project.categories.join(" / ")}`;
  }

  return project.description;
}

const techSkills = [
  {
    icon: Code,
    title: "Multiplataforma Productiva",
    skills: "Kotlin Multiplatform, Compose Multiplatform, Jetpack Compose, Navigation 3",
    description: "Diseño y desarrollo productos compartidos para Android, iOS, Desktop y Web con una sola base de código, priorizando velocidad de entrega, estabilidad y una UX consistente en cada release.",
    bgColor: "bg-skill-1 dark:bg-skill-1-dark"
  },
  {
    icon: Smartphone,
    title: "Android + IA Aplicada",
    skills: "ML Kit, TensorFlow Lite, Material 3, WorkManager, Room",
    description: "Construyo apps Android enfocadas en casos reales, integrando IA on-device, traducción inteligente y experiencias offline-first como Parse y Override Sense.",
    bgColor: "bg-skill-2 dark:bg-skill-2-dark"
  },
  {
    icon: Cpu,
    title: "Backend y Entrega Continua",
    skills: "Ktor, Koin, Firebase, Supabase, Cloudflare Pages, Docker",
    description: "Arquitecturas limpias con servicios escalables, autenticación robusta y despliegues continuos para productos web y móviles con foco en rendimiento y mantenibilidad.",
    bgColor: "bg-skill-4 dark:bg-skill-4-dark"
  },
];

const recognitions = [
  {
    title: '1er Lugar',
    issuer: 'Innovatec Nacional 2025',
    description: 'Ganador en la categoría de "Salud", con el proyecto Lyra.',
  },
  {
    title: '1er Lugar',
    issuer: 'Innovatec Nacional 2025',
    description: 'Ganador en la categoría de "Tecnologia", con el proyecto Lerna.',
  },
  {
    title: 'Lanzamiento Público',
    issuer: 'Google Play Store 2026',
    description: 'Publicación oficial de Parse para usuarios Android con distribución abierta.',
  },
  {
    title: 'Ganador',
    issuer: 'Concurso Interno de Innovación',
    description: 'Instituto Tecnológico Superior de Uruapan (TecNM) - Edicion 2024. Con el proyecto de Lyra.',
  },
  {
    title: 'Ganador',
    issuer: 'Concurso Interno de Innovación',
    description: 'Instituto Tecnológico Superior de Uruapan (TecNM) - Edicion 2023. Con el proyecto Quickness.',
  },
  {
    title: 'Participante Destacado',
    issuer: 'Coding Cup México',
    description: 'Edicion 2021',
  },
  {
    title: 'Participante Destacado',
    issuer: 'Coding Cup México',
    description: 'Edicion 2025',
  },
];

export default function Home() {
  const parseData = projects.find((project) => project.slug === "parse");
  const parseCategories = parseData?.categories ?? [];
  const parseTags = parseData?.tags?.slice(0, 6) ?? [];

  const premiumSortedProjects = [...projects].sort((a, b) => {
    const rankDiff = getHomePriorityRank(a.slug) - getHomePriorityRank(b.slug);
    if (rankDiff !== 0) return rankDiff;

    return Number(a.id) - Number(b.id);
  });

  const desktopProjectsForHome = premiumSortedProjects.slice(0, homeDesktopProjectsLimit);
  const mobileProjectsForHome = premiumSortedProjects.slice(0, homeMobileProjectsLimit);
  const hasMoreDesktopProjects = premiumSortedProjects.length > desktopProjectsForHome.length;
  const hasMoreMobileProjects = premiumSortedProjects.length > mobileProjectsForHome.length;

  return (
    <div className="flex-1 w-full">
      <section className="relative min-h-screen border-b-2 border-border bg-background bg-[radial-gradient(circle_at_top_left,#8f5eff1f,transparent_40%),linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:auto,24px_24px,24px_24px] md:h-[calc(100svh-56px)] md:min-h-0">
        <div className="h-full w-full">
          <div className="grid h-full grid-cols-1 border-l-2 border-t-2 border-border md:grid-cols-12 md:[grid-template-rows:1.2fr_1.05fr_0.95fr_0.9fr]">
            <article className="order-1 relative animate-fade-in overflow-hidden border-r-2 border-b-2 border-border bg-card p-6 text-foreground md:order-none md:col-span-7 md:row-span-2 md:p-8 lg:p-10">
              <Image
                src={profileImage}
                alt="Christopher Alejandro Maldonado Chavez"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,7,14,0.78)_0%,rgba(10,10,18,0.62)_42%,rgba(7,7,14,0.82)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.2),transparent_46%)]" />

              <div className="relative z-10 text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]">
                <AnimatedName />
                <p className="mt-6 max-w-[760px] text-lg text-white/90 md:text-xl">
                  Enfocado en construir productos que lleguen a produccion y escalen. Mi trabajo reciente se concentra en Parse, Override Menu, Override Logistics y Override Sense.
                </p>
                <p className="mt-3 max-w-[760px] text-base text-white/85 md:text-lg">
                  Priorizo arquitectura limpia, IA aplicada y experiencias consistentes entre Android, Web y Desktop para convertir ideas en productos lanzables con valor real.
                </p>
              </div>
            </article>

            <article className="order-5 border-r-2 border-b-2 border-border bg-[linear-gradient(135deg,hsl(var(--muted))_0%,hsl(var(--background))_75%)] p-6 text-foreground md:order-none md:col-span-5 md:row-span-2 md:p-8">
              <div className="inline-flex w-fit items-center gap-2 border border-border bg-background px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
                <Sparkles className="h-4 w-4" />
                Proyecto Destacado
              </div>
              <h2 className="mt-4 text-4xl font-headline font-bold tracking-tight md:text-5xl">{parseData?.title ?? "Parse"}</h2>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
                {parseData?.description ?? "Lector moderno para Android con traducción inteligente, navegación avanzada y diseño minimalista."}
              </p>
            </article>

            <Link
              href="/projects"
              className="order-2 group border-r-2 border-b-2 border-border bg-primary p-5 text-primary-foreground transition-colors hover:bg-primary/90 md:order-none md:col-span-3 md:row-span-1"
            >
              <div className="flex h-full items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Navegacion</p>
                  <h3 className="mt-2 text-xl font-headline font-bold">Ver Mi Trabajo</h3>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </div>
            </Link>

            <Link
              href="#contact"
              className="order-3 group border-r-2 border-b-2 border-border bg-accent p-5 text-accent-foreground transition-colors hover:bg-accent/90 md:order-none md:col-span-2 md:row-span-1"
            >
              <div className="flex h-full items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Navegacion</p>
                  <h3 className="mt-2 text-xl font-headline font-bold">Contacto</h3>
                </div>
                <MessageSquare className="h-5 w-5 shrink-0" />
              </div>
            </Link>

            <Link
              href="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/sign/docs/CV-2026.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84OTUzOTBiNi0zZDUxLTQ4MGMtOWJjNC03NzE4ZmNhOWVkNjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2NzL0NWLTIwMjYucGRmIiwiaWF0IjoxNzY1NTE1OTY2LCJleHAiOjE3OTcwNTE5NjZ9.o2DBshiz7dqCMbht2ybjK2xGZnV7oo_eH-w3Dbqa2EE"
              target="_blank"
              rel="noopener noreferrer"
              className="order-4 group border-r-2 border-b-2 border-border bg-secondary p-5 text-secondary-foreground transition-colors hover:bg-secondary/80 md:order-none md:col-span-2 md:row-span-1"
            >
              <div className="flex h-full items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Documento</p>
                  <h3 className="mt-2 text-xl font-headline font-bold">Descargar CV</h3>
                </div>
                <Download className="h-5 w-5 shrink-0" />
              </div>
            </Link>

            <article className="order-6 border-r-2 border-b-2 border-border bg-card p-6 text-foreground md:order-none md:col-span-3 md:row-span-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Categorias</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {(parseCategories.length > 0 ? parseCategories : ["Android", "Web"]).map((category) => (
                  <span
                    key={category}
                    className="flex min-h-10 items-center justify-center border-2 border-border bg-background px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-foreground"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </article>

            <article className="order-7 border-r-2 border-b-2 border-border bg-card p-6 text-foreground md:order-none md:col-span-2 md:row-span-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Estado</p>
              <p className="mt-2 text-lg font-bold">Publicado</p>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Plataforma</p>
              <p className="mt-2 text-lg font-bold">Android</p>
            </article>

            <article className="order-8 border-r-2 border-b-2 border-border bg-card p-6 text-foreground md:order-none md:col-span-7 md:row-span-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Tecnologias</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(parseTags.length > 0 ? parseTags : ["ML Kit", "Jetpack Compose", "Material 3"]).map((tag) => (
                  <span
                    key={tag}
                    className="flex min-h-10 items-center justify-center border-2 border-border bg-background px-3 py-2 text-center text-xs font-bold text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <Link
              href={parsePlayStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="order-9 group border-r-2 border-b-2 border-border bg-primary p-5 text-primary-foreground transition-colors hover:bg-primary/90 md:order-none md:col-span-3 md:row-span-1"
            >
              <div className="flex h-full items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Proyecto Destacado</p>
                  <h3 className="mt-2 text-xl font-headline font-bold">Ver en Play Store</h3>
                </div>
                <PlayCircle className="h-5 w-5 shrink-0" />
              </div>
            </Link>

            <Link
              href="/projects/parse"
              className="order-10 group border-r-2 border-b-2 border-border bg-accent p-5 text-accent-foreground transition-colors hover:bg-accent/90 md:order-none md:col-span-2 md:row-span-1"
            >
              <div className="flex h-full items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Proyecto Destacado</p>
                  <h3 className="mt-2 text-xl font-headline font-bold">Case Study</h3>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="hidden border-b-2 border-border bg-background md:block md:h-[calc(100svh-56px)] md:overflow-hidden">
        <div className="grid h-full grid-flow-dense grid-cols-6 border-l-2 border-border md:[grid-template-rows:160px_repeat(3,minmax(0,1fr))]">
          <article className="relative col-span-6 flex items-end border-r-2 border-b-2 border-border bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] p-8 text-primary-foreground">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/85">Seccion</p>
              <h2 className="mt-2 text-5xl font-headline font-black uppercase tracking-[0.04em]">Proyectos</h2>
            </div>
          </article>

          {desktopProjectsForHome.map((project, index) => {
            const ventoClass = getDesktopVentoClass(project.slug, index);
            const isImportant = isHomeImportantProject(project.slug);
            const isExpandedTile = ventoClass.includes("col-span-2") || ventoClass.includes("row-span-2");

            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={cn(
                  "group relative flex h-full select-text flex-col items-center justify-center overflow-hidden border-r-2 border-b-2 border-border px-4 py-6 text-center ring-1 ring-inset ring-border transition-colors",
                  isImportant
                    ? "bg-accent/15 hover:bg-accent/25"
                    : "bg-card hover:bg-muted/40",
                  ventoClass
                )}
              >
                {isImportant && (
                  <div className="absolute left-3 top-3 z-10 text-foreground">
                    <span className="inline-block border border-border bg-accent px-2 py-1 text-[9px] font-black uppercase tracking-[0.25em] text-accent-foreground">
                      Importante
                    </span>
                  </div>
                )}

                <h3
                  className={cn(
                    "max-w-[92%] text-balance break-words font-headline font-bold leading-[1.05] text-foreground",
                    isExpandedTile ? "text-[clamp(1.9rem,2.7vw,3.8rem)]" : "text-[clamp(1.4rem,1.7vw,2.6rem)]"
                  )}
                >
                    {project.title}
                </h3>

                {!isImportant && (
                  <p className="mt-2 max-w-[90%] text-balance text-xs font-medium leading-relaxed text-muted-foreground">
                    {getProjectSupportNote(project)}
                  </p>
                )}
              </Link>
            );
          })}

          {hasMoreDesktopProjects && (
            <Link
              href="/projects"
              className="group col-span-2 flex h-full items-center justify-between border-r-2 border-b-2 border-border bg-primary px-6 py-6 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-foreground/85">Mas Proyectos</p>
                <h3 className="mt-2 text-2xl font-headline font-black leading-tight">Ver todos</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  {premiumSortedProjects.length - desktopProjectsForHome.length} adicionales en /projects
                </p>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0" />
            </Link>
          )}
        </div>
      </section>

      <section className="relative min-h-screen border-b-2 border-border bg-background md:hidden">
        <div className="grid grid-flow-dense grid-cols-2 auto-rows-[124px] border-l-2 border-border">
          <article className="col-span-2 flex items-end border-r-2 border-b-2 border-border bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] px-4 py-5 text-primary-foreground">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.28em] text-primary-foreground/85">Seccion</p>
              <h2 className="mt-2 text-3xl font-headline font-black uppercase tracking-[0.06em]">Proyectos</h2>
            </div>
          </article>

          {mobileProjectsForHome.map((project, index) => {
            const isImportant = isHomeImportantProject(project.slug);
            const mobileVentoClass = getMobileVentoClass(project.slug, index);
            const isExpandedTile = mobileVentoClass.includes("col-span-2") || mobileVentoClass.includes("row-span-2");
            return (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={cn(
                  "group relative flex select-text flex-col items-center justify-center border-r-2 border-b-2 border-border px-3 text-center ring-1 ring-inset ring-border",
                  isImportant ? "bg-accent/15" : "bg-card",
                  mobileVentoClass
              )}
            >
              {isImportant && (
                <div className="absolute left-2 top-2">
                  <span className="inline-block border border-border bg-accent px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-accent-foreground">
                    Clave
                  </span>
                </div>
              )}
              <h3 className={cn("text-balance font-headline font-bold leading-tight text-foreground", isExpandedTile ? "text-2xl" : "text-xl")}>{project.title}</h3>

              {!isImportant && (
                <p className="mt-2 max-w-[94%] text-balance text-[11px] font-medium leading-relaxed text-muted-foreground">
                  {getProjectSupportNote(project)}
                </p>
              )}
            </Link>
            );
          })}

          {hasMoreMobileProjects && (
            <Link
              href="/projects"
              className="col-span-2 flex min-h-[124px] items-center justify-between border-r-2 border-b-2 border-border bg-primary px-4 py-5 text-primary-foreground"
            >
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-foreground/85">Mas Proyectos</p>
                <h3 className="mt-2 text-2xl font-headline font-black leading-tight">Ver todos en /projects</h3>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          )}
        </div>
      </section>

      <TechMarquee />

      <section className="border-t-2 border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {techSkills.map((skill, index) => (
            <div key={index} className="border-r-2 border-b-2 border-border">
              <TechCard {...skill} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-border bg-background">
        <div className="grid grid-flow-dense grid-cols-1 border-l-2 border-t-2 border-border md:grid-cols-4 md:auto-rows-[minmax(170px,auto)]">
          <article className="border-r-2 border-b-2 border-border bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] p-6 text-primary-foreground md:col-span-4">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-foreground/85">Seccion</p>
            <h2 className="mt-2 text-4xl font-headline font-black uppercase tracking-[0.04em] md:text-6xl">Reconocimientos</h2>
            <p className="mt-3 max-w-3xl text-sm text-primary-foreground/85 md:text-base">Resultados y publicaciones que respaldan el progreso de producto.</p>
          </article>

          {recognitions.map((rec, index) => (
            <article
              key={index}
              className={cn(
                "h-full overflow-hidden border-r-2 border-b-2 border-border bg-card/40 p-6 md:p-8",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 3 && "md:col-span-2"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-headline font-bold leading-tight">{rec.title}</h3>
                <Award className="h-6 w-6 text-accent" />
              </div>
              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">{rec.issuer}</p>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">{rec.description}</p>
            </article>
          ))}

          <article className="border-r-2 border-b-2 border-border bg-card/30 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">Continuidad</p>
            <h3 className="mt-3 text-2xl font-headline font-bold leading-tight">Proximos Logros</h3>
            <p className="mt-4 text-sm text-muted-foreground">Cada release y cada concurso suman al siguiente nivel del portfolio.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="border-t-2 border-border bg-background">
        <div className="grid grid-flow-dense grid-cols-1 border-l-2 border-t-2 border-border md:grid-cols-4 md:auto-rows-[170px]">
          <article className="border-r-2 border-b-2 border-border bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] p-6 text-primary-foreground md:col-span-2 md:row-span-2 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-foreground/85">Seccion</p>
            <h2 className="mt-2 text-4xl font-headline font-black uppercase tracking-[0.04em] md:text-6xl">Conecta</h2>
            <p className="mt-4 max-w-xl text-sm text-primary-foreground/90 md:text-base">Canales directos para colaboraciones, trabajo y contenido.</p>
          </article>

          {socialLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-r-2 border-b-2 border-border bg-card p-6 text-foreground transition-colors hover:bg-muted/40 md:p-7"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">Canal</p>
                  <link.icon className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
                </div>
                <div className="mt-4">
                  <h3 className="font-headline text-2xl font-bold leading-tight">{link.title}</h3>
                  <p className="mt-2 break-all text-sm text-muted-foreground">{link.handle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
