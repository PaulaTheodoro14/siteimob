import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {siteConfig.brand}. Todos os direitos reservados.</p>
        <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
