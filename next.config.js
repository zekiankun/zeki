/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  env: {
    NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN: process.env.RAINDROP_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;