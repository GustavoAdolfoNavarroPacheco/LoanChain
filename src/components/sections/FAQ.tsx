"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { faqItems } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Preguntas frecuentes
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Resolvemos tus dudas
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Todo lo que necesitas saber sobre las cadenas de ahorro, la
                seguridad de tus datos y el estado de la aplicación.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                  <Icon name="bell" className="size-5" />
                </span>
                <p className="text-sm text-zinc-400">
                  ¿Otra pregunta?{" "}
                  <a href="#contacto" className="font-semibold text-emerald-300 underline-offset-4 hover:underline">
                    Escríbenos
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.question} delay={i * 40}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? "border-emerald-400/25 bg-white/[0.05]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                    >
                      <span className="text-[15px] font-semibold text-white">
                        {item.question}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                            : "border-white/10 bg-white/5 text-zinc-400"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
