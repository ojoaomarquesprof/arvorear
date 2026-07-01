import { AlertCircle, ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { supportSigns } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/site-config";

export function SupportSigns() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Quando procurar apoio?" title={<>Perceber uma dificuldade não é fechar um diagnóstico. É abrir espaço para <span className="italic text-root">compreender melhor.</span></>} description="Mudanças na comunicação, aprendizagem, interação ou autonomia podem merecer um olhar profissional — sem pressa para rotular." />
            <div className="mt-8 flex gap-3 rounded-2xl border border-root/15 bg-root/[0.045] p-5">
              <AlertCircle size={20} className="mt-1 shrink-0 text-root" />
              <p className="text-sm leading-7 text-ink/70">Esses sinais, isoladamente, não definem um diagnóstico. Uma avaliação responsável considera história, contexto e desenvolvimento global.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {supportSigns.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.text} delay={index * 0.035}>
                  <div className="premium-card group flex min-h-28 items-center gap-4 rounded-[1.5rem_1.5rem_1.5rem_0.5rem] p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-essence text-root transition group-hover:bg-root group-hover:text-sand"><Icon size={19} strokeWidth={1.5} /></span>
                    <p className="text-sm font-semibold leading-6 text-ink/70">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-6 rounded-[2rem_2rem_2rem_0.65rem] bg-root px-6 py-7 text-sand sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div>
            <p className="font-display text-2xl">Não sabe se é o momento de procurar ajuda?</p>
            <p className="mt-2 text-sm leading-6 text-sand/70">Uma conversa inicial pode ajudar a organizar a dúvida e indicar o próximo passo possível.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary shrink-0 !bg-sand !text-root hover:!bg-essence"><MessageCircle size={17} /> Falar com a equipe <ArrowUpRight size={15} /></a>
        </Reveal>
      </Container>
    </section>
  );
}
