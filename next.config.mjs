/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/audio/:path*',
        destination: `https://www.musicplug.co.kr/preview/:path*`,
      },
      {
        source: '/api/:path*',
        destination: `https://api-soundux.haklee.me/:path*`,
      },
    ];
  },

  reactStrictMode: false,

  images: {
    minimumCacheTTL: 60 * 60 * 24 * 14,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.musicplug.co.kr',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
