/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
      // Add more domains as needed
    ],
  },

   experimental: {
    turbo: false
  },
};

export default nextConfig;