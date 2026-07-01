import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/site-data";

export function Faq() {
  return (
    <section className="bg-root py-24 text-sand sm:py-32">
      <Container>
        <Reveal className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading eyebrow="Perguntas frequentes" title={<>O que as famílias costumam perguntar <span className="italic text-peach">antes do primeiro contato.</span></>} description="Respostas diretas, sem linguagem complicada." className="[&_.display-title]:text-sand [&_.body-copy]:text-sand/85 [&_.eyebrow]:!text-essence/90 [&_.eyebrow]:before:!bg-peach/70" />
          <div className="border-t border-sand/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-sand/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-display text-xl text-sand transition hover:text-essence marker:content-none sm:text-2xl">
                  {faq.question}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-sand/20 text-peach transition duration-300 group-hover:border-sand/35 group-open:rotate-45"><Plus size={17} /></span>
                </summary>
                <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-sand/85">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
