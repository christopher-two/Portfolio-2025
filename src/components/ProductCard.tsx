import Link from "next/link";
import { DaeliaLogo } from "./DaeliaLogo";
import { LumiLogo } from "./LumiLogo";
import { OverrideLogo } from "./OverrideLogo";
import { LyraLogo } from "./LyraLogo";
import { OverridePassLogo } from "./OverridePassLogo";
import { OverrideLearningLogo } from "./OverrideLearningLogo";
import { OverrideMindstackLogo } from "./OverrideMindstackLogo";
import { OverrideLogisticsLogo } from "./OverrideLogisticsLogo";
import { OverrideNewsLogo } from "./OverrideNewsLogo";

const logoComponents: { [key: string]: React.ElementType } = {
  "Override": OverrideLogo,
  "Lumi": LumiLogo,
  "Daelia": DaeliaLogo,
  "Lyra": LyraLogo,
  "Override Pass": OverridePassLogo,
  "Override Learning": OverrideLearningLogo,
  "Override Mindstack": OverrideMindstackLogo,
  "Override Logistics": OverrideLogisticsLogo,
  "Override News": OverrideNewsLogo,
};

interface ProductCardProps {
  href: string;
  title: string;
  bgColor: string;
}

export function ProductCard({ href, title, bgColor }: ProductCardProps) {
  const LogoComponent = logoComponents[title];
  return (
    <Link href={href} className="group">
        <div className={`relative flex h-[40vh] w-full items-center justify-center overflow-hidden border-b-2 border-r-2 border-border p-8 ${bgColor}`}>
            {LogoComponent ? (
                <LogoComponent className="w-32 h-32 text-foreground transition-transform duration-500 ease-in-out group-hover:scale-110" />
            ) : (
                <span className="text-foreground font-bold font-headline text-2xl transition-transform duration-500 ease-in-out group-hover:scale-110">{title}</span>
            )}
        </div>
    </Link>
  );
}
