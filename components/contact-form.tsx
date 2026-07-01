"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactData } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

const fieldError = "mt-1.5 text-xs font-medium text-[#8c4938]";

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", childAge: "", message: "", consent: false },
  });

  function onSubmit(data: ContactData) {
    const message = [
      siteConfig.whatsappMessage,
      "",
      `Meu nome: ${data.name}`,
      `Meu telefone: ${data.phone}`,
      `Idade da criança: ${data.childAge}`,
      `Mensagem: ${data.message}`,
    ].join("\n");

    const url = `https://wa.me/${siteConfig.phoneInternational}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-root">Seu nome</label>
          <input id="name" autoComplete="name" className="field" placeholder="Como podemos chamar você?" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
          {errors.name ? <p id="name-error" className={fieldError}>{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-root">Telefone</label>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" placeholder="(43) 99999-9999" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} />
          {errors.phone ? <p id="phone-error" className={fieldError}>{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="childAge" className="mb-2 block text-sm font-semibold text-root">Idade da criança</label>
        <input id="childAge" inputMode="numeric" className="field" placeholder="Ex.: 4 anos" aria-invalid={!!errors.childAge} aria-describedby={errors.childAge ? "age-error" : undefined} {...register("childAge")} />
        {errors.childAge ? <p id="age-error" className={fieldError}>{errors.childAge.message}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-root">Como podemos ajudar?</label>
        <textarea id="message" rows={5} className="field resize-y" placeholder="Conte, com tranquilidade, o que trouxe sua família até aqui..." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
        {errors.message ? <p id="message-error" className={fieldError}>{errors.message.message}</p> : null}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-ink/70">
          <input type="checkbox" className="mt-1 size-4 rounded border-root/30 accent-root" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-error" : undefined} {...register("consent")} />
          <span>
            Li a <a href="/politica-de-privacidade" target="_blank" className="font-semibold text-root underline underline-offset-2">Política de Privacidade</a> e autorizo o uso destes dados apenas para retorno de contato pelo WhatsApp.
          </span>
        </label>
        {errors.consent ? <p id="consent-error" className={fieldError}>{errors.consent.message}</p> : null}
      </div>

      <button type="submit" className="button-primary w-full sm:w-auto"><MessageCircle size={18} /> Enviar pelo WhatsApp <ArrowUpRight size={16} /></button>
      <div className="space-y-1 text-xs leading-5 text-ink/60">
        <p>O site não armazena os dados preenchidos. Ao continuar, o WhatsApp será aberto em uma nova janela para você revisar e confirmar o envio.</p>
        <p className="font-semibold text-ink/70">O primeiro contato não substitui avaliação profissional.</p>
      </div>
    </form>
  );
}
