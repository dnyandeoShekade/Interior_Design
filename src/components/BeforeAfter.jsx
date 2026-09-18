"use client";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfter({
  beforeImage,
  afterImage,
  title = "",
  description = "",
  projectLink = "",
  location = "",
  beforeFilter = "grayscale(0.85) brightness(0.72) contrast(0.9) sepia(0.28)",
  afterFilter = "none",
}) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percentage)));
  }, []);

  const onPointerDown = (e) => {
    setIsDragging(true);
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };
  const endDrag = () => setIsDragging(false);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); setPosition((p) => Math.max(0, p - 2)); }
    else if (e.key === "ArrowRight") { e.preventDefault(); setPosition((p) => Math.min(100, p + 2)); }
    else if (e.key === "Home") { e.preventDefault(); setPosition(0); }
    else if (e.key === "End") { e.preventDefault(); setPosition(100); }
  };

  return (
    <div className="w-full">
      {(title || description) && (
        <div className="mb-6 md:mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            {title && (
              <p className="label text-[#8B8880]">
                {title}
                {location ? ` — ${location}` : ""}
              </p>
            )}
            {description && <p className="mt-2 text-[14px] leading-relaxed text-[#8B8880] max-w-md font-light">{description}</p>}
          </div>
          {projectLink && (
            <Link href={projectLink} className="link-line inline-flex items-center gap-2 label text-[#1D1D1B]">
              VIEW FULL PROJECT <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          )}
        </div>
      )}

      {/* ============ COMPARISON CONTAINER ============
          Desktop: full width, ~700px tall (≈2:1 at 1440 container)
          Mobile: 100% width, 450–550px tall, 18px radius */}
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Before and after interior transformation comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        className="ba-wrap group relative w-full h-[450px] sm:h-[550px] lg:h-[700px] overflow-hidden rounded-[18px] lg:rounded-[24px] bg-[#111] cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1B]/60"
        style={{ touchAction: "pan-y" }}
      >
        {/* AFTER — base layer, always fully visible */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={`After renovation — ${title || location || "renovated interior"}`}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: afterFilter }}
        />

        {/* BEFORE — full-size top layer, only the visible area changes */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, transition: "none" }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeImage}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: beforeFilter }}
          />
        </div>

        {/* BEFORE label — fixed, attached to container */}
        <span className="absolute left-6 bottom-5 text-white bg-[rgba(0,0,0,0.75)] px-4 py-[10px] text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase pointer-events-none">
          BEFORE
        </span>

        {/* AFTER label — fixed, attached to container */}
        <span className="absolute right-6 bottom-5 text-white bg-[rgba(0,0,0,0.75)] px-4 py-[10px] text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase pointer-events-none">
          AFTER
        </span>

        {/* vertical divider — follows slider exactly, no transition while dragging */}
        <div className="absolute inset-y-0" style={{ left: `${position}%`, transition: "none" }} aria-hidden="true">
          <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.55)]" />
          {/* circular drag handle */}
          <div
            className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#FFFFFF] text-[#1D1D1B] flex items-center justify-center transition-shadow duration-300 ${
              isDragging ? "shadow-[0_12px_40px_rgba(0,0,0,0.45)] scale-105" : "shadow-[0_8px_28px_rgba(0,0,0,0.35)] group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
            }`}
          >
            <ChevronLeft size={17} strokeWidth={2} className="-mr-[5px]" />
            <ChevronRight size={17} strokeWidth={2} className="-ml-[5px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

