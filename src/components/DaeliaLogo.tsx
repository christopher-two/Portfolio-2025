import { cn } from "@/lib/utils";

interface DaeliaLogoProps extends React.SVGProps<SVGSVGElement> {}

export function DaeliaLogo({ className, ...props }: DaeliaLogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-blue-950", className)}
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="font-headline font-bold text-[80px]"
        fill="currentColor"
      >
        Daelia
      </text>
    </svg>
  );
}

    