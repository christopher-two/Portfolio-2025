import Link from 'next/link';
import { projects, socialLinks } from '@/lib/data';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Resumen', href: '/projects/resume' },
  { name: 'Bio', href: '/bio' },
];

export function Footer() {
  const socialMediaLinks = socialLinks.filter(
    (link) => link.title === 'GitHub' || link.title === 'LinkedIn' || link.title === 'Email'
  );

  const featuredProjects = projects.filter((project) =>
    ['parse', 'override-menu', 'override-logistics', 'override-sense'].includes(project.slug)
  );

  return (
    <footer className="w-full border-t-2 border-border bg-background" suppressHydrationWarning>
      <div className="container max-w-screen-xl mx-auto p-8 text-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-bold font-headline text-lg">ChristopherTwo</Link>
            <p className="text-sm text-muted-foreground max-w-[260px]">
              Construyendo productos multiplataforma listos para producción, con foco en Android, KMP e IA aplicada.
            </p>
            <div className="flex gap-4">
              {socialMediaLinks.map((social) => (
                <Link key={social.title} href={social.href} target="_blank" rel="noopener noreferrer" className="block p-2 border-2 border-border bg-background rounded-md shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  <social.icon className="h-6 w-6 text-foreground transition-colors hover:text-accent" />
                  <span className="sr-only">{social.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Proyectos Actuales</h4>
            <ul className="space-y-2">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <Link href={`/projects/${project.slug}`} className="text-muted-foreground hover:text-accent transition-colors">
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
               <li>
                  <Link href="mailto:christopher_two@proton.me" className="text-muted-foreground hover:text-accent transition-colors">
                    Email
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/christopher_two/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    LinkedIn / christopher_two
                  </Link>
                </li>
                <li>
                  <Link href="https://blog.christopher.com.mx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    Blog
                  </Link>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Christopher Alejandro Maldonado Chavez. Portafolio 2026.</p>
          <p className="mt-2 md:mt-0">Parse en Play Store | Override Product Lab</p>
        </div>
      </div>
    </footer>
  );
}
