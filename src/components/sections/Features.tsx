import Reveal from "../Reveal";
import Icon from "../Icon";
import { features, type Feature } from "@/lib/content";

export default function Features() {
  return (
    <section id="caracteristicas" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb -right-40 top-10 h-[420px] w-[420px] bg-emerald-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Características técnicas
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Seguridad de grado financiero y{" "}
            <span className="text-gradient">transparencia total</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Cada funcionalidad está respaldada por un requerimiento formal de la
            especificación del sistema: cifrado, auditoría y disponibilidad
            incluso sin conexión.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature: Feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.05]">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-400/20">
                    <Icon name={feature.icon} className="size-5" />
                  </span>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] font-medium text-zinc-500">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
