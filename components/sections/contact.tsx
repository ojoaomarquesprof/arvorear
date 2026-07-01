import Image from "next/image";
import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { BrandMotif } from "@/components/ui/brand-motif";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { instagramUrl, mapsUrl, siteConfig, whatsappUrl } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-essence py-24 sm:py-32">
      <BrandMotif variant="rings" className="absolute -left-40 top-20 w-[34rem] text-root/[0.045]" />
      <Container>
        <Reveal className="mb-14 max-w-3xl lg:mb-20">
          <p className="eyebrow">Primeiro contato</p>
          <h2 className="display-title mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Conte o que você tem <span className="italic text-root">observado.</span></h2>
          <p className="body-copy mt-6 max-w-2xl">A equipe ouve a demanda, explica como a clínica trabalha e orienta um próximo passo possível. Essa conversa não cria compromisso com a continuidade.</p>
          <p className="mt-3 text-sm font-semibold text-root">O primeiro contato não substitui avaliação profissional.</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_0.8rem] bg-root text-sand shadow-[0_24px_65px_rgba(52,56,45,0.14)]">
              <div className="relative min-h-[270px] overflow-hidden lg:min-h-[340px]">
                <Image src="/assets/arvorear/espaco/hero/hero-fachada-real-wide.webp" alt="Fachada da Clínica Arvorear em Londrina." fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-root/60 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <p className="font-display text-3xl">Clínica Arvorear</p>
                <div className="mt-7 space-y-4 text-sm text-sand/85">
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition hover:text-sand"><MapPin size={18} className="mt-0.5 shrink-0" /> {siteConfig.address} <ArrowUpRight size={14} className="shrink-0" /></a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-sand"><MessageCircle size={18} /> {siteConfig.phoneDisplay}</a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-sand"><Mail size={18} /> {siteConfig.email}</a>
                  <p className="flex items-center gap-3"><Clock3 size={18} /> Atendimento com hora marcada</p>
                  {instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-sand"><Instagram size={18} /> Instagram <ArrowUpRight size={14} /></a> : null}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2.5rem_2.5rem_2.5rem_0.8rem] border border-root/10 bg-sand p-6 shadow-card sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-root/65">Contato pelo WhatsApp</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ink/70">Organizamos as informações em uma mensagem para você revisar antes de enviar. Nenhum dado é armazenado pelo site.</p>
              <div className="mt-8"><ContactForm /></div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
