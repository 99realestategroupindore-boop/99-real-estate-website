"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= DATA ================= */

/* ---------- FEATURED (4 LARGE) ---------- */
const featuredTestimonials = [
  {
    name: "Mr. Sharma",
    role: "Villa Owner, Gwalior",
    rating: 5,
    text:
      "From planning to execution, 99 Real Estate Group handled every stage of our 2400 sq.ft villa with complete professionalism. The finishing quality, material selection, and attention to detail truly exceeded our expectations. The team maintained transparency in costing and delivered the project within the committed timeline.",
    project: "Mr Sharma Villa",
  },
  {
    name: "Mr. Desai",
    role: "Residential Client, Agra",
    rating: 5,
    text:
      "Our 2300 sq.ft villa project was executed with outstanding precision. The elevation design, structural strength, and interior finishing reflect true craftsmanship. Communication throughout the project was clear and professional.",
    project: "Mr Desai Villa",
  },
  {
    name: "Agrawal Group",
    role: "Commercial Developer, Gwalior",
    rating: 5,
    text:
      "The Agrawal Trade Center was delivered exactly as per drawings and timeline. The quality of structure, facade detailing, and project coordination was impressive. Their team demonstrated strong technical expertise throughout.",
    project: "Agrawal Trade Center",
  },
  {
    name: "Skyline Enterprises",
    role: "Corporate Client, Agra",
    rating: 5,
    text:
      "Skyline Business Park required strict structural planning and execution discipline. 99 Real Estate Group delivered a modern commercial facility with precision engineering and premium finishing. Highly recommended for large-scale projects.",
    project: "Skyline Business Park",
  },
];

/* ---------- GRID TESTIMONIALS ---------- */
const testimonials = [
  {
    name: "Mr. Patel",
    role: "Bungalow Owner, Gwalior",
    text:
      "Excellent structural work and modern elevation design. Delivered exactly as committed.",
    rating: 5,
  },
  {
    name: "Mr. Nair",
    role: "Residential Client, Jhansi",
    text:
      "Very smooth construction process with clear costing and professional supervision.",
    rating: 5,
  },
  {
    name: "Mr. Singh",
    role: "Villa Owner, Agra",
    text:
      "Premium finishing and proper site management throughout the project.",
    rating: 5,
  },
  {
    name: "Metro Business Point",
    role: "Commercial Client, Gwalior",
    text:
      "Strong project coordination and timely commercial execution.",
    rating: 5,
  },
  {
    name: "Prime Office Square",
    role: "Corporate Client",
    text:
      "High-quality facade and structural detailing. Professional delivery.",
    rating: 4,
  },
  {
    name: "Urban Retail Complex",
    role: "Retail Developer, Jhansi",
    text:
      "Efficient layout planning and durable finishing standards.",
    rating: 5,
  },
];

/* ---------- CLIENTS (12) ---------- */
const clients = [
  "Sharma Family",
  "Desai Developers",
  "Agrawal Group",
  "Skyline Enterprises",
  "Patel Constructions",
  "Metro Business Point",
  "Prime Office Square",
  "Urban Retail Complex",
  "Malhotra Estates",
  "Kapoor Realty",
  "Rao Builders",
  "Golden Tower Offices",
];

/* ================= PAGE ================= */

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);
const next = () => {
  setActive((prev) =>
    prev === featuredTestimonials.length - 1 ? 0 : prev + 1
  );
};

const prev = () => {
  setActive((prev) =>
    prev === 0 ? featuredTestimonials.length - 1 : prev - 1
  );
};

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-black py-32 text-center text-white">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
            Client Feedback
          </p>
          <h1 className="mt-4 text-5xl font-extrabold uppercase md:text-6xl">
            Testimonials
          </h1>
          <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />
        </motion.div>
      </section>

      {/* ================= FEATURED TESTIMONIAL ================= */}
      <section className="py-28 flex justify-center">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl rounded-2xl bg-gradient-to-br from-black to-zinc-900 p-10 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
              {featuredTestimonials[active].name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold">
                {featuredTestimonials[active].name}
              </h3>
              <p className="text-xs text-zinc-400">
                {featuredTestimonials[active].role}
              </p>
            </div>
          </div>

          <div className="mt-4 text-yellow-400">
            {"★★★★★"}
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-300">
            “{featuredTestimonials[active].text}”
          </p>

          <p className="mt-4 text-xs uppercase tracking-widest text-yellow-400">
            Project: {featuredTestimonials[active].project}
          </p>

          {/* Slider dots */}
          <div className="mt-8 flex justify-center gap-3">
            {featuredTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full ${
                  active === i ? "bg-yellow-400" : "bg-zinc-600"
                }`}
              />
            ))}
          </div>
{/* LEFT ARROW */}
<button
  onClick={prev}
  className="absolute left-1.5 top-1/2 -translate-y-1/2 rounded-full p-3 backdrop-blur transition hover:bg-yellow-400 hover:text-black"
>
  ‹
</button>

{/* RIGHT ARROW */}
<button
  onClick={next}
  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full p-3 backdrop-blur transition hover:bg-yellow-400 hover:text-black"
>
  ›
</button>

        </motion.div>
      </section>

      {/* ================= TESTIMONIAL GRID ================= */}
      <section className="bg-zinc-50 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl bg-white p-6 shadow-lg"
            >
              <div className="mb-2 text-yellow-400">
                {"★".repeat(t.rating)}
              </div>

              <p className="text-sm text-zinc-600 leading-7">
                “{t.text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OUR CLIENTS ================= */}
      <section className="py-28">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
            Trusted By
          </p>
          <h2 className="mt-4 text-3xl font-extrabold uppercase">
            Our Clients
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-yellow-400" />
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 px-6 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c}
              className="rounded-md border border-zinc-200 px-4 py-3 text-center text-sm text-zinc-600 hover:border-black transition"
            >
              {c}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
