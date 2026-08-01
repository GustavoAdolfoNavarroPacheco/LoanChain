"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b"
      style={{
        // Border color is cheap to animate; the blur/tint layer below fades
        // its opacity instead (no backdrop-filter transition jank).
        borderColor: scrolled ? "rgba(255,255,255,0.1)" : "transparent",
        transition: "border-color 0.5s var(--spring-soft)",
      }}
    >
      {/* Scrolled backdrop — opacity-only transition, compositor friendly */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          opacity: scrolled ? 1 : 0,
          backgroundColor: "rgba(5,8,10,0.85)",
          backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "blur(0px)",
          transition: "opacity 0.5s var(--spring-soft)",
        }}
      />
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          aria-label={`${siteConfig.name} — inicio`}
        >
          <Logo className="size-8 transition-transform duration-500 ease-(--spring) group-hover:scale-110 group-hover:rotate-3" />
          <span className="text-lg font-semibold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.contact}
            className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/20 transition-all duration-500 ease-(--spring) hover:bg-emerald-400 hover:shadow-emerald-400/30 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:inline-flex"
          >
            Únete a la lista
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition-all duration-300 hover:bg-white/10 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="size-5">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="menu-movil"
        className="border-t border-white/10 bg-[#05080a]/95 backdrop-blur-xl md:hidden"
        style={{
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s var(--spring-soft), opacity 0.4s var(--spring-soft)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity 0.4s var(--spring-soft) ${i * 60 + 100}ms, transform 0.4s var(--spring-soft) ${i * 60 + 100}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.links.contact}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-emerald-950"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition: `opacity 0.4s var(--spring-soft) ${navLinks.length * 60 + 100}ms, transform 0.4s var(--spring-soft) ${navLinks.length * 60 + 100}ms`,
            }}
          >
            Únete a la lista de espera
          </a>
        </div>
      </div>
    </header>
  );
}
