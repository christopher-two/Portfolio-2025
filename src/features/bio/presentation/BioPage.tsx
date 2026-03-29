import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { childhoodDream, goals } from "@/features/bio/domain/bio.content";

export default function BioPage() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] py-12">
      <div className="w-full max-w-4xl animate-fade-in space-y-12 px-4">
        <header className="flex flex-col items-center space-y-4 text-center">
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
                      <h4 className="font-semibold text-primary">Motivacion (Por que):</h4>
                      <p className="text-sm text-muted-foreground">{goal.motivation}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Estrategia (Como):</h4>
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
