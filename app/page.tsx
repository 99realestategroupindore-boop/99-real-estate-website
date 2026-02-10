"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import {
  ShieldCheck,
  MapPin,
  Star,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  PencilRuler,
  HardHat,
  Clock,
  UserCheck,
  Building2,
  Home as HomeIcon,
} from "lucide-react";

export default function Home() {
  /* ================= FORM STATE ================= */

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          page: "Home Hero Form",
        }),
      });

      if (res.ok) {
        alert("Thank you! Our team will contact you shortly.");
        setFormData({ name: "", phone: "", service: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    }

    setLoading(false);
  };

  /* ================= PAGE ================= */

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-28"
        style={{
          backgroundImage: "url('/hero/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <p className="tracking-[0.3em] text-sm text-zinc-300">
              PREMIUM CONSTRUCTION
            </p>

            <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
              Build Your <br />
              <span className="text-yellow-400">Dream Home</span>
            </h1>

            <p className="mt-6 max-w-lg text-zinc-300">
              Transparent pricing, quality execution, and on-time delivery
              for modern homes.
            </p>

            <Link
              href="/projects"
              className="group mt-10 inline-flex items-center gap-3 rounded-md border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              View Projects
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-white p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold">Get Free Consultation</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Premium construction services
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-3"
                placeholder="Your Name"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-3"
                placeholder="Phone Number"
              />

              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-3"
              >
                <option value="">Select Service</option>
                <option>Home Construction</option>
                <option>Villa Construction</option>
                <option>Renovation</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-yellow-400 py-3 font-semibold hover:bg-yellow-500 transition"
              >
                {loading ? "Sending..." : "Request Call Back"}
              </button>
            </form>

            <p className="mt-3 text-xs text-zinc-500">
              * Fill form to get more information
            </p>
          </motion.div>
        </div>
      </section>

{/* ================= PROJECT SHOWCASE ================= */}

<section className="bg-zinc-100 py-20 text-black">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <div className="mb-16 text-center">
      <p className="text-xs tracking-[0.3em] text-zinc-400">
        OUR PROJECTS
      </p>
      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Crafted Spaces. Proven Excellence.
      </h2>
      <div className="mx-auto mt-6 h-1 w-16 bg-yellow-400" />
    </div>

    {/* SLIDER */}
    <ProjectGallery />

  </div>
</section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.3em] text-zinc-500">WHAT WE DO</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Our Services</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-yellow-400" />
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <ServiceImageCard title="Residential Construction" image="/services/residential.jpg" />
            <ServiceImageCard title="Commercial Construction" image="/services/commercial.jpg" />
            <ServiceImageCard title="Turnkey Projects" image="/services/turnkey.jpg" />
            <ServiceImageCard title="Structural Work" image="/services/structural.jpg" />
          </div>
        </div>
      </section>

{/* ================= CONSTRUCTION JOURNEY (PREMIUM) ================= */}
<section className="bg-zinc-100 py-10">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <div className="mb-24 text-center">
      <p className="text-xs tracking-[0.3em] text-zinc-500">
        OUR PROCESS
      </p>
      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Your Construction Journey with Us
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-zinc-600 leading-relaxed">
        A transparent, step-by-step process designed to give you complete
        clarity, control, and confidence throughout your construction journey.
      </p>
      <div className="mx-auto mt-8 h-1 w-16 bg-yellow-400" />
    </div>

    {/* FLOW WRAPPER */}
    <div className="relative">

      {/* STEPS */}
      <div className="grid gap-12 md:grid-cols-4">

        <JourneyCard
          step="01"
          title="Share Your Requirements"
          desc="We understand your vision, budget, and expectations in detail."
          qc="Requirement validation & feasibility check"
          media="/process/step-1.mp4"
          delay={0}
        />

        <JourneyCard
          step="02"
          title="Design & Cost Approval"
          desc="Detailed drawings and transparent pricing with no hidden costs."
          qc="Design review & budget freeze"
          media="/process/step-2.mp4"
          delay={0.15}
        />

        <JourneyCard
          step="03"
          title="Construction with QC"
          desc="Execution begins with strict quality checks at every stage."
          qc="Material & workmanship inspections"
          media="/process/step-3.mp4"
          delay={0.3}
        />

        <JourneyCard
          step="04"
          title="On-Time Handover"
          desc="Your home is delivered as promised, ready to move in."
          qc="Final quality audit & handover checklist"
          media="/process/step-4.mp4"
          delay={0.45}
        />

      </div>
    </div>
  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}
<section className="bg-white py-24 overflow-hidden">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <div className="mb-20 text-center">
      <p className="text-xs tracking-[0.3em] text-zinc-500">WHY CHOOSE US</p>
      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Built on Trust. Delivered with Precision.
      </h2>
      <div className="mx-auto mt-6 h-1 w-16 bg-yellow-400" />
    </div>

    {/* CONTENT GRID */}
    <div className="grid items-center gap-16 md:grid-cols-3">

      {/* LEFT POINTS */}
      <div className="space-y-8">
        <TrustRow
          icon={CheckCircle2}
          text="Transparent Pricing"
          direction="left"
          delay={0.1}
        />
        <TrustRow
          icon={UserCheck}
          text="Dedicated Site Engineer"
          direction="left"
          delay={0.2}
        />
        <TrustRow
          icon={Building2}
          text="Premium Material Standards"
          direction="left"
          delay={0.3}
        />
      </div>

      {/* CENTER VIDEO */}
      <div className="flex justify-center">
        <TrustVideo />
      </div>

      {/* RIGHT POINTS */}
      <div className="space-y-8">
        <TrustRow
          icon={ShieldCheck}
          text="Strict Quality Control"
          direction="right"
          delay={0.4}
        />
        <TrustRow
          icon={Clock}
          text="On-Time Delivery Focus"
          direction="right"
          delay={0.5}
        />
        <TrustRow
          icon={MapPin}
          text="Strong Expertise"
          direction="right"
          delay={0.6}
        />
      </div>

    </div>
  </div>
</section>

{/* ================= DESIGN SHOWCASE ================= */}
<section className="bg-zinc-100 py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <div className="mb-16 text-center">
      <p className="text-xs tracking-[0.3em] text-zinc-500">
        OUR DESIGNS
      </p>
      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Design Inspirations
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 bg-yellow-400" />
    </div>

    <DesignCarousel />

  </div>
</section>

{/* ================= HOME PACKAGES PREVIEW ================= */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <div className="mb-16 text-center">
      <p className="text-xs tracking-[0.3em] text-zinc-500">
        TRANSPARENT PRICING
      </p>
      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Construction Packages
      </h2>
      <div className="mx-auto mt-5 h-1 w-16 bg-yellow-400" />
    </div>

    {/* PACKAGE CARDS */}
    <div className="grid gap-8 md:grid-cols-3">

      {/* STANDARD */}
      <PackageCard
        title="Standard"
        price="₹1550"
        features={[
          "Core Construction",
          "Basic Materials",
          "Standard Finishes",
          "Essential Quality Checks",
        ]}
      />

      {/* PREMIUM (HIGHLIGHTED) */}
      <PackageCard
        title="Premium"
        price="₹1850"
        featured
        features={[
          "Premium Materials",
          "Better Elevation Design",
          "Enhanced Quality Control",
          "Most Chosen Package",
        ]}
      />

      {/* LUXURY */}
      <PackageCard
        title="Luxury"
        price="₹2150"
        features={[
          "High-End Materials",
          "Custom Design Touches",
          "Luxury Finishes",
          "Maximum Quality Assurance",
        ]}
      />

    </div>

    {/* CTA */}
    <div className="mt-12 text-center flex gap-6 flex justify-center">
      <Link
        href="/packages"
        className="inline-flex items-left gap-2 rounded-md bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
      >
        View Full Specifications →
      </Link>

      <Link
        href="/pdf/construction-packages.pdf"
        className="inline-flex items-right gap-2 rounded-md bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
      >
        View Packages PDF →
      </Link>
    </div>


  </div>
</section>

{/* ================= MINI COST CALCULATOR (VIDEO BG) ================= */}
<section className="relative overflow-hidden py-28">

  {/* BACKGROUND VIDEO */}
  <video
    className="absolute inset-0 h-full w-full object-cover"
    src="/videos/cost-calculator-bg.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-16 md:grid-cols-2">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white"
      >
        <p className="text-xs tracking-[0.3em] text-zinc-300">
          COST CALCULATOR
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Estimate Your <span className="text-yellow-400">Construction Cost</span>
        </h2>

        <p className="mt-6 max-w-lg text-zinc-300 leading-relaxed">
          Get a transparent construction estimate based on your built-up area
          and selected package.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-zinc-200">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            Package-wise pricing
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            Local Construction Rates
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            No hidden costs
          </li>
        </ul>
      </motion.div>

      {/* RIGHT MINI CALCULATOR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white p-8 shadow-2xl"
      >
        <MiniCalculator />
      </motion.div>

    </div>
  </div>
</section>

{/* ================= REFER & EARN ================= */}
<section className="bg-zinc-100 py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <div className="mb-16 text-center">
      <p className="text-xs tracking-[0.3em] text-zinc-500">
        REFER & EARN
      </p>
      <h2 className="mt-4 text-4xl font-bold md:text-5xl text-black">
        Earn Rewards by Referring Friends
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
        Know someone planning construction? Refer them to us and get
        rewarded when their project begins.
      </p>
      <div className="mx-auto mt-6 h-1 w-16 bg-yellow-400" />
    </div>

    {/* CONTENT */}
    <div className="grid gap-10 md:grid-cols-3">

      {/* STEP 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white p-8 text-center shadow-md"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black">
          1
        </div>
        <h3 className="text-lg font-semibold">Refer Your Friend</h3>
        <p className="mt-3 text-sm text-zinc-600">
          Share your friend’s details who is planning construction.
        </p>
      </motion.div>

      {/* STEP 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white p-8 text-center shadow-md"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black">
          2
        </div>
        <h3 className="text-lg font-semibold">We Build the Project</h3>
        <p className="mt-3 text-sm text-zinc-600">
          Our team connects, plans, and starts construction with full transparency.
        </p>
      </motion.div>

      {/* STEP 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white p-8 text-center shadow-md"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black">
          3
        </div>
        <h3 className="text-lg font-semibold">You Get Rewarded</h3>
        <p className="mt-3 text-sm text-zinc-600">
          Earn exciting rewards once the project reaches the confirmed stage.
        </p>
      </motion.div>

    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <Link
        href="/refer-and-earn"
        className="inline-flex items-center justify-center rounded-md bg-black px-10 py-4 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
      >
        Refer & Earn Now →
      </Link>

      <p className="mt-4 text-xs text-zinc-500">
        * Term & Conditions Applied
      </p>
    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-32 text-center text-black">
        <h2 className="text-4xl font-bold md:text-5xl">
          Ready to Build with Confidence?
        </h2>
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-md bg-yellow-400 px-10 py-4 font-semibold text-black hover:bg-black hover:text-white transition"
        >
          Start Your Project
        </Link>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

type TrustItemProps = {
  icon: LucideIcon;
  label: string;
};

const TrustItem = ({ icon: Icon, label }: TrustItemProps) => (
  <div className="group rounded-xl bg-zinc-900 p-6 text-center text-yellow-400 transition hover:bg-yellow-400 hover:text-black">
    <Icon className="mx-auto mb-3 h-8 w-8 text-yellow-400 group-hover:text-black" />
    <p className="text-sm font-semibold">{label}</p>
  </div>
);

/* ================= SERVICE IMAGE CARD ================= */

type ServiceImageCardProps = {
  title: string;
  image: string;
};

const ServiceImageCard = ({ title, image }: ServiceImageCardProps) => (
  <Link
    href="/services"
    className="group relative h-[360px] overflow-hidden rounded-2xl shadow-lg"
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    />

    <div className="absolute inset-0 bg-black/50 transition group-hover:bg-black/60" />

    <div className="relative z-10 flex h-full items-end p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>

    <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
  </Link>
);

/* ================= ARROW ================= */

const ArrowLine = () => (
  <span className="hidden md:block h-[2px] w-8 bg-zinc-300 shrink-0" />
);

/* ================= TRUST ROW ================= */

type TrustRowProps = {
  icon: LucideIcon;
  text: string;
  direction: "left" | "right";
  delay?: number;
};

export const TrustRow = ({
  icon: Icon,
  text,
  direction,
  delay = 0,
}: TrustRowProps) => {
  const isLeft = direction === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`flex items-center gap-4 ${
        isLeft ? "justify-end text-right" : "justify-start text-left"
      }`}
    >
      {!isLeft && <ArrowLine />}

      <div className="flex max-w-[260px] items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-md border border-zinc-100">
        <Icon className="h-5 w-5 text-yellow-400 shrink-0" />
        <span className="text-sm font-medium text-zinc-800 leading-snug">
          {text}
        </span>
      </div>

      {isLeft && <ArrowLine />}
    </motion.div>
  );
};

/* ================= CENTER VIDEO ================= */

export const TrustVideo = () => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-full shadow-2xl"
  >
    <video
      src="/why-choose-us/trust-the-process.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
    />
  </motion.div>
);

