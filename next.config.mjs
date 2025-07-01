/** @type {import(‘next’).NextConfig} */

const nextConfig = {
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "chevaldemo.xyz",
      },
      {
        protocol: "https",

        hostname: "manage.magnitudeyachts.com",
      },
    ],
  },
};

export default nextConfig;
