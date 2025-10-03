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
              A passionate developer building{" "}
              <span className="relative inline-block border-2 border-border bg-primary/20 px-2 py-1 rounded-md">
                <Sparkles className="absolute -top-4 -left-4 h-6 w-6 text-accent" />
                <Sparkles className="absolute -bottom-4 -right-4 h-6 w-6 text-accent" />
                functional & beautiful
              </span>{" "}
              web applications.
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
      <section className="border-t-2 border-border bg-background">
        <div className="container max-w-screen-lg mx-auto py-16 px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground md:text-lg">
                <p>
                  Hello! I&apos;m a passionate developer with a knack for building beautiful, functional, and user-centric web applications. My journey in tech is driven by a curiosity for how things work and a desire to create meaningful digital experiences.
                </p>
                <p>
                  With a strong foundation in modern web technologies, I specialize in the frontend ecosystem, particularly with React and Next.js. I enjoy tackling complex problems and turning them into simple, elegant solutions.
                </p>
              </div>
            </div>
            <div className="relative h-64 w-64 mx-auto md:h-80 md:w-80 overflow-hidden rounded-md">
               <Image
                src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes/foto.png"
                alt="Christopher Alejandro Maldonado Chavez"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
