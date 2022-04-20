/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})

module.exports = nextConfig
