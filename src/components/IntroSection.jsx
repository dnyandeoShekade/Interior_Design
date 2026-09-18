"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal, { SplitWords } from "./Reveal";
import { IMAGES } from "../data/projects";

const stats = [
  { value: 10, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 120, suffix: "+", label: "PROJECTS COMPLETED" },
  { value: 18, suffix: "", label: "CITIES" },
  { value: 96, suffix: "%", label: "CLIENT REFERRALS" },
];

function Counter({ value, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setN(value);
          return;
        }
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / 1600, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * value));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function IntroSection() {
  return (
    <section id="studio" className="bg-[#F7F0E3] py-20 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <p className="label text-[#8B8880]">01 — THE STUDIO</p>
          <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px] mt-5">
            <SplitWords text="DESIGNED FOR" /> <br />
            <SplitWords text="TIMELESS LIVING." baseDelay={150} />
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-6" variant="curtain">
            <div className="img-frame shine aspect-[4/5] md:aspect-[4/4.6]">
              <Image src={IMAGES.intro} alt="Warm minimal interior with sculptural furniture" width={1200} height={1400} sizes="(max-width:768px) 100vw, 50vw" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="label text-[#8B8880]">ATELIER — MUMBAI</p>
              <p className="label text-[#8B8880]">N°14</p>
            </div>
          </Reveal>

          <div className="lg:col-span-6 flex flex-col justify-between gap-10">
            <Reveal delay={120}>
              <div className="img-frame aspect-[16/9] hidden md:block">
                <Image src={IMAGES.introSmall} alt="Detail of stone and wood interior" width={800} height={450} sizes="40vw" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <p className="text-[17px] md:text-[19px] leading-[1.7] font-light mt-2 md:mt-8 max-w-xl">
                NOIRÉ STUDIO creates refined interiors where architecture, natural materials and
                considered details come together. We design homes, villas, hotels and workplaces
                that feel calm, confident and quietly luxurious — spaces that age with grace.
              </p>
              <p className="mt-6 text-[14px] leading-relaxed text-[#8B8880] max-w-xl">
                Every project is led by a principal architect, detailed to the millimetre and
                executed with master craftsmen — from first sketch to final styling.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 border-t border-[#1D1D1B]/15">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 90} className={`py-7 pr-6 ${i % 2 === 0 ? "border-r border-[#1D1D1B]/15" : "pl-6"} ${i < 2 ? "border-b border-[#1D1D1B]/15" : ""}`}>
                  <p className="display text-[44px] md:text-[56px]">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="label text-[#8B8880] mt-2">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
