import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  { id: 'o', letter: 'O', bgColor: 'bg-black', textColor: 'text-neutral-300' },
  { id: 'v', letter: 'V', title: 'Visión', description: 'No solo construimos software, compartimos y damos forma a su visión. Entendemos sus metas a futuro para desarrollar soluciones que crezcan junto a su negocio.', bgColor: 'bg-neutral-900', textColor: 'text-neutral-400' },
  { id: 'e', letter: 'E', title: 'Excelencia', description: 'La excelencia es nuestro estándar. Desde la concepción hasta el despliegue, aplicamos las mejores prácticas de la industria para entregar productos de la más alta calidad.', bgColor: 'bg-neutral-800', textColor: 'text-neutral-500' },
  { id: 'r', letter: 'R', title: 'Resultados', description: 'Nuestro éxito se mide por el suyo. Nos comprometemos a entregar soluciones tangibles que impulsan el crecimiento, mejoran la productividad y generan un impacto medible.', bgColor: 'bg-neutral-700', textColor: 'text-neutral-300' },
  { id: 'r2', letter: 'R', title: 'Respaldo', description: 'Ofrecemos un respaldo técnico y estratégico constante. Somos su socio tecnológico de confianza, garantizando la estabilidad y la evolución continua de sus sistemas.', bgColor: 'bg-neutral-600', textColor: 'text-neutral-200' },
  { id: 'i', letter: 'I', title: 'Innovación', description: 'La tecnología avanza y nosotros también. Aplicamos la innovación de manera inteligente para crear soluciones de vanguardia que le otorgan una ventaja competitiva.', bgColor: 'bg-neutral-500', textColor: 'text-neutral-800' },
  { id: 'd', letter: 'D', title: 'Desarrollo', description: 'El desarrollo es nuestro núcleo. Con un equipo de expertos apasionados por la tecnología, transformamos ideas complejas en software robusto, escalable y seguro.', bgColor: 'bg-neutral-400', textColor: 'text-neutral-900' },
  { id: 'e2', letter: 'E', title: 'Eficiencia', description: 'Valoramos su tiempo y su inversión. Nuestro proceso de desarrollo está diseñado para ser ágil y eficiente, asegurando entregas puntuales y una comunicación transparente.', bgColor: 'bg-neutral-300', textColor: 'text-black' },
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
            {index === 0 ? (
             <div className="w-full h-full flex items-center justify-start">
                <div
                    aria-hidden="true"
                    className={`pointer-events-none text-[30vw] lg:text-[25vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}
                >
                    {section.letter}
                </div>
                <h1 className={`pointer-events-none text-[15vw] lg:text-[10vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}>VERRIDE</h1>
              </div>
            ) : (
              <>
                <div
                aria-hidden="true"
                className={`pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[30vw] lg:text-[25vw] font-bold font-headline select-none ${section.textColor} opacity-10 leading-none`}
              >
                {section.letter}
              </div>
               <div className="relative z-10 container max-w-screen-md mx-auto p-8">
                <h2 className={`text-4xl md:text-5xl font-bold font-headline mb-4 ${section.textColor}`}>{section.title}</h2>
                <p className={`text-lg md:text-xl max-w-prose ${section.textColor} opacity-80`}>{section.description}</p>
              </div>
              </>
            )}
        </section>
      ))}
    </div>
  );
}
