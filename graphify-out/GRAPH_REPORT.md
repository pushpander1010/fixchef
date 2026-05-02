# Graph Report - fixchef  (2026-04-19)

## Corpus Check
- Corpus is ~38,542 words - fits in a single context window. You may not need a graph.

## Summary
- 91 nodes · 62 edges · 45 communities detected
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Database Layer (D1 Queries)|Database Layer (D1 Queries)]]
- [[_COMMUNITY_SEO & Recipe Metadata|SEO & Recipe Metadata]]
- [[_COMMUNITY_AI Chatbot & YouTube API|AI Chatbot & YouTube API]]
- [[_COMMUNITY_Misc Utilities A|Misc Utilities A]]
- [[_COMMUNITY_Misc Utilities B|Misc Utilities B]]
- [[_COMMUNITY_Misc Utilities C|Misc Utilities C]]
- [[_COMMUNITY_Chat Message Handling|Chat Message Handling]]
- [[_COMMUNITY_Misc Utilities D|Misc Utilities D]]
- [[_COMMUNITY_App Icon|App Icon]]
- [[_COMMUNITY_Root Layout|Root Layout]]
- [[_COMMUNITY_Robots & SEO|Robots & SEO]]
- [[_COMMUNITY_Category API Route|Category API Route]]
- [[_COMMUNITY_Category Carousel|Category Carousel]]
- [[_COMMUNITY_Pagination|Pagination]]
- [[_COMMUNITY_Recipe Card|Recipe Card]]
- [[_COMMUNITY_Tips Section|Tips Section]]
- [[_COMMUNITY_Recipe Validation|Recipe Validation]]
- [[_COMMUNITY_YouTube Embed Tests|YouTube Embed Tests]]
- [[_COMMUNITY_Deployment Stack|Deployment Stack]]
- [[_COMMUNITY_AdSense Integration|AdSense Integration]]
- [[_COMMUNITY_Cloudflare Env Types|Cloudflare Env Types]]
- [[_COMMUNITY_Next Env Types|Next Env Types]]
- [[_COMMUNITY_Next Config|Next Config]]
- [[_COMMUNITY_OpenNext Config|OpenNext Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_Vitest Config|Vitest Config]]
- [[_COMMUNITY_About Page|About Page]]
- [[_COMMUNITY_Contact Page|Contact Page]]
- [[_COMMUNITY_Graph Page|Graph Page]]
- [[_COMMUNITY_Privacy Policy Page|Privacy Policy Page]]
- [[_COMMUNITY_Terms Page|Terms Page]]
- [[_COMMUNITY_Breadcrumb|Breadcrumb]]
- [[_COMMUNITY_Category Section|Category Section]]
- [[_COMMUNITY_Ingredients List|Ingredients List]]
- [[_COMMUNITY_Nutrition Block|Nutrition Block]]
- [[_COMMUNITY_Recipe Hero|Recipe Hero]]
- [[_COMMUNITY_Step Guide|Step Guide]]
- [[_COMMUNITY_YouTube Embed|YouTube Embed]]
- [[_COMMUNITY_SEO Property Tests|SEO Property Tests]]
- [[_COMMUNITY_Recipe Types|Recipe Types]]
- [[_COMMUNITY_Validate Property Tests|Validate Property Tests]]
- [[_COMMUNITY_Seed Recipes Batch 1|Seed Recipes Batch 1]]
- [[_COMMUNITY_Seed Recipes Batch 3|Seed Recipes Batch 3]]
- [[_COMMUNITY_Seed Recipes Batch 2|Seed Recipes Batch 2]]

