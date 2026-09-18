"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "../data/studio";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#F3EBDD] py-20 md:py-32 border-t border-[#1D1D1B]/10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <p className="label text-[#8B8880]">08 — QUESTIONS</p>
          <h2 className="display text-[13vw] sm:text-[64px] lg:text-[80px] mt-5">COMMON<br />QUESTIONS</h2>
          <p className="mt-6 text-[14px] text-[#8B8880] max-w-xs leading-relaxed">
            Everything clients usually ask before beginning a project with us.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div className="border-t border-[#1D1D1B]/15 last:border-b">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="label text-[#8B8880]">0{i + 1}</span>
                      <span className="text-[16px] md:text-[19px] font-medium">{f.q}</span>
                    </span>
                    <span className={`shrink-0 w-10 h-10 border border-[#1D1D1B]/25 inline-flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-[#1D1D1B] text-[#F3EBDD] rotate-45" : ""}`}>
                      <Plus size={17} strokeWidth={1.5} />
                    </span>
                  </button>
                  <div className={`faq-panel ${isOpen ? "open" : ""}`}>
                    <div className="faq-inner">
                      <p className="pb-7 pl-0 md:pl-12 pr-4 text-[14px] md:text-[15px] leading-relaxed text-[#55524c] font-light max-w-2xl">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
