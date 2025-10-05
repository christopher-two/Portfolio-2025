"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import React from "react";

const mainNavLinks = [
  { href: "/", label: "Inicio" },
  { href: "/override", label: "Override" },
  { href: "/projects", label: "Proyectos" },
];

const featuredNavLinks = [
    { href: "/lumi", label: "Lumi" },
    { href: "/daelia", label: "Daelia" },
]

function NavLinks() {
    const pathname = usePathname();
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const renderLink = (link: {href: string, label: string}) => (
        <Link
            key={link.href}
            href={link.href}
            className={cn(
                "transition-colors hover:text-foreground/80",
                isClient && pathname === link.href ? "text-foreground" : "text-foreground/60"
            )}
        >
            {link.label}
        </Link>
    );

    return (
        <>
            {mainNavLinks.map(renderLink)}
            <span className="text-foreground/60">|</span>
            {featuredNavLinks.map(renderLink)}
        </>
    );
}

export function Header() {

  return (
    <header className="w-full border-b-2 border-border bg-background" suppressHydrationWarning>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline">ChristopherTwo</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
             <NavLinks />
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
           <Button asChild variant="outline" size="icon" className="border-2 border-border bg-background rounded-md shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            <Link href="https://github.com/Chris-Alejandro" target="_blank">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}