import { whatsappLink } from "@/lib/site-config";

const plans = [
  {
    name: "Essencial",
    price: "R$ 1.490",
    period: "/mês",
    description: "Para corretores autônomos que querem gerar leads todo mês.",
    features: [
      "Tráfego pago (Meta Ads)",
      "1 anúncio ativo por vez",
      "Relatório mensal de resultados",
      "Suporte via WhatsApp",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 2.990",
    period: "/mês",
    description: "Para imobiliárias que querem escalar leads e conteúdo.",
    features: [
      "Tráfego pago (Meta e Google Ads)",
      "Fotos e tour virtual 3D (2 imóveis/mês)",
      "Gestão de redes sociais",
      "Automação de leads no WhatsApp",
      "Relatório quinzenal",
    ],
    highlighted: true,
  },
  {
    name: "Escala",
    price: "Sob consulta",
    period: "",
    description: "Para redes e incorporadoras com múltiplos lançamentos.",
    features: [
      "Tudo do plano Profissional",
      "Fotos e tour 3D ilimitados",
      "CRM dedicado e automações avançadas",
      "Gerente de conta exclusivo",
      "Relatório semanal",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Planos</h2>
        <p className="mt-4 text-muted">
          Escolha o plano que se encaixa no tamanho da sua operação. Sem
          contrato de fidelidade.
        </p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              plan.highlighted
                ? "border-accent bg-card shadow-[0_0_0_1px_rgba(245,179,1,0.3)]"
                : "border-white/10 bg-card"
            }`}
          >
            {plan.highlighted && (
              <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-[#0b1120]">
                Mais popular
              </span>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>
            <p className="mt-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-muted">{plan.period}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-muted">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(`Olá! Tenho interesse no plano ${plan.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition ${
                plan.highlighted
                  ? "bg-accent text-[#0b1120] hover:brightness-110"
                  : "border border-white/20 text-foreground hover:border-white/40"
              }`}
            >
              Quero esse plano
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
