/**
 * Configurações centrais do site.
 * Substitua os valores abaixo pelos dados reais da empresa.
 */
export const siteConfig = {
  name: "EDR Aquecedores",
  tagline: "Aquecimento Solar de Água",
  description:
    "Instalação e manutenção de sistemas de aquecimento solar de água para residências, condomínios e empresas. Água quente no chuveiro e nas torneiras com economia e sustentabilidade.",
  // Telefone no formato internacional, apenas números (para link do WhatsApp)
  whatsappNumber: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  email: "contato@edraquecedores.com.br",
  phone: "(11) 99999-9999",
  workingHours: "Seg a Sex, 8h às 18h • Sáb, 8h às 12h",
  serviceAreas: [
    "São Paulo - SP",
    "Campinas - SP",
    "Sorocaba - SP",
    "Jundiaí - SP",
    "Santos - SP",
    "Guarulhos - SP",
    "ABC Paulista",
    "Litoral Norte - SP",
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export function buildWhatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
