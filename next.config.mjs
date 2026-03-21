/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.100.12"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
