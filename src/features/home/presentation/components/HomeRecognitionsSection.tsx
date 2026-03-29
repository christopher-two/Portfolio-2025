import { Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { homeRecognitions } from "@/features/home/domain/home.constants";

export function HomeRecognitionsSection() {
  return (
    <section className="border-t-2 border-border bg-background">
      <div className="grid grid-flow-dense grid-cols-1 border-l-2 border-t-2 border-border md:grid-cols-4 md:auto-rows-[minmax(170px,auto)]">
        <article className="border-r-2 border-b-2 border-border bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] p-6 text-primary-foreground md:col-span-4">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-foreground/85">Seccion</p>
          <h2 className="mt-2 text-4xl font-headline font-black uppercase tracking-[0.04em] md:text-6xl">Reconocimientos</h2>
          <p className="mt-3 max-w-3xl text-sm text-primary-foreground/85 md:text-base">Resultados y publicaciones que respaldan el progreso de producto.</p>
        </article>

        {homeRecognitions.map((recognition, index) => (
          <article
            key={`${recognition.title}-${index}`}
            className={cn(
              "h-full overflow-hidden border-r-2 border-b-2 border-border bg-card/40 p-6 md:p-8",
              index === 0 && "md:col-span-2 md:row-span-2",
              index === 3 && "md:col-span-2"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-headline font-bold leading-tight">{recognition.title}</h3>
              <Award className="h-6 w-6 text-accent" />
            </div>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">{recognition.issuer}</p>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">{recognition.description}</p>
          </article>
        ))}

        <article className="border-r-2 border-b-2 border-border bg-card/30 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">Continuidad</p>
          <h3 className="mt-3 text-2xl font-headline font-bold leading-tight">Proximos Logros</h3>
          <p className="mt-4 text-sm text-muted-foreground">Cada release y cada concurso suman al siguiente nivel del portfolio.</p>
        </article>
      </div>
    </section>
  );
}
