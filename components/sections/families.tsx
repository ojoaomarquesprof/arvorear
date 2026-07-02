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
            <SectionHeading eyebrow="Famílias no centro" title={<>A família ajuda a dar sentido <span className="italic text-root">ao que a equipe observa.</span></>} description="Quem acompanha a criança todos os dias percebe situações que uma sessão isolada não alcança. Essa leitura faz parte do cuidado." />
            <div className="mt-8 space-y-3 border-l border-root/25 pl-6 text-[0.95rem] leading-7 text-ink/70">
              <p>Estratégias possíveis dentro da rotina da casa.</p>
              <p>Espaço para dúvidas, limites e prioridades reais.</p>
              <p>Diálogo com escola e rede de apoio quando necessário.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary mt-9"><MessageCircle size={18} /> Conversar com a equipe <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
