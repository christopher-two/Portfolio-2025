import Link from 'next/link';
import { OverrideNav } from '@/components/OverrideNav';
import { Download } from 'lucide-react';

const sections = [
    {
        id: 's',
        letter: 'S',
        title: 'ENTIMIENTO',
        description: "Los mensajes importantes se pierden en el scroll. En Spot, tus palabras y fotos tienen un lugar físico y eterno. No es solo un chat, es un recuerdo anclado.",
        bgColor: 'bg-zinc-950',
        textColor: 'text-lime-400',
        scrollbarColor: '#a3e635', // lime-400
        scrollbarHoverColor: '#84cc16' // lime-500
    },
    {
        id: 'p',
        letter: 'P',
        title: 'ROXIMIDAD',
        description: "Exclusividad geográfica. El contenido no se consume, se descubre. Tus fotos y mensajes se desbloquean solo cuando estás a menos de 30 metros.",
        bgColor: 'bg-zinc-900',
        textColor: 'text-cyan-400',
        scrollbarColor: '#22d3ee', // cyan-400
        scrollbarHoverColor: '#06b6d4' // cyan-500
    },
    {
        id: 'o',
        letter: 'O',
        title: 'BJETIVO',
        description: "Visual-First. Captura la esencia de cada rincón con imágenes que cuentan historias. Sin filtros, solo la verdad del momento y su ubicación.",
        bgColor: 'bg-zinc-950',
        textColor: 'text-lime-400',
        scrollbarColor: '#a3e635',
        scrollbarHoverColor: '#84cc16'
    },
    {
        id: 't',
        letter: 'T',
        title: 'ESOROS',
        description: "Geocaching emocional. Crea una cápsula del tiempo visual para tu ciudad, deja mensajes secretos en el campus o tesoros para alguien especial.",
        bgColor: 'bg-zinc-900',
        textColor: 'text-cyan-400',
        scrollbarColor: '#22d3ee',
        scrollbarHoverColor: '#06b6d4'
    },
];

export default function SpotPage() {
    return (
        <div className="relative">
            <OverrideNav sections={sections} word="SPOT" />

            {/* Intro Section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-20 md:p-12 overflow-hidden">
                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">

                    {/* Massive Title */}
                    <h1 className="text-9xl sm:text-[20vw] md:text-[25vw] leading-none font-black font-headline text-lime-400 select-none tracking-tighter drop-shadow-[0_0_50px_rgba(163,230,53,0.3)] whitespace-nowrap">
                        SPOT
                    </h1>

                    {/* Content Box */}
                    <div className="
                w-full max-w-2xl
                border-4 border-lime-400 
                bg-zinc-900/80 backdrop-blur-md
                p-8 md:p-12
                shadow-[12px_12px_0px_0px_rgba(163,230,53,1)]
                flex flex-col gap-8
                transform-gpu
            ">
                        <p className="font-mono text-lg md:text-xl text-zinc-100 font-bold leading-relaxed">
                            La app que convierte coordenadas GPS en cápsulas del tiempo visuales. Donde tus fotos y mensajes se reconcilian con el mundo físico.
                        </p>

                        {/* Actions */}
                        <div className="flex justify-center pt-4">
                            <button className="
                        px-8 py-4 md:px-10 md:py-5 
                        bg-lime-400 text-black 
                        font-headline font-bold text-lg md:text-xl uppercase tracking-widest
                        border-4 border-transparent
                        hover:bg-lime-300 transition-colors
                        shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                        flex items-center gap-3
                    ">
                                <Download size={24} />
                                Descargar App
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
                    <div className="absolute top-[-5%] left-[-10%] text-[40vw] md:text-[50vh] lg:text-[35rem] text-lime-600 font-black rotate-[-15deg] leading-none">S</div>
                    <div className="absolute bottom-[-5%] right-[-5%] text-[50vw] md:text-[60vh] lg:text-[45rem] text-cyan-600 font-black rotate-[15deg] leading-none">P</div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.1),transparent_70%)] pointer-events-none"></div>
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
                                className={`text-[60vw] md:text-[70vh] font-black font-headline select-none ${section.textColor} opacity-15 md:opacity-20 leading-none`}
                            >
                                {section.letter}
                            </div>
                            <h2 className={`text-[15vw] md:text-[15vh] font-bold font-headline select-none ${section.textColor} opacity-40 leading-none -ml-12 md:-ml-24`}>
                                {section.title}
                            </h2>
                        </div>

                        {/* Description Box - Neobrutalist */}
                        <div className={`
                    relative z-10 w-full max-w-lg 
                    border-4 border-current ${section.textColor}
                    p-6 md:p-8 
                    backdrop-blur-sm bg-black/40
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)]
                    pointer-events-auto
                `}>
                            <p className={`font-mono text-base md:text-xl font-bold ${section.textColor} opacity-90 leading-snug md:leading-normal`}>
                                {section.description}
                            </p>
                        </div>
                    </div>
                </section>
            ))}

            {/* Final Phrase Section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-8 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto text-center mb-24">
                    <h2 className="text-[10vw] md:text-[12vw] leading-[0.8] font-black font-headline text-lime-400 select-none tracking-tighter opacity-90">
                        TUS RECUERDOS<br />TIENEN UN LUGAR.
                    </h2>
                </div>

                {/* Footer Navigation */}
                <div className="relative z-10 w-full max-w-4xl border-t-2 border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 font-mono text-[10px] md:text-xs uppercase font-bold text-center md:text-left">
                    <div className="text-zinc-600">
                        SPOT © 2026 • CÁPSULAS GEOLOCALIZADAS
                    </div>
                    <div className="flex gap-6 md:gap-8">
                        <Link href="/spot/privacy" className="text-zinc-500 hover:text-cyan-400 transition-colors py-2 px-1">Privacidad</Link>
                        <Link href="/spot/terms" className="text-zinc-500 hover:text-cyan-400 transition-colors py-2 px-1">Términos</Link>
                        <Link href="/spot/versions" className="text-zinc-500 hover:text-lime-400 transition-colors py-2 px-1">Versiones</Link>
                    </div>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
            </section>
        </div>
    );
}
