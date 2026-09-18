"use client";
import { useEffect, useRef } from "react";

const variantClass = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  blur: "reveal-blur",
  clip: "reveal-clip",
  curtain: "img-curtain",
  none: "reveal-none",
};

export function SplitWords({ text, baseDelay = 0, step = 45 }) {
  const words = String(text).split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="w-mask">
          <span className="w-word" style={{ "--w-delay": `${baseDelay + i * step}ms` }}>
            {w}
          </span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "up",
  words = false,
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const v = variantClass[variant] ?? "";
  return (
    <Tag ref={ref} className={`reveal ${v} ${className}`} style={{ "--reveal-delay": `${delay}ms` }}>
      {words && typeof children === "string" ? <SplitWords text={children} /> : children}
    </Tag>
  );
}

