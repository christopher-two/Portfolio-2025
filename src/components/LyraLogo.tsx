import { cn } from "@/lib/utils";

interface LyraLogoProps extends React.SVGProps<SVGSVGElement> {}

export function LyraLogo({ className, ...props }: LyraLogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-green-900", className)}
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
        Lyra
      </text>
    </svg>
  );
}
