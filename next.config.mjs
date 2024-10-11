/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   */
  output: "export",

  /**
   * Set the base path to match the GitHub Pages repository name.
   */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Set to your GitHub repository name or the specific subdirectory
  
  /**
   * Set asset prefix for static files.
   */
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/', // Ensures assets are loaded from the correct path

  /**
   * Disable server-based image optimization for static export.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
