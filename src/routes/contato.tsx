import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { buildWhatsappUrl, siteConfig } from "@/config/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato - EDR Aquecedores | Aquecimento Solar de Água" },
      {
        name: "description",
        content:
          "Entre em contato com a EDR Aquecedores para orçamento de instalação ou manutenção de aquecimento solar de água para chuveiros e torneiras.",
      },
      { property: "og:title", content: "Contato - EDR Aquecedores" },
      {
        property: "og:description",
        content: "Solicite seu orçamento de aquecimento solar de água.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

const contactSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(80, "Nome muito longo"),
  telefone: z
    .string()
    .trim()
    .min(8, "Telefone inválido")
    .max(20, "Telefone inválido")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números e símbolos de telefone"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(120, "E-mail muito longo"),
  observacoes: z.string().trim().max(800, "Mensagem muito longa").optional(),
});

type ContactForm = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactForm, string>>;

const faqs = [
  {
    q: "Quanto tempo leva a instalação?",
    a: "Para residências, a instalação completa leva em média de 1 a 2 dias úteis, dependendo do porte do sistema e do telhado.",
  },
  {
    q: "Qual a garantia oferecida?",
    a: "Oferecemos garantia de 5 anos nos coletores e boiler e 1 ano nos serviços de instalação. Após esse período, mantemos atendimento de manutenção preventiva.",
  },
  {
    q: "Funciona em dias nublados?",
    a: "Sim, o sistema continua aquecendo mesmo com céu nublado, embora com menor eficiência. Em dias frios prolongados, a resistência auxiliar do boiler garante a água quente.",
  },
  {
    q: "Quanto vou economizar?",
    a: "O aquecimento de água representa grande parte da conta de energia de uma residência. Com o sistema solar, a economia pode chegar a até 30% no total da conta, com retorno em cerca de 2 anos.",
  },
];

function ContatoPage() {
  const [form, setForm] = useState<ContactForm>({
    nome: "",
    telefone: "",
    email: "",
    observacoes: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});

  const update = (k: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Por favor, corrija os campos destacados.");
      return;
    }

    const data = result.data;
    const message =
      `Olá, ${siteConfig.name}!%0A%0A` +
      `Meu nome é *${data.nome}*.%0A` +
      `📞 Telefone: ${data.telefone}%0A` +
      `✉️ E-mail: ${data.email}%0A` +
      (data.observacoes ? `%0A📝 Observações:%0A${data.observacoes}` : "") +
      `%0A%0AGostaria de receber mais informações sobre aquecimento solar de água.`;

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Abrindo WhatsApp com sua mensagem...");
  };

  return (
    <>
      {/* HEADER */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Vamos conversar sobre sua <span className="text-primary">piscina</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Solicite um orçamento sem compromisso. Nossa equipe responde rapidamente pelo
            WhatsApp.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* FORMULÁRIO */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="text-2xl font-bold">Envie sua mensagem</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha o formulário e finalize o envio diretamente pelo WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="nome">Nome *</Label>
                <Input
                  id="nome"
                  value={form.nome}
                  onChange={update("nome")}
                  placeholder="Seu nome completo"
                  aria-invalid={!!errors.nome}
                  maxLength={80}
                />
                {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    inputMode="tel"
                    value={form.telefone}
                    onChange={update("telefone")}
                    placeholder="(11) 99999-9999"
                    aria-invalid={!!errors.telefone}
                    maxLength={20}
                  />
                  {errors.telefone && (
                    <p className="text-xs text-destructive">{errors.telefone}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="seu@email.com"
                    aria-invalid={!!errors.email}
                    maxLength={120}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea
                  id="observacoes"
                  value={form.observacoes}
                  onChange={update("observacoes")}
                  placeholder="Tamanho da piscina, localização, dúvidas..."
                  rows={5}
                  maxLength={800}
                />
                {errors.observacoes && (
                  <p className="text-xs text-destructive">{errors.observacoes}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar pelo WhatsApp
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, abriremos o WhatsApp com sua mensagem já preenchida.
              </p>
            </form>
          </div>

          {/* INFORMAÇÕES */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
              <h2 className="text-2xl font-bold">Informações de contato</h2>

              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Telefone / WhatsApp
                    </p>
                    <a
                      href={buildWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Atendimento
                    </p>
                    <p className="font-medium">{siteConfig.workingHours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar/20 text-solar-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold">Área de atuação</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Atendemos as seguintes cidades e regiões:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {siteConfig.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tem alguma dúvida? Talvez já tenhamos a resposta.
          </p>

          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
