"use client";
import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";

const links = ["HOME", "PROJECTS", "SERVICES", "ABOUT", "PROCESS", "CONTACT"];
const hrefs = { HOME: "/", PROJECTS: "/#projects", SERVICES: "/#expertise", ABOUT: "/#studio", PROCESS: "/#process", CONTACT: "/#contact" };

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-[#1D1D1B] text-[#F3EBDD] transition-all duration-500 lg:hidden ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-hidden={!open}
    >
      <div className="h-full flex flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <span className="text-[20px] font-semibold tracking-[0.18em]">NOIRÉ</span>
          <button onClick={onClose} aria-label="Close menu" className="w-11 h-11 inline-flex items-center justify-center border border-white/20">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center gap-1" aria-label="Mobile">
          {links.map((l, i) => (
            <Link
              key={l}
              href={hrefs[l]}
              onClick={onClose}
              className={`group flex items-center justify-between border-b border-white/10 py-4 transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <span className="display text-[42px]">{l}</span>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={22} strokeWidth={1.5} />
            </Link>
          ))}
        </nav>
        <div className="flex items-end justify-between text-[11px] tracking-[0.25em]">
          <span className="opacity-60">EST. 2014 — MUMBAI</span>
          <Link href="/#contact" onClick={onClose} className="border border-white/30 px-6 py-3 label">
            START A PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
}
