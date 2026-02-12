"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OfferPage() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-black py-16 md:py-28 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">
            Exclusive Limited Offer
          </p>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-tight">
            99 Customers Mega <span className="text-yellow-400">Lucky Draw</span>
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-16 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-3xl text-zinc-300 leading-7">
            Join our exclusive 99-member premium offer and stand a chance
            to win rewards worth up to ₹35 Lakhs.
          </p>
        </motion.div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
              How It Works
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-yellow-400" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                step: "01",
                title: "Book With ₹1,51,000",
                desc: "Pay ₹1,51,000 towards construction, land purchase, or any real estate investment.",
              },
              {
                step: "02",
                title: "Complete 99 Members",
                desc: "Once 99 customers join the offer, lucky draw event will be conducted transparently.",
              },
              {
                step: "03",
                title: "Win Mega Rewards",
                desc: "1 Grand Winner & 98 Assured Rewards. Everyone benefits.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <span className="text-yellow-400 font-bold">
                  STEP {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold uppercase">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-zinc-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= REWARDS ================= */}
      <section className="bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
              Rewards Structure
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-yellow-400" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {/* Grand Winner */}
            <div className="rounded-2xl border border-yellow-400 p-8 shadow-md">
              <h3 className="text-2xl font-extrabold uppercase text-yellow-500">
                1 Grand Winner
              </h3>

              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                <li>✔ Free Construction worth ₹35 Lakhs</li>
                <li>✔ OR Free Property worth ₹35 Lakhs</li>
                <li>✔ OR ₹35 Lakhs credit adjustment</li>
              </ul>
            </div>

            {/* Assured Rewards */}
            <div className="rounded-2xl border p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold uppercase">
                98 Assured Rewards
              </h3>

              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                <li>✔ E-Bike</li>
                <li>✔ LED TV</li>
                <li>✔ Water Purifier</li>
                <li>✔ OR ₹1,51,000 adjusted in future project</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-extrabold uppercase">
            Transparent & Secure Process
          </h2>

          <p className="mt-6 text-zinc-600 leading-7">
            The lucky draw will be conducted only after all 99 confirmed
            participants complete their booking. The process will be
            transparent and documented.
          </p>

          <p className="mt-4 text-zinc-600 leading-7">
            Booking amount remains fully adjustable towards construction,
            property purchase, or future project.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-black py-16 md:py-24 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
          Limited to 99 Customers Only
        </h2>

        <p className="mt-4 text-zinc-300">
          Secure your position before all slots are filled.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-yellow-400 px-10 py-4 font-semibold text-black hover:bg-yellow-500 transition"
        >
          BOOK YOUR SLOT NOW
        </Link>
      </section>

    </main>
  );
}
