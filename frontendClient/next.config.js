/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'https://tailbooksdb.onrender.com/:path*',
        // destination: 'http://localhost:5000/:path*',
      },
    ]
  }
}
