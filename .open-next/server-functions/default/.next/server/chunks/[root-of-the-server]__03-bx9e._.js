module.exports=[18622,(e,t,i)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,i)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,i)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},62294,e=>{"use strict";function t(e){if(null==e)throw Error("D1 database binding (DB) not found in environment. Ensure the [[d1_databases]] binding is configured in wrangler.toml and the Pages dashboard.")}async function i(e,i){t(e);let r=await e.prepare("SELECT * FROM recipes WHERE slug = ? AND published = 1 LIMIT 1").bind(i).first();return r?{version:r.version,slug:r.slug,title:r.title,category:r.category,description:r.description,hero_image_url:r.hero_image_url,meta_title:r.meta_title,meta_description:r.meta_description,keywords:JSON.parse(r.keywords),ingredients:JSON.parse(r.ingredients),steps:JSON.parse(r.steps),nutrition:JSON.parse(r.nutrition),tips:JSON.parse(r.tips),youtube_query:r.youtube_query,youtube_video_id:r.youtube_video_id??void 0,prep_time:r.prep_time??void 0,cook_time:r.cook_time??void 0,total_time:r.total_time??void 0,difficulty:r.difficulty??void 0,servings:r.servings??void 0,related_recipes:r.related_recipes?JSON.parse(r.related_recipes):void 0,schema_markup:r.schema_markup??void 0,published:1===r.published}:null}async function r(e){t(e);let{results:i}=await e.prepare("SELECT slug FROM recipes WHERE published = 1 ORDER BY id DESC").all();return(i??[]).map(e=>e.slug)}async function s(e,i){t(e),await e.prepare(`INSERT INTO recipes (
        slug, version, title, category, description, hero_image_url,
        meta_title, meta_description, keywords, ingredients, steps, nutrition,
        tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
        difficulty, servings, related_recipes, schema_markup, published
      ) VALUES (
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?
      )
      ON CONFLICT(slug) DO UPDATE SET
        version          = excluded.version,
        title            = excluded.title,
        category         = excluded.category,
        description      = excluded.description,
        hero_image_url   = excluded.hero_image_url,
        meta_title       = excluded.meta_title,
        meta_description = excluded.meta_description,
        keywords         = excluded.keywords,
        ingredients      = excluded.ingredients,
        steps            = excluded.steps,
        nutrition        = excluded.nutrition,
        tips             = excluded.tips,
        youtube_query    = excluded.youtube_query,
        youtube_video_id = excluded.youtube_video_id,
        prep_time        = excluded.prep_time,
        cook_time        = excluded.cook_time,
        total_time       = excluded.total_time,
        difficulty       = excluded.difficulty,
        servings         = excluded.servings,
        related_recipes  = excluded.related_recipes,
        schema_markup    = excluded.schema_markup,
        published        = excluded.published,
        updated_at       = datetime('now')`).bind(i.slug,i.version,i.title,i.category,i.description,i.hero_image_url,i.meta_title,i.meta_description,JSON.stringify(i.keywords),JSON.stringify(i.ingredients),JSON.stringify(i.steps),JSON.stringify(i.nutrition),JSON.stringify(i.tips),i.youtube_query,i.youtube_video_id??null,i.prep_time??null,i.cook_time??null,i.total_time??null,i.difficulty??null,i.servings??null,JSON.stringify(i.related_recipes??[]),i.schema_markup??null,+!!i.published).run()}e.s(["getAllPublishedSlugs",0,r,"getRecipeBySlug",0,i,"insertRecipe",0,s])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__03-bx9e._.js.map