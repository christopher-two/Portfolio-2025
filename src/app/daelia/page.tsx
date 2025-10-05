
import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  { id: 'd', letter: 'D', title: 'iseño', bgColor: 'bg-black', textColor: 'text-neutral-300' },
  { id: 'a', letter: 'A', title: 'rte', bgColor: 'bg-neutral-900', textColor: 'text-neutral-400' },
  { id: 'e', letter: 'E', title: 'legancia', bgColor: 'bg-neutral-800', textColor: 'text-neutral-500' },
  { id: 'l', letter: 'L', title: 'ibertad', bgColor: 'bg-neutral-700', textColor: 'text-neutral-300' },
  { id: 'i', letter: 'I', title: 'nspiración', bgColor: 'bg-neutral-600', textColor: 'text-neutral-200' },
  { id: 'a2', letter: 'A', title: 'rmonía', bgColor: 'bg-neutral-500', textColor: 'text-neutral-800' },
];

export default function DaeliaPage() {
  return (
    <div className="relative">
      <OverrideNav sections={sections} word="DAELIA" />
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
