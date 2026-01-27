/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to GitHub Pages with a repo name
  // basePath: '/your-repo-name',
  trailingSlash: true,
}

module.exports = nextConfig
