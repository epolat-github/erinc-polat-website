import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    agentRules: false,
    typescript: {
        ignoreBuildErrors: true
    },
    turbopack: {
        root: process.cwd()
    },
    transpilePackages: ["three"]
};

export default withNextIntl(nextConfig);
