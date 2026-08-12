/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static HTML export — host anywhere (Hostinger, Netlify, Vercel, S3…)
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
