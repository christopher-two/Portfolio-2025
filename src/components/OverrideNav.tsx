"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type OverrideNavProps = {
  sections: { id: string; letter: string }[];
};

export function OverrideNav({ sections }: OverrideNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [revealedLetters, setRevealedLetters] = useState(new Set([sections[0]?.id]));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setRevealedLetters(prev => {
              const newSet = new Set(prev);
              const currentIndex = sections.findIndex(s => s.id === entry.target.id);
              for (let i = 0; i <= currentIndex; i++) {
                newSet.add(sections[i].id);
              }
              return newSet;
            });
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const word = "OVERRIDE";

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-50 p-4">
      <ul className="flex flex-col items-center justify-center gap-2">
        {word.split('').map((char, index) => {
          const section = sections[index];
          if (!section) return null;

          const isRevealed = revealedLetters.has(section.id);
          const isActive = activeSection === section.id;

          return (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-md border-2 font-bold font-headline transition-all duration-300",
                  "border-border bg-background shadow-[4px_4px_0px_theme(colors.border)]",
                  isRevealed ? "text-foreground" : "text-muted-foreground",
                  isActive ? "shadow-none translate-x-1 translate-y-1" : "hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                )}
                aria-label={`Scroll to section ${char}`}
              >
                {isRevealed ? char : '•'}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
