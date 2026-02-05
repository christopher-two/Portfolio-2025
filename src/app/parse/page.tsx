import { OverrideNav } from '@/components/OverrideNav';

const sections = [
  {
    id: 'features',
    letter: 'F',
    title: 'EATURES',
    description: "Experiencia de lectura inmersiva estilo Kindle. Gestión de biblioteca, soporte PDF y más.",
    bgColor: 'bg-purple-200',
    textColor: 'text-purple-900',
    scrollbarColor: 'hsl(270, 50%, 70%)',
    scrollbarHoverColor: 'hsl(270, 50%, 60%)'
  },
  {
    id: 'tech',
    letter: 'S',
    title: 'TACK',
    description: "Kotlin, Jetpack Compose, Koin, Ktor, Room, Coil 3. Tecnología de punta para Android.",
    bgColor: 'bg-purple-300',
    textColor: 'text-purple-950',
    scrollbarColor: 'hsl(270, 50%, 60%)',
    scrollbarHoverColor: 'hsl(270, 50%, 50%)'
  },
  {
    id: 'structure',
    letter: 'M',
    title: 'ODULAR',
    description: "Clean Architecture modular. Separación clara por features: auth, home, book, settings.",
    bgColor: 'bg-purple-400',
    textColor: 'text-purple-950',
    scrollbarColor: 'hsl(270, 50%, 50%)',
    scrollbarHoverColor: 'hsl(270, 50%, 40%)'
  },
  {
    id: 'start',
    letter: 'G',
    title: 'ET IT',
    description: "Clona el repo, configura Firebase y compila. Open source y listo para contribuir.",
    bgColor: 'bg-purple-500',
    textColor: 'text-white',
    scrollbarColor: 'hsl(270, 50%, 40%)',
    scrollbarHoverColor: 'hsl(270, 50%, 30%)'
  },
];