/* ================= SLIDER ================= */

const images = [
  "/designs/design-1.jpg",
  "/designs/design-2.jpg",
  "/designs/design-3.jpg",
  "/designs/design-4.jpg",
  "/designs/design-5.jpg",
];

export function DesignCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-6xl">

      {/* IMAGES */}
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden">

        {images.map((img, i) => {
          const position =
            i === index
              ? "center"
              : i === (index - 1 + images.length) % images.length
              ? "left"
              : i === (index + 1) % images.length
              ? "right"
              : "hidden";

          return (
            <AnimatePresence key={i}>
              {position !== "hidden" && (
                <motion.img
                  src={img}
                  alt=""
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                    x: position === "left" ? -200 : 200,
                  }}
                  animate={{
                    scale: position === "center" ? 1 : 0.85,
                    opacity: 1,
                    x:
                      position === "center"
                        ? 0
                        : position === "left"
                        ? -220
                        : 220,
                    zIndex: position === "center" ? 10 : 5,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute rounded-2xl object-cover shadow-2xl ${
                    position !== "center" ? "blur-[1px]" : ""
                  }`}
                  style={{
                    width: position === "center" ? 420 : 320,
                    height: position === "center" ? 420 : 320,
                  }}
                />
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-zinc-100"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-zinc-100"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-yellow-400" : "bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

{/* ================= PACKAGE ================= */}

type PackageCardProps = {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
};

const PackageCard = ({
  title,
  price,
  features,
  featured = false,
}: PackageCardProps) => {
  return (
    <div
      className={`relative rounded-2xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
        featured
          ? "border-yellow-400 shadow-lg scale-[1.03]"
          : "border-zinc-200"
      }`}
    >
      {/* FEATURED BADGE */}
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-black shadow">
          Most Chosen
        </span>
      )}

      {/* TITLE */}
      <h3 className="text-xl font-bold">{title}</h3>

      {/* PRICE */}
      <div className="mt-4 flex items-end gap-1">
        <span className="text-3xl font-extrabold">{price}</span>
        <span className="text-sm text-zinc-500">/ sq.ft</span>
      </div>

      {/* FEATURES */}
      <ul className="mt-6 space-y-3">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-zinc-700">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            {item}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <Link
        href="/packages"
        className={`mt-8 block rounded-md px-5 py-3 text-center text-sm font-semibold transition ${
          featured
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-zinc-900 text-white hover:bg-black"
        }`}
      >
        View Details
      </Link>
    </div>
  );
};

/* ================= MAIN SECTION ================= */

export function ProjectSection() {
  return (
    <section className="bg-zinc-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-zinc-500">
            OUR PROJECTS
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl text-black">
            Crafted Spaces. Proven Excellence.
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 bg-yellow-400" />
        </div>

        <ProjectGallery />

      </div>
    </section>
  );
}

/* ================= PROJECT DATA ================= */

type GalleryProject = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 1,
    title: "Modern Courtyard Villa",
    description:
      "A warm, welcoming home that wraps around a peaceful courtyard—perfect for natural light, fresh air, and chill vibes.",
    image: "/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Luxury Duplex",
    description:
      "Clean lines, premium materials, and a balanced layout designed for modern living.",
    image: "/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Contemporary Bungalow",
    description:
      "A seamless blend of elegance and functionality with open spaces and refined finishes.",
    image: "/projects/project-3.jpg",
  },
];

/* ================= PROJECT EDITORIAL ================= */

function ProjectGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % GALLERY_PROJECTS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % GALLERY_PROJECTS.length);

  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + GALLERY_PROJECTS.length) % GALLERY_PROJECTS.length
    );

  return (
    <div className="relative">

      {/* SLIDER */}
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden">

        {GALLERY_PROJECTS.map((project, i) => {
          const position =
            i === index
              ? "center"
              : i === (index - 1 + GALLERY_PROJECTS.length) % GALLERY_PROJECTS.length
              ? "left"
              : i === (index + 1) % GALLERY_PROJECTS.length
              ? "right"
              : "hidden";

          if (position === "hidden") return null;

          return (
            <motion.img
              key={project.id}
              src={project.image}
              alt={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: position === "center" ? 1 : 0.85,
                x:
                  position === "center"
                    ? 0
                    : position === "left"
                    ? -260
                    : 260,
                zIndex: position === "center" ? 10 : 5,
              }}
              transition={{ duration: 0.6 }}
              className="absolute rounded-2xl object-cover shadow-xl"
              style={{
                width: position === "center" ? 720 : 360,
                height: position === "center" ? 420 : 360,
              }}
            />
          );
        })}
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-zinc-100"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-zinc-100"
      >
        <ChevronRight />
      </button>

      {/* TEXT */}
      <div className="mt-10 max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-black">
          {GALLERY_PROJECTS[index].title}
        </h3>
        <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
          {GALLERY_PROJECTS[index].description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-md border border-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white transition"
        >
          Explore more projects
        </Link>
      </div>
    </div>
  );
}

/* ================= CALCULATOR ================= */

function MiniCalculator() {
  const [area, setArea] = useState("");
  const [packageType, setPackageType] = useState("Premium");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `/cost-calculator?area=${area}&package=${packageType}`;
      }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-black">
        Quick Cost Estimate
      </h3>

      {/* AREA INPUT */}
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Built-up Area (sq.ft)
        </label>
        <input
          type="number"
          required
          placeholder="e.g. 2000"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full rounded-md border px-4 py-3 focus:border-yellow-400 focus:outline-none"
        />
      </div>

      {/* PACKAGE SELECT */}
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Select Package
        </label>
        <select
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          className="w-full rounded-md border px-4 py-3 focus:border-yellow-400 focus:outline-none"
        >
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full rounded-md bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-500"
      >
        Get Estimate →
      </button>

      <p className="text-xs text-zinc-500 text-center">
        * Redirects to detailed calculator
      </p>
    </form>
  );
}

/* ================= JOURNEY CARD ================= */

type JourneyCardProps = {
  step: string;
  title: string;
  desc: string;
  qc: string;
  media: string;
  delay: number;
};

const JourneyCard = ({
  step,
  title,
  desc,
  qc,
  media,
  delay,
}: JourneyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
  >
    {/* STEP BADGE */}
    <div className="absolute -top-4 -left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black shadow-md">
      {step}
    </div>

    {/* MEDIA */}
    <div className="relative h-48 overflow-hidden rounded-t-2xl bg-zinc-100">
      {media.endsWith(".mp4") ? (
        <video
          src={media}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${media})` }}
        />
      )}
    </div>

    {/* CONTENT */}
    <div className="p-6 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-4 text-sm leading-relaxed text-zinc-600">{desc}</p>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs shadow-sm">
        <ShieldCheck className="h-4 w-4 text-yellow-400" />
        <span className="text-zinc-700">{qc}</span>
      </div>
    </div>
  </motion.div>
);
