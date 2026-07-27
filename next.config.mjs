/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    workerThreads: true,
    cpus: 1,
  },
};

export default nextConfig;
