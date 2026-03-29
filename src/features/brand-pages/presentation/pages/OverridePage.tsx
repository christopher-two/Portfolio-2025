import { OverrideNav } from '@/components/OverrideNav';
import { getOverrideSections } from '@/features/brand-pages/data/brand-pages.repository';

export default function OverridePage() {
  const sections = getOverrideSections();

  return (
    <div className="relative">
      <OverrideNav sections={sections} />

      {/* Intro Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-4 md:p-12 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">

          {/* Massive Title */}
          <h1 className="text-[15vw] leading-none font-black font-headline text-neutral-100 select-none tracking-tighter">
            OVERRIDE
          </h1>

          {/* Content Box */}
          <div className="
                w-full max-w-2xl
                border-4 border-neutral-100 
                bg-neutral-900/50 backdrop-blur-sm
                p-8 md:p-12
                shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]
                flex flex-col gap-8
            ">
            <p className="font-mono text-lg md:text-xl text-neutral-300 font-bold leading-relaxed">
              Ecosistema tecnológico integral para la transformación empresarial. Desde la logística hasta la gestión de salud, creamos soluciones que redefinen la eficiencia y escalabilidad de tu negocio.
            </p>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <button className="
                        px-8 py-4 
                        bg-neutral-100 text-black 
                        font-headline font-bold text-xl uppercase tracking-widest
                        border-4 border-transparent
                        hover:bg-neutral-300 transition-colors
                        shadow-[4px_4px_0px_0px_#404040]
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    ">
                Explorar Ecosistema
              </button>
              <button className="
                        px-8 py-4 
                        bg-transparent text-neutral-100 
                        font-headline font-bold text-xl uppercase tracking-widest
                        border-4 border-neutral-100
                        hover:bg-neutral-100 hover:text-black transition-colors
                        shadow-[4px_4px_0px_0px_#404040]
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    ">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 text-9xl text-neutral-800 font-black rotate-[-15deg]">O</div>
          <div className="absolute bottom-20 right-20 text-[20rem] text-neutral-800 font-black rotate-[15deg]">V</div>
        </div>
      </section>

      {sections.map((section) => (
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
      <section className="relative flex min-h-screen items-center justify-center bg-neutral-950 p-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-[12vw] leading-[0.8] font-black font-headline text-neutral-100 select-none tracking-tighter opacity-90 mix-blend-difference">
            REDEFINIENDO<br />LO POSIBLE.
          </h2>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
      </section>
    </div>
  );
}
