export type SpotDocumentKey = "privacy" | "terms" | "versions";

export type SpotDocument = {
  title: string;
  subtitle: string;
  relativePath: string;
};

const spotDocuments: Record<SpotDocumentKey, SpotDocument> = {
  privacy: {
    title: "Privacidad",
    subtitle: "Tu ubicacion y datos, bajo tu control.",
    relativePath: "src/content/spot/privacy.md",
  },
  terms: {
    title: "Terminos de Servicio",
    subtitle: "Reglas basicas para anclar tus recuerdos.",
    relativePath: "src/content/spot/terms.md",
  },
  versions: {
    title: "Versiones",
    subtitle: "Evolucion de las capsulas del tiempo.",
    relativePath: "src/content/spot/versions.md",
  },
};

export function getSpotDocument(key: SpotDocumentKey): SpotDocument {
  return spotDocuments[key];
}
