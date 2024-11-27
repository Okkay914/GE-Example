/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',  // Changed from 'public'
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
