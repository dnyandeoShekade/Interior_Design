"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "../data/studio";
import { IMAGES } from "../data/projects";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const t = testimonials[idx];
  const go = (d) => {
    setDir(d);
    setIdx((i) => (i + d + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#F7F0E3] py-20 md:py-32 border-t border-[#1D1D1B]/10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <Reveal variant="left">
          <div className="img-frame shine aspect-[4/5] lg:h-full lg:min-h-[560px]">
            <Image src={IMAGES.testimonial} alt="Client residence designed by Noiré Studio" width={1000} height={1250} sizes="(max-width:768px) 100vw, 50vw" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120} variant="right" className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1D1D1B]/15 pt-10 lg:pt-4 lg:pl-14">
          <div>
            <p className="label text-[#8B8880]">07 — CLIENT STORY · {t.project.toUpperCase()}</p>
            <div className="flex gap-1 mt-6" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="fill-[#1D1D1B] text-[#1D1D1B]" />
              ))}
            </div>
            <div key={idx} className={`mt-6 ${dir >= 0 ? "slide-right" : "slide-left"}`}>
              <blockquote className="display text-[30px] md:text-[44px] leading-[1.15]">
                “{t.quote}”
              </blockquote>
              <p className="label mt-8">{t.name}</p>
              <p className="label text-[#8B8880] mt-2">{t.location}</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <p className="label text-[#8B8880]">0{idx + 1} / 0{testimonials.length}</p>
            <div className="flex gap-3">
              <button onClick={() => go(-1)} aria-label="Previous testimonial" className="w-12 h-12 border border-[#1D1D1B]/25 inline-flex items-center justify-center hover:bg-[#1D1D1B] hover:text-[#F3EBDD] transition-colors">
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button onClick={() => go(1)} aria-label="Next testimonial" className="w-12 h-12 border border-[#1D1D1B]/25 inline-flex items-center justify-center hover:bg-[#1D1D1B] hover:text-[#F3EBDD] transition-colors">
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
