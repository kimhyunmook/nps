import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  webpack(config) {
    config.cache = false;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // SVG를 React 컴포넌트로 변환
    });
    return config;
  },
};

export default nextConfig;
