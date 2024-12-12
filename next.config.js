/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: "dist",
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: "/sound-defender/",
  basePath: "/sound-defender",
  output: "export",
};

module.exports = nextConfig;
