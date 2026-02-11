"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OfferPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* ===== HERO ===== */}
      <section className="relative pb-20 pt-24">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-80"
          style={{ backgroundImage: "url('/offer-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Join the 99 Reward Program
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Invest with 99 Real Estate Group and get a chance to receive up to ₹35,00,000 in rewards.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-[#1a73e8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1558b0] transition"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Register",
                desc: "Pay ₹1,51,000 for construction or property purchase.",
              },
              {
                title: "Become One of 99",
                desc: "Only 99 members are eligible.",
              },
              {
                title: "Complete Enrollment",
                desc: "Once all 99 are registered, the draw will take place.",
              },
              {
                title: "Reward Distribution",
                desc: "1 grand prize + assured rewards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.2 }}
                className="border p-5 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-[#1a73e8] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== REWARD DETAILS ===== */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-semibold mb-6"
          >
            Grand Reward (1 Winner)
          </motion.h2>

          <p className="text-gray-800 mb-6">
            The selected participant will receive up to ₹35,00,000 total reward.
          </p>

          <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
            <li>Free construction worth ₹35,00,000</li>
            <li>Free property worth ₹35,00,000</li>
            <li>₹35,00,000 adjustment in existing project</li>
          </ul>
        </div>
      </section>

      {/* ===== ASSURED REWARDS ===== */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-semibold mb-6"
          >
            Assured Rewards (98 Members)
          </motion.h2>

          <p className="text-gray-700 mb-6">
            Each participant is guaranteed one of these:
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {["E-Bike", "LED TV", "Water Purifier"].map((reward, i) => (
              <span
                key={i}
                className="bg-gray-100 text-[#1a73e8] px-4 py-2 rounded-md font-medium"
              >
                {reward}
              </span>
            ))}
          </div>

          <p className="mt-6 text-gray-700 text-sm">
            The amount paid will be fully adjustable in future services with us.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#1a73e8] text-white py-16 text-center">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold mb-4"
        >
          Ready to Reserve Your Slot?
        </motion.h3>

        <Link
          href="/contact"
          className="inline-block bg-white text-[#1a73e8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>
      </section>

    </div>
  );
}
