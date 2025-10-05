
import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  { id: 'l', letter: 'L', title: 'uz', bgColor: 'bg-black', textColor: 'text-neutral-300' },
  { id: 'u', letter: 'U', title: 'nión', bgColor: 'bg-neutral-900', textColor: 'text-neutral-400' },
  { id: 'm', letter: 'M', title: 'agia', bgColor: 'bg-neutral-800', textColor: 'text-neutral-500' },
  { id: 'i', letter: 'I', title: 'lusión', bgColor: 'bg-neutral-700', textColor: 'text-neutral-300' },
];

export default function LumiPage() {
  return (
    <div className="relative">
      <OverrideNav sections={sections} word="LUMI" />
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
