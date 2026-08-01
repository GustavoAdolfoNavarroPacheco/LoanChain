import Reveal from "../Reveal";
import Icon from "../Icon";

const testimonials = [
  {
    name: "María Fernanda R.",
    role: "Administradora de cadena, Bucaramanga",
    text: "Llevamos 3 años con la natillera y siempre hay errores de cálculo. LoanChain parece hecho para nosotras.",
    avatar: "MR",
  },
  {
    name: "Carlos Andrés P.",
    role: "Participante de ahorro colectivo, Medellín",
    text: "Lo que más me gusta es poder ver mis turnos sin internet. Mi barrio no siempre tiene señal.",
    avatar: "CP",
  },
  {
    name: "Diana Lucía M.",
    role: "Emprendedora, Cali",
    text: "Un microcrédito para mi negocio de costura con pagos claros y sin sorpresas. Eso es lo que necesitaba.",
    avatar: "DM",
  },
];

const logos = [
  "Bucaramanga",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Cartagena",
];

export default function SocialProof() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb -left-40 top-10 h-[400px] w-[400px] bg-emerald-500/10" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center" variant="up" duration={900}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Early Access
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ya hay comunidades{" "}
            <span className="text-gradient">esperando LoanChain</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Personas reales que practican el ahorro colectivo y confían en que
            la tecnología puede hacerlo mejor. Sé una de las primeras en usarlo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} variant="up" duration={800}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 ease-(--spring) hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-500/5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-600 text-xs font-bold text-emerald-950 transition-transform duration-500 ease-(--spring) group-hover:scale-110">
                    {t.avatar}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Icon
                      key={s}
                      name="check"
                      className="size-3.5 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} variant="up" duration={900}>
          <div className="mt-14 flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {[
                { value: "500+", label: "en lista de espera" },
                { value: "15+", label: "grupos interesados" },
                { value: "5", label: "ciudades" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-10">
                  {i > 0 && <div className="h-10 w-px bg-white/10" />}
                  <div
                    className="text-center"
                    style={{
                      opacity: 0,
                      animation: `count-up 0.6s var(--spring-soft) ${400 + i * 150}ms forwards`,
                    }}
                  >
                    <p className="text-3xl font-bold text-emerald-300">{stat.value}</p>
                    <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Ciudades con interestados
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {logos.map((city, i) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/5 hover:text-emerald-300"
                    style={{
                      opacity: 0,
                      animation: `scale-in 0.5s var(--spring) ${500 + i * 80}ms forwards`,
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
