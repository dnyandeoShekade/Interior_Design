import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { SplitWords } from "./Reveal";
import { U } from "../data/projects";

const strip = [
  U("photo-1600210492486-724fe5c67fb0", 600),
  U("photo-1600607687939-ce8a6c25118c", 600),
  U("photo-1618221195710-dd6b41faaea6", 600),
  U("photo-1616486338812-3dadae4b4ace", 600),
  U("photo-1512917774080-9991f1c4c750", 600),
  U("photo-1600566753086-00f18fb6b3ea", 600),
];

export default function FinalCTA() {
  return (
    <section className="bg-[#1D1D1B] text-[#F3EBDD] pt-20 md:pt-32 pb-0 border-t border-white/10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10 text-center">
        <Reveal>
          <p className="label text-white/40">10 — BEGIN</p>
          <h2 className="display text-[12vw] sm:text-[64px] lg:text-[96px] mt-5">
            <SplitWords text="LET'S CREATE" /><br />
            <SplitWords text="SOMETHING TIMELESS." baseDelay={120} />
          </h2>
          <p className="mt-6 text-[14px] md:text-[16px] text-white/55 font-light max-w-xl mx-auto leading-relaxed">
            Tell us about your space, your vision and what you want it to become.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact" className="btn-sweep-light label bg-[#F3EBDD] text-[#1D1D1B] px-10 py-4 inline-flex items-center gap-3 transition-colors">
              START A PROJECT <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
            <Link href="/#projects" className="btn-sweep label border border-white/30 px-10 py-4 transition-colors">
              VIEW PROJECTS
            </Link>
          </div>
        </Reveal>
      </div>
      <Reveal delay={100} className="mt-16 md:mt-20 overflow-hidden border-t border-white/10">
        <div className="flex w-max marquee-track">
          {[...strip, ...strip].map((s, i) => (
            <div key={i} className="relative h-[140px] md:h-[180px] w-[220px] md:w-[300px] shrink-0 border-r border-white/10">
              <Image src={s} alt="Architectural detail" width={600} height={360} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
