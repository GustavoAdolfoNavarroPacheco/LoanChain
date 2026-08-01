"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { siteConfig } from "@/lib/site";

const interestOptions = [
  "Cadena de ahorro",
  "Microcrédito",
  "Alianza comercial",
  "Otro",
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-all duration-500 ease-(--spring-soft) focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:bg-white/[0.06]";

function CustomSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${inputClasses} flex items-center justify-between text-left`}
      >
        <span>{value}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-4 shrink-0 text-zinc-500 transition-all duration-500 ease-(--spring) ${open ? "rotate-180 scale-110" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? "250px" : "0px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.96)",
          transition: "all 0.4s var(--spring)",
        }}
        className="absolute z-50 mt-2 w-full overflow-auto rounded-xl border border-white/10 bg-[#0c1416] p-1.5 shadow-xl shadow-black/40 backdrop-blur-xl"
      >
        <ul role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`cursor-pointer rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ${
                opt === value
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [interes, setInteres] = useState(interestOptions[0]);
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (nombre.trim().length < 3) next.nombre = "Escribe tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      next.email = "Ingresa un correo electrónico válido.";
    if (mensaje.trim().length < 10)
      next.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = `[LoanChain] Solicitud: ${interes}`;
    const body = [
      `Nombre: ${nombre}`,
      `Correo: ${email}`,
      `Interés: ${interes}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb -right-40 bottom-0 h-[420px] w-[420px] bg-emerald-500/10" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal variant="up" duration={900}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Contacto
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sé de los primeros en enterarte
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-zinc-400">
              Déjanos tus datos y te avisaremos cuando la aplicación esté
              disponible, junto con novedades del proyecto. También puedes
              escribirnos directamente para resolver cualquier inquietud.
            </p>

            <dl className="mt-10 space-y-4">
              {[
                { icon: "key", label: "Correo", value: siteConfig.email },
                { icon: "users", label: "Desarrollado por", value: siteConfig.trinode.name },
                { icon: "map", label: "Ubicación", value: siteConfig.trinode.location },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4"
                  style={{
                    opacity: 0,
                    animation: `slide-up-fade 0.6s var(--spring-soft) ${200 + i * 100}ms forwards`,
                  }}
                >
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300 transition-all duration-500 hover:bg-emerald-400/10 hover:scale-110">
                    {item.icon === "map" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ) : (
                      <Icon name={item.icon} className="size-5" />
                    )}
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">{item.label}</dt>
                    <dd className="text-sm font-medium text-white">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150} variant="up" duration={900}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div
                style={{
                  opacity: sent ? 1 : 0,
                  transform: sent ? "scale(1)" : "scale(0.96)",
                  maxHeight: sent ? "600px" : "0px",
                  overflow: "hidden",
                  transition:
                    "opacity 0.5s var(--spring-soft), transform 0.6s var(--spring), max-height 0.6s var(--spring-soft)",
                }}
                className="flex flex-col items-center py-14 text-center"
                inert={!sent}
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 animate-glow">
                  <Icon name="check" className="size-8" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  ¡Gracias por tu interés!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
                  Se abrió tu aplicación de correo con el mensaje listo para
                  enviar. Si no se abrió, escríbenos a{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-emerald-300 underline-offset-4 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  . Te responderemos a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setNombre("");
                    setEmail("");
                    setMensaje("");
                  }}
                  className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-500 ease-(--spring) hover:bg-white/10 hover:scale-105"
                >
                  Enviar otro mensaje
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                style={{
                  opacity: sent ? 0 : 1,
                  transform: sent ? "scale(0.97)" : "scale(1)",
                  transition:
                    "opacity 0.4s var(--spring-soft), transform 0.5s var(--spring), max-height 0.5s var(--spring-soft)",
                  maxHeight: sent ? "0px" : "900px",
                  overflow: "hidden",
                }}
                inert={sent}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div
                    style={{
                      opacity: 0,
                      animation: "slide-up-fade 0.5s var(--spring-soft) 200ms forwards",
                    }}
                  >
                    <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-zinc-300">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      autoComplete="name"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ej: Ana Pérez"
                      aria-invalid={!!errors.nombre}
                      aria-describedby={errors.nombre ? "error-nombre" : undefined}
                      className={inputClasses}
                    />
                    {errors.nombre && (
                      <p id="error-nombre" className="mt-1.5 text-xs text-rose-400">{errors.nombre}</p>
                    )}
                  </div>
                  <div
                    style={{
                      opacity: 0,
                      animation: "slide-up-fade 0.5s var(--spring-soft) 300ms forwards",
                    }}
                  >
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tucorreo@ejemplo.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "error-email" : undefined}
                      className={inputClasses}
                    />
                    {errors.email && (
                      <p id="error-email" className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    opacity: 0,
                    animation: "slide-up-fade 0.5s var(--spring-soft) 400ms forwards",
                  }}
                >
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    ¿Qué te interesa?
                  </label>
                  <CustomSelect
                    value={interes}
                    onChange={setInteres}
                    options={interestOptions}
                  />
                </div>

                <div
                  style={{
                    opacity: 0,
                    animation: "slide-up-fade 0.5s var(--spring-soft) 500ms forwards",
                  }}
                >
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-zinc-300">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Cuéntanos sobre tu grupo de ahorro o tu meta…"
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.mensaje && (
                    <p id="error-mensaje" className="mt-1.5 text-xs text-rose-400">{errors.mensaje}</p>
                  )}
                </div>

                <div
                  style={{
                    opacity: 0,
                    animation: "slide-up-fade 0.5s var(--spring-soft) 600ms forwards",
                  }}
                >
                  <button
                    type="submit"
                    className="animate-glow w-full rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all duration-500 ease-(--spring) hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    Enviar solicitud
                  </button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-zinc-600">
                    Al enviar se abrirá tu aplicación de correo con el mensaje
                    prellenado. Tus datos solo se usan para responder tu
                    solicitud.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
