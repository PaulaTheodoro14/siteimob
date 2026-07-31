const stats = [
  { value: "3.2x", label: "mais leads qualificados por mês" },
  { value: "-38%", label: "no custo por lead com tráfego pago" },
  { value: "48h", label: "tempo médio até a primeira visita agendada" },
  { value: "+120", label: "imobiliárias e corretores atendidos" },
];

export default function Stats() {
  return (
    <section id="resultados" className="border-y border-white/10 bg-card/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-accent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
