"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Asterisk, Menu, Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header({ dark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 500 && y > lastY + 4 && !open);
      if (y < lastY - 4) setHidden(false);
      lastY = y;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const solid = scrolled || dark;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          hidden ? "header-hide" : ""
        } ${
          solid
            ? "bg-[#1D1D1B]/85 backdrop-blur-md text-[#F3EBDD] border-b border-white/10"
            : "bg-gradient-to-b from-black/45 to-transparent text-white"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 h-[76px] grid grid-cols-[1fr_auto_1fr] items-center">
          {/* left */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            <Link href="/#projects" className="text-[13px] font-semibold tracking-[0.14em] hover:opacity-70 transition-opacity">
              PROJECTS <sup className="text-[10px] opacity-70">4</sup>
            </Link>
            <Link href="/#studio" className="text-[13px] font-semibold tracking-[0.14em] hover:opacity-70 transition-opacity">
              ABOUT
            </Link>
          </nav>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden justify-self-start inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/30"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>

          {/* center logo */}
          <Link href="/" className="group justify-self-center flex items-center gap-1 leading-none" aria-label="Noiré home">
            <span className="text-[30px] md:text-[34px] font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:-translate-y-0.5">Noiré</span>
            <Asterisk size={26} strokeWidth={2} className="mt-1 spin-slow" />
          </Link>

          {/* right */}
          <div className="justify-self-end flex items-center gap-4 md:gap-5">
            <a href="tel:+912248901414" className="hidden sm:flex items-center gap-2 text-[13px] font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity">
              <Phone size={15} strokeWidth={1.5} />
              +91 22 4890 1414
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/40 hover:bg-white hover:text-[#1D1D1B] hover:rotate-90 transition-all duration-500"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        {/* scroll progress */}
        <span className="absolute bottom-0 left-0 h-[2px] bg-current opacity-60 transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

