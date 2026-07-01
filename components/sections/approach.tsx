import { ArrowDownRight } from "lucide-react";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { approachSteps } from "@/lib/site-data";

export function Approach() {
  return (
    <section id="abordagem" className="relative overflow-hidden py-24 sm:py-32">
      <BrandMotif variant="rings" className="absolute -right-24 top-28 w-[30rem] text-root/[0.055]" />
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Nossa abordagem" title={<>Um plano clínico que acompanha a criança — <span className="italic text-root">não o contrário.</span></>} description="O percurso parte da escuta, ganha direção com a avaliação e permanece aberto a revisão. Objetivos mudam quando a criança e sua realidade mudam." />
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full border border-root/15 text-root lg:size-32"><ArrowDownRight size={38} strokeWidth={1} /></div>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-root/15 md:block lg:left-1/2" aria-hidden="true" />
          {approachSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.04}>
              <article className={`premium-card relative mb-5 grid gap-5 rounded-3xl p-6 md:ml-14 lg:ml-0 lg:w-[calc(50%-2.5rem)] lg:p-8 ${index % 2 ? "lg:ml-auto" : ""}`}>
                <span className={`absolute left-[-2.65rem] top-8 hidden size-5 rounded-full border-4 border-sand bg-root md:block lg:left-auto ${index % 2 ? "lg:-left-[3.15rem]" : "lg:-right-[3.15rem]"}`} aria-hidden="true" />
                <div className="flex items-center justify-between"><span className="font-display text-xl italic text-root/55">{step.number}</span><span className="h-px w-16 bg-root/15" /></div>
                <h3 className="font-display text-3xl text-root">{step.title}</h3>
                <p className="text-sm leading-7 text-ink/70">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
