import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, Wrench, ShieldCheck, PiggyBank, MessageCircle, ArrowRight } from "lucide-react";
import heroPool from "@/assets/hero-pool.jpg";
import { Button } from "@/components/ui/button";
import { featuredCases, formatInstallDate, CASE_TYPE_LABEL } from "@/data/cases";
import { buildWhatsappUrl, siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SolAqua - Aquecimento Solar para Piscinas | Instalação e Manutenção" },
      {
        name: "description",
        content:
          "Especialistas em instalação e manutenção de placas de aquecimento solar para piscinas. Economia, conforto e sua piscina aquecida o ano todo.",
      },
      {
        property: "og:title",
        content: "SolAqua - Aquecimento Solar para Piscinas",
      },
      {
        property: "og:description",
        content: "Instalação e manutenção de aquecimento solar para piscinas com qualidade.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: Wrench,
    title: "Instalação especializada",
    text: "Equipe técnica própria, projeto dimensionado para sua piscina e instalação limpa e rápida.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia e suporte",
    text: "Garantia completa do sistema e atendimento pós-venda para qualquer eventualidade.",
  },
  {
    icon: PiggyBank,
    title: "Economia real",
    text: "Energia 100% gratuita do sol, com retorno do investimento em até 2 anos.",
  },
  {
    icon: Sun,
    title: "Sustentável",
    text: "Energia limpa e renovável, sem emissão de CO₂ e sem custo de operação.",
  },
];

const steps = [
  { n: "01", title: "Avaliação", text: "Visita técnica gratuita para entender sua piscina e telhado." },
  { n: "02", title: "Projeto", text: "Dimensionamento personalizado e proposta sem compromisso." },
  { n: "03", title: "Instalação", text: "Equipe própria realiza a instalação em poucos dias." },
  { n: "04", title: "Manutenção", text: "Acompanhamento e suporte para garantir alto desempenho." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPool}
            alt="Piscina aquecida com placas solares"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sun className="h-3.5 w-3.5 text-solar" />
              Aquecimento solar para piscinas
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Aproveite sua piscina <span className="text-solar">o ano todo</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90 md:text-xl">
              Instalação e manutenção de placas de aquecimento solar com economia, eficiência e
              atendimento especializado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-solar text-solar-foreground hover:bg-solar/90"
              >
                <a
                  href={buildWhatsappUrl(
                    `Olá! Gostaria de um orçamento de aquecimento solar para minha piscina.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Pedir orçamento
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              >
                <Link to="/vitrine">
                  Ver projetos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Por que escolher a {siteConfig.name}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mais de uma década aquecendo piscinas com tecnologia solar de ponta.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Como funciona</h2>
            <p className="mt-4 text-muted-foreground">
              Um processo simples, transparente e sem surpresas.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-card p-6 shadow-soft">
                <span className="text-3xl font-extrabold text-primary/30">{s.n}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES EM DESTAQUE */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projetos em destaque</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Conheça alguns dos projetos que entregamos com excelência.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/vitrine">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCases.map((c) => (
            <Link
              key={c.id}
              to="/vitrine/$caseId"
              params={{ caseId: c.id }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {CASE_TYPE_LABEL[c.type]}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-tight">{c.title}</h3>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{c.city}</span>
                  <span>{formatInstallDate(c.installedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-elegant md:p-14">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-solar/30 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Pronto para aquecer sua piscina?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/90">
                Fale agora com nossa equipe e receba um orçamento sem compromisso.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-solar text-solar-foreground hover:bg-solar/90"
              >
                <a
                  href={buildWhatsappUrl(
                    `Olá! Gostaria de um orçamento de aquecimento solar para minha piscina.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/contato">Formulário</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
