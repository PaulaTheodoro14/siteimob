export const siteConfig = {
  brand: "Chave Digital",
  tagline: "Marketing Imobiliário que Vende",
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Quero saber mais sobre os serviços de marketing imobiliário.",
  email: "contato@chavedigital.com.br",
};

export function whatsappLink(message = siteConfig.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
