"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";


const mainNavLinks = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
];

const featuredNavLinks = [
    { href: "/override", label: "Override" },
    { href: "/lumi", label: "Lumi" },
    { href: "/daelia", label: "Daelia" },
]

function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
    const pathname = usePathname();
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const renderLink = (link: {href: string, label: string}) => {
        const linkElement = (
             <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "transition-colors hover:text-foreground/80",
                    isClient && pathname === link.href ? "text-foreground" : "text-foreground/60",
                    isMobile && "py-2 text-lg"
                )}
            >
                {link.label}
            </Link>
        );

        if (isMobile) {
            return <SheetClose asChild>{linkElement}</SheetClose>;
        }
        return linkElement;
    }
    
    const separator = <span className={cn("text-foreground/60", isMobile && "py-2 text-lg")}>|</span>;

    const navItems = [
        ...mainNavLinks.map(renderLink),
        separator,
        ...featuredNavLinks.map(renderLink),
    ];
    
    if (isMobile) {
        return (
            <nav className="flex flex-col items-start gap-4 p-4">
                 {navItems}
            </nav>
        );
    }

    return (
        <nav className="hidden items-center gap-6 text-sm md:flex">
             {navItems}
        </nav>
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
          <NavLinks />
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-2 border-border bg-background rounded-md shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <NavLinks isMobile={true} />
              </SheetContent>
            </Sheet>
          </div>
           <Button asChild variant="outline" size="icon" className="hidden md:flex border-2 border-border bg-background rounded-md shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
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
