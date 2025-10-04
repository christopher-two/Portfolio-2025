
import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  { id: 'o', letter: 'O', title: 'VERRIDE', bgColor: 'bg-black', textColor: 'text-neutral-300' },
  { id: 'v', letter: 'V', title: 'isión', bgColor: 'bg-neutral-900', textColor: 'text-neutral-400' },
  { id: 'e', letter: 'E', title: 'xcelencia', bgColor: 'bg-neutral-800', textColor: 'text-neutral-500' },
  { id: 'r', letter: 'R', title: 'esultados', bgColor: 'bg-neutral-700', textColor: 'text-neutral-300' },
  { id: 'r2', letter: 'R', title: 'espaldo', bgColor: 'bg-neutral-600', textColor: 'text-neutral-200' },
  { id: 'i', letter: 'I', title: 'nnovación', bgColor: 'bg-neutral-500', textColor: 'text-neutral-800' },
  { id: 'd', letter: 'D', title: 'esarrollo', bgColor: 'bg-neutral-400', textColor: 'text-neutral-900' },
  { id: 'e2', letter: 'E', title: 'ficiencia', bgColor: 'bg-neutral-300', textColor: 'text-black' },
];

export default function OverridePage() {
  return (
    <div className="relative">
      <OverrideNav sections={sections} />
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative flex min-h-screen items-center justify-start overflow-hidden ${section.bgColor}`}
        >
            <div className="w-full flex items-center justify-start">
                <div
                    aria-hidden="true"
                    className={`pointer-events-none text-[30vw] lg:text-[25vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none pl-4`}
                >
                    {section.letter}
                </div>
                <h1 className={`pointer-events-none text-[10vw] lg:text-[8vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}>
                  {section.title}
                </h1>
              </div>
        </section>
      ))}
    </div>
  );
}
