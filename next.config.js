/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  // Note: compression and headers will need to be handled by your hosting provider
  // (e.g., AWS S3 + CloudFront, Vercel, Netlify, etc.)
  poweredByHeader: false,
};

module.exports = nextConfig;
