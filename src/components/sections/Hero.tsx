import Reveal from "../Reveal";
import PhoneMockup from "../PhoneMockup";
import { siteConfig } from "@/lib/site";
import { heroStats } from "@/lib/content";

function GoogleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function AppleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.7-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]" />
        <div className="orb -left-32 -top-40 h-[480px] w-[480px] bg-emerald-500/20" />
        <div className="orb -right-40 top-24 h-[420px] w-[420px] bg-amber-400/10" />
        <div className="orb bottom-0 left-1/3 h-[360px] w-[360px] bg-teal-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
                <span className="animate-pulse-dot size-1.5 rounded-full bg-emerald-400" />
                Aplicación móvil en desarrollo · MVP 2026
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                Ahorro colectivo <span className="text-gradient">transparente</span>{" "}
                para tu comunidad
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                {siteConfig.name} digitaliza las cadenas de ahorro —las{" "}
                <span className="text-zinc-200">natilleras</span>— y los
                microcréditos en una aplicación móvil para Android e iOS.
                Turnos claros, aportes sin errores y control de mora, con o sin
                conexión a internet.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={siteConfig.links.contact}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-400/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Únete a la lista de espera
                </a>
                <a
                  href={siteConfig.links.howItWorks}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Ver cómo funciona
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
                <span className="inline-flex items-center gap-2">
                  <GoogleIcon />
                  Google Sign-In
                </span>
                <span className="inline-flex items-center gap-2">
                  <AppleIcon className="size-4 text-zinc-400" />
                  Apple Sign-In
                </span>
                <span className="hidden text-zinc-700 sm:inline">·</span>
                <span className="inline-flex items-center gap-2 text-zinc-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-4 text-emerald-400">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  Android e iOS
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <PhoneMockup />
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal delay={120}>
          <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col bg-[#070b0d] p-6 lg:p-7">
                <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </dt>
                <dd className="order-1 text-2xl font-bold tracking-tight text-emerald-300 lg:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
