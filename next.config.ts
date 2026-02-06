/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ⚠️ Allows production builds to succeed even if there are type errors
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
