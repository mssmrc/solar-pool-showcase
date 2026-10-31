import caseResidencial1 from "@/assets/case-residencial-1.jpg";
import caseResidencial2 from "@/assets/case-residencial-2.jpg";
import caseResidencial3 from "@/assets/case-residencial-3.jpg";
import caseComercial1 from "@/assets/case-comercial-1.jpg";
import caseCondominio1 from "@/assets/case-condominio-1.jpg";
import caseIndustrial1 from "@/assets/case-industrial-1.jpg";
import caseDetailPanels from "@/assets/case-detail-panels.jpg";

export type CaseType = "residencial" | "condominio" | "comercial" | "industrial";

export const CASE_TYPE_LABEL: Record<CaseType, string> = {
  residencial: "Residencial",
  condominio: "Condomínio",
  comercial: "Comercial",
  industrial: "Industrial",
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
    id: "residencia-vila-mariana-sp",
    title: "Residência - Vila Mariana",
    type: "residencial",
    city: "São Paulo - SP",
    installedAt: "2024-09",
    cover: caseResidencial1,
    gallery: [caseResidencial1, caseDetailPanels, caseResidencial2],
    summary:
      "Sistema com 2 coletores e boiler de 300 litros, garantindo banhos quentes para toda a família sem depender do chuveiro elétrico.",
    description:
      "Instalação completa de aquecimento solar de água em residência, abastecendo chuveiros e torneiras de toda a casa. A substituição do chuveiro elétrico trouxe uma queda visível na conta de energia, com retorno do investimento previsto em menos de 2 anos.",
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
      "Projeto integrado ao telhado de cerâmica, mantendo a estética da casa sem comprometer a performance do sistema.",
    description:
      "Sistema dimensionado para 4 banheiros e cozinha, com boiler de 500 litros e apoio elétrico para dias muito nublados. Posicionamento dos coletores estudado para integração visual com a arquitetura da casa.",
    highlight: true,
  },
  {
    id: "pousada-litoral-norte",
    title: "Pousada Beira-Mar",
    type: "comercial",
    city: "Litoral Norte - SP",
    installedAt: "2024-05",
    cover: caseComercial1,
    gallery: [caseComercial1, caseDetailPanels, caseIndustrial1],
    summary:
      "Aquecimento solar de água para 25 chalés e área comum, reduzindo drasticamente o custo com chuveiros elétricos.",
    description:
      "Projeto comercial com 30 coletores de alta eficiência e dois reservatórios térmicos. Estudo de carga térmica considerou a alta ocupação na temporada e a demanda simultânea de banhos dos hóspedes.",
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
      "Aquecimento central de água com sistema dimensionado para alto volume de uso dos moradores.",
    description:
      "Substituição do aquecimento elétrico central por sistema solar em um condomínio de 40 unidades. Dimensionamento considerou o uso intenso nos finais de semana e horários de pico de banho.",
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
    summary: "Instalação em residência com telhado de baixa inclinação e estrutura auxiliar.",
    description:
      "Projeto desafiador com coletores instalados em telhado de baixa inclinação, exigindo estrutura auxiliar para garantir o ângulo solar ideal e máxima eficiência no aquecimento.",
  },
  {
    id: "industria-sorocaba",
    title: "Indústria - Distrito Industrial",
    type: "industrial",
    city: "Sorocaba - SP",
    installedAt: "2023-08",
    cover: caseIndustrial1,
    gallery: [caseIndustrial1, caseDetailPanels, caseComercial1],
    summary:
      "Sistema de grande porte para água quente nos vestiários e refeitório de fábrica.",
    description:
      "Projeto de grande porte com 60 coletores a vácuo distribuídos em duas coberturas distintas. Sistema com bombeamento automatizado e controle de temperatura por setor, atendendo turnos de produção inteiros.",
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
      "Serviço de manutenção e reativação de sistema antigo. Trocamos válvulas, tubulações deterioradas pelo sol e fizemos a limpeza profunda dos coletores, recuperando a eficiência original do aquecimento.",
  },
  {
    id: "condominio-guarulhos",
    title: "Condomínio Residencial - Guarulhos",
    type: "condominio",
    city: "Guarulhos - SP",
    installedAt: "2023-12",
    cover: caseCondominio1,
    gallery: [caseCondominio1, caseDetailPanels, caseIndustrial1],
    summary: "Sistema dimensionado para uso coletivo com economia significativa na conta de energia.",
    description:
      "Substituição parcial do aquecimento elétrico por sistema solar. Hoje o condomínio usa a resistência de apoio apenas em dias muito frios e nublados, gerando economia mensal expressiva.",
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
