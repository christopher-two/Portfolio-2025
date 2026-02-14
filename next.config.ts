import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https'
        ,
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vluoppbaehfmhkebyygv.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-ad04204414e64e578b7a9699ec696226.r2.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev',
        port: '',
        pathname: '/projects/cetis27/**',
      },
      {
        protocol: 'https',
        hostname: '1827203a2c62ad3b7a9aaace51eb44b7.r2.cloudflarestorage.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
