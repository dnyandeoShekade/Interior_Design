"use client";
import { useEffect, useRef } from "react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "../data/projects";

/* Art direction: dedicated HD portrait image on small screens,
   landscape hero on desktop. Official Next.js getImageProps pattern —
   the browser only downloads the variant matching its viewport. */
const HERO_ALT = "Luxury living room with floor to ceiling glass looking onto pine forest";
const {
  props: { srcSet: heroDesktopSrcSet, ...heroDesktopRest },
} = getImageProps({
  src: IMAGES.hero,
  alt: HERO_ALT,
  fill: true,
  sizes: "100vw",
  quality: 80,
  fetchPriority: "high",
});
const {
  props: { srcSet: heroMobileSrcSet },
} = getImageProps({
  src: IMAGES.heroMobile,
  alt: HERO_ALT,
  fill: true,
  sizes: "100vw",
  quality: 80,
});

function StaggerTitle({ text, base = 250 }) {
  return (
    <span aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="title-mask" aria-hidden="true">
          <span className="title-char" style={{ "--char-delay": `${base + i * 55}ms` }}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.28}px) scale(${1 + y / 6000})`;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * -0.12}px)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 700));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[#1D1D1B] text-white" aria-label="Noiré Studio intro">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <div className="hero-drift absolute inset-[-4%]">
          <picture className="absolute inset-0">
            <source media="(max-width: 767px)" srcSet={heroMobileSrcSet} />
            <img
              {...heroDesktopRest}
              srcSet={heroDesktopSrcSet}
              alt={HERO_ALT}
              className="hero-zoom object-cover"
            />
          </picture>
        </div>
        {/* cinematic dark treatment like reference */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/55" />
      </div>

      <div ref={contentRef} className="relative z-10 h-full mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col pt-[76px] will-change-transform">
        {/* middle — giant studio name */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
          <h1 className="font-semibold leading-[0.95] tracking-[-0.04em] text-[19vw] sm:text-[15vw] lg:text-[11.5vw] xl:text-[168px] whitespace-nowrap">
            <StaggerTitle text="Noiré Studio" />
          </h1>
          <div
            className="mt-5 md:mt-7 w-full max-w-[1100px] flex items-center gap-5"
            style={{ animation: "fadeUp 1.1s cubic-bezier(0.22,1,0.36,1) 1s both" }}
          >
            <span className="h-px flex-1 bg-white/70" />
            <p className="text-[11px] md:text-[15px] font-medium tracking-[0.22em] whitespace-nowrap">
              LUXURY INTERIOR DESIGN STUDIO
            </p>
            <span className="h-px flex-1 bg-white/70" />
          </div>
          <div className="mt-10 hidden md:flex flex-col items-center gap-3" style={{ animation: "fadeUp 1s ease 1.5s both" }} aria-hidden="true">
            <span className="label text-white/60">SCROLL</span>
            <span className="block w-px h-12 bg-white/25 overflow-hidden">
              <span className="scroll-line block w-full h-full bg-white" />
            </span>
          </div>
        </div>

        {/* bottom row */}
        <div
          className="pb-6 md:pb-9 flex items-end justify-between gap-6"
          style={{ animation: "fadeUp 1.1s cubic-bezier(0.22,1,0.36,1) 1.25s both" }}
        >
          {/* left — featured project */}
          <Link href="/projects/villa-lumiere" className="group flex items-center gap-4">
            <span className="relative w-[52px] h-[52px] md:w-[68px] md:h-[68px] rounded-full overflow-hidden shrink-0 border border-white/30 transition-all duration-500 group-hover:border-white group-hover:scale-105">
              <Image
                src={IMAGES.introSmall}
                alt="Villa Lumière interior detail"
                fill
                sizes="120px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </span>
            <span>
              <span className="block text-[15px] md:text-[19px] font-medium transition-transform duration-500 group-hover:translate-x-1">Villa Lumière</span>
              <span className="mt-1 block h-px w-full bg-white/40" />
              <span className="mt-1 block text-[10px] md:text-[11px] tracking-[0.14em] text-white/70">
                PRIVATE RESIDENCE • 2026
              </span>
            </span>
            <span className="hidden sm:block ml-3 text-[13px] md:text-[15px] font-medium tracking-[0.1em] text-white/90 transition-all duration-500 group-hover:tracking-[0.2em]">
              01 — 04
            </span>
          </Link>

          {/* right — blurb + CTA */}
          <div className="text-right max-w-[240px] md:max-w-[330px]">
            <p className="hidden md:block text-[16px] leading-[1.6] text-white/85 font-light text-left">
              Timeless interiors shaped by architecture, natural materials and quiet light.
            </p>
            <Link
              href="/#projects"
              className="link-line mt-0 md:mt-4 inline-flex items-center gap-1.5 text-[14px] md:text-[17px] font-semibold"
            >
              Explore Projects <ArrowUpRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

