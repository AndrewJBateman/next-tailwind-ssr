/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "jsonplaceholder.typicode.com"],
  },
};

module.exports = nextConfig;
