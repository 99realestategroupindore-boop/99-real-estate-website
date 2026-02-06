import { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Construction Packages | 99 Real Estate Group",
  description:
    "Transparent home construction packages by 99 Real Estate Group. Compare Standard, Premium and Luxury construction packages with detailed specifications.",
};

export default function PackagesPage() {
  return <PackagesClient />;
}