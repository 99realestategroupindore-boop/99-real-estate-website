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
    name: "Robert Thompson",
    role: "CEO, Thompson Enterprises",
    rating: 5,
    text:
      "Working with 99 Real Estate Group was an exceptional experience. Their attention to detail and commitment to quality exceeded our expectations. The project was delivered on time and within budget.",
    project: "Corporate Plaza",
  },
  {
    name: "Anita Sharma",
    role: "Luxury Villa Owner",
    rating: 5,
    text:
      "The entire construction journey was transparent and stress-free. Their execution quality and finishing were truly premium.",
    project: "Heritage Villa",
  },
  {
    name: "David Chen",
    role: "Real Estate Investor",
    rating: 5,
    text:
      "Professional management, accurate timelines, and top-notch material quality. I would confidently recommend them for large-scale projects.",
    project: "Commercial Complex",
  },
  {
    name: "Sarah Williams",
    role: "Retail Business Owner",
    rating: 5,
    text:
      "99 Real Estate Group delivered our project exactly as promised. Their coordination and quality control were outstanding.",
    project: "Retail Development",
  },
];

/* ---------- GRID TESTIMONIALS ---------- */
const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Property Developer",
    text:
      "Strong technical knowledge and clear communication throughout the project.",
    rating: 5,
  },
  {
    name: "Michael Anderson",
    role: "Hotel Chain Director",
    text:
      "Their execution standards are among the best we’ve experienced.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Architect",
    text:
      "A collaborative team that understands design intent and execution.",
    rating: 4,
  },
  {
    name: "Kunal Deshpande",
    role: "Office Owner",
    text:
      "Well-planned, well-managed, and delivered with precision.",
    rating: 5,
  },
  {
    name: "Ravi Mehta",
    role: "Commercial Client",
    text:
      "Excellent structural work and finishing quality.",
    rating: 4,
  },
  {
    name: "Ayesha Khan",
    role: "Residential Client",
    text:
      "Highly professional team with transparent costing.",
    rating: 5,
  },
];

/* ---------- CLIENTS (12) ---------- */
const clients = [
  "Thompson Enterprises",
  "Martinez Developments",
  "Chen Properties",
  "Williams Retail Group",
  "Anderson Hotels",
  "Rodriguez Architecture",
  "Urban Developers",
  "Skyline Properties",
  "Metro Holdings",
  "Heritage Estates",
  "Prime Retail Group",
  "Global Infra Solutions",
];

/* ================= PAGE ================= */

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);

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
