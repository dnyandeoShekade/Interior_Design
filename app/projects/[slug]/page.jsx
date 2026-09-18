import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import Reveal from "../../../src/components/Reveal";
import BeforeAfter from "../../../src/components/BeforeAfter";
import { projects } from "../../../src/data/projects";
import { transformations } from "../../../src/data/studio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: `${p.title} — NOIRÉ Studio`, description: p.concept };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const t = transformations[0];
  const related = projects.filter((x) => x.slug !== slug).slice(0, 2);
  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const facts = [["LOCATION", p.location], ["YEAR", p.year], ["TYPE", p.category], ["AREA", p.area], ["SCOPE", p.scope]];

  return (
    <>
      <Header dark />
      <main className="bg-[#F3EBDD] pt-[72px]">
        <div className="relative h-[70vh] min-h-[480px] overflow-hidden bg-[#1D1D1B]">
          <Image src={p.image} alt={p.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
          <div className="absolute inset-x-0 top-0 mx-auto max-w-[1500px] px-5 md:px-10 pt-8">
            <Link href="/#projects" className="label text-white/80 inline-flex items-center gap-2 hover:text-white">
              <ArrowLeft size={15} strokeWidth={1.5} /> ALL PROJECTS
            </Link>
          </div>
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1500px] px-5 md:px-10 pb-10 text-white">
            <p className="label text-white/70">{p.index} — {p.category} · {p.year}</p>
            <h1 className="display text-[14vw] sm:text-[72px] lg:text-[96px] mt-3">{p.title}</h1>
            <p className="label text-white/70 mt-3">{p.location.toUpperCase()} — {p.area.toUpperCase()}</p>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] px-5 md:px-10 py-16 md:py-24">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="label text-[#8B8880]">DESIGN CONCEPT</p>
                <p className="display text-[28px] md:text-[40px] mt-4 leading-[1.2]">“{p.concept}”</p>
                <p className="mt-6 text-[15px] leading-[1.8] text-[#55524c] font-light max-w-2xl">{p.description}</p>
              </div>
              <div className="lg:col-span-5">
                <dl className="border-t border-[#1D1D1B]/15">
                  {facts.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6 py-4 border-b border-[#1D1D1B]/15">
                      <dt className="label text-[#8B8880]">{k}</dt>
                      <dd className="text-[14px] text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal className="md:col-span-2">
              <div className="img-frame aspect-[21/10]"><Image src={p.gallery[0]} alt={`${p.title} view`} width={1600} height={760} sizes="100vw" loading="lazy" className="h-full w-full object-cover" /></div>
            </Reveal>
            <Reveal><div className="img-frame aspect-[4/3]"><Image src={p.gallery[1]} alt={`${p.title} detail`} width={1000} height={750} sizes="50vw" loading="lazy" className="h-full w-full object-cover" /></div></Reveal>
            <Reveal delay={90}><div className="img-frame aspect-[4/3]"><Image src={p.gallery[2]} alt={`${p.title} interior`} width={1000} height={750} sizes="50vw" loading="lazy" className="h-full w-full object-cover" /></div></Reveal>
          </div>

          <Reveal className="mt-16 md:mt-24">
            <p className="label text-[#8B8880]">TRANSFORMATION — DRAG TO COMPARE</p>
            <h2 className="display text-[40px] md:text-[64px] mt-4">FROM EXISTING<br />TO EXCEPTIONAL.</h2>
            <div className="mt-8">
              <BeforeAfter
                beforeImage={t.beforeImage}
                afterImage={p.image}
                beforeFilter={t.beforeFilter}
                projectLink={`/projects/${p.slug}`}
              />
              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-[9px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77736B]">
                  DRAG · TOUCH · KEYBOARD ACCESSIBLE
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <p className="label text-[#8B8880]">MATERIALS</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.materials.map((m) => (
                  <span key={m} className="label border border-[#1D1D1B]/25 px-5 py-2.5">{m.toUpperCase()}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 grid grid-cols-3 border-t border-[#1D1D1B]/15">
              {p.stats.map((s) => (
                <div key={s.label} className="py-6 px-4 first:pl-0 border-r last:border-r-0 border-[#1D1D1B]/15">
                  <p className="display text-[30px] md:text-[44px]">{s.value}</p>
                  <p className="label text-[#8B8880] mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 border-y border-[#1D1D1B]/15 py-12 text-center">
            <p className="label text-[#8B8880]">CLIENT NOTE</p>
            <blockquote className="display text-[28px] md:text-[44px] mt-4 max-w-3xl mx-auto leading-[1.2]">“{p.quote.text}”</blockquote>
            <p className="label mt-6">{p.quote.author} — {p.quote.place.toUpperCase()}</p>
          </Reveal>

          <div className="mt-16">
            <Reveal><p className="label text-[#8B8880]">CONTINUE EXPLORING</p></Reveal>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Reveal key={r.slug}>
                  <Link href={`/projects/${r.slug}`} className="group block">
                    <div className="img-frame aspect-[16/10]"><Image src={r.image} alt={r.title} width={1000} height={625} sizes="50vw" loading="lazy" className="h-full w-full object-cover" /></div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div><p className="label text-[#8B8880]">{r.category} · {r.year}</p><h3 className="display text-[30px] mt-1">{r.title}</h3></div>
                      <span className="w-11 h-11 shrink-0 border border-[#1D1D1B]/25 inline-flex items-center justify-center group-hover:bg-[#1D1D1B] group-hover:text-[#F3EBDD] transition-colors"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 text-center">
              <Link href={`/projects/${next.slug}`} className="label inline-flex items-center gap-3 border-b border-[#1D1D1B] pb-1">NEXT PROJECT — {next.title} <ArrowRight size={15} strokeWidth={1.5} /></Link>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
