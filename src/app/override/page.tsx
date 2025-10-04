import { OverrideLogo } from '@/components/OverrideLogo';
import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  { id: 'o', letter: 'O', bgColor: 'bg-black', textColor: 'text-white' },
  { id: 'v', letter: 'V', bgColor: 'bg-neutral-800', textColor: 'text-neutral-300' },
  { id: 'e', letter: 'E', bgColor: 'bg-neutral-900', textColor: 'text-neutral-400' },
  { id: 'r', letter: 'R', bgColor: 'bg-neutral-700', textColor: 'text-neutral-200' },
  { id: 'r2', letter: 'R', bgColor: 'bg-neutral-800', textColor: 'text-neutral-300' },
  { id: 'i', letter: 'I', bgColor: 'bg-black', textColor: 'text-white' },
  { id: 'd', letter: 'D', bgColor: 'bg-neutral-900', textColor: 'text-neutral-400' },
  { id: 'e2', letter: 'E', bgColor: 'bg-neutral-700', textColor: 'text-neutral-200' },
];

export default function OverridePage() {
  return (
    <div className="relative">
      <OverrideNav sections={sections} />
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative flex min-h-screen items-center justify-center overflow-hidden p-4 ${section.bgColor}`}
        >
          <div className="container mx-auto max-w-screen-lg w-full h-full flex items-center">
            {index === 0 ? (
              <div className="flex flex-col items-center gap-8 text-white relative z-10 animate-fade-in w-full">
                <div className="flex items-center justify-center w-full">
                  <div
                    aria-hidden="true"
                    className="text-[10rem] font-bold font-headline text-white opacity-50"
                  >
                    O
                  </div>
                  <div className="flex flex-col -ml-8">
                    <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter">
                      VERRIDE
                    </h1>
                    <div className="flex items-center gap-4 mt-2">
                       <OverrideLogo className="w-12 h-12" />
                       <p className="text-sm text-muted-foreground max-w-xs">
                          En Override diseñamos el futuro con innovación y tecnología.
                       </p>
                    </div>
                  </div>
                </div>
                 <p className="text-muted-foreground md:text-lg text-center max-w-prose">
                    Somos una empresa que combina creatividad, tecnología y pasión para desarrollar soluciones que transforman ideas en realidades. Nos especializamos en el desarrollo de software, sistemas embebidos y hardware, ofreciendo una amplia gama de servicios que incluyen aplicaciones móviles, páginas web, software a medida y productos tecnológicos innovadores.
                  </p>
              </div>
            ) : null}
          </div>
          {index > 0 && (
             <div
              aria-hidden="true"
              className={`pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[40rem] lg:text-[50rem] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}
            >
              {section.letter}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
