"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ================= PROJECT DATA ================= */

const PROJECTS = [
{
  slug: "mr-sharma-villa",
  name: "Mr Sharma Villa",
  type: "residential",
  cover: "/projects/mr-sharma-villa/1.jpg",
},
{
  slug: "mr-gupta-residence",
  name: "Mr Gupta Residence",
  type: "residential",
  cover: "/projects/mr-gupta-residence/1.jpg",
},
{
  slug: "mr-verma-villa",
  name: "Mr Verma Villa",
  type: "residential",
  cover: "/projects/mr-verma-villa/1.jpg",
},
{
  slug: "mr-reddy-house",
  name: "Mr Reddy House",
  type: "residential",
  cover: "/projects/mr-reddy-house/1.jpg",
},
{
  slug: "mr-patel-bungalow",
  name: "Mr Patel Bungalow",
  type: "residential",
  cover: "/projects/mr-patel-bungalow/1.jpg",
},
{
  slug: "mr-nair-residence",
  name: "Mr Nair Residence",
  type: "residential",
  cover: "/projects/mr-nair-residence/1.jpg",
},
{
  slug: "mr-singh-villa",
  name: "Mr Singh Villa",
  type: "residential",
  cover: "/projects/mr-singh-villa/1.jpg",
},
{
  slug: "mr-mehta-residence",
  name: "Mr Mehta Residence",
  type: "residential",
  cover: "/projects/mr-mehta-residence/1.jpg",
},
{
  slug: "mr-iyer-house",
  name: "Mr Iyer House",
  type: "residential",
  cover: "/projects/mr-iyer-house/1.jpg",
},
{
  slug: "mr-kapoor-villa",
  name: "Mr Kapoor Villa",
  type: "residential",
  cover: "/projects/mr-kapoor-villa/1.jpg",
},
{
  slug: "mr-choudhary-residence",
  name: "Mr Choudhary Residence",
  type: "residential",
  cover: "/projects/mr-choudhary-residence/1.jpg",
},
{
  slug: "mr-rao-bungalow",
  name: "Mr Rao Bungalow",
  type: "residential",
  cover: "/projects/mr-rao-bungalow/1.jpg",
},
{
  slug: "mr-agarwal-villa",
  name: "Mr Agarwal Villa",
  type: "residential",
  cover: "/projects/mr-agarwal-villa/1.jpg",
},
{
  slug: "mr-menon-house",
  name: "Mr Menon House",
  type: "residential",
  cover: "/projects/mr-menon-house/1.jpg",
},
{
  slug: "mr-malhotra-residence",
  name: "Mr Malhotra Residence",
  type: "residential",
  cover: "/projects/mr-malhotra-residence/1.jpg",
},
{
  slug: "mr-desai-villa",
  name: "Mr Desai Villa",
  type: "residential",
  cover: "/projects/mr-desai-villa/1.jpg",
},
{
  slug: "mr-joshi-residence",
  name: "Mr Joshi Residence",
  type: "residential",
  cover: "/projects/mr-joshi-residence/1.jpg",
},
{
  slug: "mr-thakur-villa",
  name: "Mr Thakur Villa",
  type: "residential",
  cover: "/projects/mr-thakur-villa/1.jpg",
},
{
  slug: "skyline-business-park",
  name: "Skyline Business Park",
  type: "commercial",
  cover: "/projects/skyline-business-park/1.jpg",
},
{
  slug: "agrawal-trade-center",
  name: "Agrawal Trade Center",
  type: "commercial",
  cover: "/projects/agrawal-trade-center/1.jpg",
},
{
  slug: "city-corporate-hub",
  name: "City Corporate Hub",
  type: "commercial",
  cover: "/projects/city-corporate-hub/1.jpg",
},
{
  slug: "shakti-commercial-plaza",
  name: "Shakti Commercial Plaza",
  type: "commercial",
  cover: "/projects/shakti-commercial-plaza/1.jpg",
},
{
  slug: "prime-office-square",
  name: "Prime Office Square",
  type: "commercial",
  cover: "/projects/prime-office-square/1.jpg",
},
{
  slug: "urban-retail-complex",
  name: "Urban Retail Complex",
  type: "commercial",
  cover: "/projects/urban-retail-complex/1.jpg",
},
{
  slug: "golden-tower-offices",
  name: "Golden Tower Offices",
  type: "commercial",
  cover: "/projects/golden-tower-offices/1.jpg",
},
{
  slug: "metro-business-point",
  name: "Metro Business Point",
  type: "commercial",
  cover: "/projects/metro-business-point/1.jpg",
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
            Project <span className="text-yellow-400">Gallery</span>
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
                  src={project.cover}
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
