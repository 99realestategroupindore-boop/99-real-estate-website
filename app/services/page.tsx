"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-black py-32 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
            Our Services
          </p>

          <h1 className="mt-4 text-5xl font-extrabold uppercase md:text-6xl">
            Comprehensive Solutions
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />
        </motion.div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl space-y-32 px-6">

          <ServiceRow
            title="Residential Construction"
            desc="From luxury villas to modern apartments, we create living spaces that blend comfort, style, and functionality with meticulous attention to detail."
            points={[
              "Custom Home Design",
              "Luxury Villas",
              "Apartment Complexes",
              "Interior Finishing",
            ]}
            image="/servicespage/residential.jpg"
          />

          <ServiceRow
            reverse
            title="Commercial Development"
            desc="State-of-the-art commercial spaces designed to elevate your business presence, from office towers to retail complexes."
            points={[
              "Office Buildings",
              "Retail Centers",
              "Mixed-Use Developments",
              "Corporate Headquarters",
            ]}
            image="/servicespage/commercial.jpg"
          />

          <ServiceRow
            title="Turnkey Solutions"
            desc="End-to-end project delivery where we manage everything from concept to completion, ensuring a seamless experience."
            points={[
              "Design & Planning",
              "Execution & Supervision",
              "Quality Control",
              "On-Time Delivery",
            ]}
            image="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          />

          <ServiceRow
            reverse
            title="Project Management"
            desc="Professional project management ensuring timelines, budgets, and quality standards are met without compromise."
            points={[
              "Planning & Scheduling",
              "Vendor Coordination",
              "Cost Control",
              "Risk Management",
            ]}
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          />

          <ServiceRow
            title="Structural Work"
            desc="Strong foundations and frameworks built with precision engineering and high-quality materials."
            points={[
              "RCC Structures",
              "Steel Framework",
              "Foundations",
              "Load-Bearing Analysis",
            ]}
            image="/servicespage/structural.jpg"
          />

          <ServiceRow
            reverse
            title="Renovation & Remodeling"
            desc="Transforming existing spaces into modern, efficient, and beautiful environments."
            points={[
              "Home Renovation",
              "Commercial Remodeling",
              "Space Optimization",
              "Interior Upgrades",
            ]}
            image="/servicespage/renovation.jpg"
          />

        </div>
      </section>
    </main>
  );
}

/* ================= SERVICE ROW ================= */

function ServiceRow({
  title,
  desc,
  points,
  image,
  reverse,
}: {
  title: string;
  desc: string;
  points: string[];
  image: string;
  reverse?: boolean;
}) {
  const textAnim = reverse ? fadeRight : fadeLeft;
  const imageAnim = reverse ? fadeLeft : fadeRight;

  return (
    <div className="grid items-center gap-14 md:grid-cols-2">

      {/* IMAGE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageAnim}
        transition={{ duration: 0.8 }}
        className={reverse ? "md:order-1" : "md:order-2"}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative h-[380px] w-full overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnim}
        transition={{ duration: 0.8 }}
        className={reverse ? "md:order-2" : "md:order-1"}
      >
        <h2 className="text-3xl font-semibold uppercase">{title}</h2>
        <div className="mt-3 h-[3px] w-12 bg-yellow-400" />

        <p className="mt-6 text-zinc-600">{desc}</p>

        <ul className="mt-6 space-y-2 text-sm text-zinc-600">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="text-yellow-400">•</span>
              {p}
            </li>
          ))}
        </ul>

        {/* 🔥 FIXED BUTTON HOVER */}
        <Link
          href="/contact"
          className="
            mt-8 inline-block rounded-md
            bg-black px-6 py-3
            text-sm font-semibold text-white
            transition-all duration-300 ease-out
            hover:bg-yellow-400 hover:text-black
            hover:-translate-y-1 hover:shadow-lg
          "
        >
          REQUEST QUOTE
        </Link>
      </motion.div>

    </div>
  );
}
