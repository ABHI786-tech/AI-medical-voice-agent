import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
  return [
    {
      source: "/proxy/:path*",
      destination: "https://api.example.com/:path*",
    },
  ];
}
};

export default nextConfig;
