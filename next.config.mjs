/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "kj5frdnxrmu4bgnx.public.blob.vercel-storage.com" },
      { hostname: "s3.gameplus.ai" },
    ],
  },
  output: undefined,
};

export default nextConfig;
