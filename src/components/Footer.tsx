import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { projects } from '@/lib/data';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Override', href: '/override' },
  { name: 'Proyectos', href: '/projects' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Chris-Alejandro', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/christopher-alejandro-maldonado-chavez/', icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-border bg-background" suppressHydrationWarning>
      <div className="container max-w-screen-lg mx-auto p-8 text-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand and Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-bold font-headline text-lg">ChristopherTwo</Link>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="block p-2 border-2 border-border bg-background rounded-md shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  <social.icon className="h-6 w-6 text-foreground transition-colors hover:text-accent" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
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

          {/* Projects */}
          <div>
            <h4 className="font-headline font-semibold mb-4">Proyectos</h4>
            <ul className="space-y-2">
              {projects.slice(0, 3).map((project) => (
                <li key={project.id}>
                  <Link href={`/projects/${project.slug}`} className="text-muted-foreground hover:text-accent transition-colors">
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="font-headline font-semibold mb-4">Otros</h4>
            <ul className="space-y-2">
               <li>
                  <Link href="mailto:christopher_two@proton.me" className="text-muted-foreground hover:text-accent transition-colors">
                    Email
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
          <p>&copy; {new Date().getFullYear()} Christopher Alejandro Maldonado Chavez. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Desarrollado con &lt;3 por Override</p>
        </div>
      </div>
    </footer>
  );
}
