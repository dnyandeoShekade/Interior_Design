"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import Reveal from "./Reveal";
import { IMAGES } from "../data/projects";

export default function FilmSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="bg-[#1D1D1B] text-white py-10 md:py-14">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden">
            <div className="relative aspect-[16/10] md:aspect-[21/9]">
              <Image src={IMAGES.film} alt="Cinematic view of a luxury villa at dusk" width={2200} height={950} sizes="100vw" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/45" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="label text-white/60">09 — ARCHITECTURAL FILM</p>
              <h2 className="display text-[9vw] sm:text-[48px] lg:text-[64px] mt-4 max-w-4xl">
                THE DETAILS CREATE<br />THE ATMOSPHERE.
              </h2>
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play film"
                className="mt-8 group flex items-center gap-4"
              >
                <span className="pulse-ring w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-[#1D1D1B] inline-flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Play size={22} className="ml-1 fill-[#1D1D1B] transition-transform duration-500 group-hover:scale-125" />
                </span>
              </button>
              <p className="label text-white/70 mt-5">WATCH OUR FILM — 02:14</p>
            </div>
          </div>
        </Reveal>
      </div>

      {playing && (
        <div className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-5" onClick={() => setPlaying(false)}>
          <button aria-label="Close film" className="absolute top-6 right-6 w-12 h-12 border border-white/30 text-white inline-flex items-center justify-center">
            <X size={20} strokeWidth={1.5} />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-black border border-white/15 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="text-center px-8">
              <p className="label text-white/50">NOIRÉ — SHOWREEL</p>
              <p className="display text-[28px] md:text-[40px] mt-4 text-white">Film coming soon.<br />The spaces speak first.</p>
              <div className="relative mt-8 aspect-video max-h-[50vh] w-full overflow-hidden">
                <Image src={IMAGES.film} alt="Film still" width={1200} height={675} className="h-full w-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
