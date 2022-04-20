/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx']
})

module.exports = nextConfig
