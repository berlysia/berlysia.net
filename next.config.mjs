import { resolve } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  turbopack: {
    root: resolve(import.meta.dirname),
  },
  typedRoutes: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
