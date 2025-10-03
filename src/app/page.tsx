import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              Desarrollador Multiplataforma, Kotlin Multiplataforma y Jetpack Compose
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="border-2 border-border font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="border-t-2 border-border bg-background overflow-hidden">
        <div className="grid md:grid-cols-3 items-stretch">
          <div className="md:col-span-2 space-y-6 container max-w-screen-lg mx-auto py-24 pr-12">
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
              About Me
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
          <div className="relative min-h-[320px] md:min-h-0">
             <Image
              src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes/foto.png"
              alt="Christopher Alejandro Maldonado Chavez"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 animate-neon-border rounded-md pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
