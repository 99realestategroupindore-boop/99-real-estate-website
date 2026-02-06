"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

/* ================= PROJECT DATA ================= */

const PROJECTS = [
  {
    slug: "mr-sharma-villa",
    name: "Mr. Sharma",
    type: "residential",
    area: "3200 sq.ft",
    location: "Indore",
    duration: "10 Months",
    budget: "₹75 Lakhs",
    description:
      "A modern residential villa designed with premium finishes and efficient space planning.",
    images: [
      "/projects/mr-sharma-villa/1.jpg",
      "/projects/mr-sharma-villa/2.jpg",
      "/projects/mr-sharma-villa/3.jpg",
      "/projects/mr-sharma-villa/4.jpg",
    ],
  },
  {
    slug: "abc-commercial",
    name: "ABC Group",
    type: "commercial",
    area: "12000 sq.ft",
    location: "Indore",
    duration: "18 Months",
    budget: "₹3.2 Cr",
    description:
      "A commercial complex built for high footfall with modern elevation and strong structure.",
    images: [
      "/projects/abc-commercial/1.jpg",
      "/projects/abc-commercial/2.jpg",
      "/projects/abc-commercial/3.jpg",
      "/projects/abc-commercial/4.jpg",
    ],
  },
];

/* ================= PAGE ================= */

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Project not found
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(project.images[0]);

  return (
    <main className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl grid gap-16 md:grid-cols-2">

        {/* LEFT IMAGE SECTION */}
        <div>
          {/* BIG IMAGE */}
          <img
            src={activeImage}
            alt={project.name}
            className="mb-6 h-[420px] w-full rounded-2xl object-cover"
          />

          {/* THUMBNAILS */}
          <div className="grid grid-cols-4 gap-4">
            {project.images.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`h-24 cursor-pointer rounded-xl object-cover transition
                  ${
                    activeImage === img
                      ? "ring-2 ring-yellow-400"
                      : "opacity-80 hover:opacity-100"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {project.name}
          </h1>

          <ul className="space-y-2 text-sm text-zinc-700">
            <li><strong>Area:</strong> {project.area}</li>
            <li><strong>Location:</strong> {project.location}</li>
            <li><strong>Duration:</strong> {project.duration}</li>
            <li><strong>Budget:</strong> {project.budget}</li>
          </ul>

          <p className="mt-6 text-zinc-600 leading-relaxed">
            {project.description}
          </p>
        </div>

      </div>
    </main>
  );
}
