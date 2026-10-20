import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    agentRules: false,
    images: {
        deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        qualities: [50, 75],
    },
    typescript: {
        ignoreBuildErrors: true
    },
    turbopack: {
        root: process.cwd()
    },
    transpilePackages: ["three"]
};

export default withNextIntl(nextConfig);
