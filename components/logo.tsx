import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false, priority = false }: Readonly<{ className?: string; light?: boolean; priority?: boolean }>) {
  return (
    <span className={cn("relative block h-16 w-48 sm:w-52", className)}>
      <Image
        src={
          light
            ? "/assets/arvorear/brand/logos/webp/logo-horizontal-creme-transparent.webp"
            : "/assets/arvorear/brand/logos/webp/logo-horizontal-coral-transparent.webp"
        }
        alt="Clínica Arvorear — Afeto, Ciência e Desenvolvimento"
        fill
        priority={priority}
        sizes="208px"
        className="object-contain"
      />
    </span>
  );
}
