/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    webpack(config) {
      return {
          ...config,
          experiments: {
          ...config.experiments,
          topLevelAwait: true,
        },
      };
    },
  };

module.exports = nextConfig;
