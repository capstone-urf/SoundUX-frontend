/** @type {import('next').NextConfig} */
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

export default nextConfig;
