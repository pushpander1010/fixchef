# FixChef Deployment Guide

## Current Status

✅ **Build:** Successful (`npm run build` completes without errors)
✅ **Configuration:** Clean (no problematic redirects or middleware)
✅ **Code:** Ready for deployment (generateStaticParams properly configured)
✅ **Routes:** Fixed (explicit routes for fixchef.com and www.fixchef.com added to wrangler.toml)

## Deployment Checklist

### Step 1: Deploy to Cloudflare Workers

```bash
npm run deploy
# or
npx wrangler deploy
```

This will:
- Build the Next.js app with webpack
- Bundle it for Cloudflare Workers via `@opennextjs/cloudflare`
- Deploy to your `fixchef` worker

**Expected output:**
```
✓ Uploaded fixchef (X.XX sec)
✓ Deployed to https://fixchef.pages.dev
```

### Step 2: Set Production Secrets

After deployment, set the required API keys in Cloudflare:

```bash
# Set Together AI API key (for LLM chatbot)
wrangler secret put TOGETHER_API_KEY
# Paste your Together AI API key when prompted

# Set YouTube API key (for video search)
wrangler secret put YOUTUBE_API_KEY
# Paste your YouTube API key when prompted
```

**Alternatively**, set them via the Cloudflare dashboard:
1. Go to **Workers & Pages** → **fixchef** → **Settings** → **Variables**
2. Add `TOGETHER_API_KEY` and `YOUTUBE_API_KEY` as secrets

### Step 3: Initialize D1 Database

The D1 database binding is already configured in `wrangler.toml`:
```toml
[[d1_databases]]
binding = "DB"
database_name = "fixchef"
database_id = "03bb856b-d82a-48d9-9042-8f289528030d"
```

Initialize the schema:

```bash
wrangler d1 execute fixchef --remote --file=migrations/0001_schema.sql
```

This creates the `recipes` table with the proper schema.

### Step 4: Seed the Database with Recipes

Choose one of the seed scripts to populate the database:

**Option A: Basic recipes (5 recipes)**
```bash
wrangler d1 execute fixchef --remote --file=scripts/seed-recipes.sql
```

**Option B: Indian recipes (10+ recipes)**
```bash
wrangler d1 execute fixchef --remote --file=scripts/seed-indian-recipes.sql
```

**Option C: More recipes (additional batch)**
```bash
wrangler d1 execute fixchef --remote --file=scripts/seed-more-recipes.sql
```

**Option D: Batch 3 recipes**
```bash
wrangler d1 execute fixchef --remote --file=scripts/seed-recipes-batch3.sql
```

You can run multiple seed scripts to combine recipes:
```bash
wrangler d1 execute fixchef --remote --file=scripts/seed-recipes.sql
wrangler d1 execute fixchef --remote --file=scripts/seed-indian-recipes.sql
wrangler d1 execute fixchef --remote --file=scripts/seed-more-recipes.sql
```

### Step 5: Configure Domain Redirect (Optional)

If you want `fixchef.com` to redirect to `www.fixchef.com`:

1. Go to **Cloudflare Dashboard** → **fixchef.com** → **Rules** → **Page Rules**
2. Add a new rule:
   - **URL:** `fixchef.com/*`
   - **Action:** Forwarding URL (301 Permanent Redirect)
   - **Destination:** `https://www.fixchef.com/$1`

**Note:** Do NOT use Next.js redirects or middleware for this — Cloudflare Workers handles it better.

### Step 6: Verify Deployment

1. Visit `https://fixchef.pages.dev` (or your custom domain)
2. Check that the homepage loads with the category carousel
3. Click a category to see recipes
4. Click a recipe to verify:
   - Recipe details load correctly
   - Nutrition block displays
   - YouTube video embeds (if available)
   - Chatbot button appears
   - Ad slots are visible

## Troubleshooting

### Issue: "Page jumps to /:path* which gives 404"

**Cause:** Domain routing not configured in Cloudflare Workers.

