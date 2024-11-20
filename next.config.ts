import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'p4n42fpr-3000.euw.devtunnels.ms'
      ]
    }
  }
};

export default nextConfig;
