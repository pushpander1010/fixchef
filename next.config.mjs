/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
    ],
  },
};

if (process.env.NODE_ENV === 'development' && !process.env.NEXT_BUILD_WORKER) {
  const { initOpenNextCloudflareForDev } = await import('@opennextjs/cloudflare');
  await initOpenNextCloudflareForDev();
}

export default nextConfig;
