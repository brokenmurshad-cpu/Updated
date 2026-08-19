/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
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

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.husnainportfolio.online" }],
        destination: "https://husnainportfolio.online/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "updated-khaki.vercel.app" }],
        destination: "https://husnainportfolio.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
