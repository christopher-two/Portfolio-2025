import Link from "next/link";
import { products } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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

export function ProductSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product) => {
          const LogoComponent = logoComponents[product.title];
          return (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <Link href={product.href} className="group block h-full">
                <Card className="h-full overflow-hidden border-2 border-border shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  <CardContent className={`flex aspect-video items-center justify-center p-6 ${product.bgColor}`}>
                    {LogoComponent ? (
                      <LogoComponent className="w-32 h-32 text-foreground" />
                    ) : (
                      <span className="text-foreground font-bold font-headline">{product.title}</span>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="ml-12 border-2 border-border shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:shadow-none disabled:translate-x-1 disabled:translate-y-1" />
      <CarouselNext className="mr-12 border-2 border-border shadow-[4px_4px_0px_theme(colors.border)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:shadow-none disabled:translate-x-1 disabled:translate-y-1" />
    </Carousel>
  );
}

    