/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowMiddlewareResponseBody: true,
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
