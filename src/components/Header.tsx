"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Github, Search, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b-2 border-border bg-background" suppressHydrationWarning>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground font-bold p-2 rounded-md">
              C
            </div>
            <span className="font-bold font-headline hidden sm:inline-block">ChristopherTwo</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
           <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 text-muted-foreground w-40 justify-between"
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search
            </div>
            <div className="flex items-center gap-1 border rounded-md px-1 py-0.5 text-xs">
              <Command className="h-3 w-3"/>K
            </div>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com" target="_blank">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
           <Button variant="outline" size="icon" asChild>
            <Link href="https://x.com" target="_blank">
              <Twitter className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
