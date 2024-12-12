import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["@lobehub/tts"],
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
                port: "",
                pathname: "/**",
            },
        ],
    },
    env: {
        APP_ENV: process.env.APP_ENV,
        APP_URL: process.env.APP_URL,
        APP_DOMAIN: process.env.APP_DOMAIN,
        SERVER_URL: process.env.SERVER_URL,
    },
};

export default nextConfig;
