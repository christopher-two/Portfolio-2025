import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={cn("h-8 w-8", className)}
        >
            <path
                fill="currentColor"
                d="M148 48a20 20 0 1 0-20 20a20 20 0 0 0 20-20m-20 60a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 80a20 20 0 1 0 20 20a20 20 0 0 0-20-20"
            ></path>
            <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m41.4 175.76a71.88 71.88 0 0 1-84.34-111.46a8 8 0 0 1 12-10.52a55.91 55.91 0 0 0 64.21 85.55a8 8 0 0 1 8.13 13.43"
            ></path>
        </svg>
    );
}
