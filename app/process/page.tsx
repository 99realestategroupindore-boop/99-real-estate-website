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
    image: "/public/process/1.jpg",
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
      <section className="bg-black py-32 text-center text-white">
        <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
          Our Approach
        </p>
        <h1 className="mt-4 text-5xl font-extrabold uppercase md:text-6xl">
          Our Process
        </h1>
        <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />
      </section>

      {/* ================= PROCESS CARDS ================= */}
      <section className="py-32 space-y-24">

        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl px-6"
          >
            <div
              className="relative overflow-hidden rounded-2xl group"
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/75 transition duration-500" />

              {/* Content */}
              <div className="relative z-10 p-16 text-white">

                <span className="text-yellow-400 text-sm font-semibold tracking-widest">
                  STEP {s.step}
                </span>

                <h3 className="mt-4 text-4xl font-extrabold uppercase">
                  {s.title}
                </h3>

                <p className="mt-6 max-w-2xl text-zinc-200 leading-7">
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

              </div>
            </div>
          </motion.div>
        ))}

      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-black py-32 text-center text-white">
        <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
          Ready To Start?
        </p>
        <h2 className="mt-4 text-4xl font-extrabold uppercase md:text-5xl">
          Let’s Build With Confidence
        </h2>
        <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-md bg-yellow-400 px-10 py-4 font-semibold text-black transition hover:bg-yellow-500"
        >
          START YOUR PROJECT
        </Link>
      </section>

    </main>
  );
}
