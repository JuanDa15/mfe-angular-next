import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https'
      }
    ]
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'userListMFE',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './UserList': './WebComponents/UserListElement.ts',
          
        },
        shared: {},
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    )
    return config
  },
};

export default nextConfig;
