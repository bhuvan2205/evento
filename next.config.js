/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bytegrad.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
