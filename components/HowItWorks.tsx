const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Analisamos seu portfólio de imóveis, presença online e concorrência local.",
  },
  {
    number: "02",
    title: "Plano sob medida",
    description:
      "Definimos canais, orçamento e metas de leads e visitas para os próximos 90 dias.",
  },
  {
    number: "03",
    title: "Execução e otimização",
    description:
      "Colocamos campanhas, conteúdo e automações no ar, ajustando toda semana com dados reais.",
  },
  {
    number: "04",
    title: "Relatório e escala",
    description:
      "Você acompanha leads, visitas e vendas em um relatório simples, e escalamos o que funciona.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Como funciona</h2>
        <p className="mt-4 text-muted">
          Um processo simples, sem contrato de fidelidade e com resultado
          mensurável desde o primeiro mês.
        </p>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number}>
            <span className="text-sm font-bold text-accent">{step.number}</span>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
