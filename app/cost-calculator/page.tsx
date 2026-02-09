"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ================= CONFIG ================= */

const RATES = {
  basic: 1550,
  standard: 1850,
  premium: 2150,
};

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CostCalculatorPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [area, setArea] = useState("");
  const [quality, setQuality] =
    useState<"basic" | "standard" | "premium">("standard");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const areaNumber = Number(area);
  const rate = RATES[quality];
  const totalCost = areaNumber > 0 ? areaNumber * rate : 0;

  const handleSubmit = async () => {
    if (!name || !mobile || !areaNumber) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/cost-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile,
          area: areaNumber,
          quality,
          rate,
          totalCost,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-black py-28 text-center text-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">
            Indore Construction Cost
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold uppercase">
            Cost <span className="text-yellow-400">Calculator</span>
          </h1>
          <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />
        </motion.div>
      </section>

      {/* ================= CALCULATOR ================= */}
      <section className="py-24 bg-zinc-100">
        <div className="mx-auto max-w-6xl px-6">

          {/* 🔑 LAYOUT ANIMATION CONTAINER */}
          <motion.div
            layout
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`grid gap-12 ${
              submitted ? "md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {/* ================= FORM ================= */}
            <motion.div
              layout
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className={`rounded-2xl bg-white p-10 shadow-lg mx-auto w-full ${
                submitted ? "md:mx-0" : "max-w-2xl"
              }`}
            >
              <h2 className="text-2xl font-bold uppercase">
                Enter Project Details
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-yellow-400" />

              {/* NAME */}
              <div className="mt-8">
                <label className="block text-sm font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border px-4 py-3"
                />
              </div>

              {/* MOBILE */}
              <div className="mt-6">
                <label className="block text-sm font-semibold mb-2">
                  Mobile Number *
                </label>
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full rounded-md border px-4 py-3"
                />
              </div>

              {/* AREA */}
              <div className="mt-6">
                <label className="block text-sm font-semibold mb-2">
                  Built-up Area (sq ft) *
                </label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full rounded-md border px-4 py-3"
                />
              </div>

              {/* QUALITY */}
              <div className="mt-8">
                <label className="block text-sm font-semibold mb-3">
                  Construction Quality
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {["basic", "standard", "premium"].map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q as any)}
                      className={`rounded-md border py-3 text-sm font-semibold transition ${
                        quality === q
                          ? "bg-yellow-400 text-black border-yellow-400"
                          : "hover:border-yellow-400"
                      }`}
                    >
                      {q.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* SUBMIT */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-10 w-full rounded-md bg-black py-4 font-semibold text-white hover:bg-yellow-400 hover:text-black transition"
              >
                {loading ? "Calculating..." : "CALCULATE COST"}
              </button>

              <p className="mt-4 text-center text-xs text-zinc-500">
                Serving Indore only • No spam • 100% privacy
              </p>
            </motion.div>

            {/* ================= RESULT ================= */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl bg-black p-10 text-white shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold uppercase">
                    Estimated Cost
                  </h3>
                  <div className="mt-3 h-[3px] w-12 bg-yellow-400" />

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-sm text-zinc-400">Rate per sq ft</p>
                      <p className="text-2xl font-bold text-yellow-400">
                        ₹ {rate.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">
                        Total Estimated Cost
                      </p>
                      <motion.p
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl font-extrabold"
                      >
                        ₹ {totalCost.toLocaleString()}
                      </motion.p>
                    </div>

                    <ul className="text-sm text-zinc-300 space-y-2">
                      <li>✔ Package: {quality.toUpperCase()}</li>
                      <li>✔ Built-up area: {area} sq ft</li>
                      <li>✔ Location: Indore</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-10 block rounded-md bg-yellow-400 py-4 text-center font-semibold text-black hover:bg-yellow-500 transition"
                >
                  GET DETAILED QUOTE
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}