"use client";

import { useState } from "react";

/* ================= MASTER SECTION ORDER ================= */
const MASTER_SECTIONS = [
  "Core Construction",
  "Designs & Drawings",
  "Flooring & Wall Tiling",
  "Doors, Windows & Fabrication",
  "Electrical",
  "Plumbing & Sanitary",
  "Painting",
  "Water Tanks & Waterproofing",
  "Warranty",
  "Not Included",
];

/* ================= PACKAGE DATA (NO SHORTCUTS) ================= */
const packages = [
  {
    name: "Standard",
    price: "₹1550",
    highlight: false,
    data: {
      "Core Construction": [
        "Foundation by footing method (maximum depth up to 6 ft in yellow soil)",
        "Anti-termite treatment for foundation",
        "M20 grade concrete (1:1.5:3 mix ratio)",
        "JSW One TMT steel reinforcement",
        "Ultratech / JK Super cement",
        "Best quality open Bhatta red bricks",
        "Narmada river sand for masonry and plastering",
        "Coarse aggregate 12mm & 20mm",
        "Ceiling height 10.5 ft (floor to slab top)",
        "Plinth height 1.5 ft from road level",
      ],
      "Designs & Drawings": [
        "2D architectural floor plans",
        "3D front elevation design",
        "2D furniture layout",
        "Structural design certified by licensed structural engineer",
        "Electrical layout drawings",
        "Plumbing layout drawings",
        "Execution working drawings for site",
      ],
      "Flooring & Wall Tiling": [
        "Vitrified tiles ₹40/sqft for living, dining, kitchen & bedrooms",
        "Kitchen dado tiles ₹40/sqft up to 2 ft height",
        "Toilet wall tiles ₹40/sqft up to 7 ft height",
        "Wash area wall tiles ₹40/sqft up to 5 ft height",
        "Parking heavy duty tiles ₹40/sqft",
        "Staircase tiles up to ₹90/sqft",
        "Kitchen granite with Kota stone ₹90/sqft (up to 15 RFT)",
        "Stainless steel kitchen sink up to ₹3,000",
      ],
      "Doors, Windows & Fabrication": [
        "Main door: Flush door with mica finish (₹15,000 hardware allowance)",
        "Internal doors: Flush doors with mica (₹10,000 hardware allowance)",
        "Bathroom doors: PVC doors (₹7,500 allowance)",
        "Windows: 3 track aluminium windows with mesh & granite jamming ₹300/sqft",
        "Fabrication works: 200 kg per 1000 sqft built-up area",
        "Balcony railing: SS 304 ₹500/RFT",
        "Staircase railing: SS 202 ₹400/RFT",
      ],
      Electrical: [
        "Concealed copper wiring – Polycab / KEI",
        "Modular switches – Anchor / Havells / Western",
        "Standard electrical point layout",
        "Switches & sockets cost ₹20 per point",
      ],
      "Plumbing & Sanitary": [
        "CPVC plumbing pipes – Supreme / Kasta or equivalent",
        "SWR drainage & rainwater pipes",
        "Bathroom sanitary fittings allowance ₹20,000 per toilet",
        "Wall mixer, shower & wash basin fittings included",
        "Kitchen sink cock ₹1,500 each",
        "Other taps ₹800 each",
      ],
      Painting: [
        "Internal wall putty – JSW low dust putty (2 coats)",
        "Interior primer – JSW (1 coat)",
        "Interior paint – JSW Pixa (2 coats, 3 years performance)",
        "Exterior primer – JSW (1 coat)",
        "Exterior paint – JSW Pixa (2 coats)",
        "Metal primer & enamel paint for fabrication",
      ],
      "Water Tanks & Waterproofing": [
        "Toilet waterproofing – Brick bat coba",
        "Terrace waterproofing – chemical waterproofing with Dr. Fixit",
        "Underground water tank – 6000 litres (brick & RCC)",
        "Overhead water tank – 1000 litres (3 layer)",
      ],
      Warranty: [
        "10 years structural warranty with certification",
        "1 year service warranty",
      ],
      "Not Included": [
        "Interior design & false ceiling",
        "Borewell & solar system",
        "Compound wall & landscaping",
        "Lift, CCTV, home automation",
      ],
    },
  },

  {
    name: "Premium",
    price: "₹1850",
    highlight: true,
    data: {
      "Core Construction": [
        "Foundation by footing method (maximum depth up to 6 ft in yellow soil)",
        "Anti-termite treatment",
        "M20 grade concrete (1:1.5:3)",
        "JSW One TMT steel reinforcement",
        "Ultratech / JK Super cement",
        "Best quality open Bhatta red bricks",
        "Narmada river sand",
        "Ceiling height 10.5 ft & plinth height 1.5 ft",
      ],
      "Designs & Drawings": [
        "2D architectural floor plans",
        "3D front elevation design",
        "2D furniture layout",
        "Structural design with certification",
        "Electrical & plumbing drawings",
        "Execution working drawings",
      ],
      "Flooring & Wall Tiling": [
        "Vitrified tiles ₹80/sqft",
        "Kitchen dado tiles ₹60/sqft",
        "Toilet & wash area tiles ₹60/sqft",
        "Parking heavy duty tiles ₹50/sqft",
        "Staircase tiles up to ₹135/sqft",
        "Kitchen granite with Kota stone ₹200/sqft",
        "Stainless steel kitchen sink up to ₹5,000",
      ],
      "Doors, Windows & Fabrication": [
        "Main door with veneer finish (₹25,000 hardware allowance)",
        "Internal doors with veneer finish (₹18,000 allowance)",
        "Bathroom doors PVC/flush (₹10,000 allowance)",
        "Aluminium windows with granite jamming ₹450/sqft",
        "Fabrication works: 250 kg per 1000 sqft",
        "Balcony railing: Toughened glass with SS top rail ₹1,300/RFT",
        "Staircase railing: SS 202 with glass ₹800/RFT",
      ],
      Electrical: [
        "Concealed copper wiring – Polycab / KEI",
        "Modular switches – Anchor / Havells / GM",
        "Switches & sockets cost ₹35 per point",
      ],
      "Plumbing & Sanitary": [
        "CPVC plumbing pipes – Supreme / Kasta",
        "SWR drainage pipes",
        "Bathroom sanitary fittings allowance ₹40,000 per toilet",
        "Kitchen sink cock ₹2,500",
        "Other taps ₹1,200 each",
      ],
      Painting: [
        "JSW wall putty – 2 coats",
        "Interior paint – JSW Aurus (2 coats, 3 years)",
        "Exterior paint – JSW Pixa (2 coats)",
        "Metal primer & enamel paint",
      ],
      "Water Tanks & Waterproofing": [
        "Toilet waterproofing – Brick bat coba",
        "Terrace waterproofing – chemical with Dr. Fixit",
        "Underground tank – 6000 litres",
        "Overhead tank – 1500 litres (5 layer)",
      ],
      Warranty: [
        "10 years structural warranty",
        "1 year service warranty",
      ],
      "Not Included": [
        "Interior works & false ceiling",
        "Solar system & borewell",
        "Boundary wall & landscaping",
        "Lift & home automation",
      ],
    },
  },

  {
    name: "Luxury",
    price: "₹2150",
    highlight: false,
    data: {
      "Core Construction": [
        "Foundation by footing method (up to 6 ft depth)",
        "Anti-termite treatment",
        "M20 grade concrete",
        "JSW One TMT steel",
        "Ultratech / JK Super cement",
        "Premium quality red bricks",
        "Narmada river sand",
        "Ceiling height 10.5 ft & plinth height 1.5 ft",
      ],
      "Designs & Drawings": [
        "2D architectural floor plans",
        "3D front elevation with premium detailing",
        "2D furniture layout",
        "Structural design with certification",
        "Electrical & plumbing drawings",
        "Execution drawings",
      ],
      "Flooring & Wall Tiling": [
        "Vitrified tiles ₹120/sqft",
        "Kitchen dado tiles ₹80/sqft",
        "Toilet & wash area tiles ₹80/sqft",
        "Parking tiles ₹60/sqft",
        "Staircase tiles up to ₹200/sqft",
        "Stainless steel sink up to ₹8,000",
      ],
      "Doors, Windows & Fabrication": [
        "Main door veneer/teak finish (₹40,000 allowance)",
        "Internal veneer doors (₹25,000 allowance)",
        "Bathroom doors PVC/flush (₹15,000 allowance)",
        "UPVC windows with granite jamming ₹600/sqft",
        "Fabrication works: 300 kg per 1000 sqft",
        "12mm toughened glass balcony railing ₹1,800/RFT",
      ],
      Electrical: [
        "Premium concealed copper wiring",
        "Modular switches – Anchor / Havells / GM",
        "Switches & sockets cost ₹55 per point",
      ],
      "Plumbing & Sanitary": [
        "Premium CPVC plumbing system",
        "Sanitary fittings allowance ₹60,000 per toilet",
        "Kitchen sink cock ₹3,500",
        "Other taps ₹1,500 each",
      ],
      Painting: [
        "JSW putty – 2 coats + acrylic putty",
        "Interior paint – JSW Halo (5 years)",
        "Exterior paint – JSW Pixa (5 years)",
      ],
      "Water Tanks & Waterproofing": [
        "Toilet waterproofing – Brick bat coba",
        "Terrace waterproofing – brick bat coba with Dr. Fixit",
        "Underground tank – 6000 litres",
        "Overhead tank – 2000 litres (7 layer)",
      ],
      Warranty: [
        "10 years structural warranty",
        "1 year service warranty",
      ],
      "Not Included": [
        "Interior design & false ceiling",
        "Solar system, borewell",
        "Lift & automation",
        "Boundary wall & landscaping",
      ],
    },
  },
];

