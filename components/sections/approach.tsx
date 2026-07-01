import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { approachSteps } from "@/lib/site-data";

export function Approach() {
  return (
    <section id="abordagem" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Nossa abordagem" title={<>Um percurso que pode mudar <span className="italic text-root">quando a criança muda.</span></>} description="A escuta abre o caminho, a avaliação organiza prioridades e as revisões mantêm o plano conectado à vida real." />
          <div className="relative hidden h-[270px] w-[310px] shrink-0 items-center justify-center lg:flex" aria-hidden="true">
            <div className="pointer-events-none absolute size-[250px] rounded-full border border-root/[0.06] bg-serene/[0.08] blur-[1px]" />
            <Image
              src="/assets/arvorear/brand/logos/webp/simbolo-coral-transparent.webp"
              alt=""
              aria-hidden="true"
              width={343}
              height={304}
              className="pointer-events-none relative w-[280px] -rotate-3 object-contain opacity-[0.13] mix-blend-multiply"
            />
          </div>
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
