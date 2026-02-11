"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ================= DATA ================= */

const steps = [
  {
    step: "01",
    title: "Consultation & Planning",
    desc: "Project scope, budget, and timelines are defined clearly before design begins.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    points: [
      "Requirement & budget clarity",
      "Site evaluation",
      "Dedicated project manager",
    ],
  },
  {
    step: "02",
    title: "Design & Engineering",
    desc: "Concepts are transformed into practical and compliant architectural solutions.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    points: [
      "2D plans & 3D elevation",
      "Structural certification",
      "MEP drawings",
    ],
  },
  {
    step: "03",
    title: "Costing & Approvals",
    desc: "Transparent costing ensures financial clarity before execution.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    points: [
      "Item-wise cost breakup",
      "Material finalization",
      "Approval confirmation",
    ],
  },
  {
    step: "04",
    title: "Construction Execution",
    desc: "Execution with strict supervision and milestone tracking.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    points: [
      "Dedicated site engineer",
      "Quality checks",
      "Weekly progress updates",
    ],
  },
  {
    step: "05",
    title: "Quality Checks",
    desc: "Multiple inspections ensure durability and finish excellence.",
    image: "/process/1.jpg",
    points: [
      "Stage-wise inspection",
      "Checklist verification",
      "Rectifications before handover",
    ],
  },
  {
    step: "06",
    title: "Handover & Support",
    desc: "On-time delivery with warranty documentation and continued support.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    points: [
      "Final inspection",
      "Warranty documentation",
      "Post-completion support",
    ],
  },
];

/* ================= PAGE ================= */

export default function ProcessPage() {
  return (
    <main className="bg-white">

{/* ================= HERO ================= */}
<section className="bg-black py-16 md:py-32 text-center text-white px-6">
  <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 uppercase">
    Our Approach
  </p>

  <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-tight">
    Our <span className="text-yellow-400">Process</span>
  </h1>

  <div className="mx-auto mt-6 h-[3px] w-12 sm:w-16 bg-yellow-400" />
</section>

      {/* ================= PROCESS CARDS ================= */}
      <section className="py-32 space-y-24">

        {steps.map((s) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl px-6"
          >
            <div
              className="relative overflow-hidden rounded-2xl group max-w-full"
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/75 transition duration-500" />

              <div className="relative z-10 p-6 md:p-12 text-white break-words">

                <span className="text-yellow-400 text-sm font-semibold tracking-widest">
                  STEP {s.step}
                </span>

                <h3 className="mt-4 text-2xl md:text-4xl font-extrabold uppercase leading-tight">
                  {s.title}
                </h3>

                <p className="mt-6 max-w-2xl text-sm md:text-base text-zinc-200 leading-relaxed break-words">
                  {s.desc}
                </p>

                <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                  {s.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* ================= PDF SECTION (Only for Step 02) ================= */}
                {s.step === "02" && (
                  <div className="mt-12 border-t border-white/20 pt-10">

                    <h4 className="text-xl font-bold uppercase text-yellow-400">
                      Download Detailed Design & Planning Guide
                    </h4>

                    <p className="mt-3 max-w-xl text-sm text-zinc-300">
                      Get complete insights into our 2D layouts, 3D elevations,
                      structural drawings, MEP planning, and technical standards.
                    </p>

                    <a
                      href="/pdfs/design-planning-guide.pdf"
                      download
                      className="mt-6 inline-block rounded-md border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                    >
                      DOWNLOAD PDF
                    </a>

                  </div>
                )}

              </div>
            </div>
          </motion.div>
        ))}

      </section>

{/* ================= CTA ================= */}
<section className="relative bg-black py-16 md:py-32 text-center text-white px-6">
  <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 uppercase">
    Ready To Start?
  </p>

  <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase leading-tight">
    Let’s Build With Confidence
  </h2>

  <div className="mx-auto mt-6 h-[3px] w-12 sm:w-16 bg-yellow-400" />

  <Link
    href="/contact"
    className="
      mt-8 sm:mt-10
      inline-block w-full sm:w-auto
      rounded-md bg-yellow-400
      px-6 sm:px-10 py-4
      text-sm sm:text-base
      font-semibold text-black
      transition-all duration-300
      hover:bg-yellow-500 hover:-translate-y-1
    "
  >
    START YOUR PROJECT
  </Link>
</section>

    </main>
  );
}
