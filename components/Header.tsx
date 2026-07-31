import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold tracking-tight">
          {siteConfig.brand}
        </span>
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          <Link href="#servicos" className="hover:text-foreground">Serviços</Link>
          <Link href="#resultados" className="hover:text-foreground">Resultados</Link>
          <Link href="#como-funciona" className="hover:text-foreground">Como funciona</Link>
          <Link href="#planos" className="hover:text-foreground">Planos</Link>
          <Link href="#depoimentos" className="hover:text-foreground">Depoimentos</Link>
        </nav>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-[#0b1120] transition hover:brightness-110"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
