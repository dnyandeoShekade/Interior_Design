import { U } from "./projects";

export const services = [
  {
    index: "01",
    title: "INTERIOR ARCHITECTURE",
    text: "Creating spatial environments with architectural clarity and refined proportions.",
    image: U("photo-1600210492486-724fe5c67fb0", 800),
  },
  {
    index: "02",
    title: "SPACE PLANNING",
    text: "Thoughtful layouts designed around movement, light and everyday living.",
    image: U("photo-1600607687939-ce8a6c25118c", 800),
  },
  {
    index: "03",
    title: "MATERIAL & STYLING",
    text: "Curating textures, furniture and finishes that create depth and character.",
    image: U("photo-1616486338812-3dadae4b4ace", 800),
  },
  {
    index: "04",
    title: "RENOVATION",
    text: "Reimagining existing spaces through intelligent planning and considered detail.",
    image: U("photo-1600585154340-be6161a56a0c", 800),
  },
];

export const processSteps = [
  {
    index: "01",
    title: "CONSULTATION",
    text: "We begin by understanding your vision, lifestyle, property and ambitions.",
    duration: "WEEK 01",
    note: "Site walk · lifestyle interview · ambition mapping",
  },
  {
    index: "02",
    title: "CONCEPT",
    text: "Layouts, materials, lighting and architectural direction take shape.",
    duration: "WEEKS 02–03",
    note: "Moodboards · spatial studies · material palette",
  },
  {
    index: "03",
    title: "DESIGN DEVELOPMENT",
    text: "Every detail is refined from furniture to finishes.",
    duration: "WEEKS 04–08",
    note: "Drawings · joinery details · curated selections",
  },
  {
    index: "04",
    title: "EXECUTION",
    text: "Craftsmanship and project coordination bring the design to life.",
    duration: "MONTHS 03–08",
    note: "Site supervision · craftsmen · quality control",
  },
  {
    index: "05",
    title: "FINAL REVEAL",
    text: "Your completed space, ready to be lived in.",
    duration: "HANDOVER",
    note: "Styling · walkthrough · aftercare",
  },
];

export const galleryItems = [
  { src: U("photo-1600210492486-724fe5c67fb0", 1200), name: "Villa Lumière — Living", span: "tall" },
  { src: U("photo-1600607687939-ce8a6c25118c", 1200), name: "Maison Noir — Lounge", span: "std" },
  { src: U("photo-1618221195710-dd6b41faaea6", 1400), name: "Villa Lumière — Salon", span: "wide" },
  { src: U("photo-1616486338812-3dadae4b4ace", 1200), name: "Casa Verde — Suite", span: "std" },
  { src: U("photo-1600566753086-00f18fb6b3ea", 1200), name: "Casa Verde — Bath", span: "tall" },
  { src: U("photo-1512917774080-9991f1c4c750", 1400), name: "The Monument — Court", span: "wide" },
  { src: U("photo-1600121848594-d8644e57abab", 1000), name: "The Monument — Detail", span: "small" },
  { src: U("photo-1616594039964-ae9021a400a0", 1200), name: "Maison Noir — Bedroom", span: "std" },
  { src: U("photo-1615873968403-89e068629265", 1200), name: "Atelier — Reading Room", span: "tall" },
];

export const testimonials = [
  {
    quote:
      "NOIRÉ transformed our home into something that feels both deeply personal and completely timeless.",
    name: "AARAV & MEERA",
    location: "Mumbai",
    project: "Villa Lumière",
  },
  {
    quote:
      "Precise, calm and exacting. They saw what the space could become long before we did.",
    name: "ROHAN SHETTY",
    location: "Pune",
    project: "Maison Noir",
  },
  {
    quote:
      "From first sketch to final styling, everything was considered. The house breathes.",
    name: "ELENA D'SOUZA",
    location: "Goa",
    project: "Casa Verde",
  },
];

export const faqs = [
  {
    q: "How long does an interior project take?",
    a: "Most full residences take 8–16 months from concept to handover, depending on scale, approvals and custom fabrication. We share a detailed timeline after the initial consultation.",
  },
  {
    q: "Do you work on international projects?",
    a: "Yes. Alongside our studios in Mumbai, Pune and Goa, we work across the UAE and internationally — managing design remotely and partnering with trusted local execution teams.",
  },
  {
    q: "Can you renovate an existing property?",
    a: "Renovation is one of our core strengths. We assess structure, light and flow, then re-plan intelligently — retaining what has value and transforming the rest.",
  },
  {
    q: "What services do you provide?",
    a: "Interior architecture, space planning, material and furniture curation, lighting design, renovation, styling and complete turnkey execution with our craftsmen partners.",
  },
  {
    q: "Do you manage execution?",
    a: "Yes. We coordinate contractors, craftsmen, joinery and site supervision so the design intent is protected at every stage through to final reveal.",
  },
  {
    q: "How do we start a project?",
    a: "Share your space, vision and timeline through the contact form. We respond within 48 hours to schedule a consultation and site understanding.",
  },
];

export const transformations = [
  {
    title: "Villa Lumière",
    location: "Mumbai, India",
    // "before": desaturated, flat construction-like treatment via CSS filter
    beforeImage: U("photo-1600210492486-724fe5c67fb0", 1800),
    afterImage: U("photo-1600210492486-724fe5c67fb0", 1800),
    beforeFilter: "grayscale(0.85) brightness(0.72) contrast(0.9) sepia(0.28)",
    afterFilter: "none",
  },
  {
    title: "Maison Noir",
    location: "Pune, India",
    beforeImage: U("photo-1600607687939-ce8a6c25118c", 1800),
    afterImage: U("photo-1600607687939-ce8a6c25118c", 1800),
    beforeFilter: "grayscale(0.85) brightness(0.72) contrast(0.9) sepia(0.28)",
    afterFilter: "none",
  },
];
