import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MessageSquare, PlayCircle, Sparkles } from "lucide-react";
import { AnimatedName } from "@/components/AnimatedName";
import { parsePlayStoreUrl } from "@/features/home/domain/home.constants";
import { type Project } from "@/features/projects/data/projects.repository";
import profileImage from "@/assets/images/IMG_6195.jpg";

type HomeHeroSectionProps = {
  parseData?: Project;
};

export function HomeHeroSection({ parseData }: HomeHeroSectionProps) {
  const parseCategories = parseData?.categories ?? [];
  const parseTags = parseData?.tags?.slice(0, 6) ?? [];

  return (
    <section className="relative min-h-screen border-b-2 border-border bg-background bg-[radial-gradient(circle_at_top_left,#8f5eff1f,transparent_40%),linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:auto,24px_24px,24px_24px] md:min-h-[calc(100vh-56px)] md:min-h-[calc(100dvh-56px)] md:h-[calc(100vh-56px)] md:h-[calc(100dvh-56px)]">
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
              {parseData?.description ?? "Lector moderno para Android con traduccion inteligente, navegacion avanzada y diseno minimalista."}
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
  );
}
