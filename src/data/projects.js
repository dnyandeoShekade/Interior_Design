export const U = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: U("photo-1600210492486-724fe5c67fb0", 2200),
  intro: U("photo-1618221195710-dd6b41faaea6", 1200),
  introSmall: U("photo-1616486338812-3dadae4b4ace", 800),
  film: U("photo-1600585154340-be6161a56a0c", 2200),
  testimonial: U("photo-1600566753086-00f18fb6b3ea", 1000),
};

export const projects = [
  {
    slug: "villa-lumiere",
    index: "01",
    title: "VILLA LUMIÈRE",
    category: "PRIVATE RESIDENCE",
    year: "2026",
    location: "Mumbai, India",
    area: "8,400 sq ft",
    scope: "Architecture · Interiors · Styling",
    description:
      "A waterfront residence composed around natural stone, warm timber and sculptural light. Spaces unfold in quiet sequence — each room tuned to the movement of the sun.",
    concept:
      "An exploration of natural stone, warm timber and sculptural light. The plan removes visual noise so material, proportion and daylight carry the experience.",
    image: U("photo-1618221195710-dd6b41faaea6", 1800),
    gallery: [
      U("photo-1600210492486-724fe5c67fb0", 1400),
      U("photo-1600607687939-ce8a6c25118c", 1400),
      U("photo-1600566753086-00f18fb6b3ea", 1400),
    ],
    materials: ["Travertine", "Smoked Oak", "Brushed Brass", "Lime Plaster"],
    stats: [
      { value: "8,400", label: "SQ FT" },
      { value: "14", label: "MONTHS" },
      { value: "42", label: "BESPOKE PIECES" },
    ],
    quote: {
      text: "Every evening the house glows. It feels calm, precise and entirely ours.",
      author: "Private Client",
      place: "Mumbai",
    },
  },
  {
    slug: "maison-noir",
    index: "02",
    title: "MAISON NOIR",
    category: "LUXURY RESIDENCE",
    year: "2025",
    location: "Pune, India",
    area: "6,200 sq ft",
    scope: "Interiors · Lighting · Furniture",
    description:
      "A study in contrast — charcoal stone against soft ivory walls, deep timber against brushed metal. Intimate, moody and meticulously detailed.",
    concept:
      "Darkness used with restraint. Layered lighting, smoked materials and tailored joinery create a residence that feels private and cinematic.",
    image: U("photo-1600607687939-ce8a6c25118c", 1800),
    gallery: [
      U("photo-1616486338812-3dadae4b4ace", 1400),
      U("photo-1616594039964-ae9021a400a0", 1400),
      U("photo-1567016432779-094069958ea5", 1400),
    ],
    materials: ["Charcoal Stone", "Walnut", "Bronze", "Bouclé"],
    stats: [
      { value: "6,200", label: "SQ FT" },
      { value: "11", label: "MONTHS" },
      { value: "35", label: "BESPOKE PIECES" },
    ],
    quote: {
      text: "NOIRÉ understood restraint. Nothing shouts, everything resonates.",
      author: "Private Client",
      place: "Pune",
    },
  },
  {
    slug: "casa-verde",
    index: "03",
    title: "CASA VERDE",
    category: "PRIVATE VILLA",
    year: "2025",
    location: "Goa, India",
    area: "9,800 sq ft",
    scope: "Architecture · Landscape · Interiors",
    description:
      "A tropical modernist villa where courtyards, colonnades and water bring the landscape inside. Air moves freely; light is filtered, never harsh.",
    concept:
      "Indoor and outdoor dissolve. Lime-washed walls, terrazzo and cane frame views of palms and sky — luxury measured in air and shade.",
    image: U("photo-1600585154340-be6161a56a0c", 2000),
    gallery: [
      U("photo-1600566752355-35792bedcfea", 1400),
      U("photo-1600585154526-990dced4db0d", 1400),
      U("photo-1600573472592-401b489a3cdc", 1400),
    ],
    materials: ["Terrazzo", "Cane", "Lime Wash", "Teak"],
    stats: [
      { value: "9,800", label: "SQ FT" },
      { value: "16", label: "MONTHS" },
      { value: "3", label: "COURTYARDS" },
    ],
    quote: {
      text: "It breathes. The house feels like a retreat we never have to leave.",
      author: "Private Client",
      place: "Goa",
    },
  },
  {
    slug: "the-monument",
    index: "04",
    title: "THE MONUMENT",
    category: "BOUTIQUE HOSPITALITY",
    year: "2024",
    location: "Dubai, UAE",
    area: "22,000 sq ft",
    scope: "Hospitality · Public Spaces · Suites",
    description:
      "Fourteen suites and a double-height lounge carved from concrete, travertine and bronze. Monumental in scale, intimate in touch.",
    concept:
      "Hospitality as architecture. A procession of stone, shadow and warm light guides guests from arrival court to private suite.",
    image: U("photo-1512917774080-9991f1c4c750", 2000),
    gallery: [
      U("photo-1600121848594-d8644e57abab", 1400),
      U("photo-1615873968403-89e068629265", 1400),
      U("photo-1617806118233-18e1de247200", 1400),
    ],
    materials: ["Travertine", "Board Concrete", "Bronze", "Smoked Glass"],
    stats: [
      { value: "22,000", label: "SQ FT" },
      { value: "14", label: "SUITES" },
      { value: "18", label: "MONTHS" },
    ],
    quote: {
      text: "Guests photograph every corner. It has become a landmark for the brand.",
      author: "Hotel Partner",
      place: "Dubai",
    },
  },
];
