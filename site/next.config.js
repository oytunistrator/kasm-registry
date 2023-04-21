/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Oytunistrator Directory',
    description: 'Kasm Oytunistrator Directory.',
    icon: 'https://oytunistrator.github.io/kasm-registry/1.0//img/logo.svg',
    listUrl: 'https://oytunistrator.github.io/kasm-registry/1.0',
    contactUrl: 'https://github.com/oytunistrator/kasm-registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