**Solution:**
- The `wrangler.toml` now includes explicit routes for both `fixchef.com` and `www.fixchef.com`
- After deploying with `npm run deploy`, both domains will route to the worker
- If you still see 404s, verify in Cloudflare dashboard:
  1. Go to **Workers & Pages** → **fixchef** → **Triggers** → **Routes**
  2. Ensure both routes are listed:
     - `fixchef.com/*`
     - `www.fixchef.com/*`
  3. If missing, add them manually via the dashboard

### Issue: "Page refresh jumps to homepage"

**Cause:** Database is empty or recipe doesn't exist.

**Solution:**
1. Verify database is initialized: `wrangler d1 execute fixchef --remote --command="SELECT COUNT(*) FROM recipes;"`
2. Seed recipes: `wrangler d1 execute fixchef --remote --file=scripts/seed-recipes.sql`
3. Verify recipes are published: `wrangler d1 execute fixchef --remote --command="SELECT COUNT(*) FROM recipes WHERE published = 1;"`

### Issue: "Chatbot doesn't work"

**Cause:** `TOGETHER_API_KEY` not set in production.

**Solution:**
```bash
wrangler secret put TOGETHER_API_KEY
# Paste your Together AI API key
```

### Issue: "YouTube videos don't embed"

**Cause:** `YOUTUBE_API_KEY` not set, or video ID not found.

**Solution:**
1. Set the API key: `wrangler secret put YOUTUBE_API_KEY`
2. Verify video IDs in database: `wrangler d1 execute fixchef --remote --command="SELECT slug, youtube_video_id FROM recipes LIMIT 5;"`

### Issue: "AdSense ads don't show"

**Cause:** `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` not set or incorrect.

**Solution:**
- Verify in `.env.local`: `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=pub-6216304334889617`
- This is already set and will be included in the build

### Issue: "Build fails with webpack errors"

**Cause:** Turbopack is not compatible with Cloudflare Workers.

**Solution:**
- Ensure `next.config.mjs` does NOT have `turbopack` enabled
- Use `npm run build` which explicitly uses webpack: `next build --webpack`

## Local Development

To test locally before deploying:

```bash
# Install dependencies
npm install

# Set up local secrets in .dev.vars
# (Already configured with empty values)

# Initialize local D1 database
wrangler d1 execute fixchef --local --file=migrations/0001_schema.sql

# Seed local database
wrangler d1 execute fixchef --local --file=scripts/seed-recipes.sql

# Start dev server
npm run dev
# or
wrangler dev

# Visit http://localhost:8787
```

## Environment Variables Reference

| Variable | Purpose | Where to Set |
|---|---|---|
| `TOGETHER_API_KEY` | LLM chatbot (Together AI) | `wrangler secret put` or Cloudflare dashboard |
| `YOUTUBE_API_KEY` | YouTube video search | `wrangler secret put` or Cloudflare dashboard |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | AdSense publisher ID | `.env.local` (public, included in build) |

## Files Modified for Deployment

- ✅ `next.config.mjs` — Removed problematic redirects
- ✅ `wrangler.toml` — Clean configuration, D1 binding configured
- ✅ `app/recipes/[slug]/page.tsx` — Added `generateStaticParams()` for proper static generation
- ✅ `middleware.ts` — Deleted (deprecated in Next.js 15+, causes issues in Workers)

## Next Steps After Deployment

1. Monitor the worker logs: `wrangler tail`
2. Check D1 query performance: `wrangler d1 insights`
3. Set up Cloudflare Analytics to track traffic
4. Configure email notifications for errors
5. Plan content updates (add more recipes via seed scripts or API)

## Support

For issues:
1. Check worker logs: `wrangler tail`
2. Verify D1 database: `wrangler d1 execute fixchef --remote --command="SELECT COUNT(*) FROM recipes WHERE published = 1;"`
3. Test API endpoints manually
4. Review Cloudflare dashboard for errors