export default function ParsePage() {
  return (
    <div className="relative font-sans text-purple-950 selection:bg-purple-300 selection:text-purple-950">
      <OverrideNav sections={sections} word="PARSE" />

      {/* Intro Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-purple-100 p-4 md:p-12 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">

          {/* Massive Title */}
          <h1 className="text-[20vw] md:text-[25vw] leading-[0.8] font-black font-headline text-purple-950 select-none tracking-tighter">
            PARSE
          </h1>

          {/* Content Box */}
          <div className="
                w-full max-w-2xl
                border-4 border-purple-950 
                bg-purple-50/80 backdrop-blur-sm
                p-8 md:p-12
                shadow-[12px_12px_0px_0px_rgba(88,28,135,1)]
                flex flex-col gap-8
            ">
            <p className="font-mono text-lg md:text-xl text-purple-900 font-bold leading-relaxed">
              Android Book Reader. Minimalista. Modular. Potente.
              <br/>
              Una experiencia de lectura fluida construida con las últimas tecnologías: Compose, Navigation 3, Material 3.
            </p>
            
            <div className="flex flex-col gap-2 font-mono text-sm text-purple-800 font-bold opacity-80">
                 <span>• Lector estilo Kindle</span>
                 <span>• Integración Google Sign-In</span>
                 <span>• Soporte PDF y Temas Dinámicos</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <a 
                href="https://parse.christopher.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    px-8 py-4 
                    bg-purple-950 text-purple-100 
                    font-headline font-bold text-xl uppercase tracking-widest
                    border-4 border-transparent
                    hover:bg-purple-800 transition-colors
                    shadow-[4px_4px_0px_0px_#9333ea]
                    active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    inline-flex justify-center items-center
                ">
                Ir a la Web
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=org.christophertwo.parse"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    px-8 py-4 
                    bg-transparent text-purple-950 
                    font-headline font-bold text-xl uppercase tracking-widest
                    border-4 border-purple-950
                    hover:bg-purple-200 transition-colors
                    shadow-[4px_4px_0px_0px_#9333ea]
                    active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                    inline-flex justify-center items-center
                ">
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
           <div className="absolute top-[10%] left-[5%] text-[15rem] text-purple-600 font-black rotate-[-10deg]">P</div>
           <div className="absolute bottom-[5%] right-[5%] text-[20rem] text-purple-600 font-black rotate-[5deg]">{'}'}</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative flex min-h-screen items-center overflow-hidden bg-purple-200 p-4 md:p-12">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative z-10 flex flex-col gap-8 order-2 lg:order-1">
                 <div className="
                    border-4 border-purple-950
                    bg-white/50 backdrop-blur-md
                    p-8
                    shadow-[8px_8px_0px_0px_rgba(88,28,135,0.5)]
                 ">
                    <h3 className="font-headline font-black text-4xl mb-6 uppercase text-purple-950">Experiencia</h3>
                    <ul className="list-disc list-inside space-y-4 font-mono text-lg font-bold text-purple-900">
                        <li>Paginación inteligente de texto</li>
                        <li>Navegación fluida con Navigation 3</li>
                        <li>Material 3 + temas dinámicos</li>
                        <li>Lectura inmersiva sin distracciones</li>
                    </ul>
                 </div>
                 <div className="
                    border-4 border-purple-950
                    bg-purple-950 text-purple-100
                    p-8
                    shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]
                 ">
                    <h3 className="font-headline font-black text-4xl mb-6 uppercase">Gestión</h3>
                    <ul className="list-disc list-inside space-y-4 font-mono text-lg font-bold text-purple-200">
                        <li>Librería personal organizada</li>
                        <li>Búsqueda y filtrado eficiente</li>
                        <li>Soporte nativo para PDFs</li>
                        <li>Google Sign-In seguro</li>
                    </ul>
                 </div>
            </div>

            <div className="relative z-0 order-1 lg:order-2 flex justify-center items-center">
                 <div className="text-[40vh] md:text-[60vh] font-black font-headline text-purple-900 opacity-20 select-none leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    F
                 </div>
                 <h2 className="text-[10vw] font-black font-headline text-purple-950 leading-none relative z-10 mix-blend-multiply">
                    FEA<br/>TURES
                 </h2>
            </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative flex min-h-screen items-center overflow-hidden bg-purple-300 p-4 md:p-12">
         <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12">
            <h2 className="text-[12vw] font-black font-headline text-purple-950 leading-none text-center">
                STACK
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[
                    { name: 'Kotlin', desc: 'Lenguaje moderno' },
                    { name: 'Compose', desc: 'UI Declarativa' },
                    { name: 'Koin', desc: 'Inyección de dependencias' },
                    { name: 'Ktor', desc: 'Networking asíncrono' },
                    { name: 'Room', desc: 'Base de datos local' },
                    { name: 'Coil 3', desc: 'Carga de imágenes' },
                    { name: 'Nav 3', desc: 'Navegación Experimental' },
                    { name: 'PDFBox', desc: 'Manejo de documentos' }
                ].map((item, i) => (
                    <div key={i} className="
                        border-4 border-purple-950
                        bg-purple-100 hover:bg-white
                        p-6
                        shadow-[6px_6px_0px_0px_rgba(88,28,135,0.8)]
                        transition-transform hover:-translate-y-1
                        flex flex-col justify-between h-48
                    ">
                        <span className="font-headline font-black text-2xl uppercase text-purple-950">{item.name}</span>
                        <span className="font-mono text-sm font-bold text-purple-800">{item.desc}</span>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Architecture Section */}
      <section id="structure" className="relative flex min-h-screen items-center overflow-hidden bg-purple-400 p-4 md:p-12">
         <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                 <h2 className="text-[10vw] font-black font-headline text-purple-950 leading-none mb-8">
                    MOD<br/>ULAR
                 </h2>
                 <p className="font-mono text-xl font-bold text-purple-900 mb-8 max-w-lg">
                    Clean Architecture escalable. Cada feature es un universo propio, orquestado perfectamente por el módulo app.
                 </p>
            </div>
            
            <div className="flex-1 w-full relative">
                <div className="
                    absolute inset-0 bg-purple-950 transform translate-x-4 translate-y-4
                "></div>
                <div className="
                    relative
                    border-4 border-purple-950
                    bg-purple-100
                    p-8 md:p-12
                    font-mono text-purple-950 font-bold
                ">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <span className="w-4 h-4 bg-purple-600"></span>
                            <span>:app (Orquestador)</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-4 h-4 bg-purple-500"></span>
                            <span>:core (UI & Common)</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-4 h-4 bg-purple-400"></span>
                            <span>:domain (Reglas de negocio)</span>
                        </li>
                        <li className="pl-8 space-y-2 border-l-4 border-purple-300 ml-2">
                             <div className="text-purple-700 uppercase text-sm tracking-wider mb-2">Features</div>
                             <div>:auth</div>
                             <div>:home</div>
                             <div>:book</div>
                             <div>:settings</div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section id="start" className="relative flex min-h-screen items-center justify-center bg-purple-500 p-8 overflow-hidden text-center">
         <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
             <h2 className="text-[12vw] font-black font-headline text-white leading-none tracking-tighter drop-shadow-[8px_8px_0px_rgba(88,28,135,1)]">
                START
             </h2>
             <div className="bg-black/20 backdrop-blur p-8 rounded-none border-4 border-white max-w-2xl w-full">

                <a 
                    href="https://parse.christopher.com.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-block
                        px-12 py-6
                        bg-white text-purple-600
                        font-headline font-black text-2xl uppercase tracking-widest
                        hover:bg-purple-100 hover:scale-105 transition-transform
                        shadow-[8px_8px_0px_0px_rgba(88,28,135,1)]
                    "
                >
                    Ir a la Web
                </a>
             </div>
         </div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#581c87_1px,transparent_1px),linear-gradient(to_bottom,#581c87_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
      </section>

    </div>
  );
}
