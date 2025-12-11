import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  {
    id: 'l',
    letter: 'L',
    title: 'UZ',
    description: "Iluminando ideas con simplicidad. Claridad en cada función.",
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-900',
    scrollbarColor: 'hsl(54, 100%, 80%)',
    scrollbarHoverColor: 'hsl(54, 100%, 70%)'
  },
  {
    id: 'u',
    letter: 'U',
    title: 'TILIDAD',
    description: "Herramientas que resuelven problemas reales. Sin adornos innecesarios.",
    bgColor: 'bg-yellow-200',
    textColor: 'text-yellow-900',
    scrollbarColor: 'hsl(54, 100%, 75%)',
    scrollbarHoverColor: 'hsl(54, 100%, 65%)'
  },
  {
    id: 'm',
    letter: 'M',
    title: 'AGIA',
    description: "La tecnología avanzada es indistinguible de la magia. Sorprende en cada interacción.",
    bgColor: 'bg-yellow-300',
    textColor: 'text-yellow-800',
    scrollbarColor: 'hsl(54, 100%, 70%)',
    scrollbarHoverColor: 'hsl(54, 100%, 60%)'
  },
  {
    id: 'i',
    letter: 'I',
    title: 'NTELIGENCIA',
    description: "Potenciando la creatividad humana con IA. Tus ideas, multiplicadas.",
    bgColor: 'bg-yellow-400',
    textColor: 'text-yellow-950',
    scrollbarColor: 'hsl(54, 100%, 65%)',
    scrollbarHoverColor: 'hsl(54, 100%, 55%)'
  },
];

export default function LumiPage() {
  return (
    <div className="relative">
      <OverrideNav sections={sections} word="LUMI" />

      {/* Intro Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-yellow-100 p-4 md:p-12 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">

          {/* Massive Title */}
          <h1 className="text-[25vw] leading-none font-black font-headline text-yellow-950 select-none tracking-tighter">
            LUMI
          </h1>

          {/* Content Box */}
          <div className="
                w-full max-w-2xl
                border-4 border-yellow-950 
                bg-yellow-50/50 backdrop-blur-sm
                p-8 md:p-12
                shadow-[12px_12px_0px_0px_rgba(66,32,6,1)]
                flex flex-col gap-8
            ">
            <p className="font-mono text-lg md:text-xl text-yellow-900 font-bold leading-relaxed">
              Utilidades inteligentes impulsadas por IA. Simplificamos tareas complejas con herramientas intuitivas y potentes que se sienten como magia.
            </p>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <button className="
                        px-8 py-4 
                        bg-yellow-950 text-yellow-100 
                        font-headline font-bold text-xl uppercase tracking-widest
                        border-4 border-transparent
                        hover:bg-yellow-800 transition-colors
                        shadow-[4px_4px_0px_0px_#ca8a04]
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    ">
                Probar Lumi
              </button>
              <button className="
                        px-8 py-4 
                        bg-transparent text-yellow-950 
                        font-headline font-bold text-xl uppercase tracking-widest
                        border-4 border-yellow-950
                        hover:bg-yellow-200 transition-colors
                        shadow-[4px_4px_0px_0px_#ca8a04]
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    ">
                Generar QR
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 text-[12rem] text-yellow-600 font-black rotate-[-15deg]">L</div>
          <div className="absolute bottom-10 right-10 text-[18rem] text-yellow-600 font-black rotate-[15deg]">U</div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative flex min-h-screen items-center overflow-hidden ${section.bgColor} p-4 md:p-12`}
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pointer-events-none gap-8">
            {/* Big Letter and Title */}
            <div className="flex items-baseline relative z-0">
              <div
                aria-hidden="true"
                className={`text-[30vh] md:text-[40vh] font-black font-headline select-none ${section.textColor} opacity-20 leading-none`}
              >
                {section.letter}
              </div>
              <h2 className={`text-[8vh] md:text-[12vh] font-bold font-headline select-none ${section.textColor} opacity-40 leading-none -ml-4 md:-ml-8`}>
                {section.title}
              </h2>
            </div>

            {/* Description Box - Neobrutalist */}
            <div className={`
                    relative z-10 w-full max-w-lg 
                    border-4 border-current ${section.textColor}
                    p-6 md:p-8 
                    backdrop-blur-sm bg-black/10
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]
                `}>
              <p className={`font-mono text-lg md:text-xl font-bold ${section.textColor} opacity-90`}>
                {section.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* Final Phrase Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-yellow-400 p-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-[15vw] leading-[0.8] font-black font-headline text-yellow-950 select-none tracking-tighter opacity-90">
            MAGIA EN<br />CADA PÍXEL.
          </h2>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a16207_1px,transparent_1px),linear-gradient(to_bottom,#a16207_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
      </section>
    </div>
  );
}
