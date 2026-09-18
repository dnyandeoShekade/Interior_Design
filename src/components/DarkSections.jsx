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
  return (
    <section id="process" className="bg-[#1D1D1B] text-[#F3EBDD] pb-20 md:pb-32 pt-4 border-t border-white/10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <p className="label text-white/40">05 — HOW WE WORK</p>
          <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px] mt-5"><SplitWords text="OUR" /><br /><SplitWords text="DESIGN PROCESS" baseDelay={100} /></h2>
        </Reveal>

        {/* desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-0 mt-16 border-t border-white/15">
          {processSteps.map((s, i) => (
            <Reveal key={s.index} delay={i * 80} className={`pt-8 pr-8 ${i !== 4 ? "border-r border-white/10 mr-8" : ""}`}>
              <p className="display text-[52px] text-white/25">{s.index}</p>
              <div className="mt-4 h-px w-10 bg-[#F3EBDD]/60" />
              <h3 className="mt-4 text-[15px] font-semibold tracking-[0.14em]">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55 font-light">{s.text}</p>
            </Reveal>
          ))}
        </div>

        {/* mobile/tablet: vertical timeline */}
        <div className="lg:hidden mt-12 border-l border-white/15 ml-2">
          {processSteps.map((s) => (
            <Reveal key={s.index} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#F3EBDD]" />
              <p className="display text-[36px] text-white/30">{s.index}</p>
              <h3 className="mt-1 text-[14px] font-semibold tracking-[0.14em]">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/55 font-light">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
