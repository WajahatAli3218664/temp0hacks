/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Optional, but recommended
    experimental: {
      fontLoaders: [
        {
          loader: '@next/font/google', // Enables Google Fonts usage with `next/font`
          options: { subsets: ['latin'] }, // Specify subsets for better performance
        },
      ],
    },
  };
  
  export default nextConfig;
  