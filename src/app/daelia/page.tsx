import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  {
    id: 'd',
    letter: 'D',
    title: 'ISRUPCIÓN',
    description: "Rompiendo paradigmas establecidos. Si no es diferente, no es Daelia.",
    bgColor: 'bg-blue-950',
    textColor: 'text-blue-300',
    scrollbarColor: 'hsl(224, 71%, 10%)',
    scrollbarHoverColor: 'hsl(224, 71%, 20%)'
  },
  {
    id: 'a',
    letter: 'A',
    title: 'RTE',
    description: "Donde la lógica se encuentra con la estética. Cada píxel cuenta una historia.",
    bgColor: 'bg-blue-900',
    textColor: 'text-blue-400',
    scrollbarColor: 'hsl(224, 71%, 15%)',
    scrollbarHoverColor: 'hsl(224, 71%, 25%)'
  },
  {
    id: 'e',
    letter: 'E',
    title: 'XPLORACIÓN',
    description: "Navegando nuevas fronteras tecnológicas. El mapa no es el territorio.",
    bgColor: 'bg-blue-800',
    textColor: 'text-blue-300',
    scrollbarColor: 'hsl(224, 71%, 20%)',
    scrollbarHoverColor: 'hsl(224, 71%, 30%)'
  },
  {
    id: 'l',
    letter: 'L',
    title: 'ABORATORIO',
    description: "Espacio para la innovación constante. Fallar rápido, aprender más rápido.",
    bgColor: 'bg-blue-700',
    textColor: 'text-blue-200',
    scrollbarColor: 'hsl(224, 71%, 30%)',
    scrollbarHoverColor: 'hsl(224, 71%, 40%)'
  },
  {
    id: 'i',
    letter: 'I',
    title: 'MAGINACIÓN',
    description: "Visualizando lo imposible. Lo que puedes soñar, lo puedes codificar.",
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-100',
    scrollbarColor: 'hsl(224, 71%, 40%)',
    scrollbarHoverColor: 'hsl(224, 71%, 50%)'
  },
  {
    id: 'a2',
    letter: 'A',
    title: 'UDACIA',
    description: "Atrévete a crear diferente. El conformismo es el enemigo de la evolución.",
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-950',
    scrollbarColor: 'hsl(224, 71%, 50%)',
    scrollbarHoverColor: 'hsl(224, 71%, 60%)'
  },
];

export default function DaeliaPage() {
  return (
    <div className="relative">
      <OverrideNav sections={sections} word="DAELIA" />

      {/* Intro Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-blue-950 p-4 md:p-12 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">

          {/* Massive Title */}
          <h1 className="text-[18vw] leading-none font-black font-headline text-blue-100 select-none tracking-tighter">
            DAELIA
          </h1>

          {/* Content Box */}
          <div className="
                w-full max-w-2xl
                border-4 border-blue-200 
                bg-blue-900/50 backdrop-blur-sm
                p-8 md:p-12
                shadow-[12px_12px_0px_0px_rgba(191,219,254,1)]
                flex flex-col gap-8
            ">
            <p className="font-mono text-lg md:text-xl text-blue-200 font-bold leading-relaxed">
              Laboratorio de experiencias digitales y diseño experimental. Donde la creatividad se encuentra con el código para crear interfaces únicas que desafían lo convencional.
            </p>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <button className="
                        px-8 py-4 
                        bg-blue-200 text-blue-950 
                        font-headline font-bold text-xl uppercase tracking-widest
                        border-4 border-transparent
                        hover:bg-blue-100 transition-colors
                        shadow-[4px_4px_0px_0px_#1e3a8a]
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    ">
                Ver Experimentos
              </button>
              <button className="
                        px-8 py-4 
                        bg-transparent text-blue-100 
                        font-headline font-bold text-xl uppercase tracking-widest
                        border-4 border-blue-200
                        hover:bg-blue-200 hover:text-blue-950 transition-colors
                        shadow-[4px_4px_0px_0px_#1e3a8a]
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    ">
                Descargar App
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 text-[10rem] text-blue-800 font-black rotate-[-10deg]">D</div>
          <div className="absolute bottom-10 right-10 text-[15rem] text-blue-800 font-black rotate-[20deg]">A</div>
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
      <section className="relative flex min-h-screen items-center justify-center bg-blue-950 p-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-[10vw] leading-[0.9] font-black font-headline text-blue-100 select-none tracking-tighter opacity-90">
            EL FUTURO<br />NO SE ESPERA,<br />SE DISEÑA.
          </h2>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
      </section>
    </div>
  );
}
