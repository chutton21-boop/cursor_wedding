import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/cursor_wedding" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/cursor_wedding/" : "",
};

export default nextConfig;
