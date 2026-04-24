import caseResidencial1 from "@/assets/case-residencial-1.jpg";
import caseResidencial2 from "@/assets/case-residencial-2.jpg";
import caseResidencial3 from "@/assets/case-residencial-3.jpg";
import caseComercial1 from "@/assets/case-comercial-1.jpg";
import caseCondominio1 from "@/assets/case-condominio-1.jpg";
import caseClube1 from "@/assets/case-clube-1.jpg";
import caseDetailPanels from "@/assets/case-detail-panels.jpg";

export type CaseType = "residencial" | "comercial" | "condominio" | "clube";

export const CASE_TYPE_LABEL: Record<CaseType, string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  condominio: "Condomínio",
  clube: "Clube",
};

export interface ProjectCase {
  id: string;
  title: string;
  type: CaseType;
  city: string;
  installedAt: string; // ISO yyyy-mm
  cover: string;
  gallery: string[];
  summary: string;
  description: string;
  highlight?: boolean; // aparece em destaque na home
}

export const cases: ProjectCase[] = [
  {
    id: "residencia-jardim-europa-sp",
    title: "Residência - Jardim Europa",
    type: "residencial",
    city: "São Paulo - SP",
    installedAt: "2024-09",
    cover: caseResidencial1,
    gallery: [caseResidencial1, caseDetailPanels, caseResidencial2],
    summary:
      "Sistema completo instalado em telhado de cerâmica, com aproveitamento máximo da insolação durante o dia.",
    description:
      "Instalação completa de aquecimento solar em residência de alto padrão, com acompanhamento de obra e integração ao sistema de filtragem existente. O cliente passou a usar a piscina o ano inteiro, com retorno do investimento previsto em 24 meses.",
    highlight: true,
  },
  {
    id: "casa-de-campo-campinas",
    title: "Casa de Campo - Alphaville Campinas",
    type: "residencial",
    city: "Campinas - SP",
    installedAt: "2024-07",
    cover: caseResidencial2,
    gallery: [caseResidencial2, caseDetailPanels, caseResidencial3],
    summary:
      "Projeto integrado com deck de madeira e iluminação, mantendo a estética sem comprometer a performance.",
    description:
      "Sistema dimensionado para piscina de 42 m² com cobertura térmica auxiliar. Posicionamento das placas estudado para integração visual com o paisagismo da casa.",
    highlight: true,
  },
  {
    id: "hotel-litoral-norte",
    title: "Hotel Beira-Mar",
    type: "comercial",
    city: "Litoral Norte - SP",
    installedAt: "2024-05",
    cover: caseComercial1,
    gallery: [caseComercial1, caseDetailPanels, caseClube1],
    summary:
      "Aquecimento de piscina comercial de grande porte, ampliando a temporada de uso para hóspedes o ano todo.",
    description:
      "Projeto comercial com 60 placas de alta eficiência. Estudo de carga térmica considerando ventos da orla e sombreamento parcial em parte do dia.",
    highlight: true,
  },
  {
    id: "condominio-vila-nova",
    title: "Condomínio Vila Nova",
    type: "condominio",
    city: "São Paulo - SP",
    installedAt: "2024-03",
    cover: caseCondominio1,
    gallery: [caseCondominio1, caseDetailPanels, caseResidencial1],
    summary:
      "Aquecimento da piscina coletiva com sistema dimensionado para alto volume de uso de moradores.",
    description:
      "Substituição de sistema antigo por novas placas de aquecimento solar. Dimensionamento considerando uso intenso nos finais de semana e feriados.",
    highlight: true,
  },
  {
    id: "casa-vista-jundiai",
    title: "Casa com Vista - Jundiaí",
    type: "residencial",
    city: "Jundiaí - SP",
    installedAt: "2023-11",
    cover: caseResidencial3,
    gallery: [caseResidencial3, caseDetailPanels, caseResidencial2],
    summary: "Instalação em residência com vista panorâmica e piscina de borda infinita.",
    description:
      "Projeto desafiador com placas instaladas em telhado de baixa inclinação, exigindo estrutura auxiliar para garantir o ângulo solar ideal.",
  },
  {
    id: "clube-sorocaba",
    title: "Clube Esportivo Central",
    type: "clube",
    city: "Sorocaba - SP",
    installedAt: "2023-08",
    cover: caseClube1,
    gallery: [caseClube1, caseDetailPanels, caseComercial1],
    summary:
      "Piscina semi-olímpica aquecida para atender atletas e associados durante todo o inverno.",
    description:
      "Projeto de grande porte com 120 placas distribuídas em três coberturas distintas. Sistema com retorno automatizado e controle de temperatura por setor.",
  },
  {
    id: "manutencao-santos",
    title: "Manutenção Preventiva - Santos",
    type: "residencial",
    city: "Santos - SP",
    installedAt: "2024-02",
    cover: caseDetailPanels,
    gallery: [caseDetailPanels, caseResidencial1, caseResidencial3],
    summary: "Limpeza, troca de tubulações e reativação de sistema solar de 8 anos.",
    description:
      "Serviço de manutenção e reativação de sistema antigo. Trocamos válvulas, tubulações deterioradas pelo sol e fizemos limpeza profunda dos coletores.",
  },
  {
    id: "condominio-guarulhos",
    title: "Condomínio Residencial - Guarulhos",
    type: "condominio",
    city: "Guarulhos - SP",
    installedAt: "2023-12",
    cover: caseCondominio1,
    gallery: [caseCondominio1, caseDetailPanels, caseClube1],
    summary: "Sistema dimensionado para uso coletivo com economia significativa em gás.",
    description:
      "Substituição parcial do aquecimento a gás por sistema solar. Hoje o condomínio usa o gás apenas em dias muito frios e nublados, gerando economia mensal expressiva.",
  },
];

export const featuredCases = cases.filter((c) => c.highlight);

export function getCaseById(id: string) {
  return cases.find((c) => c.id === id);
}

export function getUniqueCities() {
  return Array.from(new Set(cases.map((c) => c.city))).sort();
}

export function formatInstallDate(iso: string) {
  const [year, month] = iso.split("-").map(Number);
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  return `${months[(month ?? 1) - 1]}/${year}`;
}
