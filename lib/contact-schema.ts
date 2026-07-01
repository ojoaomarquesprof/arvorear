import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Conte para nós o seu nome."),
  phone: z.string().trim().min(10, "Informe um telefone com DDD.").max(20, "Confira o telefone informado."),
  childAge: z.string().trim().min(1, "Informe a idade da criança.").max(40, "Confira a idade informada."),
  message: z.string().trim().min(10, "Compartilhe um pouco mais para acolhermos melhor seu contato.").max(600, "A mensagem deve ter no máximo 600 caracteres."),
  consent: z.boolean().refine((value) => value, "Confirme que podemos abrir a conversa no WhatsApp."),
});

export type ContactData = z.infer<typeof contactSchema>;
