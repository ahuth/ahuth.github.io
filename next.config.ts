import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
