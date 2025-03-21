/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chevaldemo.xyz",
      },
    ],
  },
};

export default nextConfig;
