/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: 'ca-pub-6216304334889617',
  },
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
