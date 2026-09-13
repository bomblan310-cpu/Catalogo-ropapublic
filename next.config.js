/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'via.placeholder.com',
      'images.unsplash.com',
      'equinoxweb-psi.vercel.app',
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;
