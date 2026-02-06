"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ================= PROJECT DATA ================= */

const PROJECTS = [
  {
    slug: "mr-sharma-villa",
    name: "Mr Sharma Residence",
    type: "residential",
    image: "/projects/mr-sharma-villa/cover.jpg",
  },
  {
    slug: "xyz-villa",
    type: "residential",
    name: "Mr. XYZ Villa",
    cover: "/projects/xyz-villa/cover.jpg",
  },
  {
    slug: "abc-commercial",
    type: "commercial",
    name: "ABC Commercial Complex",
    cover: "/projects/abc-commercial/cover.jpg",
  },
  {
    slug: "xyz-commercial",
    name: "XYZ Business Plaza",
    type: "commercial",
    image: "/projects/commercial-2.jpg",
  },
];

/* ================= PAGE ================= */

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">(
    "all"
  );

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === filter);

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-black py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
            Our Projects
          </p>

          <h1 className="mt-4 text-5xl font-extrabold uppercase md:text-6xl">
            Project Gallery
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />

          {/* ================= FILTERS (CENTERED) ================= */}
          <div className="mt-12 flex justify-center gap-4">
            {["all", "residential", "commercial"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`rounded-md px-6 py-3 text-sm font-semibold uppercase transition
                  ${
                    filter === type
                      ? "bg-yellow-400 text-black"
                      : "border border-zinc-600 text-white hover:bg-white hover:text-black"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-center text-lg font-semibold">
                {project.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
