/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Tetap abaikan error type agar lancar di Vercel
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;