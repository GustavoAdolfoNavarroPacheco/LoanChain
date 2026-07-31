import Logo from "./Logo";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    title: "Producto",
    links: [
      { href: siteConfig.links.howItWorks, label: "Cómo funciona" },
      { href: siteConfig.links.features, label: "Características" },
      { href: siteConfig.links.community, label: "Comunidad" },
      { href: siteConfig.links.faq, label: "Preguntas frecuentes" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#040709]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="size-8" />
              <span className="text-lg font-semibold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              {siteConfig.tagline}. Cadenas de ahorro, microcréditos y finanzas
              comunitarias con tecnología Offline-First y cifrado de grado militar.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-400">
                Android
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-400">
                iOS
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-400">
                Offline-First
              </span>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-emerald-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-sm font-semibold text-white">Desarrollado por</p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
              <li>
                <a
                  href={siteConfig.trinode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-emerald-300"
                >
                  {siteConfig.trinode.name}
                </a>
              </li>
              <li>{siteConfig.trinode.location}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-emerald-300"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name} · Desarrollado por{" "}
            {siteConfig.trinode.name}
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-zinc-600">
            Aviso: {siteConfig.name} se encuentra en fase de desarrollo. La
            información publicada en este sitio corresponde a la propuesta de
            producto y puede estar sujeta a cambios.
          </p>
        </div>
      </div>
    </footer>
  );
}
