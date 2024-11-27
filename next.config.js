/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Add this line
  images: {
    unoptimized: true,  // Add this for static export
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
