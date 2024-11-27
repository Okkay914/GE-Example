/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'public', // Add this line
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
