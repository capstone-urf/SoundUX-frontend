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
    ];
  },
};

export default withVanillaExtract(nextConfig);
