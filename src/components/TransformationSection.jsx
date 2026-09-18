import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { SplitWords } from "./Reveal";
import BeforeAfter from "./BeforeAfter";
import { transformations } from "../data/studio";

export default function TransformationSection() {
  const t = transformations[0];
  return (
    <section className="bg-[#F3EBDD] py-20 md:py-28 border-t border-[#1D1D1B]/10">
      {/* max-width ~1440px · 50px desktop / 20px mobile gutters */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-[50px]">
        {/* ---- section heading: label + heading left, description right ---- */}
        <Reveal>
          <p className="label text-[#8B8880]">TRANSFORMATION</p>
          <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px]">
              <SplitWords text="FROM EXISTING" /><br />
              <SplitWords text="TO EXCEPTIONAL." baseDelay={120} />
            </h2>
            <p className="max-w-sm text-[14px] md:text-[15px] leading-relaxed text-[#55524c] font-light md:text-right md:pb-2">
              See how thoughtful planning, material selection and refined detailing
              can completely transform a space.
            </p>
          </div>
        </Reveal>

        {/* ---- comparison ---- */}
        <Reveal delay={120} className="mt-10 md:mt-12">
          <BeforeAfter
            beforeImage={t.beforeImage}
            afterImage={t.afterImage}
            beforeFilter={t.beforeFilter}
            title={`${t.title} — Renovation`}
            location={t.location}
          />
        </Reveal>

        {/* ---- metadata row: 28px below image ---- */}
        <Reveal delay={60} className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[9px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77736B]">
            DRAG · TOUCH · KEYBOARD ACCESSIBLE
          </p>
          <Link
            href="/projects/casa-verde"
            className="group inline-flex w-fit items-center gap-2 text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1D1D1B]"
          >
            <span className="border-b border-[#1D1D1B]/40 pb-1 transition-colors group-hover:border-[#1D1D1B]">
              VIEW FULL PROJECT
            </span>
            <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
