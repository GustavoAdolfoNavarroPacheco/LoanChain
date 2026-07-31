"use client";

import { useState, type FormEvent } from "react";
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
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/20";

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
        <div className="orb -right-40 bottom-0 h-[420px] w-[420px] bg-emerald-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
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
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300">
                  <Icon name="key" className="size-5" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">Correo</dt>
                  <dd className="text-sm font-medium text-white">{siteConfig.email}</dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300">
                  <Icon name="users" className="size-5" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">Desarrollado por</dt>
                  <dd className="text-sm font-medium text-white">{siteConfig.trinode.name}</dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">Ubicación</dt>
                  <dd className="text-sm font-medium text-white">{siteConfig.trinode.location}</dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
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
                    className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
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
                    <div>
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

                  <div>
                    <label htmlFor="interes" className="mb-2 block text-sm font-medium text-zinc-300">
                      ¿Qué te interesa?
                    </label>
                    <div className="relative">
                      <select
                        id="interes"
                        value={interes}
                        onChange={(e) => setInteres(e.target.value)}
                        className={`${inputClasses} appearance-none pr-10`}
                      >
                        {interestOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  <div>
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

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    Enviar solicitud
                  </button>
                  <p className="text-center text-xs leading-relaxed text-zinc-600">
                    Al enviar se abrirá tu aplicación de correo con el mensaje
                    prellenado. Tus datos solo se usan para responder tu
                    solicitud.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
