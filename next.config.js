
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Let Next.js handle TypeScript
  typescript: {
    // !! WARN !!
    // This setting allows production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
