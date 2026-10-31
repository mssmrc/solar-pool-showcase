import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Calendar, Tag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCaseById, CASE_TYPE_LABEL, formatInstallDate, type ProjectCase } from "@/data/cases";
import { buildWhatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/$caseId")({
  loader: ({ params }) => {
    const data = getCaseById(params.caseId);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    return {
      meta: [
        { title: `${loaderData.title} - SolAqua` },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: `${loaderData.title} - SolAqua` },
        { property: "og:description", content: loaderData.summary },
        { property: "og:image", content: loaderData.cover },
        { name: "twitter:image", content: loaderData.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Projeto não encontrado</h1>
      <p className="mt-3 text-muted-foreground">
        O projeto que você procura não existe ou foi removido.
      </p>
      <Button asChild className="mt-6">
        <Link to="/vitrine">Voltar para a vitrine</Link>
      </Button>
    </div>
  ),
  component: CaseDetailPage,
});

function CaseDetailPage() {
  const data = Route.useLoaderData() as ProjectCase;
  const [activeImg, setActiveImg] = useState(0);

  return (
    <article className="container mx-auto px-4 py-10 md:py-14">
      <Link
        to="/vitrine"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para a vitrine
      </Link>

      <header className="mt-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Tag className="h-3 w-3" />
          {CASE_TYPE_LABEL[data.type]}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{data.title}</h1>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            {data.city}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" />
            Instalado em {formatInstallDate(data.installedAt)}
          </span>
        </div>
      </header>

      {/* GALERIA */}
      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <img
            src={data.gallery[activeImg]}
            alt={`${data.title} - foto ${activeImg + 1}`}
            width={1280}
            height={960}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
          {data.gallery.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImg(i)}
              className={cn(
                "h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition-all lg:h-24 lg:w-32",
                i === activeImg
                  ? "border-primary shadow-soft"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">Sobre o projeto</h2>
          <p className="mt-3 text-muted-foreground">{data.summary}</p>
          <p className="mt-4 text-foreground/90 leading-relaxed">{data.description}</p>
        </div>

        <aside className="rounded-2xl border border-border bg-gradient-primary p-6 text-primary-foreground shadow-soft">
          <h3 className="text-lg font-semibold">Quero um projeto assim</h3>
          <p className="mt-2 text-sm text-primary-foreground/90">
            Fale com nossa equipe e receba um orçamento sem compromisso para sua piscina.
          </p>
          <Button
            asChild
            className="mt-5 w-full bg-solar text-solar-foreground hover:bg-solar/90"
          >
            <a
              href={buildWhatsappUrl(
                `Olá! Vi o projeto "${data.title}" no site e gostaria de um orçamento parecido.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="mt-3 w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/contato">Enviar por formulário</Link>
          </Button>
        </aside>
      </div>
    </article>
  );
}
