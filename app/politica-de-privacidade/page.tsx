import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Clínica Arvorear trata as informações enviadas pelo formulário de contato do site.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const sections = [
  {
    title: "Quais dados são solicitados",
    content: (
      <>
        <p>O formulário solicita nome, telefone, idade da criança e uma breve mensagem sobre o motivo do contato.</p>
        <p>Compartilhe apenas o necessário para iniciarmos a conversa. Não envie laudos, documentos, informações médicas detalhadas ou outros dados sensíveis pelo formulário.</p>
      </>
    ),
  },
  {
    title: "Como os dados são usados",
    content: (
      <p>As informações preenchidas são usadas exclusivamente para preparar uma mensagem de WhatsApp e permitir o retorno de contato da equipe. Elas não são usadas para publicidade, não são vendidas e não são compartilhadas pela clínica com terceiros para fins comerciais.</p>
    ),
  },
  {
    title: "Envio e armazenamento",
    content: (
      <>
        <p>O site não possui backend para o formulário e não armazena localmente os dados preenchidos. Ao enviar, a mensagem é montada no seu navegador e o WhatsApp é aberto para que você revise e confirme o conteúdo.</p>
        <p>O envio só acontece após sua confirmação no WhatsApp. A partir desse momento, o tratamento da conversa também segue os termos e a política de privacidade do WhatsApp.</p>
      </>
    ),
  },
  {
    title: "Cookies e serviços externos",
    content: (
      <p>Este site não utiliza intencionalmente cookies de publicidade ou ferramentas de rastreamento. Links para WhatsApp, Instagram e Google Maps levam a serviços externos, que possuem políticas próprias e podem tratar dados quando você os acessa.</p>
    ),
  },
  {
    title: "Seus direitos",
    content: (
      <p>Você pode solicitar informações, correção ou exclusão de dados que tenham sido enviados e mantidos na conversa com a clínica. Para isso, entre em contato pelo e-mail indicado abaixo.</p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="border-b border-root/10 bg-sand">
        <Container className="flex min-h-24 items-center justify-between gap-5">
          <Link href="/" aria-label="Clínica Arvorear — voltar para a página inicial">
            <Logo className="-ml-3" priority />
          </Link>
          <Link href="/" className="button-secondary !min-h-10 !px-4">
            <ArrowLeft size={16} aria-hidden="true" /> Voltar ao site
          </Link>
        </Container>
      </header>

      <main id="conteudo" className="bg-essence py-16 sm:py-24">
        <Container className="max-w-4xl">
          <div className="rounded-[2.5rem_2.5rem_2.5rem_0.8rem] border border-root/10 bg-sand p-7 shadow-card sm:p-12 lg:p-16">
            <p className="eyebrow">LGPD e transparência</p>
            <h1 className="display-title mt-5 text-4xl sm:text-6xl">Política de Privacidade</h1>
            <p className="body-copy mt-6">Esta política explica, em linguagem simples, como as informações do formulário de contato são tratadas pela Clínica Arvorear.</p>

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <section key={section.title} aria-labelledby={section.title.replaceAll(" ", "-").toLowerCase()}>
                  <h2 id={section.title.replaceAll(" ", "-").toLowerCase()} className="font-display text-2xl text-root sm:text-3xl">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-ink/75 sm:text-base">{section.content}</div>
                </section>
              ))}

              <section aria-labelledby="limites-atendimento" className="rounded-3xl border border-root/15 bg-essence/60 p-6 sm:p-8">
                <h2 id="limites-atendimento" className="font-display text-2xl text-root">Limites do primeiro contato</h2>
                <p className="mt-3 text-sm leading-7 text-ink/75 sm:text-base">O formulário e a conversa inicial servem apenas para acolher a demanda e orientar os próximos passos. Não são realizados diagnóstico, avaliação clínica ou atendimento de urgência pelo site.</p>
                <p className="mt-3 font-semibold text-ink">O primeiro contato não substitui avaliação profissional.</p>
              </section>

              <section aria-labelledby="contato-privacidade">
                <h2 id="contato-privacidade" className="font-display text-2xl text-root sm:text-3xl">Contato sobre privacidade</h2>
                <p className="mt-3 text-sm leading-7 text-ink/75 sm:text-base">Para dúvidas ou solicitações relacionadas a dados pessoais:</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-root underline decoration-root/30 underline-offset-4 hover:decoration-root">
                  <Mail size={17} aria-hidden="true" /> {siteConfig.email}
                </a>
              </section>
            </div>

            <p className="mt-12 border-t border-root/10 pt-6 text-xs text-ink/55">Última atualização: 1º de julho de 2026.</p>
          </div>
        </Container>
      </main>
    </>
  );
}
