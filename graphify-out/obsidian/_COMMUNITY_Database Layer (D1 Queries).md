---
type: community
cohesion: 0.31
members: 11
---

# Database Layer (D1 Queries)

**Cohesion:** 0.31 - loosely connected
**Members:** 11 nodes

## Members
- [[assertDb()]] - code - fixchef\lib\db.ts
- [[db.ts]] - code - fixchef\lib\db.ts
- [[getAllCategories()]] - code - fixchef\lib\db.ts
- [[getAllPublishedSlugs()]] - code - fixchef\lib\db.ts
- [[getRecipeBySlug()]] - code - fixchef\lib\db.ts
- [[getRecipeCountByCategory()]] - code - fixchef\lib\db.ts
- [[getRecipesByCategory()]] - code - fixchef\lib\db.ts
- [[insertRecipe()]] - code - fixchef\lib\db.ts
- [[rowToRecord()]] - code - fixchef\lib\db.ts
- [[sitemap()]] - code - fixchef\app\sitemap.ts
- [[sitemap.ts]] - code - fixchef\app\sitemap.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Database_Layer_(D1_Queries)
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_AI Chatbot & YouTube API]]
- 2 edges to [[_COMMUNITY_SEO & Recipe Metadata]]

## Top bridge nodes
- [[getRecipeBySlug()]] - degree 6, connects to 2 communities
- [[insertRecipe()]] - degree 3, connects to 1 community