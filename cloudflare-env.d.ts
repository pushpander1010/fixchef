// Extend the global CloudflareEnv interface declared by @opennextjs/cloudflare
declare global {
  interface CloudflareEnv {
    DB: D1Database;
    TOGETHER_API_KEY: string;
    YOUTUBE_API_KEY: string;
  }
}

export {};
