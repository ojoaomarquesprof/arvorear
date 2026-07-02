import { ArrowUpRight, MapPin } from "lucide-react";
import { SpaceGallery } from "@/components/space-gallery";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { mapsUrl } from "@/lib/site-config";
import { spaceGallery } from "@/lib/site-data";

export function Space() {
  return (
    <section id="espaco" className="relative overflow-hidden bg-essence py-24 sm:py-32 lg:py-36">
      <BrandMotif className="absolute -right-20 top-10 w-[28rem] text-root/[0.055]" />
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Nosso espaço"
            title={<>Um ambiente que acolhe <span className="italic text-root">antes mesmo da conversa começar.</span></>}
            description="Cada escolha procura reduzir barreiras, acolher famílias e oferecer mais previsibilidade às crianças."
          />
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="button-secondary shrink-0"><MapPin size={17} /> Ver localização <ArrowUpRight size={15} /></a>
        </Reveal>

        <SpaceGallery images={spaceGallery} />

        <div className="mt-7 flex justify-end border-t border-root/15 pt-5 text-sm leading-6 text-ink/55">
          <p>Rua Professor Júlio Estrela Moreira, 1040 · Londrina/PR</p>
        </div>
      </Container>
    </section>
  );
}
