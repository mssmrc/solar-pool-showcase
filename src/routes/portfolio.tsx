import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo } from "react";
import {
  cases,
  CASE_TYPE_LABEL,
  formatInstallDate,
  getUniqueCities,
  type CaseType,
} from "@/data/cases";
import { cn } from "@/lib/utils";

const TYPE_VALUES = ["all", "residencial", "comercial", "condominio", "clube"] as const;

const vitrineSearchSchema = z.object({
  tipo: fallback(z.enum(TYPE_VALUES), "all").default("all"),
  cidade: fallback(z.string(), "all").default("all"),
});

export const Route = createFileRoute("/portfolio")({
  validateSearch: zodValidator(vitrineSearchSchema),
  head: () => ({
    meta: [
      { title: "Vitrine de Projetos - SolAqua" },
      {
        name: "description",
        content:
          "Conheça nossos projetos de aquecimento solar para piscinas: residencial, comercial, condomínios e clubes.",
      },
      { property: "og:title", content: "Vitrine de Projetos - SolAqua" },
      {
        property: "og:description",
        content: "Galeria de cases de aquecimento solar instalados pela SolAqua.",
      },
    ],
  }),
  component: VitrinePage,
});

function VitrinePage() {
  const { tipo, cidade } = Route.useSearch();
  const navigate = useNavigate({ from: "/vitrine" });
  const cities = useMemo(() => getUniqueCities(), []);

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      if (tipo !== "all" && c.type !== tipo) return false;
      if (cidade !== "all" && c.city !== cidade) return false;
      return true;
    });
  }, [tipo, cidade]);

  const setTipo = (t: (typeof TYPE_VALUES)[number]) =>
    navigate({ search: (prev: { tipo: string; cidade: string }) => ({ ...prev, tipo: t }) });

  const setCidade = (c: string) =>
    navigate({ search: (prev: { tipo: string; cidade: string }) => ({ ...prev, cidade: c }) });

  return (
    <>
      {/* HEADER */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Vitrine de <span className="text-primary">projetos</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Conheça alguns dos sistemas de aquecimento solar que já instalamos. Filtre por tipo de
            projeto ou cidade para encontrar cases parecidos com o seu.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="container mx-auto px-4 py-10">
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tipo de projeto
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={tipo === "all"} onClick={() => setTipo("all")}>
                Todos
              </FilterChip>
              {(Object.keys(CASE_TYPE_LABEL) as CaseType[]).map((t) => (
                <FilterChip key={t} active={tipo === t} onClick={() => setTipo(t)}>
                  {CASE_TYPE_LABEL[t]}
                </FilterChip>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cidade / região
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={cidade === "all"} onClick={() => setCidade("all")}>
                Todas
              </FilterChip>
              {cities.map((c) => (
                <FilterChip key={c} active={cidade === c} onClick={() => setCidade(c)}>
                  {c}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-10">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-muted-foreground">
                Nenhum projeto encontrado com esses filtros.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
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
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.summary}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{c.city}</span>
                      <span>{formatInstallDate(c.installedAt)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-soft"
          : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}
