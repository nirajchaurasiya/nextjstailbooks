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
        destination: 'https://nextjstailbooks-production.up.railway.app/:path*',
        // destination: 'http://localhost:5000/:path*',
      },
    ]
  }
}
