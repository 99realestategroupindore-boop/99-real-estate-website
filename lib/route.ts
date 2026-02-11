import { Metadata } from "next";

const siteUrl = "https://www.99realestategroup.com";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
};

export function generateSEO({
  title = "99 Real Estate Group | Premium Construction Services",
  description = "99 Real Estate Group offers transparent construction packages, cost calculator, and premium home building services with structural warranty.",
  path = "",
}: SEOProps): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "99 Real Estate Group",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
