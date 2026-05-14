# FixChef Quick Deploy (5 Minutes)

## TL;DR — Run These Commands

```bash
# 1. Deploy to Cloudflare
npm run deploy

# 2. Set API keys (paste when prompted)
wrangler secret put TOGETHER_API_KEY
wrangler secret put YOUTUBE_API_KEY

# 3. Initialize database
wrangler d1 execute fixchef --remote --file=migrations/0001_schema.sql

# 4. Seed with recipes
wrangler d1 execute fixchef --remote --file=scripts/seed-recipes.sql

# Done! Visit https://fixchef.pages.dev
```

## What Each Step Does

| Step | Command | What Happens |
|------|---------|--------------|
| 1 | `npm run deploy` | Builds & deploys to Cloudflare Workers |
| 2 | `wrangler secret put` | Sets API keys for LLM & YouTube |
| 3 | `wrangler d1 execute ... schema.sql` | Creates `recipes` table in D1 |
| 4 | `wrangler d1 execute ... seed-recipes.sql` | Adds 5 starter recipes |

## Verify It Works

```bash
# Check database has recipes
wrangler d1 execute fixchef --remote --command="SELECT COUNT(*) FROM recipes WHERE published = 1;"

# Should return: 5 (or more if you seeded multiple times)
```

## If Something Goes Wrong

| Problem | Fix |
|---------|-----|
| "Page refresh jumps to homepage" | Run step 3 & 4 above |
| "Chatbot doesn't work" | Run `wrangler secret put TOGETHER_API_KEY` |
| "YouTube videos missing" | Run `wrangler secret put YOUTUBE_API_KEY` |
| "Build fails" | Run `npm install` then `npm run build` |

## Full Details

See `DEPLOYMENT_GUIDE.md` for complete troubleshooting & configuration.
