"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ExitPopup() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      document.body.style.overflow = "hidden";
      document.body.classList.add("popup-open");
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.classList.remove("popup-open");
    };
  }, []);

  const closePopup = () => {
    setOpen(false);
    document.body.style.overflow = "";
    document.body.classList.remove("popup-open");
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/send-mail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      phone,
      service,
    }),
  });

  if (res.ok) {
    closePopup();
    alert("Thank you! Our team will contact you shortly.");
  } else {
    alert("Something went wrong. Please try again.");
  }
};

  if (!open) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 bg-black/80"
        style={{ zIndex: 2147483646 }}
      />

      {/* POPUP */}
      <div
        className="fixed inset-0 flex items-center justify-center px-4"
        style={{ zIndex: 2147483647 }}
      >
        <div className="relative w-full max-w-6xl rounded-2xl bg-white shadow-2xl md:flex">

          {/* LEFT IMAGE */}
          <div className="relative w-full md:w-1/2 p-6">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/popup-image.jpg"
                alt="99 Real Estate Group"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative w-full md:w-1/2 p-10">
            {/* CLOSE BUTTON (BIGGER) */}
            <button
              onClick={closePopup}
              className="absolute right-6 top-6 text-3xl font-light text-zinc-400 hover:text-black"
              aria-label="Close popup"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-black">
              Talk to Our Construction Expert
            </h2>

            <p className="mt-2 text-zinc-600">
              Currently serving premium construction projects{" "}
              <strong>only in Indore</strong>.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border px-4 py-4 text-black outline-none focus:border-yellow-400"
              />

              <input
                type="tel"
                required
                placeholder="+91 Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border px-4 py-4 text-black outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Service you are looking for (optional)"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-md border px-4 py-4 text-black outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-yellow-400 py-4 font-semibold text-black hover:bg-yellow-500"
              >
                Submit & Get Consultation
              </button>
            </form>

            <p className="mt-4 text-xs text-zinc-500">
              By submitting, you agree to be contacted by 99 Real Estate Group.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
