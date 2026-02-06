export async function getSiteSettings() {
  return {
    data: {
      siteName: "99 Real Estate Group",
      tagline: "Premium Construction & Real Estate",
      phone: "",
      email: "",
      address: "",
      logo: null,
    },
  };
}

export async function getProjects() {
  return { data: [] };
}

export async function getProjectBySlug() {
  return { data: null };
}