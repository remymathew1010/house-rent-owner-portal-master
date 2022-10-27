/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/users',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
