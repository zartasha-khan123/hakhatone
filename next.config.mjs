// /** @type {import('next').NextConfig} */

const nextConfig= {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  eslint:{
    ignoreDuringBuilds: true
  }
};

export default nextConfig