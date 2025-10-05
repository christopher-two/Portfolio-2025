import { cn } from "@/lib/utils";

interface OverrideNewsLogoProps extends React.SVGProps<SVGSVGElement> {}

export function OverrideNewsLogo({ className, ...props }: OverrideNewsLogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-gray-900", className)}
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="font-headline font-bold text-[50px] leading-none"
        fill="currentColor"
      >
        <tspan x="50%" dy="-0.2em">Override</tspan>
        <tspan x="50%" dy="1.2em">News</tspan>
      </text>
    </svg>
  );
}

    