/* ================= COMPONENT ================= */
export default function PackagesClient() {
  // ONE STATE CONTROLS ALL PACKAGES
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-black py-32 text-center text-white">
        <p className="text-xs tracking-[0.35em] text-zinc-400 uppercase">
          Transparent Pricing
        </p>
        <h1 className="mt-6 text-5xl font-extrabold uppercase md:text-6xl">
          Construction <span className="text-yellow-400">Packages</span>
        </h1>
        <div className="mx-auto mt-6 h-1 w-20 bg-yellow-400" />
      </section>

      {/* PACKAGES */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-8 ${
                pkg.highlight
                  ? "border-yellow-400 ring-2 ring-yellow-400"
                  : "border-zinc-200"
              }`}
            >
              {/* MOST CHOSEN BADGE */}
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black">
                  MOST CHOSEN
                </div>
              )}

              <h3 className="text-2xl font-extrabold uppercase">{pkg.name}</h3>

              <p className="mt-4 text-4xl font-bold">
                {pkg.price}
                <span className="text-sm text-zinc-500"> / sq.ft</span>
              </p>

              <div className="mt-6 space-y-4">
                {MASTER_SECTIONS.map((section, index) => {
                  const open = openSection === index;

                  return (
                    <div
                      key={section}
                      className="rounded-lg border border-zinc-100"
                    >
                      <button
                        onClick={() =>
                          setOpenSection(open ? null : index)
                        }
                        className="flex w-full items-center justify-between p-4 font-semibold"
                      >
                        {section}
                        <span
                          className={`text-yellow-400 transition-transform ${
                            open ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          open ? "max-h-[800px] px-4 pb-4" : "max-h-0"
                        }`}
                      >
                        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600">
                          {pkg.data[section].map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

{/* ================= CTA ================= */}
<section className="pb-28">
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">

      {/* CONTACT CTA */}
      <a
        href="/contact"
        className="rounded-md bg-black px-10 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
      >
        Get Free Consultation →
      </a>

      {/* PDF CTA */}
      <a
        href="/pdf/construction-packages.pdf"
        target="_blank"
        className="rounded-md border border-black px-10 py-4 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
      >
        Download Packages PDF →
      </a>

    </div>
  </div>
</section>

    </main>
  );
}
