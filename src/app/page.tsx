import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "@/components/ContactForm";

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Email', href: 'mailto:christopher@example.com', icon: Mail },
];

export default function Home() {
  const avatarImage = PlaceHolderImages.find(p => p.id === 'avatar');

  return (
    <div className="container max-w-screen-lg mx-auto py-12 px-4 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-border">

        <div className="md:col-span-2 p-8 border-r-2 border-b-2 border-border">
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              {avatarImage && (
                <Avatar className="h-20 w-20 border-2 border-accent">
                  <AvatarImage src={avatarImage.imageUrl} alt={avatarImage.description} data-ai-hint={avatarImage.imageHint} />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
              )}
              <div>
                <h1 className="text-4xl font-headline font-bold">
                  Christopher Alejandro Maldonado Chavez
                </h1>
                <p className="text-lg text-muted-foreground">Software Developer & Creative Technologist</p>
              </div>
            </div>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                Hello! I'm a passionate developer with a knack for building beautiful, functional, and user-centric web applications. My journey in tech is driven by a curiosity for how things work and a desire to create meaningful digital experiences.
              </p>
              <p>
                With a strong foundation in modern web technologies, I specialize in the frontend ecosystem, particularly with React and Next.js. I enjoy tackling complex problems and turning them into simple, elegant solutions.
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <Button asChild className="transition-all hover:shadow-[0_0_15px_theme(colors.accent)]">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="p-8 border-r-2 border-b-2 border-border bg-secondary/30">
          <section>
            <h2 className="text-3xl font-headline font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">Have a project in mind or just want to say hi? Send me a message.</p>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
