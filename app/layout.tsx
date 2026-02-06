import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

/* ================= METADATA ================= */

export const metadata: Metadata = {
  title: "99 Real Estate Group",
  description: "Premium construction & real estate development",
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-20 md:pt-24">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* CHATBOT (GLOBAL) */}
        <ChatBot />

        {/* EXIT POPUP — MUST BE LAST */}
        <ExitPopup />
      </body>
    </html>
  );
}
