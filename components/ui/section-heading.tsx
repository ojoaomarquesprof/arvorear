import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: Readonly<{
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}>) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-title mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h2>
      {description ? <p className="body-copy mt-6 max-w-xl text-base sm:text-lg">{description}</p> : null}
    </div>
  );
}
