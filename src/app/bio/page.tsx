
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BioPage() {
  const profilePicUrl = "https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes/FotoPerfil.JPG";

  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="w-full max-w-md animate-fade-in space-y-8 p-4 md:p-8">
        <header className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24 border-4 border-border shadow-[6px_6px_0px_theme(colors.border)]">
            <AvatarImage src={profilePicUrl} alt="Christopher Alejandro Maldonado Chavez" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-2xl font-bold font-headline">Christopher Alejandro Maldonado Chavez</h1>
            <p className="text-muted-foreground">Desarrollador Multiplataforma</p>
          </div>
        </header>

        <main className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <Button
              key={link.href}
              variant="outline"
              className="h-14 w-full justify-start border-2 border-border p-4 text-lg font-bold shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              asChild
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-4 h-6 w-6" />
                <span>{link.title}</span>
              </Link>
            </Button>
          ))}
        </main>
      </div>
    </div>
  );
}
