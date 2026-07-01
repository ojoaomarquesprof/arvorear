import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { ParallaxMedia } from "@/components/ui/parallax-media";
import { Reveal } from "@/components/ui/reveal";
import { brandConcepts } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export function WhyArvorear() {
  return (
    <section id="clinica" className="relative overflow-hidden bg-essence py-24 sm:py-32">
      <BrandMotif className="absolute -right-24 top-8 w-[30rem] text-root/[0.07]" />
      <Container>
        <Reveal className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">Por que Arvorear?</p>
            <p className="mt-7 max-w-xs text-sm leading-7 text-root/70">O nome traduz uma convicção clínica: desenvolvimento tem tempo, contexto e caminhos próprios.</p>
          </div>
          <h2 className="display-title text-4xl leading-[1.1] sm:text-5xl lg:text-[4.35rem]">
            Arvorear é reconhecer que desenvolvimento é <span className="italic text-root">singular, relacional e contínuo.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {brandConcepts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="premium-card group flex min-h-[240px] flex-col rounded-[2rem_2rem_2rem_0.7rem] p-7 sm:min-h-[300px]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-full bg-root/10 text-root transition group-hover:bg-root group-hover:text-sand"><Icon size={20} strokeWidth={1.5} /></span>
                    <span className="font-display text-lg italic text-root/45">0{index + 1}</span>
                  </div>
                  <div className="mt-auto pt-12">
                    <h3 className="font-display text-3xl text-root">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-ink/70">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 grid overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_0.8rem] bg-root text-sand lg:grid-cols-[0.8fr_1.2fr]">
          <ParallaxMedia className="min-h-72 lg:min-h-[380px]" distance={8}>
            <Image src="/assets/arvorear/espaco/hero/card-recepcao-logo-4x5.webp" alt="Recepção real da Clínica Arvorear com árvore cenográfica e marca na parede." fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </ParallaxMedia>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-essence/90">O que orienta a clínica</p>
            <p className="mt-6 font-display text-3xl leading-snug text-sand sm:text-4xl">A Arvorear nasceu para oferecer um cuidado que considera a criança inteira — sua história, suas relações e a vida que acontece fora da sala de atendimento.</p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-sand/15 pt-6">
              <div><p className="text-sm font-semibold text-sand">{siteConfig.founder}</p><p className="mt-1 text-xs text-sand/80">Fundadora e CEO</p></div>
              <a href="#abordagem" className="inline-flex items-center gap-2 text-sm font-semibold text-sand/90 transition hover:text-sand">Conheça a abordagem <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
