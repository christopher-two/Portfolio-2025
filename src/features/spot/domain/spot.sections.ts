export type SpotSection = {
  id: string;
  letter: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  scrollbarColor: string;
  scrollbarHoverColor: string;
};

export const spotSections: SpotSection[] = [
  {
    id: "s",
    letter: "S",
    title: "ENTIMIENTO",
    description:
      "Los mensajes importantes se pierden en el scroll. En Spot, tus palabras y fotos tienen un lugar fisico y eterno. No es solo un chat, es un recuerdo anclado.",
    bgColor: "bg-zinc-950",
    textColor: "text-lime-400",
    scrollbarColor: "#a3e635",
    scrollbarHoverColor: "#84cc16",
  },
  {
    id: "p",
    letter: "P",
    title: "ROXIMIDAD",
    description:
      "Exclusividad geografica. El contenido no se consume, se descubre. Tus fotos y mensajes se desbloquean solo cuando estas a menos de 30 metros.",
    bgColor: "bg-zinc-900",
    textColor: "text-cyan-400",
    scrollbarColor: "#22d3ee",
    scrollbarHoverColor: "#06b6d4",
  },
  {
    id: "o",
    letter: "O",
    title: "BJETIVO",
    description:
      "Visual-First. Captura la esencia de cada rincon con imagenes que cuentan historias. Sin filtros, solo la verdad del momento y su ubicacion.",
    bgColor: "bg-zinc-950",
    textColor: "text-lime-400",
    scrollbarColor: "#a3e635",
    scrollbarHoverColor: "#84cc16",
  },
  {
    id: "t",
    letter: "T",
    title: "ESOROS",
    description:
      "Geocaching emocional. Crea una capsula del tiempo visual para tu ciudad, deja mensajes secretos en el campus o tesoros para alguien especial.",
    bgColor: "bg-zinc-900",
    textColor: "text-cyan-400",
    scrollbarColor: "#22d3ee",
    scrollbarHoverColor: "#06b6d4",
  },
];
