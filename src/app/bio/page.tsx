
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BioPage() {
  const profilePicUrl = "https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes/FotoPerfil.JPG";

  const childhoodDream = {
    question: "¿Qué deseaba convertirme cuando era niño?",
    answer: "A decir verdad, nunca tuve una meta profesional definida durante mi infancia. Sin embargo, desde muy joven, me sentí fuertemente atraído por el ámbito de la tecnología. Desde que comencé a jugar videojuegos y a interesarme por el funcionamiento interno de la tecnología, supe que mi futuro estaría intrínsecamente ligado a este campo, por lo que nunca contemplé una trayectoria laboral distinta.",
  };

  const goals = [
    {
      term: "Corto Plazo (Próximos 4 años)",
      meta: "Finalizar mi formación universitaria, siempre y cuando no se presente una oportunidad laboral o no logre consolidar un proyecto exitoso a través de mi empresa, Override, antes de dicho plazo.",
      motivation: "Mi objetivo principal es dedicar mi tiempo y energía a proyectos que me apasionan, evitando quedar anclado a un sistema educativo que considero ineficiente y costoso.",
      strategy: "Lo conseguiré manteniendo un rendimiento excepcional en todos mis compromisos académicos y empresariales, esforzándome por ser siempre el mejor en mi campo.",
    },
    {
      term: "Mediano Plazo (Próximos 10 años)",
      meta: "Consolidar mi empresa, Override, hasta convertirla en la desarrolladora de software más grande y reconocida de Uruapan y Michoacán. En el ámbito personal, me gustaría casarme con la mujer que amo.",
      motivation: "Busco el crecimiento profesional sostenido, el liderazgo en la industria tecnológica local, y la estabilidad y plenitud en mi vida personal.",
      strategy: "No tengo dudas sobre cómo lograrlo. Cuento con el coraje y la inteligencia necesarios para materializar esta visión y llevarla a cabo con éxito.",
    },
    {
      term: "Largo Plazo (Más allá de 10 años)",
      meta: "Establecer un nuevo horizonte de vida y prioridades.",
      motivation: "Considero fundamental mantener los pies en la tierra y un fuerte sentido de la realidad. Planificar metas demasiado lejanas puede restar enfoque al presente; por lo tanto, la meta es seguir progresando y replantear los objetivos ambiciosos cuando el momento sea el adecuado.",
      strategy: "Seguiré mi desarrollo personal y profesional continuo, adaptándome a las circunstancias futuras para plantear desafíos que me mantengan motivado.",
    },
  ];

  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] py-12">
      <div className="w-full max-w-4xl animate-fade-in space-y-12 px-4">
        <header className="flex flex-col items-center space-y-4 text-center">
          <Avatar className="h-24 w-24 border-4 border-border shadow-[6px_6px_0px_theme(colors.border)]">
            <AvatarImage src={profilePicUrl} alt="Christopher Alejandro Maldonado Chavez" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-3xl font-bold font-headline">Christopher Alejandro Maldonado Chavez</h1>
            <p className="text-muted-foreground text-lg">Una mirada a mi interior</p>
          </div>
        </header>

        <main className="space-y-8">
          <Card className="border-2 border-border shadow-[4px_4px_0px_theme(colors.border)] bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{childhoodDream.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{childhoodDream.answer}</p>
            </CardContent>
          </Card>

          <div>
             <h2 className="text-2xl font-bold font-headline mb-6 text-center">Mis objetivos a corto, mediano y largo plazo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {goals.map((goal) => (
                <Card key={goal.term} className="flex flex-col border-2 border-border shadow-[4px_4px_0px_theme(colors.border)] bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{goal.term}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">Meta:</h4>
                      <p className="text-sm text-muted-foreground">{goal.meta}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Motivación (Por qué):</h4>
                      <p className="text-sm text-muted-foreground">{goal.motivation}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Estrategia (Cómo):</h4>
                      <p className="text-sm text-muted-foreground">{goal.strategy}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
