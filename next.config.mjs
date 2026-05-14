/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
    ],
  },
  // Redirect handling is done at the Cloudflare Worker level (wrangler.toml)
  // Do NOT use Next.js redirects for domain redirects in Cloudflare Workers
};

if (process.env.NODE_ENV === 'development' && !process.env.NEXT_BUILD_WORKER) {
  const { initOpenNextCloudflareForDev } = await import('@opennextjs/cloudflare');
  await initOpenNextCloudflareForDev();
}

export default nextConfig;
