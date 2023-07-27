/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname:[ 'images.unsplash.com ',"hydeparkwinterwonderland.com",'wembleypark.com' ],
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  images: {
    domains: [
      "images.unsplash.com",
      "hydeparkwinterwonderland.com",
      "wembleypark.com",
      "images.pexels.com"
    ],
  },
};

module.exports = nextConfig;
