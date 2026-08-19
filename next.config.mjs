/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ajyal-dev.e8demo.com"
      }
    ]
  },
  agentRules: false
};

export default nextConfig;
