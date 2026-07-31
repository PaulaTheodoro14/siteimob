import { whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(245,179,1,0.15),_transparent_60%)]" />
      <p className="mx-auto mb-4 w-fit rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-medium tracking-wide text-accent uppercase">
        Marketing Imobiliário
      </p>
      <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Mais visitas agendadas.
        <br />
        Mais imóveis vendidos.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
        Tráfego pago, fotos e tour 3D, conteúdo para redes sociais e
        automação de leads — tudo para transformar interesse em contrato
        assinado.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-8 py-3 font-semibold text-[#0b1120] transition hover:brightness-110"
        >
          Quero vender mais imóveis
        </a>
        <a
          href="#servicos"
          className="rounded-full border border-white/20 px-8 py-3 font-semibold text-foreground transition hover:border-white/40"
        >
          Ver serviços
        </a>
      </div>
    </section>
  );
}
