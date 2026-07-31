import { whatsappLink } from "@/lib/site-config";

export default function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Pronto para vender mais imóveis?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-muted">
        Fale agora com nosso time e receba um diagnóstico gratuito da sua
        presença digital em até 24 horas.
      </p>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-[#0b1120] transition hover:brightness-110"
      >
        Falar com um especialista
      </a>
    </section>
  );
}
