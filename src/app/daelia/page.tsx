
import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  { id: 'd', letter: 'D', title: 'iseño', bgColor: 'bg-blue-950', textColor: 'text-blue-300', scrollbarColor: 'hsl(224, 71%, 10%)', scrollbarHoverColor: 'hsl(224, 71%, 20%)' },
  { id: 'a', letter: 'A', title: 'rte', bgColor: 'bg-blue-900', textColor: 'text-blue-400', scrollbarColor: 'hsl(224, 71%, 15%)', scrollbarHoverColor: 'hsl(224, 71%, 25%)' },
  { id: 'e', letter: 'E', title: 'legancia', bgColor: 'bg-blue-800', textColor: 'text-blue-300', scrollbarColor: 'hsl(224, 71%, 20%)', scrollbarHoverColor: 'hsl(224, 71%, 30%)' },
  { id: 'l', letter: 'L', title: 'ibertad', bgColor: 'bg-blue-700', textColor: 'text-blue-200', scrollbarColor: 'hsl(224, 71%, 30%)', scrollbarHoverColor: 'hsl(224, 71%, 40%)' },
  { id: 'i', letter: 'I', title: 'nspiración', bgColor: 'bg-blue-600', textColor: 'text-blue-100', scrollbarColor: 'hsl(224, 71%, 40%)', scrollbarHoverColor: 'hsl(224, 71%, 50%)' },
  { id: 'a2', letter: 'A', title: 'rmonía', bgColor: 'bg-blue-500', textColor: 'text-blue-950', scrollbarColor: 'hsl(224, 71%, 50%)', scrollbarHoverColor: 'hsl(224, 71%, 60%)' },
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
