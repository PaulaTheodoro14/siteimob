const services = [
  {
    title: "Tráfego pago (Meta e Google Ads)",
    description:
      "Campanhas segmentadas por bairro, faixa de preço e perfil de comprador para gerar leads qualificados todos os dias.",
    icon: "📈",
  },
  {
    title: "Fotos e tour virtual 3D",
    description:
      "Produção profissional de fotos, vídeos e tours imersivos que fazem o imóvel se destacar nos portais e redes sociais.",
    icon: "🏠",
  },
  {
    title: "Redes sociais e conteúdo",
    description:
      "Gestão de Instagram e TikTok com reels, stories e posts pensados para corretores e imobiliárias venderem autoridade.",
    icon: "🎥",
  },
  {
    title: "CRM e automação de leads",
    description:
      "Captação, qualificação e nutrição automática via WhatsApp e CRM, para nenhum lead esfriar antes do contato do corretor.",
    icon: "🤖",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Tudo que sua imobiliária precisa em um só lugar
        </h2>
        <p className="mt-4 text-muted">
          Da primeira impressão ao contrato assinado, cuidamos de cada etapa
          da jornada do comprador.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-card p-8 transition hover:border-accent/40"
          >
            <span className="text-3xl">{service.icon}</span>
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
