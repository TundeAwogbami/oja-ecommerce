/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

