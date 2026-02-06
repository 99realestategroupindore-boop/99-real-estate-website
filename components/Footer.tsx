import Link from "next/link";
import Image from "next/image";

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
            height={70}
            className="mb-6 h-16 w-auto object-contain"
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
              label: "+91 XXXXX XXXXX",
              href: "tel:+91XXXXXXXXXX",
            },
            {
              label: "99realestategroupindore@gmail.com",
              href: "mailto:99realestategroupindore@gmail.com",
            },
          ]}
        />
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
      <h4 className="mb-5 text-lg font-semibold tracking-wide">{title}</h4>
      <ul className="space-y-3 text-base text-zinc-400">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="transition hover:text-yellow-400"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}