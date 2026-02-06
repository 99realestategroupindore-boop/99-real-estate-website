"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ================= IMAGE LIST ================= */
/**
 * Filenames must EXACTLY match /public/elevations
 */

const allImages = [
  // DUPLEX
  "duplex (1).jpg","duplex (2).jpg","duplex (3).jpg","duplex (4).jpg","duplex (5).jpg",
  "duplex (6).jpg","duplex (7).jpg","duplex (8).jpg","duplex (9).jpg","duplex (10).jpg",
  "duplex (11).jpg","duplex (12).jpg","duplex (13).jpg","duplex (14).jpg","duplex (15).jpg",
  "duplex (16).jpg","duplex (17).jpg","duplex (18).jpg","duplex (19).jpg","duplex (20).jpg",
  "duplex (21).jpg",

  // VILLA
  "villa1.jpg","villa2.jpg","villa3.jpg","villa4.jpg","villa5.jpg",
  "villa6.jpg","villa7.jpg","villa8.jpg","villa9.jpg","villa10.jpg",
  "villa11.jpg","villa12.jpg","villa13.jpg","villa14.jpg","villa15.jpg",

  // COMMERCIAL
  "commercial1.jpg","commercial2.jpg","commercial3.jpg","commercial4.jpg",
  "commercial5.jpg","commercial6.jpg","commercial7.jpg","commercial8.jpg",
  "commercial9.jpg","commercial10.jpg","commercial11.jpg","commercial12.jpg",
];

/* ================= AUTO GROUP ================= */

const groupImages = (keyword: string) =>
  allImages
    .filter(img => img.toLowerCase().includes(keyword))
    .map(img => ({ src: `/elevations/${img}` }));

const categories = [
  {
    title: "Duplex Elevations",
    desc: "Modern & luxury duplex front elevation designs.",
    images: groupImages("duplex"),
  },
  {
    title: "Villa Elevations",
    desc: "Premium villa elevations with elegant architecture.",
    images: groupImages("villa"),
  },
  {
    title: "Commercial Elevations",
    desc: "Smart commercial front elevation concepts.",
    images: groupImages("commercial"),
  },
];

/* ================= PAGE ================= */

export default function ElevationGalleryPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-black py-28 text-center text-white">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">
            Design Gallery
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold uppercase">
            Front Elevation Designs
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-zinc-300 leading-relaxed">
            Explore our curated collection of duplex, villa and commercial designs.
          </p>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-zinc-100">
        <div className="mx-auto max-w-7xl px-6 space-y-32">
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.title} cat={cat} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-24 text-center text-black">
        <h3 className="text-3xl font-extrabold uppercase">
          Like What You See?
        </h3>
        <p className="mt-4 text-black">
          Get a custom front elevation designed for your plot.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-black px-10 py-4 font-semibold text-white hover:bg-white hover:text-black transition"
        >
          GET CUSTOM DESIGN
        </Link>
      </section>
    </main>
  );
}

/* ================= CATEGORY BLOCK ================= */

function CategoryBlock({
  cat,
  delay,
}: {
  cat: { title: string; desc: string; images: { src: string }[] };
  delay: number;
}) {
  const INITIAL = 8;
  const STEP = 8;
  const [visible, setVisible] = useState(INITIAL);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* HEADER */}
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
          {cat.title}
        </h2>
        <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">
          {cat.desc}
        </p>
        <div className="mx-auto mt-5 h-[3px] w-12 bg-yellow-400" />
      </div>

      {/* GRID */}
      <div className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cat.images.slice(0, visible).map(img => (
          <a
            key={img.src}
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl"
            >
              <div className="relative h-[320px] w-full">
                <Image
                  src={img.src}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* BUTTONS */}
      {cat.images.length > INITIAL && (
        <div className="mt-20 flex justify-center gap-6">
          {visible < cat.images.length && (
            <button
              onClick={() => setVisible(v => Math.min(v + STEP, cat.images.length))}
              className="rounded-full border border-zinc-300 px-10 py-3 text-sm font-semibold tracking-wide hover:border-black"
            >
              SHOW MORE
            </button>
          )}

          {visible > INITIAL && (
            <button
              onClick={() => setVisible(INITIAL)}
              className="rounded-full border border-zinc-300 px-10 py-3 text-sm font-semibold tracking-wide hover:border-black"
            >
              SHOW LESS
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
}
