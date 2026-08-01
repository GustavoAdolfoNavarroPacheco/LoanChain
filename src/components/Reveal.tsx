"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "scale" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
};

const variantClasses: Record<RevealVariant, { hidden: string; visible: string }> = {
  up: {
    hidden: "translate-y-10 opacity-0 blur-[3px]",
    visible: "translate-y-0 opacity-100 blur-0",
  },
  down: {
    hidden: "-translate-y-8 opacity-0 blur-[2px]",
    visible: "translate-y-0 opacity-100 blur-0",
  },
  scale: {
    hidden: "scale-[0.88] opacity-0 blur-[3px]",
    visible: "scale-100 opacity-100 blur-0",
  },
  left: {
    hidden: "translate-x-10 opacity-0 blur-[2px]",
    visible: "translate-x-0 opacity-100 blur-0",
  },
  right: {
    hidden: "-translate-x-10 opacity-0 blur-[2px]",
    visible: "translate-x-0 opacity-100 blur-0",
  },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  duration = 800,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [active]);

  const hidden = active && !visible;
  const v = variantClasses[variant];

  return (
    <div
      ref={ref}
      onTransitionEnd={(e) => {
        // Only listen to this element's own transition (child transitions
        // bubble too). Releases the compositor hint once the reveal finishes.
        if (e.target === e.currentTarget && e.propertyName === "opacity") {
          setSettled(true);
        }
      }}
      style={{
        // Transitions only turn on once the element is armed. The hidden class
        // and the transition duration are applied in the same commit, so the
        // initial paint never fades OUT — it only fades IN when scrolled into
        // view (avoids the flash/rebound on load).
        transitionDelay: active ? `${delay}ms` : "0ms",
        transitionDuration: active ? `${duration}ms` : "0ms",
        transitionTimingFunction: "var(--spring-soft)",
        transitionProperty: "opacity, transform, filter",
      }}
      className={`${active && !settled ? "will-change-transform" : ""} ${
        hidden ? `reveal-hidden ${v.hidden}` : v.visible
      } ${className}`}
    >
      {children}
    </div>
  );
}
