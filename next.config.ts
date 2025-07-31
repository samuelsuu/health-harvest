module.exports = {
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
  reactStrictMode: true,
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};