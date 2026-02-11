"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="flex min-h-[55vh] items-center justify-center bg-black pt-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6 text-center text-white"
        >
          <p className="mb-4 text-xs tracking-[0.3em] text-zinc-400 uppercase">
            About Our Company
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-tight">
            Building Trust <br />
            <span className="text-yellow-400">Since 2015</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            A construction partner focused on quality, transparency, and
            long-term value.
          </p>
        </motion.div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs tracking-[0.3em] text-zinc-400 uppercase">
              Who We Are
            </p>

            <h2 className="text-4xl font-semibold uppercase md:text-5xl">
              A Legacy of Quality
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-600">
              99 Real Estate Group is a trusted construction and development
              company delivering residential and commercial projects with
              precision and integrity.
            </p>

            <p className="mt-4 text-base leading-7 text-zinc-600">
              Our experienced team ensures every project meets the highest
              standards of safety, durability, and design excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1590650046871-92c887180603"
              alt="About Company"
              className="w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="relative bg-white pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-24 text-center"
          >
            <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
              Our Journey
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase md:text-5xl">
              Milestones
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-14 bg-yellow-400" />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-yellow-400" />

            <TimelineItem side="left" year="2015" title="Foundation" text="Company established with a vision to deliver quality-driven construction solutions." />
            <TimelineItem side="right" year="2018" title="First Major Project" text="Successfully delivered large-scale residential developments across the region." />
            <TimelineItem side="left" year="2021" title="Expansion" text="Expanded into commercial and turnkey construction projects." />
            <TimelineItem side="right" year="2024" title="Trusted Brand" text="Recognized as a reliable and trusted name in the construction industry." />
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="bg-zinc-100 py-24">
        <motion.div
          className="mx-auto max-w-7xl px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs tracking-[0.3em] text-zinc-500 uppercase">
            What Drives Us
          </motion.p>

          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold uppercase md:text-5xl">
            Our Values
          </motion.h2>

          <div className="mx-auto mt-4 h-1 w-16 bg-yellow-400" />

          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {["Integrity", "Quality", "Innovation", "Commitment"].map((v) => (
              <motion.div
                key={v}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold uppercase">{v}</h3>
                <p className="mt-4 text-zinc-600 leading-7">
                  We uphold the highest standards in everything we do.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative bg-cover bg-center py-16 md:py-32"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        >
          <p className="text-xs tracking-[0.3em] text-zinc-300 uppercase">
            Ready to Build
          </p>

          <h2 className="mt-3 text-4xl font-semibold uppercase md:text-5xl">
            With Confidence?
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-14 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-zinc-300">
            Partner with <strong>99 Real Estate Group</strong> for transparent
            processes, expert execution, and construction excellence you can trust.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-md bg-yellow-400 px-10 py-4 font-semibold text-black hover:bg-yellow-500"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

/* ================= TIMELINE ITEM ================= */

function TimelineItem({
  side,
  year,
  title,
  text,
}: {
  side: "left" | "right";
  year: string;
  title: string;
  text: string;
}) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={isLeft ? fadeLeft : fadeRight}
      transition={{ duration: 0.6 }}
      className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center"
    >
      {/* MOBILE + LEFT SIDE */}
      <div
        className={`
          w-full md:w-1/2
          ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto md:text-left"}
        `}
      >
        <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400">
          {year}
        </span>

        <h4 className="mt-3 text-lg md:text-xl font-bold uppercase">
          {title}
        </h4>

        <p className="mt-2 text-zinc-600 leading-relaxed text-sm md:text-base">
          {text}
        </p>
      </div>

      {/* CENTER DOT (Desktop Only) */}
      <div className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2">
        <span className="block h-4 w-4 rounded-full bg-yellow-400"></span>
      </div>
    </motion.div>
  );
}
