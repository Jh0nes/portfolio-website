// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com'
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
     ]
    },
}
module.exports = nextConfig