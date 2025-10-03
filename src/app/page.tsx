import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Smartphone, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechCard } from "@/components/TechCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";


const techSkills = [
  {
    icon: Code,
    title: "Desarrollo Multiplataforma",
    skills: "Compose Multiplataforma, Kotlin Multiplataforma",
    description: "Cuento con una sólida experiencia en la creación de aplicaciones nativas para Android, iOS, Desktop y Web, todo ello gestionado desde una única base de código. Este enfoque me permite no solo optimizar los tiempos de desarrollo, sino también asegurar una experiencia de usuario consistente y fluida en todas las plataformas, manteniendo la calidad y el rendimiento esperados en cada entorno.",
    bgColor: "bg-skill-1 dark:bg-skill-1-dark"
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    skills: "Jetpack Compose, Kotlin",
    description: "Desde mis inicios en el desarrollo, he estado creando aplicaciones utilizando Jetpack Compose. En este ámbito, me considero un profesional con un nivel mid-senior, aportando una sólida y amplia experiencia en el desarrollo con esta tecnología.",
    bgColor: "bg-skill-2 dark:bg-skill-2-dark"
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    skills: "React, Next.js, Tailwind CSS, Vite",
    description: "Si bien mi área principal de especialización se centra en el desarrollo multiplataforma, también estoy explorando activamente el desarrollo web. He tenido la oportunidad de crear y entregar algunos proyectos web para diversas empresas. En esta faceta, me considero más un aspirante, buscando expandir mis conocimientos y habilidades en el campo.",
    bgColor: "bg-skill-3 dark:bg-skill-3-dark"
  },
  {
    icon: Cpu,
    title: "Backend y Cloud",
    skills: "Ktor, Firebase, Google Cloud, Supabase, Docker",
    description: "Habilidad para construir servicios backend robustos y escalables, así como para desplegar y administrar aplicaciones en la nube utilizando Docker y servicios de Firebase.",
    bgColor: "bg-skill-4 dark:bg-skill-4-dark"
  },
];

const recognitions = [
    {
      title: 'Desarrollador Kotlin Certificado',
      issuer: 'JetBrains',
      year: '2023',
      description: 'Demostrada competencia en el lenguaje de programación Kotlin y su ecosistema.',
    },
    {
      title: 'Google Cloud Certified - Ingeniero de la Nube Asociado',
      issuer: 'Google Cloud',
      year: '2022',
      description: 'Dominio en la implementación de aplicaciones, monitoreo de operaciones y gestión de soluciones empresariales en Google Cloud.',
    },
    {
      title: 'Ganador de Hackathon - Mejor Aplicación Móvil',
      issuer: 'TechCrunch Disrupt',
      year: '2021',
      description: 'Premiado por desarrollar la aplicación móvil más innovadora e impactante durante el hackathon.',
    },
];

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <div className="relative flex h-[calc(100vh-56px)] w-full items-center justify-center bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="container max-w-screen-lg mx-auto text-center px-4">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Christopher Alejandro <br /> Maldonado Chavez
            </h1>

            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Desarrollador Multiplataforma,{" "}
              <span className="relative inline-block border-2 border-border rounded-md px-2 py-1 align-middle">
                <span className="absolute inset-0 scale-x-0 animate-expand-from-center rounded-sm bg-primary/20 origin-center"></span>
                <span className="relative font-bold text-primary">
                  Kotlin Multiplataforma
                </span>
              </span>{" "}
              y Jetpack Compose
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="border-2 border-border font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Link href="/projects">
                  Ver Mi Trabajo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="border-t-2 border-border bg-background overflow-hidden flex min-h-screen">
        <div className="grid md:grid-cols-3 items-stretch w-full">
          <div className="md:col-span-2 space-y-6 container max-w-screen-lg mx-auto py-24 pr-12 flex flex-col justify-center">
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
              Sobre Mí
            </h2>
            <div className="space-y-4 text-muted-foreground md:text-lg max-w-prose">
              <p>
                Soy un Desarrollador Multiplataforma con experiencia en la creación de software. Estoy en el proceso de lanzar mi propia empresa, Override, con el objetivo de desarrollar productos digitales. He trabajado en varios proyectos de software, desde colaboraciones en productos multiplataforma como Quickness, hasta el desarrollo de mis propias aplicaciones como Lumi.
              </p>
              <p>
                Actualmente, me estoy centrando en la tecnología de Jetpack Compose y Compose Multiplataforma. Esto me permite construir productos que funcionan en diferentes sistemas, llegando a más usuarios con una experiencia consistente. Mi compromiso es seguir innovando y mejorando la forma en que la tecnología se conecta con las personas.
              </p>
            </div>
          </div>
          <div className="relative self-end h-full">
             <Image
              src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes/FotoPerfil.JPG"
              alt="Christopher Alejandro Maldonado Chavez"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="border-t-2 border-border flex min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {techSkills.map((skill, index) => (
            <div key={index} className="border-r-2 border-b-2 border-border">
              <TechCard {...skill} />
            </div>
          ))}
        </div>
      </section>
      <section className="border-t-2 border-border flex min-h-screen items-center justify-center bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="container max-w-screen-lg mx-auto py-24 px-4">
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-center mb-12">
                Reconocimientos y Certificados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recognitions.map((rec, index) => (
                    <Card key={index} className="bg-card/80 backdrop-blur-sm border-2 border-border/20 transform transition-transform hover:-translate-y-2 hover:border-accent">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <CardTitle as="h3" className="text-xl font-bold font-headline">{rec.title}</CardTitle>
                                <Award className="h-6 w-6 text-accent ml-4"/>
                            </div>
                            <CardDescription>{rec.issuer} - {rec.year}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{rec.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
