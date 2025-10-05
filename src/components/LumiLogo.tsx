import { cn } from "@/lib/utils";

interface LumiLogoProps extends React.SVGProps<SVGSVGElement> {}

export function LumiLogo({ className, ...props }: LumiLogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-yellow-900", className)}
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="font-headline font-bold text-[100px]"
        fill="currentColor"
      >
        Lumi
      </text>
    </svg>
  );
}

    