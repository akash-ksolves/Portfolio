import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  images: {
    unoptimized: true,
  },
};

// Final deployment configuration
export default nextConfig;
