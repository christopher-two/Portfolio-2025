import { projects } from "@/lib/data";
import ReactMarkdown from "react-markdown";

export default function ResumePage() {
  return (
    <div className="container max-w-4xl mx-auto py-20 px-6">
      <header className="mb-16 border-b-4 border-border pb-8">
        <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">
          Project Resume
        </h1>
        <p className="text-xl text-muted-foreground font-bold uppercase tracking-widest">
          Consolidado técnico de proyectos y capacidades
        </p>
      </header>

      <div className="space-y-20">
        {projects.map((project) => (
          <article key={project.id} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
              <h2 className="text-4xl font-black uppercase tracking-tight group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span 
                    key={cat} 
                    className="px-3 py-1 bg-border text-background text-xs font-black uppercase tracking-widest"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1 space-y-4">
                <div>
                  <h3 className="text-xs font-black uppercase text-muted-foreground mb-2">Tecnologías</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold border border-border/30 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <div>
                    <h3 className="text-xs font-black uppercase text-muted-foreground mb-1">Link</h3>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      className="text-xs font-bold underline decoration-2 hover:text-accent transition-colors break-all"
                    >
                      {project.link.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              </div>

              <div className="md:col-span-3 prose dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:leading-relaxed prose-strong:text-accent">
                <ReactMarkdown>{project.longDescription}</ReactMarkdown>
              </div>
            </div>
            
            <div className="mt-12 border-t border-border/10" />
          </article>
        ))}
      </div>

      <footer className="mt-20 pt-8 border-t-4 border-border text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
          Christopher Alejandro Maldonado Chavez &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
