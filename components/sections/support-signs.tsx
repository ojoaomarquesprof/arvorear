import { AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { supportSigns } from "@/lib/site-data";

export function SupportSigns() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Quando procurar apoio?" title={<>Dúvida não é diagnóstico. É um motivo para <span className="italic text-root">observar com cuidado.</span></>} description="Mudanças na comunicação, na aprendizagem, no comportamento ou na autonomia podem merecer um olhar profissional. O objetivo não é rotular: é compreender o que a criança precisa agora." />
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
      </Container>
    </section>
  );
}
