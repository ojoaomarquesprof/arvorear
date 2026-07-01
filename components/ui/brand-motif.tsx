import { cn } from "@/lib/utils";

export function BrandMotif({
  variant = "branch",
  className,
}: Readonly<{ variant?: "branch" | "rings" | "roots"; className?: string }>) {
  if (variant === "rings") {
    return (
      <svg viewBox="0 0 320 320" fill="none" className={cn("pointer-events-none", className)} aria-hidden="true">
        {[42, 74, 106, 138].map((radius) => (
          <circle key={radius} cx="160" cy="160" r={radius} stroke="currentColor" strokeWidth="1" opacity={0.55 - radius / 400} />
        ))}
        <path d="M160 22c26 37 32 74 18 112-12 34-8 68 13 102" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "roots") {
    return (
      <svg viewBox="0 0 520 260" fill="none" className={cn("pointer-events-none", className)} aria-hidden="true">
        <path d="M260 4v76c0 44-23 71-73 82-46 10-73 38-84 86" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M260 79c12 47 45 73 99 78 47 4 82 29 105 75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M224 124c-10 22-29 37-58 45-23 7-43 22-58 45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M299 125c17 21 39 34 68 39 25 5 46 18 63 41" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 180" fill="none" className={cn("pointer-events-none", className)} aria-hidden="true">
      <path d="M15 153c79-3 116-36 143-83 19-33 53-52 101-55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M109 126c-24-19-48-22-72-9 10 24 36 31 72 9Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M171 54c-3-29 10-47 38-54 9 27-3 45-38 54Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M219 28c23 4 38 17 43 40-25 4-39-10-43-40Z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
