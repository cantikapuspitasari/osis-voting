/** @type {import('next').NextConfig} */  
const nextConfig = {  
  images: {  
    remotePatterns: [  
      {  
        protocol: 'https',  
        hostname: 'lh3.googleusercontent.com',  
      },  
      {  
        protocol: 'https',  
        hostname: 'ui-avatars.com',  
      },  
      {  
        protocol: 'https',  
        hostname: 'randomuser.me',  
      },  
      {  
        protocol: 'https',  
        hostname: 'drive.google.com',  
      },  
      {  
        protocol: 'https',  
        hostname: 'bhanbqlcydwfmfifehkk.supabase.co',  
      },  
    ],  
  },  
  typescript: {  
    ignoreBuildErrors: true,  
  },  
  eslint: {  
    ignoreDuringBuilds: true,  
  },  
};  
  
module.exports = nextConfig;