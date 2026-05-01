/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  trailingSlash: true, // 👈 fixes 404 on refresh in cPanel

  images: {
    unoptimized: true, // 👈 REQUIRED for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },

  experimental: {
    turbo: false,
  },

  output: 'export',
};



export default nextConfig;