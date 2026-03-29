import Link from "next/link";
import { type SocialLink } from "@/features/projects/data/projects.repository";

type HomeContactSectionProps = {
  socialLinks: SocialLink[];
};

export function HomeContactSection({ socialLinks }: HomeContactSectionProps) {
  return (
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
  );
}
