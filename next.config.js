/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gravatar.com',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'storage-monsternotebook-tr.mncdn.com',
      },
      {
        protocol: 'https',
        hostname: 'productimages.hepsiburada.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.akakce.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ikea.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'logowik.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn4.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'img01.huaweifile.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      }
    ],
  },
  env: {
    NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN: process.env.RAINDROP_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;