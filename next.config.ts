import type { NextConfig } from "next";


import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
  output: "export",
  basePath: "/bonus-mottu",
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
