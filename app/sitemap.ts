export default function sitemap() {
  const baseUrl = "https://www.99realestategroup.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cost-calculator`,
      lastModified: new Date(),
    },
  ];
}
