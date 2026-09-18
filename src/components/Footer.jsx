"use client";
import Link from "next/link";

const nav = [
  { label: "PROJECTS", href: "/#projects" },
  { label: "SERVICES", href: "/#expertise" },
  { label: "ABOUT", href: "/#studio" },
  { label: "PROCESS", href: "/#process" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1B] text-[#F3EBDD] border-t border-white/10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="display text-[64px] md:text-[88px] leading-none">NOIRÉ</p>
            <p className="mt-5 text-[14px] text-white/50 font-light max-w-sm leading-relaxed">
              Interior architecture shaped by light, material and time.
            </p>
          </div>
          <nav className="md:col-span-4 flex flex-col gap-3" aria-label="Footer">
            {nav.map((n) => (
              <Link key={n.label} href={n.href} className="label text-white/70 hover:text-white transition-colors w-fit">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="md:col-span-3 flex flex-col gap-3">
            <p className="label text-white/40">SOCIAL</p>
            {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
              <a key={s} href="#" onClick={(e) => e.preventDefault()} className="label text-white/70 hover:text-white transition-colors w-fit">{s.toUpperCase()}</a>
            ))}
            <p className="label text-white/40 mt-4">hello@noirestudio.com</p>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="label text-white/40">© 2026 NOIRÉ STUDIO</p>
          <p className="label text-white/40">MUMBAI — PUNE — GOA — DUBAI</p>
        </div>
      </div>
    </footer>
  );
}
