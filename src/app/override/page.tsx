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
            {index === 0 ? (
             <div className="container mx-auto max-w-screen-xl w-full h-full flex items-center justify-between">
                <div
                    aria-hidden="true"
                    className={`pointer-events-none text-[30vw] lg:text-[25vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}
                >
                    {section.letter}
                </div>
                <h1 className={`pointer-events-none text-[15vw] lg:text-[10vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}>VERRIDE</h1>
              </div>
            ) : (
                <div
                aria-hidden="true"
                className={`pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[30vw] lg:text-[25vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}
              >
                {section.letter}
              </div>
            )}
        </section>
      ))}
    </div>
  );
}
