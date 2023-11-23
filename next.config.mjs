/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    typedRoutes: true,
  },
  images: {
    unoptimized: process.env.NODE_ENV !== "production",
  },
};

export default nextConfig;
