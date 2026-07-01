import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { careAreas } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/site-config";

export function Multidisciplinary() {
  return (
    <section id="especialidades" className="relative overflow-hidden bg-root py-24 text-sand sm:py-32">
      <BrandMotif variant="roots" className="absolute -bottom-10 right-0 w-[42rem] text-sand/[0.055]" />
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <SectionHeading eyebrow="Cuidado multidisciplinar" title={<>Integração clínica para compreender a criança <span className="italic text-peach">por inteiro.</span></>} className="[&_.display-title]:text-sand [&_.eyebrow]:!text-essence/90 [&_.eyebrow]:before:!bg-peach/70" />
          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-base leading-8 text-sand/85">A troca entre áreas evita intervenções desconectadas. Informações, objetivos e decisões são compartilhados para que o acompanhamento tenha direção clínica e sentido na rotina.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 border-b border-peach/50 pb-2 text-sm font-semibold text-sand/90 transition hover:border-peach hover:text-sand"><MessageCircle size={16} aria-hidden="true" /> Conversar com a equipe <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {careAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={index * 0.05}>
                <article className="group flex min-h-[250px] flex-col rounded-[1.8rem_1.8rem_1.8rem_0.6rem] border border-sand/10 bg-sand/[0.045] p-7 transition duration-500 hover:-translate-y-1 hover:border-serene/35 hover:bg-sand/[0.075] hover:shadow-[0_22px_55px_rgba(31,35,27,0.16)] motion-reduce:transform-none">
                  <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-full border border-sand/15 text-peach transition group-hover:border-serene/40 group-hover:bg-sand/10"><Icon size={20} strokeWidth={1.5} /></span><span className="font-display text-lg italic text-sand/35">0{index + 1}</span></div>
                  <div className="mt-auto pt-10"><h3 className="font-display text-2xl text-sand">{area.title}</h3><p className="mt-3 text-sm leading-7 text-sand/80">{area.text}</p></div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
