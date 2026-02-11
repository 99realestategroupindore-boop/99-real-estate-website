"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ================= PAGE ================= */

export default function ReferEarnPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // form values (logic only – no UI change)
  const [friendName, setFriendName] = useState("");
  const [friendPhone, setFriendPhone] = useState("");
  const [city, setCity] = useState("");
  const [yourName, setYourName] = useState("");
  const [yourPhone, setYourPhone] = useState("");

  const handleSubmit = async () => {
    if (!friendName || !friendPhone || !yourName || !yourPhone) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/refer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          friendName,
          friendPhone,
          city,
          yourName,
          yourPhone,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }

    setLoading(false);
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
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-400">
            Refer & Earn
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold uppercase">
            Earn Rewards by <span className="text-yellow-400">Referring</span>
          </h1>
          <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />
          <p className="mx-auto mt-6 max-w-2xl text-zinc-300 leading-7">
            Know someone planning to build or renovate? Refer them to{" "}
            <strong>99 Real Estate Group</strong> and earn exciting rewards.
          </p>
        </motion.div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
<section className="py-24 bg-yellow-50">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADING */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-xs tracking-[0.35em] uppercase text-zinc-600">
        Simple Process
      </p>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-zinc-900">
        How It Works
      </h2>
      <div className="mx-auto mt-4 h-[3px] w-16 bg-yellow-500" />
    </motion.div>

    {/* CARDS */}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-20 grid gap-8 md:grid-cols-3"
    >
      {[
        {
          step: "01",
          title: "Refer Your Friend",
          desc: "Share details of someone planning construction or renovation.",
        },
        {
          step: "02",
          title: "We Build & Deliver",
          desc: "Our experts connect, plan and execute the project professionally.",
        },
        {
          step: "03",
          title: "You Get Rewarded",
          desc: "Earn cash rewards once the project is confirmed.",
        },
      ].map((item) => (
        <motion.div
          key={item.step}
          variants={fadeUp}
          className="relative rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
        >
          {/* CORNER ACCENTS */}
          <span className="absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l-4 border-t-4 border-yellow-500" />
          <span className="absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl border-b-4 border-r-4 border-yellow-500" />

          {/* STEP */}
          <span className="absolute right-6 top-5 text-sm font-bold text-zinc-500">
            {item.step}
          </span>

          <h3 className="text-xl font-semibold text-zinc-900">
            {item.title}
          </h3>

          <p className="mt-4 text-zinc-700 leading-7">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* ================= REFERRAL SLABS ================= */}
<section className="py-24 bg-white">
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADING */}
    <div className="text-center">
      <p className="text-xs tracking-[0.35em] uppercase text-zinc-500">
        Referral Program
      </p>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-zinc-900">
        Earn More With Every Referral
      </h2>
      <div className="mx-auto mt-4 h-[2px] w-16 bg-yellow-400" />
    </div>

    {/* CARDS */}
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "1st Referral",
          percent: "1.50%",
          desc: "Earn when your first referral confirms their project.",
highlight: true,
        },
        {
          title: "2nd Referral",
          percent: "1.75%",
          desc: "Higher rewards for your continued trust.",
highlight: true,
        },
        {
          title: "3+ Referral",
          percent: "2.00%",
          desc: "Bigger rewards as your referrals grow.",
highlight: true,
       
        },
      ].map((item) => (
        <div
          key={item.title}
          className={`rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md
            border border-yellow-300
            ${item.highlight ? "ring-1 ring-yellow-400" : ""}
          `}
        >
          {/* TITLE */}
          <p className="text-m font-semibold uppercase tracking-wide text-black-400">
            {item.title}
          </p>

          {/* PERCENT */}
          <h3 className="mt-4 text-3xl font-extrabold text-zinc-900">
            {item.percent}
            <span className="ml-1 text-base font-medium text-zinc-600">
              of Project Value
            </span>
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* FOOTNOTE */}
    <p className="mt-10 text-center text-xs text-zinc-500">
      *Referral rewards are calculated after project confirmation and agreement.
    </p>
  </div>
</section>

      {/* ================= FORM ================= */}
      <section className="bg-zinc-100 py-28">
        <div className="mx-auto max-w-7xl px-6">

          {/* HEADLINE */}
          <h2 className="mb-12 text-center text-3xl md:text-4xl font-extrabold">
            Fill Up Now & Become Our Referral Partner
          </h2>

          {/* BIG CONTAINER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl bg-white shadow-xl p-8 md:p-12"
          >
            <div className="grid gap-12 md:grid-cols-2 items-stretch">

              {/* LEFT IMAGE */}
              <div className="rounded-2xl flex items-center justify-center p-6">
                <img
                  src="/refer/refer.jpg"
                  alt="Refer and Earn"
                  className="h-full max-h-[520px] w-full object-cover rounded-xl"
                />
              </div>

              {/* RIGHT FORM */}
              <div className="flex flex-col justify-center">
                {!submitted ? (
                  <>
                    <h3 className="text-2xl font-bold uppercase">
                      Refer a Friend
                    </h3>
                    <div className="mt-3 h-[3px] w-12 bg-yellow-400" />

{/* FRIEND DETAILS */}
<div className="mt-8">
  <p className="mb-4 font-semibold">Friend’s Details</p>

  <input
    required
    className="mb-4 w-full rounded-md border border-zinc-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
    placeholder="Friend's Name *"
    onChange={(e) => setFriendName(e.target.value)}
  />

  <input
    type="tel"
    required
    inputMode="numeric"
    pattern="[6-9][0-9]{9}"
    maxLength={10}
    value={friendPhone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 10) {
        setFriendPhone(value);
      }
    }}
    placeholder="Friend's 10 Digit Mobile Number *"
    className="mb-4 w-full rounded-md border border-zinc-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
  />

  <input
    className="w-full rounded-md border border-zinc-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
    placeholder="City / Project Type (Optional)"
    onChange={(e) => setCity(e.target.value)}
  />
</div>

{/* YOUR DETAILS */}
<div className="mt-8">
  <p className="mb-4 font-semibold">Your Details</p>

  <input
    required
    className="mb-4 w-full rounded-md border border-zinc-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
    placeholder="Your Name *"
    onChange={(e) => setYourName(e.target.value)}
  />

  <input
    type="tel"
    required
    inputMode="numeric"
    pattern="[6-9][0-9]{9}"
    maxLength={10}
    value={yourPhone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 10) {
        setYourPhone(value);
      }
    }}
    placeholder="Your 10 Digit Mobile Number *"
    className="w-full rounded-md border border-zinc-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
  />
</div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="mt-8 w-full rounded-md bg-yellow-400 py-4 font-semibold hover:bg-yellow-500 transition"
                    >
                      {loading ? "Submitting..." : "SUBMIT REFERRAL"}
                    </button>

                    <p className="mt-4 text-center text-xs text-zinc-500">
                      100% data privacy • No spam • Rewards after confirmation
                    </p>
                  </>
                ) : (
                  <div className="py-20 text-center">
                    <h3 className="text-2xl font-bold">🎉 Thank You!</h3>
                    <p className="mt-4 text-zinc-600">
                      Your referral has been submitted successfully.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}