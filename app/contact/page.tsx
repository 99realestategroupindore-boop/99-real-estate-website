"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactPage() {
  /* ================= FORM STATE ================= */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /* ================= SUBMIT HANDLER ================= */

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess("Thank you! Our team will contact you shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black py-40 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-6"
        >
          <p className="text-xs tracking-[0.35em] text-zinc-400 uppercase">
            Get In Touch
          </p>
          <h1 className="mt-6 text-5xl font-extrabold uppercase md:text-6xl">
            Let’s Build <span className="text-yellow-400">Together</span>
          </h1>
          <p className="mt-6 text-zinc-300">
            Start your construction journey with a consultation
          </p>
        </motion.div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.35em] text-zinc-400 uppercase">
              Send Message
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase">
              Request a Quote
            </h2>
            <div className="mt-4 h-[3px] w-16 bg-yellow-400" />

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name *"
                  className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone *"
                  className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
                />
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option>Residential Construction</option>
                  <option>Commercial Development</option>
                  <option>Renovation</option>
                  <option>Turnkey Projects</option>
                </select>
              </div>

              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
              />

              {success && (
                <p className="font-medium text-green-600">{success}</p>
              )}
              {error && <p className="text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-black py-4 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-black disabled:opacity-60"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>

          {/* ================= MAP + WHATSAPP ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* MAP */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Indore%20Madhya%20Pradesh&output=embed"
                className="h-[320px] w-full border-0"
                loading="lazy"
              />
            </div>

            {/* WHATSAPP */}
            <div className="rounded-xl bg-gradient-to-br from-black to-zinc-900 p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold">Quick Contact</h3>
              <p className="mt-3 text-sm text-zinc-300">
                Need immediate assistance? Chat with us on WhatsApp.
              </p>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="mt-6 inline-flex items-center gap-3 rounded-md bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600 transition"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="-mt-24 relative z-10 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              title: "Visit Us",
              content:
                "99 Real Estate Group\nIndore, Madhya Pradesh",
              icon: "📍",
            },
            {
              title: "Call Us",
              content: "+91 XXXXX XXXXX",
              icon: "📞",
            },
            {
              title: "Email Us",
              content: "99realestategroupindore@gmail.com",
              icon: "✉️",
            },
            {
              title: "Working Hours",
              content:
                "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: Closed",
              icon: "⏰",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-xl bg-white p-8 text-center shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 text-xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm text-zinc-600">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}