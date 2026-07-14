/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "i.imgur.com", "fakeimg.pl"],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig