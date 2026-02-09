import Link from "next/link";
import Image from "next/image";
import {
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 pt-20 pb-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-4">
        {/* ================= BRAND ================= */}
        <div>
          <Image
            src="/logo.svg"
            alt="99 Real Estate Group"
            width={180}
            height={80}
            className="flex items-center justify-center mb-2 h-28 w-auto object-contain"
          />

          <p className="text-zinc-400 leading-7">
            ISO-aligned construction & real estate firm delivering residential,
            commercial and turnkey projects across India.
          </p>

          <p className="mt-3 text-sm text-zinc-500">
            Established • Trusted • Transparent
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <FooterCol
          title="Quick Links"
          items={[
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
{ label: "Designs", href: "/elevations" },
            { label: "Process", href: "/process" },
{ label: "Refer & Earn", href: "/refer-and-earn" },
{ label: "Cost Calculator", href: "/cost-calculator" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        {/* ================= SERVICES ================= */}
        <FooterCol
          title="Our Services"
          items={[
            { label: "Residential Construction", href: "/services" },
            { label: "Commercial Development", href: "/services" },
            { label: "Turnkey Solutions", href: "/services" },
            { label: "Renovation & Remodeling", href: "/services" },
            { label: "Project Management", href: "/services" },
          ]}
        />

        {/* ================= CONTACT ================= */}
        <FooterCol
          title="Contact Info"
          items={[
            {
              label: "Indore, Madhya Pradesh",
              href: "https://maps.google.com",
            },
            {
              label: "+91 9039037606",
              href: "tel:+919039037606",
            },
            {
              label: "contact@99realestategroup.com",
              href: "mailto:contactus@99realestategroup.com",
            },
          ]}
        />
      </div>
{/* ================= SOCIAL MEDIA ================= */}
<div className="mt-6 flex gap-4">

  {/* YouTube */}
  <a
    href="https://www.youtube.com/channel/UCgMxLVvToetccpsIzoqnRGQ"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-full border border-zinc-700 p-3 transition hover:bg-yellow-400"
  >
    <Youtube className="h-5 w-5 text-zinc-400 group-hover:text-black" />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61586271947051/"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-full border border-zinc-700 p-3 transition hover:bg-yellow-400"
  >
    <Facebook className="h-5 w-5 text-zinc-400 group-hover:text-black" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/99realestategroup/"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-full border border-zinc-700 p-3 transition hover:bg-yellow-400"
  >
    <Instagram className="h-5 w-5 text-zinc-400 group-hover:text-black" />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919039037606?text=Hello%2099%20Real%20Estate%20Group,%20I%20am%20interested%20in%20construction%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-full border border-zinc-700 p-3 transition hover:bg-yellow-400"
  >
    <MessageCircle className="h-5 w-5 text-zinc-400 group-hover:text-black" />
  </a>

</div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 pt-6 text-xs text-zinc-500 md:flex-row md:justify-between">
        <span>
          © {new Date().getFullYear()} 99 Real Estate Group. All rights reserved.
        </span>
        <span>Privacy Policy · Terms · Sitemap</span>
      </div>
    </footer>
  );
}

/* ================= FOOTER COLUMN ================= */

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 text-lg font-semibold tracking-wide">
        {title}
      </h4>

      <ul className="space-y-3 text-base text-zinc-400">
        {items.map((item, index) => {
          const safeHref =
            item.href && item.href.trim() !== ""
              ? item.href
              : null;

          return (
            <li key={index}>
              {safeHref ? (
                <Link
                  href={safeHref}
                  className="transition hover:text-yellow-400"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-zinc-500 cursor-not-allowed">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
