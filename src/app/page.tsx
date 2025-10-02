import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <div className="relative flex h-[calc(100vh-56px)] w-full items-center justify-center bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="container max-w-screen-lg mx-auto text-center px-4">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Christopher Alejandro <br /> Maldonado Chavez
            </h1>

            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
              A passionate developer building{" "}
              <span className="relative inline-block border-2 border-border bg-primary/20 px-2 py-1 rounded-md">
                <Sparkles className="absolute -top-4 -left-4 h-6 w-6 text-accent" />
                <Sparkles className="absolute -bottom-4 -right-4 h-6 w-6 text-accent" />
                functional & beautiful
              </span>{" "}
              web applications.
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="border-2 border-border font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
