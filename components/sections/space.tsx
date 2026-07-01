import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { mapsUrl } from "@/lib/site-config";
import { spaceGallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Space() {
  return (
    <section id="espaco" className="relative overflow-hidden bg-essence py-24 sm:py-32">
      <BrandMotif className="absolute -right-20 top-10 w-[28rem] text-root/[0.055]" />
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Nosso espaço" title={<>Arquitetura que reduz barreiras <span className="italic text-root">antes do atendimento começar.</span></>} description="Luz, escala, circulação e materiais foram pensados para oferecer previsibilidade e conforto sem abrir mão da seriedade clínica." />
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="button-secondary shrink-0"><MapPin size={17} /> Ver localização <ArrowUpRight size={15} /></a>
        </Reveal>

        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:grid-cols-12 md:auto-rows-[140px] lg:mt-20">
          {spaceGallery.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.035} className={cn("h-full", image.className)}>
              <figure className="group relative h-full overflow-hidden rounded-[1.5rem_1.5rem_1.5rem_0.55rem] bg-serene/30 shadow-[0_14px_40px_rgba(52,56,45,0.08)] sm:rounded-[2rem_2rem_2rem_0.65rem]">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-700 group-hover:scale-[1.035] motion-reduce:transform-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" aria-hidden="true" />
                <figcaption className="absolute bottom-0 left-0 p-4 text-xs font-bold text-sand sm:p-6 sm:text-sm">{image.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink/45">Todas as imagens desta seção são fotografias reais da Clínica Arvorear.</p>
      </Container>
    </section>
  );
}
