/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://131.186.17.176:8080/:path*`,
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
