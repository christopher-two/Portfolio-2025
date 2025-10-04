import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const OverrideLogo = () => (
    <svg
      width="200"
      height="200"
      viewBox="0 0 132 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-32 md:w-48 md:h-48 text-white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.8359 0C51.2359 0 39.3359 11.9 39.3359 26.5C39.3359 34.6 43.6359 41.8 49.9359 45.9C48.7359 49.3 48.1359 53 48.1359 56.8C48.1359 71.4 55.9359 84.1 67.3359 89.4C60.9359 102.3 48.0359 112 32.8359 112C14.7359 112 0.135941 97.4 0.135941 79.3C0.135941 61.2 14.7359 46.6 32.8359 46.6C36.1359 46.6 39.3359 47.2 42.3359 48.3C35.9359 39.6 32.8359 29.2 32.8359 18.2C32.8359 8.1 35.8359 0 39.3359 0H65.8359ZM99.1359 46.6C117.236 46.6 131.836 61.2 131.836 79.3C131.836 97.4 117.236 112 99.1359 112C83.9359 112 71.0359 102.3 64.6359 89.4C76.0359 84.1 83.8359 71.4 83.8359 56.8C83.8359 53 83.2359 49.3 82.0359 45.9C88.3359 41.8 92.6359 34.6 92.6359 26.5C92.6359 11.9 80.7359 0 66.1359 0H92.6359C92.7359 0 96.0359 8.2 96.0359 18.2C96.0359 29.2 93.0359 39.6 86.6359 48.3C89.6359 47.2 92.8359 46.6 96.1359 46.6H99.1359Z"
        fill="currentColor"
      />
    </svg>
  );

export default function OverridePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 animate-fade-in">
      <main className="container mx-auto flex max-w-screen-lg flex-1 flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
        <div className="flex-shrink-0">
            <OverrideLogo />
        </div>

        <div className="flex flex-col items-start gap-8 md:w-1/2">
            <div className="relative w-full overflow-hidden">
                 <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-white select-none">
                    OVERRIDE
                </h1>
                <div className="absolute top-0 left-0 h-1/2 w-full bg-white" />
                <h1 className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-black select-none mix-blend-lighten">
                    OVERRIDE
                </h1>
            </div>
            
            <p className="max-w-prose text-base md:text-lg text-neutral-300">
                En Override diseñamos el futuro con innovación y tecnología.
                Somos una empresa que combina creatividad, tecnología y
                pasión para desarrollar soluciones que transforman ideas en
                realidades. Nos especializamos en el desarrollo de software,
                sistemas embebidos y hardware, ofreciendo una amplia gama de
                servicios que incluyen aplicaciones móviles, páginas web,
                software a medida y productos tecnológicos innovadores.
            </p>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 group">
            <Link href="/projects">
                Detalles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
