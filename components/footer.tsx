import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site-data";
import { instagramUrl, mapsUrl, siteConfig, whatsappUrl } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16 text-sand sm:pt-20">
      <Container>
        <div className="grid gap-12 border-b border-sand/10 pb-14 md:grid-cols-[1.25fr_0.75fr_1fr]">
          <div>
            <Logo light className="-ml-3" />
            <p className="mt-6 max-w-sm font-display text-3xl leading-tight text-sand/90">Desenvolvimento infantil com escuta clínica, integração e participação da família.</p>
            <p className="mt-5 text-[0.8125rem] uppercase tracking-[0.14em] text-peach">Afeto • Ciência • Desenvolvimento</p>
          </div>
          <div>
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-peach">Navegue</p>
            <nav className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1" aria-label="Navegação do rodapé">
              {navigation.map((item) => <a key={item.href} href={item.href} className="w-fit text-[0.95rem] text-sand/75 transition hover:text-sand">{item.label}</a>)}
            </nav>
          </div>
          <div>
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-peach">Contato</p>
            <div className="mt-5 space-y-4 text-[0.95rem] leading-6 text-sand/75">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-sand"><MessageCircle size={17} /> {siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-sand"><Mail size={17} /> {siteConfig.email}</a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-sand"><Instagram size={17} /> @clinicaarvorear <ArrowUpRight size={14} /></a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition hover:text-sand"><MapPin size={17} className="mt-0.5 shrink-0" /> {siteConfig.address} <ArrowUpRight size={14} className="shrink-0" /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-sm leading-6 text-sand/60 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Clínica Arvorear. Todos os direitos reservados.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a href="/politica-de-privacidade" className="w-fit underline decoration-sand/30 underline-offset-4 transition hover:text-sand">Política de Privacidade</a>
            <p>O primeiro contato não substitui avaliação profissional.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
