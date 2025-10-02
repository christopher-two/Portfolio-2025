import { SummarizerForm } from "@/components/SummarizerForm";

export default function SummarizerPage() {
  return (
    <div className="container max-w-screen-lg mx-auto py-12 px-4 animate-fade-in">
      <section className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Project Summarizer
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Use the power of Gemini AI to generate a concise summary of your project descriptions.
          Perfect for portfolio entries, reports, or just getting a quick overview.
        </p>
      </section>

      <div className="border-t border-l border-r border-b border-border p-4 md:p-8">
        <SummarizerForm />
      </div>
    </div>
  );
}
