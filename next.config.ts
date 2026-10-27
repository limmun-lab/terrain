import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Retired US stories. Old links (including the case study) land on Explore.
    return [
      { source: "/worker/blake", destination: "/explore", permanent: false },
      { source: "/worker/parker", destination: "/explore", permanent: false },
    ];
  },
};

export default nextConfig;
