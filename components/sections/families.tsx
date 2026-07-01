import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { ParallaxMedia } from "@/components/ui/parallax-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/lib/site-config";

export function Families() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -right-36 top-20 size-[32rem] rounded-full bg-serene/15 blur-3xl" aria-hidden="true" />
      <BrandMotif className="absolute -left-24 bottom-4 w-[28rem] text-root/[0.055]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <ParallaxMedia className="aspect-[16/11] rounded-[3rem_3rem_1rem_3rem] bg-root shadow-soft" distance={8}>
              <Image src="/assets/arvorear/brand/banners/webp/11-banner-crianca-brincando.webp" alt="Criança brincando em imagem institucional da Clínica Arvorear sobre acolher, nutrir e celebrar cada caminho." fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
            </ParallaxMedia>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Famílias no centro" title={<>A família não fica do lado de fora <span className="italic text-root">do processo.</span></>} description="Quem convive com a criança traz informações que nenhuma sessão, sozinha, consegue oferecer. Por isso, escuta, orientação e decisões compartilhadas fazem parte do acompanhamento." />
            <div className="mt-8 space-y-3 border-l border-root/25 pl-6 text-sm leading-7 text-ink/70">
              <p>Orientações conectadas às situações reais da rotina.</p>
              <p>Espaço para dúvidas, limites e prioridades da família.</p>
              <p>Alinhamento com escola e rede de apoio quando fizer sentido.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary mt-9"><MessageCircle size={18} /> Conversar com a equipe <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
