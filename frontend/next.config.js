/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during build (warnings only)
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // CORS proxy for Flask backend
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/:path*',
        },
        {
          source: '/static/:path*',
          destination: 'http://localhost:5000/static/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig
