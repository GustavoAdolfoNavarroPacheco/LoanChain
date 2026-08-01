import Reveal from "../Reveal";
import Icon from "../Icon";
import { siteConfig } from "@/lib/site";
import { values } from "@/lib/content";

export default function Community() {
  return (
    <section id="comunidad" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb -left-40 bottom-0 h-[400px] w-[400px] bg-teal-500/10" style={{ animationDelay: "1s" }} />
        <div className="orb -right-32 top-10 h-[360px] w-[360px] bg-amber-400/10" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center" variant="up" duration={900}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Comunidad
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Construido sobre la <span className="text-gradient">confianza</span>{" "}
            de la comunidad
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Las cadenas de ahorro funcionan por décadas gracias a la confianza
            mutua. {siteConfig.name} la fortalece con transparencia digital:
            cada aporte, cada turno y cada cuota queda registrado para todos.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 120} variant="up" duration={800}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-500 ease-(--spring) hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-500/5">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-500 ease-(--spring) group-hover:scale-125 group-hover:rotate-6">
                  <Icon name={value.icon} className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} variant="up" duration={900}>
          <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-emerald-500/[0.08] via-transparent to-amber-400/[0.06] p-10 text-center transition-all duration-700 hover:border-emerald-400/20 lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Próximamente: historias de nuestra comunidad
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                Cuando la aplicación esté en manos de los primeros grupos,
                compartiremos aquí sus experiencias reales con las cadenas de
                ahorro y los microcréditos. ¿Quieres ser parte del inicio?
              </p>
            </div>
            <a
              href={siteConfig.links.contact}
              className="animate-glow group inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all duration-500 ease-(--spring) hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Quiero participar
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform duration-500 ease-(--spring) group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
