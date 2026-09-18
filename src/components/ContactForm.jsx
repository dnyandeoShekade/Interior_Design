"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal, { SplitWords } from "./Reveal";

const projectTypes = ["Residential","Villa","Penthouse","Hospitality","Commercial","Renovation"];
const budgets = ["$50k–$100k","$100k–$250k","$250k–$500k","$500k+"];
const inputCls = "w-full bg-transparent border border-[#1D1D1B]/20 px-4 py-3.5 text-[14px] placeholder:text-[#8B8880] transition-colors mt-2";

export default function ContactForm() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", type:"Residential", location:"", budget:"$100k–$250k", message:"" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };
  return (
    <section id="contact" className="bg-[#F7F0E3] py-20 md:py-32 border-t border-[#1D1D1B]/10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <p className="label text-[#8B8880]">11 — CONTACT</p>
          <h2 className="display text-[13vw] sm:text-[64px] lg:text-[88px] mt-5"><SplitWords text="START A" /><br /><SplitWords text="CONVERSATION." baseDelay={100} /></h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal variant="left" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-[22px] font-semibold tracking-[0.12em]">NOIRÉ STUDIO</p>
              <a href="mailto:hello@noirestudio.com" className="mt-4 inline-block text-[16px] border-b border-[#1D1D1B] pb-1">hello@noirestudio.com</a>
              <p className="mt-6 text-[14px] text-[#8B8880] leading-relaxed">Mumbai<br />India</p>
              <p className="mt-6 text-[14px] text-[#8B8880] leading-relaxed">Pune · Goa · Dubai<br />By appointment only</p>
              <div className="mt-8 border-t border-[#1D1D1B]/15 pt-6">
                <p className="label text-[#8B8880]">RESPONSE WITHIN 48 HOURS</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} variant="right" className="lg:col-span-8">
            {sent ? (
              <div className="border border-[#1D1D1B]/20 p-10 md:p-16 text-center">
                <span className="mx-auto w-14 h-14 rounded-full bg-[#1D1D1B] text-[#F3EBDD] inline-flex items-center justify-center"><Check size={22} strokeWidth={1.5} /></span>
                <h3 className="display text-[32px] md:text-[44px] mt-6">Thank you, {form.name.split(" ")[0]}.</h3>
                <p className="mt-4 text-[14px] text-[#8B8880] max-w-md mx-auto leading-relaxed">Your project enquiry has been received. Our studio will respond within 48 hours to schedule a consultation.</p>
                <button onClick={() => { setSent(false); setForm({ name:"", email:"", phone:"", type:"Residential", location:"", budget:"$100k–$250k", message:"" }); }} className="label mt-8 border border-[#1D1D1B]/30 px-8 py-3 hover:bg-[#1D1D1B] hover:text-[#F3EBDD] transition-colors">SEND ANOTHER ENQUIRY</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div><label htmlFor="cf-name" className="label text-[#8B8880]">NAME *</label><input id="cf-name" value={form.name} onChange={set("name")} placeholder="Your full name" className={inputCls} />{errors.name && <p className="text-[12px] text-red-800 mt-1">{errors.name}</p>}</div>
                <div><label htmlFor="cf-email" className="label text-[#8B8880]">EMAIL *</label><input id="cf-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className={inputCls} />{errors.email && <p className="text-[12px] text-red-800 mt-1">{errors.email}</p>}</div>
                <div><label htmlFor="cf-phone" className="label text-[#8B8880]">PHONE</label><input id="cf-phone" value={form.phone} onChange={set("phone")} placeholder="+91 ..." className={inputCls} /></div>
                <div><label htmlFor="cf-loc" className="label text-[#8B8880]">LOCATION</label><input id="cf-loc" value={form.location} onChange={set("location")} placeholder="City, Country" className={inputCls} /></div>
                <div><label htmlFor="cf-type" className="label text-[#8B8880]">PROJECT TYPE</label><select id="cf-type" value={form.type} onChange={set("type")} className={inputCls}>{projectTypes.map((t) => <option key={t}>{t}</option>)}</select></div>
                <div><label htmlFor="cf-budget" className="label text-[#8B8880]">ESTIMATED BUDGET</label><select id="cf-budget" value={form.budget} onChange={set("budget")} className={inputCls}>{budgets.map((b) => <option key={b}>{b}</option>)}</select></div>
                <div className="md:col-span-2"><label htmlFor="cf-msg" className="label text-[#8B8880]">MESSAGE *</label><textarea id="cf-msg" rows={5} value={form.message} onChange={set("message")} placeholder="Tell us about your space, vision and timeline..." className={`${inputCls} resize-y`} />{errors.message && <p className="text-[12px] text-red-800 mt-1">{errors.message}</p>}</div>
                <div className="md:col-span-2"><button type="submit" className="btn-sweep label w-full md:w-auto bg-[#1D1D1B] text-[#F3EBDD] border border-[#1D1D1B] px-12 py-4 inline-flex items-center justify-center gap-3 transition-colors">SUBMIT PROJECT <ArrowRight size={15} strokeWidth={1.5} /></button></div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
