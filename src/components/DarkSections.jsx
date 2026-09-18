"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Asterisk, Compass, DraftingCompass, Hammer, KeyRound, MessagesSquare } from "lucide-react";
import Reveal, { SplitWords } from "./Reveal";
import { services, processSteps } from "../data/studio";

export function DesignExpertise() {
  return (
    <section id="expertise" className="bg-[#1D1D1B] text-[#F3EBDD] py-20 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <p className="label text-white/40">04 — WHAT WE DO</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px]"><SplitWords text="DESIGN" /><br /><SplitWords text="EXPERTISE" baseDelay={100} /></h2>
            <p className="max-w-xs text-[14px] leading-relaxed text-white/50 font-light">
              We approach every project as a balance of architecture, function and atmosphere.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 md:mt-20 border-t border-white/12">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 60} variant="blur">
              <div className="group grid grid-cols-12 items-center gap-4 md:gap-8 border-b border-white/12 py-7 md:py-10 cursor-default">
                <span className="col-span-2 md:col-span-1 display text-[28px] md:text-[40px] text-white/35 transition-all duration-500 group-hover:text-[#F3EBDD] group-hover:-translate-y-1">
                  {s.index}
                </span>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="text-[18px] md:text-[26px] font-medium tracking-wide">{s.title}</h3>
                  <p className="mt-2 text-[14px] text-white/50 font-light max-w-md">{s.text}</p>
                </div>
                <div className="hidden md:block md:col-span-4">
                  <div className="img-frame aspect-[16/9] w-full max-w-[320px] ml-auto opacity-70 group-hover:opacity-100">
                    <Image src={s.image} alt={s.title} width={640} height={360} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <span className="hidden md:inline-flex col-span-1 justify-end">
                  <span className="w-11 h-11 border border-white/20 inline-flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const listRef = useRef(null);
  const mobileRef = useRef(null);
  const sectionRef = useRef(null);

  /* scroll-spy: which act owns the viewport centre (desktop + mobile rows) */
  useEffect(() => {
    const rows = Array.from(
      document.querySelectorAll("#process [data-step]")
    );
    if (!rows.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-step")));
        });
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 }
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  /* journey progress — measured against the whole section */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const root = sectionRef.current;
        if (!root) return;
        const rect = root.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh * 0.5;
        const done = Math.min(Math.max(vh * 0.65 - rect.top, 0), Math.max(total, 1));
        setProgress(Math.min(100, (done / Math.max(total, 1)) * 100));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const stepIcons = [MessagesSquare, Compass, DraftingCompass, Hammer, KeyRound];
  const current = processSteps[active];
  const goTo = (i) => {
    setActive(i);
    document.querySelector(`#process [data-step="${i}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="process" ref={sectionRef} className="relative overflow-hidden bg-[#1D1D1B] text-[#F3EBDD] pb-20 md:pb-32 pt-4 border-t border-white/10">
      <span aria-hidden="true" className="pointer-events-none absolute -top-8 right-0 hidden select-none font-semibold leading-none tracking-[-0.04em] text-white/[0.04] text-[20vw] lg:block">
        N°5
      </span>
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <p className="label text-white/40">05 — HOW WE WORK</p>
            <span className="hidden sm:inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-[10px] tracking-[0.28em] text-white/60">
              <Asterisk size={13} className="spin-slow" /> A FIVE-ACT JOURNEY
            </span>
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px]"><SplitWords text="OUR" /><br /><SplitWords text="DESIGN PROCESS" baseDelay={100} /></h2>
            <div className="max-w-xs">
              <p className="text-[14px] leading-relaxed text-white/50 font-light">
                Five acts, one obsession — a calm, exacting path from first conversation to final reveal.
              </p>
              <p className="label mt-4 text-white/40">SCROLL — THE STAGE FOLLOWS YOU</p>
            </div>
          </div>
        </Reveal>

        {/* desktop: sticky stage + scrolling acts */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="sticky top-28 border border-white/12 bg-white/[0.02] p-10 min-h-[540px] flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-white/15">
                <span className="block h-full bg-[#F3EBDD] transition-[width] duration-200" style={{ width: `${progress}%` }} />
              </div>
              <span aria-hidden="true" key={`ghost-${active}`} className="ghost-num ghost-in pointer-events-none absolute -bottom-8 -right-2 text-[240px] font-semibold">
                {current.index}
              </span>
              <div key={`stage-${active}`} className="stage-in relative">
                <p className="label text-white/40">NOW SHOWING — ACT {current.index} / 05</p>
                {/* live stage image — crossfades per act */}
                <div className="img-frame shine relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    key={current.image}
                    src={current.image}
                    alt={`${current.title} — Noiré design process`}
                    width={1000}
                    height={560}
                    sizes="(max-width:1024px) 100vw, 40vw"
                    loading="lazy"
                    className="stage-in h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 bg-black/55 px-3 py-2 text-[10px] font-semibold tracking-[0.28em] text-white backdrop-blur-sm">
                    ACT {current.index}
                  </span>
                </div>
                <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20">
                  {(() => { const Icon = stepIcons[active]; return <Icon size={22} strokeWidth={1.25} />; })()}
                </div>
                <h3 className="display mt-6 text-[54px] leading-[1]">{current.title}</h3>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60 font-light">{current.text}</p>
                <p className="label mt-6 text-[#F3EBDD]/80">{current.duration}</p>
                <p className="mt-2 text-[12px] tracking-[0.14em] text-white/40">{current.note}</p>
              </div>
              <div className="relative mt-10 flex items-center justify-between border-t border-white/12 pt-6">
                <p className="display text-[30px] text-white/70">0{active + 1} <span className="text-white/30 text-[20px]">/ 05</span></p>
                <div className="flex gap-2">
                  {processSteps.map((s, i) => (
                    <button
                      key={s.index}
                      onClick={() => goTo(i)}
                      aria-label={`Go to ${s.title}`}
                      className={`h-[3px] transition-all duration-500 ${i === active ? "w-10 bg-[#F3EBDD]" : "w-5 bg-white/20 hover:bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right — scrolling acts */}
          <div ref={listRef} className="lg:col-span-7 flex flex-col gap-5">
            {processSteps.map((s, i) => {
              const Icon = stepIcons[i];
              const isActive = i === active;
              return (
                <button
                  key={s.index}
                  data-step={i}
                  onClick={() => goTo(i)}
                  aria-current={isActive}
                  className={`process-row group relative overflow-hidden border text-left ${isActive ? "is-active border-white/25" : "border-white/12 hover:border-white/25"}`}
                >
                  <span className="row-bar absolute inset-x-0 top-0 h-[2px] bg-[#F3EBDD]" />
                  <span className="flex items-center gap-6 p-6 md:p-8">
                    {/* act thumbnail */}
                    <span className="img-frame relative hidden sm:block h-[120px] w-[150px] shrink-0 overflow-hidden md:h-[132px] md:w-[176px]">
                      <Image
                        src={s.image}
                        alt={`${s.title} visual`}
                        width={500}
                        height={380}
                        sizes="200px"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/55 px-2 py-1 text-[9px] font-semibold tracking-[0.24em] text-white">
                        {s.index}
                      </span>
                    </span>
                    <span className={`display shrink-0 text-[56px] md:text-[64px] transition-all duration-500 ${isActive ? "text-[#F3EBDD]" : "text-white/25 group-hover:text-white/60"}`}>
                      {s.index}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-3">
                        <Icon size={17} strokeWidth={1.5} className={isActive ? "text-[#F3EBDD]" : "text-white/40"} />
                        <span className="text-[16px] font-semibold tracking-[0.14em]">{s.title}</span>
                      </span>
                      <span className={`mt-2 block max-w-md text-[14px] leading-relaxed font-light transition-colors duration-500 ${isActive ? "text-white/70" : "text-white/45"}`}>
                        {s.text}
                      </span>
                      <span className="label mt-3 block text-white/35">{s.duration}</span>
                    </span>
                    <span className={`hidden md:inline-flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-500 ${isActive ? "border-[#F3EBDD] bg-[#F3EBDD] text-[#1D1D1B]" : "border-white/20 text-white/50 group-hover:border-white/60 group-hover:text-white"}`}>
                      <ArrowRight size={17} strokeWidth={1.5} />
                    </span>
                  </span>
                </button>
              );
            })}
            <a href="/#contact" className="btn-sweep-light group flex items-center justify-between border border-[#F3EBDD]/70 px-8 py-6">
              <span>
                <span className="label text-white/50">READY WHEN YOU ARE</span>
                <span className="display mt-2 block text-[30px]">Begin with Act 01 — Consultation</span>
              </span>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3EBDD] text-[#1D1D1B] transition-transform duration-500 group-hover:translate-x-1">
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </div>

        {/* mobile/tablet: vertical timeline with progress + active cards */}
        <div ref={mobileRef} className="lg:hidden relative mt-12 ml-2 border-l border-white/15">
          <span className="absolute inset-y-0 left-0 w-px bg-transparent" aria-hidden="true">
            <span className="block w-full bg-[#F3EBDD] transition-[height] duration-200" style={{ height: `${progress}%` }} />
          </span>
          {processSteps.map((s, i) => {
            const Icon = stepIcons[i];
            const isActive = i === active;
            return (
              <div key={s.index} data-step={i} className="relative pl-8 pb-6 last:pb-0">
                <span className={`absolute -left-[5px] top-8 h-[9px] w-[9px] rounded-full transition-colors duration-500 ${isActive ? "bg-[#F3EBDD] dot-active" : "bg-white/30"}`} />
                <div className={`border p-0 overflow-hidden transition-all duration-500 ${isActive ? "border-white/30 bg-white/[0.04]" : "border-white/10"}`}>
                  {/* mobile card image */}
                  <div className="img-frame relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={`${s.title} visual`}
                      width={800}
                      height={450}
                      sizes="100vw"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 bg-black/55 px-3 py-2 text-[10px] font-semibold tracking-[0.28em] text-white backdrop-blur-sm">
                      ACT {s.index}
                    </span>
                    <span className={`absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-500 ${isActive ? "border-[#F3EBDD]/70 text-[#F3EBDD]" : "border-white/25 text-white/70"}`}>
                      <Icon size={17} strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <p className={`display text-[40px] transition-colors duration-500 ${isActive ? "text-[#F3EBDD]" : "text-white/30"}`}>{s.index}</p>
                    </div>
                  <h3 className="mt-3 text-[14px] font-semibold tracking-[0.14em]">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/55 font-light">{s.text}</p>
                  <p className="label mt-4 text-white/35">{s.duration} — {s.note}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
