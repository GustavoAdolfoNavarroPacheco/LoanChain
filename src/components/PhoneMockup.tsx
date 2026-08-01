const contributions = [
  { week: "Semana 12", member: "Ana Pérez", status: "Pagado", tone: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20" },
  { week: "Semana 13", member: "Luis Roa", status: "Pendiente", tone: "text-amber-300 bg-amber-400/10 border-amber-400/20" },
  { week: "Semana 14", member: "Carmen Díaz", status: "En mora", tone: "text-rose-300 bg-rose-400/10 border-rose-400/20" },
];

export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-fit"
      role="img"
      aria-label="Vista previa de la aplicación móvil LoanChain: fondo acumulado de la cadena, calendario de turnos con estados de pago y tarjeta de microcrédito."
    >
      <div
        className="shine-wrap relative w-[290px] rounded-[2.75rem] border border-white/15 bg-[#0a1013] p-2.5 shadow-2xl shadow-emerald-500/10"
        style={{
          animation: "float 8s var(--ease-out-expo) infinite",
        }}
      >
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/5 bg-[#0d1518]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 text-[11px] font-medium text-zinc-400">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="inline-block size-1.5 rounded-full bg-zinc-500" />
              <span className="inline-block size-1.5 rounded-full bg-zinc-500" />
              <span className="inline-block size-1.5 rounded-full bg-zinc-500" />
            </div>
          </div>
          <div className="absolute left-1/2 top-2.5 h-5 w-24 -translate-x-1/2 rounded-full bg-black/60" />

          {/* App header */}
          <div className="flex items-center gap-3 px-6 pt-7">
            <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-emerald-950">
              AP
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mi cadena · Ahorro</p>
              <p className="text-[11px] text-zinc-500">Semana 12 de 24</p>
            </div>
            <div className="ml-auto rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-zinc-300">
              Turno 7
            </div>
          </div>

          {/* Balance card */}
          <div className="mx-5 mt-5 rounded-2xl bg-linear-to-br from-emerald-500/90 to-teal-700/90 p-4">
            <p className="text-[11px] font-medium text-emerald-950/70">Fondo acumulado</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-white">$ 4.800.000</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">
                Aportes: 12 / 12
              </span>
              <span className="text-[10px] font-medium text-white/80">● Al día</span>
            </div>
          </div>

          {/* Turn list */}
          <div className="mx-5 mt-4 space-y-2">
            <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              Calendario de turnos
            </p>
            {contributions.map((c, i) => (
              <div
                key={c.week}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 transition-all duration-300 hover:bg-white/[0.06]"
                style={{
                  opacity: 0,
                  animation: `slide-up-fade 0.5s var(--spring-soft) ${800 + i * 120}ms forwards`,
                }}
              >
                <div>
                  <p className="text-[13px] font-medium text-zinc-100">{c.week}</p>
                  <p className="text-[11px] text-zinc-500">{c.member}</p>
                </div>
                <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${c.tone}`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>

          {/* Microcredit card */}
          <div
            className="mx-5 mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-4"
            style={{
              opacity: 0,
              animation: "slide-up-fade 0.5s var(--spring-soft) 1200ms forwards",
            }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-amber-200">Microcrédito · Moto</p>
              <p className="text-[11px] font-medium text-amber-300/80">60% pagado</p>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-amber-400 to-amber-300"
                style={{
                  width: "0%",
                  animation: "grow-bar 1.4s var(--spring-soft) 1000ms forwards",
                }}
              />
            </div>
            <p className="mt-2.5 text-[11px] text-zinc-400">Cuota 9 · Vence en 5 días</p>
          </div>

          {/* Bottom nav */}
          <div className="mt-5 flex items-center justify-around border-t border-white/5 px-8 py-4">
            {["Inicio", "Cadenas", "Créditos", "Perfil"].map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span
                  className={`size-1.5 rounded-full ${i === 0 ? "bg-emerald-400" : "bg-zinc-600"}`}
                />
                <span
                  className={`text-[9px] font-medium ${i === 0 ? "text-emerald-300" : "text-zinc-600"}`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div
        className="absolute -left-20 top-16 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md lg:block"
        style={{
          animation: "float 8s var(--ease-out-expo) infinite",
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-white">Recordatorio 24 h antes</p>
            <p className="text-[10px] text-zinc-500">Tu aporte vence mañana</p>
          </div>
        </div>
      </div>

      <div
        className="absolute -right-24 bottom-24 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md lg:block"
        style={{
          animation: "float-delayed 10s var(--ease-out-expo) infinite",
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <path d="M8.5 16.5a5 5 0 0 1 7 0" />
              <path d="M5 12.6a10 10 0 0 1 3.4-2.2" />
              <path d="M12 20h.01" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-white">Modo offline activo</p>
            <p className="text-[10px] text-zinc-500">Consulta saldos sin internet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
