/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ahmedragab-div.vercel.app",
        pathname: "/images/projects/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/w40/**",
      },
    ],
  },

  experimental: {
    workerThreads: true,
    cpus: 1,
  },
};

export default nextConfig;
