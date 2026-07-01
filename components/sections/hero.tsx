import Image from "next/image";
import { ArrowDown, ArrowUpRight, MessageCircle, UsersRound } from "lucide-react";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { ParallaxMedia } from "@/components/ui/parallax-media";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="hero-texture relative overflow-hidden bg-root pb-20 pt-32 text-sand sm:pb-24 sm:pt-40 lg:min-h-[900px] lg:pb-20 lg:pt-36">
      <BrandMotif variant="roots" className="absolute -bottom-8 -left-12 w-[34rem] text-sand/[0.07]" />
      <BrandMotif variant="branch" className="absolute -right-16 top-24 w-[28rem] -rotate-12 text-serene/15" />
      <div className="absolute left-[48%] top-24 h-[72%] w-px bg-gradient-to-b from-transparent via-sand/10 to-transparent" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 xl:gap-24">
          <Reveal>
            <p className="eyebrow !text-essence/90 before:!bg-peach/70">Clínica multidisciplinar em Londrina</p>
            <h1 className="display-title mt-7 max-w-[760px] text-[clamp(3.25rem,5.45vw,5.9rem)] leading-[0.96] !text-sand">
              Cuidado que enxerga a criança
              <span className="mt-2 block italic text-peach">antes de qualquer diagnóstico.</span>
            </h1>
            <p className="mt-7 max-w-[39rem] text-base leading-8 text-sand/85 sm:text-lg">
              Escuta clínica, diferentes olhares e práticas baseadas em evidências para construir um percurso individualizado com a família.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary !bg-sand !px-7 !text-root hover:!bg-essence">
                <MessageCircle size={18} aria-hidden="true" /> Agendar conversa <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="#abordagem" className="button-secondary !border-sand/25 !bg-transparent !text-sand hover:!border-sand/45 hover:!bg-sand/10">
                Conhecer a abordagem <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-sand/15 pt-6">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-sand/80">Cuidado individualizado</span>
              <span className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-sand/80"><UsersRound size={15} aria-hidden="true" /> Família participa do processo</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative mx-auto w-full max-w-[570px]">
            <div className="absolute -inset-4 rounded-[48%_48%_2.8rem_2.8rem] border border-serene/20 bg-serene/10 rotate-2" aria-hidden="true" />
            <ParallaxMedia className="aspect-[4/5] rounded-[48%_48%_2.5rem_2.5rem] bg-ink shadow-[0_30px_80px_rgba(31,35,27,0.28)]" distance={10}>
              <Image
                src="/assets/arvorear/brand/banners/webp/12-banner-crianca-natureza.webp"
                alt="Criança explorando elementos da natureza em imagem institucional da Clínica Arvorear."
                fill
                priority
                quality={82}
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover object-[53%_center]"
              />
              <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-root from-45% via-root/95 to-transparent" aria-hidden="true" />
            </ParallaxMedia>

            <div className="absolute inset-x-6 bottom-7 border-t border-sand/20 pt-5 text-sand sm:inset-x-9 sm:bottom-9">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-essence/90">Afeto • Ciência • Desenvolvimento</p>
              <p className="mt-2 max-w-xs font-display text-xl leading-snug sm:text-2xl">A criança por inteiro, dentro e fora da sala de atendimento.</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
