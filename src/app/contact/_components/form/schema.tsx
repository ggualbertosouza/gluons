import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(5, "Mensagem é obrigatória"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