## God Nodes (most connected - your core abstractions)
1. `POST()` - 7 edges
2. `assertDb()` - 7 edges
3. `getRecipeBySlug()` - 6 edges
4. `generateMetadata()` - 5 edges
5. `RecipePage()` - 3 edges
6. `getAllPublishedSlugs()` - 3 edges
7. `insertRecipe()` - 3 edges
8. `sitemap()` - 2 edges
9. `GENERATE_PROMPT()` - 2 edges
10. `fetchYouTubeVideoId()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `POST()` --calls--> `getRecipeBySlug()`  [INFERRED]
  fixchef\app\api\recipes\publish\route.ts → fixchef\lib\db.ts
- `POST()` --calls--> `insertRecipe()`  [INFERRED]
  fixchef\app\api\recipes\publish\route.ts → fixchef\lib\db.ts
- `generateMetadata()` --calls--> `generateCategoryMetadata()`  [INFERRED]
  fixchef\app\recipes\[slug]\page.tsx → fixchef\lib\seo.ts
- `generateMetadata()` --calls--> `getRecipeBySlug()`  [INFERRED]
  fixchef\app\recipes\[slug]\page.tsx → fixchef\lib\db.ts
- `generateMetadata()` --calls--> `generateRecipeMetadata()`  [INFERRED]
  fixchef\app\recipes\[slug]\page.tsx → fixchef\lib\seo.ts

## Communities

### Community 0 - "Database Layer (D1 Queries)"
Cohesion: 0.31
Nodes (9): assertDb(), getAllCategories(), getAllPublishedSlugs(), getRecipeBySlug(), getRecipeCountByCategory(), getRecipesByCategory(), insertRecipe(), rowToRecord() (+1 more)

### Community 1 - "SEO & Recipe Metadata"
Cohesion: 0.32
Nodes (5): generateMetadata(), RecipePage(), generateCategoryMetadata(), generateRecipeJsonLd(), generateRecipeMetadata()

### Community 2 - "AI Chatbot & YouTube API"
Cohesion: 0.47
Nodes (3): fetchYouTubeVideoId(), GENERATE_PROMPT(), POST()

### Community 3 - "Misc Utilities A"
Cohesion: 0.5
Nodes (0): 

### Community 4 - "Misc Utilities B"
Cohesion: 0.5
Nodes (0): 

### Community 5 - "Misc Utilities C"
Cohesion: 0.67
Nodes (0): 

### Community 6 - "Chat Message Handling"
Cohesion: 1.0
Nodes (2): handleKeyDown(), sendMessage()

### Community 7 - "Misc Utilities D"
Cohesion: 0.67
Nodes (0): 

### Community 8 - "App Icon"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Root Layout"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Robots & SEO"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Category API Route"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Category Carousel"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Pagination"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Recipe Card"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Tips Section"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Recipe Validation"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "YouTube Embed Tests"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Deployment Stack"
Cohesion: 1.0
Nodes (2): Next.js Framework, Vercel Deployment

### Community 19 - "AdSense Integration"
Cohesion: 1.0
Nodes (2): Google AdSense Publisher, Google Ads Network

### Community 20 - "Cloudflare Env Types"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Next Env Types"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Next Config"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "OpenNext Config"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Vitest Config"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "About Page"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Contact Page"
Cohesion: 1.0
Nodes (0): 

### Community 29 - "Graph Page"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Privacy Policy Page"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Terms Page"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Breadcrumb"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "Category Section"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Ingredients List"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Nutrition Block"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Recipe Hero"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "Step Guide"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "YouTube Embed"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "SEO Property Tests"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "Recipe Types"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Validate Property Tests"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Seed Recipes Batch 1"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Seed Recipes Batch 3"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "Seed Recipes Batch 2"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **4 isolated node(s):** `Next.js Framework`, `Vercel Deployment`, `Google AdSense Publisher`, `Google Ads Network`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `App Icon`** (2 nodes): `icon.tsx`, `Icon()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Root Layout`** (2 nodes): `layout.tsx`, `RootLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Robots & SEO`** (2 nodes): `robots.ts`, `robots()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Category API Route`** (2 nodes): `route.ts`, `GET()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Category Carousel`** (2 nodes): `CategoryCarousel()`, `CategoryCarousel.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Pagination`** (2 nodes): `Pagination.tsx`, `getHref()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Recipe Card`** (2 nodes): `RecipeCard.tsx`, `RecipeCard()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tips Section`** (2 nodes): `TipsSection.tsx`, `TipsSection()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Recipe Validation`** (2 nodes): `validate.ts`, `validateRecipe()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `YouTube Embed Tests`** (2 nodes): `youtube-embed.property.test.ts`, `render()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Deployment Stack`** (2 nodes): `Next.js Framework`, `Vercel Deployment`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `AdSense Integration`** (2 nodes): `Google AdSense Publisher`, `Google Ads Network`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Cloudflare Env Types`** (1 nodes): `cloudflare-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Env Types`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Config`** (1 nodes): `next.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `OpenNext Config`** (1 nodes): `open-next.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vitest Config`** (1 nodes): `vitest.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `About Page`** (1 nodes): `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Contact Page`** (1 nodes): `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Graph Page`** (1 nodes): `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Privacy Policy Page`** (1 nodes): `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Terms Page`** (1 nodes): `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Breadcrumb`** (1 nodes): `Breadcrumb.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Category Section`** (1 nodes): `CategorySection.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Ingredients List`** (1 nodes): `IngredientsList.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Nutrition Block`** (1 nodes): `NutritionBlock.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Recipe Hero`** (1 nodes): `RecipeHero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Step Guide`** (1 nodes): `StepGuide.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `YouTube Embed`** (1 nodes): `YouTubeEmbed.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `SEO Property Tests`** (1 nodes): `seo.property.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Recipe Types`** (1 nodes): `types.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Validate Property Tests`** (1 nodes): `validate.property.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Seed Recipes Batch 1`** (1 nodes): `seed-more-recipes.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Seed Recipes Batch 3`** (1 nodes): `seed-recipes-batch3.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Seed Recipes Batch 2`** (1 nodes): `seed-recipes.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getRecipeBySlug()` connect `Database Layer (D1 Queries)` to `SEO & Recipe Metadata`, `AI Chatbot & YouTube API`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `POST()` connect `AI Chatbot & YouTube API` to `Database Layer (D1 Queries)`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `generateMetadata()` connect `SEO & Recipe Metadata` to `Database Layer (D1 Queries)`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `POST()` (e.g. with `getRecipeBySlug()` and `insertRecipe()`) actually correct?**
  _`POST()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `getRecipeBySlug()` (e.g. with `POST()` and `generateMetadata()`) actually correct?**
  _`getRecipeBySlug()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `generateMetadata()` (e.g. with `generateCategoryMetadata()` and `getRecipeBySlug()`) actually correct?**
  _`generateMetadata()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `RecipePage()` (e.g. with `getRecipeBySlug()` and `generateRecipeJsonLd()`) actually correct?**
  _`RecipePage()` has 2 INFERRED edges - model-reasoned connections that need verification._