import Reveal from "../Reveal";
import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Cómo funciona
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            De la natillera del barrio a tu bolsillo,{" "}
            <span className="text-gradient">sin papeles ni errores</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            El modelo comunitario de siempre, potenciado con tecnología:
            calendarios automáticos, estados en tiempo real y microcréditos
            accesibles para tus metas.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent lg:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.05]">
                <div className="relative z-10 flex size-[52px] items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-teal-600 font-mono text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-500/20">
                  {step.step}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[13px] text-zinc-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-3.5 shrink-0 text-emerald-400">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
