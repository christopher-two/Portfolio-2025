import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Smartphone, Award, Download, MessageSquare, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechCard } from "@/components/TechCard";
import { Card, CardContent } from "@/components/ui/card";
import { TechMarquee } from "@/components/TechMarquee";
import { AnimatedName } from "@/components/AnimatedName";
import { socialLinks, projects } from "@/lib/data";
import { getProjectImages } from "@/lib/r2-client";
import { cn } from "@/lib/utils";
import profileImage from "@/assets/images/IMG_6195.jpg";

const parsePlayStoreUrl = "https://play.google.com/store/apps/details?id=org.christophertwo.parse&pcampaignid=web_share";

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

export default async function Home() {
  const projectsWithCovers = await Promise.all(
    projects.map(async (project) => {
      if (!project.r2Folder) return { ...project, coverImage: "" };
      const images = await getProjectImages(project.r2Folder);
      return {
        ...project,
        coverImage: images[0]?.url || ""
      };
    })
  );

  const parseProject = projectsWithCovers.find((project) => project.slug === "parse");
  const desktopRows = Math.ceil((projectsWithCovers.length + (parseProject ? 3 : 0)) / 6);
  const mobileOffsets = ["-translate-y-8", "translate-y-6", "-translate-y-2", "translate-y-10"];

  return (
    <div className="flex-1 w-full">
      <section className="relative min-h-screen border-b-2 border-border bg-background bg-[radial-gradient(circle_at_top_left,#8f5eff1f,transparent_40%),linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:auto,24px_24px,24px_24px]">
        <div className="mx-auto grid min-h-screen w-full max-w-screen-2xl items-center gap-8 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-in space-y-8">
            <AnimatedName />
            <p className="max-w-[760px] text-muted-foreground text-lg md:text-xl">
              Desarrollo productos multiplataforma con foco en rendimiento, arquitectura limpia y experiencia real de usuario.
              Hoy, el proyecto que más está creciendo es Parse: un lector Android publicado y en evolución continua.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg" className="border-2 border-border font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Ver Mi Trabajo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="secondary" size="lg" className="border-2 border-border font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Contacto <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/sign/docs/CV-2026.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84OTUzOTBiNi0zZDUxLTQ4MGMtOWJjNC03NzE4ZmNhOWVkNjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2NzL0NWLTIwMjYucGRmIiwiaWF0IjoxNzY1NTE1OTY2LCJleHAiOjE3OTcwNTE5NjZ9.o2DBshiz7dqCMbht2ybjK2xGZnV7oo_eH-w3Dbqa2EE" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-2 border-border font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Descargar CV <Download className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="group relative h-[70vh] min-h-[420px] overflow-hidden border-2 border-border bg-black shadow-[8px_8px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-2 hover:translate-y-2">
            {parseProject?.coverImage && (
              <Image
                src={parseProject.coverImage}
                alt="Parse en Google Play"
                fill
                className="object-cover opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-45"
                unoptimized={parseProject.coverImage.toLowerCase().endsWith(".gif")}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8 text-white">
              <div className="inline-flex w-fit items-center gap-2 border border-white/30 bg-black/50 px-3 py-1 text-xs font-black uppercase tracking-[0.2em]">
                <Sparkles className="h-4 w-4" />
                Proyecto Destacado
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Parse</h2>
                <p className="max-w-xl text-sm md:text-base text-white/85">
                  Lector moderno para Android con traducción inteligente, navegación avanzada y diseño minimalista.
                  Ya está publicado en Google Play Store.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href={parsePlayStoreUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="border-2 border-white bg-white text-black font-bold hover:bg-white/90">
                      Ver en Play Store <PlayCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/projects/parse">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                      Case Study <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden h-screen border-b-2 border-border bg-background md:block">
        <div
          className="grid h-full grid-cols-6 border-l-2 border-border"
          style={{ gridTemplateRows: `repeat(${desktopRows}, minmax(0, 1fr))` }}
        >
          {projectsWithCovers.map((project) => {
            const isParse = project.slug === "parse";

            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={cn(
                  "group relative overflow-hidden border-r-2 border-b-2 border-border bg-black",
                  isParse && "col-span-2 row-span-2"
                )}
              >
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
                    unoptimized={project.coverImage.toLowerCase().endsWith(".gif")}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/70">
                    {isParse ? "Publicado" : "Proyecto"}
                  </span>
                  <h3 className="text-base lg:text-xl font-headline font-bold leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="h-screen border-b-2 border-border bg-background md:hidden">
        <div className="flex h-full snap-x snap-mandatory items-center gap-3 overflow-x-auto overflow-y-hidden px-2 no-scrollbar">
          {projectsWithCovers.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={cn(
                "group relative h-[82vh] w-[78vw] min-w-[78vw] max-w-[340px] shrink-0 snap-center overflow-hidden border-2 border-border bg-black",
                mobileOffsets[index % mobileOffsets.length]
              )}
            >
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
                  unoptimized={project.coverImage.toLowerCase().endsWith(".gif")}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white">
                <span className="mb-2 text-[9px] font-black uppercase tracking-[0.25em] text-white/80">Mapa de Proyectos</span>
                <h3 className="text-2xl font-headline font-bold leading-tight">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b-2 border-border bg-background overflow-hidden">
        <div className="grid md:grid-cols-2 items-stretch w-full">
          <div className="md:col-span-1 space-y-6 container max-w-screen-lg mx-auto py-24 pr-12 flex flex-col justify-center">
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
              Sobre Mí
            </h2>
            <div className="space-y-4 text-muted-foreground md:text-lg max-w-prose">
              <p>
                Soy un <span className="relative inline-block border-2 border-border rounded-md px-2 py-1 align-middle">
                  <span className="absolute inset-0 scale-x-0 animate-expand-from-center rounded-sm bg-primary/20 origin-center"></span>
                  <span className="relative font-bold text-primary">
                    Desarrollador Multiplataforma
                  </span>
                </span> enfocado en construir productos que lleguen a producción y escalen.
                Mi trabajo reciente se concentra en Parse, Override Menu, Override Logistics y Override Sense.
              </p>
              <p>
                Actualmente priorizo arquitectura limpia, IA aplicada y experiencias consistentes entre Android, Web y Desktop.
                El objetivo es convertir ideas en productos lanzables con roadmap claro, buen rendimiento y valor real para usuarios.
              </p>
            </div>
          </div>
          <div className="relative md:col-span-1 w-full min-h-[400px] md:min-h-0">
            <div className="md:absolute md:inset-0">
              <div className="relative h-full w-full aspect-video">
                <Image
                  src={profileImage}
                  alt="Christopher Alejandro Maldonado Chavez"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
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
        <div className="flex items-center justify-between border-b-2 border-border px-4 py-6 md:px-8">
          <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-tighter">
            Reconocimientos y Certificados
          </h2>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Vento Grid</span>
        </div>
        <div className="grid grid-cols-1 border-l-2 border-border md:grid-cols-4">
          {recognitions.map((rec, index) => (
            <article
              key={index}
              className={cn(
                "border-r-2 border-b-2 border-border p-6 md:p-8 bg-card/40",
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
        </div>
      </section>

      <section id="contact" className="border-t-2 border-border bg-background">
        <div className="container max-w-screen-lg mx-auto py-24 px-4">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Conecta Conmigo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link) => (
              <Link key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full bg-card/80 backdrop-blur-sm border-2 border-border shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <link.icon className="h-10 w-10 text-accent mb-4 transition-transform group-hover:scale-110" />
                    <h3 className="font-bold font-headline text-lg">{link.title}</h3>
                    <p className="text-sm text-muted-foreground break-all">{link.handle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
