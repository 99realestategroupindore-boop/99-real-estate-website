import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import ExitPopup from "@/components/ExitPopup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

/* ================= FONTS ================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ================= GLOBAL SEO ================= */

const siteUrl = "https://www.99realestategroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "99 Real Estate Group | Premium Construction Services",
    template: "%s | 99 Real Estate Group",
  },

  description:
    "99 Real Estate Group offers transparent construction packages, cost calculator, structural warranty, and premium home building services across India.",

  keywords: [
    "construction company",
    "house construction",
    "home building services",
    "construction cost calculator",
    "real estate development",
    "premium construction India",
    "construction packages",
  ],

  authors: [{ name: "99 Real Estate Group" }],
  creator: "99 Real Estate Group",
  publisher: "99 Real Estate Group",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "99 Real Estate Group | Premium Construction Services",
    description:
      "Transparent construction packages with 10-year structural warranty and smart cost calculator.",
    url: siteUrl,
    siteName: "99 Real Estate Group",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "99 Real Estate Group",
    description:
      "Premium construction services with transparent pricing and structural warranty.",
  },

  alternates: {
    canonical: siteUrl,
  },

  themeColor: "#000000",
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ================= GOOGLE ANALYTICS ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1RK8CH5TRT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1RK8CH5TRT');
          `}
        </Script>

        {/* ================= STRUCTURED DATA (HEAD) ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "99 Real Estate Group",
              url: siteUrl,
              logo: `${siteUrl}/logo.svg`,
              telephone: "+919039037606",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: "India",
              serviceType: "Construction Services",
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-20 md:pt-24">{children}</main>

        {/* FOOTER */}
        <Footer />

        {/* CHATBOT */}
        <ChatBot />

        {/* EXIT POPUP */}
        <ExitPopup />

        {/* ================= STRUCTURED DATA (BODY - YOUR ORIGINAL KEPT) ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "99 Real Estate Group",
              url: siteUrl,
              logo: `${siteUrl}/logo.svg`,
              telephone: "+919039037606",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: "India",
              serviceType: "Construction Services",
            }),
          }}
        />
      </body>
    </html>
  );
}
