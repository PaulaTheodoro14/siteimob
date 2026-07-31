const testimonials = [
  {
    quote:
      "Em 60 dias triplicamos o número de visitas agendadas e reduzimos o custo por lead pela metade.",
    author: "Marina Costa",
    role: "Diretora, Imobiliária Costa & Silva",
  },
  {
    quote:
      "O tour virtual 3D mudou a forma como apresentamos os lançamentos. Fechamos vendas antes mesmo da obra ficar pronta.",
    author: "Rafael Nunes",
    role: "Corretor autônomo",
  },
  {
    quote:
      "A automação de leads no WhatsApp fez a equipe parar de perder contato de gente que já estava pronta para comprar.",
    author: "Juliana Prado",
    role: "Gerente comercial, Prado Imóveis",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="border-t border-white/10 bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Quem já vende com a gente
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-2xl border border-white/10 bg-background p-8"
            >
              <p className="text-foreground">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-muted">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
