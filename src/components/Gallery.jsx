"use client";
import Image from "next/image";
import Reveal, { SplitWords } from "./Reveal";
import { galleryItems } from "../data/studio";

const spanClass = {
  wide: "col-span-2 aspect-[16/8]",
  tall: "col-span-1 aspect-[3/4] row-span-2",
  std: "col-span-1 aspect-[4/3]",
  small: "col-span-1 aspect-square",
};

export default function Gallery() {
  return (
    <section className="bg-[#F3EBDD] py-20 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <p className="label text-[#8B8880]">06 — FRAGMENTS</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px]"><SplitWords text="DETAILS" /><br /><SplitWords text="MATTER." baseDelay={100} /></h2>
            <p className="max-w-xs text-[14px] leading-relaxed text-[#8B8880]">
              Stone, shadow, timber, brass — the quiet materials that carry a room.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {galleryItems.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 70} variant={i % 2 ? "scale" : "up"} className={g.span === "wide" ? "col-span-2" : "col-span-1"}>
              <figure className={`group relative img-frame lift shine ${spanClass[g.span]}`}>
                <Image src={g.src} alt={g.name} width={1200} height={900} sizes="(max-width:768px) 50vw, 25vw" loading="lazy" className="h-full w-full object-cover" />
                <figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500 flex items-end p-4">
                  <span className="label text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {g.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
