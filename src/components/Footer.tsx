import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Email', href: 'mailto:christopher@example.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 h-auto py-4 md:h-20 md:py-0 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Christopher Alejandro Maldonado Chavez.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
              <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
