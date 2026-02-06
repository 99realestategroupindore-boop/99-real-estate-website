"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-white/10 bg-black md:h-24">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 text-white">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="99 Real Estate Group"
            width={150}
            height={60}
            priority
            className="h-10 w-auto md:h-14"
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden items-center gap-10 text-sm tracking-widest md:flex">
          <NavLink href="/projects" label="OUR PROJECTS" />
          <NavLink href="/services" label="OUR SERVICES" />
          <NavLink href="/packages" label="PACKAGES" />
          <NavLink href="/process" label="HOW WE WORK" />
          <NavLink href="/contact" label="CONTACT" />

          {/* ✅ FIXED MORE DROPDOWN */}
          <li className="relative group">
            <span className="cursor-pointer transition hover:text-yellow-400">
              MORE ▾
            </span>

            <div className="absolute right-0 top-full top-full pt-4 w-52 rounded-xl bg-white shadow-xl
              opacity-0 translate-y-2 pointer-events-none
              transition-all duration-300
              group-hover:opacity-100
              group-hover:translate-y-0
              group-hover:pointer-events-auto
              z-50"
            >
              <ul className="py-2 text-sm tracking-widest text-black">
                <DropdownItem href="/about" label="ABOUT US" />
<DropdownItem href="/elevations" label="OUR DESIGNS" />
<DropdownItem href="/refer-and-earn" label="REFER & EARN" />
<DropdownItem href="/cost-calculator" label="COST CALCULATOR" />
                <DropdownItem href="/testimonials" label="TESTIMONIALS" />
                <DropdownItem href="/faq" label="FAQs" />
              </ul>
            </div>
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden rounded-md border border-white px-6 py-2 text-sm font-semibold transition hover:bg-white hover:text-black md:block"
        >
          GET QUOTE
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden">
          <div className="h-20" />
          <ul className="flex h-[calc(100vh-5rem)] flex-col justify-center gap-6 px-6 text-sm tracking-widest text-white">
            <MobileLink href="/projects">OUR PROJECTS</MobileLink>
            <MobileLink href="/services">OUR SERVICES</MobileLink>
            <MobileLink href="/packages">PACKAGES</MobileLink>
            <MobileLink href="/process">HOW WE WORK</MobileLink>
            <MobileLink href="/contact">CONTACT</MobileLink>
            <MobileLink href="/about">ABOUT US</MobileLink>
<MobileLink href="/about">REFER & EARN</MobileLink>
            <MobileLink href="/testimonials">TESTIMONIALS</MobileLink>
            <MobileLink href="/faq">FAQs</MobileLink>

            <Link
              href="/contact"
              className="mt-8 rounded-md bg-yellow-400 px-6 py-4 text-center font-semibold tracking-wide text-black"
            >
              GET QUOTE
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ================= HELPERS ================= */

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`transition hover:text-yellow-400 ${
          pathname === href ? "text-yellow-400" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block px-6 py-3 transition hover:bg-yellow-400 hover:text-black"
      >
        {label}
      </Link>
    </li>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 transition hover:text-yellow-400"
      >
        {children}
      </Link>
    </li>
  );
}