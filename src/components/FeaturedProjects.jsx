"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal, { SplitWords } from "./Reveal";
import { projects } from "../data/projects";

function ProjectRow({ p, flip, full, split }) {
  if (full) {
    return (
      <Reveal>
        <Link href={`/projects/${p.slug}`} className="group block">
          <div className="img-frame shine aspect-[16/10] md:aspect-[21/10]">
            <Image src={p.image} alt={p.title} width={2000} height={950} sizes="100vw" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div className="transition-transform duration-500 group-hover:translate-x-2">
              <p className="label text-[#8B8880]">{p.index} — {p.category} · {p.year}</p>
              <h3 className="display text-[40px] md:text-[64px] mt-2">{p.title}</h3>
              <p className="mt-2 text-[14px] text-[#8B8880]">{p.location} — {p.description.slice(0, 90)}…</p>
            </div>
            <span className="w-12 h-12 border border-[#1D1D1B]/25 inline-flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </span>
          </div>
        </Link>
      </Reveal>
    );
  }
  if (split) {
    return (
      <Reveal>
        <Link href={`/projects/${p.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-5 lg:pb-16 transition-transform duration-500 group-hover:translate-y-[-6px]">
            <p className="label text-[#8B8880]">{p.index} — {p.category} · {p.year}</p>
            <h3 className="display text-[44px] md:text-[68px] mt-3">{p.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#55524c] font-light max-w-md">{p.description}</p>
            <p className="label mt-5 text-[#8B8880]">{p.location}</p>
          </div>
          <div className="lg:col-span-7">
            <div className="img-frame shine aspect-[4/3]">
              <Image src={p.image} alt={p.title} width={1600} height={1200} sizes="(max-width:768px) 100vw, 60vw" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </Link>
      </Reveal>
    );
  }
  return (
    <Reveal>
      <Link href={`/projects/${p.slug}`} className={`group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center ${flip ? "" : ""}`}>
        <div className={`img-frame shine aspect-[4/5] md:aspect-[4/4.4] ${flip ? "lg:order-2" : ""}`}>
          <Image src={p.image} alt={p.title} width={1600} height={1700} sizes="(max-width:768px) 100vw, 50vw" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className={`${flip ? "lg:order-1 lg:text-right lg:items-end" : ""} flex flex-col transition-transform duration-500 group-hover:translate-y-[-6px]`}>
          <p className="label text-[#8B8880]">{p.index} — {p.category} · {p.year}</p>
          <h3 className="display text-[48px] md:text-[72px] mt-3">{p.title}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-[#55524c] font-light max-w-md">{p.description}</p>
          <p className="label mt-6 text-[#8B8880]">{p.location}</p>
          <span className="mt-6 inline-flex items-center gap-2 label">
            VIEW PROJECT <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#F3EBDD] py-20 md:py-32 border-t border-[#1D1D1B]/10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label text-[#8B8880]">02 — SELECTED WORK</p>
              <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px] mt-5"><SplitWords text="FEATURED" /><br /><SplitWords text="PROJECTS" baseDelay={120} /></h2>
            </div>
            <p className="max-w-xs text-[14px] leading-relaxed text-[#8B8880]">
              Selected spaces shaped around light, material and the way people live.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 md:mt-24 flex flex-col gap-20 md:gap-32">
          <ProjectRow p={projects[0]} />
          <ProjectRow p={projects[1]} flip />
          <ProjectRow p={projects[2]} full />
          <ProjectRow p={projects[3]} split />
        </div>
      </div>
    </section>
  );
}
